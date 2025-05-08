import { NextAuthOptions } from "next-auth";
import  CredentialsProvider  from "next-auth/providers/credentials";
import dbConnect from "@/lib/dbConnect";
import bcrypt from 'bcryptjs'
import UserModel from "@/models/User";

export const authOptions: NextAuthOptions = {
    providers: [
        CredentialsProvider({
            id: 'credentials',
            name: 'Credentials',
            credentials: {
                identifier: { label: "Email or Username", type: "text" },
                password: {label: 'Password', type: 'password'}
            },
            async authorize(credentials: any): Promise<any> {
                await dbConnect();
                try {
                    const user = await UserModel.findOne({
                        $or: [
                            {email: credentials.identifier},
                            {username: credentials.identifier}
                        ]
                    })
                    console.log(credentials.identifier);
                    
                    if(!user){
                        throw new Error("No user found with this email or username");
                    }
                    const isPasswordCorrect = await bcrypt.compare(
                        credentials.password,
                        user.password   
                    )
                    if (!isPasswordCorrect) throw new Error("Incorrect password");

                    return{
                        id: user._id.toString(),
                        email: user.email,
                        username: user.username,
                        isAdmin: user.isAdmin
                    };
                } catch (error: any) {
                    throw new Error(error.message)
                }
            }
        })
    ],
    callbacks: {
        async jwt({token, user}) {
            if(user) {
                token.sub = user.id?.toString();
                token.username = user.username;
                token.isAdmin = user.isAdmin;
            }
            return token
        },
        async session({session, token}) {
            if(token){
                session.user = session.user || {};
                session.user.id = token.sub;
                session.user.username = token.username
                session.user.isAdmin = token.isAdmin;
            }
            return session;
        }
    },
    session: {
        strategy: "jwt"
    },
    secret: process.env.NEXTAUTH_SECRET,
    pages: {
        signIn: "/sign-in"
    }
    
}