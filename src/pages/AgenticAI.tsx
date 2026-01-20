import { useRef } from 'react'
import { motion, useInView } from 'framer-motion'
import { Bot, Brain, Workflow, Shield, RefreshCw, MessageSquare, Eye } from 'lucide-react'
import { PageHero } from '../components/PageHero'
import { Contact } from '../components/Contact'

const agents = [
  {
    name: 'Intake Agent',
    description: 'Handles patient registration, demographic verification, and insurance eligibility.',
    tasks: ['Patient Registration', 'Insurance Verification', 'Demographic Updates', 'Consent Management'],
    color: 'from-neural-500 to-plasma-500',
  },
  {
    name: 'Scheduling Agent',
    description: 'Manages appointments, handles rescheduling, and optimizes provider calendars.',
    tasks: ['Appointment Booking', 'Rescheduling', 'Waitlist Management', 'Reminder Automation'],
    color: 'from-plasma-500 to-cyber-500',
  },
  {
    name: 'Billing Agent',
    description: 'Processes claims, manages denials, and handles payment posting.',
    tasks: ['Claim Submission', 'Denial Appeals', 'Payment Posting', 'Patient Billing'],
    color: 'from-cyber-500 to-synth-500',
  },
  {
    name: 'Clinical Agent',
    description: 'Assists with documentation, coding, and clinical decision support.',
    tasks: ['Chart Prep', 'Medical Coding', 'CDI Queries', 'Order Management'],
    color: 'from-synth-500 to-neural-500',
  },
]

const capabilities = [
  {
    icon: Brain,
    title: 'Autonomous Decision Making',
    description: 'Agents make intelligent decisions based on context, policies, and learned patterns without constant supervision.',
  },
  {
    icon: Workflow,
    title: 'Multi-Step Workflows',
    description: 'Complex tasks are broken down and executed across multiple systems with full context awareness.',
  },
  {
    icon: MessageSquare,
    title: 'Natural Language Interface',
    description: 'Communicate with agents using natural language for task assignment and status updates.',
  },
  {
    icon: Eye,
    title: 'Full Observability',
    description: 'Complete visibility into agent actions, decisions, and reasoning with audit trails.',
  },
  {
    icon: RefreshCw,
    title: 'Self-Learning',
    description: 'Agents continuously improve from feedback and outcomes to optimize performance.',
  },
  {
    icon: Shield,
    title: 'Human-in-the-Loop',
    description: 'Configurable escalation paths for decisions requiring human judgment or approval.',
  },
]

const metrics = [
  { value: '24/7', label: 'Autonomous Operation', description: 'Round-the-clock processing' },
  { value: '10x', label: 'Productivity Gain', description: 'Compared to manual work' },
  { value: '95%', label: 'Task Automation', description: 'Routine tasks automated' },
  { value: '<1s', label: 'Response Time', description: 'Average task initiation' },
]

const architecture = [
  {
    layer: 'Interface Layer',
    description: 'Natural language APIs, webhooks, and integration endpoints',
    icon: MessageSquare,
  },
  {
    layer: 'Orchestration Layer',
    description: 'Task routing, agent coordination, and workflow management',
    icon: Workflow,
  },
  {
    layer: 'Agent Layer',
    description: 'Specialized AI agents with domain expertise and tool access',
    icon: Bot,
  },
  {
    layer: 'Knowledge Layer',
    description: 'Domain models, policies, and learned patterns',
    icon: Brain,
  },
]

