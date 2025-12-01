import React, { useState } from "react";
import { faqs } from "@/constant";
import { FaMinus, FaPlus } from "react-icons/fa";
import { Collapse } from "react-collapse";

type AccordionItemProps = {
    open: boolean;
    toggle: () => void;
    question: string;
    answer: string;
}

const AccordionItem = ({ open, toggle, question, answer }: AccordionItemProps) => {
    return (
        <div className = "pt-3">
            <div className = {`flex items-center gap-x-4 px-3 py-2 medium-16 cursor-pointer ${open ? "bg-secondary text-white" : ""}`} onClick = {toggle}>
                <div className = "">
                    {open ? <FaMinus /> : <FaPlus />}
                </div>
                <h4 className = "">
                    {question}
                </h4>
            </div>
            <Collapse isOpened = {open}>
                <p className = "p-4">
                    {answer}
                </p>
            </Collapse>
        </div>
    )
}

const Accordion = () => {
    const [open, setOpen] = useState<number | null>(null);
    const toggle = (index: number) => {
        if (open === index) {
            return setOpen(null);
        }
        setOpen(index);
    }

    return (
        <div className = "">
            <h4 className = "uppercase regular-18 text-secondary">
                Preguntas frecuentes
            </h4>
            <h3 className = "bold-44 max-w-lg">
                Respuestas rápidas a tus dudas
            </h3>
            <div className = "pt-4">
                {
                    faqs.map((faq, i) => (
                        <AccordionItem key = {i} open = {i === open} toggle = {() => toggle(i)} question = {faq.question} answer = {faq.answer} />
                    ))
                }
            </div>
        </div>
    )
}

export default Accordion;