

"use client"
import Loader from "@/components/Loader";
import Footer from "@/components/Footer";
import axios from "axios";
import { useState } from "react";
import toast from "react-hot-toast";

export default function ResetPassword() {
    const [user, setUser] = useState({ email: "" });
    const [loading, setLoading] = useState(false);
    const [sent, setSent] = useState(false);

    const sendResetMail = async () => {
        try {
            setLoading(true);
            const response = await axios.post("/api/users/resetpasswordemail", user);
            if (response.data.success) {
                toast.success("Email Sent");
                setSent(true);
            } else {
                toast.error(response.data.message);
            }
        } catch (error: any) {
            console.log("Email sending failed", error.message);
            toast.error("Something Went Wrong");
        } finally {
            setLoading(false);
        }
    };

    if (loading) {
        return (
        <div className="flex flex-col justify-center items-center min-h-screen">
        <Loader />
        </div>
        );
    }

    return (
        <div>
        <div className="flex flex-col items-center justify-center min-h-screen bg-gray-100 py-12 px-4 sm:px-6 lg:px-8">
            {!sent ? (
                <div className="max-w-md w-full space-y-8">
                    <div>
                        <h2 className="mt-6 text-center text-3xl font-extrabold text-gray-900">
                            Reset your password
                        </h2>
                        <p className="mt-2 text-center text-sm text-gray-600">
                            Enter your email address and we'll send you a link to reset your password.
                        </p>
                    </div>
                    <form
                        className="mt-8 space-y-6"
                        onSubmit={(e) => {
                            e.preventDefault();
                            sendResetMail();
                        }}
                    >
                        <div className="rounded-md shadow-sm -space-y-px">
                            <div>
                                <label htmlFor="email" className="sr-only">
                                    Email address
                                </label>
                                <input
                                    id="email"
                                    name="email"
                                    type="email"
                                    required
                                    className="appearance-none rounded-none relative block w-full px-3 py-2 border border-gray-300 placeholder-gray-500 text-gray-900 rounded-t-md focus:outline-none focus:ring-indigo-500 focus:border-indigo-500 focus:z-10 sm:text-sm"
                                    placeholder="Email address"
                                    value={user.email}
                                    onChange={(e) => setUser({ email: e.target.value })}
                                />
                            </div>
                        </div>
                        <div>
                            <button
                                type="submit"
                                className="group relative w-full flex justify-center py-2 px-4 border border-transparent text-sm font-medium rounded-md text-white bg-stone-700 hover:bg-stone-800 focus:outline-none focus:ring-2 focus:ring-offset-2 focus:ring-indigo-500"
                            >
                                Send Reset Link
                            </button>
                        </div>
                    </form>
                </div>
            ) : (
                <div className="max-w-md w-full space-y-8 text-center">
                    <h2 className="text-2xl font-bold text-gray-900">Check your email</h2>
                    <p className="text-lg text-gray-600">
                        We have sent you an email with a link to reset your password.
                    </p>
                </div>
            )}
        </div>
        <Footer />
        </div>
    );
}
