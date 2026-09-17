import type { StorageAdapter } from './StorageAdapter'

export class LocalStorageAdapter implements StorageAdapter {
  async getItem<T>(key: string): Promise<T | null> {
    try {
      const raw = window.localStorage.getItem(key)
      if (raw === null) return null
      return JSON.parse(raw) as T
    } catch (error) {
      console.error(`[LocalStorageAdapter] Error leyendo "${key}"`, error)
      return null
    }
  }

  async setItem<T>(key: string, value: T): Promise<void> {
    try {
      window.localStorage.setItem(key, JSON.stringify(value))
    } catch (error) {
      console.error(`[LocalStorageAdapter] Error escribiendo "${key}"`, error)
    }
  }

  async removeItem(key: string): Promise<void> {
    try {
      window.localStorage.removeItem(key)
    } catch (error) {
      console.error(`[LocalStorageAdapter] Error eliminando "${key}"`, error)
    }
  }
}
