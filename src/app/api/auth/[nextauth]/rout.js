// app/api/auth/[...nextauth]/route.js
import NextAuth from "next-auth";
import GoogleProvider from "next-auth/providers/google";
import CredentialsProvider from "next-auth/providers/credentials";

export const authOptions = {
    providers: [
        GoogleProvider({
            clientId: process.env.GOOGLE_CLIENT_ID,
            clientSecret: process.env.GOOGLE_CLIENT_SECRET,
        }),
        CredentialsProvider({
            name: "Credentials",
            credentials: {
                email: { label: "Email", type: "email" },
                password: { label: "Password", type: "password" },
            },
            async authorize(credentials) {
                // এখানে আপনার user validation logic হবে
                // উদাহরণ: fake user
                const user = { id: 1, name: "John Doe", email: "john@example.com" };
                if (credentials.email === "john@example.com" && credentials.password === "123456") {
                    return user;
                }
                return null;
            },
        }),
    ],
    pages: {
        signIn: "/login", // custom login page
    },
    callbacks: {
        async redirect({ url, baseUrl }) {
            // login success → redirect /products
            return "/products";
        },
    },
};

const handler = NextAuth(authOptions);
export { handler as GET, handler as POST };
