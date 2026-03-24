// DECISÃO CRIATIVA: Fundo dark (#1A2E3D). Carrossel 3 depoimentos curados, crossfade AnimatePresence.
// Aspa analítica gigante 120px em Cormorant Garamond opacity 8% como fundo.
// Border-left 3px accent. NÃO marquee.

import { useState } from 'react'
import { motion, AnimatePresence } from 'motion/react'
import { FadeIn } from '../App'

const testimonials = [
  {
    text: 'Cheguei no consultório com vergonha de dizer que estava vazio. Tinha carreira, família, saúde. "Não tinha motivo" para sofrer. A Ana foi a primeira pessoa que não tentou me convencer de que estava tudo bem. Ela escutou. E nessa escuta, comecei a encontrar o que tinha perdido de mim.',
    name: 'R.M.',
    role: '38 anos, executivo',
  },
  {
    text: 'Passei por três terapeutas antes. Ganhei dicas, exercícios, listas. Aliviava por uma semana e voltava tudo. Com a Ana, pela primeira vez, senti que alguém escutou o que eu realmente estava dizendo. Não o que eu tentava dizer. A diferença é enorme.',
    name: 'L.K.',
    role: '42 anos, empresária',
  },
  {
    text: 'Eu tinha medo de mexer no que estava quieto. Achava que se abrisse, ia desmoronar. Na análise, descobri que o que desmorona é o que nunca foi sustentado. E que a sustentação da Ana é diferente de tudo que já experimentei. Firme, precisa, sem recuar.',
    name: 'C.S.',
    role: '31 anos, advogada',
  },
]

export default function Testimonials() {
  const [currentIndex, setCurrentIndex] = useState(0)

  const nextTestimonial = () => {
    setCurrentIndex((prev) => (prev + 1) % testimonials.length)
  }

  const prevTestimonial = () => {
    setCurrentIndex((prev) => (prev - 1 + testimonials.length) % testimonials.length)
  }

  return (
    <section
      id="testimonials"
      className="relative overflow-hidden section-padding-lg"
      style={{ backgroundColor: 'var(--color-dark)' }}
    >
      <div className="container-ultra relative z-10 flex flex-col items-center">

        {/* Header */}
        <div className="max-w-3xl mx-auto text-center flex flex-col items-center mb-16 md:mb-24">
          <FadeIn>
            <p
              className="eyebrow-ultra mb-6"
              style={{ color: 'var(--color-accent)', opacity: 0.8 }}
            >
              Vozes Reais
            </p>
            <h2
              className="leading-[1.1] font-display"
              style={{
                fontSize: 'clamp(2rem, 5vw, 3.5rem)',
                color: 'var(--color-off-white)',
                letterSpacing: '-0.02em',
              }}
            >
              O que dizem quem já{' '}
              <span className="italic font-light block mt-2" style={{ color: 'var(--color-accent)', opacity: 0.9 }}>
                fez o caminho.
              </span>
            </h2>
          </FadeIn>
        </div>

        {/* Carrossel */}
        <FadeIn delay={0.2} className="w-full max-w-4xl mx-auto relative px-4 md:px-16">
          {/* Aspa analítica gigante */}
          <span
            className="absolute -top-10 md:-top-16 left-0 md:left-8 leading-none select-none font-display"
            style={{
              fontSize: '120px',
              color: 'var(--color-accent)',
              opacity: 0.08,
            }}
            aria-hidden="true"
          >
            &ldquo;
          </span>

          <div className="relative min-h-[320px] md:min-h-[280px] flex items-center justify-center">
            <AnimatePresence mode="wait">
              <motion.div
                key={currentIndex}
                initial={{ opacity: 0, y: 20 }}
                animate={{ opacity: 1, y: 0 }}
                exit={{ opacity: 0, y: -20 }}
                transition={{ duration: 0.8, ease: [0.16, 1, 0.3, 1] }}
                className="absolute inset-0 flex flex-col justify-center items-center text-center"
              >
                {/* Border-left accent no card */}
                <div
                  className="w-full pl-6 md:pl-10"
                  style={{ borderLeft: '3px solid var(--color-accent)' }}
                >
                  <p
                    className="text-lg md:text-2xl leading-relaxed mb-10 font-light text-left"
                    style={{
                      fontFamily: 'var(--font-sub)',
                      color: 'var(--color-off-white)',
                      opacity: 0.95,
                    }}
                  >
                    {testimonials[currentIndex].text}
                  </p>
                </div>
                <footer className="flex flex-col gap-2 items-center mt-4">
                  <div
                    className="w-8 h-px mb-2"
                    style={{ backgroundColor: 'rgba(184, 150, 110, 0.4)' }}
                  />
                  <p
                    className="text-sm md:text-base uppercase tracking-widest font-medium"
                    style={{
                      fontFamily: 'var(--font-sans)',
                      color: 'var(--color-accent)',
                    }}
                  >
                    {testimonials[currentIndex].name}
                  </p>
                  <p
                    className="text-xs md:text-sm font-light tracking-wide"
                    style={{
                      fontFamily: 'var(--font-sans)',
                      color: 'var(--color-off-white)',
                      opacity: 0.4,
                    }}
                  >
                    {testimonials[currentIndex].role}
                  </p>
                </footer>
              </motion.div>
            </AnimatePresence>
          </div>

          {/* Controles */}
          <div className="flex items-center justify-center gap-8 mt-16 md:mt-24 relative z-20">
            <button
              onClick={prevTestimonial}
              className="w-12 h-12 rounded-full flex items-center justify-center border transition-all duration-300 hover:scale-105"
              style={{ borderColor: 'rgba(184, 150, 110, 0.3)', color: 'var(--color-accent)' }}
              aria-label="Depoimento Anterior"
            >
              <svg width="20" height="20" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="1" strokeLinecap="round" strokeLinejoin="round">
                <path d="M15 18l-6-6 6-6" />
              </svg>
            </button>

            <div className="flex gap-3">
              {testimonials.map((_, i) => (
                <button
                  key={i}
                  onClick={() => setCurrentIndex(i)}
                  className={`w-2 h-2 rounded-full transition-all duration-500 ${i === currentIndex ? 'scale-125' : 'opacity-30'}`}
                  style={{ backgroundColor: 'var(--color-accent)' }}
                  aria-label={`Ir para depoimento ${i + 1}`}
                />
              ))}
            </div>

            <button
              onClick={nextTestimonial}
              className="w-12 h-12 rounded-full flex items-center justify-center border transition-all duration-300 hover:scale-105"
              style={{ borderColor: 'rgba(184, 150, 110, 0.3)', color: 'var(--color-accent)' }}
              aria-label="Próximo Depoimento"
            >
              <svg width="20" height="20" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="1" strokeLinecap="round" strokeLinejoin="round">
                <path d="M9 18l6-6-6-6" />
              </svg>
            </button>
          </div>
        </FadeIn>

      </div>
    </section>
  )
}
