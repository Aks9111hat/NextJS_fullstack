"use client"
import axios from "axios";
import { useState } from "react";
import toast from "react-hot-toast";

export default function resetpassword() {

    const [user, setUser] = useState({
        email: "",
    })
    const [loading, setLoading] = useState(false)
    const [sent, setSent] = useState(false)

    const sendResetMail = async () => {
        try {
            setLoading(true);
            const response = await axios.post("/api/users/resetpasswordemail", user);
            if (response.data.success) {
                toast.success("Email Sent");
                setSent(true);
            } else {
                toast.error(response.data.message)
            }
        } catch (error: any) {
            console.log("Login failed", error.message);
            toast.error("Something Went Wrong")
        } finally {
            setLoading(false);
        }
    }

    if (loading) {
        return (
            <div className="flex items-center justify-center min-h-screen">
                <div className="w-16 h-16 border-4 border-blue-500 border-t-transparent border-solid rounded-full animate-spin"></div>
            </div>
        )
    }

    return (
        <div className="flex flex-col items-center justify-center h-screen bg-gray-100">
            {
                !sent && <div className="flex flex-col items-center justify-center h-screen bg-gray-100">
                    <label htmlFor="email">email</label>
                    <input
                        className="p-2 border border-gray-300 rounded-lg mb-4 focus:outline-none focus:border-gray-600"
                        type="text"
                        id="email"
                        value={user.email}
                        onChange={(e) => setUser({ email: e.target.value })}
                        placeholder="email"
                    />
                    <button
                        onClick={sendResetMail}
                        className="p-2 border border-gray-300 rounded-lg mb-4 focus:outline-none focus:border-gray-600"
                    >Reset Password</button>
                </div>
            }

            {
                sent && 
                <div className="flex flex-col items-center justify-center h-screen bg-gray-100">
                <h1 className="text-2xl font-bold">Check your email</h1>
                <p className="text-xl">We have sent you an email with a link to reset your
                password</p>
                </div>
            }          
            
        </div>
    )
}