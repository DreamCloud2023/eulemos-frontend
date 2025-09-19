export default function Hero() {
  return (
    <section className="relative overflow-hidden py-24 text-center">
      <div className="max-w-4xl mx-auto px-6">
        <h1 className="text-6xl md:text-7xl font-bold bg-gradient-to-r from-indigo-400 to-cyan-300 bg-clip-text text-transparent">
          Eulemos
        </h1>
        <p className="mt-6 text-lg text-gray-300">
          La plateforme d’orchestration d’agents IA. <br />
          Structure, Code, Documentation, Tests — réunis pour libérer ton potentiel.
        </p>
        <div className="mt-8 flex justify-center gap-4">
          <a href="/signup" className="px-6 py-3 bg-indigo-500 hover:bg-indigo-600 rounded-xl font-semibold">
            Créer un compte
          </a>
          <a href="/login" className="px-6 py-3 border border-gray-600 rounded-xl font-semibold hover:bg-gray-800">
            Se connecter
          </a>
        </div>
      </div>
      <div className="absolute inset-0 -z-10 bg-[radial-gradient(ellipse_at_center,rgba(59,130,246,0.15),transparent_70%)]"></div>
    </section>
  )
}
