import React from 'react';
import { motion } from 'framer-motion';

const CTA: React.FC = () => {
    const heading1 = 'Get Started on Your Health Journey Today';
    const content1 = 'Sign up now to access personalized diet and workout plans tailored to your goals';
    const action1 = 'Sign Up Now';

    return (
        <>
            <div className="py-12">
                <div className="max-w-screen-xl mx-auto">
                    <motion.div
                        className="bg-accent2 transform transition-transform duration-100"
                        initial={{ rotateZ: 2 }}
                        whileHover={{ rotateZ: -1, scale: 1.05 }}
                    >
                        <motion.div
                            className="transform transition-transform duration-100 bg-accent1 p-16 hover:bg-black hover:text-white"
                            initial={{ rotateZ: -2 }}
                            whileHover={{ rotateZ: 1, scale: 1.05 }}

                        // animate={{ rotateZ: 0 }}
                        // transition={{ duration: 0.3, ease:"easeInOut" }}
                        >
                            <div className="flex flex-col lg:flex-row justify-between items-center m-10">
                                <div className="flex flex-col space-y-8">
                                    <span className="text-2xl font-bold">{heading1}</span>
                                    <p className="text-lg">{content1}</p>
                                </div>
                                <div className="mt-4 lg:mt-0">
                                    <motion.button
                                        type="button"
                                        className="transition ease-in-out delay-150 bg-myWebBlue py-2 px-5 text-myWebText  hover:text-white hover:bg-black hover:border-x-2 hover:border-myWebBlue"
                                        whileHover={{ scale: 1.1 }}
                                    >
                                        {action1}
                                    </motion.button>
                                </div>
                            </div>
                        </motion.div>
                    </motion.div>
                </div>
            </div>
            {/* <style jsx>{`
        .bg-accent2 {
          background-color: #B2D1E6;
        }
        .bg-accent1 {
          background-color: #C9E8FF;
        }
      `}</style> */}
        </>
    );
};

export default CTA;
