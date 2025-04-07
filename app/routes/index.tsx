import { createFileRoute } from '@tanstack/react-router';
import { useEffect } from 'react';
import Navbar from '../components/NavBar';
import Hero from '../components/Hero';
import Footer from '../components/Footer';
import Features from '../components/Features';
import CallToAction from '../components/CallToAction';
import Benefits from '../components/Benefits';
import About from '../components/About';

export const Route = createFileRoute('/')({
  component: Index,
});

function Index() {
  const { userId } = Route.useRouteContext()
  useEffect(() => {
    // Smooth scroll behavior for anchor links
    const handleAnchorClick = (e: MouseEvent) => {
      const target = e.target as HTMLElement;
      const anchor = target.closest('a');

      if (anchor && anchor.hash && anchor.href.includes(window.location.pathname)) {
        e.preventDefault();
        const targetElement = document.querySelector(anchor.hash);

        if (targetElement) {
          window.scrollTo({
            top: targetElement.getBoundingClientRect().top + window.scrollY - 100,
            behavior: 'smooth',
          });

          // Update URL
          history.pushState(null, '', anchor.hash);
        }
      }
    };

    document.addEventListener('click', handleAnchorClick);
    return () => document.removeEventListener('click', handleAnchorClick);
  }, []);

  return (
    <div className="flex min-h-screen flex-col">
      <Navbar userId={userId} />
      <main className="flex-1">
        <Hero />
        <Features />
        <Benefits />
        <About />
        <CallToAction />
      </main>
      <Footer />
    </div>
  );
}
