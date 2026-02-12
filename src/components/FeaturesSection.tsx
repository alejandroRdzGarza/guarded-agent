import { motion } from "framer-motion";
import { ShieldCheck, Repeat, FileSearch, Activity, Plug, Lock } from "lucide-react";

const features = [
  {
    icon: ShieldCheck,
    title: "Policy Enforcement",
    description: "Define what agents can and cannot do. Block violations in real time before they cause harm.",
    tag: "GOVERNANCE",
  },
  {
    icon: Repeat,
    title: "Deterministic Execution",
    description: "Same inputs produce the same outputs. Controlled, predictable agent behavior in production.",
    tag: "RELIABILITY",
  },
  {
    icon: FileSearch,
    title: "Audit Trails",
    description: "Every action recorded with clear reasoning. Exportable, compliance-ready logs for regulators.",
    tag: "COMPLIANCE",
  },
  {
    icon: Activity,
    title: "Real-Time Monitoring",
    description: "Cross-agent visibility across your organization. Detect anomalies and cascading failures early.",
    tag: "OPERATIONS",
  },
  {
    icon: Plug,
    title: "Drop-In Integration",
    description: "Works with LangChain, CrewAI, and custom agents. No re-architecture required.",
    tag: "INTEGRATION",
  },
  {
    icon: Lock,
    title: "Zero Data Access",
    description: "Governance operates on metadata only. We never see, store, or train on your enterprise data.",
    tag: "SECURITY",
  },
];

const container = {
  hidden: {},
  show: { transition: { staggerChildren: 0.1 } },
};

const item = {
  hidden: { opacity: 0, y: 24 },
  show: { opacity: 1, y: 0, transition: { duration: 0.5 } },
};

const FeaturesSection = () => {
  return (
    <section id="features" className="relative py-32">
      <div className="container mx-auto px-6">
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          className="text-center mb-16"
        >
          <span className="text-xs font-mono text-primary tracking-widest mb-4 block">CAPABILITIES</span>
          <h2 className="text-3xl md:text-5xl font-bold tracking-tight text-foreground mb-4">
            Enterprise-grade guardrails
          </h2>
          <p className="text-muted-foreground text-lg max-w-xl mx-auto">
            Everything you need to deploy AI agents with confidence.
          </p>
        </motion.div>

        <motion.div
          variants={container}
          initial="hidden"
          whileInView="show"
          viewport={{ once: true }}
          className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6"
        >
          {features.map((feature) => (
            <motion.div
              key={feature.title}
              variants={item}
              className="group relative rounded-xl border border-border bg-card/40 p-8 hover:bg-card/70 transition-all duration-300 hover:glow-border"
            >
              <span className="text-[10px] font-mono text-primary/70 tracking-widest mb-4 block">
                {feature.tag}
              </span>
              <feature.icon className="h-8 w-8 text-primary mb-4" />
              <h3 className="text-lg font-semibold text-foreground mb-2">{feature.title}</h3>
              <p className="text-sm text-muted-foreground leading-relaxed">{feature.description}</p>
            </motion.div>
          ))}
        </motion.div>
      </div>
    </section>
  );
};

export default FeaturesSection;
