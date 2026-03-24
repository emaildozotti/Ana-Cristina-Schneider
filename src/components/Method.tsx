// DECISÃO CRIATIVA: 3 cards dark (#1A2E3D) sobre fundo bg-light.
// Numeral Cormorant Garamond 8rem opacity 0.06 decorativo.
// Linha accent dourada no topo de cada card. Cantos retos (border-radius: 2px).
// Grid 3 colunas desktop → stack mobile.

import { FadeIn } from '../App'

const PILLARS = [
  {
    num: 'I',
    title: 'Escuta que localiza.',
    text: 'Cada sessão é um espaço de fala sem roteiro. Escuto o que está por trás das palavras: onde o discurso falha, onde o silêncio revela, onde a repetição aponta para algo que precisa ser nomeado. A escuta analítica é rigorosa, precisa e profundamente singular.',
  },
  {
    num: 'II',
    title: 'Intervenção que provoca mudança.',
    text: 'Não ofereço conselhos nem exercícios para casa. Minha intervenção pontua onde a fala do paciente revela sua verdade oculta. O objetivo não é confortar. É provocar uma mudança de posição subjetiva: sair de "objeto das expectativas" para "sujeito do próprio desejo".',
  },
  {
    num: 'III',
    title: 'Sustentação que não recua.',
    text: 'Trabalhar com dores profundas exige mais do que técnica: exige musculatura clínica. Minha experiência no CAPS me preparou para sustentar o que muitos profissionais evitam. Não recuo diante do que dói. E isso faz diferença.',
  },
]

