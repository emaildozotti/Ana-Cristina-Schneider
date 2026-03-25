// DECISÃO CRIATIVA: Fundo dark (#1A2E3D) com dot pattern sutil para quebrar a sequência
// de seções claras. 3 passos em lista border-top, como Miriam v1.
// Add remove-ansiedade e desmistificação. CTA WA ao final.

import { motion } from 'motion/react'
import { FadeIn } from '../App'

const WA_LINK = 'https://wa.me/5541999407836?text=Ol%C3%A1%20Ana%2C%20vim%20pela%20p%C3%A1gina%20e%20gostaria%20de%20agendar%20uma%20sess%C3%A3o.'

const steps = [
  {
    num: '01',
    title: 'A fala encontra espaço',
    text: 'Na primeira sessão, não existe roteiro. Você fala. Eu escuto. Sem julgamento, sem pressa, sem expectativa de que a dor faça sentido logo de cara. O espaço analítico é o lugar onde o que ficou silenciado pode finalmente aparecer. Não é sobre contar a história certa. É sobre deixar a fala acontecer.',
  },
  {
    num: '02',
    title: 'O sujeito se localiza',
    text: 'Com o tempo, a escuta analítica começa a revelar padrões: onde o discurso repete, onde o silêncio aparece, onde a fala diz uma coisa e o corpo diz outra. Minha intervenção pontua esses momentos. Não para julgar. Para abrir a possibilidade de uma mudança de posição: de quem "vai levando" para quem decide o próprio rumo.',
  },
  {
    num: '03',
    title: 'O fôlego volta',
    text: 'A transformação não é um evento. É um processo. Aos poucos, o sujeito começa a se localizar no próprio desejo. As escolhas deixam de ser automáticas. O peso que não tinha nome começa a se dissipar. Não porque a dor desaparece, mas porque ela foi escutada, nomeada e integrada.',
  },
]

export default function HowItWorks() {
  return (
    <section
      id="how"
      className="relative overflow-hidden section-padding-lg"
      style={{
        backgroundColor: 'var(--color-dark)',
        backgroundImage: 'radial-gradient(rgba(184, 150, 110, 0.04) 1px, transparent 1px)',
        backgroundSize: '24px 24px',
      }}
    >
      <div className="container-ultra">

        {/* Header */}
        <div className="max-w-3xl mb-16 md:mb-20">
          <FadeIn>
            <p
              className="eyebrow-ultra mb-8"
              style={{ color: 'var(--color-accent)', opacity: 0.8 }}
            >
              O Percurso
            </p>
            <h2
              className="leading-[1.1] font-display"
              style={{
                fontSize: 'clamp(2rem, 5vw, 3.5rem)',
                color: 'var(--color-off-white)',
                letterSpacing: '-0.02em',
              }}
            >
              O que acontece{' '}
              <em className="italic font-light" style={{ color: 'var(--color-accent)' }}>
                a partir de agora.
              </em>
            </h2>
          </FadeIn>
        </div>

        {/* Steps — border-top list */}
        <div className="flex flex-col gap-0 mb-16 md:mb-20">
          {steps.map((step, i) => (
            <FadeIn key={step.num} delay={0.1 * (i + 1)}>
              <div
                className="py-8 md:py-10 flex flex-col md:flex-row gap-5 md:gap-10"
                style={{
                  borderTop: '1px solid rgba(184, 150, 110, 0.15)',
                  ...(i === steps.length - 1
                    ? { borderBottom: '1px solid rgba(184, 150, 110, 0.15)' }
                    : {}),
                }}
              >
                <div className="flex items-start gap-5 md:w-52 shrink-0">
                  <span
                    style={{
                      fontFamily: 'var(--font-display)',
                      fontSize: '13px',
                      color: 'var(--color-accent)',
                      opacity: 0.5,
                      paddingTop: '2px',
                      minWidth: '28px',
                    }}
                  >
                    {step.num}
                  </span>
                  <h3
                    className="text-lg md:text-xl"
                    style={{
                      fontFamily: 'var(--font-display)',
                      color: 'var(--color-off-white)',
                      fontWeight: 400,
                      lineHeight: 1.3,
                    }}
                  >
                    {step.title}
                  </h3>
                </div>
                <p
                  className="text-sm md:text-base leading-relaxed"
                  style={{
                    fontFamily: 'var(--font-sans)',
                    color: 'var(--color-off-white)',
                    fontWeight: 300,
                    lineHeight: 1.85,
                    opacity: 0.75,
                  }}
                >
                  {step.text}
                </p>
              </div>
            </FadeIn>
          ))}
        </div>

        {/* Desmistificação Lacan */}
        <FadeIn delay={0.2}>
          <div
            className="max-w-3xl mb-12"
            style={{
              borderLeft: '2px solid rgba(184, 150, 110, 0.3)',
              padding: '1.5rem 2rem',
              backgroundColor: 'rgba(184, 150, 110, 0.04)',
              borderRadius: '0 2px 2px 0',
            }}
          >
            <p
              className="text-sm md:text-base font-display italic mb-3"
              style={{ color: 'var(--color-off-white)', opacity: 0.8 }}
            >
              "Psicanálise Lacaniana parece algo complexo e inacessível?"
            </p>
            <p
              className="text-sm md:text-base leading-relaxed font-light"
              style={{
                fontFamily: 'var(--font-sans)',
                color: 'var(--color-off-white)',
                opacity: 0.6,
              }}
            >
              Na prática, é o oposto. Em vez de tratar o sintoma com dicas e exercícios genéricos, a Psicanálise escuta o que o sintoma tem a dizer. Não uso jargões na sessão. Não exijo que você leia Lacan. O trabalho acontece na conversa — na sua fala, nos seus silêncios, na sua história.
            </p>
          </div>
        </FadeIn>

        {/* Remove Ansiedade */}
        <FadeIn delay={0.3}>
          <p
            className="text-sm md:text-base font-light italic mb-12 md:mb-16"
            style={{
              fontFamily: 'var(--font-sans)',
              color: 'var(--color-off-white)',
              opacity: 0.5,
            }}
          >
            Não existe compromisso mínimo de sessões. Não existe formato rígido. A frequência e o ritmo são definidos juntos, respeitando o que faz sentido para o seu momento.
          </p>
        </FadeIn>

        {/* CTA */}
        <FadeIn delay={0.4}>
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
        </FadeIn>

      </div>
    </section>
  )
}
