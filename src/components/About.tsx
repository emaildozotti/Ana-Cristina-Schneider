// DECISÃO CRIATIVA: Fundo bg-warm. Texto ANTES da foto no mobile (order-2 md:order-1).
// Photo treatment A: linha lateral 3px accent. Citação blockquote com border-l-2 accent.
// Texto biográfico em 1ª pessoa.

import { FadeIn } from '../App'

function scrollToSection(id: string) {
  const el = document.getElementById(id)
  if (el) el.scrollIntoView({ behavior: 'smooth' })
}

export default function About() {
  return (
    <section
      id="about"
      className="relative overflow-hidden section-padding-lg"
      style={{ backgroundColor: 'var(--color-bg-warm)' }}
    >
      <div className="container-ultra">
        <div className="flex flex-col lg:flex-row items-start gap-16 lg:gap-24">

          {/* ── Coluna de Texto (aparece ANTES no mobile) ── */}
          <div className="w-full lg:w-3/5 order-1">
            <FadeIn>
              <p
                className="eyebrow-ultra mb-8"
                style={{ color: 'var(--color-text)', opacity: 0.5 }}
              >
                Sobre
              </p>
              <h2
                className="leading-[1.1] font-display mb-12"
                style={{
                  fontSize: 'clamp(2rem, 5vw, 3.5rem)',
                  color: 'var(--color-text)',
                  letterSpacing: '-0.02em',
                }}
              >
                Ana Cristina Schneider
              </h2>
            </FadeIn>

            {/* ANTES */}
            <FadeIn delay={0.1}>
              <p
                className="text-base leading-relaxed font-light mb-6"
                style={{ fontFamily: 'var(--font-sans)', color: 'var(--color-text)', opacity: 0.8 }}
              >
                Antes de ser psicóloga, fui uma observadora silenciosa. Desde antes da faculdade, tinha essa habilidade de escutar e observar que as pessoas reconheciam. Mas foi quando encontrei meu próprio sofrimento que entendi a diferença entre ouvir e escutar de verdade.
              </p>
              <p
                className="text-base leading-relaxed font-light mb-10"
                style={{ fontFamily: 'var(--font-sans)', color: 'var(--color-text)', opacity: 0.8 }}
              >
                Perdi o chão. Perdi a identidade. Vivi o que meus pacientes vivem: o esvaziamento de quem funciona por fora enquanto por dentro tudo se desfaz.
              </p>
            </FadeIn>

            {/* VIRADA */}
            <FadeIn delay={0.2}>
              <p
                className="text-base leading-relaxed font-light mb-6"
                style={{ fontFamily: 'var(--font-sans)', color: 'var(--color-text)', opacity: 0.8 }}
              >
                A virada não veio de uma técnica. Veio da minha própria análise. Descobri na Psicanálise Lacaniana que o valor real da fala é transformador: quando a verdade encontra espaço, a existência volta a ter fôlego.
              </p>
              <p
                className="text-base leading-relaxed font-light mb-10"
                style={{ fontFamily: 'var(--font-sans)', color: 'var(--color-text)', opacity: 0.8 }}
              >
                No CAPS, aprendi o que acontece quando o sofrimento real é tratado com respostas rasas. Defendi a ética do sujeito em ambiente de resistência institucional. E formei a musculatura clínica que me permite sustentar dores que a maioria dos profissionais não suporta.
              </p>
            </FadeIn>

            {/* HOJE */}
            <FadeIn delay={0.3}>
              <p
                className="text-base leading-relaxed font-light mb-10"
                style={{ fontFamily: 'var(--font-sans)', color: 'var(--color-text)', opacity: 0.8 }}
              >
                Hoje, no consultório, cada atendimento é singular. Não uso protocolos genéricos. Não aplico fórmulas. Cada sujeito é um percurso único, e meu trabalho é acompanhar esse percurso com o rigor e a presença que ele exige. Atendo online e presencialmente em Curitiba. Para quem decidiu que "ir levando" não é mais suficiente.
              </p>
            </FadeIn>

            {/* Credenciais */}
            <FadeIn delay={0.35}>
              <div
                className="flex flex-wrap gap-4 mb-10"
              >
                {['Psicóloga Clínica (CRP ativo)', 'Psicanálise Lacaniana', 'Experiência CAPS', 'Online e Presencial'].map((cred, i) => (
                  <span
                    key={i}
                    className="text-[10px] uppercase tracking-[0.2em] font-light px-4 py-2"
                    style={{
                      border: '1px solid rgba(42, 53, 64, 0.15)',
                      color: 'var(--color-text)',
                      opacity: 0.6,
                      fontFamily: 'var(--font-sans)',
                    }}
                  >
                    {cred}
                  </span>
                ))}
              </div>
            </FadeIn>

            {/* Blockquote */}
            <FadeIn delay={0.4}>
              <blockquote
                className="pl-6 my-10"
                style={{ borderLeft: '2px solid var(--color-accent)' }}
              >
                <p
                  className="text-lg md:text-xl leading-relaxed font-light italic"
                  style={{
                    fontFamily: 'var(--font-sub)',
                    color: 'var(--color-text)',
                    opacity: 0.8,
                  }}
                >
                  Meu trabalho não é dar respostas. É criar o espaço onde as perguntas certas podem finalmente aparecer.
                </p>
              </blockquote>
            </FadeIn>

            {/* Transição */}
            <FadeIn delay={0.45}>
              <p
                className="text-base font-light italic mt-8"
                style={{
                  fontFamily: 'var(--font-sub)',
                  color: 'var(--color-text)',
                  opacity: 0.6,
                }}
              >
                Se o que você leu até aqui faz sentido, entenda como funciona o processo na prática.
              </p>
              <div className="mt-8">
                <button
                  onClick={() => scrollToSection('how')}
                  className="btn-shimmer-light"
                >
                  Ver o processo
                </button>
              </div>
            </FadeIn>
          </div>

          {/* ── Coluna da Foto (aparece DEPOIS no mobile) ── */}
          <div className="w-full lg:w-2/5 order-2 lg:sticky lg:top-32">
            <FadeIn delay={0.3} direction="left">
              <div className="relative">
                {/* Photo Treatment A: Linha lateral */}
                <div
                  className="absolute left-0 top-8 bottom-8 w-[3px]"
                  style={{ backgroundColor: 'var(--color-accent)', opacity: 0.5 }}
                  aria-hidden="true"
                />

                <div
                  className="relative aspect-[3/4] overflow-hidden rounded-sm ml-4 max-w-[400px]"
                  style={{
                    boxShadow: '0 25px 50px -12px rgba(0,0,0,0.1)',
                  }}
                >
                  <img
                    src="/foto-ana-sobre.jpg"
                    alt="Ana Cristina Schneider — Psicóloga"
                    className="w-full h-full object-cover object-center"
                    style={{ filter: 'grayscale(10%) contrast(1.05) sepia(5%)' }}
                  />
                </div>
              </div>
            </FadeIn>
          </div>

        </div>
      </div>
    </section>
  )
}
