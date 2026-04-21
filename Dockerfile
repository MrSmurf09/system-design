FROM node:24.14.0-alpine AS builder

WORKDIR /app

RUN --mount=type=cache,id=corepack,target=/root/.cache/node/corepack \
    corepack enable && corepack prepare pnpm@10.28.1 --activate

COPY microfrontends/packages/shared-types /packages/shared-types

COPY microfrontends/apps/system-design/src/package.json microfrontends/apps/system-design/src/pnpm-lock.yaml ./

RUN --mount=type=cache,id=pnpm,target=/root/.local/share/pnpm/store \
    pnpm install --frozen-lockfile

COPY microfrontends/apps/system-design/src .

ENV NODE_ENV=production

RUN pnpm run build

FROM nginx:1.29.8-alpine

WORKDIR /usr/share/nginx/html

RUN rm -rf ./*

COPY --from=builder /app/dist .

COPY microfrontends/apps/system-design/nginx/nginx.conf /etc/nginx/conf.d/default.conf

EXPOSE 80

STOPSIGNAL SIGTERM

ENTRYPOINT ["nginx", "-g", "daemon off;"]
