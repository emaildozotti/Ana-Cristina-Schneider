// DECISÃO CRIATIVA: Fundo bg-warm para respiro após PainPoints dark.
// Container 9:16 vertical maxWidth 300px para YouTube Shorts embed.
// Placeholder elegante enquanto o cliente não envia o vídeo.

import { FadeIn } from '../App'

const VIDEO_ID = '' // Aguardando vídeo do cliente — placeholder ativo

export default function VideoSection() {
  return (
    <section
      id="video"
      className="relative overflow-hidden section-padding"
      style={{ backgroundColor: 'var(--color-bg-warm)' }}
    >
      <div className="container-ultra">
        <div className="max-w-3xl mx-auto flex flex-col items-center text-center">

          {/* Pré-vídeo */}
          <FadeIn>
            <p
              className="eyebrow-ultra mb-8"
              style={{ color: 'var(--color-text)', opacity: 0.5 }}
            >
              Em primeira pessoa
            </p>
            <p
              className="text-lg md:text-xl leading-relaxed font-light mb-16"
              style={{
                fontFamily: 'var(--font-sub)',
                color: 'var(--color-text)',
                opacity: 0.85,
              }}
            >
              Antes de qualquer técnica, eu acredito que a mudança começa na voz. Neste vídeo, compartilho o que me levou a trabalhar com quem sofre em silêncio.
            </p>
          </FadeIn>

          {/* Container de vídeo 9:16 */}
          <FadeIn delay={0.2}>
            <div
              className="relative mx-auto overflow-hidden"
              style={{
                maxWidth: '300px',
                width: '100%',
                aspectRatio: '9/16',
                boxShadow: '0 25px 60px -12px rgba(26,46,61,0.25)',
                borderRadius: '2px',
              }}
            >
              {VIDEO_ID ? (
                <iframe
                  src={`https://www.youtube.com/embed/${VIDEO_ID}`}
                  title="Vídeo Ana Cristina Schneider"
                  className="absolute inset-0 w-full h-full"
                  allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture"
                  allowFullScreen
                />
              ) : (
                <div
                  className="absolute inset-0 flex flex-col items-center justify-center gap-8"
                  style={{ backgroundColor: 'var(--color-primary)' }}
                >
                  {/* Linha accent esquerda */}
                  <div
                    className="absolute left-0 top-12 bottom-12 w-[3px]"
                    style={{ backgroundColor: 'var(--color-accent)', opacity: 0.5 }}
                  />

                  <div className="text-center px-8">
                    {/* Ícone play */}
                    <div
                      className="w-16 h-16 flex items-center justify-center mx-auto mb-8"
                      style={{
                        border: '1px solid rgba(184, 150, 110, 0.35)',
                        borderRadius: '2px',
                      }}
                    >
                      <svg width="22" height="22" viewBox="0 0 24 24" fill="none">
                        <path d="M8 5v14l11-7L8 5z" fill="var(--color-accent)" opacity="0.8" />
                      </svg>
                    </div>

                    <p
                      className="font-display italic leading-snug mb-4"
                      style={{
                        fontSize: 'clamp(1.1rem, 3vw, 1.3rem)',
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
                  </div>
                </div>
              )}
            </div>
          </FadeIn>

          {/* Pós-vídeo */}
          <FadeIn delay={0.3}>
            <p
              className="text-base md:text-lg leading-relaxed font-light mt-16 max-w-xl"
              style={{
                fontFamily: 'var(--font-sub)',
                color: 'var(--color-text)',
                opacity: 0.7,
              }}
            >
              O que você acabou de ouvir não é teoria. É o que vivi e o que sustento no consultório todos os dias. A escuta que transforma não é passiva: ela vai ao encontro do que a fala tenta esconder.
            </p>
          </FadeIn>

        </div>
      </div>
    </section>
  )
}
