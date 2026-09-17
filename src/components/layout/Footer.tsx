export default function Footer() {
  const year = new Date().getFullYear()

  return (
    <footer className="border-t border-surface-2">
      <div className="mx-auto flex w-full max-w-[1440px] flex-col items-center gap-2 px-6 py-8 text-center text-xs text-text-muted sm:flex-row sm:justify-between sm:px-10 sm:text-left lg:px-16">
        <p>
          © {year} CloudPrep · Banco de preguntas elaborado por{' '}
          <a
            href="https://cristinagomez-limon.com/"
            target="_blank"
            rel="noreferrer"
            className="focus-ring rounded text-text-secondary underline decoration-surface-3 underline-offset-4 transition-colors hover:text-text-primary"
          >
            Cristina Cañadas
          </a>
        </p>
        <a
          href="https://cristinagomez-limon.com/"
          target="_blank"
          rel="noreferrer"
          className="focus-ring rounded text-text-secondary transition-colors hover:text-text-primary"
        >
          cristinagomez-limon.com
        </a>
      </div>
    </footer>
  )
}
