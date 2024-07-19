import { motion } from "framer-motion";
import Link from "next/link";
import React from "react";

const Hero: React.FC = () => {
    const images = [
        "https://images.unsplash.com/photo-1528467279403-46af96c37ab3?crop=entropy&cs=tinysrgb&fit=max&fm=jpg&ixid=M3w5MTMyMXwwfDF8cmFuZG9tfHx8fHx8fHx8MTcyMTE1MjYzNnw&ixlib=rb-4.0.3&q=80&w=1080",
        "https://images.unsplash.com/photo-1482100199117-a4a38a64e7e3?crop=entropy&cs=tinysrgb&fit=max&fm=jpg&ixid=M3w5MTMyMXwwfDF8cmFuZG9tfHx8fHx8fHx8MTcyMTE1MjYzMnw&ixlib=rb-4.0.3&q=80&w=1080",
        "https://images.unsplash.com/photo-1527933053326-89d1746b76b9?crop=entropy&cs=tinysrgb&fit=max&fm=jpg&ixid=M3w5MTMyMXwwfDF8cmFuZG9tfHx8fHx8fHx8MTcyMTE1MjYzMXw&ixlib=rb-4.0.3&q=80&w=1080",
        "https://images.unsplash.com/photo-1567712069346-43607c6f46a5?crop=entropy&cs=tinysrgb&fit=max&fm=jpg&ixid=M3w5MTMyMXwwfDF8cmFuZG9tfHx8fHx8fHx8MTcyMTE1MjYzNnw&ixlib=rb-4.0.3&q=80&w=1080",
        "https://images.unsplash.com/photo-1512428197675-daae5d4e1e43?crop=entropy&cs=tinysrgb&fit=max&fm=jpg&ixid=M3w5MTMyMXwwfDF8cmFuZG9tfHx8fHx8fHx8MTcyMTE1MjYzNXw&ixlib=rb-4.0.3&q=80&w=1080",
        "https://images.unsplash.com/photo-1461468611824-46457c0e11fd?crop=entropy&cs=tinysrgb&fit=max&fm=jpg&ixid=M3w5MTMyMXwwfDF8cmFuZG9tfHx8fHx8fHx8MTcyMTE1MjYzNHw&ixlib=rb-4.0.3&q=80&w=1080"
    ];

    return (
        <div className="flex flex-col items-center overflow-hidden w-full gap-12 mt-12">
            <div className="flex flex-col items-center gap-6 max-w-screen-xl py-8">
                <div className="flex flex-col items-center gap-6">
                    <h1 className="text-5xl font-bold text-center">Welcome to Fitness Hub</h1>
                    <p className="text-lg text-center">Your journey to a healthier lifestyle starts here.</p>
                </div>
                <div className="flex gap-4">
                    <Link href="/signup">
                        <motion.button
                            className="relative py-2 px-5 text-myWebText bg-myWebBlue overflow-hidden hover:text-white"
                            whileHover="hover"
                        >
                            <span className="relative z-10">Get Started</span>
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
                    </Link>
                </div>
            </div>
            <div className="flex flex-col items-start gap-6 w-full">
                <motion.div
                    initial={{ x: "0%" }}
                    animate={{ x: "-100%" }}
                    transition={{ repeat: Infinity, duration: 10, ease: "linear" }}
                    className="flex gap-4"
                >
                    {images.concat(images).map((src, index) => (
                        <img
                            key={index}
                            alt="Hero images"
                            src={src}
                            className="w-96 h-96 object-cover aspect-square"
                        />
                    ))}
                </motion.div>
                <motion.div
                    initial={{ x: "-100%" }}
                    animate={{ x: "0%" }}
                    transition={{ repeat: Infinity, duration: 10, ease: "linear" }}
                    className="flex gap-4"
                >
                    {images.concat(images).map((src, index) => (
                        <img
                            key={index}
                            alt="Hero images"
                            src={src}
                            className="w-96 h-96 object-cover aspect-square"
                        />
                    ))}
                </motion.div>
            </div>
        </div>
    );
};

export default Hero;
