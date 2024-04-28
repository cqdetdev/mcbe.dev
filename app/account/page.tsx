import Link from "next/link"
import { AvatarImage, AvatarFallback, Avatar } from "@/components/ui/Avatar"
import { DropdownMenuTrigger, DropdownMenuLabel, DropdownMenuSeparator, DropdownMenuItem, DropdownMenuContent, DropdownMenu } from "@/components/ui/DropdownMenu"
import { CardTitle, CardHeader, CardContent, Card, CardFooter } from "@/components/ui/Card"
import { CubeIcon, LogOutIcon, SettingsIcon, ToyBrickIcon, UserIcon } from "@/components/ui/Icons"
import { Button } from "@/components/ui/Button"
import { getServerSession } from "next-auth"
import { handler } from "../api/auth/[...nextauth]/route"
import { redirect } from "next/navigation"
import { createUser, getUser, saveUser } from "@/server/database/entities"
import moment from "moment";

export default async function Account() {
    const session = await getServerSession(handler);
    if (!session) {
        redirect("/sign-in");
    }

    const { user: u } = session as any;
    const { name, email, image } = u;

    let user = await getUser(name);
    if (!user) {
        user = createUser();
        user!.email = email;
        user!.avatar = image;
        saveUser(user!);
    }

    const ago = moment(user.createdAt, "YYYYMMDD").fromNow()

    return (
        <div className="flex flex-col min-h-screen bg-[#14181d]">
            <header className="fixed top-4 left-1/2 z-50 mx-auto w-full max-w-5xl -translate-x-1/2 rounded-lg bg-[#14181d]/80 backdrop-blur-md shadow-lg dark:bg-[#14181d]/80">
                <div className="container mx-auto flex h-16 max-w-7xl items-center justify-between px-4 md:px-6 pb-4 backdrop-blur-md bg-[#14181d]/90">
                    <Link className="flex items-center gap-2" href="/">
                        <CubeIcon className="h-6 w-6 text-white" />
                        <span className="text-lg font-semibold text-white">mcbe.dev</span>
                    </Link>
                    <div className="flex items-center gap-4">
                        <DropdownMenu>

                            <DropdownMenuTrigger asChild>
                                <Avatar className="h-10 w-10 border-2 border-[#9a2026]">
                                    <AvatarImage alt="Avatar" src={image} />
                                    <AvatarFallback>JP</AvatarFallback>
                                </Avatar>
                            </DropdownMenuTrigger>
                            <DropdownMenuContent className="w-56 bg-[#14181d] text-white">
                                <DropdownMenuLabel className="font-semibold">{user.username}</DropdownMenuLabel>
                                <DropdownMenuSeparator />
                                <DropdownMenuItem>
                                    <Link className="flex items-center gap-2" href="#">
                                        <UserIcon className="h-4 w-4" />
                                        Profile
                                    </Link>
                                </DropdownMenuItem>
                                <DropdownMenuItem>
                                    <Link className="flex items-center gap-2" href="/account/settings">
                                        <SettingsIcon className="h-4 w-4" />
                                        Settings
                                    </Link>
                                </DropdownMenuItem>
                                <DropdownMenuItem>
                                    <Link className="flex items-center gap-2" href="/sign-out">
                                        <LogOutIcon className="h-4 w-4" />
                                        Logout
                                    </Link>
                                </DropdownMenuItem>
                            </DropdownMenuContent>
                        </DropdownMenu>
                    </div>
                </div>
            </header>
            <main className="container mx-auto mt-20 max-w-7xl px-4 md:px-6 flex gap-8">
                <div className="flex-1 grid grid-cols-1 md:grid-cols-2 gap-8">
                    <Card className="bg-[#14181d] rounded-lg border border-gray-200 shadow-lg dark:border-gray-800 p-6">
                        <CardHeader >
                            <CardTitle className="text-white">Recent Posts</CardTitle>
                        </CardHeader>
                        <CardContent className="space-y-4">
                            <div className="flex items-start gap-4">
                                <Avatar className="h-10 w-10 border-2 border-[#9a2026]">
                                    <AvatarImage alt="Avatar" src={image} />
                                    <AvatarFallback>JP</AvatarFallback>
                                </Avatar>
                                <Link className="flex items-start gap-4" href="#">
                                    <div className="flex-1">
                                        <h3 className="text-white font-semibold">New Minecraft Update Announced</h3>
                                        <p className="text-gray-400 text-sm">
                                            Check out the latest features and improvements in the latest Minecraft update.
                                        </p>
                                    </div>
                                </Link>
                            </div>
                            <div className="flex items-start gap-4">
                                <Avatar className="h-10 w-10 border-2 border-[#9a2026]">
                                    <AvatarImage alt="Avatar" src={image} />
                                    <AvatarFallback>JP</AvatarFallback>
                                </Avatar>
                                <div className="flex-1">
                                    <h3 className="text-white font-semibold">Modding Tutorials for Beginners</h3>
                                    <p className="text-gray-400 text-sm">
                                        Learn how to create your own Minecraft mods with our step-by-step guides.
                                    </p>
                                </div>
                            </div>
                            <div className="flex items-start gap-4">
                                <Avatar className="h-10 w-10 border-2 border-[#9a2026]">
                                    <AvatarImage alt="Avatar" src={image} />
                                    <AvatarFallback>JP</AvatarFallback>
                                </Avatar>
                                <div className="flex-1">
                                    <h3 className="text-white font-semibold">Minecraft Server Hosting Recommendations</h3>
                                    <p className="text-gray-400 text-sm">
                                        Check out our top picks for reliable and affordable Minecraft server hosting.
                                    </p>
                                </div>
                            </div>
                        </CardContent>
                    </Card>
                    <Card className="bg-[#14181d] rounded-lg border border-gray-200 shadow-lg dark:border-gray-800 p-6">
                        <CardHeader>
                            <CardTitle className="text-white">Liked Posts</CardTitle>
                        </CardHeader>
                        <CardContent className="space-y-4">
                            <div className="flex items-start gap-4">
                                <Avatar className="h-10 w-10 border-2 border-[#9a2026]">
                                    <AvatarImage alt="Avatar" src={image} />
                                    <AvatarFallback>JP</AvatarFallback>
                                </Avatar>
                                <div className="flex-1">
                                    <h3 className="text-white font-semibold">Minecraft Redstone Circuits Explained</h3>
                                    <p className="text-gray-400 text-sm">
                                        Dive into the world of Redstone and learn how to build complex circuits.
                                    </p>
                                </div>
                            </div>

                            <div className="flex items-start gap-4">
                                <Avatar className="h-10 w-10 border-2 border-[#9a2026]">
                                    <AvatarImage alt="Avatar" src={image} />
                                    <AvatarFallback>JP</AvatarFallback>
                                </Avatar>
                                <div className="flex-1">
                                    <h3 className="text-white font-semibold">Minecraft Survival Tips for Beginners</h3>
                                    <p className="text-gray-400 text-sm">
                                        Get started in Minecraft with these essential survival tips and tricks.
                                    </p>
                                </div>
                            </div>
                            <div className="flex items-start gap-4">
                                <Avatar className="h-10 w-10 border-2 border-[#9a2026]">
                                    <AvatarImage alt="Avatar" src={image} />
                                    <AvatarFallback>JP</AvatarFallback>
                                </Avatar>
                                <div className="flex-1">
                                    <h3 className="text-white font-semibold">Minecraft Mods: Top 10 Essentials</h3>
                                    <p className="text-gray-400 text-sm">Enhance your Minecraft experience with these must-have mods.</p>
                                </div>
                            </div>
                        </CardContent>
                    </Card>
                </div>
                <div className="w-64 space-y-8">
                    <Card className="bg-[#14181d] rounded-lg border border-gray-200 shadow-lg dark:border-gray-800 p-6">
                        <CardHeader>
                            <CardTitle className="text-white">Profile</CardTitle>
                        </CardHeader>
                        <CardContent className="space-y-4">
                            <div className="flex items-center gap-4">
                                <Avatar className="h-16 w-16 border-2 border-[#9a2026]">
                                    <AvatarImage alt="Avatar" src={image} />
                                    <AvatarFallback>JP</AvatarFallback>
                                </Avatar>
                                <div className="flex-1">
                                    <h3 className="text-white font-semibold">{name}</h3>
                                    <p className="text-gray-400 text-xs text-[10px]">{email}</p>
                                </div>
                            </div>
                            <div className="grid gap-3">
                                <div className="flex items-center justify-between">
                                    <span className="text-gray-400">Joined</span>
                                    <span className="text-white text-xs">{ago}</span>
                                </div>
                                <div className="flex items-center justify-between">
                                    <span className="text-gray-400">Posts</span>
                                    <span className="text-white">{user.posts ? user.posts.length : 0}</span>
                                </div>
                                <div className="flex items-center justify-between">
                                    <span className="text-gray-400">Likes</span>
                                    <span className="text-white">{user.likes}</span>
                                </div>
                            </div>
                        </CardContent>
                        <CardFooter>
                            <Button className="w-full" variant="outline">
                                Edit Profile
                            </Button>
                        </CardFooter>
                    </Card>
                    <Card className="bg-[#14181d] rounded-lg border border-gray-200 shadow-lg dark:border-gray-800 p-6">
                        <CardHeader>
                            <CardTitle className="text-white">Settings</CardTitle>
                        </CardHeader>
                        <CardContent className="space-y-4">
                            <div className="grid gap-2">

                            </div>
                        </CardContent>
                        <CardFooter>
                            <Button className="w-full" variant="outline">
                                Update Settings
                            </Button>
                        </CardFooter>
                    </Card>
                </div>
            </main>
        </div>
    )
}