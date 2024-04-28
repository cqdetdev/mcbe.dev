
import React from "react";
import { Button } from "./ui/Button";
import { UserIcon, CalendarDaysIcon, ChevronDownIcon, ThumbsUpIcon, ThumbsDownIcon } from "./ui/Icons";
import { Collapsible, CollapsibleContent, CollapsibleTrigger } from "./ui/Collapsible";
import { ChevronRightCircle } from "lucide-react";
import User from "@/server/database/entities/User";
import { Avatar, AvatarFallback, AvatarImage } from "./ui/Avatar";

export interface PostProps {
    title: string
    id: string
    user: User
    when: string
    content: string
    likes: number
    dislikes: number
}

export const Post: React.FC<PostProps> = ({ title, user, when, content, likes, dislikes, id }) => (
    <Collapsible className="rounded-lg border border-gray-200 bg-[#14181d] shadow-lg dark:border-gray-800 dark:bg-[#14181d]">
        <CollapsibleTrigger className="flex items-center justify-between gap-4 px-6 py-4">
            <div className="space-y-1 left-1">
                <h3 className="text-lg font-semibold text-white text-left">{title}</h3>
                <div className="flex items-center gap-2 text-sm text-gray-400">
                    <Avatar className="h-4 w-4">
                        <AvatarImage alt="Profile Picture" src={user.avatar} />
                        <AvatarFallback>JP</AvatarFallback>
                    </Avatar>
                    <span>{user.username}</span>
                    <CalendarDaysIcon className="h-4 w-4" />
                    <span>{when}</span>
                </div>
                <div className="flex items-center gap-2 text-sm text-gray-400">
                    <ThumbsUpIcon className="h-4 w-4 text-[#035428]" />
                    <span>{likes}</span>
                    <ThumbsDownIcon className="h-4 w-4 text-[#9a2026]" />
                    <span>{dislikes}</span>
                </div>
            </div>
            <CollapsibleTrigger asChild>
                <Button size="icon" variant="ghost">
                    <ChevronRightCircle className="h-5 w-5 transition-transform [&[data-state=open]]:rotate-180 text-white " />
                </Button>
            </CollapsibleTrigger>
        </CollapsibleTrigger>
        <CollapsibleContent className="px-6 py-4">
            <p className="text-gray-400">
                {content}
            </p>
            <div className="mt-4 flex justify-end">
                <a href={`/posts/${id}`}>
                    <Button
                        className="bg-[#9a2136] hover:bg-[#9a2026]/50 text-white dark:hover:bg-[#9a2026]/50"
                        variant="outline"
                    >
                        Read More
                    </Button>
                </a>

            </div>
        </CollapsibleContent>
    </Collapsible>
)