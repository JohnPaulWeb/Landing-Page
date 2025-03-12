"use client"

import { Star } from "lucide-react";
import Image from "next/image";


export default function Testimonials() {
    return (
        <section className="py-24 bg-gradient-to-b from-gray-50 to-white">
            <div className="container mx-auto px-4">
                <div className="max-w-3xl mx-auto text-center mb-16">
                    <span className="text-green-800">Voice</span>
                    <h2 className="text-3xl md:w-4xl font-bold text-gray-900 mt-4">Ayanokoji Kiyotaka</h2>
                    <p className="text-gray-600 leading-relaxed">Its you</p>
                </div>


                <div className="grid grid-cols-1 md:grid-cols-2 gap-12 items-center mb-16">
                    <div className="relative aspect-[4/3] rounded-2xl overflow-hidden shadow-lg">
                    <Image src="/kojic.jpg" alt="Ayanokoji Kiyotaka" fill className="object-cover" />
                    </div>

                    <div className="space-y-8">
                        <div className="flex gap-1">
                            {[...Array(5)].map((_, i) => (
                                <Star key={i} className="h-5 w-5 fill-yellow-400 text-yellow-400" />
                            ))}
                        </div>

                        <blockquote className="text-xl text-gray-900 font-medium italic">
                            You and I
                        </blockquote>

                        <div>
                            <p className="font-bold text-gray-900">Ayanokoji Kiyotaka</p>
                            <p className="text-gray-900">Ayanokoji Kiyotaka</p>
                        </div>
                    </div>
                </div>


                <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
                    {/* {[
                        {
                            comment: "",
                            name: "",
                            role: "",
                            period: "",
                        },

                        {
                            comment: "",
                            name: "",
                            role: "",
                            period: "",
                        },

                        {
                            comment: "",
                            name: "",
                            role: "",
                            period: "",
                        },
                    ]} */}
                </div>
            </div>
        </section>
    )
}