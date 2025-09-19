import Link from "next/link"

type Props = {
  id: string
  title: string
  desc: string
  img: string
}

export default function OrchestratorCard({ id, title, desc, img }: Props) {
  return (
    <Link href={`/orchestrator/${id}`} className="bg-[#111831] p-4 rounded-xl border border-gray-700 hover:shadow-xl transition block">
      <img src={img} alt={title} className="rounded-md mb-4" />
      <h3 className="text-xl font-semibold">{title}</h3>
      <p className="text-gray-400 text-sm mt-2">{desc}</p>
    </Link>
  )
}
