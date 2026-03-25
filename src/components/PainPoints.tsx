// DECISÃO CRIATIVA: Fundo bg-warm (#F0EDE8) para contraste com Hero dark e VideoSection dark.
// Layout sticky sidebar como pipeline v7.1.0.
// Sidebar esquerda fixa com H2 + abertura em 1ª pessoa.
// Cards direita scrollam verticalmente. Abertura Opção C (1ª pessoa).

import { motion } from 'motion/react'
import { FadeIn } from '../App'

const WA_LINK = 'https://wa.me/5541999407836?text=Ol%C3%A1%20Ana%2C%20vim%20pela%20p%C3%A1gina%20e%20gostaria%20de%20agendar%20uma%20sess%C3%A3o.'

const PAINS = [
  {
    num: '01',
    text: 'Você acorda, trabalha, resolve, cuida de todo mundo. No final do dia, quando tudo para, sente um vazio que não sabe explicar. Tem tudo que "deveria" trazer satisfação. Mas a vontade sumiu.',
  },
  {
    num: '02',
    text: 'Carrega um peso que não sabe de onde veio. Pode ser um luto que nunca foi nomeado. Uma perda que nunca foi dita em voz alta. Algo que ficou enterrado debaixo da rotina perfeita.',
  },
  {
    num: '03',
    text: 'Se sente uma fraude na própria vida. Por fora, tudo certo: carreira, família, conquistas. Por dentro, a sensação de estar vivendo a vida de outra pessoa. E a vergonha de admitir isso quando "não tem motivo" para sofrer.',
  },
  {
    num: '04',
    text: 'Cuida de todo mundo. É o pilar. A referência. Mas quando alguém pergunta "como você está?", você responde no automático. Porque a verdade é que não sabe mais.',
  },
]

export default function PainPoints() {
  return (
    <section
      id="pain"
      className="relative overflow-hidden section-padding-lg"
      style={{ backgroundColor: 'var(--color-bg-warm)' }}
    >
      <div className="relative z-10 container-ultra">

        {/* Layout sticky sidebar */}
        <div
          className="pain-grid"
          style={{
            display: 'grid',
            gridTemplateColumns: 'minmax(280px, 380px) 1fr',
            gap: '5rem',
            alignItems: 'start',
          }}
        >
          {/* Sidebar esquerda — sticky */}
          <div style={{ position: 'sticky', top: '6rem' }}>
            <FadeIn delay={0.1}>
              <p
                className="eyebrow-ultra mb-8"
                style={{ color: 'var(--color-text)', opacity: 0.5 }}
              >
                Reconhecimento
              </p>
              <h2
                className="font-display leading-[1.15]"
                style={{
                  fontSize: 'clamp(1.75rem, 3vw, 2.5rem)',
                  color: 'var(--color-text)',
                  marginBottom: '2rem',
                }}
              >
                Você mantém tudo em pé.{' '}
                <em style={{ color: 'var(--color-accent)', fontStyle: 'italic' }}>
                  Mas quem sustenta o que você carrega?
                </em>
              </h2>

              <p
                className="text-base font-light leading-relaxed"
                style={{
                  fontFamily: 'var(--font-sans)',
                  color: 'var(--color-text)',
                  opacity: 0.6,
                  marginBottom: '2rem',
                }}
              >
                Eu sei como é funcionar perfeitamente enquanto algo dentro de você pede silêncio. O nome disso não é fraqueza. É o que eu chamo de "O Oco": a vida funciona, mas o sentido desaparece.
              </p>

              <div
                style={{
                  width: '2rem',
                  height: '1px',
                  backgroundColor: 'rgba(184, 150, 110, 0.4)',
                }}
              />
            </FadeIn>
          </div>

          {/* Cards direita */}
          <div style={{ display: 'flex', flexDirection: 'column', gap: '1rem' }}>
            {PAINS.map((pain, i) => (
              <FadeIn key={pain.num} delay={i * 0.1}>
                <div
                  style={{
                    backgroundColor: 'rgba(42, 53, 64, 0.03)',
                    border: '1px solid rgba(42, 53, 64, 0.1)',
                    borderRadius: '2px',
                    padding: '2rem',
                    position: 'relative',
                    transition: 'border-color 0.3s ease, background-color 0.3s ease',
                    cursor: 'default',
                  }}
                  onMouseEnter={e => {
                    const el = e.currentTarget as HTMLDivElement
                    el.style.borderColor = 'rgba(184, 150, 110, 0.3)'
                    el.style.backgroundColor = 'rgba(42, 53, 64, 0.05)'
                  }}
                  onMouseLeave={e => {
                    const el = e.currentTarget as HTMLDivElement
                    el.style.borderColor = 'rgba(42, 53, 64, 0.1)'
                    el.style.backgroundColor = 'rgba(42, 53, 64, 0.03)'
                  }}
                >
                  {/* Número decorativo */}
                  <span
                    style={{
                      position: 'absolute',
                      top: '1.25rem',
                      right: '1.5rem',
                      fontFamily: 'var(--font-display)',
                      fontSize: '5rem',
                      color: 'var(--color-accent)',
                      opacity: 0.07,
                      lineHeight: 1,
                      userSelect: 'none',
                      pointerEvents: 'none',
                    }}
                    aria-hidden="true"
                  >
                    {pain.num}
                  </span>

                  <span
                    style={{
                      display: 'block',
                      fontFamily: 'var(--font-display)',
                      fontSize: '0.75rem',
                      color: 'var(--color-accent)',
                      opacity: 0.8,
                      letterSpacing: '0.08em',
                      marginBottom: '0.75rem',
                      position: 'relative',
                      zIndex: 1,
                    }}
                  >
                    {pain.num}
                  </span>

                  <p
                    className="font-light leading-relaxed"
                    style={{
                      fontFamily: 'var(--font-sub)',
                      fontSize: 'clamp(0.9375rem, 1.2vw, 1.0625rem)',
                      color: 'var(--color-text)',
                      opacity: 0.85,
                      lineHeight: 1.75,
                      position: 'relative',
                      zIndex: 1,
                    }}
                  >
                    {pain.text}
                  </p>
                </div>
              </FadeIn>
            ))}

            {/* Transição */}
            <FadeIn delay={0.5}>
              <p
                className="font-light italic leading-relaxed"
                style={{
                  fontFamily: 'var(--font-sub)',
                  fontSize: 'clamp(0.875rem, 1.1vw, 1rem)',
                  color: 'var(--color-text)',
                  opacity: 0.55,
                  marginTop: '0.5rem',
                  lineHeight: 1.7,
                }}
              >
                Se você chegou até aqui e algo nessas palavras ecoou, o que vem a seguir foi feito para você.
              </p>
            </FadeIn>

            <FadeIn delay={0.6}>
              <div style={{ marginTop: '0.5rem' }}>
                <motion.a
                  href={WA_LINK}
                  target="_blank"
                  rel="noopener noreferrer"
                  whileTap={{ scale: 0.98 }}
                  className="btn-shimmer"
                  style={{ display: 'inline-flex' }}
                >
                  Quero reencontrar meu fôlego
                </motion.a>
              </div>
            </FadeIn>
          </div>
        </div>

      </div>

      <style>{`
        @media (max-width: 768px) {
          .pain-grid {
            grid-template-columns: 1fr !important;
            gap: 2.5rem !important;
          }
          .pain-grid > div:first-child {
            position: static !important;
          }
        }
      `}</style>
    </section>
  )
}
