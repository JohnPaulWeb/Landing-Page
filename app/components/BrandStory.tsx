"use client"

import { Button } from "@/components/ui/button"
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

                    <div className="absolute inset-0 bg-black/10">
                    <h3 className="text-2xl font-bold text-gray-900">
                        Ayanokoji
                        <br />
                        Kiyotaka
                    </h3>
                    <p className="text-gray-600 leading-relaxed">
                    In contrast to the anime, the light novel depicts (to an extent) Kiyotaka with more dynamic facial expressions.
                    </p>

                    <p className="text-gray-600 leading-relaxed">
                    In contrast to the anime, the light novel depicts (to an extent) Kiyotaka with more dynamic facial expressions.
                    </p>
                    <Button variant="outline" className="mt-4">
                        Ayanokoji
                    </Button>
                    </div>
                    </div>

                    <div className="grid grid-cols-1 md:grid-cols-3 gap-8 mt-24">
                        <div className="text-center space-y-4">
                            <div className="w-20 h-20 bg-green-50 rounded-full flex items-center justify-center mx-auto">
                                <span className="text-3xl">%</span>
                            </div>
                            <h4 className="text-xl font-bold text-gray-900">
                                Ayanokoji Kiyotaka
                            </h4>
                            <p className="text-gray-600">Kiyotaka has voiced intentions of making friends,</p>
                        </div>

                        <div className="text-center space-y-4">
                            <div className="w-20 h-20 bg-green-50 rounded-b-full flex items-center justify-center mx-auto">
                                <span className="text-3xl">^</span>
                            </div>
                            <h4 className="text-xl font-bold text-gray-900">Similar to hiding his true intellect, he prefers to also keep his physical capabilities to himself</h4>
                            <p className="text-gray-600">The greatest display of his intellect was when he figured out the plan of class 1-A and class 1-C during the same test</p>
                        </div>

                        <div className="text-center space-y-4">
                            <div className="w-20 h-20 bg-green-50 rounded-full flex items-center justify-center mx-auto">
                                <span className="text-3xl">&</span>
                            </div>
                            <h4 className="text-xl font-bold text-gray-900">Kiyotaka</h4>
                            <p className="text-gray-600">The name Kiyotaka consists of kanjis that mean "clear, pure, clean" (清) (kiyo) and "noble, prosperous" (隆) (taka).</p>
                        </div>
                    </div>
                </div>
            </div>
        </section>
    )
}