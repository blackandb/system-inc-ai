import Link from "next/link";

const sections = [
  {
    title: "Platform",
    links: [
      "Company Factory",
      "AI Departments",
      "AI Agents",
      "Documents",
      "Automation",
      "Integrations",
    ],
  },
  {
    title: "Solutions",
    links: [
      "Startups",
      "SMEs",
      "Enterprise",
      "Consultants",
      "Governments",
    ],
  },
  {
    title: "Resources",
    links: [
      "Documentation",
      "API",
      "Roadmap",
      "Blog",
      "Changelog",
    ],
  },
  {
    title: "Company",
    links: [
      "About",
      "Careers",
      "Contact",
      "Privacy",
      "Terms",
    ],
  },
];

export function Footer() {
  return (
    <footer className="border-t border-white/10 bg-black">

      <div className="mx-auto max-w-[1440px] px-8 py-24">

        {/* CTA */}

        <div className="rounded-[32px] border border-white/10 bg-gradient-to-b from-white/[0.05] to-white/[0.02] p-16">

          <div className="max-w-3xl">

            <p className="text-sm uppercase tracking-[0.3em] text-violet-400">
              BUILD YOUR COMPANY
            </p>

            <h2 className="mt-5 text-5xl font-semibold tracking-[-0.05em] text-white">
              Ready to build your AI company?
            </h2>

            <p className="mt-6 max-w-xl text-lg leading-8 text-zinc-400">
              Create, structure and operate a complete AI-powered business
              through one intelligent operating system.
            </p>

            <div className="mt-10 flex flex-wrap gap-4">

              <Link
                href="/onboarding"
                className="rounded-full bg-white px-8 py-4 text-sm font-medium text-black transition hover:bg-zinc-200"
              >
                Start Building →
              </Link>

              <Link
                href="/"
                className="rounded-full border border-white/15 px-8 py-4 text-sm text-white transition hover:border-white/30"
              >
                Book a Demo
              </Link>

            </div>

          </div>

        </div>

        {/* Footer */}

        <div className="mt-24 grid gap-16 lg:grid-cols-[1.2fr_2fr]">

          <div>

            <h3 className="text-2xl font-semibold tracking-[0.2em] text-white">
              SYSTEM INC AI
            </h3>

            <p className="mt-5 text-zinc-400">
              The AI Company Operating System
            </p>

            <div className="mt-10 flex gap-8 text-lg text-white">

              <span>Build.</span>

              <span className="text-violet-400">•</span>

              <span>Launch.</span>

              <span className="text-violet-400">•</span>

              <span>Operate.</span>

            </div>

          </div>

          <div className="grid grid-cols-2 gap-12 md:grid-cols-4">

            {sections.map((section) => (

              <div key={section.title}>

                <h4 className="mb-6 text-sm font-semibold uppercase tracking-[0.2em] text-white">
                  {section.title}
                </h4>

                <div className="space-y-4">

                  {section.links.map((link) => (

                    <Link
                      key={link}
                      href="/"
                      className="block text-sm text-zinc-400 transition hover:text-white"
                    >
                      {link}
                    </Link>

                  ))}

                </div>

              </div>

            ))}

          </div>

        </div>

        <div className="mt-20 flex flex-col items-center justify-between gap-6 border-t border-white/10 pt-8 text-sm text-zinc-500 md:flex-row">

          <span>
            © 2026 SYSTEM INC AI. Built by BLACK&
          </span>

          <div className="flex gap-8">

            <Link href="/">LinkedIn</Link>

            <Link href="/">GitHub</Link>

            <Link href="/">X</Link>

          </div>

        </div>

      </div>

    </footer>
  );
}
