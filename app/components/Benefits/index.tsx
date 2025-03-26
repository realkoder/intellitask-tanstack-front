import { Check } from 'lucide-react';

const Benefits = () => {
  const businessBenefits = [
    'Reduce AI tool management costs by up to 40%',
    'Improve security and compliance across all AI usage',
    'Increase AI adoption rates among employees',
    'Enable knowledge sharing between teams',
    'Reduce onboarding time for new AI tools',
    'Streamline approval and access management'
  ];

  const individualBenefits = [
    'Access multiple AI tools through one interface',
    'Learn AI best practices from power users',
    'Simplify collaboration with AI-generated content',
    'No more context switching between tools',
    'Clear security guidelines for all AI usage',
    'Save time with integrated workflows'
  ];

  return (
    <section id="benefits" className="py-24 overflow-hidden">
      <div className="container mx-auto px-6 md:px-8">
        <div className="max-w-3xl mx-auto text-center mb-16">
          <span className="inline-block py-1 px-3 rounded-full bg-primary/10 text-primary text-xs md:text-sm font-semibold mb-6 animate-fade-in">
            Benefits
          </span>
          <h2 className="text-3xl md:text-4xl font-bold mb-6 animate-fade-in animate-delay-100 text-balance">
            Transform how your organization uses AI
          </h2>
          <p className="text-muted-foreground text-lg animate-fade-in animate-delay-200 text-balance">
            IntelliOptima delivers tangible benefits for both organizations and individual employees.
          </p>
        </div>

        <div className="grid grid-cols-1 lg:grid-cols-2 gap-12 lg:gap-20">
          <div className="order-2 lg:order-1 flex flex-col justify-center animate-fade-in animate-delay-300">
            <h3 className="text-2xl font-bold mb-6">For Organizations</h3>
            <ul className="space-y-4">
              {businessBenefits.map((benefit, index) => (
                <li key={index} className="flex items-start gap-3">
                  <div className="mt-1 p-1 rounded-full bg-primary/10 text-primary flex-shrink-0">
                    <Check size={16} />
                  </div>
                  <span>{benefit}</span>
                </li>
              ))}
            </ul>
          </div>

          <div className="order-1 lg:order-2 rounded-2xl overflow-hidden h-80 lg:h-auto animate-fade-in animate-delay-200">
            <div className="w-full h-full bg-gradient-to-br from-primary/20 to-accent-foreground/20 p-8 glass-card">
              <div className="bg-white/10 backdrop-blur-md rounded-xl p-4 h-full flex flex-col">
                <div className="h-10 bg-white/10 rounded-md mb-4"></div>
                <div className="flex-1 grid grid-cols-2 gap-4">
                  <div className="space-y-3">
                    <div className="h-20 bg-white/10 rounded-md"></div>
                    <div className="h-20 bg-white/10 rounded-md"></div>
                    <div className="h-20 bg-white/10 rounded-md"></div>
                  </div>
                  <div className="space-y-3">
                    <div className="h-32 bg-white/10 rounded-md"></div>
                    <div className="h-32 bg-white/10 rounded-md"></div>
                  </div>
                </div>
              </div>
            </div>
          </div>

          <div className="order-3 rounded-2xl overflow-hidden h-80 lg:h-auto animate-fade-in animate-delay-400">
            <div className="w-full h-full bg-gradient-to-br from-accent-foreground/20 to-primary/20 p-8 glass-card">
              <div className="bg-white/10 backdrop-blur-md rounded-xl p-4 h-full flex flex-col">
                <div className="h-10 bg-white/10 rounded-md mb-4"></div>
                <div className="flex-1 space-y-3">
                  <div className="h-16 bg-white/10 rounded-md"></div>
                  <div className="grid grid-cols-3 gap-3">
                    <div className="h-20 bg-white/10 rounded-md"></div>
                    <div className="h-20 bg-white/10 rounded-md"></div>
                    <div className="h-20 bg-white/10 rounded-md"></div>
                  </div>
                  <div className="h-16 bg-white/10 rounded-md"></div>
                </div>
              </div>
            </div>
          </div>

          <div className="order-4 flex flex-col justify-center animate-fade-in animate-delay-500">
            <h3 className="text-2xl font-bold mb-6">For Employees</h3>
            <ul className="space-y-4">
              {individualBenefits.map((benefit, index) => (
                <li key={index} className="flex items-start gap-3">
                  <div className="mt-1 p-1 rounded-full bg-primary/10 text-primary flex-shrink-0">
                    <Check size={16} />
                  </div>
                  <span>{benefit}</span>
                </li>
              ))}
            </ul>
          </div>
        </div>
      </div>
    </section>
  );
};

export default Benefits;
