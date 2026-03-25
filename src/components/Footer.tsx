// DECISÃO CRIATIVA: Fundo dark (#1A2E3D). Seção CTA final com H2 que ecoa o tema da LP.
// Eyebrow "O próximo passo". Aurora radial sutil. Bottom bar com nome + especialidade + ano.

import { motion } from 'motion/react'
import { FadeIn } from '../App'

const WHATSAPP_URL = 'https://wa.me/5541999407836?text=Ol%C3%A1%20Ana%2C%20vim%20pela%20p%C3%A1gina%20e%20gostaria%20de%20agendar%20uma%20sess%C3%A3o.'
const currentYear = new Date().getFullYear()

export default function Footer() {
  return (
    <footer
      id="footer"
      className="relative overflow-hidden"
      style={{ backgroundColor: 'var(--color-dark)' }}
    >
      {/* Aurora radial */}
      <div
        aria-hidden="true"
        className="absolute top-1/2 left-1/2 pointer-events-none"
        style={{
          width: '500px',
          height: '500px',
          background: 'radial-gradient(circle, rgba(184, 150, 110, 0.07) 0%, transparent 70%)',
          borderRadius: '9999px',
          transform: 'translate(-50%, -50%)',
        }}
      />

      {/* Seção CTA Final */}
      <section className="relative z-10 section-padding-lg">
        <div className="container-ultra">
          <div className="flex flex-col items-center text-center gap-8 max-w-3xl mx-auto">

            <FadeIn>
              <p
                className="eyebrow-ultra"
                style={{ color: 'var(--color-accent)', opacity: 0.7 }}
              >
                O próximo passo
              </p>
            </FadeIn>

            <FadeIn delay={0.1}>
              <h2
                className="font-display leading-[1.15]"
                style={{
                  fontSize: 'clamp(2rem, 5vw, 3.5rem)',
                  color: 'var(--color-off-white)',
                  letterSpacing: '-0.01em',
                }}
              >
                Você já foi funcional por tempo{' '}
                <em
                  className="italic font-light"
                  style={{ color: 'var(--color-accent)', display: 'block', marginTop: '0.2em' }}
                >
                  suficiente.
                </em>
              </h2>
            </FadeIn>

            <FadeIn delay={0.2}>
              <p
                className="text-base leading-relaxed font-light"
                style={{
                  fontFamily: 'var(--font-sans)',
                  color: 'var(--color-off-white)',
                  opacity: 0.55,
                  maxWidth: '440px',
                }}
              >
                A primeira sessão é o começo. Não é compromisso. É a escolha de finalmente dar espaço para o que nunca foi dito.
              </p>
            </FadeIn>

            <FadeIn delay={0.3}>
              <motion.a
                href={WHATSAPP_URL}
                target="_blank"
                rel="noopener noreferrer"
                whileHover={{ y: -2 }}
                whileTap={{ scale: 0.98 }}
                className="btn-shimmer mt-4"
              >
                Agende sua sessão pelo WhatsApp
              </motion.a>
            </FadeIn>

          </div>
        </div>
      </section>

      {/* Bottom bar */}
      <div
        className="relative z-10"
        style={{ borderTop: '1px solid rgba(184, 150, 110, 0.1)', padding: '1.5rem 0' }}
      >
        <div className="container-ultra flex flex-col md:flex-row items-center justify-between gap-3">
          <span
            className="eyebrow-ultra"
            style={{ color: 'var(--color-off-white)', opacity: 0.25 }}
          >
            Ana Cristina Schneider
          </span>
          <span
            className="eyebrow-ultra"
            style={{ color: 'var(--color-off-white)', opacity: 0.25 }}
          >
            Psicóloga Clínica · Psicanálise Lacaniana · CRP 08/XXXXX
          </span>
          <span
            className="eyebrow-ultra"
            style={{ color: 'var(--color-off-white)', opacity: 0.25 }}
          >
            {currentYear} · Todos os direitos reservados
          </span>
        </div>
      </div>
    </footer>
  )
}
