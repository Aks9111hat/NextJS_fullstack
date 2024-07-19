"use client";
import Logo from "@/components/logo";
import { useUser } from "@/contexts/userContext";
import toast from "react-hot-toast";
import { useRouter } from "next/navigation";
import axios from "axios";
import Link from "next/link";
import { useState } from "react";
import { motion } from "framer-motion";


const Navbar: React.FC = () => {
    const router = useRouter();
    const { user, getUserDetails } = useUser();
    const [isMobileMenuOpen, setIsMobileMenuOpen] = useState(false);

    const logout = async () => {
        try {
            await axios.get("/api/users/logout");
            toast.success("Logged out successfully");
            getUserDetails();
            router.push("/login");
        } catch (error: any) {
            console.log(error.message);
            toast.error(error.message);
        }
    };

    const navSignup = () => {
        router.push("/signup");
    };

    const navLogin = () => {
        router.push("/login");
    };

    const toggleMobileMenu = () => {
        setIsMobileMenuOpen(!isMobileMenuOpen);
    };

    return (
        <header className="bg-stone-100 p-4 rounded-b-2xl shadow-2xl shadow-stone-400">
            <nav className="max-w-7xl mx-auto flex justify-between items-center">
                <div className="flex items-center gap-4">
                    <Logo />
                    <div className="hidden md:flex gap-3 lg:gap-4">
                        <Link href="/" className="text-neutral-800 hover:text-blue-700">
                            Home
                        </Link>
                        <Link href="/" className="text-neutral-800 hover:text-blue-700">
                            Diet Plans
                        </Link>
                        <Link href="/" className="text-neutral-800 hover:text-blue-700">
                            Workout Plans
                        </Link>
                        <Link href="/" className="text-neutral-800 hover:text-blue-700">
                            Success Stories
                        </Link>
                        <Link href="/" className="text-neutral-800 hover:text-blue-700">
                            Contact Us
                        </Link>
                    </div>
                </div>
                <div className="hidden md:flex items-center gap-4">
                    {user === null ? (
                        <>
                            <motion.button
                                onClick={navSignup}
                                className="relative py-2 px-5 text-myWebText bg-myWebBlue overflow-hidden hover:text-white"
                                whileHover="hover"
                            >
                                <span className="relative z-10">SignUp</span>
                                <motion.div
                                    className="absolute inset-0 z-0"
                                    initial={{ width: '0%' }}
                                    variants={{
                                        hover: {
                                            width: '100%',
                                            transition: {
                                                duration: 0.5,
                                                ease: 'easeInOut',
                                            },
                                        },
                                    }}
                                    style={{ backgroundColor: 'black', originX: 0 }}
                                />
                            </motion.button>
                            <motion.button
                                onClick={navLogin}
                                className="relative py-1 px-5 text-myWebBlue border-2 border-myWebBlue overflow-hidden hover:text-white hover:border-black"
                                whileHover="hover"
                            >
                                <span className="relative z-10">LogIn</span>
                                <motion.div
                                    className="absolute inset-0 z-0"
                                    initial={{ width: '0%' }}
                                    variants={{
                                        hover: {
                                            width: '100%',
                                            transition: {
                                                duration: 0.5,
                                                ease: 'easeInOut',
                                            },
                                        },
                                    }}
                                    style={{ backgroundColor: 'black', originX: 0 }}
                                />
                            </motion.button>
                        </>
                    ) : (
                        // <button onClick={logout} className="transition ease-in-out delay-150 bg-myWebBlue py-2 px-5 text-myWebText  hover:text-white hover:bg-black">
                        //     LogOut
                        // </button>
                        <motion.button
                                onClick={logout}
                            className="relative py-1 px-5 text-myWebBlue border-2 border-myWebBlue overflow-hidden hover:text-white hover:border-black"
                            whileHover="hover"
                        >
                            <span className="relative z-10">LogOut</span>
                            <motion.div
                                className="absolute inset-0 z-0"
                                initial={{ width: '0%' }}
                                variants={{
                                    hover: {
                                        width: '100%',
                                        transition: {
                                            duration: 0.5,
                                            ease: 'easeInOut',
                                        },
                                    },
                                }}
                                style={{ backgroundColor: 'black', originX: 0 }}
                            />
                        </motion.button>
                    )}
                </div>
                <div className="md:hidden flex items-center">
                    <button onClick={toggleMobileMenu} className="text-lg focus:outline-none">
                        <svg
                            className="w-6 h-6"
                            fill="none"
                            stroke="currentColor"
                            viewBox="0 0 24 24"
                            xmlns="http://www.w3.org/2000/svg"
                        >
                            <path
                                strokeLinecap="round"
                                strokeLinejoin="round"
                                strokeWidth="2"
                                d="M4 6h16M4 12h16m-7 6h7"
                            ></path>
                        </svg>
                    </button>
                </div>
            </nav>
            {isMobileMenuOpen && (
                <div className="md:hidden flex flex-col mt-4 gap-8">
                    <div className="flex flex-col">
                        <Link href="/" className="text-neutral-800 py-2 hover:text-blue-700" onClick={toggleMobileMenu}>
                            Home
                        </Link>
                        <Link href="/" className="text-neutral-800 py-2 hover:text-blue-700" onClick={toggleMobileMenu}>
                            Diet Plans
                        </Link>
                        <Link href="/" className="text-neutral-800 py-2 hover:text-blue-700" onClick={toggleMobileMenu}>
                            Workout Plans
                        </Link>
                        <Link href="/" className="text-neutral-800 py-2 hover:text-blue-700" onClick={toggleMobileMenu}>
                            Success Stories
                        </Link>
                        <Link href="/" className="text-neutral-800 py-2 hover:text-blue-700" onClick={toggleMobileMenu}>
                            Contact Us
                        </Link>
                    </div>

                    <div className="flex gap-8">
                        {user === null ? (
                            <>
                                <motion.button
                                    onClick={navSignup}
                                    className="relative py-2 px-5 text-myWebText bg-myWebBlue overflow-hidden hover:text-white"
                                    whileHover="hover"
                                >
                                    <span className="relative z-10">SignUp</span>
                                    <motion.div
                                        className="absolute inset-0 z-0"
                                        initial={{ width: '0%' }}
                                        variants={{
                                            hover: {
                                                width: '100%',
                                                transition: {
                                                    duration: 0.5,
                                                    ease: 'easeInOut',
                                                },
                                            },
                                        }}
                                        style={{ backgroundColor: 'black', originX: 0 }}
                                    />
                                </motion.button>
                                <motion.button
                                    onClick={navLogin}
                                    className="relative py-1 px-5 text-myWebBlue border-2 border-myWebBlue overflow-hidden hover:text-white hover:border-black"
                                    whileHover="hover"
                                >
                                    <span className="relative z-10">LogIn</span>
                                    <motion.div
                                        className="absolute inset-0 z-0"
                                        initial={{ width: '0%' }}
                                        variants={{
                                            hover: {
                                                width: '100%',
                                                transition: {
                                                    duration: 0.5,
                                                    ease: 'easeInOut',
                                                },
                                            },
                                        }}
                                        style={{ backgroundColor: 'black', originX: 0 }}
                                    />
                                </motion.button>
                            </>
                        ) : (
                                <motion.button
                                    onClick={logout}
                                    className="relative py-1 px-5 text-myWebBlue border-2 border-myWebBlue overflow-hidden hover:text-white hover:border-black"
                                    whileHover="hover"
                                >
                                    <span className="relative z-10">LogOut</span>
                                    <motion.div
                                        className="absolute inset-0 z-0"
                                        initial={{ width: '0%' }}
                                        variants={{
                                            hover: {
                                                width: '100%',
                                                transition: {
                                                    duration: 0.5,
                                                    ease: 'easeInOut',
                                                },
                                            },
                                        }}
                                        style={{ backgroundColor: 'black', originX: 0 }}
                                    />
                                </motion.button>
                        )}
                    </div>

                </div>
            )}
        </header>
    );
};

export default Navbar;


