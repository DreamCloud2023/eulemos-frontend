import OrchestratorCard from "../components/OrchestratorCard"

export default function Dashboard() {
  const orchestrators = [
    { id: "forge-code", title: "Forge Code", desc: "Structure → Code → Docs → Tests", img: "/images/code.png" },
    { id: "ghost-writer", title: "Ghost Writer", desc: "Docs techniques propres", img: "/images/docs.png" },
    { id: "testsmith", title: "TestSmith", desc: "Plans & tests auto", img: "/images/tests.png" },
  ]

  return (
    <div className="bg-gradient-to-b from-[#050816] to-[#0b1020] text-white min-h-screen px-6 py-12">
      <h1 className="text-3xl font-bold mb-8">🎬 Catalogue d’orchestrateurs</h1>
      <div className="grid md:grid-cols-3 gap-8">
        {orchestrators.map(o => (
          <OrchestratorCard key={o.id} {...o} />
        ))}
      </div>
    </div>
  )
}
