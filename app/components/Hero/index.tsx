import { useEffect, useRef, useState } from 'react';
import { Button } from '@/components/ui/button';
import { Bot, Braces, Users, Sparkles, Calendar } from 'lucide-react';
import { AnimatePresence, motion } from 'framer-motion';

const words = ["Easily", "Securely", "Efficiently", "Cheaply"];

const Hero = () => {
  const [currentWordIndex, setCurrentWordIndex] = useState(0);
  const [isAnimating, setIsAnimating] = useState(false);
  const flipContainerRef = useRef<HTMLDivElement>(null);
  const heroRef = useRef<HTMLDivElement>(null);

  useEffect(() => {
    const handleMouseMove = (e: MouseEvent) => {
      if (!heroRef.current) return;

      const { clientX, clientY } = e;
      const { left, top, width, height } = heroRef.current.getBoundingClientRect();

      const x = (clientX - left) / width;
      const y = (clientY - top) / height;

      const moveX = (x - 0.5) * 30;
      const moveY = (y - 0.5) * 30;

      heroRef.current.style.setProperty('--move-x', `${moveX}px`);
      heroRef.current.style.setProperty('--move-y', `${moveY}px`);
    };

    document.addEventListener('mousemove', handleMouseMove);
    return () => document.removeEventListener('mousemove', handleMouseMove);
  }, []);



  useEffect(() => {
    const interval = setInterval(() => {
      setIsAnimating(true);
      setCurrentWordIndex((prevIndex) => (prevIndex + 1) % words.length);
      setTimeout(() => {
        setIsAnimating(false);
      }, 1000);
    }, 2000);

    return () => clearInterval(interval);
  }, []);

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

  // Update your flipVariants with these new animations
  const flipVariants = {
    initial: {
      rotateX: -90,
      opacity: 0,
      y: '100%'
    },
    enter: {
      rotateX: 0,
      opacity: 1,
      y: 0,
      transition: {
        type: "spring",
        damping: 15,
        stiffness: 150,
        duration: 0.5
      }
    },
    exit: {
      rotateX: 90,
      opacity: 0,
      y: '-100%',
      transition: {
        duration: 0.4
      }
    }
  };



  return (
    <section
      ref={heroRef}
      className="min-h-screen flex items-center relative overflow-hidden pt-20"
      style={
        {
          '--move-x': '0px',
          '--move-y': '0px',
        } as React.CSSProperties
      }
    >
      {/* Background Elements */}
      <div className="absolute inset-0 -z-10 dot-pattern opacity-30"></div>

      {/* Animated Gradient Blobs */}
      <div
        className="absolute top-1/4 -right-20 w-96 h-96 bg-primary/10 rounded-full blur-3xl"
        style={{
          transform:
            'translateX(calc(var(--move-x) * -0.7)) translateY(calc(var(--move-y) * -0.7))',
        }}
      ></div>
      <div
        className="absolute bottom-1/4 -left-20 w-96 h-96 bg-blue-300/10 rounded-full blur-3xl"
        style={{
          transform: 'translateX(calc(var(--move-x) * 0.7)) translateY(calc(var(--move-y) * 0.7))',
        }}
      ></div>

      {/* Animated Lines */}
      <div className="absolute inset-0 overflow-hidden pointer-events-none">
        <div className="absolute top-1/3 left-0 w-full h-px bg-gradient-to-r from-transparent via-primary/20 to-transparent animate-[pulse_4s_ease-in-out_infinite]"></div>
        <div className="absolute top-2/3 left-0 w-full h-px bg-gradient-to-r from-transparent via-primary/20 to-transparent animate-[pulse_4s_ease-in-out_infinite_0.5s]"></div>
        <div className="absolute top-0 left-1/3 w-px h-full bg-gradient-to-b from-transparent via-primary/20 to-transparent animate-[pulse_4s_ease-in-out_infinite_1s]"></div>
        <div className="absolute top-0 left-2/3 w-px h-full bg-gradient-to-b from-transparent via-primary/20 to-transparent animate-[pulse_4s_ease-in-out_infinite_1.5s]"></div>
      </div>

      <div className="container mx-auto px-6 relative z-10">
        <motion.div
          className="flex flex-col lg:flex-row items-center gap-12"
          variants={containerVariants}
          initial="hidden"
          animate="visible"
        >
          {/* Hero Text Content */}
          <motion.div className="flex-1 text-center lg:text-left" variants={itemVariants}>
            <motion.div
              className="inline-flex items-center mb-4 glass-card px-4 py-1.5 rounded-full"
              variants={itemVariants}
              whileHover={{ scale: 1.05 }}
              transition={{ type: 'spring', stiffness: 400, damping: 10 }}
            >
              <Sparkles className="h-4 w-4 mr-2 text-primary" />
              <span className="text-sm font-medium text-primary">Simplified AI adoption</span>
            </motion.div>

            <motion.h1 className="mb-6 text-4xl md:text-6xl lg:text-7xl font-bold" variants={itemVariants}>
              Access multiple AI models
              <span className="inline-flex ml-2">
                <div className="perspective-3d overflow-hidden h-[1.2em] mr-2 relative">
                  <AnimatePresence mode="wait">
                    <motion.span
                      key={words[currentWordIndex]}
                      className="bg-clip-text text-transparent bg-gradient-to-r from-primary to-blue-400 inline-block pb-2 relative px-2 -mx-2"
                      variants={flipVariants}
                      initial="initial"
                      animate="enter"
                      exit="exit"
                      style={{ transformOrigin: "center center" }}
                    >
                      {words[currentWordIndex]}
                    </motion.span>
                  </AnimatePresence>
                </div>
              </span>
            </motion.h1>

            <motion.p
              className="text-lg mb-8 text-foreground/80 max-w-2xl mx-auto lg:mx-0"
              variants={itemVariants}
            >
              One centralised platform to manage all your AI models, with enterprise-grade security, simple access management, and powerful collaboration features.
            </motion.p>

            <motion.div
              className="flex flex-col sm:flex-row justify-center lg:justify-start gap-4"
              variants={itemVariants}
            >
              <Button size="lg" className="rounded-full flex items-center gap-2 hover:cursor-pointer" onClick={() => window.open('https://calendly.com/intellioptima', '_blank')}>
                <Calendar size={20} />
                Schedule a Meeting
              </Button>
              <a target='__blank' href='https://intellioptima.com/entry'>
                <Button size="lg" variant="outline" className="group hover:cursor-pointer">
                  <span className="">Access Beta</span>
                </Button>
              </a>
            </motion.div>

            {/* <motion.div
              className="mt-10 flex items-center justify-center lg:justify-start gap-6"
              variants={itemVariants}
            >
              <div className="flex -space-x-3">
                {[1, 2, 3, 4].map((i) => (
                  <motion.div
                    key={i}
                    className="w-8 h-8 rounded-full border-2 border-background overflow-hidden"
                    whileHover={{ y: -5 }}
                    transition={{ type: 'spring', stiffness: 300 }}
                  >
                    <div
                      className={`w-full h-full bg-gradient-to-br from-primary/${40 + i * 10} to-blue-400/${30 + i * 10}`}
                    ></div>
                  </motion.div>
                ))}
              </div>
              <div className="text-sm text-foreground/70">
                <span className="font-semibold text-foreground">1,000+</span> companies already
                connected
              </div>
            </motion.div> */}
          </motion.div>

          {/* Hero Visual - Animated Interface Mockup */}
          <motion.div className="flex-1 w-full max-w-xl" variants={itemVariants}>
            <motion.div
              className="relative"
              initial={{ y: 20, opacity: 0 }}
              animate={{ y: 0, opacity: 1 }}
              transition={{ duration: 0.5, delay: 0.2 }}
            >
              <div className="glass-card rounded-xl overflow-hidden shadow-lg border border-white/20 relative">
                {/* Animated Glow Effect */}
                <div className="absolute -inset-1 bg-gradient-to-r from-primary/20 to-blue-400/20 rounded-xl blur opacity-30 group-hover:opacity-100 transition duration-1000 animate-pulse-slow"></div>

                {/* Interface Header */}
                <div className="bg-muted/40 p-4 border-b border-border/50 flex items-center justify-between backdrop-blur-md">
                  <div className="flex items-center gap-3">
                    <motion.div
                      className="w-3 h-3 rounded-full bg-red-400"
                      whileHover={{ scale: 1.2 }}
                    ></motion.div>
                    <motion.div
                      className="w-3 h-3 rounded-full bg-yellow-400"
                      whileHover={{ scale: 1.2 }}
                    ></motion.div>
                    <motion.div
                      className="w-3 h-3 rounded-full bg-green-400"
                      whileHover={{ scale: 1.2 }}
                    ></motion.div>
                  </div>
                  <div className="text-xs font-medium">IntelliOptima</div>
                  <div className="w-10"></div>
                </div>

                {/* Interface Content */}
                <div className="p-6 flex gap-4">
                  {/* Sidebar */}
                  <div className="w-1/4 flex flex-col gap-3">
                    <motion.div
                      className="w-full h-10 bg-secondary rounded-md"
                      initial={{ width: '70%' }}
                      animate={{ width: '100%' }}
                      transition={{
                        repeat: Infinity,
                        repeatType: 'reverse',
                        duration: 2,
                        ease: 'easeInOut',
                      }}
                    ></motion.div>
                    <div className="w-full h-10 bg-secondary/70 rounded-md"></div>
                    <div className="w-full h-10 bg-secondary/70 rounded-md"></div>
                    <div className="w-full h-10 bg-secondary/70 rounded-md"></div>
                    <div className="h-px bg-border my-2"></div>
                    <div className="flex items-center gap-2">
                      <div className="p-1.5 bg-primary/20 rounded-md">
                        <Bot size={16} className="text-primary" />
                      </div>
                      <div className="text-xs">GPT-4o</div>
                    </div>
                    <div className="flex items-center gap-2">
                      <div className="p-1.5 bg-blue-500/20 rounded-md">
                        <Braces size={16} className="text-blue-500" />
                      </div>
                      <div className="text-xs">Sonnet-3.7</div>
                    </div>
                    <div className="flex items-center gap-2">
                      <div className="p-1.5 bg-purple-500/20 rounded-md">
                        <Users size={16} className="text-purple-500" />
                      </div>
                      <div className="text-xs">Team</div>
                    </div>
                  </div>

                  {/* Main Content */}
                  <div className="w-3/4 flex flex-col gap-4">
                    <motion.div
                      className="w-full bg-background rounded-lg p-4 shadow-sm"
                      whileHover={{ y: -5, boxShadow: '0 10px 25px -5px rgba(0, 0, 0, 0.1)' }}
                      transition={{ type: 'spring', stiffness: 300, damping: 20 }}
                    >
                      <div className="h-3 w-3/4 bg-secondary rounded-full"></div>
                      <div className="mt-2 h-2 w-1/2 bg-secondary/70 rounded-full"></div>
                      <div className="mt-1 h-2 w-2/3 bg-secondary/70 rounded-full"></div>
                    </motion.div>
                    <motion.div
                      className="w-full bg-primary/5 rounded-lg p-4 shadow-sm"
                      animate={{
                        boxShadow: [
                          '0 2px 4px rgba(0,0,0,0.05)',
                          '0 4px 8px rgba(0,0,0,0.1)',
                          '0 2px 4px rgba(0,0,0,0.05)',
                        ],
                      }}
                      transition={{ duration: 2, repeat: Infinity }}
                    >
                      <div className="flex justify-between items-start mb-2">
                        <div className="flex items-center gap-2">
                          <div className="p-1 bg-primary/20 rounded-full">
                            <Bot size={14} className="text-primary" />
                          </div>
                          <div className="text-xs font-medium">GPT-4o</div>
                        </div>
                        <div className="text-[10px] text-foreground/50">Just now</div>
                      </div>
                      <motion.div
                        className="h-2 w-0 bg-primary/20 rounded-full"
                        animate={{ width: '100%' }}
                        transition={{ duration: 1.5 }}
                      ></motion.div>
                      <motion.div
                        className="mt-1 h-2 w-0 bg-primary/20 rounded-full"
                        animate={{ width: '100%' }}
                        transition={{ duration: 1.5, delay: 0.2 }}
                      ></motion.div>
                      <motion.div
                        className="mt-1 h-2 w-0 bg-primary/20 rounded-full"
                        animate={{ width: '75%' }}
                        transition={{ duration: 1.5, delay: 0.4 }}
                      ></motion.div>
                    </motion.div>
                    <motion.div
                      className="w-full bg-blue-500/5 rounded-lg p-4 shadow-sm"
                      initial={{ opacity: 0, y: 10 }}
                      animate={{ opacity: 1, y: 0 }}
                      transition={{ delay: 1.2, duration: 0.5 }}
                    >
                      <div className="flex justify-between items-start mb-2">
                        <div className="flex items-center gap-2">
                          <div className="p-1 bg-blue-500/20 rounded-full">
                            <Braces size={14} className="text-blue-500" />
                          </div>
                          <div className="text-xs font-medium">Sonnet-3.7</div>
                        </div>
                        <div className="text-[10px] text-foreground/50">Just now</div>
                      </div>
                      <motion.div
                        className="h-2 w-0 bg-blue-500/20 rounded-full"
                        animate={{ width: '100%' }}
                        transition={{ duration: 1.5, delay: 1.4 }}
                      ></motion.div>
                      <motion.div
                        className="mt-1 h-2 w-0 bg-blue-500/20 rounded-full"
                        animate={{ width: '90%' }}
                        transition={{ duration: 1.5, delay: 1.6 }}
                      ></motion.div>
                      <motion.div
                        className="mt-1 h-2 w-0 bg-blue-500/20 rounded-full"
                        animate={{ width: '60%' }}
                        transition={{ duration: 1.5, delay: 1.8 }}
                      ></motion.div>
                    </motion.div>
                  </div>
                </div>
              </div>
            </motion.div>
          </motion.div>
        </motion.div>
      </div>
    </section>
  );
};

export default Hero;
