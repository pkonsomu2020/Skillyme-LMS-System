import React from 'react';
import { Link } from 'react-router-dom';
import { Button } from '@/components/ui/button';
import { ArrowRight, LogIn } from 'lucide-react';

export default function Landing() {
  return (
    <div className="min-h-screen city-bg flex flex-col justify-center items-center px-6 py-20 relative">
      <div className="!absolute top-8 left-8 flex items-center gap-3">
        <div className="w-10 h-10 bg-[#3730A3] rounded-lg flex items-center justify-center shadow-md">
          <span className="text-white font-bold text-lg font-heading">S</span>
        </div>
        <div>
          <p className="text-white font-semibold text-sm tracking-wide">Skillyme Africa</p>
          <p className="text-[#F59E0B] text-[10px] uppercase tracking-widest font-semibold">Cohort 2</p>
        </div>
      </div>
      


      <div className="max-w-3xl w-full text-center z-10 animate-fade-in mt-16">
        <div className="inline-block mb-6 px-4 py-1.5 rounded-full bg-primary/10 border border-primary/20 backdrop-blur-sm">
          <p className="text-primary text-xs font-semibold uppercase tracking-widest">
            Cohort 2 · Build Track
          </p>
        </div>
        
        <h1 className="font-heading text-5xl md:text-7xl text-white leading-tight mb-6">
          Build something<br />
          <span className="text-primary glow-text">that matters.</span>
        </h1>
        
        <p className="text-ink-muted text-lg md:text-xl max-w-2xl mx-auto leading-relaxed mb-12">
          A six-week, outcome-based accelerator for early-stage builders.
          Ship a validated MVP, acquire your first paying client, and keep 100% of your equity.
        </p>
        
        <div className="flex flex-col sm:flex-row items-center justify-center gap-4">
          <Link to="/apply">
            <Button className="bg-primary text-surface font-semibold hover:bg-primary-dark transition-colors text-base px-8 py-6 h-auto flex items-center gap-2 glow-teal">
              Apply to Cohort 2 <ArrowRight size={18} />
            </Button>
          </Link>
          <Link to="/login">
            <Button variant="outline" className="border-white/20 text-white !bg-transparent hover:!bg-white/10 transition-colors text-base px-8 py-6 h-auto">
              Login to Dashboard
            </Button>
          </Link>
        </div>

        <div className="mt-16 pt-10 border-t border-white/10 grid grid-cols-1 md:grid-cols-3 gap-8 text-left max-w-4xl mx-auto">
          <div>
            <div className="w-10 h-10 rounded-full bg-primary/10 flex items-center justify-center mb-4">
              <span className="text-primary font-bold">01</span>
            </div>
            <p className="text-white font-semibold text-lg mb-2 font-sans">Outcome-based</p>
            <p className="text-ink-muted text-sm">Teams are judged on real traction and shipped products, not just pitch decks.</p>
          </div>
          <div>
            <div className="w-10 h-10 rounded-full bg-primary/10 flex items-center justify-center mb-4">
              <span className="text-primary font-bold">02</span>
            </div>
            <p className="text-white font-semibold text-lg mb-2 font-sans">You keep 100% IP</p>
            <p className="text-ink-muted text-sm">Skillyme takes absolutely zero equity and no intellectual property.</p>
          </div>
          <div>
            <div className="w-10 h-10 rounded-full bg-primary/10 flex items-center justify-center mb-4">
              <span className="text-primary font-bold">03</span>
            </div>
            <p className="text-white font-semibold text-lg mb-2 font-sans">Led by operators</p>
            <p className="text-ink-muted text-sm">Learn directly from mentors and facilitators who are actively building companies.</p>
          </div>
        </div>
      </div>
      
      <div className="mt-12 text-white/30 text-[10px] uppercase tracking-[0.2em] z-10 w-full text-center">
        Applications close 17 June 2026
      </div>
    </div>
  );
}
