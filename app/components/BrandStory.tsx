"use client"

import Image from "next/image"


export default function BrandStory() {
    return (
        <section id="about" className="py-24 bg-white relative overflow-hidden">
            <div className="container mx-auto px-4">
                <div className="max-w-xl mx-auto text-center mb-16">
                    <span className="text-green-800 font-medium tracking-wider">
                        About You
                    </span>
                    <h2 className="text-3xl md:text-4xl font-bold text-gray-900 mt-4 mb-6">The Classroom of the Elite
                        <br />
                        Ayanokoji Kiyotaka
                    </h2>

                    <p className="text-gray-600 leading-relaxed">
                    The name Kiyotaka consists of kanjis that mean "clear, pure, clean" (清) (kiyo) and "noble, prosperous" (隆) (taka).
                    </p>
                </div>

                <div className="grid grid-cols-1 md:grid-cols-2 gap-12 items-center">
                    <div className="relative aspect-[4/3] rounded-2xl overflow-hidden">
                    <Image src="/kiyo.jpg" alt="Ayanokoji Kiyotaka" fill className="object-cover" />
                    </div>

                </div>
            </div>
        </section>
    )
}