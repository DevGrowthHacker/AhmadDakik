"use client";

import { MinimalistHero } from "@/components/ui/minimalist-hero";
import Image from "next/image";

const InstagramIcon = ({ className }: { className?: string }) => (
  <svg
    xmlns="http://www.w3.org/2000/svg"
    viewBox="0 0 24 24"
    fill="none"
    stroke="currentColor"
    strokeWidth="2"
    strokeLinecap="round"
    strokeLinejoin="round"
    className={className}
    aria-hidden="true"
  >
    <rect width="20" height="20" x="2" y="2" rx="5" ry="5" />
    <path d="M16 11.37A4 4 0 1 1 12.63 8 4 4 0 0 1 16 11.37z" />
    <line x1="17.5" x2="17.51" y1="6.5" y2="6.5" />
  </svg>
);

const navLinks = [
  { label: "HOME", href: "#" },
  { label: "GALLERY", href: "#gallery" },
  { label: "CREDITS", href: "#credits" },
  { label: "ABOUT", href: "#about" },
  { label: "CONTACT", href: "#contact" },
];

const socialLinks = [
  { icon: InstagramIcon, href: "https://www.instagram.com/ahmad_dakikk/" },
];

const galleryImages = [
  { src: "/images/photo-1.jpeg", alt: "Ahmad Dakik — casual portrait with sunglasses" },
  { src: "/images/photo-2.jpeg", alt: "Ahmad Dakik — evening close-up" },
  { src: "/images/photo-3.jpeg", alt: "Ahmad Dakik — dinner scene" },
  { src: "/images/photo-4.jpeg", alt: "Ahmad Dakik — cinematic driving shot" },
  { src: "/images/photo-5.jpeg", alt: "Ahmad Dakik — outdoor portrait" },
  { src: "/images/photo-6.jpeg", alt: "Ahmad Dakik — street style" },
  { src: "/images/photo-7.jpeg", alt: "Ahmad Dakik — leather jacket portrait" },
  { src: "/images/photo-8.jpeg", alt: "Ahmad Dakik — full body shot" },
];

