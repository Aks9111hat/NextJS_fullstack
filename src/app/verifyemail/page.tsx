"use client"
import axios from "axios"
import Link from "next/link"
import React, { useEffect, useState } from 'react';
import Footer from "@/components/Footer";


export default function VerifyEmailPage() {
    const [token, setToken] = useState("");
    const [verified, setVerified] = useState(false);
    const [error, setError] = useState(false);
    const [verifying, setVerifying] = useState(true);  // State to track the verification process

    const verifyUserEmail = async () => {
        try {
            const response = await axios.post('/api/users/verifyemail', { token });
            setVerified(true);
        } catch (error: any) {
            setError(true);
            console.log(error.response.data);
        } finally {
            setVerifying(false);  // Set verifying to false after the request completes
        }
    };

    useEffect(() => {
        const urlToken = window.location.search.split("=")[1];
        setToken(urlToken || "");
    }, []);

    useEffect(() => {
        if (token.length > 0) {
            verifyUserEmail();
        } else {
            setVerifying(false);  // If there's no token, stop the verifying process
        }
    }, [token]);

    return (
        <div>
            <div className="flex flex-col items-center justify-center min-h-screen py-2 bg-gray-100 px-4 sm:px-6 lg:px-8">
                <div className="w-full space-y-8">
                    <div className="text-center">
                        <h1 className="text-4xl font-extrabold text-gray-900">Verify Email</h1>
                        {verifying && (
                            <p className="mt-2 text-base text-gray-600">We are verifying your email. Please wait...</p>
                        )}
                    </div>
                    {token && (
                        <div className="text-center bg-yellow-100 text-yellow-800 px-4 py-3 rounded relative" role="alert">
                            <span className="block sm:inline break-words">Token: {token}</span>
                        </div>
                    )}
                    {verified && (
                        <div className="flex flex-col justify-center items-center bg-green-100 text-green-800 px-4 py-3 rounded relative" role="alert">
                            <span className="block sm:inline">Email Verified Successfully!</span>
                            <Link href="/login" className="mt-4 inline-block bg-blue-500 hover:bg-blue-700 text-white font-bold py-2 px-4 rounded">
                                Login
                            </Link>
                        </div>
                    )}
                    {error && (
                        <div className="text-center bg-red-100 text-red-800 px-4 py-3 rounded relative" role="alert">
                            <span className="block sm:inline">Something went wrong. Please try again.</span>
                        </div>
                    )}
                </div>
            </div>
            <Footer />
        </div>
    );
}
