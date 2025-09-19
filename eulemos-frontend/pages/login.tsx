import Navbar from "../components/Navbar"

export default function Login() {
  return (
    <div className="bg-gradient-to-b from-[#050816] to-[#0b1020] text-white min-h-screen">
      <Navbar />
      <div className="flex items-center justify-center min-h-[80vh] px-6">
        <div className="bg-[#111831] p-8 rounded-xl shadow-lg w-full max-w-md">
          <h1 className="text-2xl font-bold mb-6 text-center">Connexion à Eulemos</h1>
          <form className="space-y-4">
            <input type="email" placeholder="Email" className="w-full px-4 py-3 rounded-lg bg-[#0d1430] border border-gray-700 focus:border-indigo-500" />
            <input type="password" placeholder="Mot de passe" className="w-full px-4 py-3 rounded-lg bg-[#0d1430] border border-gray-700 focus:border-indigo-500" />
            <button type="submit" className="w-full px-4 py-3 rounded-lg bg-indigo-500 hover:bg-indigo-600 font-semibold">
              Se connecter
            </button>
          </form>
          <p className="text-sm text-gray-400 mt-4 text-center">
            Pas encore de compte ? <a href="/signup" className="text-indigo-400 hover:underline">Inscris-toi</a>
          </p>
        </div>
      </div>
    </div>
  )
}
