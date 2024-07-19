"use client";
import Loader from "@/components/Loader";
import Footer from "@/components/Footer";
import axios from "axios";
import Link from "next/link";
import React, { useEffect, useState } from 'react';
import toast from "react-hot-toast";

export default function ResetPasswordPage() {
    const [user, setUser] = useState({
        token: "",
        password: "",
    });
    const [resetDone, setResetDone] = useState(false);
    const [loading, setLoading] = useState(false);

    const updatePassword = async () => {
        try {
            setLoading(true);
            const response = await axios.post('/api/users/resetpassword', user);
            if (response.data.success) {
                toast.success("Password reset successful");
                setResetDone(true);
            } else {
                toast.error("Invalid token");
            }
        } catch (error: any) {
            toast.error("Password reset failed");
        } finally {
            setLoading(false);
        }
    };

    useEffect(() => {
        const urlToken = new URLSearchParams(window.location.search).get("token");
        setUser({ ...user, token: urlToken || "" });
    }, []);

    return (
        <div>
        <div className="flex flex-col items-center justify-center min-h-screen bg-gray-100 py-12 px-4 sm:px-6 lg:px-8">
            {!resetDone ? (
                <div className="max-w-md w-full space-y-8">
                    <div>
                        <h2 className="mt-6 text-center text-3xl font-extrabold text-gray-900">
                            Reset Your Password
                        </h2>
                    </div>
                    <form
                        className="mt-8 space-y-6"
                        onSubmit={(e) => {
                            e.preventDefault();
                            updatePassword();
                        }}
                    >
                        <div className="rounded-md shadow-sm -space-y-px">
                            <div>
                                <label htmlFor="password" className="sr-only">New Password</label>
                                <input
                                    id="password"
                                    name="password"
                                    type="password"
                                    required
                                    className="appearance-none rounded-none relative block w-full px-3 py-2 border border-gray-300 placeholder-gray-500 text-gray-900 rounded-t-md focus:outline-none focus:ring-indigo-500 focus:border-indigo-500 focus:z-10 sm:text-sm"
                                    placeholder="New Password"
                                    value={user.password}
                                    onChange={(e) => setUser({ ...user, password: e.target.value })}
                                />
                            </div>
                        </div>
                        <div>
                            <button
                                type="submit"
                                disabled={loading}
                                className={`group relative w-full flex justify-center py-2 px-4 border border-transparent text-sm font-medium rounded-md text-white ${loading ? 'bg-gray-400' : 'bg-stone-700 hover:bg-stone-800'} focus:outline-none focus:ring-2 focus:ring-offset-2 focus:ring-indigo-500`}
                            >
                                {loading ? <Loader/> : "Reset Password"}
                            </button>
                        </div>
                    </form>
                </div>
            ) : (
                <div className="max-w-md w-full space-y-8 text-center">
                    <h2 className="text-2xl font-bold text-gray-900">Password Reset Successful</h2>
                    <p className="text-lg text-gray-600">
                        Your password has been reset. You can now log in with your new password.
                    </p>
                    <Link href="/login">
                            <button className="mt-4 group relative w-full flex justify-center py-2 px-4 border border-transparent text-sm font-medium rounded-md text-white bg-stone-700 hover:bg-stone-800 focus:outline-none focus:ring-2 focus:ring-offset-2 focus:ring-indigo-500">
                            Go to Login
                        </button>
                    </Link>
                </div>
            )}
        </div>
        <Footer />
        </div>
    );
}
