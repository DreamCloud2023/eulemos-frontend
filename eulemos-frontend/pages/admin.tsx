import Navbar from "../components/Navbar"

export default function Admin() {
  const users = [
    { id: 1, email: "alice@demo.com", role: "user", quota: 10 },
    { id: 2, email: "bob@demo.com", role: "admin", quota: "illimité" },
  ]

  return (
    <div className="bg-[#050816] text-white min-h-screen">
      <Navbar />
      <div className="max-w-6xl mx-auto px-6 py-12">
        <h1 className="text-3xl font-bold mb-6">Administration — Utilisateurs</h1>
        <table className="w-full border border-gray-700 rounded-lg overflow-hidden">
          <thead className="bg-[#111831]">
            <tr>
              <th className="p-3 text-left">Email</th>
              <th className="p-3">Rôle</th>
              <th className="p-3">Quota</th>
            </tr>
          </thead>
          <tbody>
            {users.map(u => (
              <tr key={u.id} className="border-t border-gray-700">
                <td className="p-3">{u.email}</td>
                <td className="p-3">{u.role}</td>
                <td className="p-3 text-center">{u.quota}</td>
              </tr>
            ))}
          </tbody>
        </table>
      </div>
    </div>
  )
}