export function AgenticAI() {
  const agentsRef = useRef(null)
  const capabilitiesRef = useRef(null)
  const isAgentsInView = useInView(agentsRef, { once: true, margin: '-100px' })
  const isCapabilitiesInView = useInView(capabilitiesRef, { once: true, margin: '-100px' })

  return (
    <>
      <PageHero
        icon={Bot}
        category="AI/Robotics"
        title="Agentic AI Workforce"
        subtitle="AI agents that work like your best employees"
        description="Autonomous AI agents that handle complex multi-step workflows end-to-end. From patient intake to claim submission, our agents work 24/7 with superhuman accuracy and speed."
        status="active"
        gradient="from-neural-500 to-plasma-500"
        features={[
          'Autonomous Agents',
          'Multi-Step Workflows',
          'Self-Learning',
          'Human-in-the-Loop',
          '24/7 Operations',
          'Full Observability',
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
                  <div className="text-4xl lg:text-5xl font-bold bg-gradient-to-r from-neural-500 to-plasma-500 bg-clip-text text-transparent mb-2">
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

      {/* Agents Section */}
      <section ref={agentsRef} className="relative py-32 overflow-hidden">
        <div className="absolute inset-0 dot-pattern opacity-30" />

        <div className="relative max-w-7xl mx-auto px-6">
          <motion.div
            initial={{ opacity: 0, y: 30 }}
            animate={isAgentsInView ? { opacity: 1, y: 0 } : {}}
            transition={{ duration: 0.6 }}
            className="text-center mb-16"
          >
            <span className="inline-block px-4 py-1.5 rounded-full glass text-sm text-neural-400 mb-6">
              AI Agent Fleet
            </span>
            <h2 className="text-4xl sm:text-5xl font-bold mb-6">
              Meet your{' '}
              <span className="bg-gradient-to-r from-neural-500 to-plasma-500 bg-clip-text text-transparent">
                AI workforce
              </span>
            </h2>
            <p className="text-lg text-neutral-400 max-w-2xl mx-auto">
              Specialized agents that handle every aspect of healthcare operations with expert-level competence.
            </p>
          </motion.div>

          <div className="grid md:grid-cols-2 gap-6">
            {agents.map((agent, i) => (
              <motion.div
                key={agent.name}
                initial={{ opacity: 0, y: 30 }}
                animate={isAgentsInView ? { opacity: 1, y: 0 } : {}}
                transition={{ delay: i * 0.15, duration: 0.6 }}
                className="glass rounded-3xl p-8 hover-lift"
              >
                <div className="flex items-center gap-4 mb-6">
                  <div className={`w-14 h-14 rounded-2xl bg-gradient-to-br ${agent.color} flex items-center justify-center`}>
                    <Bot className="w-7 h-7 text-white" />
                  </div>
                  <div>
                    <h3 className="text-xl font-bold text-white">{agent.name}</h3>
                    <div className="flex items-center gap-2">
                      <div className="w-2 h-2 rounded-full bg-green-400 animate-pulse" />
                      <span className="text-xs text-green-400">Active</span>
                    </div>
                  </div>
                </div>
                <p className="text-neutral-400 mb-6">{agent.description}</p>
                <div className="flex flex-wrap gap-2">
                  {agent.tasks.map((task) => (
                    <span
                      key={task}
                      className="px-3 py-1 rounded-lg bg-white/5 text-xs text-neutral-300"
                    >
                      {task}
                    </span>
                  ))}
                </div>
              </motion.div>
            ))}
          </div>
        </div>
      </section>

      {/* Capabilities Section */}
      <section ref={capabilitiesRef} className="relative py-32 overflow-hidden">
        <div className="absolute inset-0">
          <div className="absolute top-1/2 right-0 w-[500px] h-[500px] bg-neural-600/10 rounded-full blur-3xl -translate-y-1/2" />
        </div>

        <div className="relative max-w-7xl mx-auto px-6">
          <motion.div
            initial={{ opacity: 0, y: 30 }}
            animate={isCapabilitiesInView ? { opacity: 1, y: 0 } : {}}
            transition={{ duration: 0.6 }}
            className="text-center mb-16"
          >
            <span className="inline-block px-4 py-1.5 rounded-full glass text-sm text-plasma-400 mb-6">
              Core Capabilities
            </span>
            <h2 className="text-4xl sm:text-5xl font-bold mb-6">
              Beyond simple{' '}
              <span className="bg-gradient-to-r from-neural-500 to-plasma-500 bg-clip-text text-transparent">
                automation
              </span>
            </h2>
          </motion.div>

          <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-6">
            {capabilities.map((cap, i) => (
              <motion.div
                key={cap.title}
                initial={{ opacity: 0, y: 30 }}
                animate={isCapabilitiesInView ? { opacity: 1, y: 0 } : {}}
                transition={{ delay: i * 0.1, duration: 0.6 }}
                className="glass rounded-3xl p-8 hover-lift group"
              >
                <div className="w-14 h-14 rounded-2xl bg-gradient-to-br from-neural-500/20 to-plasma-500/20 flex items-center justify-center mb-6 group-hover:scale-110 transition-transform">
                  <cap.icon className="w-7 h-7 text-neural-400" />
                </div>
                <h3 className="text-xl font-bold text-white mb-3">{cap.title}</h3>
                <p className="text-neutral-400">{cap.description}</p>
              </motion.div>
            ))}
          </div>
        </div>
      </section>

      {/* Architecture Section */}
      <section className="relative py-20">
        <div className="max-w-7xl mx-auto px-6">
          <motion.div
            initial={{ opacity: 0, y: 30 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            className="text-center mb-12"
          >
            <h3 className="text-2xl font-bold text-white mb-4">Platform Architecture</h3>
            <p className="text-neutral-400">Built for scale, security, and reliability</p>
          </motion.div>

          <div className="glass rounded-3xl p-8">
            <div className="space-y-4">
              {architecture.map((layer, i) => (
                <motion.div
                  key={layer.layer}
                  initial={{ opacity: 0, x: -20 }}
                  whileInView={{ opacity: 1, x: 0 }}
                  viewport={{ once: true }}
                  transition={{ delay: i * 0.1 }}
                  className="flex items-center gap-6 p-4 rounded-2xl bg-white/5 hover:bg-white/10 transition-colors"
                >
                  <div className="w-12 h-12 rounded-xl bg-gradient-to-br from-neural-500/20 to-plasma-500/20 flex items-center justify-center flex-shrink-0">
                    <layer.icon className="w-6 h-6 text-neural-400" />
                  </div>
                  <div className="flex-1">
                    <div className="font-bold text-white">{layer.layer}</div>
                    <div className="text-sm text-neutral-400">{layer.description}</div>
                  </div>
                  <div className="hidden sm:block w-8 h-px bg-gradient-to-r from-neural-500/50 to-transparent" />
                </motion.div>
              ))}
            </div>
          </div>
        </div>
      </section>

      <Contact />
    </>
  )
}
