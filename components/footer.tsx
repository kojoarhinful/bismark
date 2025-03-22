import { Github } from "lucide-react"
import Link from "next/link"

export default function Footer() {
  return (
    <footer className="border-t border-gray-800 dark:border-gray-800 light:border-gray-200 py-3 fixed bottom-0 left-0 right-0 dark:bg-[#121212] bg-white z-10">
      <div className="max-w-3xl mx-auto px-4 w-full flex justify-between items-center">
        <Link href="https://github.com/kojoarhinful/site" aria-label="GitHub" target="_blank" rel="noopener noreferrer">
          <Github size={16} className="text-gray-400 hover:text-gray-600 dark:hover:text-gray-200" />
        </Link>
        <div className="text-gray-400 text-xs">MMXXV</div>
      </div>
    </footer>
  )
}

