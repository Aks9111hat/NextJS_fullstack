import { connect } from "@/dbConfig/dbConfig";
import User from "@/models/userModel";
import { NextRequest, NextResponse } from "next/server";
import bcryptjs from "bcryptjs";
import jwt from "jsonwebtoken";

connect()

export async function POST(request: NextRequest) {
    try {

        const reqBody = await request.json();
        const { email, password } = reqBody;
        console.log(reqBody);

        //check if user exists
        const user = await User.findOne({ email });
        if (!user) {
            console.log("user exists")
            return NextResponse.json({ message: "User does not exist" }, { status: 400 })
        }

        //check if the password is correct
        const validPassword = await bcryptjs.compare(password, user.password)
        if (!validPassword) {
            return NextResponse.json({ message: "Password is incorrect" }, { status: 400 })
        }
        //create a token data 
        const tokenData = {
            id: user._id,
            username: user.username,
            email: user.email,
        }
        //create a token
        const token = await jwt.sign(tokenData, process.env.JWT_SECRET_KEY!, { expiresIn: "1d" })

        const response = NextResponse.json({
            message: "User logged in successfully",
            success: true,
        })

        response.cookies.set("token", token, {
            httpOnly: true,
        })

        return response;

    } catch (error: any) {
        return NextResponse.json({ error: error.message }, { status: 500 })
    }
}