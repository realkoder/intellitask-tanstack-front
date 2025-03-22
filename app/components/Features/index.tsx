import { Brain, Users, Zap, Globe, MessageSquare, Clock, Code, Lock } from 'lucide-react';
import { motion } from 'framer-motion';

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
    title: 'Accessible Anywhere',
    description: 'Access your AI workspace from any device, anywhere in the world.',
  },
  {
    icon: MessageSquare,
    title: 'Contextual Conversations',
    description: 'AIs remember the context of your conversations for more relevant assistance.',
  },
  {
    icon: Clock,
    title: '24/7 Availability',
    description: 'Your AI collaborators are always ready to help, regardless of the time.',
  },
  {
    icon: Code,
    title: 'Code Integration',
    description: 'Seamlessly integrate with your existing development workflow and tools.',
  },
  {
    icon: Lock,
    title: 'Enterprise Security',
    description: 'Bank-level encryption and privacy controls keep your data secure.',
  },
];

const Features = () => {
  const containerVariants = {
    hidden: { opacity: 0 },
    visible: {
      opacity: 1,
      transition: {
        staggerChildren: 0.1,
        delayChildren: 0.3,
      },
    },
  };

  const itemVariants = {
    hidden: { y: 20, opacity: 0 },
    visible: {
      y: 0,
      opacity: 1,
      transition: {
        type: 'spring',
        stiffness: 100,
      },
    },
  };

  return (
    <section id="features" className="section bg-muted/30 overflow-hidden relative">
      {/* Background elements */}
      <div className="absolute inset-0 -z-10 bg-grid-primary/5 [mask-image:radial-gradient(ellipse_at_center,transparent_20%,black)]"></div>

      {/* Animated Lines */}
      <div className="absolute inset-0 overflow-hidden pointer-events-none">
        <div className="absolute left-1/4 top-0 w-px h-full bg-gradient-to-b from-transparent via-primary/10 to-transparent"></div>
        <div className="absolute left-2/4 top-0 w-px h-full bg-gradient-to-b from-transparent via-primary/10 to-transparent"></div>
        <div className="absolute left-3/4 top-0 w-px h-full bg-gradient-to-b from-transparent via-primary/10 to-transparent"></div>
      </div>

      <div className="container mx-auto px-6 relative z-10">
        <motion.div
          className="text-center max-w-3xl mx-auto mb-16"
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true, margin: '-100px' }}
          transition={{ duration: 0.6 }}
        >
          <motion.div
            className="inline-block mb-4 glass-card px-4 py-1.5 rounded-full"
            initial={{ scale: 0.9, opacity: 0 }}
            whileInView={{ scale: 1, opacity: 1 }}
            viewport={{ once: true }}
            transition={{ delay: 0.2 }}
          >
            <span className="text-sm font-medium text-primary">Key Capabilities</span>
          </motion.div>
          <motion.h2
            className="mb-4"
            initial={{ opacity: 0, y: 10 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ delay: 0.3 }}
          >
            Transform How You Work With AI
          </motion.h2>
          <motion.p
            className="text-lg text-foreground/80"
            initial={{ opacity: 0, y: 10 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ delay: 0.4 }}
          >
            Our platform brings together multiple AI models in one collaborative workspace, making
            AI more accessible and powerful for teams of all sizes.
          </motion.p>
        </motion.div>

        <motion.div
          className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-6"
          variants={containerVariants}
          initial="hidden"
          whileInView="visible"
          viewport={{ once: true, margin: '-100px' }}
        >
          {features.map((feature, index) => (
            <motion.div
              key={index}
              className="feature-card group"
              variants={itemVariants}
              whileHover={{ y: -10, transition: { duration: 0.2 } }}
            >
              <div className="rounded-full bg-gradient-to-br from-primary/10 to-primary/20 p-3 w-fit mb-4 group-hover:from-primary/20 group-hover:to-primary/30 transition-colors duration-300">
                <feature.icon className="h-6 w-6 text-primary" />
              </div>
              <h3 className="text-xl font-semibold mb-3 group-hover:text-primary transition-colors duration-300">
                {feature.title}
              </h3>
              <p className="text-foreground/70">{feature.description}</p>
              <div className="w-0 group-hover:w-full h-0.5 bg-gradient-to-r from-primary/60 to-transparent mt-4 transition-all duration-300"></div>
            </motion.div>
          ))}
        </motion.div>
      </div>
    </section>
  );
};

export default Features;
