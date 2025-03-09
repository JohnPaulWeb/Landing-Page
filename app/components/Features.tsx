"use client"

import { CheckCircle } from "lucide-react"
import Image from "next/image"

export default function Features() {
    return (
        <section id="features" className="py-24 bg-gradient-to-b from-white to-gray-50">
            <div className="container mx-auto px-4">
                <div className="max-w-3xl mx-auto text-center mb-16">
                    <span>Features</span>
                    <h2 className="text-3xl md:text-4xl font-bold text-gray-900 mt-4 mb-6">Ayanokoji Kiyotaka
                        <br />
                        The Classroom of the Elite
                    </h2>
                    <p className="text-gray-600 leading-relaxed">
                    Kiyotaka's surname Ayanokōji consists of kanjis that mean "design" (綾) (aya) and "alley" (小路) (kōji).
                    </p>
                </div>

                <div className="grid grid-cols-1 lg:grid-cols-2 gap-12 items-center mb-25">
                    <div className="relative aspect-video rounded-2xl overflow-hidden shadow-2xl">
                        <Image src="/yano.jpg" fill alt="Ayanokoji Kiyotaka" className="object-cover" />

                        <div className="absolute inset-0 bg-blue-900/10 mix-blend-multiply" />
                    </div>

                    <div className="space-y-8">
                        <div className="space-y-4">
                            <h3 className="text-2xl font-bold text-gray-900">Koji</h3>

                            <p className="text-gray-600 leading-relaxed">
                            Almost everything about Kiyotaka's life before the entrance exams is unknown.
                            </p>
                        </div>
                        <ul className="space-y-4">
                            {[
                                "Food Wars",
                                "The Classroom of the Elite",
                                "Mashle",
                                "Nurahrihyon",
                                "Tokyo Ghouls",
                            ].map((item, index) => (
                                <li key={index} className="flex items-center gap-3">
                                    <CheckCircle className="h-5 w-5 text-green-800 flex-shrink-0" />

                                    <span className="text-gray-700">{item}</span>
                                </li>
                            ))}
                        </ul>
                    </div>
                </div>

                <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
                    <div className="relative">
                        <div className="aspect-[4/3] rounded-2xl overflow-hidden mb-6">
                        <Image src="/kiyo.jpg" alt="Kiyotaka Ayanokoji" fill className="object-cover" />
                            </div>

                            <h4 className="text-xl font-bold text-gray-900 mb-3">Ayanokoji Kiyotaka</h4>
                            <p className="text-gray-600">Almost everything about Kiyotaka's life before the entrance exams is unknown.</p>
                    </div>

                    <div className="relative">
                        <div className="aspect-[4/3] rounded-2xl overflow-hidden mb-6">
                        <Image src="/kojic.jpg" alt="Kiyotaka Ayanokoji" fill className="object-cover" />
                        </div>
                        <h4 className="text-xl font-bold text-gray-900 mb-3">Ayanokoji Kiyotaka</h4>
                        <p className="text-gray-600">Almost everything about Kiyotaka's life before the entrance exams is unknown.</p>
                    </div>

                    <div className="relative">
                        <div className="aspect-[4/3] rounded-2xl overflow-hidden mb-6">
                        <Image src="/Itoshi Rin.jpg" alt="Kiyotaka Ayanokoji" fill className="object-cover" />
                            </div>

                            <h4 className="text-xl font-bold text-gray-900 mb-3">Ayanokoji Kiyotaka</h4>
                            <p className="text-gray-600">Almost everything about Kiyotaka's life before the entrance exams is unknown.</p>
                    </div>
                </div>
            </div>
        </section>
    )
}