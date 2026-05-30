import { Link } from "wouter";
import { Button } from "@/components/ui/button";
import Header from "@/components/Header";
import Footer from "@/components/Footer";
import Hero from "@/components/Hero";
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
      {/* <Header /> */}

      <main className="flex-1">
        <Hero />

        {/* Featured Sections remain the same but with improved styling */}
        <section className="py-20 bg-white">
          <div className="container mx-auto px-4">
            <div className="grid grid-cols-1 md:grid-cols-3 gap-12">
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
                    className="group"
                  >
                    <div className="mb-6 inline-block p-4 bg-gray-50 rounded-sm group-hover:bg-primary/5 transition-colors">
                      <Icon className="w-8 h-8 text-primary" />
                    </div>
                    <h3 className="font-display font-bold text-2xl mb-3 tracking-tight">{feature.title}</h3>
                    <p className="text-gray-600 leading-relaxed">{feature.description}</p>
                  </motion.div>
                );
              })}
            </div>
          </div>
        </section>

        {/* Product Grid Section */}
        <section className="py-20 bg-gray-50">
          <div className="container mx-auto px-4">
            <motion.div
              initial={{ opacity: 0 }}
              whileInView={{ opacity: 1 }}
              transition={{ duration: 0.6 }}
              viewport={{ once: true }}
              className="flex flex-col md:flex-row md:items-end justify-between mb-12 gap-6"
            >
              <div>
                <span className="text-primary font-bold text-xs tracking-widest uppercase mb-2 block">Our Collection</span>
                <h2 className="font-display font-bold text-5xl tracking-tighter">FEATURED GEAR</h2>
              </div>
              <Link href="/products">
                <a className="text-sm font-bold border-b-2 border-primary pb-1 hover:text-primary transition-colors">VIEW ALL PRODUCTS</a>
              </Link>
            </motion.div>

            <div className="grid grid-cols-1 md:grid-cols-2 gap-10">
              {featuredProducts.map((product, index) => (
                <motion.div
                  key={product.id}
                  initial={{ opacity: 0, y: 20 }}
                  whileInView={{ opacity: 1, y: 0 }}
                  transition={{ duration: 0.6, delay: index * 0.1 }}
                  viewport={{ once: true }}
                  className="bg-white group cursor-pointer"
                >
                  <div className="relative aspect-[4/3] overflow-hidden bg-gray-100">
                    <img
                      src={product.image}
                      alt={product.name}
                      className="w-full h-full object-cover group-hover:scale-105 transition-transform duration-700"
                    />
                    <div className="absolute top-4 left-4">
                      <span className="bg-black text-white text-[10px] font-bold px-3 py-1 uppercase tracking-widest">{product.category}</span>
                    </div>
                  </div>
                  <div className="py-6 flex justify-between items-start">
                    <div>
                      <h3 className="font-display font-bold text-2xl mb-1 group-hover:text-primary transition-colors">{product.name}</h3>
                      <div className="flex items-center gap-4">
                        <span className="text-xl font-bold">{product.price}</span>
                        <span className="text-sm text-gray-400">★ {product.rating}</span>
                      </div>
                    </div>
                    <div className="w-12 h-12 border border-black flex items-center justify-center group-hover:bg-black group-hover:text-white transition-all">
                      <ArrowRight className="w-5 h-5" />
                    </div>
                  </div>
                </motion.div>
              ))}
            </div>
          </div>
        </section>

        {/* Final CTA */}
        <section className="py-24 bg-black text-white relative overflow-hidden">
          <div className="absolute top-0 right-0 w-1/3 h-full bg-primary/10 -skew-x-12 transform translate-x-1/2"></div>
          <div className="container mx-auto px-4 relative z-10">
            <div className="max-w-3xl">
              <h2 className="font-display font-bold text-6xl md:text-7xl tracking-tighter mb-8 uppercase italic">READY TO WIN?</h2>
              <p className="text-xl text-gray-400 mb-10 max-w-xl">
                Join thousands of athletes who trust RXN Sports for their training and competition gear.
              </p>
              <Link href="/contact">
                <a className="bg-primary hover:bg-red-700 text-white font-bold px-12 py-5 transition-all duration-300 hover:scale-105 inline-flex items-center gap-3 rounded-sm text-sm tracking-widest uppercase">
                  GET IN TOUCH <ArrowRight className="w-5 h-5" />
                </a>
              </Link>
            </div>
          </div>
        </section>
      </main>

      <Footer />
    </div>
  );
}
