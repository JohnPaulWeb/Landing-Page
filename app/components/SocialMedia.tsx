import { Button } from "@/components/ui/button";
import { Facebook, Instagram, Twitter } from "lucide-react";


export default function SocialMedia() {
    return(
        <section className="py-16 bg-white">
            <div className="container mx-auto px-4 text-center">
                <h2 className="text-3xl md:text-4xl font-bold text-gray-800 mb-6">Ayanokoji Kiyotaka</h2>

                <p className="text-xl text-gray-600 mb-8">Ayanokoji Kiyotaka he sits at the rear left corner of the class seat next to Suzune Horikita.</p>

                <div className="flex justify-center gap-4 mb-8">
                    <Button variant="outline" className="flex items-center gap-2">
                        <Instagram />

                        Instagram
                    </Button>

                    <Button variant="outline" className="flex items-center gap-2">
                        <Facebook />
                        Facebook
                    </Button>
                </div>

                <p className="text-gray-600 mb-4">Ayanokoji Kiyotaka</p>
                <div className="max-w-2xl mx-auto">
                    <input type="email" placeholder="Enter your Email" className="w-full px-4 py-2 mb-4 border-gray-300 rounded-md focus:outline-none focus:ring-2 focus:ring-green-500" />

                    <Button className="w-full">Ayanokoji</Button>
                </div>
            </div>
        </section>
    )
}