"use client"

import { Moon, Sun } from "lucide-react"
import { useTheme } from "next-themes"
import { Button } from "@/components/ui/button"

export function ThemeToggle() {
  const { setTheme } = useTheme()

  return (
    <div className="flex space-x-1">
      <Button
        variant="outline"
        size="icon"
        className="h-6 w-6 bg-transparent border-gray-700"
        onClick={() => setTheme("light")}
      >
        <Sun className="h-3 w-3" />
        <span className="sr-only">Light mode</span>
      </Button>
      <Button
        variant="outline"
        size="icon"
        className="h-6 w-6 bg-transparent border-gray-700"
        onClick={() => setTheme("dark")}
      >
        <Moon className="h-3 w-3" />
        <span className="sr-only">Dark mode</span>
      </Button>
    </div>
  )
}

