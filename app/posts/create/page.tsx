import Link from "next/link"
import { Input } from "@/components/ui/Input"
import { AvatarImage, AvatarFallback, Avatar } from "@/components/ui/avatar"
import { Button } from "@/components/ui/Button"
import { DropdownMenuTrigger, DropdownMenuItem, DropdownMenuSeparator, DropdownMenuContent, DropdownMenu } from "@/components/ui/DropdownMenu"
import { Label } from "@/components/ui/label"
import { Textarea } from "@/components/ui/textarea"
import { ToyBrickIcon, SearchIcon, UserIcon, SettingsIcon, LogOutIcon, BoldIcon, ItalicIcon, UnderlineIcon, StrikethroughIcon, LinkIcon, CodeIcon, PaperclipIcon, FileWarningIcon } from "lucide-react"
import { getServerSession } from "next-auth"
import { redirect } from "next/navigation"
import handler from "@/app/api/user/route"
import { AppBar } from "@/components/AppBar"
import { FormEvent } from "react"
import PostForm from "./PostForm"

const CreatePost = async () => {
    const session = await getServerSession(handler);
    if (!session) {
        redirect("/sign-in");
    }

    const { user } = session;
    const { name, email, image } = user;
    return (
        <div key="1" className="flex flex-col min-h-screen bg-[#14181d]">
            <AppBar avatar={image} />
            <main className="container mx-auto mt-20 max-w-5xl px-4 md:px-6">
                <div className="rounded-lg border border-gray-200 bg-[#14181d] p-6 shadow-lg dark:border-gray-800 dark:bg-[#14181d]">
                    <h1 className="mb-4 text-2xl font-bold text-white">Create a New Post</h1>
                    <PostForm session={session} />
                    <div className="mt-6 rounded-md bg-yellow-50 p-4 dark:bg-yellow-900/20">
                        <div className="flex items-start">
                            <FileWarningIcon className="mr-3 h-5 w-5 flex-shrink-0 text-yellow-600 dark:text-yellow-300" />
                            <div className="flex-1">
                                <h3 className="text-sm font-medium text-yellow-800 dark:text-yellow-300">Caution</h3>
                                <div className="mt-2 text-sm text-yellow-700 dark:text-yellow-200">
                                    <p>
                                        By posting, you agree to the terms of this website and understand that you are responsible for the
                                        content you submit. Do not post any profane, offensive, or illegal content.
                                    </p>
                                </div>
                            </div>
                        </div>
                    </div>
                </div>
            </main >
        </div >
    )
}

export default CreatePost;