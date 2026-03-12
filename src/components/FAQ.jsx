import React, { useState } from 'react';
import { motion, AnimatePresence } from 'framer-motion';
import { Plus, Minus, HelpCircle } from 'lucide-react';

const FAQData = [
    {
        question: 'Quais tipos de projetos você desenvolve?',
        answer: 'Desenvolvo desde Landing Pages focadas em conversão e sites institucionais até sistemas web complexos, dashboards interativos em Power BI, automações de planilhas (VBA/Macros) e integrações completas via API.'
    },
    {
        question: 'Qual é o prazo médio de entrega?',
        answer: 'O prazo varia conforme a complexidade: Landing Pages costumam ser entregues em 5 a 10 dias úteis. Sistemas personalizados e automações complexas dependem do escopo, mas sempre trabalho com cronogramas claros e entregas graduais para acompanhamento.'
    },
    {
        question: 'Como funciona o suporte pós-entrega?',
        answer: 'Ofereço um período de garantia técnica para correção de eventuais bugs sem custo adicional. Além disso, disponibilizo planos de manutenção para atualizações de segurança, novas funcionalidades e suporte contínuo.'
    },
    {
        question: 'O código/sistema será meu após o pagamento?',
        answer: 'Com certeza. Após a conclusão do projeto e quitação dos valores, todos os arquivos, códigos-fonte e acessos são transferidos integralmente para você. Você detém a propriedade total da solução.'
    },
    {
        question: 'Você trabalha com integrações de pagamento?',
        answer: 'Sim. Tenho vasta experiência integrando APIs de pagamento como Mercado Pago, Pagar.me, Stripe e sistemas bancários, garantindo fluxos de checkout seguros e automatizados.'
    },
    {
        question: 'Consegue automatizar processos manuais em planilhas?',
        answer: 'Sim, este é um dos meus diferenciais. Utilizo VBA e Macros avançadas para transformar planilhas complexas do Excel em ferramentas automatizadas que economizam horas de trabalho manual.'
    },
    {
        question: 'Como é feito o pagamento?',
        answer: 'Para projetos via 99Freelas, seguimos a segurança da própria plataforma. Para projetos diretos, geralmente trabalhamos com 50% de entrada e 50% na entrega, ou parcelamento conforme o progresso do projeto.'
    },
    {
        question: 'Meu site será responsivo (rodar no celular)?',
        answer: 'Sem dúvida. Hoje o acesso mobile é majoritário, então todos os meus projetos são desenvolvidos com a metodologia Mobile-First, garantindo que funcionem perfeitamente em dispositivos de todos os tamanhos.'
    }
];

const FAQItem = ({ question, answer, index }) => {
    const [isOpen, setIsOpen] = useState(false);

    return (
        <motion.div
            initial={{ opacity: 0, x: -20 }}
            whileInView={{ opacity: 1, x: 0 }}
            transition={{ delay: index * 0.1 }}
            className="border-b border-white/5 last:border-0"
        >
            <button
                onClick={() => setIsOpen(!isOpen)}
                className="w-full flex justify-between items-start py-8 text-left group gap-4"
            >
                <div className="flex items-start gap-6">
                    <span className="text-primary font-mono text-xs opacity-40 group-hover:opacity-100 transition-opacity mt-2">0{index + 1}/</span>
                    <span className="font-bold text-lg lg:text-2xl text-white group-hover:text-primary transition-colors leading-tight lg:leading-normal">
                        {question}
                    </span>
                </div>
                <div className="size-8 rounded-full bg-accents flex items-center justify-center text-primary group-hover:bg-primary group-hover:text-black transition-all shrink-0 mt-0.5 lg:mt-1">
                    {isOpen ? <Minus className="size-4" /> : <Plus className="size-4" />}
                </div>
            </button>
            <AnimatePresence>
                {isOpen && (
                    <motion.div
                        initial={{ height: 0, opacity: 0 }}
                        animate={{ height: 'auto', opacity: 1 }}
                        exit={{ height: 0, opacity: 0 }}
                        className="overflow-hidden"
                    >
                        <div className="pb-8 pl-14 text-slate-400 text-base leading-relaxed max-w-2xl font-medium">
                            {answer}
                        </div>
                    </motion.div>
                )}
            </AnimatePresence>
        </motion.div>
    );
};

const FAQ = () => {
    return (
        <section className="py-12 lg:py-28 relative" id="faq">
            <div className="mx-auto max-w-4xl px-6">
                <div className="flex flex-col items-center text-center gap-6 mb-12 lg:mb-20">
                    <div className="size-12 rounded-2xl bg-primary/10 flex items-center justify-center text-primary">
                        <HelpCircle className="size-6" />
                    </div>
                    <h2 className="text-3xl lg:text-4xl font-bold text-white">
                        Perguntas <span className="gradient-text">Frequentes</span>
                    </h2>
                    <p className="text-slate-500 font-bold text-xs">
                        Respostas técnicas para dúvidas estratégicas.
                    </p>
                </div>

                <div className="bg-surface-dark/20 rounded-3xl p-4 border border-white/5 backdrop-blur-sm">
                    <div className="bg-surface-dark/40 rounded-2xl p-4 lg:p-12">
                        {FAQData.map((item, index) => (
                            <FAQItem key={index} index={index} question={item.question} answer={item.answer} />
                        ))}
                    </div>
                </div>
            </div>
        </section>
    );
};

export default FAQ;
