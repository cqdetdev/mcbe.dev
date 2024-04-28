"use client";
import { AppBar } from "@/components/AppBar"
import { Button } from "@/components/ui/Button"
import { CheckIcon, GithubIcon } from "@/components/ui/Icons"
import { signIn } from "next-auth/react"

export default function SignIn() {
    return (
        <div className="flex flex-col min-h-screen bg-[#14181d]">
            <AppBar />
            <main className="container mx-auto mt-20 max-w-5xl px-4 md:px-6 flex-1 flex items-center justify-center">
                <div className="bg-[#14181d] rounded-lg border border-gray-200 shadow-lg dark:border-gray-800 w-full max-w-md p-6">
                    <div className="space-y-4">
                        <div className="space-y-2">
                            <h1 className="text-2xl font-bold text-white">Sign in with GitHub</h1>
                            <p className="text-gray-400">Connect your GitHub account to more features on mcbe.dev</p>
                        </div>
                        <Button className="w-full" variant="outline" onClick={async () => {
                            await signIn("github", { callbackUrl: "/account" })
                        }}>
                            <GithubIcon className="mr-2 h-5 w-5" />
                            Sign in with GitHub
                        </Button>
                        <div className="space-y-2">
                            <h2 className="text-lg font-semibold text-white">Perks of Signing In</h2>
                            <ul className="space-y-2 text-gray-400">
                                <li className="flex items-start gap-2">
                                    <CheckIcon className="h-5 w-5 text-[#9a2026]" />
                                    <span>Access to create your own posts</span>
                                </li>
                                <li className="flex items-start gap-2">
                                    <CheckIcon className="h-5 w-5 text-[#9a2026]" />
                                    <span>Ability to reply and comment on other users' posts</span>
                                </li>
                                <li className="flex items-start gap-2">
                                    <CheckIcon className="h-5 w-5 text-[#9a2026]" />
                                    <span>Like or dislike other users' posts</span>
                                </li>
                                <li className="flex items-start gap-2">
                                    <CheckIcon className="h-5 w-5 text-[#9a2026]" />
                                    <span>Personalized recommendations and notifications</span>
                                </li>
                            </ul>
                        </div>
                    </div>
                </div>
            </main>
        </div>
    )
}
