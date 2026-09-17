import { useEffect, useRef, useState } from 'react'

/**
 * Cuenta atrás basada en un cálculo por timestamp (no en un simple decremento),
 * para que sea resistente a recargas de página y cambios de pestaña.
 */
export function useCountdown(getRemainingSeconds: () => number, active: boolean, onExpire?: () => void) {
  const [remaining, setRemaining] = useState(getRemainingSeconds)
  const expiredRef = useRef(false)

  useEffect(() => {
    setRemaining(getRemainingSeconds())
    if (!active) return

    const interval = window.setInterval(() => {
      const value = getRemainingSeconds()
      setRemaining(value)
      if (value <= 0 && !expiredRef.current) {
        expiredRef.current = true
        onExpire?.()
      }
    }, 1000)

    return () => window.clearInterval(interval)
    // eslint-disable-next-line react-hooks/exhaustive-deps
  }, [active])

  return remaining
}
