import Link from "next/link"
import { Button } from "@/components/ui/Button"
import { AppBar } from "./AppBar"
import { Post } from "./Post"
import { PlusIcon } from "lucide-react"
import { fetchRecentPost, fetchUser } from "@/lib/api";
import moment from "moment"
import React from 'react';

export interface RootProps {
  session: any
}
export const Root: React.FC<RootProps> = async ({ session }) => {
  const image = session ? session.user.image : ""
  const posts = await fetchRecentPost();
  const comps = posts?.map(async ({ title, text, userID, createdAt, likes, dislikes, _id }) => {
    const user = await fetchUser(userID.toString());
    if (!user) {
      return <></>
    }
    return (
      <Post
        title={title}
        id={_id.toString()}
        user={user}
        content={text}
        when={moment(createdAt).fromNow()}
        likes={likes}
        dislikes={dislikes}
      />
    );
  });

  return (
    <div key="1" className="flex flex-col min-h-screen bg-[#14181d]">
      <AppBar avatar={image} />
      <main className="container mx-auto mt-32 max-w-5xl px-4 md:px-6">
        <div className="grid gap-6">
          {comps}
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