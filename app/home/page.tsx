
"use client";

import { useState, useRef, type MouseEvent } from "react";

/**
 * Pokémon-inspired homepage with original styling and interactive effects.
 */

type Burst = {
  id: number;
  x: number;
  y: number;
};

const abilities = [
  {
    title: "Curiosity",
    text: "Always exploring new ideas, technologies, and opportunities to learn.",
    tilt: "-1.5deg",
    type: "electric",
  },
  {
    title: "Problem-solving",
    text: "Taking on challenges, finding solutions, and learning from mistakes.",
    tilt: "1deg",
    type: "water",
  },
  {
    title: "Creativity",
    text: "Turning ideas into projects through experimentation and imagination.",
    tilt: "-0.5deg",
    type: "grass",
  },
  {
    title: "Continuous Growth",
    text: "Improving every day, gaining experience, and unlocking new skills.",
    tilt: "1.5deg",
    type: "fire",
  },
];

const css = `
@import url('https://fonts.googleapis.com/css2?family=Press+Start+2P&family=Nunito:wght@400;600;700;800;900&display=swap');

.pk {
  --red: #e53935;
  --yellow: #ffcb05;
  --blue: #3b82c4;
  --green: #65a85b;
  --cream: #fffdf5;
  --dark: #202020;
  --muted: #686868;

  font-family: 'Nunito', system-ui, sans-serif;
  color: var(--dark);
  background: var(--cream);
  line-height: 1.6;
  overflow: hidden;
}

.pk *, .pk *::before, .pk *::after {
  box-sizing: border-box;
}

.pk h1, .pk h2, .pk h3 {
  font-weight: 900;
  line-height: 1.2;
  margin: 0;
}

.pk-nav {
  display: flex;
  justify-content: space-between;
  align-items: center;
  gap: 20px;
  padding: 18px clamp(16px, 5vw, 56px);
  background: var(--red);
  color: white;
  border-bottom: 4px solid var(--dark);
  position: relative;
  z-index: 3;
}

.pk-brand {
  display: flex;
  align-items: center;
  gap: 12px;
}

.pk-logo {
  width: 34px;
  height: 34px;
  border: 3px solid var(--dark);
  border-radius: 50%;
  background: linear-gradient(
    to bottom,
    white 0%,
    white 44%,
    var(--dark) 44%,
    var(--dark) 56%,
    var(--red) 56%,
    var(--red) 100%
  );
  position: relative;
  flex-shrink: 0;
}

.pk-logo::after {
  content: '';
  position: absolute;
  width: 11px;
  height: 11px;
  border: 3px solid var(--dark);
  border-radius: 50%;
  background: white;
  top: 8px;
  left: 8px;
}

.pk-nav strong {
  font-family: 'Press Start 2P', monospace;
  font-size: .8rem;
  line-height: 1.6;
}

.pk-nav ul {
  display: flex;
  gap: clamp(12px, 3vw, 32px);
  list-style: none;
  margin: 0;
  padding: 0;
}

.pk-nav a {
  color: white;
  text-decoration: none;
  font-size: .9rem;
  font-weight: 900;
}

.pk-nav a:hover {
  color: var(--yellow);
}

.pk a:focus-visible,
.pk button:focus-visible,
.pk input:focus-visible {
  outline: 3px solid var(--yellow);
  outline-offset: 4px;
}

.pk-hero {
  position: relative;
  min-height: 86vh;
  overflow: hidden;
  display: grid;
  align-content: center;
  padding: clamp(40px, 8vw, 96px) clamp(16px, 5vw, 56px);
  cursor: crosshair;
  background:
    radial-gradient(circle, rgba(229,57,53,.10) 2px, transparent 2.5px) 0 0 / 25px 25px,
    linear-gradient(135deg, #fffdf5 0%, #fff5cc 55%, #ffe5d8 100%);
}

.pk-hero::before {
  content: '';
  position: absolute;
  width: 520px;
  height: 520px;
  border: 35px solid rgba(229,57,53,.08);
  border-radius: 50%;
  right: -150px;
  top: -130px;
}

.pk-hero::after {
  content: '';
  position: absolute;
  width: 300px;
  height: 300px;
  border: 25px solid rgba(255,203,5,.15);
  border-radius: 50%;
  right: 10%;
  bottom: -180px;
}

.pk-pokeball {
  position: absolute;
  right: clamp(25px, 10vw, 150px);
  top: 50%;
  transform: translateY(-50%) rotate(-18deg);
  width: clamp(150px, 25vw, 330px);
  aspect-ratio: 1;
  border: 12px solid var(--dark);
  border-radius: 50%;
  background: linear-gradient(
    to bottom,
    var(--red) 0%,
    var(--red) 46%,
    var(--dark) 46%,
    var(--dark) 54%,
    white 54%,
    white 100%
  );
  box-shadow: 12px 14px 0 rgba(32,32,32,.13);
  opacity: .16;
  pointer-events: none;
}

.pk-pokeball::after {
  content: '';
  position: absolute;
  width: 28%;
  aspect-ratio: 1;
  border: 10px solid var(--dark);
  border-radius: 50%;
  background: white;
  top: 36%;
  left: 36%;
}

.pk-hero-copy {
  position: relative;
  z-index: 2;
  max-width: 760px;
  pointer-events: none;
}

.pk-label {
  display: inline-block;
  font-family: 'Press Start 2P', monospace;
  font-size: clamp(8px, 1.2vw, 11px);
  line-height: 2;
  color: var(--red);
  margin-bottom: 22px;
}

.pk-hero h1 {
  max-width: 750px;
  font-size: clamp(2.7rem, 8vw, 6.5rem);
  color: var(--dark);
  text-shadow: 4px 4px 0 var(--yellow);
}

.pk-caption {
  display: inline-block;
  background: white;
  color: var(--dark);
  padding: 12px 16px;
  margin-top: 28px;
  border: 3px solid var(--dark);
  box-shadow: 5px 5px 0 var(--dark);
  font-weight: 800;
  max-width: 42ch;
  transform: rotate(-1deg);
}

.pk-actions {
  display: flex;
  flex-wrap: wrap;
  gap: 14px;
  margin-top: 32px;
  pointer-events: auto;
}

.pk-btn {
  font-family: 'Press Start 2P', monospace;
  font-size: .7rem;
  line-height: 1.8;
  padding: 13px 20px;
  border: 3px solid var(--dark);
  background: var(--red);
  color: white;
  cursor: pointer;
  text-decoration: none;
  display: inline-block;
  transition: transform .15s, box-shadow .15s;
  box-shadow: 4px 4px 0 var(--dark);
}

.pk-btn:hover {
  transform: translate(-2px, -2px);
  box-shadow: 7px 7px 0 var(--dark);
}

.pk-btn.ghost {
  background: white;
  color: var(--dark);
}

.pk-hint {
  position: absolute;
  left: clamp(16px, 5vw, 56px);
  bottom: 18px;
  z-index: 2;
  font-size: .85rem;
  font-weight: 800;
  color: var(--muted);
}

.pk-bursts {
  position: absolute;
  inset: 0;
  width: 100%;
  height: 100%;
  pointer-events: none;
  z-index: 1;
}

.pk-burst {
  transform-box: fill-box;
  transform-origin: center;
  animation: pokemonBurst .8s ease-out forwards;
}

.pk-burst circle {
  fill: var(--yellow);
  stroke: var(--dark);
  stroke-width: 3;
}

.pk-burst path {
  stroke: var(--red);
  stroke-width: 4;
  stroke-linecap: round;
  fill: none;
}

@keyframes pokemonBurst {
  0% {
    opacity: 1;
    transform: scale(.2) rotate(0deg);
  }
  100% {
    opacity: 0;
    transform: scale(1.8) rotate(90deg);
  }
}

.pk-section {
  padding: clamp(48px, 8vw, 96px) clamp(16px, 5vw, 56px);
}

.pk-section h2 {
  font-size: clamp(2rem, 5vw, 3.5rem);
  margin-bottom: 14px;
}

.pk-section-intro {
  color: var(--muted);
  margin: 0 0 36px;
  max-width: 55ch;
}

.pk-panels {
  display: grid;
  grid-template-columns: repeat(auto-fit, minmax(220px, 1fr));
  gap: 28px;
  max-width: 1100px;
}

.pk-panel {
  background: white;
  color: var(--dark);
  padding: 24px;
  border: 3px solid var(--dark);
  box-shadow: 7px 7px 0 var(--yellow);
  transform: rotate(var(--tilt));
  transition: transform .2s, box-shadow .2s;
}

.pk-panel:hover {
  transform: translateY(-5px) rotate(0deg);
  box-shadow: 10px 10px 0 var(--red);
}

.pk-panel h3 {
  font-size: 1.4rem;
  margin-bottom: 12px;
}

.pk-panel p {
  margin: 0;
  color: var(--muted);
  font-size: .95rem;
}

.pk-type {
  display: inline-block;
  padding: 5px 10px;
  margin-bottom: 16px;
  border: 2px solid var(--dark);
  border-radius: 5px;
  font-family: 'Press Start 2P', monospace;
  font-size: 8px;
}

.pk-type.electric {
  background: var(--yellow);
}

.pk-type.water {
  background: #a9d7f5;
}

.pk-type.grass {
  background: #b9dfa9;
}

.pk-type.fire {
  background: #ffc49d;
}

.pk-adventure {
  background: var(--red);
  color: white;
  border-top: 6px solid var(--dark);
  border-bottom: 6px solid var(--dark);
}

.pk-adventure h2 {
  text-shadow: 3px 3px 0 var(--dark);
}

.pk-adventure form {
  display: flex;
  flex-wrap: wrap;
  gap: 12px;
  max-width: 560px;
}

.pk-adventure input {
  flex: 1 1 220px;
  padding: 13px 14px;
  font: inherit;
  font-weight: 700;
  border: 3px solid var(--dark);
  background: white;
  color: var(--dark);
}

.pk-adventure .pk-btn {
  background: var(--yellow);
  color: var(--dark);
  box-shadow: 4px 4px 0 var(--dark);
}

.pk-adventure p {
  max-width: 52ch;
  margin: 0 0 24px;
}

.pk footer {
  padding: 28px clamp(16px, 5vw, 56px);
  font-size: .85rem;
  font-weight: 700;
  color: var(--muted);
  text-align: center;
  border-top: 2px solid #e8dcae;
}

@media (max-width: 600px) {
  .pk-nav {
    align-items: flex-start;
    flex-direction: column;
  }

  .pk-nav ul {
    gap: 20px;
  }

  .pk-hero {
    min-height: 80vh;
  }

  .pk-pokeball {
    right: -70px;
    top: 18%;
    transform: none;
  }

  .pk-hero h1 {
    font-size: clamp(2.5rem, 12vw, 4rem);
  }

  .pk-hint {
    font-size: .75rem;
  }
}

@media (prefers-reduced-motion: reduce) {
  .pk-burst {
    animation: none;
    opacity: 0;
  }

  .pk-btn,
  .pk-panel {
    transition: none;
  }
}
`;

