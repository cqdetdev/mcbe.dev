import NextAuth from "next-auth"
import Credentials from 'next-auth/providers/github';
import { config } from "dotenv"
import { createUser, getUser, saveUser } from "@/server/database/entities";

config({ path: ".env" })

export const handler = NextAuth({
    secret: process.env.NEXTAUTH_SECRET,
    callbacks: {
        authorized({ auth, request: { nextUrl } }) {
            const isLoggedIn = !!auth?.user;
            const isOnDashboard = nextUrl.pathname.startsWith('/account');
            if (isOnDashboard) {
                if (isLoggedIn) return true;
                return false; // Redirect unauthenticated users to login page
            } else if (isLoggedIn) {
                return Response.redirect(new URL('/account', nextUrl));
            }
            return true;
        },

        async signIn({ user, account, profile, email, credentials }) {
            if (!await getUser(user.name!) !== null) {
                const u = createUser();
                u.username = user.name!;
                u.email = user.email!;
                u.avatar = user.image!;
                await saveUser(u);
            }
            return true;
        }
    },
    providers: [Credentials({
        clientId: process.env.CLIENT_ID!,
        clientSecret: process.env.CLIENT_SECRET!
    })],
    pages: {
        signIn: "/sign-in",
        signOut: "/sign-out"
    }
});

export { handler as GET, handler as POST }
