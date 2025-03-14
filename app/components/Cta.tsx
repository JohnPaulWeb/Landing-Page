import { Button } from "@/components/ui/button";
import Image from "next/image";


export default function Cta() {
    return(
        <section className="py-24 bg-gradient-to-b from-white to-green-50">
            <div className="container mx-auto px-4">
                <div className="max-w-4xl mx-auto">
                    <div className="text-center mb-12">
                        <span className="text-green-800 font-medium tracking-wider">How?</span>
                        <h2 className="text-3xl md:text-4xl font-bold text-gray-900 mt-4 mb-6">Ayanokoji Kiyotaka</h2>
                        <p className="text-xl text-gray-600 mb-8">Ayanokoji Kiyotaka</p>
                    </div>

                    <div className="bg-white rounded-2xl shadow-xl overflow-hidden">
                        <div className="grid grid-cols-1 md:grid-cols-2">
                            <div className="p-8 md:p-12">
                                <h3 className="text-2xl font-bold text-gray-900 mb-4">Ayanokoji Kiyotaka</h3>

                                <div className="flex items-baseline mb-4">
                                    <span className="text-4xl font-bold text-green-800">59$</span>
                                    <span className="ml-2 text-gray-500 line-through">32.56%</span>
                                </div>

                                <ul className="space-y-3 mb-8">
                                    <li className="flex items-center">
                                        <svg className="w-5 h-5 text-green-500 mr-2" fill="none" stroke="currentColor" viewBox="0 0 24 24"
                                        xmlns="">

                                            <path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M5 1314 4L19 7"></path>
                                        </svg>

                                        500%
                                    </li>

                                    <li className="flex items-center">
                                        <svg className="w-5 h-5 text-green-500 mr-2" fill="none" stroke="currentColor" viewBox="0 0 24 24"
                                        xmlns="">

                                            <path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M5 1314 4L19 7"></path>
                                        </svg>

                                        100%
                                    </li>

                                    <li className="flex items-center">
                                        <svg className="w-5 h-5 text-green-500 mr-2" fill="none" stroke="currentColor" viewBox="0 0 24 24"
                                        xmlns="">

                                            <path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M5 1314 4L19 7"></path>
                                        </svg>

                                        Ayanokoji Kiyotaka
                                    </li>

                                    <li className="flex items-center">
                                        <svg className="w-5 h-5 text-green-500 mr-2" fill="none" stroke="currentColor" viewBox="0 0 24 24"
                                        xmlns="">

                                            <path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M5 1314 4L19 7"></path>
                                        </svg>

                                        The Classroom of the Elite
                                    </li>
                                </ul>

                                <Button size="lg" className="w-full bg-green-800 hover:bg-amber-400 text-white">Click Me</Button>

                                <p className="text-sm text-gray-500 mt-4 text-center">I dont know you dont know, how we dont know</p>
                            </div>
                            <div className="relative">
                                <Image src="/Itoshi Rin.jpg" alt="Itoshi Rin" fill className="object-cover" />

                                <div className="absolute inset-0 bg-black/10" />
                                <div className="absolute top-4 right-4 bg-red-600 text-white font-bold py-2 px-4 rounded-full text-lg animate-pulse">
                                    Itoshi Rin
                                </div>
                            </div>
                        </div>
                    </div>

                    <div className="mt-12 text-center">
                        <h3 className="text-xl font-bold text-gray-900 mb-4">Ayanokoji Kiyotaka</h3>
                        <p className="text-gray-600 mb-6">
                            Ayanokoji Kiyotaka he sits at the rear left corner of the class seat next to Suzune Horikita.
                            <br />

                           Ayanokoji Kiyotaka he sits at the rear left corner of the class seat next to Suzune Horikita.
                        </p>

                        <Button variant="outline" className="border-gray-800 text-green-800 hover:bg-green-800 hover:text-white">
                            Ayanokoji
                        </Button>
                    </div>
                </div>
            </div>
        </section>
    )
}