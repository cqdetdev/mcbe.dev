"use client";

import { Button } from "@/components/ui/Button";
import { BoldIcon, CodeIcon, ItalicIcon, LinkIcon, PaperclipIcon, StrikethroughIcon, UnderlineIcon } from "@/components/ui/Icons";
import { Input } from "@/components/ui/Input";
import { Label } from "@/components/ui/label";
import { Textarea } from "@/components/ui/textarea";
import Link from "next/link";
import { FormEvent, useState } from "react";

const PostForm = ({ session }) => {
    const [title, setTitle] = useState<string>();
    const [content, setContent] = useState<string>();
    const handleSubmit = (ev: FormEvent<HTMLFormElement>) => {
        ev.preventDefault();
        console.log(title, content)
    }

    return (
        <form className="space-y-4" onSubmit={handleSubmit}>
            <div>
                <Label className="text-white" htmlFor="title">
                    Title
                </Label>
                <Input
                    className="bg-[#14181d] border-gray-700 text-white focus:border-[#9a2026] focus:ring-[#9a2026]"
                    id="title"
                    placeholder="Enter a title for your post"
                    onChange={(e) => setTitle(e.target.value)}
                />
            </div>
            <div>
                <Label className="text-white" htmlFor="content">
                    <div className="flex items-center gap-2 mb-2">
                        <Button className="bg-[#14181d] border-gray-700 text-white focus:border-[#9a2026] focus:ring-[#9a2026]">
                            <BoldIcon className="h-4 w-4" />
                        </Button>
                        <Button className="bg-[#14181d] border-gray-700 text-white focus:border-[#9a2026] focus:ring-[#9a2026]">
                            <ItalicIcon className="h-4 w-4" />
                        </Button>
                        <Button className="bg-[#14181d] border-gray-700 text-white focus:border-[#9a2026] focus:ring-[#9a2026]">
                            <UnderlineIcon className="h-4 w-4" />
                        </Button>
                        <Button className="bg-[#14181d] border-gray-700 text-white focus:border-[#9a2026] focus:ring-[#9a2026]">
                            <StrikethroughIcon className="h-4 w-4" />
                        </Button>
                        <Button className="bg-[#14181d] border-gray-700 text-white focus:border-[#9a2026] focus:ring-[#9a2026]">
                            <LinkIcon className="h-4 w-4" />
                        </Button>
                        <Button className="bg-[#14181d] border-gray-700 text-white focus:border-[#9a2026] focus:ring-[#9a2026]">
                            <CodeIcon className="h-4 w-4" />
                        </Button>
                        <Button className="bg-[#14181d] border-gray-700 text-white focus:border-[#9a2026] focus:ring-[#9a2026]">
                            <PaperclipIcon className="h-4 w-4" />
                        </Button>
                    </div>
                    <Textarea
                        className="bg-[#14181d] border-gray-700 text-white focus:border-[#9a2026] focus:ring-[#9a2026] h-32"
                        id="content"
                        placeholder="Write your post content here..."
                        onChange={(e) => setContent(e.target.value)}
                    />
                </Label>
            </div>
            <div className="flex justify-end gap-2">
                <Link href="/">
                    <Button
                        className="text-[#9a2026] hover:bg-[#9a2026]/10 dark:text-[#9a2026] dark:hover:bg-[#9a2026]/20"
                        variant="outline"
                    >
                        Cancel
                    </Button>
                </Link>
                <Button
                    className="bg-[#9a2026] text-white hover:bg-[#9a2026]/90 dark:bg-[#9a2026] dark:hover:bg-[#9a2026]/90"
                    type="submit"
                >
                    Post
                </Button>

            </div>
        </form>
    )
}

export default PostForm;