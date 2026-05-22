import { useState } from "react";
import { Link } from "wouter";
import { Button } from "@/components/ui/button";
import Header from "@/components/Header";
import Footer from "@/components/Footer";
import { motion } from "framer-motion";
import { Filter } from "lucide-react";

export default function Products() {
  const [selectedCategory, setSelectedCategory] = useState("all");

  const categories = [
    { id: "all", name: "All Products" },
    { id: "boxing", name: "Boxing" },
    { id: "weightlifting", name: "Weightlifting" },
    { id: "fitness", name: "Fitness" },
    { id: "mma", name: "MMA" },
  ];

  const products = [
    {
      id: 1,
      name: "RXN Hercules Weightlifting Shoes",
      category: "weightlifting",
      price: "₹4,999",
      rating: "4.89",
      image:
        "https://d2xsxph8kpxj0f.cloudfront.net/310519663686172445/gNHmU25WyEsKDHgdDpTPAw/product-weightlifting-shoes-QsJboSXGNzKvfTtKNHUTcB.webp",
      badge: "Best Seller",
    },
    {
      id: 2,
      name: "RXN Non-Stop Competition Boxing Gloves",
      category: "boxing",
      price: "₹2,999",
      rating: "4.80",
      image:
        "https://d2xsxph8kpxj0f.cloudfront.net/310519663686172445/gNHmU25WyEsKDHgdDpTPAw/product-boxing-gloves-d6Pcrpr3LyDfxEQuzGrkaR.webp",
      badge: "Top Rated",
    },
    {
      id: 3,
      name: "RXN Gold Medalist Weightlifting Shoes",
      category: "weightlifting",
      price: "₹2,399",
      rating: "4.33",
      image:
        "https://d2xsxph8kpxj0f.cloudfront.net/310519663686172445/gNHmU25WyEsKDHgdDpTPAw/product-weightlifting-shoes-QsJboSXGNzKvfTtKNHUTcB.webp",
    },
    {
      id: 4,
      name: "RXN Brawler Sparring Gloves",
      category: "boxing",
      price: "₹1,899",
      rating: "4.33",
      image:
        "https://d2xsxph8kpxj0f.cloudfront.net/310519663686172445/gNHmU25WyEsKDHgdDpTPAw/product-boxing-gloves-d6Pcrpr3LyDfxEQuzGrkaR.webp",
    },
    {
      id: 5,
      name: "RXN Premium Lifting Belt",
      category: "weightlifting",
      price: "₹1,499",
      rating: "4.75",
      image:
        "https://d2xsxph8kpxj0f.cloudfront.net/310519663686172445/gNHmU25WyEsKDHgdDpTPAw/product-boxing-gloves-d6Pcrpr3LyDfxEQuzGrkaR.webp",
    },
    {
      id: 6,
      name: "RXN Fitness Training Gloves",
      category: "fitness",
      price: "₹999",
      rating: "4.50",
      image:
        "https://d2xsxph8kpxj0f.cloudfront.net/310519663686172445/gNHmU25WyEsKDHgdDpTPAw/product-boxing-gloves-d6Pcrpr3LyDfxEQuzGrkaR.webp",
    },
    {
      id: 7,
      name: "RXN MMA Training Gloves",
      category: "mma",
      price: "₹2,499",
      rating: "4.60",
      image:
        "https://d2xsxph8kpxj0f.cloudfront.net/310519663686172445/gNHmU25WyEsKDHgdDpTPAw/product-boxing-gloves-d6Pcrpr3LyDfxEQuzGrkaR.webp",
    },
    {
      id: 8,
      name: "RXN Hand Wraps Pro",
      category: "boxing",
      price: "₹399",
      rating: "4.70",
      image:
        "https://d2xsxph8kpxj0f.cloudfront.net/310519663686172445/gNHmU25WyEsKDHgdDpTPAw/product-boxing-gloves-d6Pcrpr3LyDfxEQuzGrkaR.webp",
    },
  ];

  const filteredProducts =
    selectedCategory === "all"
      ? products
      : products.filter(p => p.category === selectedCategory);

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
                OUR PRODUCTS
              </h1>
              <p className="text-gray-300 text-lg max-w-2xl">
                Premium gear engineered for champions. From boxing gloves to
                weightlifting shoes, find everything you need to win.
              </p>
            </motion.div>
          </div>
        </section>

        <section className="py-16 md:py-24">
          <div className="container mx-auto px-4">
            <motion.div
              initial={{ opacity: 0 }}
              animate={{ opacity: 1 }}
              transition={{ duration: 0.6 }}
              className="mb-12"
            >
              <div className="flex items-center gap-4 mb-6">
                <Filter className="w-6 h-6 text-primary" />
                <h2 className="font-display font-bold text-2xl">
                  FILTER BY CATEGORY
                </h2>
              </div>
              <div className="flex flex-wrap gap-3">
                {categories.map(category => (
                  <button
                    key={category.id}
                    onClick={() => setSelectedCategory(category.id)}
                    className={`px-6 py-2 font-bold text-sm transition-all duration-200 border-2 ${
                      selectedCategory === category.id
                        ? "bg-primary text-white border-primary"
                        : "bg-white text-black border-black hover:border-primary hover:text-primary"
                    }`}
                  >
                    {category.name}
                  </button>
                ))}
              </div>
            </motion.div>

            <motion.div
              layout
              className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 xl:grid-cols-4 gap-6"
            >
              {filteredProducts.map((product, index) => (
                <motion.div
                  key={product.id}
                  layout
                  initial={{ opacity: 0, y: 20 }}
                  animate={{ opacity: 1, y: 0 }}
                  exit={{ opacity: 0, y: 20 }}
                  transition={{ duration: 0.4, delay: index * 0.05 }}
                  className="bg-white border-2 border-black hover:border-primary transition-all duration-300 overflow-hidden group"
                >
                  <div className="relative overflow-hidden h-48 bg-gray-200">
                    {product.badge && (
                      <div className="absolute top-3 right-3 bg-primary text-white px-3 py-1 text-xs font-bold z-10">
                        {product.badge}
                      </div>
                    )}
                    <img
                      src={product.image}
                      alt={product.name}
                      className="w-full h-full object-cover group-hover:scale-110 transition-transform duration-300"
                    />
                  </div>

                  <div className="p-4">
                    <p className="text-primary font-bold text-xs mb-2 uppercase tracking-wider">
                      {product.category}
                    </p>
                    <h3 className="font-display font-bold text-sm mb-3 line-clamp-2 h-10">
                      {product.name}
                    </h3>
                    <div className="flex items-center justify-between mb-4">
                      <span className="text-xl font-bold text-black">
                        {product.price}
                      </span>
                      <span className="text-xs text-gray-600">
                        ★ {product.rating}
                      </span>
                    </div>
                    <Button className="w-full bg-primary hover:bg-red-700 text-white font-bold text-sm py-2 transition-all duration-200">
                      ADD TO CART
                    </Button>
                  </div>
                </motion.div>
              ))}
            </motion.div>

            {filteredProducts.length === 0 && (
              <motion.div
                initial={{ opacity: 0 }}
                animate={{ opacity: 1 }}
                className="text-center py-12"
              >
                <p className="text-gray-600 text-lg">
                  No products found in this category.
                </p>
              </motion.div>
            )}
          </div>
        </section>
      </main>

      <Footer />
    </div>
  );
}
