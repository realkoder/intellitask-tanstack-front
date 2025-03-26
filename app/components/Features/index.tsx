import { useEffect, useState } from 'react';
import { Brain, Users, Zap, Globe, MessageSquare, Lock, Star, Database } from 'lucide-react';
import { motion, useReducedMotion } from 'framer-motion';

// Helper to detect Safari browser
const isSafari = () => {
  if (typeof navigator === 'undefined') return false;
  const ua = navigator.userAgent.toLowerCase();
  return ua.indexOf('safari') > -1 && ua.indexOf('chrome') === -1;
};

const features = [
  {
    icon: Brain,
    title: 'Multiple AI Models',
    description:
      'Connect with different AI models simultaneously to leverage their unique capabilities.',
  },
  {
    icon: Users,
    title: 'Real-time Collaboration',
    description: 'Work together with your team and AIs in the same workspace, instantly.',
  },
  {
    icon: Zap,
    title: 'Instant Responses',
    description: 'Get immediate feedback and solutions from AI models without waiting.',
  },
  {
    icon: Globe,
    title: 'AI Collaboration',
    description: 'Share prompts, workflows and AI outputs with your team seamlessly.',
  },
  {
    icon: MessageSquare,
    title: 'Contextual Conversations',
    description: 'AIs remember the context of your conversations for more relevant assistance.',
  },
  {
    icon: Star,
    title: 'Multiprompting',
    description: 'Easily compare different results from a single prompt across multiple AI models.',
  },
  {
    icon: Database,
    title: 'Model Management',
    description: 'Access and manage the best and newest AI models through one subscription.',
  },
  {
    icon: Lock,
    title: 'Enterprise Security',
    description: 'Bank-level encryption and privacy controls keep your data secure.',
  },
];

const Features = () => {
  const prefersReducedMotion = useReducedMotion();
  const [isBrowserSafari, setIsBrowserSafari] = useState(false);

  useEffect(() => {
    // Check if browser is Safari for conditional rendering
    setIsBrowserSafari(isSafari());
  }, []);

  // Simplify animations for Safari or reduced motion preferences
  const shouldOptimize = isBrowserSafari || prefersReducedMotion;

  const containerVariants = {
    hidden: { opacity: 0 },
    visible: {
      opacity: 1,
      transition: {
        staggerChildren: shouldOptimize ? 0.03 : 0.1, // Reduced staggering for Safari
        delayChildren: 0.1,
      },
    },
  };

  const itemVariants = {
    hidden: { y: 20, opacity: 0 },
    visible: {
      y: 0,
      opacity: 1,
      transition: {
        type: shouldOptimize ? 'tween' : 'spring', // Simpler animation type for Safari
        stiffness: 100,
        duration: shouldOptimize ? 0.3 : undefined,
      },
    },
  };

  return (
    <section id="features" className="section bg-muted/30 overflow-hidden relative">
      {/* Reduced background elements for Safari */}
      {!shouldOptimize && (
        <div className="absolute inset-0 -z-10 bg-grid-primary/5 [mask-image:radial-gradient(ellipse_at_center,transparent_20%,black)]"></div>
      )}

      {/* Simplified animated lines for better performance */}
      {!shouldOptimize && (
        <div className="absolute inset-0 overflow-hidden pointer-events-none">
          <div className="absolute left-1/4 top-0 w-px h-full bg-gradient-to-b from-transparent via-primary/10 to-transparent"></div>
          <div className="absolute left-2/4 top-0 w-px h-full bg-gradient-to-b from-transparent via-primary/10 to-transparent"></div>
        </div>
      )}

      <div className="container mx-auto px-6 relative z-10">
        <motion.div
          className="text-center max-w-3xl mx-auto mb-16"
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true, margin: '-50px' }} // Reduced margin for earlier animation trigger
          transition={{ duration: shouldOptimize ? 0.3 : 0.6 }}
        >
          <motion.div
            className="inline-block mb-4 glass-card px-4 py-1.5 rounded-full"
            initial={{ scale: 0.9, opacity: 0 }}
            whileInView={{ scale: 1, opacity: 1 }}
            viewport={{ once: true }}
            transition={{ delay: 0.2 }}
          >
            <span className="text-sm font-medium text-primary">Features</span>
          </motion.div>
          <motion.h2
            className="mb-4"
            initial={{ opacity: 0, y: 10 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ delay: 0.3 }}
          >
            Everything you need to optimize your organization's AI experience
          </motion.h2>
          <motion.p
            className="text-lg text-foreground/80"
            initial={{ opacity: 0, y: 10 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ delay: 0.4 }}
          >
            Our platform simplifies AI adoption for your enterprise, combining powerful tools for security, collaboration and management.
          </motion.p>
        </motion.div>

        <motion.div
          className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-6"
          variants={containerVariants}
          initial="hidden"
          whileInView="visible"
          viewport={{ once: true, margin: '-50px' }} // Reduced margin
        >
          {features.map((feature, index) => (
            <motion.div
              key={index}
              className="feature-card group"
              variants={itemVariants}
              whileHover={shouldOptimize ? {} : { y: -5, transition: { duration: 0.2 } }}
            >
              <div className="rounded-full bg-gradient-to-br from-primary/10 to-primary/20 p-3 w-fit mb-4 transition-colors duration-300">
                <feature.icon className="h-6 w-6 text-primary" />
              </div>
              <h3 className="text-xl font-semibold mb-3 transition-colors duration-300">
                {feature.title}
              </h3>
              <p className="text-foreground/70">{feature.description}</p>
              {/* Simplified hover effect for Safari */}
              {!shouldOptimize && (
                <div className="w-0 group-hover:w-full h-0.5 bg-gradient-to-r from-primary/60 to-transparent mt-4 transition-all duration-300"></div>
              )}
            </motion.div>
          ))}
        </motion.div>
      </div>
    </section>
  );
};

export default Features;
