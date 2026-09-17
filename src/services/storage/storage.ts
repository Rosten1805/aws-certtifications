import { LocalStorageAdapter } from './LocalStorageAdapter'
import type { StorageAdapter } from './StorageAdapter'

/**
 * Punto único de acceso al almacenamiento. Hoy usa localStorage; el día que se
 * quiera migrar a Supabase (u otro backend), basta con sustituir esta instancia
 * por un adaptador que implemente StorageAdapter, sin tocar el resto de la app.
 */
export const storage: StorageAdapter = new LocalStorageAdapter()