export default function Homepage() {
  const [bursts, setBursts] = useState<Burst[]>([]);
  const [email, setEmail] = useState("");
  const [joined, setJoined] = useState(false);

  const heroRef = useRef<HTMLElement>(null);
  const nextId = useRef(0);

  function releaseEnergy(e: MouseEvent<HTMLElement>) {
    const rect = heroRef.current?.getBoundingClientRect();

    if (!rect) return;

    const id = nextId.current++;

    const burst: Burst = {
      id,
      x: e.clientX - rect.left,
      y: e.clientY - rect.top,
    };

    setBursts((prev) => [...prev.slice(-5), burst]);

    window.setTimeout(() => {
      setBursts((prev) => prev.filter((item) => item.id !== id));
    }, 900);
  }

  return (
    <div className="pk">
      <style>{css}</style>

      {/* NAVIGATION */}

      <nav className="pk-nav" aria-label="Main">

        <div className="pk-brand">
          <div className="pk-logo" aria-hidden="true" />
          <strong>POKÉMON TRAINER</strong>
        </div>

        <ul>
          <li>
            <a href="#trainer-skills">Trainer Skills</a>
          </li>
          <li>
            <a href="#join-adventure">Adventure</a>
          </li>
        </ul>

      </nav>

      {/* HERO SECTION */}

      <header
        className="pk-hero"
        ref={heroRef}
        onClick={releaseEnergy}
      >

        <div className="pk-pokeball" aria-hidden="true" />

        <svg
          className="pk-bursts"
          viewBox={`0 0 ${heroRef.current?.clientWidth ?? 1000} ${
            heroRef.current?.clientHeight ?? 700
          }`}
          preserveAspectRatio="none"
          aria-hidden="true"
        >
          {bursts.map((burst) => (
            <g
              key={burst.id}
              className="pk-burst"
              transform={`translate(${burst.x} ${burst.y})`}
            >
              <circle r="13" />

              <path d="M 0 -35 V -22 M 0 22 V 35 M -35 0 H -22 M 22 0 H 35 M -25 -25 L -16 -16 M 16 16 L 25 25 M 25 -25 L 16 -16 M -16 16 L -25 25" />

            </g>
          ))}
        </svg>

        <div className="pk-hero-copy">

          <p className="pk-label">
            WELCOME, TRAINER!
          </p>

          <h1>
            YOUR NEXT ADVENTURE STARTS HERE.
          </h1>

          <p className="pk-caption">
            Every great trainer starts somewhere. Explore my journey,
            discover my skills, and see what I'm learning along the way.
          </p>

          <div className="pk-actions">

            <a
              className="pk-btn"
              href="#trainer-skills"
              onClick={(e) => e.stopPropagation()}
            >
              EXPLORE
            </a>

            <a
              className="pk-btn ghost"
              href="#join-adventure"
              onClick={(e) => e.stopPropagation()}
            >
              GET IN TOUCH
            </a>

          </div>

        </div>

        <p className="pk-hint">
          Click anywhere to discover a little Pokémon energy!
        </p>

      </header>

      {/* TRAINER SKILLS */}

      <section className="pk-section" id="trainer-skills">

        <p className="pk-label">
          TRAINER PROFILE
        </p>

        <h2>
          WHAT'S IN MY TOOLKIT?
        </h2>

        <p className="pk-section-intro">
          Skills and qualities that help me grow as a student,
          developer, and aspiring IT professional.
        </p>

        <div className="pk-panels">

          {abilities.map((ability) => (
            <article
              className="pk-panel"
              key={ability.title}
              style={{ ["--tilt" as string]: ability.tilt }}
            >

              <span className={`pk-type ${ability.type}`}>
                {ability.type.toUpperCase()}
              </span>

              <h3>{ability.title}</h3>

              <p>{ability.text}</p>

            </article>
          ))}

        </div>

      </section>

      {/* JOIN THE ADVENTURE */}

      <section className="pk-section pk-adventure" id="join-adventure">

        <p className="pk-label" style={{ color: "white" }}>
          YOUR JOURNEY CONTINUES
        </p>

        <h2>
          JOIN THE ADVENTURE
        </h2>

        <p>
          Have a project idea or want to connect? Leave your email
          and let's start a new adventure.
        </p>

        {joined ? (
          <p role="status">
            <strong>
              Thanks for joining the adventure!
            </strong>
          </p>
        ) : (
          <form
            onSubmit={(e) => {
              e.preventDefault();

              if (email.includes("@")) {
                setJoined(true);
              }
            }}
          >

            <input
              type="email"
              required
              placeholder="you@email.com"
              aria-label="Email address"
              value={email}
              onChange={(e) => setEmail(e.target.value)}
            />

            <button className="pk-btn" type="submit">
              LET'S GO!
            </button>

          </form>
        )}

      </section>

      {/* FOOTER */}

      <footer>
        Pokémon-inspired personal portfolio design. Pokémon and related
        characters are trademarks of their respective owners.
      </footer>

    </div>
  );
}
