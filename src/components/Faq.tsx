import React from "react";
import {
  Accordion,
  AccordionContent,
  AccordionItem,
  AccordionTrigger,
} from "./ui/accordion";
import { faqs } from "@/conts/faq";

const Faq = () => {
  return (
    <div className="w-full space-y-6">
      <h1 className="lg:text-5xl text-3xl font-bold mx-auto w-fit">FAQs</h1>
      <Accordion type="single" collapsible className="px-3">
        {faqs.map((faq, index) => (
          <AccordionItem key={index} value={index.toLocaleString()}>
            <AccordionTrigger className="md:text-xl ">
              {index + 1}. {faq.question}?
            </AccordionTrigger>
            <AccordionContent className="md:text-lg text-sm">
              {faq.answer}
            </AccordionContent>
          </AccordionItem>
        ))}
      </Accordion>
    </div>
  );
};

export default Faq;
