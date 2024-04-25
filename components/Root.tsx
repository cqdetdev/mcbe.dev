"use client";
import Link from "next/link"
import { Input } from "@/components/ui/Input"
import { Button } from "@/components/ui/Button"
import { CollapsibleTrigger, CollapsibleContent, Collapsible } from "@/components/ui/Collapsible"
import { JSX, SVGProps } from "react"
import { AppBar } from "./AppBar"
import { UserIcon, CalendarDaysIcon, ChevronDownIcon } from "./ui/Icons"
import { Post } from "./Post"
import { PlusIcon } from "lucide-react"
import { getServerSession } from "next-auth"
import { redirect } from "next/navigation"
import handler from "@/app/api/user/route"

export interface RootProps {
  session: any
}
export const Root: React.FC<RootProps> = ({ session }) => {
  const image = session ? session.user.image : ""

  return (
    <div key="1" className="flex flex-col min-h-screen bg-[#14181d]">
      <AppBar avatar={image} />
      <main className="container mx-auto mt-32 max-w-5xl px-4 md:px-6">
        <div className="grid gap-6">
          <Post title="Minecraft Anticheats Explained" author="coEthaniccc" content="Over the last few years, I've been studying the MCPE Protocol as well as MCBE documentation for developing anticheats in MCBE. I'd like to share some knowledge on how internally MCBE handles server-authoritative movement and among other things that are important to anticheats." when="1 day ago" />
        </div>
        <div className="fixed bottom-4 left-4 z-50" >
          <Link className="text-sm font-medium text-white hover:text-[#9a2136] dark:hover:text-[#9a2136]" href="/posts/create">
            <Button className="rounded-full bg-[#9a2026] p-4 text-white shadow-lg hover:bg-[#9a2026]/90 dark:bg-[#9a2026] dark:hover:bg-[#9a2026]/90" >
              <PlusIcon className="h-6 w-6" />
              <span className="sr-only" >New Post</span>
            </Button>
          </Link>
        </div>
      </main>
    </div>
  )
}