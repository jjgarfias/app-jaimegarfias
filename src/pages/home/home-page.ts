import { html, LitElement } from 'lit';
import { customElement } from 'lit/decorators.js';

@customElement('home-page')
export class HomePage extends LitElement {
  protected createRenderRoot(): HTMLElement | DocumentFragment {
    return this;
  }

  render() {
    return html`
      <section class="mx-auto w-[min(1180px,calc(100%-32px))] pb-14 pt-5 max-[820px]:w-[min(100%-24px,680px)] max-[820px]:pt-3">
        <header class="flex min-h-14 items-center justify-between gap-6 max-[820px]:items-start" aria-label="Main navigation">
          <a
            class="flex h-11 w-11 items-center justify-center rounded-full border border-black/15 bg-[#202124] font-extrabold text-[#f7f5ef] no-underline"
            href="/"
            aria-label="Jaime Garfias home"
          >
            <span>JG</span>
          </a>

          <nav
            class="flex items-center gap-2 rounded-full border border-black/10 bg-white/70 p-1.5 backdrop-blur-xl max-[820px]:w-full max-[820px]:justify-between max-[480px]:gap-0.5 max-[480px]:p-1"
          >
            <a class="rounded-full px-3.5 py-2.5 text-[0.94rem] font-bold text-[#3d3f42] no-underline hover:bg-[#e6eee9] hover:text-[#174f42] max-[820px]:flex-1 max-[820px]:text-center max-[480px]:px-2 max-[480px]:text-[0.86rem]" href="#about">About</a>
            <a class="rounded-full px-3.5 py-2.5 text-[0.94rem] font-bold text-[#3d3f42] no-underline hover:bg-[#e6eee9] hover:text-[#174f42] max-[820px]:flex-1 max-[820px]:text-center max-[480px]:px-2 max-[480px]:text-[0.86rem]" href="#portfolio">Portfolio</a>
            <a class="rounded-full px-3.5 py-2.5 text-[0.94rem] font-bold text-[#3d3f42] no-underline hover:bg-[#e6eee9] hover:text-[#174f42] max-[820px]:flex-1 max-[820px]:text-center max-[480px]:px-2 max-[480px]:text-[0.86rem]" href="#projects">Projects</a>
          </nav>
        </header>

        <section
          class="grid min-h-[min(720px,calc(100vh-76px))] grid-cols-[minmax(0,0.95fr)_minmax(320px,1.05fr)] items-center gap-[clamp(28px,5vw,72px)] py-12 pb-[72px] max-[820px]:min-h-0 max-[820px]:grid-cols-1 max-[820px]:py-10 max-[820px]:pb-14"
          aria-labelledby="hero-title"
        >
          <div class="max-w-[620px]">
            <p class="m-0 text-xs font-extrabold uppercase text-[#1f6b59]">Software engineer - Cloud builder - Product thinker</p>
            <h1 class="my-4 text-[clamp(3.4rem,8vw,7rem)] font-extrabold leading-[0.9] text-[#151719] max-[820px]:text-[clamp(3rem,16vw,5.4rem)]" id="hero-title">Jaime Garfias</h1>
            <p class="m-0 max-w-[580px] text-[clamp(1.08rem,2vw,1.35rem)] leading-relaxed text-[#4b4f54]">
              Desarrollo experiencias digitales con Web Components, arquitecturas frontend modernas
              y despliegues preparados para escalar con infraestructura en la nube.
            </p>

            <div class="mt-8 flex flex-wrap gap-3 max-[480px]:flex-col" aria-label="Primary actions">
              <a class="inline-flex min-h-12 items-center justify-center rounded-full border border-transparent bg-[#202124] px-5 font-bold text-white no-underline max-[480px]:w-full" href="#projects">Ver proyectos</a>
              <a class="inline-flex min-h-12 items-center justify-center rounded-full border border-black/20 bg-white/70 px-5 font-bold text-[#202124] no-underline max-[480px]:w-full" href="#about">Conocer perfil</a>
            </div>
          </div>

          <figure class="m-0 overflow-hidden rounded-lg border border-black/10 bg-white shadow-[0_28px_80px_rgba(28,44,42,0.16)]">
            <img
              class="block aspect-4/3 w-full object-cover"
              src="/images/portfolio-hero.png"
              alt="Abstract digital workspace with interface panels and cloud infrastructure shapes"
            />
          </figure>
        </section>

        <section class="border-t border-black/10 py-[clamp(48px,7vw,88px)]" id="about" aria-labelledby="about-title">
          <div class="mb-7 grid grid-cols-[minmax(150px,0.32fr)_minmax(0,0.68fr)] items-start gap-7 max-[820px]:grid-cols-1">
            <p class="m-0 text-xs font-extrabold uppercase text-[#1f6b59]">About</p>
            <h2 class="m-0 text-[clamp(2rem,4vw,4rem)] font-extrabold leading-none text-[#151719]" id="about-title">Perfil enfocado en crear productos que se sienten claros, rapidos y confiables.</h2>
          </div>

          <div class="grid grid-cols-3 gap-4 max-[820px]:grid-cols-1">
            <article class="min-h-48 rounded-lg border border-black/10 bg-white/65 p-6">
              <span class="block text-2xl font-extrabold text-[#202124]">Frontend</span>
              <p class="leading-relaxed text-[#555a60]">Web Components, Lit, arquitectura modular y experiencias pensadas para mantenimiento real.</p>
            </article>
            <article class="min-h-48 rounded-lg border border-black/10 bg-white/65 p-6">
              <span class="block text-2xl font-extrabold text-[#202124]">Cloud</span>
              <p class="leading-relaxed text-[#555a60]">Despliegues estaticos, automatizacion y distribucion con S3, CloudFront y pipelines.</p>
            </article>
            <article class="min-h-48 rounded-lg border border-black/10 bg-white/65 p-6">
              <span class="block text-2xl font-extrabold text-[#202124]">Producto</span>
              <p class="leading-relaxed text-[#555a60]">Interfaces limpias, flujos directos y decisiones tecnicas alineadas al usuario final.</p>
            </article>
          </div>
        </section>

        <section class="border-t border-black/10 py-[clamp(48px,7vw,88px)]" id="portfolio" aria-labelledby="portfolio-title">
          <div class="mb-6 grid grid-cols-[minmax(150px,0.32fr)_minmax(0,0.68fr)] items-start gap-7 max-[820px]:grid-cols-1">
            <p class="m-0 text-xs font-extrabold uppercase text-[#1f6b59]">Portfolio</p>
            <h2 class="m-0 text-[clamp(2rem,4vw,4rem)] font-extrabold leading-none text-[#151719]" id="portfolio-title">Trabajo seleccionado</h2>
          </div>

          <div class="grid gap-4">
            <article class="grid grid-cols-[minmax(140px,0.22fr)_minmax(180px,0.28fr)_minmax(0,0.5fr)] items-center gap-6 rounded-lg border border-black/10 bg-white/65 p-6 max-[820px]:grid-cols-1">
              <p class="m-0 text-xs font-extrabold uppercase text-[#1f6b59]">Web platform</p>
              <h3 class="m-0 text-[1.35rem] font-extrabold text-[#202124]">Personal site core</h3>
              <p class="m-0 leading-relaxed text-[#555a60]">Base del sitio jaimegarfias.mx con rutas, componentes reutilizables y entrega optimizada.</p>
            </article>
            <article class="grid grid-cols-[minmax(140px,0.22fr)_minmax(180px,0.28fr)_minmax(0,0.5fr)] items-center gap-6 rounded-lg border border-black/10 bg-white/65 p-6 max-[820px]:grid-cols-1">
              <p class="m-0 text-xs font-extrabold uppercase text-[#1f6b59]">Architecture</p>
              <h3 class="m-0 text-[1.35rem] font-extrabold text-[#202124]">Open Cells + Lit</h3>
              <p class="m-0 leading-relaxed text-[#555a60]">Aplicacion SPA con carga diferida por pagina y shell preparado para crecer por dominios.</p>
            </article>
            <article class="grid grid-cols-[minmax(140px,0.22fr)_minmax(180px,0.28fr)_minmax(0,0.5fr)] items-center gap-6 rounded-lg border border-black/10 bg-white/65 p-6 max-[820px]:grid-cols-1">
              <p class="m-0 text-xs font-extrabold uppercase text-[#1f6b59]">Cloud delivery</p>
              <h3 class="m-0 text-[1.35rem] font-extrabold text-[#202124]">AWS static hosting</h3>
              <p class="m-0 leading-relaxed text-[#555a60]">Publicacion en infraestructura ligera con distribucion global y cacheo de assets.</p>
            </article>
          </div>
        </section>

        <section class="border-t border-black/10 py-[clamp(48px,7vw,88px)]" id="projects" aria-labelledby="projects-title">
          <div class="mb-6 grid grid-cols-[minmax(150px,0.32fr)_minmax(0,0.68fr)] items-start gap-7 max-[820px]:grid-cols-1">
            <p class="m-0 text-xs font-extrabold uppercase text-[#1f6b59]">Projects</p>
            <h2 class="m-0 text-[clamp(2rem,4vw,4rem)] font-extrabold leading-none text-[#151719]" id="projects-title">Laboratorio de ideas</h2>
          </div>

          <div class="grid grid-cols-[minmax(0,1.4fr)_minmax(260px,0.6fr)] gap-4 max-[820px]:grid-cols-1">
            <article class="flex min-h-64 flex-col justify-between rounded-lg border border-black/10 bg-linear-to-br from-[#1f6b59]/15 to-[#1f5ca8]/15 p-6">
              <div>
                <p class="m-0 text-xs font-extrabold uppercase text-[#1f6b59]">Interactive tool</p>
                <h3 class="m-0 mt-4 text-[1.35rem] font-extrabold text-[#202124]">Random Roulette</h3>
                <p class="leading-relaxed text-[#555a60]">
                  Una ruleta dinamica para elegir opciones, explorar decisiones rapidas y convertir
                  pequenos experimentos en experiencias pulidas.
                </p>
              </div>
              <a class="inline-flex w-fit max-w-full break-words font-extrabold text-[#174f42] no-underline" href="#projects" aria-label="Random Roulette project preview">/projects/random-roulette</a>
            </article>
            <article class="min-h-64 rounded-lg border border-black/10 bg-white/65 p-6">
              <p class="m-0 text-xs font-extrabold uppercase text-[#1f6b59]">Next</p>
              <h3 class="m-0 mt-4 text-[1.35rem] font-extrabold text-[#202124]">Project index</h3>
              <p class="leading-relaxed text-[#555a60]">Un espacio para documentar herramientas, prototipos y pruebas publicas.</p>
            </article>
          </div>
        </section>
      </section>
    `;
  }
}
