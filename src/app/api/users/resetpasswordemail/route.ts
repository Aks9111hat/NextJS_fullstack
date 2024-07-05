import { connect } from "@/dbConfig/dbConfig";
import User from "@/models/userModel";
import { NextRequest, NextResponse } from "next/server";
import { sendEmail } from "@/helpers/mailer";


connect()

export async function POST(request: NextRequest) {
    try {
        console.log("hi1");
        
        const reqBody = await request.json();
        const { email } = reqBody;
        console.log(reqBody);

        //check if user exists
        const user = await User.findOne({ email });
        console.log(user)
        if (!user) {
            return NextResponse.json({ message: "Email does not exist", success: false }, { status: 200 })
        }

        await sendEmail({ email, emailType: "RESET", userId: user._id })


        const response = NextResponse.json({
            message: "reset mail sent successfully",
            success: true,
        }, { status: 200 })

        return response;

    } catch (error: any) {
        return NextResponse.json({ error: error.message }, { status: 500 })
    }
}