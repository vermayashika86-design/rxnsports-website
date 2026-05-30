import { Link } from "wouter";
import Header from "@/components/Header";
import Footer from "@/components/Footer";
import { motion } from "framer-motion";
import { ArrowRight, Zap, Shield, Trophy } from "lucide-react";
import { useEffect, useState } from "react";

export default function Home() {
  const containerVariants = {
    hidden: { opacity: 0 },
    visible: {
      opacity: 1,
      transition: {
        staggerChildren: 0.1,
        delayChildren: 0.2,
      },
    },
  };

  const itemVariants = {
    hidden: { opacity: 0, y: 20 },
    visible: {
      opacity: 1,
      y: 0,
      transition: { duration: 0.6 },
    },
  };

  const featuredProducts = [
    {
      id: 1,
      name: "RXN Hercules Weightlifting Shoes",
      category: "Weightlifting",
      image: "https://d2xsxph8kpxj0f.cloudfront.net/310519663686172445/gNHmU25WyEsKDHgdDpTPAw/product-weightlifting-shoes-QsJboSXGNzKvfTtKNHUTcB.webp",
      price: "₹4,999",
      rating: "4.89",
    },
    {
      id: 2,
      name: "RXN Non-Stop Competition Boxing Gloves",
      category: "Boxing",
      image: "https://d2xsxph8kpxj0f.cloudfront.net/310519663686172445/gNHmU25WyEsKDHgdDpTPAw/product-boxing-gloves-d6Pcrpr3LyDfxEQuzGrkaR.webp",
      price: "₹2,999",
      rating: "4.80",
    },
  ];

  const heroImage = new URL("../../girl .png", import.meta.url).href;

  const headlineVariant = {
    hidden: { opacity: 0, x: -60 },
    visible: { opacity: 1, x: 0, transition: { duration: 0.8 } },
  };

  const subtextVariant = {
    hidden: { opacity: 0, y: 20 },
    visible: { opacity: 1, y: 0, transition: { duration: 0.6, delay: 0.3 } },
  };

  const buttonsVariant = {
    hidden: { opacity: 0, y: 20 },
    visible: { opacity: 1, y: 0, transition: { duration: 0.6, delay: 0.5 } },
  };

  // Hero scroll indicator component (local)
  function HeroScrollIndicator() {
    const [visible, setVisible] = useState(true);
    useEffect(() => {
      const onScroll = () => setVisible(window.scrollY < 100);
      onScroll();
      window.addEventListener('scroll', onScroll, { passive: true });
      return () => window.removeEventListener('scroll', onScroll);
    }, []);

    if (!visible) return null;

    return (
      <div className="absolute bottom-8 left-1/2 transform -translate-x-1/2 z-20">
        <style>{`@keyframes scrollPulse {0%{transform:translateY(0);opacity:1}50%{transform:translateY(6px);opacity:0.6}100%{transform:translateY(0);opacity:1}}`}</style>
        <div className="flex flex-col items-center gap-2">
          <div style={{width:2, height:40, background:'#ffffff', animation: 'scrollPulse 1.6s infinite'}}></div>
          <div className="text-white uppercase" style={{letterSpacing: '0.4em', fontSize: 11}}>SCROLL</div>
        </div>
      </div>
    );
  }

  return (
    <div className="min-h-screen flex flex-col bg-black">
      <Header />

      <main className="flex-1">
        <section className="relative bg-black text-white min-h-screen h-screen" style={{ position: 'relative', minHeight: '100vh', height: '100vh', overflow: 'hidden' }}>
          <div className="absolute inset-0 bg-black" style={{ zIndex: 0 }} />

          <img
            src={heroImage}
            alt="Athlete in action"
            className="absolute"
            style={{
              position: 'absolute',
              inset: 0,
              width: '100%',
              height: '100%',
              objectFit: 'cover',
              objectPosition: '65% center',
              maskImage: 'linear-gradient(to left, black 40%, transparent 100%)',
              WebkitMaskImage: 'linear-gradient(to left, black 40%, transparent 100%)',
              animation: 'kenburns 8s ease-out forwards',
              zIndex: 0,
            }}
          />

          <div
            className="absolute inset-0"
            style={{
              position: 'absolute',
              inset: 0,
              zIndex: 1,
              pointerEvents: 'none',
              background: 'radial-gradient(ellipse at 75% 60%, rgba(212,0,0,0.18) 0%, transparent 55%)',
            }}
          />

          <div
            className="absolute inset-0"
            style={{
              position: 'absolute',
              inset: 0,
              background: 'linear-gradient(105deg, rgba(0,0,0,0.93) 0%, rgba(0,0,0,0.75) 35%, rgba(0,0,0,0.3) 60%, rgba(0,0,0,0.05) 100%)',
              zIndex: 10,
            }}
          />

          <div className="container mx-auto px-4 relative" style={{ zIndex: 30 }}>
              <motion.div
                initial="hidden"
                animate="visible"
                className="space-y-6 max-w-3xl"
              >
                <motion.div
                  initial={{ opacity: 0, y: 20 }}
                  animate={{ opacity: 1, y: 0 }}
                  transition={{ duration: 0.6 }}
                  className="flex items-center gap-3 mb-2"
                >
                  <div
                    style={{
                      width: 32,
                      height: 3,
                      backgroundColor: '#D40000',
                      position: 'relative',
                      overflow: 'hidden',
                    }}
                  >
                    <span
                      style={{
                        position: 'absolute',
                        inset: 0,
                        background:
                          'linear-gradient(90deg, transparent 0%, rgba(255,255,255,0.65) 50%, transparent 100%)',
                        transform: 'translateX(-100%)',
                        animation: 'shimmer 3s ease-in-out infinite',
                      }}
                    />
                  </div>
                  <span className="text-[12px] uppercase" style={{ color: '#D40000', letterSpacing: '0.4em' }}>
                    EST. 1972
                  </span>
                </motion.div>

                <motion.h1
                  initial="hidden"
                  animate="visible"
                  variants={headlineVariant}
                  className="leading-tight font-display font-extrabold"
                  style={{
                    fontFamily: 'Bebas Neue, sans-serif',
                    fontSize: 'clamp(80px, 10vw, 130px)',
                    letterSpacing: '0.04em',
                    lineHeight: 0.95,
                    whiteSpace: 'nowrap',
                    color: '#ffffff',
                  }}
                >
                  WEAPON TO WIN
                </motion.h1>

                <motion.p
                  initial="hidden"
                  animate="visible"
                  variants={subtextVariant}
                  className="text-white leading-relaxed"
                  style={{ fontWeight: 300, fontSize: 18, maxWidth: 480 }}
                >
                  Built for champions. Trusted across India.
                </motion.p>

                <motion.div
                  initial="hidden"
                  animate="visible"
                  variants={buttonsVariant}
                  className="flex flex-wrap gap-5 pt-4"
                >
                  <Link href="/products">
                    <a
                      className="inline-flex items-center justify-center"
                      style={{
                        backgroundColor: '#D40000',
                        color: '#ffffff',
                        padding: '16px 36px',
                        borderRadius: 4,
                        fontWeight: 700,
                        textTransform: 'uppercase',
                        letterSpacing: '0.1em',
                        transition: 'transform 200ms ease, filter 200ms ease',
                      }}
                      onMouseEnter={e => {
                        e.currentTarget.style.filter = 'brightness(1.15)';
                        e.currentTarget.style.transform = 'scale(1.03)';
                      }}
                      onMouseLeave={e => {
                        e.currentTarget.style.filter = 'brightness(1)';
                        e.currentTarget.style.transform = 'scale(1)';
                      }}
                    >
                      SHOP NOW
                      <ArrowRight className="w-5 h-5 ml-3" />
                    </a>
                  </Link>

                  <Link href="/products">
                    <a
                      className="inline-flex items-center justify-center"
                      style={{
                        background: 'transparent',
                        border: '1.5px solid #ffffff',
                        color: '#ffffff',
                        padding: '16px 36px',
                        borderRadius: 4,
                        fontWeight: 700,
                        textTransform: 'uppercase',
                        letterSpacing: '0.1em',
                        transition: 'background-color 200ms ease',
                      }}
                      onMouseEnter={e => {
                        e.currentTarget.style.backgroundColor = 'rgba(255,255,255,0.08)';
                      }}
                      onMouseLeave={e => {
                        e.currentTarget.style.backgroundColor = 'transparent';
                      }}
                    >
                      EXPLORE
                    </a>
                  </Link>
                </motion.div>
              </motion.div>
          </div>

          {/* Scroll indicator */}
          <HeroScrollIndicator />
        </section>

        <section className="py-16 md:py-24 bg-black text-white">
          <div className="container mx-auto px-4">
            <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
              {[
                {
                  icon: Zap,
                  title: "PERFORMANCE",
                  description: "Engineered for maximum power and precision in every movement.",
                },
                {
                  icon: Shield,
                  title: "DURABILITY",
                  description: "Premium materials built to withstand intense training and competition.",
                },
                {
                  icon: Trophy,
                  title: "CHAMPIONSHIP",
                  description: "Trusted by champions and athletes across India since 1972.",
                },
              ].map((feature, index) => {
                const Icon = feature.icon;
                return (
                  <motion.div
                    key={index}
                    initial={{ opacity: 0, y: 20 }}
                    whileInView={{ opacity: 1, y: 0 }}
                    transition={{ duration: 0.6, delay: index * 0.1 }}
                    viewport={{ once: true }}
                      className="text-center p-6 border-2 border-[#660000] hover:border-[#D40000] transition-colors duration-300 bg-black text-white"
                  >
                    <Icon className="w-12 h-12 text-[#D40000] mx-auto mb-4" />
                    <h3 className="font-display font-bold text-xl mb-2">{feature.title}</h3>
                    <p className="text-sm" style={{ color: 'rgba(255,255,255,0.7)' }}>{feature.description}</p>
                  </motion.div>
                );
              })}
            </div>
          </div>
        </section>

        <section className="py-16 md:py-24 bg-black text-white">
          <div className="container mx-auto px-4">
            <motion.div
              initial={{ opacity: 0 }}
              whileInView={{ opacity: 1 }}
              transition={{ duration: 0.6 }}
              viewport={{ once: true }}
              className="mb-12"
            >
              <h2 className="font-display font-bold text-4xl md:text-5xl mb-4 text-white">FEATURED PRODUCTS</h2>
              <div className="w-20 h-1 bg-[#D40000]"></div>
            </motion.div>

            <div className="grid grid-cols-1 md:grid-cols-2 gap-8">
              {featuredProducts.map((product, index) => (
                <motion.div
                  key={product.id}
                  initial={{ opacity: 0, y: 20 }}
                  whileInView={{ opacity: 1, y: 0 }}
                  transition={{ duration: 0.6, delay: index * 0.1 }}
                  viewport={{ once: true }}
                  className="bg-black border-2 border-[#660000] hover:border-[#D40000] transition-all duration-300 overflow-hidden group text-white"
                >
                  <div className="relative overflow-hidden h-64 md:h-80 bg-black">
                    <img
                      src={product.image}
                      alt={product.name}
                      className="w-full h-full object-cover group-hover:scale-110 transition-transform duration-300"
                    />
                  </div>
                  <div className="p-6">
                    <p className="text-[#D40000] font-bold text-sm mb-2">{product.category}</p>
                    <h3 className="font-display font-bold text-xl mb-2 line-clamp-2">{product.name}</h3>
                    <div className="flex items-center justify-between mb-4">
                      <span className="text-2xl font-bold text-white">{product.price}</span>
                      <span className="text-sm" style={{ color: 'rgba(255,255,255,0.7)' }}>★ {product.rating}</span>
                    </div>
                    <Link href="/products">
                      <a className="block w-full bg-[#D40000] hover:bg-[#660000] text-white font-bold py-2 px-4 text-center transition-all duration-200 rounded-md">
                        VIEW DETAILS
                      </a>
                    </Link>
                  </div>
                </motion.div>
              ))}
            </div>

            <motion.div
              initial={{ opacity: 0 }}
              whileInView={{ opacity: 1 }}
              transition={{ duration: 0.6 }}
              viewport={{ once: true }}
              className="text-center mt-12"
            >
              <Link href="/products">
                <a className="bg-black hover:bg-[#660000] text-white font-bold px-8 py-3 transition-all duration-200 inline-flex items-center gap-2 rounded-md">
                  EXPLORE ALL PRODUCTS <ArrowRight className="w-5 h-5" />
                </a>
              </Link>
            </motion.div>
          </div>
        </section>

        <section className="py-16 md:py-24 bg-black text-white">
          <div className="container mx-auto px-4 text-center">
            <motion.div
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.6 }}
              viewport={{ once: true }}
              className="space-y-6"
            >
              <h2 className="font-display font-bold text-4xl md:text-5xl">READY TO WIN?</h2>
              <p className="text-lg max-w-2xl mx-auto" style={{ color: 'rgba(255,255,255,0.7)' }}>
                Join thousands of athletes who trust RXN Sports for their training and competition gear.
              </p>
              <Link href="/contact">
                <a className="bg-[#D40000] hover:bg-[#660000] text-white font-bold px-8 py-3 transition-all duration-200 hover:scale-105 active:scale-95 inline-flex items-center gap-2 rounded-md">
                  GET IN TOUCH <ArrowRight className="w-5 h-5" />
                </a>
              </Link>
            </motion.div>
          </div>
        </section>
      </main>

      <Footer />
    </div>
  );
}
