import { useEffect } from 'react'

export interface KeyboardShortcutMap {
  [key: string]: (event: KeyboardEvent) => void
}

export function useKeyboardShortcuts(handlers: KeyboardShortcutMap, enabled = true) {
  useEffect(() => {
    if (!enabled) return

    function onKeyDown(event: KeyboardEvent) {
      const target = event.target as HTMLElement | null
      const tag = target?.tagName
      if (tag === 'INPUT' || tag === 'TEXTAREA' || target?.isContentEditable) return

      const handler = handlers[event.key]
      if (handler) {
        handler(event)
      }
    }

    window.addEventListener('keydown', onKeyDown)
    return () => window.removeEventListener('keydown', onKeyDown)
    // eslint-disable-next-line react-hooks/exhaustive-deps
  }, [enabled, handlers])
}
