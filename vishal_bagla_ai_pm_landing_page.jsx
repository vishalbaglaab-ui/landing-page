export default function VishalBaglaLandingPage() {
  const metrics = [
    { value: '59K+', label: 'LinkedIn followers' },
    { value: '11+', label: 'Years of experience' },
  ];

  const focusAreas = [
    'AI product strategy and real-world GenAI use cases',
    'Product management thinking, case studies, and interview prep',
    '0→1 product building, monetization, and growth',
    'AI evals, guardrails, and quality frameworks',
    'Career growth for PMs in the AI era',
    'Employer branding, marketplace trust, and platform strategy',
  ];

  const credibility = [
    'VP - Product Management at AmbitionBox (Info Edge / Naukri Group)',
    'Built and scaled products across product, growth, analytics, and monetization',
    
    'IIM Calcutta alumnus with 11+ years across startups and scaled internet businesses',
    'Writes and teaches at the intersection of AI and Product Management',
    'Creator of PM case studies, AI PM interview content, and practical frameworks for builders',
  ];

  const workStreams = [
    {
      title: 'For Product Managers',
      description:
        'Actionable breakdowns on AI strategy, product thinking, metrics, experiments, case studies, and PM interviews.'
    },
    {
      title: 'For Founders and Teams',
      description:
        'Sharp perspectives on building AI products, evaluating GenAI systems, growth loops, positioning, monetization, and go-to-market.'
    },
    {
      title: 'For Brands and Communities',
      description:
        'High-signal content collaborations for AI tools, SaaS products, and platforms targeting PMs, builders, and tech leaders.'
    },
  ];

  const featuredTopics = [
    'How PMs should evaluate AI products beyond accuracy',
    'What makes AI features actually useful, not just flashy',
    'The future of product management in an AI-first world',
    'Real business lessons from product teardowns and strategy breakdowns',
    'How to think about trust, quality, and abuse prevention in user-generated systems',
    'How builders can turn AI hype into measurable product outcomes',
  ];

  const offers = [
    'Speaking sessions and workshops on AI + Product Management',
    'Advisory for AI products, PM teams, and growth problems',
    'Content partnerships with AI and SaaS brands',
    'PM interview prep, case-study based learning, and educational cohorts',
  ];

  return (
    <div className="min-h-screen bg-neutral-950 text-white">
      <section className="relative overflow-hidden border-b border-white/10">
        <div className="absolute inset-0 bg-[radial-gradient(circle_at_top_right,rgba(99,102,241,0.18),transparent_28%),radial-gradient(circle_at_left,rgba(16,185,129,0.12),transparent_24%)]" />
        <div className="relative mx-auto max-w-7xl px-6 py-20 md:px-10 md:py-28">
          <div className="grid items-center gap-14 lg:grid-cols-[1.2fr_0.8fr]">
            <div>
              <div className="mb-5 inline-flex items-center rounded-full border border-white/15 bg-white/5 px-4 py-2 text-sm text-white/80 backdrop-blur">
                AI · Product Management · Strategy · Education
              </div>
              <h1 className="max-w-4xl text-4xl font-semibold leading-tight tracking-tight md:text-6xl">
                The voice shaping how builders think about <span className="text-indigo-300">AI</span> and <span className="text-emerald-300">Product Management</span>
              </h1>
              <p className="mt-6 max-w-3xl text-lg leading-8 text-white/70 md:text-xl">
                I help product managers, founders, and tech teams cut through noise and understand what it really takes to build, evaluate, and grow products in the AI era.
              </p>
              <p className="mt-4 max-w-3xl text-base leading-7 text-white/60 md:text-lg">
                I am Vishal Bagla - VP Product at AmbitionBox, educator, operator, and creator writing at the intersection of AI, product strategy, and business outcomes.
              </p>

              <div className="mt-10 flex flex-wrap gap-4">
                <a
                  href="#work"
                  className="rounded-2xl bg-white px-6 py-3 text-sm font-medium text-neutral-950 transition hover:scale-[1.02]"
                >
                  Explore my work
                </a>
                <a
                  href="#connect"
                  className="rounded-2xl border border-white/15 bg-white/5 px-6 py-3 text-sm font-medium text-white transition hover:bg-white/10"
                >
                  Work with me
                </a>
              </div>
            </div>

            <div className="rounded-[32px] border border-white/10 bg-white/5 p-6 shadow-2xl shadow-black/30 backdrop-blur">
              <div className="grid grid-cols-2 gap-4">
                {metrics.map((item) => (
                  <div key={item.label} className="rounded-2xl border border-white/10 bg-black/20 p-5">
                    <div className="text-2xl font-semibold md:text-3xl">{item.value}</div>
                    <div className="mt-2 text-sm leading-6 text-white/60">{item.label}</div>
                  </div>
                ))}
              </div>
              <div className="mt-6 rounded-2xl border border-indigo-400/20 bg-indigo-400/10 p-5">
                <p className="text-sm uppercase tracking-[0.2em] text-indigo-200/80">Positioning</p>
                <p className="mt-3 text-lg leading-8 text-white/85">
                  Practical AI thinking. Operator-led product insights. High-signal content for people building what is next.
                </p>
              </div>
            </div>
          </div>
        </div>
      </section>

      <section className="mx-auto max-w-7xl px-6 py-20 md:px-10" id="about">
        <div className="grid gap-10 lg:grid-cols-[0.9fr_1.1fr]">
          <div>
            <p className="text-sm font-medium uppercase tracking-[0.25em] text-white/45">About me</p>
            <h2 className="mt-4 text-3xl font-semibold tracking-tight md:text-5xl">
              Operator first. Teacher by passion. Voice of clarity in a noisy AI market.
            </h2>
          </div>
          <div className="space-y-5 text-base leading-8 text-white/70 md:text-lg">
            <p>
              Over the last 11+ years, I have worked across product management, growth, analytics, monetization, and business leadership. I currently lead product for the employer side of AmbitionBox, where I have helped scale monetization, sharpen customer value, and build products grounded in real business needs.
            </p>
            <p>
              My content stands out because it is not theoretical. It comes from operating at scale, building products, solving messy business problems, and making AI useful in practical ways.
            </p>
            <p>
              I write for ambitious PMs, founders, and builders who want sharper thinking on AI products, real frameworks instead of fluff, and insights they can apply immediately.
            </p>
          </div>
        </div>
      </section>

      <section className="border-y border-white/10 bg-white/[0.03]">
        <div className="mx-auto max-w-7xl px-6 py-20 md:px-10">
          <div className="grid gap-6 md:grid-cols-2 xl:grid-cols-3">
            {credibility.map((item) => (
              <div key={item} className="rounded-[28px] border border-white/10 bg-neutral-900/70 p-6 text-base leading-7 text-white/75 shadow-lg shadow-black/20">
                {item}
              </div>
            ))}
          </div>
        </div>
      </section>

      <section className="mx-auto max-w-7xl px-6 py-20 md:px-10" id="work">
        <div className="flex flex-col gap-5 md:flex-row md:items-end md:justify-between">
          <div>
            <p className="text-sm font-medium uppercase tracking-[0.25em] text-white/45">What I am known for</p>
            <h2 className="mt-4 text-3xl font-semibold tracking-tight md:text-5xl">
              The intersection of AI, product thinking, and business reality
            </h2>
          </div>
          <p className="max-w-2xl text-base leading-8 text-white/60 md:text-lg">
            I simplify complex ideas and turn them into practical frameworks, sharp opinions, and useful lessons for modern builders.
          </p>
        </div>

        <div className="mt-12 grid gap-6 lg:grid-cols-[0.95fr_1.05fr]">
          <div className="rounded-[32px] border border-white/10 bg-white/[0.03] p-8">
            <h3 className="text-xl font-semibold">Core themes I write and speak about</h3>
            <div className="mt-6 flex flex-wrap gap-3">
              {focusAreas.map((item) => (
                <span
                  key={item}
                  className="rounded-full border border-white/10 bg-white/5 px-4 py-2 text-sm text-white/75"
                >
                  {item}
                </span>
              ))}
            </div>
          </div>

          <div className="grid gap-6 md:grid-cols-3">
            {workStreams.map((item) => (
              <div key={item.title} className="rounded-[28px] border border-white/10 bg-neutral-900/70 p-6">
                <h3 className="text-xl font-semibold">{item.title}</h3>
                <p className="mt-4 text-sm leading-7 text-white/65">{item.description}</p>
              </div>
            ))}
          </div>
        </div>
      </section>

      <section className="border-y border-white/10 bg-gradient-to-b from-transparent to-white/[0.03]">
        <div className="mx-auto max-w-7xl px-6 py-20 md:px-10">
          <div className="grid gap-10 lg:grid-cols-2">
            <div className="rounded-[32px] border border-white/10 bg-black/20 p-8">
              <p className="text-sm font-medium uppercase tracking-[0.25em] text-white/45">Featured content angles</p>
              <h3 className="mt-4 text-2xl font-semibold md:text-3xl">The ideas I want to be associated with</h3>
              <div className="mt-8 space-y-4">
                {featuredTopics.map((item, index) => (
                  <div key={item} className="flex gap-4 rounded-2xl border border-white/10 bg-white/[0.03] p-4">
                    <div className="flex h-8 w-8 shrink-0 items-center justify-center rounded-full bg-white text-sm font-semibold text-neutral-950">
                      {index + 1}
                    </div>
                    <p className="text-sm leading-7 text-white/75">{item}</p>
                  </div>
                ))}
              </div>
            </div>

            <div className="rounded-[32px] border border-white/10 bg-white/[0.03] p-8">
              <p className="text-sm font-medium uppercase tracking-[0.25em] text-white/45">Work with me</p>
              <h3 className="mt-4 text-2xl font-semibold md:text-3xl">Ways I can create value</h3>
              <div className="mt-8 space-y-4">
                {offers.map((item) => (
                  <div key={item} className="rounded-2xl border border-white/10 bg-neutral-900/80 p-5 text-sm leading-7 text-white/75">
                    {item}
                  </div>
                ))}
              </div>
              <div className="mt-8 rounded-2xl border border-emerald-400/20 bg-emerald-400/10 p-5 text-sm leading-7 text-emerald-100/90">
                Ideal for AI startups, SaaS brands, PM communities, leadership teams, and platforms looking for strong product-first storytelling.
              </div>
            </div>
          </div>
        </div>
      </section>

      <section className="mx-auto max-w-7xl px-6 py-20 md:px-10">
        <div className="rounded-[36px] border border-white/10 bg-white/[0.04] p-8 md:p-12">
          <div className="grid gap-8 lg:grid-cols-[1.1fr_0.9fr] lg:items-center">
            <div>
              <p className="text-sm font-medium uppercase tracking-[0.25em] text-white/45">Why this page exists</p>
              <h2 className="mt-4 text-3xl font-semibold tracking-tight md:text-5xl">
                Not just another creator. A credible voice backed by operating depth.
              </h2>
              <p className="mt-6 max-w-3xl text-base leading-8 text-white/70 md:text-lg">
                There is no shortage of AI content. What is rare is signal. My goal is to become the most trusted voice for people who want to understand AI through the lens of product, strategy, and execution.
              </p>
            </div>
            <div className="grid gap-4">
              <div className="rounded-2xl border border-white/10 bg-black/25 p-5">
                <p className="text-sm text-white/45">Differentiator</p>
                <p className="mt-2 text-lg leading-8 text-white/85">I combine creator reach with operator credibility.</p>
              </div>
              <div className="rounded-2xl border border-white/10 bg-black/25 p-5">
                <p className="text-sm text-white/45">Audience fit</p>
                <p className="mt-2 text-lg leading-8 text-white/85">PMs, founders, tech leaders, and AI-curious builders.</p>
              </div>
              <div className="rounded-2xl border border-white/10 bg-black/25 p-5">
                <p className="text-sm text-white/45">Content promise</p>
                <p className="mt-2 text-lg leading-8 text-white/85">Practical, sharp, and deeply grounded in real product problems.</p>
              </div>
            </div>
          </div>
        </div>
      </section>

      <section className="border-t border-white/10" id="connect">
        <div className="mx-auto max-w-7xl px-6 py-20 md:px-10">
          <div className="rounded-[36px] border border-white/10 bg-gradient-to-br from-indigo-400/15 via-white/[0.03] to-emerald-400/15 p-10 md:p-14">
            <div className="max-w-4xl">
              <p className="text-sm font-medium uppercase tracking-[0.25em] text-white/45">Connect</p>
              <h2 className="mt-4 text-3xl font-semibold tracking-tight md:text-5xl">
                Building the go-to platform for AI and Product Management insights
              </h2>
              <p className="mt-6 text-base leading-8 text-white/70 md:text-lg">
                Follow my work, collaborate on content, invite me for a session, or reach out if you are building something meaningful in the AI or product space.
              </p>
              <div className="mt-8 flex flex-wrap gap-4">
                <a href="#" className="rounded-2xl bg-white px-6 py-3 text-sm font-medium text-neutral-950">
                  LinkedIn
                </a>
                <a href="#" className="rounded-2xl border border-white/15 bg-white/5 px-6 py-3 text-sm font-medium text-white">
                  Newsletter
                </a>
                <a href="#" className="rounded-2xl border border-white/15 bg-white/5 px-6 py-3 text-sm font-medium text-white">
                  Speaking / Collaborations
                </a>
              </div>
            </div>
          </div>

          <div className="mt-10 flex flex-col gap-3 border-t border-white/10 pt-8 text-sm text-white/45 md:flex-row md:items-center md:justify-between">
            <p>© Vishal Bagla</p>
            <p>AI · Product Management · Strategy · Education</p>
          </div>
        </div>
      </section>
    </div>
  );
}
