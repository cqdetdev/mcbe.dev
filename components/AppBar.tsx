import Link from "next/link";
import React from "react";
import { Input } from "./ui/Input";
import { CubeIcon, LogOutIcon, SearchIcon, SettingsIcon, UserIcon } from "./ui/Icons";
import "./tailwind.css"
import { Button } from "./ui/Button";
import { DropdownMenu, DropdownMenuTrigger, DropdownMenuContent, DropdownMenuItem, DropdownMenuSeparator } from "./ui/DropdownMenu";
import { Avatar, AvatarFallback, AvatarImage } from "./ui/Avatar";

export interface AppBarProps {
    avatar?: string
}

export const AppBar: React.FC<AppBarProps> = ({ avatar }) => (
    <header className="fixed top-4 left-1/2 z-50 mx-auto w-full max-w-5xl -translate-x-1/2 rounded-lg bg-[#14181d]/80 backdrop-blur-md shadow-lg dark:bg-[#14181d]/80">
        <div className="container mx-auto flex h-16 max-w-7xl items-center justify-between px-4 md:px-6 pb-1 backdrop-blur-md bg-[#14181d]/90">
            <Link className="flex items-center gap-2 " href="/">
                <CubeIcon className="h-6 w-6 text-white " />
                <span className="text-lg font-semibold text-white hover:text-[#9a2136]">mcbe.dev</span>
            </Link>
            <nav className="hidden space-x-4 md:flex">
                <Link className="text-sm font-medium text-white hover:text-[#9a2136] dark:hover:text-[#9a2136]" href="/posts/popular">
                    Popular
                </Link>
                <Link className="text-sm font-medium text-white hover:text-[#9a2136] dark:hover:text-[#9a2136]" href="/posts/recent">
                    Recent
                </Link>
                <Link className="text-sm font-medium flame-animation text-white  dark:hover:text-[#fff]" href="/posts/trending">
                    Trending
                </Link>
                <Link className="text-sm font-medium text-white hover:text-[#9a2136] dark:hover:text-[#9a2136]" href="/account">
                    My Account
                </Link>
            </nav>
            <div className="relative w-full max-w-md md:w-auto">
                <SearchIcon className="absolute left-3 top-1/2 h-4 w-4 -translate-y-1/2 text-gray-500 dark:text-gray-400" />
                <Input
                    className="w-full rounded-md border border-gray-300 bg-[#14181d] py-2 pl-10 pr-4 text-sm text-white shadow-sm focus:border-[#9a2026] focus:outline-none focus:ring-1 focus:ring-[#9a2026] dark:border-gray-700 dark:bg-[#14181d] dark:text-gray-50 dark:focus:border-[#9a2026] dark:focus:ring-[#9a2026]"
                    placeholder="Search forums..."
                    type="search"
                />
            </div>
            {avatar && avatar.length ? <DropdownMenu>
                <DropdownMenuTrigger asChild>
                    <Button
                        className="ml-4 rounded-full bg-[#14181d] p-1 text- hover:bg-[#9a2026] dark:border-gray-700 dark:hover:bg-[#9a2026]"
                        size="icon"
                    >
                        <Avatar className="h-8 w-8">
                            <AvatarImage alt="Profile Picture" src={avatar} />
                            <AvatarFallback>JP</AvatarFallback>
                        </Avatar>
                    </Button>
                </DropdownMenuTrigger>
                <DropdownMenuContent className="bg-[#14181d] text-white" align="end">
                    <DropdownMenuItem>
                        <Link href="/account" className="flex">
                            <UserIcon className="mr-2 h-4 w-4" />
                            My Profile
                        </Link>
                    </DropdownMenuItem>

                    <DropdownMenuItem>
                        <SettingsIcon className="mr-2 h-4 w-4" />
                        Settings
                    </DropdownMenuItem>
                    <DropdownMenuSeparator />
                    <DropdownMenuItem>
                        <LogOutIcon className="mr-2 h-4 w-4" />
                        Logout
                    </DropdownMenuItem>
                </DropdownMenuContent>
            </DropdownMenu> : null}

        </div>
    </header>
)

