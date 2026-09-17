import { useState } from 'react'
import { NavLink } from 'react-router-dom'
import { Menu, X } from 'lucide-react'

const LOGO_SRC = '/logotipo-cristina-portfolio-white.webp'

const NAV_ITEMS = [
  { to: '/', label: 'Inicio', end: true },
  { to: '/bank', label: 'Banco de preguntas', end: false },
  { to: '/smart-review', label: 'Repaso inteligente', end: false },
  { to: '/exam', label: 'Simulacro', end: false },
  { to: '/stats', label: 'Mi progreso', end: false },
]

function navLinkClasses(isActive: boolean) {
  return [
    'rounded-lg px-3 py-2 text-sm font-medium transition-colors focus-ring',
    isActive ? 'bg-surface-2 text-text-primary' : 'text-text-secondary hover:text-text-primary hover:bg-surface-1',
  ].join(' ')
}

export default function Header() {
  const [menuOpen, setMenuOpen] = useState(false)

  return (
    <header className="sticky top-0 z-40 border-b border-surface-2 bg-surface-0/95 backdrop-blur">
      <div className="mx-auto flex h-20 w-full max-w-[1440px] items-center justify-between px-6 sm:px-10 lg:px-16">
        <NavLink to="/" className="focus-ring flex items-center rounded-lg" end>
          <img src={LOGO_SRC} alt="Cristina Cañadas" className="h-9 w-auto sm:h-10" />
        </NavLink>

        <nav className="hidden items-center gap-1 md:flex" aria-label="Navegación principal">
          {NAV_ITEMS.map((item) => (
            <NavLink
              key={item.to}
              to={item.to}
              end={item.end}
              className={({ isActive }) => navLinkClasses(isActive)}
            >
              {item.label}
            </NavLink>
          ))}
        </nav>

        <button
          type="button"
          className="focus-ring flex h-10 w-10 items-center justify-center rounded-lg text-text-secondary hover:bg-surface-1 md:hidden"
          aria-label={menuOpen ? 'Cerrar menú' : 'Abrir menú'}
          aria-expanded={menuOpen}
          onClick={() => setMenuOpen((v) => !v)}
        >
          {menuOpen ? <X size={20} strokeWidth={1.75} /> : <Menu size={20} strokeWidth={1.75} />}
        </button>
      </div>

      {menuOpen && (
        <nav className="border-t border-surface-2 bg-surface-0 px-4 py-3 md:hidden" aria-label="Navegación móvil">
          <div className="flex flex-col gap-1">
            {NAV_ITEMS.map((item) => (
              <NavLink
                key={item.to}
                to={item.to}
                end={item.end}
                onClick={() => setMenuOpen(false)}
                className={({ isActive }) => navLinkClasses(isActive)}
              >
                {item.label}
              </NavLink>
            ))}
          </div>
        </nav>
      )}
    </header>
  )
}
