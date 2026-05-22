import { Link } from "wouter";
import { Button } from "@/components/ui/button";
import Header from "@/components/Header";
import Footer from "@/components/Footer";
import { motion } from "framer-motion";
import { ArrowRight, Award, Users, Zap } from "lucide-react";

export default function About() {
  const milestones = [
    {
      year: "1972",
      title: "Founded",
      description: "Manufacturing excellence begins in India",
    },
    {
      year: "2000s",
      title: "Expansion",
      description: "Became official distributor of Green Hill & Sting",
    },
    {
      year: "2020s",
      title: "Innovation",
      description: "Digital transformation and global reach",
    },
    {
      year: "2024",
      title: "Leadership",
      description: "Trusted by thousands of athletes worldwide",
    },
  ];

  const values = [
    {
      icon: Award,
      title: "EXCELLENCE",
      description:
        "We commit to the highest standards in product quality and performance.",
    },
    {
      icon: Users,
      title: "COMMUNITY",
      description:
        "We support athletes at all levels, from beginners to champions.",
    },
    {
      icon: Zap,
      title: "INNOVATION",
      description:
        "We continuously improve our products with cutting-edge technology.",
    },
  ];

  return (
    <div className="min-h-screen flex flex-col bg-white">
      <Header />

      <main className="flex-1">
        <section className="bg-black text-white py-12 md:py-16">
          <div className="container mx-auto px-4">
            <motion.div
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.6 }}
            >
              <h1 className="font-display font-bold text-4xl md:text-5xl mb-4">
                ABOUT RXN SPORTS
              </h1>
              <p className="text-gray-300 text-lg max-w-2xl">
                Manufacturing excellence since 1972. Weapon to Win. Crafted in
                Bharat, played worldwide.
              </p>
            </motion.div>
          </div>
        </section>

        <section className="py-16 md:py-24">
          <div className="container mx-auto px-4">
            <div className="grid grid-cols-1 md:grid-cols-2 gap-12 items-center">
              <motion.div
                initial={{ opacity: 0, x: -20 }}
                whileInView={{ opacity: 1, x: 0 }}
                transition={{ duration: 0.6 }}
                viewport={{ once: true }}
                className="space-y-6"
              >
                <div>
                  <h2 className="font-display font-bold text-4xl md:text-5xl mb-4">
                    OUR STORY
                  </h2>
                  <div className="w-20 h-1 bg-primary mb-6"></div>
                </div>

                <p className="text-gray-700 text-lg leading-relaxed">
                  RXN Sports was founded in 1972 with a simple mission: to
                  manufacture the finest sports equipment that empowers athletes
                  to achieve their goals. For over five decades, we have been at
                  the forefront of innovation in boxing and weightlifting gear.
                </p>

                <p className="text-gray-700 text-lg leading-relaxed">
                  From raw materials to fight-ready gear, every product is
                  crafted with precision and passion. We are the official
                  distributor of Green Hill and Sting, bringing world-class
                  equipment to athletes across India.
                </p>

                <Button
                  asChild
                  className="bg-primary hover:bg-red-700 text-white font-bold px-8 py-3 transition-all duration-200 hover:scale-105 active:scale-95"
                >
                  <Link href="/contact">
                    <a className="flex items-center gap-2">
                      GET IN TOUCH <ArrowRight className="w-5 h-5" />
                    </a>
                  </Link>
                </Button>
              </motion.div>

              <motion.div
                initial={{ opacity: 0, scale: 0.9 }}
                whileInView={{ opacity: 1, scale: 1 }}
                transition={{ duration: 0.8 }}
                viewport={{ once: true }}
                className="relative"
              >
                <img
                  src="https://d2xsxph8kpxj0f.cloudfront.net/310519663686172445/gNHmU25WyEsKDHgdDpTPAw/hero-weightlifting-QqRqLaH6uUPHWg3u2RQzLr.webp"
                  alt="Weightlifting athlete"
                  className="w-full h-auto rounded-sm shadow-2xl"
                />
                <div className="absolute inset-0 border-2 border-primary rounded-sm"></div>
              </motion.div>
            </div>
          </div>
        </section>

        <section className="py-16 md:py-24 bg-gray-50">
          <div className="container mx-auto px-4">
            <div className="grid grid-cols-1 md:grid-cols-2 gap-12">
              <motion.div
                initial={{ opacity: 0, y: 20 }}
                whileInView={{ opacity: 1, y: 0 }}
                transition={{ duration: 0.6 }}
                viewport={{ once: true }}
                className="border-2 border-black p-8 hover:border-primary transition-colors duration-300"
              >
                <h3 className="font-display font-bold text-3xl mb-4">
                  OUR MISSION
                </h3>
                <p className="text-gray-700 text-lg leading-relaxed">
                  To manufacture and distribute premium sports equipment that
                  empowers athletes to perform at their best, whether they are
                  training for glory or competing for championships.
                </p>
              </motion.div>

              <motion.div
                initial={{ opacity: 0, y: 20 }}
                whileInView={{ opacity: 1, y: 0 }}
                transition={{ duration: 0.6, delay: 0.1 }}
                viewport={{ once: true }}
                className="border-2 border-black p-8 hover:border-primary transition-colors duration-300"
              >
                <h3 className="font-display font-bold text-3xl mb-4">
                  OUR VISION
                </h3>
                <p className="text-gray-700 text-lg leading-relaxed">
                  To be the most trusted and respected sports equipment brand in
                  India and beyond. Crafted in Bharat, played worldwide.
                </p>
              </motion.div>
            </div>
          </div>
        </section>

        <section className="py-16 md:py-24 bg-white">
          <div className="container mx-auto px-4">
            <motion.div
              initial={{ opacity: 0 }}
              whileInView={{ opacity: 1 }}
              transition={{ duration: 0.6 }}
              viewport={{ once: true }}
              className="mb-12"
            >
              <h2 className="font-display font-bold text-4xl md:text-5xl mb-4">
                CORE VALUES
              </h2>
              <div className="w-20 h-1 bg-primary"></div>
            </motion.div>

            <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
              {values.map((value, index) => {
                const Icon = value.icon;
                return (
                  <motion.div
                    key={index}
                    initial={{ opacity: 0, y: 20 }}
                    whileInView={{ opacity: 1, y: 0 }}
                    transition={{ duration: 0.6, delay: index * 0.1 }}
                    viewport={{ once: true }}
                    className="text-center p-8 border-2 border-black hover:border-primary transition-colors duration-300"
                  >
                    <Icon className="w-16 h-16 text-primary mx-auto mb-4" />
                    <h3 className="font-display font-bold text-2xl mb-3">
                      {value.title}
                    </h3>
                    <p className="text-gray-600 text-base leading-relaxed">
                      {value.description}
                    </p>
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
              <h2 className="font-display font-bold text-4xl md:text-5xl mb-4">
                OUR JOURNEY
              </h2>
              <div className="w-20 h-1 bg-primary"></div>
            </motion.div>

            <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-6">
              {milestones.map((milestone, index) => (
                <motion.div
                  key={index}
                  initial={{ opacity: 0, y: 20 }}
                  whileInView={{ opacity: 1, y: 0 }}
                  transition={{ duration: 0.6, delay: index * 0.1 }}
                  viewport={{ once: true }}
                  className="border-2 border-primary p-6 hover:bg-primary hover:text-black transition-all duration-300"
                >
                  <p className="text-primary hover:text-black font-display font-bold text-3xl mb-2">
                    {milestone.year}
                  </p>
                  <h3 className="font-display font-bold text-xl mb-2">
                    {milestone.title}
                  </h3>
                  <p className="text-gray-300 hover:text-black text-sm">
                    {milestone.description}
                  </p>
                </motion.div>
              ))}
            </div>
          </div>
        </section>
      </main>

      <Footer />
    </div>
  );
}
