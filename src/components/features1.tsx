import React, { useState } from 'react';
import { motion } from 'framer-motion';

const Features1: React.FC = () => {
    const [activeTab, setActiveTab] = useState(0);

    const featureData = [
        {
            imgSrc: 'https://images.unsplash.com/photo-1607962837359-5e7e89f86776?crop=entropy&cs=tinysrgb&fit=max&fm=jpg&ixid=M3w5MTMyMXwwfDF8cmFuZG9tfHx8fHx8fHx8MTcyMTE1MjYzMnw&ixlib=rb-4.0.3&q=80&w=1080',
            imgAlt: 'Healthy meal preparation',
            title: 'Nutritious Diet Plans',
            description: 'Expertly crafted diet plans to help you achieve your health goals',
        },
        {
            imgSrc: 'https://images.unsplash.com/photo-1502921451607-29fa99d270d4?crop=entropy&cs=tinysrgb&fit=max&fm=jpg&ixid=M3w5MTMyMXwwfDF8cmFuZG9tfHx8fHx8fHx8MTcyMTE1MjYzM3w&ixlib=rb-4.0.3&q=80&w=1080',
            imgAlt: 'Delicious and nutritious recipes',
            title: 'Healthy Recipes',
            description: 'Access to a wide range of delicious and nutritious recipes',
        },
        {
            imgSrc: 'https://images.unsplash.com/photo-1582213782179-e0d53f98f2ca?crop=entropy&cs=tinysrgb&fit=max&fm=jpg&ixid=M3w5MTMyMXwwfDF8cmFuZG9tfHx8fHx8fHx8MTcyMTE1MjYzMXw&ixlib=rb-4.0.3&q=80&w=1080',
            imgAlt: 'Customized workout plan',
            title: 'Customized Workout Plans',
            description: 'Personalized workout plans tailored to your fitness goals',
        },
    ];

    return (
        <>
            <div className="py-12">
                <div className="max-w-screen-xl mx-auto grid grid-cols-1 lg:grid-cols-2 gap-12">
                    <div className="relative">
                        {featureData.map((feature, index) => (
                            activeTab === index && (
                                <motion.img
                                    key={index}
                                    alt={feature.imgAlt}
                                    src={feature.imgSrc}
                                    className="w-full h-auto object-cover rounded-md aspect-video"
                                    initial={{ opacity: 0 }}
                                    animate={{ opacity: 1 }}
                                    transition={{ duration: 0.5 }}
                                />
                            )
                        ))}
                    </div>
                    <div className="flex flex-col space-y-8">
                        {featureData.map((feature, index) => (
                            <motion.div
                                key={index}
                                onClick={() => setActiveTab(index)}
                                className={`cursor-pointer flex  items-start space-x-4 p-4 ${activeTab === index ? 'bg-gray-200' : 'bg-white'}`}
                                initial={{ opacity: 0 }}
                                animate={{ opacity: 1 }}
                                transition={{ duration: 0.5 }}
                            >
                                <div>
                                    {activeTab === index && (
                                        <div className="w-1 h-full bg-gray-800"></div>
                                    )}
                                </div>
                                <div className="flex flex-col gap-4">
                                    <h2 className="text-xl font-bold">{feature.title}</h2>
                                    <span className="text-sm text-gray-600">
                                        {feature.description}
                                    </span>
                                </div>
                            </motion.div>
                        ))}
                    </div>
                </div>
            </div>
            <style jsx>{`
                .bg-gray-200 {
                    background-color: #e5e7eb;
                }
                .bg-white {
                    background-color: #ffffff;
                }
            `}</style>
        </>
    );
};

export default Features1;
