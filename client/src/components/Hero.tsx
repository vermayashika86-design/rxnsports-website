import { useEffect, useRef, useState } from "react";
import { motion, AnimatePresence, useScroll, useTransform } from "framer-motion";
import { Link } from "wouter";

const Hero = () => {
  const [phase, setPhase] = useState(1);
  const [isMobile, setIsMobile] = useState(false);
  const [prefersReducedMotion, setPrefersReducedMotion] = useState(false);
  const containerRef = useRef<HTMLDivElement>(null);
  
  useEffect(() => {
    const checkMobile = () => setIsMobile(window.innerWidth < 768);
    const checkMotion = () => setPrefersReducedMotion(window.matchMedia("(prefers-reduced-motion: reduce)").matches);
    
    checkMobile();
    checkMotion();
    
    window.addEventListener("resize", checkMobile);
    return () => window.removeEventListener("resize", checkMobile);
  }, []);

  const { scrollYProgress } = useScroll({
    target: containerRef,
    offset: ["start start", "end start"]
  });

  // Parallax transforms - Disabled for mobile or reduced motion
  const disableParallax = isMobile || prefersReducedMotion;
  
  const bagY = useTransform(scrollYProgress, [0, 1], ["0%", disableParallax ? "0%" : "40%"]);
  const athleteY = useTransform(scrollYProgress, [0, 1], ["0%", disableParallax ? "0%" : "20%"]);
  const wallY = useTransform(scrollYProgress, [0, 1], ["0%", disableParallax ? "0%" : "5%"]);
  const headlineOpacity = useTransform(scrollYProgress, [0, 0.3, 0.4], [1, 1, 0]);
  const headlineY = useTransform(scrollYProgress, [0, 0.4], ["0%", "-10%"]);

  useEffect(() => {
    // Phase 1 to Phase 2 transition after 1.5s
    const timer = setTimeout(() => {
      setPhase(2);
    }, 1500);
    return () => clearTimeout(timer);
  }, []);

  return (
    <div ref={containerRef} className="relative w-full h-[200vh] bg-black overflow-hidden">
      {/* PHASE 1: Load Screen */}
      <AnimatePresence>
        {phase === 1 && (
          <motion.div 
            initial={{ opacity: 1 }}
            exit={{ opacity: 0 }}
            transition={{ duration: 0.5, ease: "easeInOut" }}
            className="fixed inset-0 z-50 flex items-center justify-center bg-black"
          >
            <div className="relative flex items-center justify-center gap-8">
              {[
                { icon: "🥊", delay: 0 },
                { icon: "🏋️", delay: 0.15 },
                { icon: "💪", delay: 0.3 },
                { icon: "🥋", delay: 0.45 }
              ].map((item, i) => (
                <motion.div
                  key={i}
                  animate={{ scale: [0.95, 1.05, 1] }}
                  transition={{ 
                    duration: 1, 
                    repeat: Infinity, 
                    delay: item.delay,
                    ease: "easeInOut" 
                  }}
                  className="text-4xl filter grayscale brightness-200"
                >
                  {item.icon}
                </motion.div>
              ))}
            </div>
          </motion.div>
        )}
      </AnimatePresence>

      {/* PHASE 2 & 3: Hero Content */}
      <div className="sticky top-0 h-screen w-full overflow-hidden bg-[#121212]">
        {/* Layer 1: Wall (Deepest) */}
        <motion.div 
          style={{ y: wallY }}
          className="absolute inset-0 z-0"
        >
          <div 
            className="w-full h-full bg-cover bg-center opacity-40 grayscale"
            style={{ backgroundImage: "url('/images/wall.png')" }}
          />
          {/* Rough concrete texture overlay */}
          <div className="absolute inset-0 bg-black/40 mix-blend-multiply" />
        </motion.div>

        {/* Headline Revealed between Athlete and Bag */}
        <motion.div 
          style={{ opacity: headlineOpacity, y: headlineY }}
          className="absolute inset-0 z-10 flex items-center justify-center pointer-events-none"
        >
          <div className="relative w-[70%] text-center">
            {/* EST. 1972 Badge */}
            <div className="absolute -top-12 left-0 flex items-center gap-2">
              <div className="w-1 h-6 bg-[#E31B23]" />
              <span className="text-[#E31B23] text-[13px] font-bold tracking-[0.3em] uppercase">
                EST. 1972
              </span>
            </div>

            <motion.h1 
              initial={{ clipPath: "inset(0 50% 0 50%)" }}
              animate={phase === 2 ? { clipPath: "inset(0 0% 0 0%)" } : {}}
              transition={{ duration: 0.8, delay: 0.5, ease: "circOut" }}
              className="font-heading text-white text-[12vw] leading-[0.8] m-0 p-0 uppercase whitespace-nowrap tracking-tighter"
              style={{ fontFamily: "'Anton', sans-serif" }}
            >
              WEAPON TO <span className="relative inline-block">
                WIN
                <div className="absolute -bottom-1 left-0 w-full h-[2px] bg-[#E31B23]" />
              </span>
            </motion.h1>

            <motion.p 
              initial={{ opacity: 0, y: 20 }}
              animate={phase === 2 ? { opacity: 1, y: 0 } : {}}
              transition={{ duration: 0.5, delay: 1.2 }}
              className="text-[#D0D0D0] text-[18px] font-light mt-4 tracking-normal text-left font-sans"
              style={{ fontWeight: 300 }}
            >
              Built for champions. Trusted across India.
            </motion.p>

            {/* CTAs */}
            <motion.div 
              initial={{ opacity: 0, y: 20 }}
              animate={phase === 2 ? { opacity: 1, y: 0 } : {}}
              transition={{ duration: 0.5, delay: 1.4 }}
              className="flex gap-4 mt-8"
            >
              <Link href="/products">
                <a className="bg-[#E31B23] text-white px-10 py-4 font-bold uppercase text-sm tracking-widest hover:bg-red-700 transition-colors rounded-none">
                  SHOP NOW
                </a>
              </Link>
              <Link href="/products">
                <a className="border border-white text-white px-10 py-4 font-bold uppercase text-sm tracking-widest hover:bg-white hover:text-black transition-all rounded-none">
                  EXPLORE
                </a>
              </Link>
            </motion.div>
          </div>
        </motion.div>

        {/* Layer 2: Athlete (Mid) */}
        <motion.div 
          style={{ y: athleteY }}
          initial={{ opacity: 0, scale: 1.1 }}
          animate={phase === 2 ? { opacity: 1, scale: 1 } : {}}
          transition={{ duration: 1.2, ease: "easeOut" }}
          className="absolute inset-0 z-20 flex items-center justify-start pl-[10%]"
        >
          <img 
            src="/images/athlete.png" 
            alt="Athlete" 
            className="h-[90%] w-auto object-contain object-left mix-blend-screen opacity-90"
          />
        </motion.div>

        {/* Layer 3: Punching Bag (Foreground) */}
        <motion.div 
          style={{ y: bagY }}
          initial={{ opacity: 0, x: 100 }}
          animate={phase === 2 ? { opacity: 1, x: 0 } : {}}
          transition={{ duration: 1, delay: 0.3, ease: "easeOut" }}
          className="absolute top-[-10%] right-[-5%] z-30 h-[120%]"
        >
          <img 
            src="/images/punching-bag.png" 
            alt="Punching Bag" 
            className="h-full w-auto object-contain"
          />
        </motion.div>

        {/* Red Scan Line */}
        <motion.div 
          animate={{ y: ["0vh", "100vh"] }}
          transition={{ duration: 4, repeat: Infinity, ease: "linear" }}
          className="absolute left-0 w-full h-[1px] bg-[#E31B23] opacity-15 z-40 pointer-events-none"
        />
      </div>

      {/* Navigation - Transparent on Hero */}
      <nav className="fixed top-0 left-0 w-full z-50 px-8 py-6 flex justify-between items-center pointer-events-auto">
        <div className="text-2xl font-display font-bold text-white tracking-tighter">
          <span className="text-[#E31B23]">RXN</span> WORDMARK
        </div>
        <div className="flex gap-8 text-white font-bold text-sm uppercase tracking-widest">
          <Link href="/products">Products</Link>
          <Link href="/about">About</Link>
          <Link href="/contact">Contact</Link>
        </div>
      </nav>
    </div>
  );
};

export default Hero;
