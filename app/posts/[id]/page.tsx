import { AvatarImage, AvatarFallback, Avatar } from "@/components/ui/Avatar"
import { Button } from "@/components/ui/Button"
import { getServerSession } from "next-auth"
import { AppBar } from "@/components/AppBar"
import { handler } from "@/app/api/auth/[...nextauth]/route"
import { redirect } from "next/navigation"
import moment from "moment"
import { CalendarDaysIcon, ReplyIcon, ThumbsDownIcon, ThumbsUpIcon } from "@/components/ui/Icons"
import { fetchPost, fetchUser } from "@/lib/api"
import { Textarea } from "@/components/ui/TextArea"

const PostPage = async ({ params }: { params: any }) => {
    const session = await getServerSession<any, any>(handler);
    const avatar = session ? session.user.image : "";
    const post = await fetchPost(params.id);
    if (!post) {
        redirect("/")
    }
    const user = await fetchUser(post.userID.toString())
    if (!user) {
        redirect("/")
    }

    return (
        <div key="1" className="flex flex-col min-h-screen bg-[#14181d]">
            <AppBar avatar={avatar} />
            <main className="container mx-auto mt-20 max-w-5xl px-4 md:px-6">
                <div className="grid grid-cols-1 gap-6 md:grid-cols-3">
                    <div className="rounded-lg border border-gray-200 bg-[#14181d] shadow-lg dark:border-gray-800 dark:bg-[#14181d] md:col-span-2">
                        <div className="px-6 py-4">
                            <h1 className="text-2xl font-bold text-white">{post.title}</h1>
                            <div className="mt-4 flex items-center gap-2 text-sm text-gray-400">
                                <Avatar className="h-4 w-4">
                                    <AvatarImage alt="Profile Picture" src={user.avatar} />
                                    <AvatarFallback>JP</AvatarFallback>
                                </Avatar>
                                <span>{user.username}</span>
                                <CalendarDaysIcon className="h-4 w-4" />
                                <span>{moment(post.createdAt, "YYYYMMDD").fromNow()}</span>
                            </div>
                            <div className="mt-4 flex items-center gap-2 text-sm text-gray-400">
                                <ThumbsUpIcon className="h-4 w-4 text-[#035428]" />
                                <span>{post.likes}</span>
                                <ThumbsDownIcon className="h-4 w-4 text-[#9a2026]" />
                                <span>{post.dislikes}</span>
                            </div>
                            <div className="mt-6 text-gray-400">
                                <p className="pb-10">
                                    {post.text}
                                </p>
                            </div>
                        </div>
                    </div>
                    <div className="rounded-lg border border-gray-200 bg-[#14181d] shadow-lg dark:border-gray-800 dark:bg-[#14181d]">
                        <div className="px-6 py-4">
                            <h2 className="text-xl font-bold text-white">Top Contributors</h2>

                        </div>
                        <div className="px-6 py-4">
                            <h2 className="text-xl font-bold text-white">Recent Activity</h2>

                        </div>
                    </div>
                    <div className="rounded-lg border border-gray-200 bg-[#14181d] shadow-lg dark:border-gray-800 dark:bg-[#14181d] md:col-span-3">
                        <div className="px-6 py-4">
                            <h2 className="text-xl font-bold text-white">Comments</h2>
                            <div className="mt-4 space-y-4">
                                <div className="flex items-start gap-4">
                                    <Textarea
                                        className="flex-1 rounded-md border border-gray-300 bg-[#14181d] p-3 text-sm text-white shadow-sm focus:border-[#9a2026] focus:outline-none focus:ring-1 focus:ring-[#9a2026] dark:border-gray-700 dark:bg-[#14181d] dark:text-gray-50 dark:focus:border-[#9a2026] dark:focus:ring-[#9a2026]"
                                        placeholder="Write your comment..."
                                    />
                                    <Button
                                        className="ml-2 rounded-full bg-gray-200 p-2 text-gray-500 hover:bg-gray-300 dark:bg-gray-800 dark:text-gray-400 dark:hover:bg-gray-700"
                                        size="icon"
                                        variant="ghost"
                                    >
                                        <ReplyIcon className="h-5 w-5" />
                                    </Button>
                                </div>

                                <div className="flex items-start gap-4">
                                    <Avatar className="h-10 w-10">
                                        <AvatarImage alt="Profile Picture" src="/profile-picture.jpg" />
                                        <AvatarFallback>JD</AvatarFallback>
                                    </Avatar>
                                    <div className="flex-1 space-y-2">
                                        <div className="flex items-center justify-between">
                                            <div className="text-sm font-medium text-white">Jane Doe</div>
                                            <div className="flex items-center gap-2 text-sm text-gray-400">
                                                <ThumbsUpIcon className="h-4 w-4 text-[#035428]" />
                                                <span>5</span>
                                                <ThumbsDownIcon className="h-4 w-4 text-[#9a2026]" />
                                                <span>1</span>
                                                <svg xmlns="http://www.w3.org/2000/svg" width="24" height="24" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round" className="lucide lucide-reply"><polyline points="9 17 4 12 9 7" /><path d="M20 18v-2a4 4 0 0 0-4-4H4" /></svg>
                                            </div>
                                        </div>
                                        <div className="border-l-2 border-gray-400 pl-4 text-gray-400">
                                            <p>
                                                I really like the new forum design! The improved navigation and search functionality make it
                                                much easier to find the content I'm interested in.
                                            </p>
                                        </div>
                                    </div>
                                </div>
                                <div className="flex items-start gap-4 ml-8">
                                    <div className="h-10 w-10 bg-gray-200 rounded-full flex items-center justify-center text-gray-500 dark:bg-gray-800 dark:text-gray-400 cursor-pointer">
                                        <ReplyIcon className="h-6 w-6" />
                                    </div>
                                    <div className="flex-1 space-y-2">
                                        <div className="flex items-center justify-between">
                                            <div className="text-sm font-medium text-white">John Smith</div>
                                            <div className="flex items-center gap-2 text-sm text-gray-400">
                                                <ThumbsUpIcon className="h-4 w-4 text-[#035428]" />
                                                <span>8</span>
                                                <ThumbsDownIcon className="h-4 w-4 text-[#9a2026]" />
                                                <span>2</span>
                                                <svg xmlns="http://www.w3.org/2000/svg" width="24" height="24" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round" className="lucide lucide-reply"><polyline points="9 17 4 12 9 7" /><path d="M20 18v-2a4 4 0 0 0-4-4H4" /></svg>
                                            </div>
                                        </div>
                                        <div className="border-l-2 border-gray-400 pl-4 text-gray-400">
                                            <p>
                                                I agree, the new design looks great! I'm excited to see what other improvements you have planned
                                                for the forum.
                                            </p>
                                        </div>
                                    </div>
                                </div>
                                <div className="flex items-start gap-4">
                                    <Avatar className="h-10 w-10">
                                        <AvatarImage alt="Profile Picture" src="/profile-picture.jpg" />
                                        <AvatarFallback>JD</AvatarFallback>
                                    </Avatar>
                                    <div className="flex-1 space-y-2">
                                        <div className="flex items-center justify-between">
                                            <div className="text-sm font-medium text-white">Sarah Lee</div>
                                            <div className="flex items-center gap-2 text-sm text-gray-400">
                                                <ThumbsUpIcon className="h-4 w-4 text-[#035428]" />
                                                <span>3</span>
                                                <ThumbsDownIcon className="h-4 w-4 text-[#9a2026]" />
                                                <span>0</span>
                                                <svg xmlns="http://www.w3.org/2000/svg" width="24" height="24" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round" className="lucide lucide-reply"><polyline points="9 17 4 12 9 7" /><path d="M20 18v-2a4 4 0 0 0-4-4H4" /></svg>
                                            </div>
                                        </div>
                                        <div className="border-l-2 border-gray-400 pl-4 text-gray-400">
                                            <p>
                                                The new design looks really clean and modern. I'm glad to see the improved search and navigation
                                                features. It will make it much easier to find relevant discussions.
                                            </p>
                                        </div>
                                    </div>
                                </div>
                                <div className="flex items-start gap-4 ml-8">
                                    <div className="h-10 w-10 bg-gray-200 rounded-full flex items-center justify-center text-gray-500 dark:bg-gray-800 dark:text-gray-400 cursor-pointer">
                                        <ReplyIcon className="h-6 w-6" />
                                    </div>
                                    <div className="flex-1 space-y-2">
                                        <div className="flex items-center justify-between">
                                            <div className="text-sm font-medium text-white">John Doe</div>
                                            <div className="flex items-center gap-2 text-sm text-gray-400">
                                                <ThumbsUpIcon className="h-4 w-4 text-[#035428]" />
                                                <span>6</span>
                                                <ThumbsDownIcon className="h-4 w-4 text-[#9a2026]" />
                                                <span>0</span>
                                                <svg xmlns="http://www.w3.org/2000/svg" width="24" height="24" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round" className="lucide lucide-reply"><polyline points="9 17 4 12 9 7" /><path d="M20 18v-2a4 4 0 0 0-4-4H4" /></svg>

                                            </div>
                                        </div>
                                        <div className="border-l-2 border-gray-400 pl-4 text-gray-400">
                                            <p>
                                                I agree with Sarah, the new design is a big improvement. The ability to easily navigate and find
                                                relevant discussions is going to make this forum much more useful.
                                            </p>
                                        </div>
                                    </div>
                                </div>
                                <div className="flex items-start gap-4">
                                    <Avatar className="h-10 w-10">
                                        <AvatarImage alt="Profile Picture" src="/profile-picture.jpg" />
                                        <AvatarFallback>JD</AvatarFallback>
                                    </Avatar>
                                    <div className="flex-1 space-y-2">
                                        <div className="flex items-center justify-between">
                                            <div className="text-sm font-medium text-white">Emily Chen</div>
                                            <div className="flex items-center gap-2 text-sm text-gray-400">
                                                <ThumbsUpIcon className="h-4 w-4 text-[#035428]" />
                                                <span>4</span>
                                                <ThumbsDownIcon className="h-4 w-4 text-[#9a2026]" />
                                                <span>0</span>
                                                <svg xmlns="http://www.w3.org/2000/svg" width="24" height="24" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round" className="lucide lucide-reply"><polyline points="9 17 4 12 9 7" /><path d="M20 18v-2a4 4 0 0 0-4-4H4" /></svg>
                                            </div>
                                        </div>
                                        <div className="border-l-2 border-gray-400 pl-4 text-gray-400">
                                            <p>
                                                The new forum design looks great! I'm really impressed with the attention to detail and the
                                                focus on improving the user experience. Well done!
                                            </p>
                                        </div>
                                    </div>
                                </div>
                            </div>
                        </div>
                    </div>
                </div>

            </main>
        </div>
    )
}

export default PostPage;


