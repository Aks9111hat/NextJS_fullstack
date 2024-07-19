

import React, { useRef } from 'react';
import { motion, useScroll, useSpring } from 'framer-motion';
import Link from 'next/link';

const Steps = () => {
    const ref = useRef(null);
    const { scrollYProgress } = useScroll({
        target: ref,
        offset: ["start end", "end end"]
    });
    const scaleX = useSpring(scrollYProgress, {
        stiffness: 100,
        damping: 30
    });

    const stepsData = [
        { title: 'Assessment', description: 'Complete a detailed assessment to understand your current fitness level and dietary habits.', label: '01' },
        { title: 'Custom Plan', description: 'Receive a personalized diet plan and workout routine tailored to your goals and preferences.', label: '02' },
        { title: 'Guidance', description: 'Get expert guidance and support throughout your fitness journey to help you stay on track.', label: '03' },
        { title: 'Progress Tracking', description: 'Track your progress, monitor changes, and adjust your plan as needed to achieve optimal results.', label: '04' },
    ];

    return (
        <div ref={ref} className="py-12 relative">
            <div className="max-w-screen-xl mx-auto flex flex-col md:flex-row gap-8">
                <div className="flex-1 flex flex-col gap-8">
                    <div className="sticky top-10 flex flex-col gap-8">
                        <h2 className="text-3xl font-bold">Discover the Power of Our Products</h2>
                        <p className="text-lg">
                            Lorem ipsum dolor sit amet, consectetur adipiscing elit. Suspendisse varius enim in eros elementum tristique. Duis cursus, mi quis viverra ornare, eros dolor interdum nulla, ut commodo diam libero vitae erat.
                        </p>
                        <div className="space-y-4">
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
                </div>
                <div className="flex-1 relative h-auto md:h-[100vh] flex flex-col gap-8">
                    {stepsData.map((step, index) => (
                        <motion.div
                            key={index}
                            className="sticky py-8 px-4 rounded-lg shadow-lg"
                            style={{
                                top: '10%',
                                transform: index % 2 === 0 ? 'rotate(-2deg)' : 'rotate(2deg)',
                                backgroundColor: index % 2 === 0 ? '#f0f4f8' : '#e0e4e8',
                                transition: 'background-color 0.3s ease-in-out'
                            }}
                            whileHover={{ scale: 1.05 }}
                        >
                            <h2 className="text-2xl font-bold">{step.title}</h2>
                            <span className="text-base">{step.description}</span>
                            <label className="text-3xl">{step.label}</label>
                        </motion.div>
                    ))}
                </div>
            </div>
        </div>
    );
};

export default Steps;


// import React, { useRef } from 'react';
// import { motion, useScroll, useSpring } from 'framer-motion';
// import Link from 'next/link';

// const Steps = () => {
//     const ref = useRef(null);
//     const { scrollYProgress } = useScroll({
//         target: ref,
//         offset: ["start end", "end end"] // Adjusted offset for better sticky behavior
//     });
//     const scaleX = useSpring(scrollYProgress, {
//         stiffness: 100,
//         damping: 30
//     });

//     const stepsData = [
//         { title: 'Assessment', description: 'Complete a detailed assessment to understand your current fitness level and dietary habits.', label: '01' },
//         { title: 'Custom Plan', description: 'Receive a personalized diet plan and workout routine tailored to your goals and preferences.', label: '02' },
//         { title: 'Guidance', description: 'Get expert guidance and support throughout your fitness journey to help you stay on track.', label: '03' },
//         { title: 'Progress Tracking', description: 'Track your progress, monitor changes, and adjust your plan as needed to achieve optimal results.', label: '04' },
//     ];

//     return (
//         <div ref={ref} className="py-12 relative mb-96">
//             <div className="max-w-screen-xl mx-auto flex flex-col md:flex-row gap-8">
//                 <div className="flex-1 flex flex-col gap-8">
//                     <div className="sticky top-10 flex flex-col gap-8">
//                         <h2 className="text-3xl font-bold">Discover the Power of Our Products</h2>
//                         <p className="text-lg">
//                             Lorem ipsum dolor sit amet, consectetur adipiscing elit. Suspendisse varius enim in eros elementum tristique. Duis cursus, mi quis viverra ornare, eros dolor interdum nulla, ut commodo diam libero vitae erat.
//                         </p>
//                         <div className="space-y-4">
//                             <Link href="/signup">
//                                 <motion.button
//                                     className="relative py-2 px-5 text-myWebText bg-myWebBlue overflow-hidden hover:text-white"
//                                     whileHover="hover"
//                                 >
//                                     <span className="relative z-10">Get Started</span>
//                                     <motion.div
//                                         className="absolute inset-0 z-0"
//                                         initial={{ width: '0%' }}
//                                         variants={{
//                                             hover: {
//                                                 width: '100%',
//                                                 transition: {
//                                                     duration: 0.5,
//                                                     ease: 'easeInOut',
//                                                 },
//                                             },
//                                         }}
//                                         style={{ backgroundColor: 'black', originX: 0 }}
//                                     />
//                                 </motion.button>
//                             </Link>
//                         </div>
//                     </div>
//                 </div>
//                 <div className="flex-1 relative h-auto md:h-[200vh] flex flex-col gap-8">
//                     {stepsData.map((step, index) => (
//                         <motion.div
//                             key={index}
//                             className="sticky py-8 px-4 rounded-lg shadow-lg"
//                             style={{
//                                 top: `${10 + index * 20}%`, // Adjusted top for better spacing
//                                 zIndex: 10, // Added z-index for visibility
//                                 transform: index % 2 === 0 ? 'rotate(-2deg)' : 'rotate(2deg)',
//                                 backgroundColor: index % 2 === 0 ? '#f0f4f8' : '#e0e4e8',
//                                 transition: 'background-color 0.3s ease-in-out'
//                             }}
//                             whileHover={{ scale: 1.05 }}
//                         >
//                             <h2 className="text-2xl font-bold">{step.title}</h2>
//                             <span className="text-base">{step.description}</span>
//                             <label className="text-3xl">{step.label}</label>
//                         </motion.div>
//                     ))}
//                 </div>
//             </div>
//         </div>
//     );
// };

// export default Steps;
