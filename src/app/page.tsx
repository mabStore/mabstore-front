'use client';
import { motion } from "framer-motion";
import Image from "next/image";
import Link from "next/link";
import Header from "@/components/header";

export default function Home() {
  const fadeInUp = {
    initial: { opacity: 0, y: 60 },
    animate: { opacity: 1, y: 0 },
    transition: { duration: 0.6, ease: "easeOut" },
  };

  const staggerContainer = {
    animate: {
      transition: {
        staggerChildren: 0.2,
      },
    },
  };

  const variants = {
    left: {
      initial: { opacity: 0, x: -100 },
      whileInView: { opacity: 1, x: 0 },
      transition: { duration: 0.8, ease: "easeOut" },
      viewport: { once: true },
    },
    right: {
      initial: { opacity: 0, x: 100 },
      whileInView: { opacity: 1, x: 0 },
      transition: { duration: 0.8, ease: "easeOut" },
      viewport: { once: true },
    },
    bottom: {
      initial: { opacity: 0, y: 100 },
      whileInView: { opacity: 1, y: 0 },
      transition: { duration: 0.8, ease: "easeOut" },
      viewport: { once: true },
    },
    top: {
      initial: { opacity: 0, y: -100 },
      whileInView: { opacity: 1, y: 0 },
      transition: { duration: 0.8, ease: "easeOut" },
      viewport: { once: true },
    },
  };

  const imageAnimation = {
    initial: { scale: 0.8, opacity: 0 },
    whileInView: { scale: 1, opacity: 1 },
    transition: { duration: 0.6, ease: "easeOut" },
    viewport: { once: true },
  };

  return (
      <div className="min-h-screen bg-gray-50">
        <Header />
        <section className="relative h-[80vh] flex items-center justify-center overflow-hidden">
          <div className="absolute inset-0 bg-black/20 z-10" />
          <Image
              src="https://bucketforshop.s3.eu-north-1.amazonaws.com/home-page1.svg"
              alt="Hero background"
              fill
              className="object-cover"
              priority
          />
          <motion.div
              className="relative z-20 text-center text-white"
              variants={staggerContainer}
              initial="initial"
              animate="animate"
          >
            <motion.h1
                className="text-5xl md:text-6xl font-bold mb-4"
                variants={fadeInUp}
            >
              Ласкаво просимо до нашого магазину
            </motion.h1>
            <motion.p
                className="text-xl md:text-2xl mb-8"
                variants={fadeInUp}
            >
              Дізнайтесь більше про нас
            </motion.p>
            <motion.div variants={fadeInUp}>
              <Link
                  href="/about"
                  className="inline-block bg-indigo-600 hover:bg-indigo-700 text-white font-semibold py-3 px-8 rounded-lg transition-colors"
              >
                Детальніше
              </Link>
            </motion.div>
          </motion.div>
        </section>

        <section className="py-16 px-4 md:px-8">
          <div className="max-w-7xl mx-auto space-y-16">
            <motion.div
                className="flex flex-col md:flex-row items-center gap-8"
                {...variants.left}
            >
              <motion.div className="w-full md:w-1/2" {...imageAnimation}>
                <Image
                    src="/images/info1.jpg"
                    alt="Info 1"
                    width={500}
                    height={300}
                    className="w-full h-auto rounded-lg shadow-md object-cover"
                />
              </motion.div>
              <div className="w-full md:w-1/2">
                <h3 className="text-2xl font-bold mb-4 text-black">Наша місія</h3>
                <p className="text-gray-600">
                  Ми прагнемо надавати якісні товари та послуги, які роблять ваше
                  життя кращим.
                </p>
              </div>
            </motion.div>

            <motion.div
                className="flex flex-col md:flex-row-reverse items-center gap-8"
                {...variants.right}
            >
              <motion.div className="w-full md:w-1/2" {...imageAnimation}>
                <Image
                    src="/images/info2.jpg"
                    alt="Info 2"
                    width={500}
                    height={300}
                    className="w-full h-auto rounded-lg shadow-md object-cover"
                />
              </motion.div>
              <div className="w-full md:w-1/2">
                <h3 className="text-2xl font-bold mb-4 text-black">Наші цінності</h3>
                <p className="text-gray-600">
                  Чесність, якість і турбота про клієнтів — основа нашого бізнесу.
                </p>
              </div>
            </motion.div>

            <motion.div
                className="flex flex-col md:flex-row items-center gap-8"
                {...variants.bottom}
            >
              <motion.div className="w-full md:w-1/2" {...imageAnimation}>
                <Image
                    src="/images/info3.webp"
                    alt="Info 3"
                    width={500}
                    height={300}
                    className="w-full h-auto rounded-lg shadow-md object-cover"
                />
              </motion.div>
              <div className="w-full md:w-1/2">
                <h3 className="text-2xl font-bold mb-4 text-black">Наша історія</h3>
                <p className="text-gray-600">
                  Засновані в 2020 році, ми швидко стали лідерами у своїй сфері.
                </p>
              </div>
            </motion.div>
          </div>
        </section>

        <footer className="bg-gray-800 text-white py-8">
          <div className="max-w-7xl mx-auto px-4 text-center">
            <p>© 2025 MAB Store. Всі права захищено.</p>
          </div>
        </footer>
      </div>
  );
}