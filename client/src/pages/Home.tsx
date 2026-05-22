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
        <section className="relative overflow-hidden bg-black text-white py-20 md:py-32">
          <div
            className="absolute inset-0 opacity-10"
            style={{
              backgroundImage:
                "linear-gradient(135deg, transparent 48%, #E63946 48%, #E63946 52%, transparent 52%)",
            }}
          ></div>

          <div className="container mx-auto px-4 relative z-10">
            <div className="grid grid-cols-1 md:grid-cols-2 gap-12 items-center">
              <motion.div
                variants={containerVariants}
                initial="hidden"
                animate="visible"
                className="space-y-6"
              >
                <motion.div variants={itemVariants}>
                  <div className="inline-block bg-primary px-4 py-2 mb-4">
                    <span className="text-white font-bold text-sm tracking-wider">SINCE 1972</span>
                  </div>
                </motion.div>

                <motion.h1
                  variants={itemVariants}
                  className="text-5xl md:text-7xl font-display font-bold leading-tight"
                >
                  WEAPON TO WIN
                </motion.h1>

                <motion.p
                  variants={itemVariants}
                  className="text-lg text-gray-300 max-w-md leading-relaxed"
                >
                  Manufacturing excellence in boxing and weightlifting gear. Built for champions, trusted by athletes across India.
                </motion.p>

                <motion.div variants={itemVariants} className="flex gap-4 pt-4">
                  <Button
                    asChild
                    className="bg-primary hover:bg-red-700 text-white font-bold px-8 py-3 transition-all duration-200 hover:scale-105 active:scale-95"
                  >
                    <Link href="/products">
                      <a className="flex items-center gap-2">
                        SHOP NOW <ArrowRight className="w-5 h-5" />
                      </a>
                    </Link>
                  </Button>
                  <Button
                    asChild
                    variant="outline"
                    className="border-2 border-white text-white hover:bg-white hover:text-black font-bold px-8 py-3 transition-all duration-200"
                  >
                    <Link href="/about">
                      <a>LEARN MORE</a>
                    </Link>
                  </Button>
                </motion.div>
              </motion.div>

              <motion.div
                initial={{ opacity: 0, scale: 0.9 }}
                animate={{ opacity: 1, scale: 1 }}
                transition={{ duration: 0.8, delay: 0.3 }}
                className="relative"
              >
                <img
                  src="https://d2xsxph8kpxj0f.cloudfront.net/310519663686172445/gNHmU25WyEsKDHgdDpTPAw/hero-boxing-jsgsqzdGYwqmPN7vnNS4Qh.webp"
                  alt="Boxer in action"
                  className="w-full h-auto rounded-sm shadow-2xl"
                />
                <div className="absolute inset-0 border-2 border-primary rounded-sm"></div>
              </motion.div>
            </div>
          </div>
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
                    <Button
                      asChild
                      className="w-full bg-primary hover:bg-red-700 text-white font-bold transition-all duration-200"
                    >
                      <Link href="/products">
                        <a>VIEW DETAILS</a>
                      </Link>
                    </Button>
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
              <Button
                asChild
                className="bg-black hover:bg-gray-900 text-white font-bold px-8 py-3 transition-all duration-200"
              >
                <Link href="/products">
                  <a className="flex items-center gap-2">
                    EXPLORE ALL PRODUCTS <ArrowRight className="w-5 h-5" />
                  </a>
                </Link>
              </Button>
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
              <Button
                asChild
                className="bg-primary hover:bg-red-700 text-white font-bold px-8 py-3 transition-all duration-200 hover:scale-105 active:scale-95"
              >
                <Link href="/contact">
                  <a className="inline-flex items-center gap-2">
                    GET IN TOUCH <ArrowRight className="w-5 h-5" />
                  </a>
                </Link>
              </Button>
            </motion.div>
          </div>
        </section>
      </main>

      <Footer />
    </div>
  );
}
