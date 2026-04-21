import { useCallback, useEffect, useRef } from "react";
import { EventBus } from "@bengali/shared-types";
import type { EventCallback, eventTypes } from "@bengali/shared-types";

export const useEventListener = <K extends keyof eventTypes>(
  event: K,
  callback: EventCallback<K>,
): void => {
  const callbackRef = useRef<EventCallback<K>>(callback);

  useEffect(() => {
    callbackRef.current = callback;
  }, [callback]);

  useEffect(() => {
    const stableHandler: EventCallback<K> = ((...args: any[]) => {
      (callbackRef.current as any)(...args);
    }) as EventCallback<K>;

    EventBus.on(event, stableHandler);
    return () => EventBus.remove(event, stableHandler);
  }, [event]);
};

export const useEventDispatch = () => {
  return useCallback(
    <K extends keyof eventTypes>(
      event: K,
      ...args: eventTypes[K] extends undefined ? [] : [payload: eventTypes[K]]
    ) => {
      EventBus.dispatch(event, ...(args as any));
    },
    [],
  );
};

export function useEventBus() {
  const dispatch = useEventDispatch();
  return { dispatch, on: useEventListener };
}
