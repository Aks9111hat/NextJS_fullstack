import React, { useState } from 'react';
import { motion } from 'framer-motion';

const Features2: React.FC = () => {
    const [activeTab, setActiveTab] = useState(0);

    const featureData = [
        {
            title: 'Personalized Diet Plans',
            description: 'Receive customized diet plans tailored to your specific goals and preferences.',
            imgSrc: 'https://images.unsplash.com/photo-1510781892255-8d61a6bfe047?crop=entropy&cs=tinysrgb&fit=max&fm=jpg&ixid=M3w5MTMyMXwwfDF8cmFuZG9tfHx8fHx8fHx8MTcyMTE1MjYzMnw&ixlib=rb-4.0.3&q=80&w=1080',
            imgAlt: 'Personalized Diet Plans Image',
        },
        {
            title: 'Effective Workout Routines',
            description: 'Access a variety of workout routines designed to help you achieve your fitness objectives.',
            imgSrc: 'https://images.unsplash.com/photo-1582224163312-0735047647c6?crop=entropy&cs=tinysrgb&fit=max&fm=jpg&ixid=M3w5MTMyMXwwfDF8cmFuZG9tfHx8fHx8fHx8MTcyMTE1MjYzM3w&ixlib=rb-4.0.3&q=80&w=1080',
            imgAlt: 'Effective Workout Routines Image',
        },
        {
            title: 'Nutritional Guidance',
            description: 'Get expert nutritional guidance to support your diet and workout plans.',
            imgSrc: 'https://images.unsplash.com/photo-1465146344425-f00d5f5c8f07?crop=entropy&cs=tinysrgb&fit=max&fm=jpg&ixid=M3w5MTMyMXwwfDF8cmFuZG9tfHx8fHx8fHx8MTcyMTE1MjYzM3w&ixlib=rb-4.0.3&q=80&w=1080',
            imgAlt: 'Nutritional Guidance Image',
        },
    ];

    return (
        <>
            <div className="py-12">
                <div className="max-w-screen-xl mx-auto grid grid-cols-1 md:grid-cols-2 gap-8">
                    <div className="space-y-4">
                        {featureData.map((feature, index) => (
                            <motion.div
                                key={index}
                                onClick={() => setActiveTab(index)}
                                className={`flex flex-col p-4 cursor-pointer ${activeTab === index ? 'bg-gray-200' : 'bg-white'} gap-4`}
                                initial={{ opacity: 0 }}
                                animate={{ opacity: 1 }}
                                transition={{ duration: 0.5 }}
                            >
                                <h2 className="text-xl font-bold">{feature.title}</h2>
                                <span>{feature.description}</span>
                            </motion.div>
                        ))}
                    </div>
                    <div className="relative h-64 md:h-auto">
                        {featureData.map((feature, index) => (
                            activeTab === index && (
                                <motion.img
                                    key={feature.imgSrc}
                                    src={feature.imgSrc}
                                    alt={feature.imgAlt}
                                    className="w-full h-auto object-cover rounded-md aspect-video"
                                    initial={{ opacity: 0 }}
                                    animate={{ opacity: 1 }}
                                    transition={{ duration: 0.5 }}
                                />
                            )
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

export default Features2;
