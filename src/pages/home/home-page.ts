import { html, LitElement } from 'lit';
import { customElement } from 'lit/decorators.js';

type ProjectKey = 'random-winner' | 'random-number';

const projects: Record<
  ProjectKey,
  {
    name: string;
    preview?: string;
    alt?: string;
    description: string;
  }
> = {
  'random-winner': {
    name: 'Random Winner',
    preview: '/images/RandomWinner.gif',
    alt: 'Preview animado del proyecto Random Winner',
    description: 'Preview del proyecto Random Winner.',
  },
  'random-number': {
    name: 'Random Number',
    description: 'Preview pendiente para Random Number.',
  },
};

@customElement('home-page')
export class HomePage extends LitElement {
  private selectedProject: ProjectKey = 'random-winner';

  protected createRenderRoot(): HTMLElement | DocumentFragment {
    return this;
  }

  private selectProject(project: ProjectKey) {
    this.selectedProject = project;
    this.requestUpdate();
  }

  private renderProjectLink(project: ProjectKey) {
    const currentProject = projects[project];
    const isSelected = this.selectedProject === project;

    return html`
      <li>
        <button
          class="project-link ${isSelected ? 'is-active' : ''}"
          type="button"
          aria-pressed="${isSelected}"
          @click="${() => this.selectProject(project)}"
        >
          ${currentProject.name}
        </button>
      </li>
    `;
  }

  private renderProjectPreview() {
    const project = projects[this.selectedProject];

    if (project.preview) {
      return html`
        <figure class="preview-frame">
          <img class="project-image" src="${project.preview}" alt="${project.alt}" />
          <figcaption>${project.description}</figcaption>
        </figure>
      `;
    }

    return html`
      <div class="empty-preview">
        <p>${project.description}</p>
      </div>
    `;
  }

  render() {
    return html`
      <main class="portfolio-page">
        <div class="portfolio-content">
          <header class="portfolio-header">
            <a class="logo" href="/" aria-label="Jaime Garfias">JG</a>

            <nav class="project-nav" aria-label="Proyectos">
              <h1>Proyectos</h1>
              <ul>
                ${this.renderProjectLink('random-winner')}
                ${this.renderProjectLink('random-number')}
              </ul>
            </nav>
          </header>

          <div class="main-layout">
            <section class="about-section" aria-labelledby="about-title">
              <div class="about-copy">
                <h2 id="about-title">Acerca de mi</h2>
                <p>
                  Desarrollo experiencias digitales con arquitecturas frontend modernas y despliegues
                  preparados para escalar con infraestructura en la nube.
                </p>

                <section class="skills-section" aria-labelledby="skills-title">
                  <h2 id="skills-title">Skills</h2>
                  <div class="skills-grid">
                    <div>
                      <strong>UX/UI</strong>
                      <ul>
                        <li>Figma</li>
                      </ul>

                      <strong>Coding</strong>
                      <ul>
                        <li>Javascript + HTML + CSS + Lit</li>
                        <li>Java + Spring Boot</li>
                      </ul>
                    </div>

                    <div>
                      <strong>Cloud</strong>
                      <ul>
                        <li>AWS [Cloud Front + S3 + IAM + ACM]</li>
                      </ul>

                      <strong>Deploy</strong>
                      <ul>
                        <li>Jenkins</li>
                        <li>Github Actions</li>
                      </ul>
                    </div>
                  </div>
                </section>

                <a class="contact-link" href="mailto:contacto@jaimegarfias.mx">Contacto</a>
              </div>
            </section>

            <section class="projects-section" aria-label="Preview del proyecto seleccionado">
              ${this.renderProjectPreview()}
            </section>
          </div>
        </div>
      </main>
    `;
  }
}
