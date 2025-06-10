import dbConnect from "@/lib/dbConnect";
import UserModel from "@/models/User";
import bcrypt from "bcryptjs";
import { NextResponse } from "next/server";

export async function POST(request: Request) {
    await dbConnect();

    try {
        const { username, email, password } = await request.json()

        if (!username || !email || !password) {
            return NextResponse.json(
                { error: "All fields are required" },
                { status: 400 }
            );
        }

        const normalizedEmail = email.toLowerCase();

        const existingUsername = await UserModel.findOne({
            username
        })

        if (existingUsername) {
            return NextResponse.json({
                success: false,
                message: 'Username is already Taken'
            },
                { status: 400 }
            )
        }

        const existingUser = await UserModel.findOne({ email: normalizedEmail });

        if (existingUser) {
            return NextResponse.json({
                success: false,
                message: 'User already exists with this email'
            },
                { status: 400 })
        }

        const hashedPassword = await bcrypt.hash(password, 10)

        const user = await UserModel.create({
            username,
            email,
            password: hashedPassword
        })
        console.log(user);


        return NextResponse.json({
            success: true,
            message: 'User Registered Successfully'
        },
            { status: 201 })


    } catch (error) {
        console.error('Error registering user:', error);
        return NextResponse.json(
            {
                success: false,
                message: 'Error registering user',
            },
            { status: 500 }
        );
    }

}