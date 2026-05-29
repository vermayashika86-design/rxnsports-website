import { Link } from "wouter";
import { Button } from "@/components/ui/button";
import Header from "@/components/Header";
import Footer from "@/components/Footer";
import { motion } from "framer-motion";
import { ArrowRight, Zap, Shield, Trophy } from "lucide-react";

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
      transition: { duration: 0.6, ease: "easeOut" },
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

  return (
    <div className="min-h-screen flex flex-col bg-white">
      <Header />

      <main className="flex-1">
        {/* Hero Section - Transcend Dark Layout */}
        <section className="relative overflow-hidden bg-black text-white min-h-screen flex items-center">
          {/* Background gradient overlay */}
          <div className="absolute inset-0 opacity-20">
            <div
              className="absolute inset-0"
              style={{
                backgroundImage:
                  "radial-gradient(circle at 30% 50%, rgba(139, 92, 246, 0.1) 0%, transparent 50%), radial-gradient(circle at 70% 50%, rgba(59, 130, 246, 0.1) 0%, transparent 50%)",
              }}
            ></div>
          </div>

          <div className="container mx-auto px-4 relative z-10">
            <div className="grid grid-cols-1 lg:grid-cols-2 gap-12 items-center">
              {/* Left Content */}
              <motion.div
                variants={containerVariants}
                initial="hidden"
                animate="visible"
                className="space-y-8 order-2 lg:order-1"
              >
                {/* Badge */}
                <motion.div variants={itemVariants}>
                  <div className="inline-block">
                    <span className="text-primary font-bold text-xs tracking-widest uppercase">SINCE 1972</span>
                  </div>
                </motion.div>

                {/* Main Heading */}
                <motion.h1
                  variants={itemVariants}
                  className="text-6xl md:text-7xl lg:text-8xl font-display font-bold leading-tight tracking-tighter"
                >
                  WEAPON TO WIN
                </motion.h1>

                {/* Description */}
                <motion.p
                  variants={itemVariants}
                  className="text-lg text-gray-400 max-w-lg leading-relaxed"
                >
                  Manufacturing excellence in boxing and weightlifting gear. Built for champions, trusted by athletes across India.
                </motion.p>

                {/* CTA Buttons */}
                <motion.div variants={itemVariants} className="flex flex-col sm:flex-row gap-4 pt-6">
                  <Link href="/products">
                    <a className="bg-primary hover:bg-red-700 text-white font-bold px-8 py-4 transition-all duration-200 hover:scale-105 active:scale-95 inline-flex items-center justify-center gap-2 rounded-md">
                      SHOP NOW <ArrowRight className="w-5 h-5" />
                    </a>
                  </Link>
                  <Link href="/about">
                    <a className="border-2 border-primary text-primary hover:bg-primary hover:text-white font-bold px-8 py-4 transition-all duration-200 inline-flex items-center justify-center rounded-md">
                      LEARN MORE
                    </a>
                  </Link>
                </motion.div>

                {/* Bottom Info */}
                <motion.div variants={itemVariants} className="pt-8 border-t border-gray-700">
                  <p className="text-sm text-gray-500 uppercase tracking-widest">Trusted by athletes worldwide</p>
                </motion.div>
              </motion.div>

              {/* Right Video Section */}
              <motion.div
                initial={{ opacity: 0, scale: 0.95 }}
                animate={{ opacity: 1, scale: 1 }}
                transition={{ duration: 0.8, delay: 0.3 }}
                className="relative order-1 lg:order-2 h-96 md:h-full md:min-h-96"
              >
                {/* Video Container with Glow Effect */}
                <div className="relative w-full h-full rounded-lg overflow-hidden shadow-2xl">
                  {/* Glow background */}
                  <div className="absolute inset-0 bg-gradient-to-br from-purple-500/20 via-blue-500/20 to-transparent rounded-lg blur-2xl opacity-60"></div>
                  
                  {/* Video */}
                  <video
                    autoPlay
                    muted
                    loop
                    className="w-full h-full object-cover rounded-lg"
                  >
                    <source src="/hero-video.mp4" type="video/mp4" />
                    Your browser does not support the video tag.
                  </video>

                  {/* Border accent */}
                  <div className="absolute inset-0 border-2 border-primary/50 rounded-lg pointer-events-none"></div>
                </div>

                {/* Floating accent elements */}
                <motion.div
                  animate={{ y: [0, -10, 0] }}
                  transition={{ duration: 4, repeat: Infinity }}
                  className="absolute -top-4 -right-4 w-24 h-24 bg-primary/10 rounded-full blur-3xl"
                ></motion.div>
                <motion.div
                  animate={{ y: [0, 10, 0] }}
                  transition={{ duration: 5, repeat: Infinity, delay: 0.5 }}
                  className="absolute -bottom-4 -left-4 w-32 h-32 bg-blue-500/10 rounded-full blur-3xl"
                ></motion.div>
              </motion.div>
            </div>
          </div>

          {/* Scroll Indicator */}
          <motion.div
            animate={{ y: [0, 10, 0] }}
            transition={{ duration: 2, repeat: Infinity }}
            className="absolute bottom-8 left-1/2 transform -translate-x-1/2"
          >
            <div className="text-center">
              <p className="text-gray-500 text-xs uppercase tracking-widest mb-2">Scroll to explore</p>
              <div className="w-6 h-10 border-2 border-gray-500 rounded-full flex items-start justify-center p-2">
                <div className="w-1 h-2 bg-gray-500 rounded-full animate-bounce"></div>
              </div>
            </div>
          </motion.div>
        </section>

        <section className="py-16 md:py-24 bg-white">
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
                    className="text-center p-6 border-2 border-black hover:border-primary transition-colors duration-300"
                  >
                    <Icon className="w-12 h-12 text-primary mx-auto mb-4" />
                    <h3 className="font-display font-bold text-xl mb-2">{feature.title}</h3>
                    <p className="text-gray-600 text-sm">{feature.description}</p>
                  </motion.div>
                );
              })}
            </div>
          </div>
        </section>

        <section className="py-16 md:py-24 bg-gray-50">
          <div className="container mx-auto px-4">
            <motion.div
              initial={{ opacity: 0 }}
              whileInView={{ opacity: 1 }}
              transition={{ duration: 0.6 }}
              viewport={{ once: true }}
              className="mb-12"
            >
              <h2 className="font-display font-bold text-4xl md:text-5xl mb-4">FEATURED PRODUCTS</h2>
              <div className="w-20 h-1 bg-primary"></div>
            </motion.div>

            <div className="grid grid-cols-1 md:grid-cols-2 gap-8">
              {featuredProducts.map((product, index) => (
                <motion.div
                  key={product.id}
                  initial={{ opacity: 0, y: 20 }}
                  whileInView={{ opacity: 1, y: 0 }}
                  transition={{ duration: 0.6, delay: index * 0.1 }}
                  viewport={{ once: true }}
                  className="bg-white border-2 border-black hover:border-primary transition-all duration-300 overflow-hidden group"
                >
                  <div className="relative overflow-hidden h-64 md:h-80 bg-gray-200">
                    <img
                      src={product.image}
                      alt={product.name}
                      className="w-full h-full object-cover group-hover:scale-110 transition-transform duration-300"
                    />
                  </div>
                  <div className="p-6">
                    <p className="text-primary font-bold text-sm mb-2">{product.category}</p>
                    <h3 className="font-display font-bold text-xl mb-2 line-clamp-2">{product.name}</h3>
                    <div className="flex items-center justify-between mb-4">
                      <span className="text-2xl font-bold text-black">{product.price}</span>
                      <span className="text-sm text-gray-600">★ {product.rating}</span>
                    </div>
                    <Link href="/products">
                      <a className="block w-full bg-primary hover:bg-red-700 text-white font-bold py-2 px-4 text-center transition-all duration-200 rounded-md">
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
                <a className="bg-black hover:bg-gray-900 text-white font-bold px-8 py-3 transition-all duration-200 inline-flex items-center gap-2 rounded-md">
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
              <p className="text-lg text-gray-300 max-w-2xl mx-auto">
                Join thousands of athletes who trust RXN Sports for their training and competition gear.
              </p>
              <Link href="/contact">
                <a className="bg-primary hover:bg-red-700 text-white font-bold px-8 py-3 transition-all duration-200 hover:scale-105 active:scale-95 inline-flex items-center gap-2 rounded-md">
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
