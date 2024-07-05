"use client"
import Link from "next/link";
import React, { useEffect, useState } from "react";
import { useRouter } from "next/navigation";
import axios from "axios";
import toast from "react-hot-toast";
import { useUser } from '@/contexts/userContext';


export default function LoginPage() {
    const router = useRouter();
    const { getUserDetails } = useUser();
    const [user, setUser] = React.useState({
        email: "",
        password: "",
    })

    const [buttonDisabled, setButtonDisabled] = React.useState(false);
    const [loading, setLoading] = React.useState(false)

    const onLogin = async () => {
        try {
            setLoading(true);
            const response = await axios.post("/api/users/login", user);
            console.log(response)
            console.log("Login success", response.data);
            if (response.data.success) {
                toast.success("Login success");
                await getUserDetails();
                router.push("/profile");
            } else {
                toast.error(response.data.message)
            }

        } catch (error: any) {
            console.log("Login failed", error.message);
            // toast.error(error.message)
            toast.error("Login Failed")
        } finally {
            setLoading(false)
        }
    }

    useEffect(() => {
        if (user.email.length > 0 && user.password.length > 0) {
            setButtonDisabled(false);
        }
        else {
            setButtonDisabled(true);
        }
    }, [user])

    return (
        <div className="flex flex-col items-center justify-center min-h-screen py-2 gap-2">
            <h1>{loading ? "Processessing" : "Login"}</h1>
            <hr />
            <label htmlFor="email">email</label>
            <input
                className="p-2 border border-gray-300 rounded-lg mb-4 focus:outline-none focus:border-gray-600"
                type="text"
                id="email"
                value={user.email}
                onChange={(e) => setUser({ ...user, email: e.target.value })}
                placeholder="email"
            />
            <label htmlFor="password">password</label>
            <input
                className="p-2 border border-gray-300 rounded-lg mb-4 focus:outline-none focus:border-gray-600"
                type="password"
                id="password"
                value={user.password}
                onChange={(e) => setUser({ ...user, password: e.target.value })}
                placeholder="password"
            />
            <button
                onClick={onLogin}
                className="p-2 border border-gray-300 rounded-lg mb-4 focus:outline-none focus:border-gray-600"
            >Login here</button>
            <p>Forgot Password? <Link href="/resetpasswordemail" className="text-blue-600">Click Here to Reset Password</Link> </p>
            <p>Don't have a account? <Link href="/signup" className="text-blue-600">Signup here</Link></p>
        </div>
    )

}