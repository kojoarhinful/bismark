import Link from "next/link"

const thoughts = [
  {
    title: "what's the point",
    date: "Mar 14, 2025",
    slug: "whats-the-point",
  },
  {
    title: "check mic",
    date: "Mar 12, 2025",
    slug: "check-mic",
  },
]

export default function ThoughtsPage() {
  return (
    <div>
      <h1 className="text-lg font-light mb-2">thoughts</h1>
      <p className="text-sm text-gray-400 dark:text-gray-400 light:text-gray-600 mb-6">My words, my experience. If something is confusing let me know. If you find anything helpful consider sharing it.</p>

      <div className="space-y-0">
        {thoughts.map((thought, index) => (
          <div key={thought.slug} className="border-t border-gray-800 py-3">
            <div className="flex justify-between items-center">
              <Link href={`/thoughts/${thought.slug}`} className="text-sm">
                {thought.title}
              </Link>
              <span className="text-xs text-gray-400 dark:text-gray-400 light:text-gray-600">{thought.date}</span>
            </div>
          </div>
        ))}
      </div>
    </div>
  )
}

