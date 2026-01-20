import { useRef } from 'react'
import { motion, useInView } from 'framer-motion'
import { Film, Pen, Camera, Scissors, Music, Wand2, Sparkles, Play, Layers, Clock } from 'lucide-react'
import { PageHero } from '../components/PageHero'
import { Contact } from '../components/Contact'

const agents = [
  {
    name: 'Writer Agent',
    role: 'Screenplay & Narrative',
    description: 'Crafts compelling stories, dialogue, and scene descriptions from high-level concepts or detailed prompts.',
    icon: Pen,
    color: 'from-synth-500 to-amber-500',
  },
  {
    name: 'Director Agent',
    role: 'Visual Planning',
    description: 'Interprets scripts into shot compositions, camera movements, lighting decisions, and visual style guides.',
    icon: Camera,
    color: 'from-amber-500 to-orange-500',
  },
  {
    name: 'Editor Agent',
    role: 'Sequence Assembly',
    description: 'Assembles generated footage, manages pacing, creates transitions, and ensures narrative coherence.',
    icon: Scissors,
    color: 'from-orange-500 to-rose-500',
  },
  {
    name: 'Composer Agent',
    role: 'Audio & Music',
    description: 'Generates original scores, sound effects, ambient audio, and ensures audio-visual synchronization.',
    icon: Music,
    color: 'from-rose-500 to-pink-500',
  },
  {
    name: 'VFX Agent',
    role: 'Visual Effects',
    description: 'Creates visual effects, composites elements, enhances footage, and ensures visual consistency.',
    icon: Wand2,
    color: 'from-pink-500 to-purple-500',
  },
  {
    name: 'Producer Agent',
    role: 'Orchestration',
    description: 'Coordinates all agents, manages workflow, resolves conflicts, and ensures cohesive output.',
    icon: Layers,
    color: 'from-purple-500 to-synth-500',
  },
]

const capabilities = [
  {
    icon: Film,
    title: 'Video Diffusion Generation',
    description: 'State-of-the-art diffusion models generate photorealistic or stylized video sequences from text descriptions, trained on millions of hours of footage.',
  },
  {
    icon: Music,
    title: 'AI Audio Synthesis',
    description: 'Original music composition, voice synthesis, sound effects generation, and intelligent audio mixing—all generated to match visual content.',
  },
  {
    icon: Sparkles,
    title: 'Style Transfer & Consistency',
    description: 'Maintain visual consistency across scenes with advanced style transfer, character consistency models, and temporal coherence.',
  },
  {
    icon: Clock,
    title: 'Real-time Iteration',
    description: 'Generate, review, and refine in minutes not months. Interactive editing allows human directors to guide AI creativity.',
  },
]

const process = [
  {
    step: '01',
    title: 'Concept Input',
    description: 'Provide a prompt, script outline, or detailed screenplay. The more context, the better the result.',
  },
  {
    step: '02',
    title: 'Pre-Production',
    description: 'Writer and Director agents develop the full screenplay, shot list, style guide, and production plan.',
  },
  {
    step: '03',
    title: 'Generation',
    description: 'Video diffusion models generate footage. Composer creates the score. VFX adds finishing touches.',
  },
  {
    step: '04',
    title: 'Assembly',
    description: 'Editor agent assembles all elements, ensuring pacing, transitions, and narrative flow are perfect.',
  },
  {
    step: '05',
    title: 'Review & Iterate',
    description: 'Human review with the ability to request changes, regenerate scenes, or adjust any creative element.',
  },
]

const metrics = [
  { value: '2-5', label: 'Minutes', description: 'Short film length' },
  { value: '<1hr', label: 'Generation', description: 'Per film' },
  { value: '4K', label: 'Resolution', description: 'Output quality' },
  { value: '∞', label: 'Styles', description: 'Visual possibilities' },
]

