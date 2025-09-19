import Link from "next/link"

export default function Navbar() {
  return (
    <header className="flex justify-between items-center px-6 py-4 border-b border-gray-800 bg-[#0b1020]/80 backdrop-blur-md sticky top-0 z-50">
      <div className="flex items-center gap-2">
        <span className="text-2xl font-bold bg-gradient-to-r from-indigo-400 to-cyan-300 bg-clip-text text-transparent">
          Eulemos
        </span>
      </div>
      <nav className="flex gap-6">
        <Link href="/" className="hover:text-indigo-400">Accueil</Link>
        <Link href="/dashboard" className="hover:text-indigo-400">Orchestrateurs</Link>
        <Link href="/login" className="px-4 py-2 border border-gray-700 rounded-lg hover:bg-gray-800">Se connecter</Link>
      </nav>
    </header>
  )
}
