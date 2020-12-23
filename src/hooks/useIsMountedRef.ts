import { MutableRefObject, useEffect, useRef } from 'react'

export function useIsMountedRef(): MutableRefObject<boolean> {
  const isMounted = useRef<boolean>(true)

  useEffect(
    () => (): void => {
      isMounted.current = false
    },
    [],
  )

  return isMounted
}
