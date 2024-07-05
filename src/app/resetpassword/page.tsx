"use client"
import axios from "axios"
import Link from "next/link";
import React, { useEffect, useState } from 'react';
import toast from "react-hot-toast";

export default function ResetPasswordPage() {
    const [user, setUser] = React.useState({
        token: "",
        password: "",
    })
    const [resetdone, setResetdone] = useState(false);
    const [error, setError] = useState(false);

    const updatePassword = async () => {
        try {
            const response = await axios.post('/api/users/resetpassword', user)
            if (response.data.success) {
                toast.success("Password reset successfull")
                setResetdone(true);
            } else {
                toast.error("Token is Invalid")
            }

        } catch (error: any) {
            setError(true);
            toast.error("Password reset failed")
            console.log(error.response.data);

        }
    }

    useEffect(() => {
        const urlToken = window.location.search.split("=")[1];
        setUser({ ...user, token: urlToken || "" })
    }, [])

    // useEffect(() => {
    //     console.log(user);
    // }, [user]);

    return (
        <div className="flex flex-col items-center justify-center min-h-screen py-2">
            {/* <h2 className="p-2 m-3 bg-orange-500 text-black">{token ? `${token}` : "no token"}</h2> */}
            {!resetdone && (
                <div className="flex flex-col items-center justify-center min-h-screen py-2">
                    <h1 className="text-4xl p-3">Reset Your Password</h1>
                    <label htmlFor="password">New Password</label>
                    <input
                        className="p-2 border border-gray-300 rounded-lg mb-4 focus:outline-none focus:border-gray-600"
                        type="password"
                        id="password"
                        value={user.password}
                        onChange={(e) => setUser({ ...user, password: e.target.value })}
                        placeholder="New Password"
                    />
                    <button
                        onClick={updatePassword}
                        className="p-2 border border-gray-300 rounded-lg mb-4 focus:outline-none focus:border-gray-600"
                    >Reset Password</button>
                </div>
            )
            }
            {
                resetdone && (
                    <div className="flex flex-col items-center justify-center min-h-screen py-2">
                        <h1 className="text-4xl p-3">Password Reset Successfull</h1>
                        <Link href="/login"><button className="p-2 border border-gray-300 rounded-lg">Go to Login</button></Link>
                    </div>
                )
            }
            {error && (
                <div>
                    <h2 className="p-2 bg-red-500 text-black">Somehing Went Wrong</h2>

                </div>
            )
            }
        </div>
    )
}