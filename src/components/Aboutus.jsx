import React from "react";
import { FaBullseye, FaEye } from "react-icons/fa";

export const AboutUs = () => {
    return (
        <section id="about" className="px-6 md:px-20 py-20 bg-gray-50">
            <div className="max-w-5xl mx-auto text-center">

                <h2 className="text-3xl font-bold text-[#101527]">Who We Are</h2>
                <p className="mt-6 text-gray-700 text-lg md:text-xl leading-relaxed">
                    Welcome to <strong>C&C Advocates LLP</strong>, where we’re building a different kind of law
                    firm; one that understands the pulse of modern business, technology, and society. We pair deep
                    legal knowledge with fresh perspective, ensuring solutions that work now and set you up for
                    the future. We cut through legal clutter so your business can move faster.
                </p>

                <p className="mt-4 text-gray-700 text-lg md:text-xl leading-relaxed">
                    At C&C, we’re not just lawyers; we’re long-term partners committed to unlocking opportunity,
                    reducing risk, and enabling success.
                </p>


                <div className="mt-12 border-t border-gray-300 w-24 mx-auto"></div>

                {/* Mission & Vision */}
                <div className="mt-12 flex flex-col md:flex-row justify-center gap-12">
                    {/* Mission */}
                    <div className="flex flex-col items-center text-center max-w-xs">
                        <FaBullseye className="text-[#D4AF37] text-4xl mb-4" />
                        <h3 className="text-xl font-semibold text-[#101527]">Our Mission</h3>
                        <p className="mt-2 text-gray-700">
                            At C&C LLP, we aim to empower clients with innovative, strategic legal solutions
                            grounded in integrity and excellence
                        </p>
                    </div>

                    {/* Vision */}
                    <div className="flex flex-col items-center text-center max-w-xs">
                        <FaEye className="text-[#D4AF37] text-4xl mb-4" />
                        <h3 className="text-xl font-semibold text-[#101527]">Our Vision</h3>
                        <p className="mt-2 text-gray-700">
                            To be the leading boutique law firm in Kenya, renowned for expertise, client
                            dedication and transformative impact
                        </p>
                    </div>
                </div>
            </div>
        </section>
    );
};
