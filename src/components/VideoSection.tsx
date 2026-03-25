// DECISÃO CRIATIVA: Fundo dark (#1A2E3D). Eyebrow "ASSISTA ANTES DE DECIDIR".
// H2 Cormorant editorial. Container 9:16 click-to-play com poster elegante.
// Linha accent lateral esquerda. CTA WA pós-vídeo.

import { useState } from 'react'
import { motion } from 'motion/react'
import { FadeIn } from '../App'

const VIDEO_ID = 'CKj8c_xb5FQ'
const WA_LINK = 'https://wa.me/5541999407836?text=Ol%C3%A1%20Ana%2C%20vim%20pela%20p%C3%A1gina%20e%20gostaria%20de%20agendar%20uma%20sess%C3%A3o.'

export default function VideoSection() {
  const [isPlaying, setIsPlaying] = useState(false)

  return (
    <section
      id="video"
      className="relative overflow-hidden section-padding-lg"
      style={{ backgroundColor: 'var(--color-dark)' }}
    >
      {/* Aurora sutil */}
      <div
        className="absolute top-1/2 left-1/2 pointer-events-none"
        style={{
          width: '600px',
          height: '600px',
          background: 'radial-gradient(circle, rgba(184, 150, 110, 0.07) 0%, transparent 70%)',
          borderRadius: '9999px',
          transform: 'translate(-50%, -50%)',
        }}
        aria-hidden="true"
      />

      <div className="relative z-10 container-ultra">
        <div className="max-w-4xl mx-auto flex flex-col items-center">

          {/* Header */}
          <FadeIn className="text-center mb-16 md:mb-20">
            <p
              className="eyebrow-ultra mb-8"
              style={{ color: 'var(--color-accent)', opacity: 0.8 }}
            >
              Assista antes de decidir
            </p>
            <h2
              className="font-display leading-[1.1]"
              style={{
                fontSize: 'clamp(2rem, 5vw, 3.5rem)',
                color: 'var(--color-off-white)',
                letterSpacing: '-0.02em',
              }}
            >
              A mudança começa quando{' '}
              <em
                className="italic font-light"
                style={{ color: 'var(--color-accent)', display: 'block', marginTop: '0.25em' }}
              >
                a voz encontra escuta.
              </em>
            </h2>
            <p
              className="text-base md:text-lg leading-relaxed font-light italic mt-8 max-w-xl mx-auto"
              style={{
                fontFamily: 'var(--font-sub)',
                color: 'var(--color-off-white)',
                opacity: 0.6,
              }}
            >
              Antes de qualquer decisão, ouça quem estará do outro lado da escuta.
            </p>
          </FadeIn>

          {/* Contêiner de vídeo 9:16 */}
          <FadeIn delay={0.2}>
            <div
              className="relative overflow-hidden"
              style={{
                width: '300px',
                aspectRatio: '9/16',
                borderRadius: '2px',
                boxShadow: '0 30px 80px -20px rgba(0,0,0,0.6)',
              }}
            >
              {/* Linha accent lateral esquerda */}
              <div
                className="absolute left-0 top-12 bottom-12 w-[3px] z-20"
                style={{ backgroundColor: 'var(--color-accent)', opacity: 0.5 }}
                aria-hidden="true"
              />

              {isPlaying && VIDEO_ID ? (
                <iframe
                  src={`https://www.youtube.com/embed/${VIDEO_ID}?autoplay=1&rel=0`}
                  title="Vídeo Ana Cristina Schneider"
                  className="absolute inset-0 w-full h-full"
                  allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture"
                  allowFullScreen
                />
              ) : (
                <div
                  className="absolute inset-0 flex items-center justify-center"
                  style={{ backgroundColor: 'var(--color-primary)' }}
                >
                  {/* Gradiente sutil */}
                  <div
                    className="absolute inset-0 pointer-events-none"
                    style={{
                      background: 'linear-gradient(135deg, rgba(184,150,110,0.07) 0%, transparent 60%)',
                    }}
                  />

                  {/* Iniciais decorativas */}
                  <span
                    className="font-display select-none pointer-events-none absolute"
                    style={{
                      fontSize: '8rem',
                      color: 'var(--color-accent)',
                      opacity: 0.05,
                      lineHeight: 1,
                      top: '50%',
                      left: '50%',
                      transform: 'translate(-50%, -50%)',
                    }}
                    aria-hidden="true"
                  >
                    ACS
                  </span>

                  <motion.button
                    onClick={() => setIsPlaying(true)}
                    whileHover={{ scale: 1.04 }}
                    whileTap={{ scale: 0.97 }}
                    className="relative z-10 flex flex-col items-center gap-8 cursor-pointer px-8"
                    style={{ background: 'none', border: 'none', padding: '2rem' }}
                    aria-label="Assistir vídeo"
                  >
                    {/* Ícone play */}
                    <div
                      className="w-16 h-16 flex items-center justify-center"
                      style={{
                        border: '1px solid rgba(184, 150, 110, 0.4)',
                        borderRadius: '2px',
                        backgroundColor: 'rgba(184, 150, 110, 0.08)',
                      }}
                    >
                      <svg width="22" height="22" viewBox="0 0 24 24" fill="none">
                        <path d="M8 5v14l11-7L8 5z" fill="var(--color-accent)" opacity="0.9" />
                      </svg>
                    </div>

                    <p
                      className="font-display italic leading-snug text-center"
                      style={{
                        fontSize: 'clamp(1rem, 3vw, 1.2rem)',
                        color: 'var(--color-off-white)',
                        opacity: 0.9,
                      }}
                    >
                      Ana Cristina Schneider
                    </p>

                    <p
                      className="text-[10px] uppercase tracking-[0.25em] font-light"
                      style={{ color: 'var(--color-accent)', opacity: 0.7 }}
                    >
                      Vídeo em breve
                    </p>
                  </motion.button>
                </div>
              )}
            </div>
          </FadeIn>

          {/* Pós-vídeo */}
          <FadeIn delay={0.4} className="text-center mt-16 md:mt-20">
            <p
              className="text-base md:text-lg leading-relaxed font-light max-w-xl mx-auto mb-10"
              style={{
                fontFamily: 'var(--font-sub)',
                color: 'var(--color-off-white)',
                opacity: 0.65,
              }}
            >
              O que você acabou de ouvir não é script. É a voz de quem sustenta o que a maioria dos profissionais evita escutar.
            </p>

            <motion.a
              href={WA_LINK}
              target="_blank"
              rel="noopener noreferrer"
              whileTap={{ scale: 0.98 }}
              className="btn-shimmer"
            >
              Quero reencontrar meu fôlego
            </motion.a>
          </FadeIn>

        </div>
      </div>
    </section>
  )
}
