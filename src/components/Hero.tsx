// DECISÃO CRIATIVA: Split-Layout Editorial (Opção A). Azul-ardósia profundo (#2D4A5C) com aurora
// dourado+ardósia. Tipografia Cormorant Garamond editorial. Foto 3:4 com linha lateral accent.
// Unicidade: estética de análise lacaniana, não bege-terapeuta genérica.

import { motion } from 'motion/react'
import { FadeIn } from '../App'

const WA_LINK = 'https://wa.me/5541999407836?text=Ol%C3%A1%20Ana%2C%20vim%20pela%20p%C3%A1gina%20e%20gostaria%20de%20agendar%20uma%20sess%C3%A3o.'

function scrollToSection(id: string) {
  const el = document.getElementById(id)
  if (el) el.scrollIntoView({ behavior: 'smooth' })
}

export default function Hero() {
  return (
    <section
      id="hero"
      className="relative min-h-screen flex flex-col items-center justify-center overflow-hidden bg-primary section-padding"
    >
      {/* ── Header desktop sticky ── */}
      <header className="hidden md:flex fixed top-0 left-0 right-0 z-50 items-center justify-between container-ultra py-6">
        <span
          className="font-display text-lg tracking-wide italic"
          style={{ color: 'var(--color-off-white)', opacity: 0.9 }}
        >
          Ana Cristina Schneider
        </span>
        <button
          onClick={() => scrollToSection('faq')}
          className="text-[10px] uppercase tracking-[0.25em] font-light transition-opacity hover:opacity-100"
          style={{ color: 'var(--color-accent)', opacity: 0.7, fontFamily: 'var(--font-sans)' }}
        >
          Agendar sessão
        </button>
      </header>

      {/* ── Aurora blobs ── */}
      <div
        className="blur-orb w-[600px] h-[600px] -top-32 -left-40"
        style={{
          backgroundColor: 'rgba(184, 150, 110, 0.15)',
          animation: 'aurora-1 18s ease-in-out infinite',
        }}
        aria-hidden="true"
      />
      <div
        className="blur-orb w-[500px] h-[500px] top-1/2 -right-32"
        style={{
          backgroundColor: 'rgba(45, 74, 92, 0.4)',
          animation: 'aurora-2 22s ease-in-out infinite',
          animationDelay: '2s',
        }}
        aria-hidden="true"
      />
      <div
        className="blur-orb w-[400px] h-[400px] -bottom-24 left-1/3"
        style={{
          backgroundColor: 'rgba(240, 237, 232, 0.08)',
          animation: 'aurora-3 26s ease-in-out infinite',
          animationDelay: '4s',
        }}
        aria-hidden="true"
      />

      {/* ── Conteúdo Split Layout ── */}
      <div className="relative z-10 container-ultra mx-auto flex flex-col lg:flex-row items-center justify-between gap-16 lg:gap-20 mt-12 lg:mt-0">

        {/* ── Coluna de Texto ── */}
        <div className="w-full lg:w-1/2 flex flex-col items-center lg:items-start text-center lg:text-left gap-8 md:gap-10">

          {/* Callout */}
          <FadeIn direction="down" delay={0}>
            <p
              className="eyebrow-ultra"
              style={{ color: 'var(--color-accent)' }}
            >
              Escuta Analítica
            </p>
          </FadeIn>

          {/* H1 */}
          <FadeIn delay={0.15}>
            <h1
              className="font-display leading-[1.1]"
              style={{
                fontSize: 'clamp(2.5rem, 5.5vw, 4.5rem)',
                color: 'var(--color-off-white)',
                letterSpacing: '-0.01em',
                maxWidth: '600px',
              }}
            >
              Funcional por fora.{' '}
              <em
                className="italic font-light"
                style={{ color: 'var(--color-accent)', display: 'block', marginTop: '0.35em' }}
              >
                Desaparecida por dentro.
              </em>
            </h1>
          </FadeIn>

          {/* Subtítulo */}
          <FadeIn delay={0.30}>
            <p
              className="max-w-xl text-lg md:text-xl leading-relaxed font-light"
              style={{
                fontFamily: 'var(--font-sub)',
                color: 'var(--color-off-white)',
                opacity: 0.7,
              }}
            >
              Psicanálise para quem mantém tudo em pé, mas perdeu o fôlego de viver.
            </p>
          </FadeIn>

          {/* CTAs */}
          <FadeIn delay={0.45}>
            <div className="flex flex-col sm:flex-row gap-4 mt-4 lg:mt-8">
              <motion.a
                href={WA_LINK}
                target="_blank"
                rel="noopener noreferrer"
                whileTap={{ scale: 0.98 }}
                className="btn-shimmer"
              >
                Quero reencontrar meu fôlego
              </motion.a>
              <motion.button
                onClick={() => scrollToSection('pain')}
                whileTap={{ scale: 0.98 }}
                style={{
                  padding: '1.25rem 2.5rem',
                  fontFamily: 'var(--font-sans)',
                  fontSize: '0.75rem',
                  fontWeight: 400,
                  letterSpacing: '0.15em',
                  textTransform: 'uppercase',
                  color: 'rgba(232, 236, 240, 0.75)',
                  backgroundColor: 'transparent',
                  border: '1px solid rgba(232, 236, 240, 0.2)',
                  borderRadius: '0px',
                  cursor: 'pointer',
                  transition: 'all 0.4s ease',
                }}
                onMouseEnter={e => {
                  (e.currentTarget as HTMLButtonElement).style.borderColor = 'rgba(184, 150, 110, 0.4)'
                  ;(e.currentTarget as HTMLButtonElement).style.color = 'rgba(232, 236, 240, 1)'
                }}
                onMouseLeave={e => {
                  (e.currentTarget as HTMLButtonElement).style.borderColor = 'rgba(232, 236, 240, 0.2)'
                  ;(e.currentTarget as HTMLButtonElement).style.color = 'rgba(232, 236, 240, 0.75)'
                }}
              >
                Entender o processo
              </motion.button>
            </div>
          </FadeIn>
        </div>

        {/* ── Coluna da Imagem Editorial ── */}
        <div className="w-full lg:w-1/2 flex justify-center lg:justify-end mt-12 lg:mt-0">
          <FadeIn delay={0.4} direction="left" className="w-full max-w-[280px] md:max-w-sm lg:max-w-[420px] relative">

            {/* Photo Treatment A: Linha lateral accent */}
            <div
              className="absolute left-0 top-8 bottom-8 w-[3px]"
              style={{ backgroundColor: 'var(--color-accent)', opacity: 0.6 }}
              aria-hidden="true"
            />

            <div
              className="relative aspect-[3/4] overflow-hidden rounded-sm ml-4"
              style={{
                boxShadow: '0 25px 50px -12px rgba(0,0,0,0.5)',
              }}
            >
              <div className="absolute inset-0 bg-primary/20 mix-blend-multiply z-10 pointer-events-none" />

              <img
                src="/foto-ana-hero.jpg"
                alt="Ana Cristina Schneider — Psicóloga Clínica"
                className="w-full h-full object-cover object-center transition-transform duration-[2s] ease-out hover:scale-105"
                style={{ filter: 'grayscale(10%) contrast(1.05) sepia(5%)' }}
              />

              <div
                className="absolute bottom-0 left-0 right-0 h-1/2 z-20 pointer-events-none"
                style={{ background: 'linear-gradient(to top, var(--color-primary) 0%, transparent 100%)' }}
              />

              <div className="absolute inset-0 border border-white/10 z-30 pointer-events-none" />
            </div>
          </FadeIn>
        </div>

      </div>

      {/* Indicador de scroll — Oculto no mobile */}
      <FadeIn delay={1.4} className="hidden md:flex absolute bottom-12 flex-col items-center gap-4 cursor-pointer z-20">
        <div onClick={() => scrollToSection('pain')} className="flex flex-col items-center gap-4 hover:opacity-70 transition-opacity">
          <span
            className="text-[10px] uppercase tracking-[0.2em] opacity-50"
            style={{ color: 'var(--color-accent)' }}
          >
            Descubra
          </span>
          <div className="line-separator h-12" />
        </div>
      </FadeIn>

      {/* Gradiente de base */}
      <div
        className="absolute bottom-0 left-0 right-0 h-32 pointer-events-none"
        style={{ background: 'linear-gradient(to top, var(--color-primary), transparent)' }}
        aria-hidden="true"
      />
    </section>
  )
}
