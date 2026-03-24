// DECISÃO CRIATIVA: Fundo bg-light para clareza do método. 3 pilares com accent dourado nos números.
// Conceito-mecanismo: "Escuta que vai ao sujeito, não ao sintoma". Texto em 1ª pessoa.

import { FadeIn } from '../App'

const pillars = [
  {
    num: '01',
    title: 'Escuta que localiza',
    text: 'Cada sessão é um espaço de fala sem roteiro. Eu não sigo protocolos genéricos. Escuto o que está por trás das palavras: onde o discurso falha, onde o silêncio revela, onde a repetição aponta para algo que precisa ser nomeado. A escuta analítica é rigorosa, precisa e profundamente singular.',
  },
  {
    num: '02',
    title: 'Intervenção que provoca mudança de posição',
    text: 'Não ofereço conselhos nem exercícios para casa. Minha intervenção pontua onde a fala do paciente revela sua verdade oculta. É um trabalho de escavação: delicado, mas certeiro. O objetivo não é confortar. É provocar uma mudança de posição subjetiva: sair de "objeto das expectativas" para "sujeito do próprio desejo".',
  },
  {
    num: '03',
    title: 'Sustentação que não recua',
    text: 'Trabalhar com dores profundas exige mais do que técnica: exige musculatura clínica. Minha experiência no CAPS, lidando com sofrimento real em ambiente de alta complexidade, me preparou para sustentar o que muitos profissionais evitam. Não recuo diante do que dói. E isso faz diferença.',
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
        <div className="max-w-3xl mb-20 md:mb-28">
          <FadeIn>
            <p
              className="eyebrow-ultra mb-8"
              style={{ color: 'var(--color-text)', opacity: 0.5 }}
            >
              O Método
            </p>
            <h2
              className="leading-[1.1] font-display mb-8"
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
            <p
              className="text-base md:text-lg leading-relaxed font-light max-w-2xl"
              style={{ fontFamily: 'var(--font-sans)', color: 'var(--color-text)', opacity: 0.7 }}
            >
              A maioria das abordagens terapêuticas tenta aliviar o desconforto. Oferecem técnicas, exercícios e protocolos para silenciar o que incomoda. A Psicanálise Lacaniana faz o caminho inverso. Em vez de calar o sintoma, escuta o que ele tem a dizer.
            </p>
          </FadeIn>
        </div>

        {/* Pilares */}
        <div className="grid grid-cols-1 lg:grid-cols-3 gap-12 lg:gap-16 mb-20 md:mb-28">
          {pillars.map((pillar, i) => (
            <FadeIn key={i} delay={i * 0.15}>
              <div className="flex flex-col gap-6">
                <span
                  className="font-display text-5xl"
                  style={{ color: 'var(--color-accent)', opacity: 0.3 }}
                >
                  {pillar.num}
                </span>
                <h3
                  className="text-xl md:text-2xl leading-tight font-display"
                  style={{ color: 'var(--color-text)' }}
                >
                  {pillar.title}
                </h3>
                <p
                  className="text-base leading-relaxed font-light"
                  style={{ fontFamily: 'var(--font-sans)', color: 'var(--color-text)', opacity: 0.7 }}
                >
                  {pillar.text}
                </p>
              </div>
            </FadeIn>
          ))}
        </div>

        {/* Não Prometo */}
        <FadeIn>
          <div
            className="max-w-3xl mx-auto p-10 md:p-14"
            style={{
              borderLeft: '3px solid var(--color-accent)',
              backgroundColor: 'rgba(184, 150, 110, 0.04)',
            }}
          >
            <p
              className="text-base md:text-lg leading-relaxed font-light italic"
              style={{
                fontFamily: 'var(--font-sub)',
                color: 'var(--color-text)',
                opacity: 0.85,
              }}
            >
              Não prometo alívio em X sessões. Não prometo felicidade constante. Não prometo que será fácil. Prometo uma escuta que sustenta, uma presença que não recua e um espaço onde a verdade do sujeito é tratada com a dignidade que merece.
            </p>
          </div>
        </FadeIn>

        {/* Transição */}
        <FadeIn delay={0.2}>
          <p
            className="text-center text-lg font-light italic mt-16 md:mt-24"
            style={{
              fontFamily: 'var(--font-sub)',
              color: 'var(--color-text)',
              opacity: 0.6,
            }}
          >
            Mas quem é a pessoa por trás dessa escuta? E por que ela escolheu trabalhar justamente com quem sofre em silêncio?
          </p>
        </FadeIn>

      </div>
    </section>
  )
}
