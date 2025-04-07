
const About = () => {
  return (
    <section id="about" className="py-24 bg-accent dark:bg-accent/5">
      <div className="container mx-auto px-6 md:px-8">
        <div className="max-w-3xl mx-auto text-center mb-16">
          <span className="inline-block py-1 px-3 rounded-full bg-primary/10 text-primary text-xs md:text-sm font-semibold mb-6 animate-fade-in">
            Our Mission
          </span>
          <h2 className="text-3xl md:text-4xl font-bold mb-6 animate-fade-in animate-delay-100 text-balance">
            A people-first approach to AI optimization
          </h2>
          <p className="text-muted-foreground text-lg animate-fade-in animate-delay-200 text-balance">
            We believe that the biggest opportunity is to provide users with the best AI experience and help as many as possible to get the most out of AI tools.
          </p>
        </div>

        <div className="grid grid-cols-1 lg:grid-cols-2 gap-12 lg:gap-20">
          <div className="bg-white/50 dark:bg-card/50 backdrop-blur-sm p-8 md:p-10 rounded-2xl border border-border/40 animate-fade-in animate-delay-300">
            <h3 className="text-2xl font-bold mb-4">The Problem</h3>
            <p className="text-muted-foreground mb-6">
              AI is representing a major technology shift expected to affect almost every aspect of our work. This transition is already happening at digital-first companies, affecting entire job functions.
            </p>
            <p className="text-muted-foreground mb-6">
              However, AI adoption faces challenges:
            </p>
            <ul className="space-y-3 text-muted-foreground">
              <li className="pl-4 border-l-2 border-primary">
                Many companies are holding off AI adoption due to data security concerns and unclear ROI
              </li>
              <li className="pl-4 border-l-2 border-primary">
                The multitude of models and new releases adds difficulty in knowing which platform(s) to invest in
              </li>
              <li className="pl-4 border-l-2 border-primary">
                People have tried AI platforms but most are not yet adopting it in a major way into their work streams
              </li>
            </ul>
          </div>

          <div className="bg-white/50 dark:bg-card/50 backdrop-blur-sm p-8 md:p-10 rounded-2xl border border-border/40 animate-fade-in animate-delay-400">
            <h3 className="text-2xl font-bold mb-4">Our Solution</h3>
            <p className="text-muted-foreground mb-6">
              IntelliOptima is a centralized platform that enables companies and organizations to manage all of their AI use in a secure and easy way.
            </p>
            <p className="text-muted-foreground mb-6">
              In our AI user research, the most advanced users are utilizing all the tools available to optimize their work and save time. They combine multiple AI tools to optimize their tasks and integrate systems to streamline workflows.
            </p>
            <p className="text-muted-foreground">
              However, most users don't reach this level, which requires both technical skills and significant effort. Our platform bridges this gap, making advanced AI usage accessible to everyone in the organization.
            </p>
          </div>
        </div>
      </div>
    </section>
  );
};

export default About;
