"use client"
import axios from "axios"
import Link from "next/link"
import React, { useEffect, useState } from 'react';

export default function VerifyEmailPage() {
    const [token, setToken] = useState("");
    const [verified, setVerified] = useState(false);
    const [error, setError] = useState(false);

    const verifyUserEmail = async () => {
        try {
            const response = await axios.post('/api/users/verifyemail', { token })
            setVerified(true);
        } catch (error: any) {
            setError(true);
            console.log(error.response.data);

        }
    }

    useEffect(() => {
        const urlToken = window.location.search.split("=")[1];
        setToken(urlToken || "");
    }, [])

    useEffect(() => {
        if (token.length > 0) {
            verifyUserEmail();
        }
    }, [token]);

    return (
        <div className="flex flex-col items-center justify-center min-h-screen py-2">
            <h1 className="text-4xl p-3">Verify Email</h1>
            <h2 className="p-2 m-3 bg-orange-500 text-black">{token ? `${token}` : "no token"}</h2>
            {verified && (
                <div>
                    <h2 className="p-2 bg-green-500 text-black">Email Verified</h2>
                    <Link href="/login" className="bg-blue-500 hover:bg-blue-700 text-white
                    font-bold py-2 px-4 rounded">Login</Link>
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