// import React from 'react';

// const Contact = () => {
//     return (
//         <>
//             <div className="flex flex-col items-center overflow-hidden relative py-12">
//                 <div className="flex flex-col items-center gap-8 max-w-screen-lg mx-auto">
//                     <div className="flex flex-col items-center gap-4 max-w-2xl">
//                         <span className="text-sm">
//                             Our team is here to help you with any inquiries you may have.
//                         </span>
//                         <div className="flex flex-col items-center gap-6 w-full">
//                             <h2 className="text-2xl font-bold text-center">Contact Us</h2>
//                             <p className="text-lg text-center">
//                                 Have questions or need assistance? Feel free to reach out to us.
//                             </p>
//                         </div>
//                     </div>
//                     <div className="flex flex-wrap gap-12 w-full items-start">
//                         <div className="flex flex-col items-center gap-6 w-full md:w-1/3">
//                             <svg viewBox="0 0 1024 1024" className="w-8 h-8">
//                                 <path d="M854 342v-86l-342 214-342-214v86l342 212zM854 170q34 0 59 26t25 60v512q0 34-25 60t-59 26h-684q-34 0-59-26t-25-60v-512q0-34 25-60t59-26h684z"></path>
//                             </svg>
//                             <div className="flex flex-col items-center gap-6 w-full">
//                                 <div className="flex flex-col items-stretch gap-4 w-full">
//                                     <h3 className="text-xl font-semibold text-center">Email</h3>
//                                     <p className="text-lg text-center">
//                                         We strive to provide the best customer service and support.
//                                     </p>
//                                 </div>
//                                 <span className="text-sm text-center">
//                                     info@yourwebsite.com
//                                 </span>
//                             </div>
//                         </div>
//                         <div className="flex flex-col items-center gap-6 w-full md:w-1/3">
//                             <svg viewBox="0 0 1024 1024" className="w-8 h-8">
//                                 <path d="M282 460q96 186 282 282l94-94q20-20 44-10 72 24 152 24 18 0 30 12t12 30v150q0 18-12 30t-30 12q-300 0-513-213t-213-513q0-18 12-30t30-12h150q18 0 30 12t12 30q0 80 24 152 8 26-10 44z"></path>
//                             </svg>
//                             <div className="flex flex-col items-center gap-6 w-full">
//                                 <div className="flex flex-col items-stretch gap-4 w-full">
//                                     <h3 className="text-xl font-semibold text-center">Phone</h3>
//                                     <p className="text-lg text-center">
//                                         Follow us on social media for updates and tips.
//                                     </p>
//                                 </div>
//                                 <span className="text-sm text-center">+123-456-7890</span>
//                             </div>
//                         </div>
//                         <div className="flex flex-col items-center gap-6 w-full md:w-1/3">
//                             <svg viewBox="0 0 1024 1024" className="w-8 h-8">
//                                 <path d="M512 0c-176.732 0-320 143.268-320 320 0 320 320 704 320 704s320-384 320-704c0-176.732-143.27-320-320-320zM512 512c-106.040 0-192-85.96-192-192s85.96-192 192-192 192 85.96 192 192-85.96 192-192 192z"></path>
//                             </svg>
//                             <div className="flex flex-col items-center gap-6 w-full">
//                                 <div className="flex flex-col items-stretch gap-4 w-full">
//                                     <h3 className="text-xl font-semibold text-center">Office</h3>
//                                     <p className="text-lg text-center">
//                                         Stay connected with us for the latest news and offers.
//                                     </p>
//                                 </div>
//                                 <span className="text-sm text-center">
//                                     123 Main Street, City, Country
//                                 </span>
//                             </div>
//                         </div>
//                     </div>
//                 </div>
//             </div>
//         </>
//     );
// };

// export default Contact;

import React from 'react';

const Contact = () => {
    return (
        <div className="flex flex-col items-center overflow-hidden relative py-12 bg-gray-100">
            <div className="flex flex-col items-center gap-8 max-w-screen-lg mx-auto">
                <div className="flex flex-col items-center gap-4 max-w-2xl">
                    <span className="text-sm">
                        Our team is here to help you with any inquiries you may have.
                    </span>
                    <div className="flex flex-col items-center gap-6 w-full">
                        <h2 className="text-2xl font-bold text-center">Contact Us</h2>
                        <p className="text-lg text-center">
                            Have questions or need assistance? Feel free to reach out to us.
                        </p>
                    </div>
                </div>
                <div className="flex flex-wrap justify-center gap-32
                 w-full items-start">
                    <div className="flex flex-col items-center gap-6 w-full md:w-1/4">
                        <svg viewBox="0 0 1024 1024" className="w-8 h-8">
                            <path d="M854 342v-86l-342 214-342-214v86l342 212zM854 170q34 0 59 26t25 60v512q0 34-25 60t-59 26h-684q-34 0-59-26t-25-60v-512q0-34 25-60t59-26h684z"></path>
                        </svg>
                        <div className="flex flex-col items-center gap-6 w-full">
                            <div className="flex flex-col items-stretch gap-4 w-full">
                                <h3 className="text-xl font-semibold text-center">Email</h3>
                                <p className="text-lg text-center">
                                    We strive to provide the best customer service and support.
                                </p>
                            </div>
                            <span className="text-sm text-center">
                                info@yourwebsite.com
                            </span>
                        </div>
                    </div>
                    <div className="flex flex-col items-center gap-6 w-full md:w-1/4">
                        <svg viewBox="0 0 1024 1024" className="w-8 h-8">
                            <path d="M282 460q96 186 282 282l94-94q20-20 44-10 72 24 152 24 18 0 30 12t12 30v150q0 18-12 30t-30 12q-300 0-513-213t-213-513q0-18 12-30t30-12h150q18 0 30 12t12 30q0 80 24 152 8 26-10 44z"></path>
                        </svg>
                        <div className="flex flex-col items-center gap-6 w-full">
                            <div className="flex flex-col items-stretch gap-4 w-full">
                                <h3 className="text-xl font-semibold text-center">Phone</h3>
                                <p className="text-lg text-center">
                                    Follow us on social media for updates and tips.
                                </p>
                            </div>
                            <span className="text-sm text-center">+123-456-7890</span>
                        </div>
                    </div>
                    <div className="flex flex-col items-center gap-6 w-full md:w-1/4">
                        <svg viewBox="0 0 1024 1024" className="w-8 h-8">
                            <path d="M512 0c-176.732 0-320 143.268-320 320 0 320 320 704 320 704s320-384 320-704c0-176.732-143.27-320-320-320zM512 512c-106.040 0-192-85.96-192-192s85.96-192 192-192 192 85.96 192 192-85.96 192-192 192z"></path>
                        </svg>
                        <div className="flex flex-col items-center gap-6 w-full">
                            <div className="flex flex-col items-stretch gap-4 w-full">
                                <h3 className="text-xl font-semibold text-center">Office</h3>
                                <p className="text-lg text-center">
                                    Stay connected with us for the latest news and offers.
                                </p>
                            </div>
                            <span className="text-sm text-center">
                                123 Main Street, City, Country
                            </span>
                        </div>
                    </div>
                </div>
            </div>
        </div>
    );
};

export default Contact;
