import { Accordion, AccordionContent, AccordionItem, AccordionTrigger } from "@/components/ui/accordion"


export default function Far() {

    const fars = [
        {
            question: "What do you want",
            answer: " what i want is i dont know ",
        },

        {
            question: "What do you want",
            answer: " what i want is i dont know ",
        },

        {
            question: "What do you want",
            answer: " what i want is i dont know ",
        },
    ]
    return (
        <section className="py-16 bg-white">

            <div className="container mx-auto px-4">
                <h2 className="text-3xl md:text-4xl font-bold text-center text-gray-800 mb-12">
                    You and I
                </h2>

                <Accordion type="single" collapsible className="max-w-2xl mx-auto">
                    {fars.map((far, index) => (
                        <AccordionItem key={index} value={`item-${index}`}>
                            <AccordionTrigger>{far.question}</AccordionTrigger>
                            <AccordionContent>{far.answer}</AccordionContent>
                        </AccordionItem>
                    ))}
                </Accordion>
            </div>
        </section>
    )
}