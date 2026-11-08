"use client";

import { useState, useRef, type MouseEvent } from "react";

/**
 * Spider-Man inspired homepage (original artwork, no official logos).
 */

type Web = {
  id: number;
  x: number;
  y: number;
  w: number;
  h: number;
};

const powers = [
  {
    title: "Wall-crawling",
    text: "Cling to any surface, from glass towers to brick fire escapes.",
    tilt: "-1.5deg",
  },
  {
    title: "Spider-sense",
    text: "A tingle at the back of your skull, one second before trouble.",
    tilt: "1deg",
  },
  {
    title: "Web-slinging",
    text: "Swing across the city on lines you built yourself.",
    tilt: "-0.5deg",
  },
  {
    title: "Quick quips",
    text: "Banter that keeps everyone off balance, including you.",
    tilt: "1.5deg",
  },
];

const css = `
@import url('https://fonts.googleapis.com/css2?family=Bangers&family=Barlow:wght@400;600&display=swap');

.sp {
  --red: #d8232a;
  --blue: #14246b;
  --night: #0a1240;
  --web: #f4f5fb;
  --caption: #ffd23f;
  font-family: 'Barlow', system-ui, sans-serif;
  color: var(--web);
  background: var(--night);
  line-height: 1.55;
}

.sp *, .sp *::before, .sp *::after {
  box-sizing: border-box;
}

.sp h1, .sp h2, .sp h3 {
  font-family: 'Bangers', Impact, sans-serif;
  font-weight: 400;
  letter-spacing: 0.03em;
  line-height: 1;
  margin: 0;
}

.sp-nav {
  display: flex;
  justify-content: space-between;
  align-items: center;
  padding: 18px clamp(16px, 5vw, 56px);
  background: var(--red);
  border-bottom: 4px solid var(--night);
  position: relative;
  z-index: 3;
}

.sp-nav strong {
  font-family: 'Bangers', Impact, sans-serif;
  font-size: 1.7rem;
  letter-spacing: 0.05em;
  font-weight: 400;
}

.sp-nav ul {
  display: flex;
  gap: clamp(12px, 3vw, 32px);
  list-style: none;
  margin: 0;
  padding: 0;
}

.sp-nav a {
  color: var(--web);
  text-decoration: none;
  font-weight: 600;
}

.sp-nav a:hover {
  text-decoration: underline;
  text-underline-offset: 4px;
}

.sp a:focus-visible,
.sp button:focus-visible,
.sp input:focus-visible {
  outline: 3px solid var(--caption);
  outline-offset: 3px;
}

.sp-hero {
  position: relative;
  min-height: 86vh;
  overflow: hidden;
  display: grid;
  align-content: center;
  padding: clamp(32px, 8vw, 96px) clamp(16px, 5vw, 56px);
  cursor: crosshair;
  background:
    radial-gradient(circle at 1px 1px, rgba(255,255,255,.12) 1.5px, transparent 1.6px) 0 0 / 14px 14px,
    linear-gradient(180deg, var(--blue) 0%, var(--night) 100%);
}

.sp-skyline {
  position: absolute;
  inset: auto 0 0 0;
  height: 34%;
  background: #050a26;
  clip-path: polygon(
    0 100%, 0 55%, 6% 55%, 6% 30%, 12% 30%,
    12% 62%, 20% 62%, 20% 20%, 27% 20%, 27% 48%,
    35% 48%, 35% 36%, 43% 36%, 43% 66%, 52% 66%,
    52% 14%, 59% 14%, 59% 52%, 68% 52%, 68% 30%,
    76% 30%, 76% 60%, 85% 60%, 85% 24%, 92% 24%,
    92% 50%, 100% 50%, 100% 100%
  );
}

.sp-webcorner {
  position: absolute;
  top: 0;
  right: 0;
  width: min(46vw, 420px);
  opacity: .5;
  pointer-events: none;
}

.sp-hero-copy {
  position: relative;
  z-index: 2;
  max-width: 760px;
  pointer-events: none;
}

.sp-hero h1 {
  font-size: clamp(3.4rem, 11vw, 8rem);
  text-shadow: 5px 5px 0 var(--red);
}

.sp-caption {
  display: inline-block;
  background: var(--caption);
  color: #1b1300;
  padding: 8px 14px;
  margin-top: 28px;
  border: 3px solid #1b1300;
  box-shadow: 5px 5px 0 #1b1300;
  font-weight: 600;
  max-width: 34ch;
  transform: rotate(-1deg);
}

.sp-actions {
  display: flex;
  flex-wrap: wrap;
  gap: 14px;
  margin-top: 32px;
  pointer-events: auto;
}

.sp-btn {
  font-family: 'Bangers', Impact, sans-serif;
  letter-spacing: .05em;
  font-size: 1.35rem;
  padding: 12px 26px;
  border: 3px solid var(--web);
  background: var(--red);
  color: var(--web);
  cursor: pointer;
  text-decoration: none;
  display: inline-block;
  transition: transform .12s, box-shadow .12s;
  box-shadow: 4px 4px 0 var(--web);
}

.sp-btn:hover {
  transform: translate(-2px, -2px);
  box-shadow: 7px 7px 0 var(--web);
}

.sp-btn.ghost {
  background: transparent;
}

.sp-hint {
  position: absolute;
  left: clamp(16px, 5vw, 56px);
  bottom: 14px;
  z-index: 2;
  font-size: .95rem;
  opacity: .8;
}

.sp-svg {
  position: absolute;
  inset: 0;
  width: 100%;
  height: 100%;
  pointer-events: none;
  z-index: 1;
}

.sp-line {
  stroke: var(--web);
  stroke-width: 2.5;
  fill: none;
  stroke-linecap: round;
  stroke-dasharray: var(--len);
  stroke-dashoffset: var(--len);
  animation: thwip .35s ease-out forwards, fade 1.6s .9s forwards;
}

@keyframes thwip {
  to { stroke-dashoffset: 0; }
}

@keyframes fade {
  to { opacity: 0; }
}

.sp-section {
  padding: clamp(48px, 8vw, 96px) clamp(16px, 5vw, 56px);
}

.sp-section h2 {
  font-size: clamp(2.4rem, 6vw, 4rem);
  margin-bottom: 36px;
}

.sp-panels {
  display: grid;
  grid-template-columns: repeat(auto-fit, minmax(240px, 1fr));
  gap: 28px;
  max-width: 1100px;
}

.sp-panel {
  background: var(--web);
  color: var(--night);
  padding: 22px;
  border: 4px solid #000;
  box-shadow: 8px 8px 0 var(--red);
  transform: rotate(var(--tilt));
}

.sp-panel h3 {
  font-size: 1.9rem;
  color: var(--red);
  margin-bottom: 10px;
}

.sp-panel p {
  margin: 0;
  max-width: 32ch;
}

.sp-suit {
  background: var(--red);
  color: var(--web);
  border-top: 6px solid #000;
  border-bottom: 6px solid #000;
}

.sp-suit form {
  display: flex;
  flex-wrap: wrap;
  gap: 12px;
  max-width: 560px;
}

.sp-suit input {
  flex: 1 1 220px;
  padding: 13px 14px;
  font: inherit;
  border: 3px solid #000;
  background: var(--web);
  color: var(--night);
}

.sp-suit .sp-btn {
  background: var(--night);
  box-shadow: 4px 4px 0 #000;
  border-color: #000;
}

.sp-suit p {
  max-width: 52ch;
  margin: 0 0 24px;
}

.sp footer {
  padding: 28px clamp(16px, 5vw, 56px);
  font-size: .9rem;
  opacity: .75;
}

@media (prefers-reduced-motion: reduce) {
  .sp-line {
    animation: none;
    stroke-dashoffset: 0;
    opacity: .8;
  }

  .sp-btn {
    transition: none;
  }
}
`;

