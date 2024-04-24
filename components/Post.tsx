
import React from "react";
import { Button } from "./ui/Button";
import { UserIcon, CalendarDaysIcon, ChevronDownIcon } from "./ui/Icons";
import { Collapsible, CollapsibleContent, CollapsibleTrigger } from "./ui/Collapsible";

export interface PostProps {
    title: string
    author: string
    when: string
    content: string
}

export const Post: React.FC<PostProps> = ({ title, author, when, content }) => (
    <Collapsible className="rounded-lg border border-gray-200 bg-[#14181d] shadow-lg dark:border-gray-800 dark:bg-[#14181d]">
        <CollapsibleTrigger className="flex items-center justify-between gap-4 px-6 py-4">
            <div className="space-y-1">
                <h3 className="text-lg font-semibold text-white">{title}</h3>
                <div className="flex items-center gap-2 text-sm text-gray-400">
                    <UserIcon className="h-4 w-4" />
                    <span>{author}</span>
                    <CalendarDaysIcon className="h-4 w-4" />
                    <span>{when}</span>
                </div>
            </div>
            <CollapsibleTrigger asChild>
                <Button size="icon" variant="ghost">
                    <ChevronDownIcon className="h-5 w-5 transition-transform [&[data-state=open]]:rotate-180 text-white " />
                </Button>
            </CollapsibleTrigger>
        </CollapsibleTrigger>
        <CollapsibleContent className="px-6 py-4">
            <p className="text-gray-400">
                {content}
            </p>
            <div className="mt-4 flex justify-end">
                <Button
                    className="bg-[#9a2136] hover:bg-[#9a2026]/50 text-white dark:hover:bg-[#9a2026]/50"
                    variant="outline"
                >
                    Read More
                </Button>
            </div>
        </CollapsibleContent>
    </Collapsible>
)