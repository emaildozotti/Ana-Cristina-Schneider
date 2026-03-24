// DECISÃO CRIATIVA: Fundo bg-light. 3 passos do processo TERAPÊUTICO (não do funil).
// Desmistificação Lacan + Remove Ansiedade integrados ao final.
// Numeração decorativa Cormorant Garamond.

import { FadeIn } from '../App'

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
              O Percurso
            </p>
            <h2
              className="leading-[1.1] font-display"
              style={{
                fontSize: 'clamp(2rem, 5vw, 3.5rem)',
                color: 'var(--color-text)',
                letterSpacing: '-0.02em',
              }}
            >
              O percurso{' '}
              <span className="italic font-light" style={{ color: 'var(--color-accent)' }}>
                da análise.
              </span>
            </h2>
          </FadeIn>
        </div>

        {/* Steps */}
        <div className="grid grid-cols-1 lg:grid-cols-3 gap-16 lg:gap-20 mb-20 md:mb-28">
          {steps.map((step, i) => (
            <FadeIn key={i} delay={i * 0.15}>
              <div className="relative">
                {/* Número decorativo */}
                <span
                  className="font-display block mb-6 select-none"
                  style={{
                    fontSize: '5rem',
                    lineHeight: 1,
                    color: 'var(--color-accent)',
                    opacity: 0.15,
                  }}
                  aria-hidden="true"
                >
                  {step.num}
                </span>
                <h3
                  className="text-xl md:text-2xl leading-tight font-display mb-6"
                  style={{ color: 'var(--color-text)' }}
                >
                  {step.title}
                </h3>
                <p
                  className="text-base leading-relaxed font-light"
                  style={{ fontFamily: 'var(--font-sans)', color: 'var(--color-text)', opacity: 0.7 }}
                >
                  {step.text}
                </p>
              </div>
            </FadeIn>
          ))}
        </div>

        {/* Desmistificação Lacan */}
        <FadeIn>
          <div className="max-w-3xl mx-auto mb-16">
            <h3
              className="text-xl md:text-2xl font-display mb-6 text-center"
              style={{ color: 'var(--color-text)' }}
            >
              "Psicanálise Lacaniana parece algo complexo e inacessível?"
            </h3>
            <p
              className="text-base leading-relaxed font-light text-center"
              style={{ fontFamily: 'var(--font-sans)', color: 'var(--color-text)', opacity: 0.7 }}
            >
              Na prática, é o oposto. O fundamento é simples: em vez de tratar o sintoma com dicas e exercícios genéricos, a Psicanálise escuta o que o sintoma tem a dizer. Cada pessoa é tratada como sujeito singular, não como um diagnóstico de manual. Não uso jargões na sessão. Não exijo que você leia Lacan. O trabalho acontece na conversa: na sua fala, nos seus silêncios, na sua história.
            </p>
          </div>
        </FadeIn>

        {/* Remove Ansiedade */}
        <FadeIn delay={0.1}>
          <div
            className="max-w-2xl mx-auto text-center p-10"
            style={{
              border: '1px solid rgba(42, 53, 64, 0.1)',
              backgroundColor: 'rgba(184, 150, 110, 0.03)',
            }}
          >
            <p
              className="text-base leading-relaxed font-light"
              style={{ fontFamily: 'var(--font-sans)', color: 'var(--color-text)', opacity: 0.7 }}
            >
              Não existe compromisso mínimo de sessões. Não existe formato rígido. A frequência e o ritmo são definidos juntos, respeitando o que faz sentido para o seu momento. Se após a primeira sessão você sentir que não é o caminho, tudo bem. Sem pressão, sem cobrança.
            </p>
          </div>
        </FadeIn>

      </div>
    </section>
  )
}
