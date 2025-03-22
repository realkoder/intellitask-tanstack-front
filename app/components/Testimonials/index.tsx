import { useState, useEffect, useRef } from 'react';
import { ChevronLeft, ChevronRight, Star } from 'lucide-react';

const testimonials = [
  {
    id: 1,
    content:
      'This platform has completely transformed how our engineering team collaborates. Having multiple AI models working together with our team has increased our productivity by 40%.',
    author: 'Alex Mercer',
    role: 'CTO, TechFusion',
    rating: 5,
  },
  {
    id: 2,
    content:
      "The real-time collaboration with different AI models gives us insights we never would have discovered on our own. It's like having a team of experts available 24/7.",
    author: 'Sarah Johnson',
    role: 'Product Manager, Innovate Inc',
    rating: 5,
  },
  {
    id: 3,
    content:
      'Our customer service team now resolves tickets 3x faster with the help of the AI collaboration platform. The contextual understanding is impressive.',
    author: 'Michael Chen',
    role: 'Customer Success Director, ServicePro',
    rating: 5,
  },
  {
    id: 4,
    content:
      "As a startup founder, having access to this level of AI collaboration feels like we've hired a team of experts at a fraction of the cost. Game-changing for small teams.",
    author: 'Elena Rodriguez',
    role: 'Founder, NexStep',
    rating: 5,
  },
  {
    id: 5,
    content:
      "The platform's ability to integrate multiple AI models and maintain context across all of them has streamlined our research process significantly.",
    author: 'Dr. James Wilson',
    role: 'Research Lead, BioTech Solutions',
    rating: 5,
  },
];

const Testimonials = () => {
  const [activeIndex, setActiveIndex] = useState(0);
  const [autoplay, setAutoplay] = useState(true);
  const timerRef = useRef<number | null>(null);
  const containerRef = useRef<HTMLDivElement>(null);

  const nextTestimonial = () => {
    setActiveIndex((prev) => (prev === testimonials.length - 1 ? 0 : prev + 1));
  };

  const prevTestimonial = () => {
    setActiveIndex((prev) => (prev === 0 ? testimonials.length - 1 : prev - 1));
  };

  useEffect(() => {
    if (autoplay) {
      timerRef.current = window.setInterval(() => {
        nextTestimonial();
      }, 4000);
    }

    return () => {
      if (timerRef.current) {
        clearInterval(timerRef.current);
      }
    };
  }, [autoplay]);

  const handleMouseEnter = () => setAutoplay(false);
  const handleMouseLeave = () => setAutoplay(true);

  return (
    <section id="testimonials" className="section">
      <div className="container mx-auto px-6">
        <div className="text-center max-w-3xl mx-auto mb-16 animate-fade-in">
          <div className="inline-block mb-4 glass-card px-4 py-1.5 rounded-full">
            <span className="text-sm font-medium text-primary">Testimonials</span>
          </div>
          <h2 className="mb-4">What Our Users Say</h2>
          <p className="text-lg text-foreground/80">
            Discover how organizations are transforming their workflows by collaborating with AI in
            real-time.
          </p>
        </div>

        <div
          ref={containerRef}
          className="relative max-w-4xl mx-auto"
          onMouseEnter={handleMouseEnter}
          onMouseLeave={handleMouseLeave}
        >
          <div className="glass-card rounded-2xl p-8 md:p-12 shadow-md">
            <div className="mb-6 flex">
              {[...Array(5)].map((_, i) => (
                <Star key={i} className="h-5 w-5 text-yellow-400 fill-yellow-400" />
              ))}
            </div>

            <div className="relative h-40">
              {testimonials.map((testimonial, index) => (
                <div
                  key={testimonial.id}
                  className={`absolute inset-0 transition-all duration-500 ease-in-out ${
                    index === activeIndex
                      ? 'opacity-100 translate-x-0'
                      : index < activeIndex
                        ? 'opacity-0 -translate-x-8'
                        : 'opacity-0 translate-x-8'
                  }`}
                >
                  <p className="text-lg md:text-xl font-medium mb-6">"{testimonial.content}"</p>
                  <div className="flex items-center">
                    <div className="w-10 h-10 rounded-full bg-primary/20 flex items-center justify-center text-primary font-semibold">
                      {testimonial.author.charAt(0)}
                    </div>
                    <div className="ml-4">
                      <p className="font-semibold">{testimonial.author}</p>
                      <p className="text-sm text-foreground/70">{testimonial.role}</p>
                    </div>
                  </div>
                </div>
              ))}
            </div>
          </div>

          <div className="absolute -bottom-6 left-1/2 transform -translate-x-1/2 flex space-x-2">
            {testimonials.map((_, index) => (
              <button
                key={index}
                onClick={() => setActiveIndex(index)}
                className={`w-2.5 h-2.5 rounded-full transition-all ${
                  index === activeIndex
                    ? 'bg-primary w-8'
                    : 'bg-foreground/30 hover:bg-foreground/50'
                }`}
                aria-label={`Go to testimonial ${index + 1}`}
              />
            ))}
          </div>

          <button
            onClick={prevTestimonial}
            className="absolute top-1/2 -left-4 transform -translate-y-1/2 w-10 h-10 rounded-full bg-background shadow-md flex items-center justify-center hover:bg-muted transition-colors"
            aria-label="Previous testimonial"
          >
            <ChevronLeft className="h-5 w-5" />
          </button>

          <button
            onClick={nextTestimonial}
            className="absolute top-1/2 -right-4 transform -translate-y-1/2 w-10 h-10 rounded-full bg-background shadow-md flex items-center justify-center hover:bg-muted transition-colors"
            aria-label="Next testimonial"
          >
            <ChevronRight className="h-5 w-5" />
          </button>
        </div>
      </div>
    </section>
  );
};

export default Testimonials;
