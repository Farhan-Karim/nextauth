import bcrypt from "bcryptjs";
// import mongoose from "mongoose";
import User from "@/models/User";
import connectDB from "@/database/db";
import { NextResponse } from "next/server";
// import { request } from "http";

export const POST = async (request: any) => {
    const { email, password } = await request.json();
    await connectDB();

    const existingUser = await User.findOne({ email });
    if (existingUser) {
        return new NextResponse("email already exists", { status: 400 })
    }
    const hashedPassword = await bcrypt.hash(password, 5);
    const newUser = new User({ email, password: hashedPassword, })
    try {
        await newUser.save();
        return new NextResponse("new user is created", {status:200})
    } catch (error: any) {
        return new NextResponse(error, { status: 500 })
    }
}