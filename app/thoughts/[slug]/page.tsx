import { notFound } from "next/navigation"
import Link from "next/link"

// This would typically come from a database or CMS
const posts = [
  {
    slug: "whats-the-point",
    title: "what's the point",
    date: "Mar 14, 2025",
    readTime: "2 min read",
    content: `Alright, so I’ve got this page up now. “Check mic” was me testing the waters, and it felt good to hit publish. But now that I’m here, I’ve been thinking what’s the point of all this? Why am I even bothering to write stuff down and throw it out into the void?

  
I guess part of it is just me trying to make sense of things. Life’s messy, right? There’s so much going on work, random ideas, stuff I’m learning, dumb things that annoy me and I’ve always liked writing as a way to untangle it all. Having this spot feels like a little base, somewhere I can drop my thoughts and not just let them float away. Maybe I’ll look back in a year and see how far I’ve come. Or maybe I’ll just laugh at how dramatic I was being. Either way, it’s mine.

Another part is that I kinda want to share. Not in some big “look at me” way, but more like… if something I figure out helps someone else, that’d be cool. I’ve spent so much time scrolling other people’s posts, picking up bits of wisdom or just nodding along to their rants. Maybe I can toss something useful into the mix too. Or at least something that makes someone go, “Huh, yeah, I get that.”

And honestly? It’s fun. Messing with this page, tweaking it, writing whatever pops into my head, it’s a nice break from everything else. I don’t have to overthink it or make it perfect. It’s just me, a keyboard, and some thoughts. No pressure, no rules.

So yeah, that’s the point, I guess. It’s a mix of selfish and not-so selfish reasons. A place to think out loud, keep track of my own mess, and maybe connect with a few people along the way. We’ll see where it goes. For now, I’m just gonna keep writing and figure it out as I roll.`,
  },
  {
    slug: "check-mic",
    title: "check mic",
    date: "Mar 12, 2025",
    readTime: "1 min read",
    content: `For a good while now, I’ve been working on making a little spot for myself online. I wanted a place where I could write down what I’m learning, share some personal thoughts, and just keep track of things that matter to me. It’s been a bit of a journey, but guess what? I finally got it done 😅.
    It feels good to have my own space set up after messing around with ideas for so long.

I want to give a huge thanks to [Ephraim Duncan](https://twitter.com/EphraimDuncan_) for his work on his portfolio. It's simple for my needs, just had to look at the UI and recreate some stuff myself (took me three days) and finally we are here.

So yeah, this is my little corner now! I’m excited to start using it more. Here’s to writing lots of posts, maybe some random rants when I feel like it, and sharing lessons I pick up along the way. Looking forward to filling this space with all sorts of things.`
  },
  {
    slug: "learning-to-code",
    title: "learning to code",
    date: "Mar 15, 2025",
    readTime: "3 min read",
    content: `So I’ve been diving into coding more seriously lately, and man, it’s a trip. Started with some basic HTML and CSS, which felt pretty straightforward, but then I hit JavaScript and it’s like a whole new world opened up. There’s something satisfying about making things work, even if it’s just a button that changes color.

The tough part? Debugging. I spent like two hours yesterday trying to figure out why my loop wasn’t running, only to realize I’d missed a semicolon. A SEMICOLON. But when it finally clicked? Pure gold. I’m starting to get why people get hooked on this stuff.

Still early days, but I’m thinking about messing with React next. Seems like that’s where the cool kids hang out. Any tips welcome!`
  },
  {
    slug: "coffee-rant",
    title: "coffee rant",
    date: "Mar 16, 2025",
    readTime: "1 min read",
    content: `Okay, can we talk about coffee prices? I went to this new place today, and they wanted $7 for a latte. SEVEN DOLLARS. I could buy a whole bag of beans for that and make my own for a week. 

I get it, inflation and all, but come on. It’s hot water and beans, not liquid gold. Anyway, I paid it because I’m weak and needed caffeine, but I’m mad about it. Back to my cheap drip machine tomorrow.`
  }
]

export default function ThoughtPage({ params }: { params: { slug: string } }) {
  const post = posts.find((post) => post.slug === params.slug)

  if (!post) {
    return notFound()
  }

  return (
    <div>
      <h1 className="text-lg font-light mb-2">{post.title}</h1>
      <div className="flex items-center text-gray-400 dark:text-gray-400 light:text-gray-600 mb-6">
        <span className="text-xs">{post.date}</span>
        <span className="mx-2 text-xs">•</span>
        <span className="text-xs">{post.readTime}</span>
      </div>

      <div className="prose prose-invert max-w-none dark:prose-invert light:prose-gray">
        {post.content.split("\n\n").map((paragraph, index) => {
          if (paragraph.includes("[") && paragraph.includes("](")) {
            const linkRegex = /\[([^\]]+)\]\(([^)]+)\)/g
            const parts = []
            let lastIndex = 0
            let match

            while ((match = linkRegex.exec(paragraph)) !== null) {
              if (match.index > lastIndex) {
                parts.push(paragraph.substring(lastIndex, match.index))
              }

              if (match[2].includes("twitter.com/EphraimDuncan_")) {
                parts.push(
                  <a
                    key={match[2]}
                    href={match[2]}
                    target="_blank"
                    rel="noopener noreferrer"
                    className="underline text-black dark:text-white hover:text-gray-700 dark:hover:text-gray-300"
                  >
                    {match[1]}
                  </a>
                )
              } else {
                parts.push(
                  <Link key={match[2]} href={match[2]} className="underline">
                    {match[1]}
                  </Link>
                )
              }

              lastIndex = match.index + match[0].length
            }

            if (lastIndex < paragraph.length) {
              parts.push(paragraph.substring(lastIndex))
            }

            return (
              <p key={index} className="mb-4 text-sm leading-relaxed dark:text-gray-300 light:text-gray-800">
                {parts}
              </p>
            )
          }

          return (
            <p key={index} className="mb-4 text-sm leading-relaxed dark:text-gray-300 light:text-gray-800">
              {paragraph}
            </p>
          )
        })}
      </div>

      <div className="mt-8 pt-4 border-t border-gray-800">
        <Link href="/thoughts" className="text-sm text-gray-400 dark:text-gray-400 light:text-gray-600">
          ← Back to thoughts
        </Link>
      </div>
    </div>
  )
}
