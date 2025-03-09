import Image from "next/image"


const usages = [
    {
        title: "How To Love Again?",
        description: "Ikaw at Ako",
        image: "/love4.jpg",
    },
    {
        title: "How To Love Again? ",
        description: "Ikaw at Ako",
        image: "/love2.jpg",
    },
    {
        title: "How To Love Again?",
        description: "Ikaw at Ako",
        image: "/love3.jpg",
    },
]


export default function HowToUse() {
    return (
       <section id="how-to-use" className="py-16 bg-white">
        <div className="container mx-auto px-4">
            <h2 className="text-3xl md:text-4xl font-bold text-center text-gray-800 mb-12">Our Beloved Summer</h2>

            <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
                {usages.map((usage, index) => (
                    <div key={index} className="text-center">
                        <div className="relative w-full h-64 mb-4 overflow-hidden rounded-lg">
                            <Image src={usage.image || ""} alt={usage.title} layout="fill" objectFit="cover" className="transition-transform hover:scale-110" />
                        </div>

                        <h3 className="text-red-700 font-bold text-2xl">{usage.title}</h3>
                        <p className="text-red-700">{usage.description}</p>
                    </div>
                ))}
            </div>
        </div>
       </section>
    )
}