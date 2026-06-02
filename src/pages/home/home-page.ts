import { html, LitElement } from 'lit';
import { customElement } from 'lit/decorators.js';

@customElement('home-page')
export class HomePage extends LitElement {
  protected createRenderRoot(): HTMLElement | DocumentFragment {
    return this;
  }

  render() {
    return html`
      <main class="construction-page" aria-labelledby="construction-title">
        <div class="construction-nebula" aria-hidden="true"></div>

        <section class="construction-scene" aria-label="Portafolio en construccion">
          <div class="construction-stars" aria-hidden="true"></div>

          <svg class="construction-illustration" viewBox="0 0 900 506" role="img" aria-labelledby="space-title space-desc">
            <title id="space-title">Astronauta reparando una nave espacial</title>
            <desc id="space-desc">Un astronauta flota en el espacio mientras repara una nave espacial.</desc>

            <path
              class="cable"
              d="M385 350 C450 440, 560 400, 620 330"
              fill="none"
              stroke="rgba(180,240,255,0.55)"
              stroke-width="4"
              stroke-linecap="round"
            />

            <g class="rocket-group rocket-glow">
              <g class="thruster">
                <path
                  d="M715 314 C770 322, 795 350, 718 365 C738 347, 738 332, 715 314Z"
                  fill="url(#fireGradient)"
                  opacity="0.9"
                />
                <path
                  d="M712 326 C750 333, 760 348, 713 356 C725 342, 724 336, 712 326Z"
                  fill="#fff3b0"
                  opacity="0.9"
                />
              </g>

              <path
                d="M455 275 C505 170, 650 115, 730 130 C720 215, 660 325, 535 360 C500 335, 475 305, 455 275Z"
                fill="#e9eef7"
              />
              <path
                d="M455 275 C505 170, 650 115, 730 130 C710 185, 650 250, 535 360 C500 335, 475 305, 455 275Z"
                fill="rgba(120,160,190,0.25)"
              />

              <circle cx="620" cy="218" r="38" fill="#18233a" />
              <circle cx="610" cy="205" r="14" fill="rgba(255,255,255,0.85)" />

              <path d="M520 250 C470 220, 430 220, 390 252 C430 245, 470 265, 500 294Z" fill="#ccd6e4" />
              <path d="M560 342 C555 390, 585 420, 635 432 C620 395, 627 360, 655 318Z" fill="#ccd6e4" />

              <g transform="translate(505 304)">
                <circle class="damage-light" cx="0" cy="0" r="15" fill="#ff2d55" opacity="0.65" />
                <path d="M-20 -8 L-6 -3 L-16 7 L0 3 L10 15 L13 0 L25 -6 L8 -8 L2 -22 L-7 -9Z" fill="#12131c" opacity="0.72" />
              </g>

              <path
                d="M535 175 C555 235, 585 285, 655 315"
                fill="none"
                stroke="rgba(20,30,45,0.22)"
                stroke-width="5"
                stroke-linecap="round"
              />
              <path
                d="M493 285 C545 297, 595 290, 657 254"
                fill="none"
                stroke="rgba(20,30,45,0.18)"
                stroke-width="4"
                stroke-linecap="round"
              />
            </g>

            <g class="astronaut-group helmet-glow">
              <rect x="307" y="265" width="50" height="78" rx="14" fill="#7c8798" />
              <rect x="315" y="278" width="16" height="38" rx="6" fill="#505a68" />

              <g class="leg-left">
                <path d="M340 354 C325 384, 314 410, 295 432" fill="none" stroke="#dce7f7" stroke-width="21" stroke-linecap="round" />
                <rect x="273" y="422" width="45" height="20" rx="8" fill="#9ba8ba" transform="rotate(-25 296 432)" />
              </g>

              <g class="leg-right">
                <path d="M374 354 C392 382, 408 406, 430 426" fill="none" stroke="#dce7f7" stroke-width="21" stroke-linecap="round" />
                <rect x="413" y="416" width="45" height="20" rx="8" fill="#9ba8ba" transform="rotate(28 435 426)" />
              </g>

              <rect x="322" y="258" width="70" height="105" rx="28" fill="#eef5ff" />
              <rect x="338" y="285" width="38" height="45" rx="12" fill="#adb9cc" />
              <circle cx="350" cy="306" r="4" fill="#4ade80" />
              <circle cx="365" cy="306" r="4" fill="#facc15" />

              <circle cx="358" cy="216" r="48" fill="#eef5ff" />
              <circle cx="358" cy="216" r="34" fill="#172033" />
              <path d="M333 205 C350 185, 383 188, 393 213 C373 205, 351 207, 333 226Z" fill="rgba(155,230,255,0.58)" />

              <path d="M328 278 C290 285, 270 310, 255 337" fill="none" stroke="#dce7f7" stroke-width="18" stroke-linecap="round" />
              <circle cx="254" cy="337" r="12" fill="#9ba8ba" />

              <g class="arm-tool">
                <path d="M386 280 C415 276, 438 288, 463 307" fill="none" stroke="#dce7f7" stroke-width="18" stroke-linecap="round" />
                <circle cx="465" cy="308" r="11" fill="#9ba8ba" />
                <rect x="462" y="300" width="58" height="13" rx="5" fill="#2a3142" transform="rotate(18 462 300)" />
                <rect x="506" y="310" width="28" height="8" rx="4" fill="#a8f5ff" transform="rotate(18 506 310)" />
              </g>
            </g>

            <g>
              <circle class="spark s1" style="--x: 42px; --y: -28px;" cx="512" cy="311" r="4" fill="#fff3a3" />
              <circle class="spark s2" style="--x: 38px; --y: 25px;" cx="512" cy="311" r="3" fill="#ffdd55" />
              <circle class="spark s3" style="--x: -30px; --y: -35px;" cx="512" cy="311" r="3.5" fill="#ffffff" />
              <circle class="spark s4" style="--x: -36px; --y: 26px;" cx="512" cy="311" r="3" fill="#ff7a18" />
              <circle class="spark s5" style="--x: 8px; --y: -52px;" cx="512" cy="311" r="2.8" fill="#fff6cc" />
            </g>

            <defs>
              <linearGradient id="fireGradient" x1="715" y1="340" x2="790" y2="340" gradientUnits="userSpaceOnUse">
                <stop offset="0%" stop-color="#fff3a3" />
                <stop offset="35%" stop-color="#ff9f1c" />
                <stop offset="100%" stop-color="#ff2d55" />
              </linearGradient>
            </defs>
          </svg>

          <p class="construction-caption" id="construction-title">En construcción</p>
        </section>
      </main>
    `;
  }
}
