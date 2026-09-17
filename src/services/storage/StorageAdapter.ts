/**
 * Contrato de almacenamiento clave-valor asíncrono.
 * Cualquier backend (localStorage, Supabase, etc.) debe implementar esta interfaz
 * para que el resto de la aplicación pueda ser agnóstica al almacenamiento real.
 */
export interface StorageAdapter {
  getItem<T>(key: string): Promise<T | null>
  setItem<T>(key: string, value: T): Promise<void>
  removeItem(key: string): Promise<void>
}
