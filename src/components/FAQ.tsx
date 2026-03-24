// DECISÃO CRIATIVA: Fundo bg-warm para respiro após Testimonials dark.
// Accordion com AnimatePresence (NÃO max-height CSS). Seta rotativa (+→×).
// ZERO boxes/cards coloridos. 5 perguntas. CTA final com headline circular.

import { useState } from 'react'
import { motion, AnimatePresence } from 'motion/react'
import { FadeIn } from '../App'

const WHATSAPP_URL = 'https://wa.me/5541999407836?text=Olá%20Ana%2C%20vim%20pela%20página%20e%20gostaria%20de%20agendar%20uma%20sessão.'

const faqs = [
  {
    q: 'Para quem é esse atendimento?',
    a: 'Para adultos que funcionam bem externamente, mas sentem um vazio, uma falta de direção ou um peso emocional que a rotina perfeita não resolve. Profissionais liberais, executivos, empreendedores, líderes. Pessoas que são o pilar de suas famílias ou equipes e que, em algum momento, perderam o fôlego de viver. Não atendo casos de ideação suicida ativa, psicose ou borderline (nestes casos, encaminho para a rede de apoio especializada).',
  },
  {
    q: 'Qual o investimento por sessão?',
    a: 'Sei que é uma decisão financeira real, não apenas emocional. Por isso, o valor é conversado na nossa primeira conversa, levando em conta o formato (online ou presencial) e a frequência que faz sentido para o seu momento. O que posso dizer: o tempo gasto perdido de si é muito mais caro que o investimento em liberdade existencial.',
  },
  {
    q: 'Como funciona o atendimento online?',
    a: 'As sessões acontecem por videochamada em plataforma segura, com total privacidade e sigilo. Você só precisa de um ambiente tranquilo, conexão estável e disponibilidade para estar presente. A qualidade da escuta analítica é a mesma do presencial.',
  },
  {
    q: 'Em quanto tempo vou sentir resultado?',
    a: 'Cada percurso é singular. Não existe fórmula de "X sessões para resultado Y". O que posso dizer é que a maioria das pessoas sente uma diferença já nas primeiras sessões: não porque o problema desapareceu, mas porque finalmente encontraram um espaço onde a verdade pode ser dita sem julgamento. A transformação profunda vem com o tempo e com o compromisso com o próprio processo.',
  },
  {
    q: 'Nunca fiz terapia. Por onde começo?',
    a: 'Pelo começo: uma conversa. Na primeira sessão, não existe roteiro nem expectativa. Você não precisa chegar com uma história organizada ou saber exatamente o que sente. O espaço analítico acolhe inclusive quem ainda não sabe nomear o que vive. Se algo nesta página fez sentido, esse já é o começo.',
  },
]

function FAQItem({ faq, isOpen, onToggle }: {
  faq: { q: string; a: string }
  isOpen: boolean
  onToggle: () => void
}) {
  return (
    <div
      className="border-b"
      style={{ borderColor: 'rgba(42, 53, 64, 0.1)' }}
    >
      <button
        onClick={onToggle}
        className="w-full flex items-center justify-between py-6 md:py-8 text-left cursor-pointer gap-6 group"
        aria-expanded={isOpen}
      >
        <span
          className="text-lg md:text-xl font-light leading-snug group-hover:opacity-100 transition-opacity"
          style={{
            fontFamily: 'var(--font-display)',
            color: 'var(--color-text)',
            opacity: isOpen ? 1 : 0.85,
          }}
        >
          {faq.q}
        </span>
        <motion.span
          animate={{ rotate: isOpen ? 45 : 0 }}
          transition={{ duration: 0.4, ease: [0.16, 1, 0.3, 1] }}
          className="flex-shrink-0"
          style={{ color: 'var(--color-accent)' }}
          aria-hidden="true"
        >
          <svg width="24" height="24" viewBox="0 0 24 24" fill="none">
            <path d="M12 5v14M5 12h14" stroke="currentColor" strokeWidth="1.5" strokeLinecap="round" />
          </svg>
        </motion.span>
      </button>

      <AnimatePresence initial={false}>
        {isOpen && (
          <motion.div
            key="content"
            initial={{ height: 0, opacity: 0 }}
            animate={{ height: 'auto', opacity: 1 }}
            exit={{ height: 0, opacity: 0 }}
            transition={{ duration: 0.5, ease: [0.16, 1, 0.3, 1] }}
            style={{ overflow: 'hidden' }}
          >
            <p
              className="pb-8 pr-12 text-base leading-relaxed font-light"
              style={{
                fontFamily: 'var(--font-sans)',
                color: 'var(--color-text)',
                opacity: 0.7,
              }}
            >
              {faq.a}
            </p>
          </motion.div>
        )}
      </AnimatePresence>
    </div>
  )
}

export default function FAQ() {
  const [openIndex, setOpenIndex] = useState<number | null>(null)

  function handleToggle(i: number) {
    setOpenIndex(openIndex === i ? null : i)
  }

  return (
    <section
      id="faq"
      className="relative overflow-hidden section-padding-lg"
      style={{ backgroundColor: 'var(--color-bg-warm)' }}
    >
      <div className="container-ultra">

        {/* Layout Side-by-Side */}
        <div className="grid grid-cols-1 lg:grid-cols-[1fr_2fr] gap-16 lg:gap-24 mb-32">

          {/* Coluna Esquerda: Título */}
          <div className="lg:sticky lg:top-32 h-fit">
            <FadeIn>
              <p
                className="eyebrow-ultra mb-6"
                style={{ color: 'var(--color-text)', opacity: 0.5 }}
              >
                Esclarecimentos
              </p>
              <h2
                className="leading-[1.1] font-display"
                style={{
                  fontSize: 'clamp(2rem, 5vw, 3.5rem)',
                  color: 'var(--color-text)',
                  letterSpacing: '-0.02em',
                }}
              >
                O que você{' '}
                <span className="italic font-light block mt-2" style={{ color: 'var(--color-accent)' }}>
                  precisa saber.
                </span>
              </h2>
            </FadeIn>
          </div>

          {/* Coluna Direita: Acordeões */}
          <div className="border-t" style={{ borderColor: 'rgba(42, 53, 64, 0.1)' }}>
            <FadeIn delay={0.1}>
              <div>
                {faqs.map((faq, i) => (
                  <FAQItem
                    key={i}
                    faq={faq}
                    isOpen={openIndex === i}
                    onToggle={() => handleToggle(i)}
                  />
                ))}
              </div>
            </FadeIn>
          </div>

        </div>

        {/* Linha separadora */}
        <div className="w-full h-px bg-gradient-to-r from-transparent via-[rgba(42,53,64,0.1)] to-transparent mb-24 md:mb-32" />

        {/* CTA Final — Headline ecoa H1 circularmente */}
        <FadeIn delay={0.2} direction="up">
          <div className="text-center max-w-3xl mx-auto">
            <h3
              className="leading-[1.1] mb-10 font-display"
              style={{
                fontSize: 'clamp(2.2rem, 5vw, 3.2rem)',
                color: 'var(--color-text)',
              }}
            >
              O fôlego volta quando a fala{' '}
              <span className="italic block mt-2" style={{ color: 'var(--color-accent)' }}>
                encontra escuta.
              </span>
            </h3>

            <motion.a
              href={WHATSAPP_URL}
              target="_blank"
              rel="noopener noreferrer"
              whileHover={{ y: -2 }}
              whileTap={{ scale: 0.98 }}
              className="btn-shimmer inline-block"
            >
              Agende sua sessão
            </motion.a>
          </div>
        </FadeIn>

      </div>
    </section>
  )
}
