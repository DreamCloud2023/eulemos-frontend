import Navbar from "../components/Navbar"
import Hero from "../components/Hero"
import Footer from "../components/Footer"

export default function Home() {
  return (
    <div className="bg-gradient-to-b from-[#050816] to-[#0b1020] text-white min-h-screen flex flex-col">
      <Navbar />
      <Hero />
      <main className="max-w-5xl mx-auto px-6 py-16">
        <h2 className="text-3xl font-bold mb-6 text-center">Pourquoi Eulemos ?</h2>
        <p className="text-gray-300 text-lg text-center mb-10">
          Eulemos est une plateforme d’orchestration d’IA qui combine plusieurs agents spécialisés :
          <br />Structure · Code · Documentation · Tests.
        </p>
        <div className="grid md:grid-cols-3 gap-8">
          <div className="p-6 rounded-xl bg-[#111831] border border-gray-700 hover:shadow-lg transition">
            <h3 className="text-xl font-semibold mb-2">Structure</h3>
            <p className="text-gray-400 text-sm">Conçois ton projet avec une architecture claire et scalable.</p>
          </div>
          <div className="p-6 rounded-xl bg-[#111831] border border-gray-700 hover:shadow-lg transition">
            <h3 className="text-xl font-semibold mb-2">Code</h3>
            <p className="text-gray-400 text-sm">Génère du code robuste et optimisé, adapté à ton besoin.</p>
          </div>
          <div className="p-6 rounded-xl bg-[#111831] border border-gray-700 hover:shadow-lg transition">
            <h3 className="text-xl font-semibold mb-2">Documentation</h3>
            <p className="text-gray-400 text-sm">Reçois des docs précises pour comprendre et partager ton projet.</p>
          </div>
        </div>
      </main>
      <Footer />
    </div>
  )
}