export default function Homepage() {
  const [webs, setWebs] = useState<Web[]>([]);
  const [email, setEmail] = useState("");
  const [joined, setJoined] = useState(false);

  const heroRef = useRef<HTMLElement>(null);
  const nextId = useRef(0);

  function shoot(e: MouseEvent<HTMLElement>) {
    const rect = heroRef.current?.getBoundingClientRect();

    if (!rect) return;

    const id = nextId.current++;

    const web: Web = {
      id,
      x: e.clientX - rect.left,
      y: e.clientY - rect.top,
      w: rect.width,
      h: rect.height,
    };

    setWebs((prev) => [...prev.slice(-5), web]);

    window.setTimeout(() => {
      setWebs((prev) => prev.filter((w) => w.id !== id));
    }, 2600);
  }

  return (
    <div className="sp">
      <style>{css}</style>

      <nav className="sp-nav" aria-label="Main">
        <strong>Web &amp; Wall</strong>

        <ul>
          <li>
            <a href="#powers">Powers</a>
          </li>
          <li>
            <a href="#suit-up">Suit up</a>
          </li>
        </ul>
      </nav>

      <header
        className="sp-hero"
        ref={heroRef}
        onClick={shoot}
      >
        <svg
          className="sp-webcorner"
          viewBox="0 0 200 200"
          fill="none"
          stroke="#f4f5fb"
          strokeWidth="1.2"
          aria-hidden="true"
        >
          {[0, 18, 36, 54, 72, 90].map((a) => (
            <line
              key={a}
              x1="200"
              y1="0"
              x2={200 - 200 * Math.cos((a * Math.PI) / 180)}
              y2={200 * Math.sin((a * Math.PI) / 180)}
            />
          ))}

          {[40, 80, 120, 160, 200].map((r) => (
            <path
              key={r}
              d={`M ${200 - r} 0 ${[18, 36, 54, 72, 90]
                .map(
                  (a) =>
                    `Q ${200 - r * 0.9 * Math.cos(((a - 9) * Math.PI) / 180)} ${
                      r * 0.9 * Math.sin(((a - 9) * Math.PI) / 180)
                    } ${200 - r * Math.cos((a * Math.PI) / 180)} ${
                      r * Math.sin((a * Math.PI) / 180)
                    }`
                )
                .join(" ")}`}
            />
          ))}
        </svg>

        <div className="sp-skyline" aria-hidden="true" />

        <svg
          className="sp-svg"
          viewBox={`0 0 ${heroRef.current?.clientWidth ?? 1000} ${
            heroRef.current?.clientHeight ?? 700
          }`}
          aria-hidden="true"
        >
          {webs.map((w) => {
            const sx = 24;
            const sy = w.h - 24;

            const len = Math.ceil(
              Math.hypot(w.x - sx, w.y - sy) * 1.1
            );

            return (
              <path
                key={w.id}
                className="sp-line"
                style={{ ["--len" as string]: len }}
                d={`M ${sx} ${sy} Q ${(sx + w.x) / 2} ${
                  Math.min(sy, w.y) - 60
                } ${w.x} ${w.y}`}
              />
            );
          })}
        </svg>

        <div className="sp-hero-copy">
          <h1>Your friendly neighborhood hero</h1>

          <p className="sp-caption">
            Rent is due, the bridge is stuck, and somebody needs a rescue by
            3 p.m.
          </p>

          <div className="sp-actions">
            <a
              className="sp-btn"
              href="#suit-up"
              onClick={(e) => e.stopPropagation()}
            >
              Join the swing
            </a>

            <a
              className="sp-btn ghost"
              href="#powers"
              onClick={(e) => e.stopPropagation()}
            >
              See the powers
            </a>
          </div>
        </div>

        <p className="sp-hint">
          Click anywhere to shoot a web.
        </p>
      </header>

      <section className="sp-section" id="powers">
        <h2>What you can do</h2>

        <div className="sp-panels">
          {powers.map((p) => (
            <article
              className="sp-panel"
              key={p.title}
              style={{ ["--tilt" as string]: p.tilt }}
            >
              <h3>{p.title}</h3>
              <p>{p.text}</p>
            </article>
          ))}
        </div>
      </section>

      <section className="sp-section sp-suit" id="suit-up">
        <h2>Suit up</h2>

        <p>
          Get one email a week with new routes, city stories, and swing-day
          meetups.
        </p>

        {joined ? (
          <p role="status">
            <strong>
              You're in. Check your inbox for a welcome message.
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

            <button className="sp-btn" type="submit">
              Join
            </button>
          </form>
        )}
      </section>

      <footer>
        An unofficial fan-style homepage with original artwork. Not
        affiliated with Marvel or Sony.
      </footer>
    </div>
  );
}