import { Button } from '@/components/ui/button';
import { Calendar } from 'lucide-react';

const Contact = () => {
  return (
    <section id="contact" className="py-24 bg-accent dark:bg-accent/5">
      <div className="container mx-auto px-6 md:px-8">
        <div className="max-w-3xl mx-auto text-center mb-16">
          <span className="inline-block py-1 px-3 rounded-full bg-primary/10 text-primary text-xs md:text-sm font-semibold mb-6 animate-fade-in">
            Get In Touch
          </span>
          <h2 className="text-3xl md:text-4xl font-bold mb-6 animate-fade-in animate-delay-100 text-balance">
            Let's discuss how IntelliOptima can work for your organization
          </h2>
          <p className="text-muted-foreground text-lg animate-fade-in animate-delay-200 text-balance mb-12">
            Have questions or ready to get started? Our team is here to help you optimize your AI experience.
          </p>

          <div className="flex justify-center animate-fade-in animate-delay-300">
            <Button size="lg" className="rounded-full flex items-center gap-2 hover:cursor-pointer" onClick={() => window.open('https://calendly.com/intellioptima', '_blank')}>
              <Calendar size={20} />
              Schedule a Meeting
            </Button>
          </div>
        </div>
      </div>
    </section>
  );
};

export default Contact;
