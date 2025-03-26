import React from 'react';
import { motion } from 'framer-motion';

// Seeded random number generator for consistent results
class SeededRandom {
  private seed: number;

  constructor(seed = 12345) {
    this.seed = seed;
  }

  next(): number {
    const x = Math.sin(this.seed++) * 10000;
    return x - Math.floor(x);
  }

  nextInRange(min: number, max: number): number {
    return min + this.next() * (max - min);
  }
}

interface ParticleFieldProps {
  count?: number;
  className?: string;
  seed?: number;
}

const ParticleField: React.FC<ParticleFieldProps> = ({
  count = 20,
  className = '',
  seed = 12345,
}) => {
  // Generate particles deterministically
  const particles = React.useMemo(() => {
    const rng = new SeededRandom(seed);
    return Array.from({ length: count }).map((_, i) => {
      // Format position values with consistent precision
      const x = rng.next() * 100;
      const y = rng.next() * 100;

      return {
        id: i,
        // Convert to string with fixed precision to ensure consistent rendering
        x: x.toFixed(4),
        y: y.toFixed(4),
        duration: (3 + rng.next() * 2).toFixed(2),
        delay: (rng.next() * 5).toFixed(2),
      };
    });
  }, [count, seed]);

  return (
    <div className={`absolute inset-0 ${className}`}>
      {particles.map((particle) => (
        <motion.div
          key={particle.id}
          className="absolute"
          style={{
            left: `${particle.x}%`,
            top: `${particle.y}%`,
          }}
          animate={{
            opacity: [0, 1, 0],
            scale: [0, 1.5, 0],
          }}
          transition={{
            duration: parseFloat(particle.duration),
            repeat: Infinity,
            repeatType: 'loop',
            delay: parseFloat(particle.delay),
            ease: 'easeInOut',
          }}
        >
          <div
            className="absolute w-1 h-1 bg-primary rounded-full"
            style={{
              left: `${particle.x}%`,
              top: `${particle.y}%`,
            }}
          />
        </motion.div>
      ))}
    </div>
  );
};

export default ParticleField;
