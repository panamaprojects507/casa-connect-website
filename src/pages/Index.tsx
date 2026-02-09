import { Shield, MessageSquare, Users, Lock } from "lucide-react";
import { motion, useScroll, useTransform } from "framer-motion";
import { useRef } from "react";
import heroGraphic from "@/assets/hero-graphic.png";
const fadeUp = {
  hidden: {
    opacity: 0,
    y: 24
  },
  visible: (i: number) => ({
    opacity: 1,
    y: 0,
    transition: {
      delay: i * 0.12,
      duration: 0.5,
      ease: "easeOut" as const
    }
  })
};
const features = [{
  icon: MessageSquare,
  title: "Business Messaging",
  description: "Connect your WhatsApp Business account and manage customer communication through a unified platform."
}, {
  icon: Shield,
  title: "Official Integration",
  description: "Businesses connect using Meta's official onboarding process, ensuring compliance and security at every step."
}, {
  icon: Users,
  title: "Conversation Management",
  description: "Send and receive messages, manage conversations, and handle customer support — all in one place."
}, {
  icon: Lock,
  title: "Full Data Ownership",
  description: "Each business retains complete ownership and control of its WhatsApp account and data at all times."
}];
const Index = () => {
  const heroRef = useRef<HTMLElement>(null);
  const { scrollYProgress } = useScroll({
    target: heroRef,
    offset: ["start start", "end start"]
  });
  const imageY = useTransform(scrollYProgress, [0, 1], ["0%", "30%"]);
  const imageScale = useTransform(scrollYProgress, [0, 1], [1, 1.1]);

  return <div className="min-h-screen flex flex-col">
      {/* Header */}
      <header className="fixed top-0 inset-x-0 z-50 glass-card">
        <div className="container mx-auto flex items-center justify-between px-6 py-4">
          <span className="font-bold tracking-tight text-foreground text-5xl font-serif">
            Casa Colon<span className="text-primary text-3xl"> Business Communication Platform</span>
          </span>
          <span className="text-sm text-muted-foreground hidden sm:inline">
            casacolonpty.com
          </span>
        </div>
      </header>

      {/* Hero */}
      <section ref={heroRef} className="relative hero-gradient overflow-hidden pt-20">
        {/* Decorative circles */}
        <div className="absolute top-10 left-10 w-72 h-72 rounded-full bg-primary/10 blur-3xl" />
        <div className="absolute bottom-0 right-0 w-96 h-96 rounded-full bg-primary/5 blur-3xl" />

        <div className="container mx-auto px-6 py-20 md:py-28 relative z-10 border-dashed">
          <div className="grid md:grid-cols-2 gap-12 items-center max-w-6xl mx-auto">
            <motion.div initial="hidden" animate="visible" variants={fadeUp} custom={0}>
              <h1 className="font-display text-4xl md:text-5xl lg:text-6xl font-bold tracking-tight text-primary-foreground leading-tight">
                Business WhatsApp Messaging Platform
              </h1>
              <p className="mt-6 text-lg md:text-xl text-primary-foreground/70 leading-relaxed max-w-lg">
                A secure platform that helps businesses communicate with their
                customers using WhatsApp.
              </p>
            </motion.div>

            <motion.div
              style={{ y: imageY, scale: imageScale }}
              className="hidden md:block will-change-transform"
            >
              <img src={heroGraphic} alt="Business messaging platform illustration" className="w-full rounded-2xl shadow-2xl shadow-primary/20" />
            </motion.div>
          </div>
        </div>

        {/* Wave divider */}
        <svg className="absolute bottom-0 left-0 w-full text-background" viewBox="0 0 1440 80" fill="currentColor" preserveAspectRatio="none">
          <path d="M0,40 C360,80 720,0 1080,40 C1260,60 1380,50 1440,40 L1440,80 L0,80 Z" />
        </svg>
      </section>

      {/* Main Content */}
      <main className="flex-1">
        <section className="container mx-auto px-6 py-16 md:py-20 max-w-3xl">
          <motion.div initial="hidden" whileInView="visible" viewport={{
          once: true,
          margin: "-50px"
        }} className="space-y-6">
            {["Casa Colon provides a business messaging platform that allows companies to connect their WhatsApp Business accounts and manage customer communication through software.", "Businesses can connect their existing WhatsApp Business account using Meta's official onboarding process and use the platform to send and receive messages, manage conversations, and handle customer support.", "Each business retains full ownership and control of its WhatsApp account and data. Platform access is granted only after the business authorizes the connection.", "The platform is designed for business communication and customer support."].map((text, i) => <motion.p key={i} custom={i} variants={fadeUp} className="text-base md:text-lg leading-relaxed text-muted-foreground">
                {text}
              </motion.p>)}
          </motion.div>
        </section>

        {/* Features */}
        <section className="relative overflow-hidden">
          {/* Background pattern */}
          <div className="absolute inset-0 bg-accent/40" />
          <div className="absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 w-[600px] h-[600px] rounded-full bg-primary/5 blur-3xl" />

          <div className="container mx-auto px-6 py-16 md:py-24 relative z-10">
            <motion.h2 initial={{
            opacity: 0,
            y: 16
          }} whileInView={{
            opacity: 1,
            y: 0
          }} viewport={{
            once: true
          }} className="font-display text-2xl md:text-3xl font-bold text-center text-foreground mb-12">
              Platform Capabilities
            </motion.h2>
            <div className="grid grid-cols-1 sm:grid-cols-2 gap-6 max-w-4xl mx-auto">
              {features.map((f, i) => <motion.div key={f.title} custom={i} initial="hidden" whileInView="visible" viewport={{
              once: true,
              margin: "-30px"
            }} variants={fadeUp} className="glass-card rounded-xl p-6 space-y-3 hover:shadow-lg hover:shadow-primary/5 transition-shadow duration-300">
                  <div className="inline-flex items-center justify-center w-11 h-11 rounded-lg bg-primary/10 text-primary">
                    <f.icon className="w-5 h-5" />
                  </div>
                  <h3 className="font-semibold text-foreground text-lg">
                    {f.title}
                  </h3>
                  <p className="text-sm text-muted-foreground leading-relaxed">
                    {f.description}
                  </p>
                </motion.div>)}
            </div>
          </div>
        </section>
      </main>

      {/* Footer */}
      <footer className="border-t bg-card">
        <div className="container mx-auto px-6 py-8 text-center text-sm text-muted-foreground">
          © Casa Colon Pty. All rights reserved.
        </div>
      </footer>
    </div>;
};
export default Index;