export default function Method() {
  return (
    <section
      id="method"
      className="relative overflow-hidden section-padding-lg"
      style={{ backgroundColor: 'var(--color-bg-light)' }}
    >
      <div className="container-ultra">

        {/* Header */}
        <div className="max-w-3xl mb-16 md:mb-24">
          <FadeIn>
            <p
              className="eyebrow-ultra mb-8"
              style={{ color: 'var(--color-text)', opacity: 0.5 }}
            >
              O Método
            </p>
            <h2
              className="leading-[1.1] font-display"
              style={{
                fontSize: 'clamp(2rem, 5vw, 3.5rem)',
                color: 'var(--color-text)',
                letterSpacing: '-0.02em',
              }}
            >
              Como funciona a escuta que vai ao sujeito,{' '}
              <span className="italic font-light" style={{ color: 'var(--color-accent)' }}>
                não ao sintoma.
              </span>
            </h2>
          </FadeIn>
          <FadeIn delay={0.1}>
            <p
              className="text-base md:text-lg leading-relaxed font-light mt-8 max-w-2xl"
              style={{ fontFamily: 'var(--font-sans)', color: 'var(--color-text)', opacity: 0.65 }}
            >
              A maioria das abordagens terapêuticas tenta aliviar o desconforto. A Psicanálise Lacaniana faz o caminho inverso. Em vez de calar o sintoma, escuta o que ele tem a dizer.
            </p>
          </FadeIn>
        </div>

        {/* 3 dark cards */}
        <div
          className="method-cards"
          style={{
            display: 'grid',
            gridTemplateColumns: 'repeat(3, 1fr)',
            gap: '1.25rem',
            marginBottom: '4rem',
          }}
        >
          {PILLARS.map((pillar, i) => (
            <FadeIn key={pillar.num} delay={0.1 + i * 0.12} direction="up">
              <div
                style={{
                  backgroundColor: 'var(--color-dark)',
                  borderRadius: '2px',
                  padding: '2.5rem 2rem',
                  position: 'relative',
                  overflow: 'hidden',
                  height: '100%',
                  display: 'flex',
                  flexDirection: 'column',
                  gap: '1rem',
                }}
              >
                {/* Linha dourada no topo */}
                <div style={{
                  position: 'absolute',
                  top: 0,
                  left: '2rem',
                  right: '2rem',
                  height: '2px',
                  background: 'linear-gradient(90deg, var(--color-accent) 0%, transparent 100%)',
                  opacity: 0.55,
                }} />

                {/* Numeral decorativo grande */}
                <span
                  style={{
                    position: 'absolute',
                    bottom: '-1rem',
                    right: '1rem',
                    fontFamily: 'var(--font-display)',
                    fontSize: '8rem',
                    color: 'var(--color-accent)',
                    opacity: 0.06,
                    lineHeight: 1,
                    pointerEvents: 'none',
                    userSelect: 'none',
                  }}
                  aria-hidden="true"
                >
                  {pillar.num}
                </span>

                {/* Numeral badge */}
                <span
                  style={{
                    fontFamily: 'var(--font-display)',
                    fontSize: '1rem',
                    color: 'var(--color-accent)',
                    opacity: 0.8,
                    letterSpacing: '0.05em',
                    position: 'relative',
                    zIndex: 1,
                  }}
                >
                  {pillar.num}
                </span>

                {/* Título */}
                <h3
                  style={{
                    fontFamily: 'var(--font-display)',
                    fontSize: 'clamp(1.1rem, 1.4vw, 1.3rem)',
                    color: 'var(--color-off-white)',
                    lineHeight: 1.25,
                    position: 'relative',
                    zIndex: 1,
                  }}
                >
                  {pillar.title}
                </h3>

                {/* Divisor */}
                <div style={{
                  height: '1px',
                  background: 'rgba(184, 150, 110, 0.18)',
                  position: 'relative',
                  zIndex: 1,
                }} />

                {/* Corpo */}
                <p
                  style={{
                    fontFamily: 'var(--font-sans)',
                    fontSize: '0.875rem',
                    color: 'var(--color-off-white)',
                    opacity: 0.68,
                    lineHeight: 1.8,
                    position: 'relative',
                    zIndex: 1,
                    flex: 1,
                  }}
                >
                  {pillar.text}
                </p>
              </div>
            </FadeIn>
          ))}
        </div>

        {/* Não Prometo */}
        <FadeIn delay={0.2}>
          <div
            className="max-w-3xl mx-auto"
            style={{
              borderLeft: '3px solid var(--color-accent)',
              backgroundColor: 'rgba(184, 150, 110, 0.04)',
              padding: '1.75rem 2rem',
              borderRadius: '0 2px 2px 0',
              marginBottom: '3rem',
            }}
          >
            <p
              className="text-sm font-display mb-3"
              style={{ color: 'var(--color-text)', opacity: 0.7, letterSpacing: '0.04em' }}
            >
              O que eu não prometo:
            </p>
            <p
              className="text-base md:text-lg leading-relaxed font-light italic"
              style={{
                fontFamily: 'var(--font-sub)',
                color: 'var(--color-text)',
                opacity: 0.8,
              }}
            >
              Não prometo alívio em X sessões. Não prometo felicidade constante. Não prometo que será fácil. Prometo uma escuta que sustenta, uma presença que não recua e um espaço onde a verdade do sujeito é tratada com a dignidade que merece.
            </p>
          </div>
        </FadeIn>

        {/* Transição */}
        <FadeIn delay={0.3}>
          <p
            className="text-center text-base md:text-lg font-light italic"
            style={{
              fontFamily: 'var(--font-sub)',
              color: 'var(--color-text)',
              opacity: 0.5,
              marginBottom: '2rem',
            }}
          >
            Mas quem é a pessoa por trás dessa escuta?
          </p>
        </FadeIn>

      </div>

      <style>{`
        @media (max-width: 768px) {
          .method-cards {
            grid-template-columns: 1fr !important;
          }
        }
        @media (min-width: 769px) and (max-width: 1024px) {
          .method-cards {
            grid-template-columns: repeat(2, 1fr) !important;
          }
          .method-cards > *:last-child {
            grid-column: 1 / -1;
            max-width: calc(50% - 0.625rem);
          }
        }
      `}</style>
    </section>
  )
}
