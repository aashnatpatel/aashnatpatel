import { useState, useEffect, useRef } from 'react'
import sbhaScreenshot from './assets/sbha-screenshot.png'
import headshot from './assets/headshot.jpeg'
import ciscoLogo from './assets/cisco_logo.png'
import avasantLogo from './assets/avasant_logo.png'
import winefindLogo from './assets/winefind_logo.png'
import resume from './assets/resume.pdf'

function useInView(options = {}) {
  const ref = useRef(null)
  const [inView, setInView] = useState(false)
  useEffect(() => {
    const observer = new IntersectionObserver(([entry]) => {
      if (entry.isIntersecting) {
        setInView(true)
        observer.disconnect()
      }
    }, { threshold: 0.05, ...options })
    if (ref.current) observer.observe(ref.current)
    return () => observer.disconnect()
  }, [])
  return [ref, inView]
}

function FadeIn({ children, delay = 0 }) {
  const [ref, inView] = useInView()
  return (
    <div
      ref={ref}
      style={{
        opacity: inView ? 1 : 0,
        transform: inView ? 'translateY(0)' : 'translateY(24px)',
        transition: `opacity 0.7s ease ${delay}s, transform 0.7s ease ${delay}s`,
      }}
    >
      {children}
    </div>
  )
}

function App() {
  const [lightbox, setLightbox] = useState(null)

  return (
    <div className="min-h-screen bg-cream font-body">

      {/* Lightbox */}
      {lightbox && (
        <div
          className="fixed inset-0 z-50 bg-forest-dark bg-opacity-90 flex items-center justify-center p-8 cursor-pointer"
          onClick={() => setLightbox(null)}
        >
          <img src={lightbox} alt="Preview" className="max-w-full max-h-full border border-warm-gray" />
        </div>
      )}

      {/* Nav */}
      <nav className="fixed top-0 w-full z-40 bg-cream border-b border-warm-gray px-8 md:px-16 py-5 flex justify-between items-center">
        <div className="flex gap-8 text-sm tracking-wide text-forest">
          <a href="#work" className="hover:text-rose transition-colors">Work</a>
          <a href="#projects" className="hover:text-rose transition-colors">Projects</a>
          <a href="#about" className="hover:text-rose transition-colors">About</a>
          <a href="#contact" className="hover:text-rose transition-colors">Contact</a>
        </div>
        <a
          href={resume}
          download="Aashna_Patel_Resume.pdf"
          className="text-sm text-rose border border-rose px-4 py-2 hover:bg-rose hover:text-cream transition-colors"
        >
          Resume
        </a>
      </nav>

      {/* Hero */}
      <section className="min-h-screen relative flex flex-col items-center justify-center text-center px-8 md:px-16 pt-24 pb-16 overflow-hidden">

        {/* Background blobs */}
        <svg className="absolute inset-0 w-full h-full" viewBox="0 0 1440 900" xmlns="http://www.w3.org/2000/svg" preserveAspectRatio="xMidYMid slice">
          {/* Top left blob + circle */}
          <path d="M-40,0 Q120,-20 200,80 Q280,180 140,280 Q40,340 -40,240 Z" fill="#E8DDD4" opacity="0.55"/>
          <circle cx="60" cy="60" r="140" fill="none" stroke="#2D4A3E" strokeWidth="1.5" opacity="0.45"/>
          {/* Top right blob + circle */}
          <path d="M1480,0 Q1360,-20 1280,90 Q1200,200 1340,290 Q1440,340 1480,240 Z" fill="#E8DDD4" opacity="0.5"/>
          <circle cx="1420" cy="70" r="160" fill="none" stroke="#2D4A3E" strokeWidth="1.5" opacity="0.45"/>
          {/* Bottom left blob + wavy line */}
          <path d="M-40,900 Q100,920 180,820 Q260,720 120,640 Q20,600 -40,680 Z" fill="#E8DDD4" opacity="0.5"/>
          <path d="M-40,820 Q80,780 180,830 Q280,880 380,850" fill="none" stroke="#2D4A3E" strokeWidth="1.5" opacity="0.4" strokeLinecap="round"/>
          {/* Bottom right blob + wavy line */}
          <path d="M1480,900 Q1360,920 1280,810 Q1200,710 1340,640 Q1440,600 1480,680 Z" fill="#E8DDD4" opacity="0.55"/>
          <path d="M1480,800 Q1380,760 1280,810 Q1180,860 1080,835" fill="none" stroke="#2D4A3E" strokeWidth="1.5" opacity="0.4" strokeLinecap="round"/>
          {/* Subtle rose dot */}
          <circle cx="720" cy="30" r="5" fill="#D4748F" opacity="0.35"/>
        </svg>

        {/* Content */}
        <div className="relative z-10">
          <p className="text-rose text-xs font-medium tracking-widest uppercase mb-8">Available for work</p>
          <h1 className="font-heading text-6xl md:text-8xl text-forest-dark leading-tight mb-8">
            Aashna Patel
          </h1>
          <p className="font-heading text-2xl md:text-3xl text-forest italic leading-snug mb-8 max-w-2xl">
            Growth marketer with a builder's mindset.
          </p>
          <p className="text-forest text-xs tracking-widest uppercase mb-12">
            GTM · Growth · Marketing · Product
          </p>
          <div className="flex gap-4 justify-center">
            <a href="#work" className="bg-forest text-cream px-8 py-3 text-xs font-medium tracking-widest uppercase hover:bg-forest-dark transition-colors">
              See My Work
            </a>
            <a href="#contact" className="border border-forest text-forest px-8 py-3 text-xs font-medium tracking-widest uppercase hover:bg-warm-gray transition-colors">
              Contact
            </a>
          </div>
        </div>

        <div className="absolute bottom-8 left-1/2 -translate-x-1/2 flex flex-col items-center gap-2 z-10">
          <span className="text-xs text-forest tracking-widest uppercase">Scroll</span>
          <div className="w-px h-8 bg-rose animate-pulse"></div>
        </div>
      </section>

      {/* Work */}
      <section id="work" className="px-8 md:px-16 py-32 border-t border-warm-gray">
        <FadeIn>
          <p className="text-rose text-xs font-medium tracking-widest uppercase mb-4">Experience</p>
          <h2 className="font-heading text-5xl text-forest-dark mb-16">Work</h2>
        </FadeIn>
        <div className="space-y-0">
          {[
            {
              company: 'Cisco',
              url: 'https://www.cisco.com/',
              logo: ciscoLogo,
              logoHeight: 'h-11',
              period: 'Summer 2025',
              location: 'New York, NY',
              title: 'GTM Strategy Intern',
              bullets: [
                "Designed a 120+ stakeholder survey to assess GTM alignment across Cisco's partner ecosystem",
                'Delivered findings to 200+ internal viewers that shaped go-to-market priorities',
              ],
              tags: ['GTM', 'Enterprise', 'Strategy'],
            },
            {
              company: 'WineFind',
              url: 'https://www.winefind.ai/home',
              logo: winefindLogo,
              logoHeight: 'h-8',
              period: 'Summer 2025',
              location: 'New York, NY',
              title: 'Marketing & Growth Intern',
              bullets: [
                'Sole marketing function at a pre-launch startup — built influencer and email strategies from scratch',
                'Grew the app from 0 to 100 users in two months pre-launch',
              ],
              tags: ['Growth', 'Startups', 'Email', 'Influencer'],
            },
            {
              company: 'Avasant',
              url: 'https://avasant.com/',
              logo: avasantLogo,
              logoHeight: 'h-10',
              period: 'Summer 2024',
              location: 'Los Angeles, CA',
              title: 'Technology & Management Consultant Intern',
              bullets: [
                'Supported CIO advisory engagements across data monetization and digital transformation',
                'Contributed to analysis underpinning $65M in identified savings',
              ],
              tags: ['Consulting', 'Analytics', 'Strategy'],
            },
          ].map((job, i) => (
            <FadeIn key={i} delay={i * 0.1}>
              <div className="border-t border-warm-gray py-12 grid md:grid-cols-3 gap-8">
                <div>
                  <a
                    href={job.url}
                    target="_blank"
                    rel="noopener noreferrer"
                    className="block mb-3 hover:opacity-60 transition-opacity"
                  >
                    <img
                      src={job.logo}
                      alt={job.company}
                      className={`${job.logoHeight} object-contain object-left`}
                    />
                  </a>
                  <p className="text-sm text-forest">{job.period} · {job.location}</p>
                </div>
                <div className="md:col-span-2">
                  <p className="text-sm font-medium tracking-wide text-forest-dark uppercase mb-4">{job.title}</p>
                  <ul className="space-y-2 mb-6">
                    {job.bullets.map((b, j) => (
                      <li key={j} className="text-forest text-sm leading-relaxed flex gap-3">
                        <span className="text-rose mt-1">—</span>
                        <span>{b}</span>
                      </li>
                    ))}
                  </ul>
                  <div className="flex flex-wrap gap-2">
                    {job.tags.map((tag, k) => (
                      <span key={k} className="border border-warm-gray text-forest text-xs px-3 py-1 tracking-wide">
                        {tag}
                      </span>
                    ))}
                  </div>
                </div>
              </div>
            </FadeIn>
          ))}
          <div className="border-t border-warm-gray"></div>
        </div>
      </section>

      {/* Projects */}
      <section id="projects" className="px-8 md:px-16 py-32 border-t border-warm-gray">
        <FadeIn>
          <p className="text-rose text-xs font-medium tracking-widest uppercase mb-4">Built</p>
          <h2 className="font-heading text-5xl text-forest-dark mb-16">Projects</h2>
        </FadeIn>
        <div className="space-y-0">
          <FadeIn>
            <div className="border-t border-warm-gray py-12 flex gap-16 items-center">
              <div className="flex-1">
                <div className="flex gap-2 mb-3">
                  <span className="text-rose text-xs tracking-widest uppercase">Healthtech</span>
                  <span className="text-rose text-xs tracking-widest uppercase">·</span>
                  <span className="text-rose text-xs tracking-widest uppercase">Full-Stack Web App</span>
                </div>
                <p className="font-heading text-3xl text-forest-dark mb-2">SBHA Care Manager</p>
                <p className="text-sm text-forest italic mb-6">A full-stack patient management web app built for a real healthcare advocacy business.</p>
                <ul className="space-y-2 mb-6">
                  {[
                    'Designed and built end-to-end — product thinking, UX decisions, and full-stack development from scratch',
                    'Features patient profiles, rich text notes with voice recording, calendar with recurring events, intake forms, and document storage',
                    'Live in production, used daily by South Bay Health Advocates — real users, real impact',
                  ].map((b, j) => (
                    <li key={j} className="text-forest text-sm leading-relaxed flex gap-3">
                      <span className="text-rose mt-1">—</span>
                      <span>{b}</span>
                    </li>
                  ))}
                </ul>
                <div className="flex flex-wrap gap-2 mb-6">
                  {['React', 'Supabase', 'Tailwind', 'PostgreSQL', 'Product Thinking', 'UX Design'].map((tag, k) => (
                    <span key={k} className="border border-warm-gray text-forest text-xs px-3 py-1 tracking-wide">
                      {tag}
                    </span>
                  ))}
                </div>
                <p className="text-rose text-xs uppercase tracking-wide mb-1">Demo login</p>
                <p className="text-rose text-xs mb-1">Email: demo@demo.com</p>
                <p className="text-rose text-xs mb-3">Password: Demo1234!</p>
                <p className="text-forest text-xs italic">Video walkthrough coming soon</p>
              </div>
              <div className="hidden md:flex flex-col gap-2 flex-shrink-0 w-[480px]">
                <div className="flex justify-end">
                  <a
                    href="https://sbha-care-manager.vercel.app"
                    target="_blank"
                    rel="noopener noreferrer"
                    className="text-rose text-xs tracking-wide hover:underline"
                  >
                    View live site →
                  </a>
                </div>
                <img
                  src={sbhaScreenshot}
                  alt="SBHA Care Manager"
                  className="w-full border border-warm-gray cursor-pointer hover:opacity-90 transition-opacity"
                  onClick={() => setLightbox(sbhaScreenshot)}
                />
                <p className="text-xs text-forest text-center">Click to enlarge</p>
              </div>
            </div>
          </FadeIn>
          <div className="border-t border-warm-gray"></div>
        </div>
      </section>

      {/* About */}
      <section id="about" className="px-8 md:px-16 py-32 border-t border-warm-gray">
        <FadeIn>
          <p className="text-rose text-xs font-medium tracking-widest uppercase mb-4">About</p>
          <h2 className="font-heading text-5xl text-forest-dark mb-16">I'm Aashna</h2>
        </FadeIn>
        <FadeIn delay={0.1}>
          <div className="flex gap-12 items-center">
            <div className="hidden md:block flex-shrink-0 w-56">
              <div className="relative">
                <div className="absolute -bottom-4 -right-4 w-full h-full border-2 border-rose"></div>
                <img
                  src={headshot}
                  alt="Aashna Patel"
                  className="relative w-full object-cover object-top"
                />
              </div>
            </div>
            <div className="flex-1">
              <p className="text-forest text-base leading-relaxed mb-10">
                A marketing and business analytics grad from Indiana University (Go Hoosiers ❤️🤍) who gets genuinely excited about building things that matter. Lately that includes vibe coding — I've shipped two full-stack web apps using React, Supabase, and AI-assisted development, and I'm just getting started. I thrive when I have ownership, love collaborating closely with the people around me, and am always looking for opportunities to learn something I didn't know yesterday. I'm looking for work where I can move fast, contribute meaningfully, and keep growing. Let's connect.
              </p>
              <p className="text-rose text-xs font-medium tracking-widest uppercase mb-8">Beyond my resume</p>
              <div className="space-y-6">
                {[
                  "Performed backup for Diljit Dosanjh (one of India's biggest pop stars) on the Aura Tour 2026 — sold-out night at Crypto.com Arena in LA.",
                  "Favorite places I've traveled to: South Africa, Croatia, the Amalfi Coast, Thailand, Belize, and Rajasthan.",
                  "Senior year at IU: watched the Hoosiers win their first-ever Big Ten title and national championship.",
                ].map((fact, i) => (
                  <div key={i} className="flex gap-4 items-start">
                    <span className="text-rose text-xs mt-1">✦</span>
                    <p className="text-forest text-base leading-relaxed">{fact}</p>
                  </div>
                ))}
              </div>
            </div>
          </div>
        </FadeIn>
      </section>

      {/* Contact */}
      <section id="contact" className="px-8 md:px-16 py-32 border-t border-warm-gray">
        <p className="text-rose text-xs font-medium tracking-widest uppercase mb-4">Contact</p>
        <FadeIn>
          <div className="flex flex-col items-center text-center mt-8">
            <h2 className="font-heading text-5xl text-forest-dark mb-6">Let's talk</h2>
            <p className="text-forest text-base mb-10 max-w-md">
              Open to new opportunities, collaborations, or just a good conversation — my inbox is always open.
            </p>
            <a
              href="mailto:aashnatpatel@gmail.com"
              className="font-heading text-3xl md:text-4xl text-rose hover:opacity-75 transition-opacity block mb-10"
            >
              aashnatpatel@gmail.com
            </a>
            <div className="flex gap-8 mb-10">
              <a
                href="https://www.linkedin.com/in/aashnatpatel/"
                target="_blank"
                rel="noopener noreferrer"
                className="text-sm text-forest-dark border-b border-forest-dark hover:text-rose hover:border-rose transition-colors pb-1"
              >
                LinkedIn
              </a>
              <a
                href="https://github.com/aashnatpatel"
                target="_blank"
                rel="noopener noreferrer"
                className="text-sm text-forest-dark border-b border-forest-dark hover:text-rose hover:border-rose transition-colors pb-1"
              >
                GitHub
              </a>
            </div>
            <a
              href={resume}
              download="Aashna_Patel_Resume.pdf"
              className="text-xs text-rose border border-rose px-6 py-3 tracking-widest uppercase hover:bg-rose hover:text-cream transition-colors"
            >
              Download Resume
            </a>
          </div>
        </FadeIn>
      </section>

      {/* Footer */}
      <footer className="px-8 md:px-16 py-8 border-t border-warm-gray flex justify-between items-center">
        <span className="font-heading text-lg text-forest-dark">Aashna Patel</span>
        <span className="text-xs text-forest tracking-wide">Built with React · 2026</span>
      </footer>

    </div>
  )
}

export default App
