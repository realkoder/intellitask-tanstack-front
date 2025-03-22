import { Button } from '@/components/ui/button';
import { CheckCircle, ArrowRight, Sparkles } from 'lucide-react';
import { motion } from 'framer-motion';

const benefits = [
  'Access to multiple AI models',
  'Real-time team collaboration',
  'Unlimited projects',
  'Priority support',
  'Custom integrations',
];

const CallToAction = () => {
  const containerVariants = {
    hidden: { opacity: 0 },
    visible: {
      opacity: 1,
      transition: {
        staggerChildren: 0.1,
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
    <section id="pricing" className="section relative overflow-hidden">
      {/* Background Elements */}
      <div className="absolute inset-0 -z-10 bg-[linear-gradient(to_bottom,transparent_0%,rgba(224,231,255,0.2)_50%,transparent_100%)]"></div>
      <div className="absolute top-0 left-0 right-0 h-px bg-gradient-to-r from-transparent via-primary/20 to-transparent"></div>
      <div className="absolute bottom-0 left-0 right-0 h-px bg-gradient-to-r from-transparent via-primary/20 to-transparent"></div>

      {/* Decorative Elements */}
      <div className="absolute -right-40 top-40 w-80 h-80 bg-primary/5 rounded-full blur-3xl"></div>
      <div className="absolute -left-40 bottom-40 w-80 h-80 bg-blue-300/5 rounded-full blur-3xl"></div>

      <div className="container mx-auto px-6 relative z-10">
        <motion.div
          className="max-w-5xl mx-auto glass-card rounded-2xl overflow-hidden shadow-lg border border-white/10"
          initial={{ opacity: 0, y: 40 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true, margin: '-100px' }}
          transition={{ duration: 0.6 }}
        >
          <div className="grid grid-cols-1 md:grid-cols-2">
            {/* Content */}
            <motion.div
              className="p-8 md:p-12"
              variants={containerVariants}
              initial="hidden"
              whileInView="visible"
              viewport={{ once: true }}
            >
              <motion.h2 className="text-3xl font-bold mb-6" variants={itemVariants}>
                Ready to transform your workflow?
              </motion.h2>

              <motion.p className="text-lg mb-8 text-foreground/80" variants={itemVariants}>
                Start collaborating with AI in real-time today. Our platform scales with your team,
                from startups to enterprises.
              </motion.p>

              <motion.ul
                className="space-y-3 mb-8"
                variants={containerVariants}
                initial="hidden"
                whileInView="visible"
                viewport={{ once: true }}
              >
                {benefits.map((benefit, index) => (
                  <motion.li key={index} className="flex items-center" variants={itemVariants}>
                    <CheckCircle className="h-5 w-5 text-primary mr-3 flex-shrink-0" />
                    <span>{benefit}</span>
                  </motion.li>
                ))}
              </motion.ul>

              <motion.div className="flex flex-col sm:flex-row gap-4" variants={itemVariants}>
                <Button size="lg" className="w-full sm:w-auto group relative overflow-hidden">
                  <span className="relative z-10">Get Started</span>
                  <span className="absolute inset-0 bg-gradient-to-r from-primary to-blue-400 opacity-0 group-hover:opacity-100 transition-opacity"></span>
                  <ArrowRight className="ml-2 h-4 w-4 relative z-10 group-hover:translate-x-1 transition-transform" />
                </Button>
                <Button size="lg" variant="outline" className="w-full sm:w-auto group">
                  <span className="bg-gradient-to-r from-primary to-blue-400 bg-clip-text text-transparent opacity-0 group-hover:opacity-100 absolute inset-0 flex items-center justify-center transition-opacity">
                    Contact Sales
                  </span>
                  <span className="group-hover:opacity-0 transition-opacity">Contact Sales</span>
                </Button>
              </motion.div>
            </motion.div>

            {/* Visual Side */}
            <motion.div
              className="bg-gradient-to-br from-primary/5 to-blue-400/5 relative overflow-hidden"
              initial={{ opacity: 0 }}
              whileInView={{ opacity: 1 }}
              viewport={{ once: true }}
              transition={{ delay: 0.3 }}
            >
              <div className="absolute inset-0 animated-gradient opacity-10"></div>

              {/* Animated Particles */}
              <div className="absolute inset-0">
                {[...Array(20)].map((_, i) => (
                  <motion.div
                    key={i}
                    className="absolute w-1 h-1 bg-primary rounded-full"
                    style={{
                      left: `${Math.random() * 100}%`,
                      top: `${Math.random() * 100}%`,
                    }}
                    animate={{
                      opacity: [0, 1, 0],
                      scale: [0, 1.5, 0],
                    }}
                    transition={{
                      duration: 3 + Math.random() * 2,
                      repeat: Infinity,
                      delay: Math.random() * 5,
                    }}
                  />
                ))}
              </div>

              <div className="h-full flex items-center justify-center p-8">
                <motion.div
                  className="relative z-10 text-center"
                  initial={{ scale: 0.8, opacity: 0 }}
                  whileInView={{ scale: 1, opacity: 1 }}
                  viewport={{ once: true }}
                  transition={{ delay: 0.5, type: 'spring' }}
                >
                  <div className="inline-flex items-center justify-center mb-4">
                    <Sparkles className="h-6 w-6 text-primary mr-2" />
                  </div>
                  <div className="text-4xl md:text-5xl font-bold mb-2">
                    <span className="bg-gradient-to-r from-primary to-blue-400 bg-clip-text text-transparent">
                      14-day
                    </span>
                  </div>
                  <div className="text-2xl md:text-3xl font-semibold mb-4">Free Trial</div>
                  <p className="text-foreground/80 max-w-xs mx-auto">
                    No credit card required. Experience the full platform with all features
                    unlocked.
                  </p>

                  <motion.div
                    className="mt-6 inline-block"
                    whileHover={{ scale: 1.05 }}
                    transition={{ type: 'spring', stiffness: 400, damping: 10 }}
                  >
                    <Button
                      size="lg"
                      className="bg-gradient-to-r from-primary to-blue-400 hover:from-primary/90 hover:to-blue-400/90"
                    >
                      Start Free Trial <ArrowRight className="ml-2 h-4 w-4" />
                    </Button>
                  </motion.div>
                </motion.div>
              </div>
            </motion.div>
          </div>
        </motion.div>
      </div>
    </section>
  );
};

export default CallToAction;
