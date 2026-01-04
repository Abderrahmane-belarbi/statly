import NextAuth from "next-auth";
import GitHub from "next-auth/providers/github";
import Google from "next-auth/providers/google";
import Credentials from "next-auth/providers/credentials";
import { MongoDBAdapter } from "@auth/mongodb-adapter";
import { connectToDatabase } from "./lib/mongodb";
import client from "@/lib/db";

export const { auth, handlers, signIn, signOut } = NextAuth({
    adapter: MongoDBAdapter(client),
    providers: [
        GitHub({
            clientId: process.env.GITHUB_ID!,
            clientSecret: process.env.GITHUB_SECRET!,
            allowDangerousEmailAccountLinking: true
        }),
        Google({
            clientId: process.env.GOOGLE_ID!,
            clientSecret: process.env.GOOGLE_SECRET!,
            allowDangerousEmailAccountLinking: true
        }),
        Credentials({
            credentials: {
                email: { type: "email" },
                password: { type: "password" }
            },
            async authorize(credentials) {
                if (!credentials) return null;

                await connectToDatabase();
                const dbUser = await UserModel.findOne({
                    email: credentials.email
                }).lean();

                if (!dbUser) return null;

                const isMatch = await bcrypt.compare(
                    credentials.password! as string,
                    dbUser.password!
                );
                if (!isMatch) return null;
                // Return object typed as NextAuth.User (your extended version includes "role")
                const authUser: User = {
                    id: dbUser._id.toString(),
                    name: dbUser.name,
                    email: dbUser.email,
                    image: dbUser.image ?? ""
                };
                return authUser;
            }
        })
    ]
});
export const { GET, POST } = handlers;