export default function Home() {
  return (
    <main>
      {/* Hero Section */}
      <MinimalistHero
        logoText="AHMAD DAKIK"
        navLinks={navLinks}
        mainText="Born and raised in Beirut, Ahmad Dakik found his voice in the vibrant local theatre scene. His approach to acting is defined by a rigorous dedication to authenticity."
        readMoreLink="#about"
        imageSrc="/images/hero-portrait.png"
        imageAlt="Ahmad Dakik — Lebanese Actor"
        overlayText={{
          part1: "AHMAD",
          part2: "DAKIK",
        }}
        socialLinks={socialLinks}
        locationText="Beirut, Lebanon"
        className="font-[family-name:var(--font-body)]"
      />

      {/* Gallery Section */}
      <section className="bg-surface py-16" id="gallery">
        <div className="mx-auto max-w-7xl px-8">
          <div className="mb-10 flex flex-col justify-between gap-4 md:flex-row md:items-end">
            <h2 className="font-[family-name:var(--font-headline)] text-4xl font-bold">
              The Visual <span className="italic text-primary">Canvas</span>
            </h2>
          </div>
          <div className="grid grid-cols-2 gap-3 sm:gap-6 lg:grid-cols-3">
            {galleryImages.map((img, i) => (
              <div key={i} className="group aspect-[3/4] overflow-hidden bg-black">
                <Image
                  src={img.src}
                  alt={img.alt}
                  width={600}
                  height={800}
                  className="h-full w-full object-cover object-top transition-all duration-700 group-hover:scale-105 md:grayscale md:group-hover:grayscale-0"
                />
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* Credits & Reel Section */}
      <section className="bg-surface-container-low py-16" id="reel">
        <div className="mx-auto max-w-7xl px-8">
          <div className="grid grid-cols-1 gap-12 lg:grid-cols-3">
            {/* Physical Profile & Skills */}
            <div className="space-y-8 lg:col-span-1">
              <div>
                <h3 className="mb-6 flex items-center gap-4 font-[family-name:var(--font-headline)] text-2xl font-bold">
                  Physical <span className="text-primary">Profile</span>
                </h3>
                <div className="space-y-4 font-[family-name:var(--font-body)]">
                  {[
                    ["Height", '185cm / 6\'1"'],
                    ["Eyes", "Dark Brown"],
                    ["Hair", "Black"],
                  ].map(([label, value]) => (
                    <div
                      key={label}
                      className="flex items-center justify-between border-b border-outline-variant/20 pb-2"
                    >
                      <span className="text-sm uppercase tracking-wider text-on-surface-variant">
                        {label}
                      </span>
                      <span className="font-medium text-white">{value}</span>
                    </div>
                  ))}
                </div>
              </div>
              <div>
                <h3 className="mb-6 flex items-center gap-4 font-[family-name:var(--font-headline)] text-2xl font-bold">
                  Specialized <span className="text-primary">Skills</span>
                </h3>
                <div className="flex flex-wrap gap-2">
                  {[
                    "Arabic (Native)",
                    "English (Fluent)",
                    "French (Conversational)",
                    "Turkish",
                    "Comedy",
                    "Martial Arts (Kickboxing)",
                    "Horse Riding",
                    "Levantine Dialect",
                  ].map((skill) => (
                    <span
                      key={skill}
                      className="bg-surface-container-high px-4 py-2 text-xs font-bold uppercase tracking-widest text-on-surface"
                    >
                      {skill}
                    </span>
                  ))}
                </div>
              </div>
            </div>

            {/* Credits */}
            <div className="lg:col-span-2" id="credits">
              <div>
                <h3 className="mb-8 font-[family-name:var(--font-headline)] text-3xl font-bold">
                  Selected Credits
                </h3>
                <div className="space-y-6">
                  {[
                    {
                      year: "2024",
                      title: "Al Qadar",
                      detail: "TV Series",
                      href: "https://www.imdb.com/title/tt35283099/",
                    },
                    {
                      year: "2023",
                      title: "Al Thaman",
                      detail: "TV Series",
                      href: "https://www.imdb.com/title/tt26469117/",
                    },
                    {
                      year: "2023",
                      title: "Crystal",
                      detail: "TV Series",
                      href: "https://www.imdb.com/title/tt27715192/",
                    },
                    {
                      year: "2021",
                      title: "Hades Aleb",
                      detail: "TV Series",
                      href: "https://www.imdb.com/title/tt20036974/",
                    },
                    {
                      year: "2021",
                      title: "Loghz Al Aqwiya",
                      detail: "Dir. Elie Rammouz | TV Series",
                      href: "https://elcinema.com/en/work/2068850/cast",
                    },
                  ].map((credit) => (
                    <a
                      key={`${credit.year}-${credit.title}`}
                      href={credit.href}
                      target="_blank"
                      rel="noopener noreferrer"
                      className="group flex gap-6"
                    >
                      <div className="pt-1 font-[family-name:var(--font-label)] font-bold text-primary">
                        {credit.year}
                      </div>
                      <div className="flex-1">
                        <h4 className="font-[family-name:var(--font-headline)] text-xl text-white transition-colors group-hover:text-primary">
                          {credit.title}
                        </h4>
                        <p className="mt-1 font-[family-name:var(--font-body)] text-sm text-on-surface-variant">
                          {credit.detail}
                        </p>
                      </div>
                    </a>
                  ))}
                </div>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* About & Contact */}
      <section className="bg-surface py-16" id="about">
        <div className="mx-auto max-w-7xl px-8">
          <div className="grid grid-cols-1 items-center gap-12 md:grid-cols-2">
            <div className="relative">
              <div className="absolute -left-10 -top-10 h-40 w-40 rounded-full bg-primary/5 blur-3xl"></div>
              <Image
                src="/images/photo-9.jpeg"
                alt="Ahmad Dakik personal photo"
                width={600}
                height={800}
                className="relative z-10 aspect-[3/4] w-full bg-surface-container object-cover grayscale"
              />
              <div className="absolute -bottom-6 -right-6 h-px w-1/2 bg-primary/40"></div>
              <div className="absolute -bottom-6 -right-6 h-1/2 w-px bg-primary/40"></div>
            </div>
            <div className="space-y-8">
              <h2 className="font-[family-name:var(--font-headline)] text-5xl font-bold">
                The <span className="italic text-primary">Journey</span>
              </h2>
              <div className="space-y-6 font-[family-name:var(--font-body)] text-lg leading-relaxed text-on-surface-variant">
                <p>
                  Born and raised in Beirut, Ahmad Dakik found his voice in the
                  vibrant local theatre scene. His approach to acting is defined
                  by a rigorous dedication to authenticity and a deep-seated
                  curiosity about the human condition.
                </p>
                <p>
                  After refining his craft through classical training and
                  contemporary experimental work, he transitioned to the screen,
                  where his commanding presence and emotional range quickly
                  garnered attention from regional directors.
                </p>
              </div>
              <div
                className="border-t border-outline-variant/20 pt-8"
                id="contact"
              >
                <h3 className="mb-6 font-[family-name:var(--font-headline)] text-2xl font-bold">
                  Contact &amp; Representation
                </h3>
                <div className="grid grid-cols-1 gap-8 font-[family-name:var(--font-body)] sm:grid-cols-2">
                  <div>
                    <span className="mb-2 block text-xs font-bold uppercase tracking-widest text-primary">
                      Agency
                    </span>
                    <p className="text-white">Star Talent Management</p>
                    <p className="text-sm text-on-surface-variant">
                      Beirut / Dubai
                    </p>
                  </div>
                  <div>
                    <span className="mb-2 block text-xs font-bold uppercase tracking-widest text-primary">
                      Inquiries
                    </span>
                    <p className="text-white">contact@ahmad-dakik.com</p>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* Footer */}
      <footer className="w-full bg-[#1c1b1b] px-8 py-10">
        <div className="mx-auto flex w-full max-w-7xl flex-col items-center justify-between gap-8 md:flex-row">
          <div className="flex flex-col items-center gap-2 md:items-start">
            <span className="font-[family-name:var(--font-headline)] text-xl italic text-white">
              AHMAD DAKIK
            </span>
            <span className="text-xs uppercase tracking-widest text-white/40">
              &copy; 2026 AHMAD DAKIK. ALL RIGHTS RESERVED.
            </span>
          </div>
          <div className="flex gap-12">
            <a
              href="https://www.instagram.com/ahmad_dakikk/"
              target="_blank"
              rel="noopener noreferrer"
              className="text-xs uppercase tracking-widest text-white/40 transition-colors hover:text-primary"
            >
              Instagram
            </a>
          </div>
        </div>
      </footer>
    </main>
  );
}
