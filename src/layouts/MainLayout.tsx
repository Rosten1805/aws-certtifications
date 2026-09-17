import { Outlet } from 'react-router-dom'
import Header from '@/components/layout/Header'
import Footer from '@/components/layout/Footer'

export default function MainLayout() {
  return (
    <div className="flex min-h-screen flex-col bg-surface-0 text-text-primary">
      <Header />
      <main className="mx-auto w-full max-w-[1440px] flex-1 px-6 pb-16 pt-8 sm:px-10 lg:px-16">
        <Outlet />
      </main>
      <Footer />
    </div>
  )
}