export function FilmStudio() {
  const agentsRef = useRef(null)
  const capabilitiesRef = useRef(null)
  const processRef = useRef(null)
  const isAgentsInView = useInView(agentsRef, { once: true, margin: '-100px' })
  const isCapabilitiesInView = useInView(capabilitiesRef, { once: true, margin: '-100px' })
  const isProcessInView = useInView(processRef, { once: true, margin: '-100px' })

  return (
    <>
      <PageHero
        icon={Film}
        category="Generative Cinema"
        title="AI Film Studio"
        subtitle="Where imagination becomes cinema"
        description="The future of filmmaking is autonomous. Our AI film studio orchestrates a fleet of specialized agents—writers, directors, editors, composers, VFX artists—to produce complete short films from a single prompt. Using state-of-the-art diffusion models and audio synthesis, we're creating a new medium where the only limit is imagination."
        gradient="from-synth-500 to-amber-500"
        status="developing"
        features={[
          'Video Diffusion',
          'AI Music Synthesis',
          'Multi-Agent Production',
          'Automated Post-Production',
          'Style Consistency',
          'Real-time Iteration',
        ]}
      />

      {/* Metrics Section */}
      <section className="relative py-20">
        <div className="max-w-7xl mx-auto px-6">
          <div className="glass rounded-3xl p-8 md:p-12">
            <div className="grid sm:grid-cols-2 lg:grid-cols-4 gap-8">
              {metrics.map((metric, i) => (
                <motion.div
                  key={metric.label}
                  initial={{ opacity: 0, scale: 0.9 }}
                  whileInView={{ opacity: 1, scale: 1 }}
                  viewport={{ once: true }}
                  transition={{ delay: i * 0.1 }}
                  className="text-center"
                >
                  <div className="text-4xl lg:text-5xl font-bold bg-gradient-to-r from-synth-500 to-amber-500 bg-clip-text text-transparent mb-2">
                    {metric.value}
                  </div>
                  <div className="text-white font-medium mb-1">{metric.label}</div>
                  <div className="text-sm text-neutral-500">{metric.description}</div>
                </motion.div>
              ))}
            </div>
          </div>
        </div>
      </section>

      {/* AI Agents Section */}
      <section ref={agentsRef} className="relative py-32 overflow-hidden">
        <div className="absolute inset-0 dot-pattern opacity-30" />
        <div className="absolute top-1/2 left-0 w-[500px] h-[500px] bg-synth-600/10 rounded-full blur-3xl -translate-y-1/2" />

        <div className="relative max-w-7xl mx-auto px-6">
          <motion.div
            initial={{ opacity: 0, y: 30 }}
            animate={isAgentsInView ? { opacity: 1, y: 0 } : {}}
            transition={{ duration: 0.6 }}
            className="text-center mb-16"
          >
            <span className="inline-block px-4 py-1.5 rounded-full glass text-sm text-synth-400 mb-6">
              AI Production Crew
            </span>
            <h2 className="text-4xl sm:text-5xl font-bold mb-6">
              Meet your{' '}
              <span className="bg-gradient-to-r from-synth-500 to-amber-500 bg-clip-text text-transparent">
                autonomous film crew
              </span>
            </h2>
            <p className="text-lg text-neutral-400 max-w-2xl mx-auto">
              Six specialized AI agents that collaborate to bring your vision to life. Each an expert in their domain, orchestrated for seamless production.
            </p>
          </motion.div>

          <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-6">
            {agents.map((agent, i) => (
              <motion.div
                key={agent.name}
                initial={{ opacity: 0, y: 30 }}
                animate={isAgentsInView ? { opacity: 1, y: 0 } : {}}
                transition={{ delay: i * 0.1, duration: 0.6 }}
                className="glass rounded-3xl p-8 hover-lift group"
              >
                <div className="flex items-center gap-4 mb-4">
                  <div className={`w-12 h-12 rounded-xl bg-gradient-to-br ${agent.color} flex items-center justify-center`}>
                    <agent.icon className="w-6 h-6 text-white" />
                  </div>
                  <div>
                    <h3 className="font-bold text-white">{agent.name}</h3>
                    <p className="text-xs text-neutral-500">{agent.role}</p>
                  </div>
                </div>
                <p className="text-neutral-400 text-sm">{agent.description}</p>
              </motion.div>
            ))}
          </div>
        </div>
      </section>

      {/* Capabilities Section */}
      <section ref={capabilitiesRef} className="relative py-32 overflow-hidden">
        <div className="absolute inset-0">
          <div className="absolute top-1/2 right-0 w-[500px] h-[500px] bg-amber-600/10 rounded-full blur-3xl -translate-y-1/2" />
        </div>

        <div className="relative max-w-7xl mx-auto px-6">
          <motion.div
            initial={{ opacity: 0, y: 30 }}
            animate={isCapabilitiesInView ? { opacity: 1, y: 0 } : {}}
            transition={{ duration: 0.6 }}
            className="text-center mb-16"
          >
            <span className="inline-block px-4 py-1.5 rounded-full glass text-sm text-amber-400 mb-6">
              Core Technology
            </span>
            <h2 className="text-4xl sm:text-5xl font-bold mb-6">
              Generative cinema{' '}
              <span className="bg-gradient-to-r from-synth-500 to-amber-500 bg-clip-text text-transparent">
                technology
              </span>
            </h2>
          </motion.div>

          <div className="grid md:grid-cols-2 gap-6">
            {capabilities.map((cap, i) => (
              <motion.div
                key={cap.title}
                initial={{ opacity: 0, y: 30 }}
                animate={isCapabilitiesInView ? { opacity: 1, y: 0 } : {}}
                transition={{ delay: i * 0.15, duration: 0.6 }}
                className="glass rounded-3xl p-8 hover-lift group"
              >
                <div className="w-14 h-14 rounded-2xl bg-gradient-to-br from-synth-500/20 to-amber-500/20 flex items-center justify-center mb-6 group-hover:scale-110 transition-transform">
                  <cap.icon className="w-7 h-7 text-synth-400" />
                </div>
                <h3 className="text-xl font-bold text-white mb-3">{cap.title}</h3>
                <p className="text-neutral-400">{cap.description}</p>
              </motion.div>
            ))}
          </div>
        </div>
      </section>

      {/* Process Section */}
      <section ref={processRef} className="relative py-32 overflow-hidden">
        <div className="relative max-w-7xl mx-auto px-6">
          <motion.div
            initial={{ opacity: 0, y: 30 }}
            animate={isProcessInView ? { opacity: 1, y: 0 } : {}}
            transition={{ duration: 0.6 }}
            className="text-center mb-16"
          >
            <span className="inline-block px-4 py-1.5 rounded-full glass text-sm text-synth-400 mb-6">
              Production Pipeline
            </span>
            <h2 className="text-4xl sm:text-5xl font-bold mb-6">
              From prompt to{' '}
              <span className="bg-gradient-to-r from-synth-500 to-amber-500 bg-clip-text text-transparent">
                premiere
              </span>
            </h2>
          </motion.div>

          <div className="space-y-6">
            {process.map((step, i) => (
              <motion.div
                key={step.step}
                initial={{ opacity: 0, x: i % 2 === 0 ? -30 : 30 }}
                animate={isProcessInView ? { opacity: 1, x: 0 } : {}}
                transition={{ delay: i * 0.15, duration: 0.6 }}
                className="glass rounded-3xl p-8 flex items-start gap-6"
              >
                <div className="text-5xl font-bold bg-gradient-to-br from-synth-500/30 to-amber-500/30 bg-clip-text text-transparent flex-shrink-0">
                  {step.step}
                </div>
                <div>
                  <h3 className="text-xl font-bold text-white mb-2">{step.title}</h3>
                  <p className="text-neutral-400">{step.description}</p>
                </div>
              </motion.div>
            ))}
          </div>
        </div>
      </section>

      {/* Demo CTA Section */}
      <section className="relative py-20">
        <div className="max-w-4xl mx-auto px-6 text-center">
          <motion.div
            initial={{ opacity: 0, y: 30 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            className="glass rounded-3xl p-12 relative overflow-hidden"
          >
            <div className="absolute inset-0 bg-gradient-to-br from-synth-500/10 to-amber-500/10" />
            <div className="relative">
              <div className="w-20 h-20 rounded-full bg-gradient-to-r from-synth-500 to-amber-500 flex items-center justify-center mx-auto mb-6">
                <Play className="w-10 h-10 text-white ml-1" />
              </div>
              <h2 className="text-3xl font-bold text-white mb-4">
                See it in action
              </h2>
              <p className="text-lg text-neutral-400 mb-8 max-w-2xl mx-auto">
                Watch films generated entirely by AI agents—from concept to final cut in under an hour.
              </p>
              <button className="px-8 py-4 rounded-2xl bg-gradient-to-r from-synth-500 to-amber-500 text-white font-medium text-lg hover:opacity-90 transition-opacity">
                View Demo Reel
              </button>
            </div>
          </motion.div>
        </div>
      </section>

      <Contact />
    </>
  )
}
