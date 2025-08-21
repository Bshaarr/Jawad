import { Link, Outlet } from 'react-router-dom'

export default function App() {
  return (
    <div className="min-h-dvh flex flex-col bg-bg text-text">
      <header className="sticky top-0 z-50 bg-bg/70 backdrop-blur border-b border-white/10">
        <div className="mx-auto max-w-7xl px-4 h-16 flex items-center justify-between">
          <Link to="/" className="text-xl font-extrabold tracking-wide bg-gradient-to-r from-[#e8e0c5] via-accent to-[#8e7b3b] bg-clip-text text-transparent">
            هنا سوريا
          </Link>
          <nav className="flex gap-3">
            <Link className="px-3 py-1.5 rounded-full border border-white/10 hover:bg-white/5" to="/">المحافظات</Link>
          </nav>
        </div>
      </header>
      <main className="flex-1">
        <Outlet />
      </main>
      <footer className="border-t border-white/10 py-6 text-center text-muted text-sm">
        © {new Date().getFullYear()} هنا سوريا
      </footer>
    </div>
  )
}
