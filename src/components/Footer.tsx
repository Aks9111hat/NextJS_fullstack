import React from 'react';
import Logo from '@/components/logo';

const Footer = () => {
    return (
        <footer className="flex flex-col items-center justify-center w-full bg-gray-900 text-white py-10 px-4">
            <div className="flex flex-col items-start w-full max-w-6xl">
                <div className="flex flex-col lg:flex-row lg:justify-between items-start w-full gap-16 lg:gap-8 border-radius-4">
                    <div className="flex flex-col items-start gap-6 w-full lg:w-1/2">
                        <Logo />
                        <span className="text-sm">
                            Subscribe to our newsletter for the latest updates on new features and product releases.
                        </span>
                        <div className="flex flex-col items-start gap-4 w-full">
                            <div className="flex w-full items-stretch gap-4">
                                <input
                                    type="email"
                                    placeholder="Enter your email"
                                    className="w-full lg:w-3/4 h-10 p-2 bg-gray-800 text-base border border-gray-700 rounded"
                                />
                                <button className="w-full lg:w-1/4 h-10 p-2 text-sm border border-gray-400 bg-blue-600 hover:bg-blue-700 rounded">
                                    Subscribe
                                </button>
                            </div>
                            <span className="w-full text-xs text-left text-gray-400">
                                We respect your privacy.
                            </span>
                        </div>
                    </div>
                    <div className="flex flex-col lg:flex-row justify-end w-full gap-8 lg:gap-16">
                        <div className="flex flex-col items-start gap-4 w-full lg:w-auto">
                            <strong className="text-lg">Explore</strong>
                            <div className="flex flex-col gap-2">
                                <span className="text-sm hover:text-blue-400 cursor-pointer">About Us</span>
                                <span className="text-sm hover:text-blue-400 cursor-pointer">Contact Us</span>
                                <span className="text-sm hover:text-blue-400 cursor-pointer">FAQs</span>
                                <span className="text-sm hover:text-blue-400 cursor-pointer">Blog</span>
                                <span className="text-sm hover:text-blue-400 cursor-pointer">Terms of Use</span>
                            </div>
                        </div>
                        <div className="flex flex-col items-start gap-4 w-full lg:w-auto">
                            <strong className="text-lg">Legal</strong>
                            <div className="flex flex-col gap-2">
                                <span className="text-sm hover:text-blue-400 cursor-pointer">Privacy Policy</span>
                                <span className="text-sm hover:text-blue-400 cursor-pointer">Cookies Policy</span>
                                <span className="text-sm hover:text-blue-400 cursor-pointer">Disclaimer</span>
                                <span className="text-sm hover:text-blue-400 cursor-pointer">Refund Policy</span>
                                <span className="text-sm hover:text-blue-400 cursor-pointer">Accessibility</span>
                            </div>
                        </div>
                        <div className="flex flex-col items-start gap-4 w-full lg:w-auto">
                            <strong className="text-lg">Social Links</strong>
                            <div className="flex flex-col gap-2">
                                <div className="flex items-center gap-3 py-2 cursor-pointer hover:text-blue-400">
                                    <svg viewBox="0 0 877.714 1024" className="w-5 h-5">
                                        <path d="M713.143 73.143c90.857 0 164.571 73.714 164.571 164.571v548.571c0 90.857-73.714 164.571-164.571 164.571h-107.429v-340h113.714l17.143-132.571h-130.857v-84.571c0-38.286 10.286-64 65.714-64l69.714-0.571v-118.286c-12-1.714-53.714-5.143-101.714-5.143-101.143 0-170.857 61.714-170.857 174.857v97.714h-114.286v132.571h114.286v340h-304c-90.857 0-164.571-73.714-164.571-164.571v-548.571c0-90.857 73.714-164.571 164.571-164.571h548.571z"></path>
                                    </svg>
                                    <span className="text-sm">Facebook</span>
                                </div>
                                <div className="flex items-center gap-3 py-2 cursor-pointer hover:text-blue-400">
                                    <svg viewBox="0 0 877.714 1024" className="w-5 h-5">
                                        <path d="M585.143 512c0-80.571-65.714-146.286-146.286-146.286s-146.286 65.714-146.286 146.286 65.714 146.286 146.286 146.286 146.286-65.714 146.286-146.286zM664 512c0 124.571-100.571 225.143-225.143 225.143s-225.143-100.571-225.143-225.143 100.571-225.143 225.143-225.143 225.143 100.571 225.143 225.143zM725.714 277.714c0 29.143-23.429 52.571-52.571 52.571s-52.571-23.429-52.571-52.571 23.429-52.571 52.571-52.571 52.571 23.429 52.571 52.571zM438.857 152c-64 0-201.143-5.143-258.857 17.714-20 8-34.857 17.714-50.286 33.143s-25.143 30.286-33.143 50.286c-22.857 57.714-17.714 194.857-17.714 258.857s-5.143 201.143 17.714 258.857c8 20 17.714 34.857 33.143 50.286s30.286 25.143 50.286 33.143c57.714 22.857 194.857 17.714 258.857 17.714s201.143 5.143 258.857-17.714c20-8 34.857-17.714 50.286-33.143s25.143-30.286 33.143-50.286c22.857-57.714 17.714-194.857 17.714-258.857s5.143-201.143-17.714-258.857c-8-20-17.714-34.857-33.143-50.286s-30.286-25.143-50.286-33.143c-57.714-22.857-194.857-17.714-258.857-17.714zM877.714 512c0 60.571 0.571 120.571-2.857 181.143-3.429 70.286-19.429 132.571-70.857 184s-113.714 67.429-184 70.857c-60.571 3.429-120.571 2.857-181.143 2.857s-120.571 0.571-181.143-2.857c-70.286-3.429-132.571-19.429-184-70.857s-67.429-113.714-70.857-184c-3.429-60.571-2.857-120.571-2.857-181.143s-0.571-120.571 2.857-181.143c3.429-70.286 19.429-132.571 70.857-184s113.714-67.429 184-70.857c60.571-3.429 120.571-2.857 181.143-2.857s120.571-0.571 181.143 2.857c70.286 3.429 132.571 19.429 184 70.857s67.429 113.714 70.857 184c3.429 60.571 2.857 120.571 2.857 181.143z"></path>
                                    </svg>
                                    <span className="text-sm">Instagram</span>
                                </div>
                                <div className="flex items-center gap-3 py-2 cursor-pointer hover:text-blue-400">
                                    <svg viewBox="0 0 950.857 1024" className="w-5 h-5">
                                        <path d="M925.714 233.143c-25.143 36.571-56.571 69.143-92.571 95.429 0.571 8 0.571 16 0.571 24 0 244-185.714 525.143-525.143 525.143-104.571 0-201.714-30.286-283.429-82.857 14.857 1.714 29.143 2.286 44.571 2.286 86.286 0 165.714-29.143 228.286-78.857-80.571-1.714-148-54.857-171.429-128 11.429 1.714 22.857 3.429 34.857 3.429 16.571 0 32.571-2.286 47.429-6.286-84-17.143-147.429-91.429-147.429-180v-2.286c24.571 13.714 53.143 22.286 83.429 23.429-49.143-32.571-81.429-88-81.429-150.857 0-33.143 8.857-64 24.571-90.286 88 108.571 220.571 180.286 369.714 187.429-3.143-13.143-4.571-27.143-4.571-41.714 0-99.429 80.571-180 180-180 51.714 0 98.571 21.429 131.429 56 41.143-8 80.571-23.143 115.429-44-13.429 42.286-41.429 78.286-78.286 101.143 36.571-4 71.429-14.286 103.429-28.571-24.571 36-55.143 67.714-90.286 93.143z"></path>
                                    </svg>
                                    <span className="text-sm">Twitter</span>
                                </div>
                                <div className="flex items-center gap-3 py-2 cursor-pointer hover:text-blue-400">
                                    <svg viewBox="0 0 950.857 1024" className="w-5 h-5">
                                        <path d="M0 511.429c0 242.286 157.143 447.429 375.429 520.571 27.429 5.143 37.429-12 37.429-26.571 0-13.143-0.571-56.571-0.571-102.857-136 24.857-170.857-32.571-181.143-62.286-6.857-18.286-36.571-62.857-62.857-75.429-21.429-11.429-52-39.429-0.571-40.286 48.571-0.571 83.429 44.571 95.143 62.857 55.429 93.714 143.429 67.429 178.286 51.429 5.714-39.429 21.714-67.429 39.429-83.429-120.571-13.714-247.429-60.286-247.429-267.429 0-59.143 21.143-108.571 55.429-147.429-5.714-13.714-24.857-68 5.143-141.714 0 0 46.286-14.857 152.571 56.571 44.143-12.571 91.429-19.429 138.286-19.714 46.857 0.286 94.143 6.857 138.286 19.714 106.286-71.429 152.571-56.571 152.571-56.571 30 73.714 10.857 128 5.143 141.714 34.286 38.857 55.429 88.286 55.429 147.429 0 208.286-127.429 253.429-248.571 267.429 22 19.429 41.714 55.714 41.714 112.571 0 81.143-0.571 146.286-0.571 166.286 0 14.857 10 31.714 37.714 26.571 218.286-73.286 375.429-278.286 375.429-520.571 0-303.429-245.714-548.571-548.571-548.571s-548.571 245.143-548.571 548.571z"></path>
                                    </svg>
                                    <span className="text-sm">LinkedIn</span>
                                </div>
                            </div>
                        </div>
                    </div>
                </div>
            </div>
        </footer>
    );
};

export default Footer;
