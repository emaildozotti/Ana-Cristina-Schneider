// DECISÃO CRIATIVA: Fundo escuro (#1A2E3D) quebrando o padrão — cards com número decorativo
// grande em Cormorant Garamond 7rem, opacity 6%, evocando profundidade analítica.
// Texto off-white sobre dark para contraste dramático. Abertura Opção C (1ª pessoa).

import { FadeIn } from '../App'

function scrollToSection(id: string) {
  const el = document.getElementById(id)
  if (el) el.scrollIntoView({ behavior: 'smooth' })
}

const pains = [
  {
    num: '01',
    text: 'Você acorda, trabalha, resolve, cuida de todo mundo. No final do dia, quando tudo para, sente um vazio que não sabe explicar.',
    sub: 'Tem tudo que "deveria" trazer satisfação. Mas a vontade sumiu.',
  },
  {
    num: '02',
    text: 'Carrega um peso que não sabe de onde veio. Pode ser um luto que nunca foi nomeado. Uma perda que nunca foi dita em voz alta.',
    sub: 'Algo que ficou enterrado debaixo da rotina perfeita.',
  },
  {
    num: '03',
    text: 'Se sente uma fraude na própria vida. Por fora, tudo certo: carreira, família, conquistas.',
    sub: 'Por dentro, a sensação de estar vivendo a vida de outra pessoa.',
  },
  {
    num: '04',
    text: 'Cuida de todo mundo. É o pilar. A referência. Mas quando alguém pergunta "como você está?"',
    sub: 'Você responde no automático. Porque a verdade é que não sabe mais.',
  },
]

export default function PainPoints() {
  return (
    <section
      id="pain"
      className="relative overflow-hidden section-padding-lg"
      style={{ backgroundColor: 'var(--color-dark)' }}
    >
      <div className="relative z-10 container-ultra">

        {/* Abertura Opção C — 1ª pessoa */}
        <div className="max-w-3xl mx-auto text-center mb-20 md:mb-28">
          <FadeIn>
            <p
              className="eyebrow-ultra mb-8"
              style={{ color: 'var(--color-accent)', opacity: 0.8 }}
            >
              Reconhecimento
            </p>
            <p
              className="text-lg md:text-xl leading-relaxed font-light mb-6"
              style={{ fontFamily: 'var(--font-sub)', color: 'var(--color-off-white)', opacity: 0.9 }}
            >
              Eu sei como é funcionar perfeitamente enquanto algo dentro de você pede silêncio.
            </p>
            <p
              className="text-base leading-relaxed font-light"
              style={{ fontFamily: 'var(--font-sans)', color: 'var(--color-off-white)', opacity: 0.6 }}
            >
              Antes de me tornar psicóloga, vivi o que muitos dos meus pacientes vivem: a sensação de perder a identidade debaixo das obrigações, dos papéis e das expectativas que os outros depositam em nós. O nome disso não é fraqueza. É o que eu chamo de "O Oco": a vida funciona, mas o sentido desaparece.
            </p>
          </FadeIn>
        </div>

        {/* Cards de Dor — Grid com número decorativo */}
        <div className="grid grid-cols-1 md:grid-cols-2 gap-8 max-w-5xl mx-auto">
          {pains.map((pain, i) => (
            <FadeIn key={i} delay={i * 0.15} direction="up">
              <div
                className="relative p-10 h-full flex flex-col justify-between transition-colors duration-500"
                style={{
                  border: '1px solid rgba(232, 236, 240, 0.08)',
                  backgroundColor: 'rgba(232, 236, 240, 0.03)',
                }}
              >
                {/* Número decorativo grande */}
                <span
                  className="font-display absolute top-6 right-8 select-none"
                  style={{
                    fontSize: '7rem',
                    lineHeight: 1,
                    color: 'var(--color-accent)',
                    opacity: 0.06,
                  }}
                  aria-hidden="true"
                >
                  {pain.num}
                </span>

                <div className="relative z-10">
                  <h3
                    className="text-lg md:text-xl mb-4 leading-snug font-light"
                    style={{ fontFamily: 'var(--font-sub)', color: 'var(--color-off-white)' }}
                  >
                    {pain.text}
                  </h3>
                  <p
                    className="text-sm font-light leading-relaxed"
                    style={{ color: 'var(--color-off-white)', opacity: 0.5 }}
                  >
                    {pain.sub}
                  </p>
                </div>
              </div>
            </FadeIn>
          ))}
        </div>

        {/* Transição cliffhanger */}
        <FadeIn delay={0.4} className="mt-16 md:mt-24">
          <div className="max-w-2xl mx-auto text-center">
            <div
              className="w-12 h-px mx-auto mb-8"
              style={{ backgroundColor: 'rgba(184, 150, 110, 0.3)' }}
              aria-hidden="true"
            />
            <p
              className="text-lg md:text-xl leading-relaxed font-light italic"
              style={{
                fontFamily: 'var(--font-sub)',
                color: 'var(--color-off-white)',
                opacity: 0.8,
              }}
            >
              Se você chegou até aqui e algo nessas palavras ecoou, o que vem a seguir foi feito para você.
            </p>
            <div className="mt-12 flex justify-center">
              <button
                onClick={() => scrollToSection('video')}
                className="btn-shimmer"
              >
                Continuar
              </button>
            </div>
          </div>
        </FadeIn>

      </div>
    </section>
  )
}
