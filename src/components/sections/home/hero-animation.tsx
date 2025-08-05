import React from "react";
import { motion } from "framer-motion";
import { Button } from "@/components/ui/button";
import HeroContent from "./hero-content";

const HeroAnimations: React.FC = () => {
  return (
    <div className="relative z-10 max-w-5xl mx-auto px-4 xs:px-6 sm:px-8 lg:px-12 text-center bg-transparent">
      {/* Badges vert tout en haut*/}
      <motion.div
        initial={{ opacity: 0, y: 20 }}
        animate={{ opacity: 1, y: 0 }}
        transition={{ duration: 0.6, delay: 0.1 }}
        className="mt-2 xs:mt-3 sm:mt-4 inline-flex items-center gap-1.5 xs:gap-2 bg-[#E8FCEB] text-[#166534] px-2 xs:px-3 sm:px-4 py-1.5 xs:py-2 rounded-full text-xs xs:text-sm font-medium mb-3 xs:mb-4 sm:mb-6 border border-[#BBF7D0]"
      >
        <span className="w-1.5 xs:w-2 h-1.5 xs:h-2 bg-[#22C55E] rounded-full animate-pulse"></span>
        <span className="hidden xs:inline">Nouveau : </span>Création de landing
        pages par blocs
      </motion.div>

      {/* Image principale */}
      <div className="relative bg-transparent">
        <motion.div
          initial={{ opacity: 0, scale: 0.8 }}
          animate={{ opacity: 1, scale: 1 }}
          transition={{ duration: 0.8, delay: 0.2 }}
          className="mx-auto bg-transparent"
        >
          <img
            src="/images/hero-section/new.svg"
            alt="Hero section group"
            className="w-full max-w-[350px] xs:max-w-[450px] sm:max-w-[550px] md:max-w-[700px] lg:max-w-[800px] xl:max-w-[900px] h-auto bg-transparent scale-95 xs:scale-100 sm:scale-105 md:scale-110 lg:scale-115 mx-auto"
            style={{ display: "block" }}
          />
        </motion.div>
      </div>

      {/* Boutons de fonctionnalités en bas de l'image */}
      <motion.div
        initial={{ opacity: 0, y: 20 }}
        animate={{ opacity: 1, y: 0 }}
        transition={{ duration: 0.6, delay: 0.4 }}
        className="flex flex-wrap justify-center gap-1.5 xs:gap-2 mb-3 xs:mb-4 sm:mb-6"
      >
        <div className="flex items-center gap-1 xs:gap-1.5 bg-green-50 border border-green-200 px-2 xs:px-3 py-1 xs:py-1.5 rounded-full">
          <div className="w-3 xs:w-4 h-3 xs:h-4 bg-green-100 rounded-full flex items-center justify-center">
            <span className="text-green-600 text-xs font-bold">$</span>
          </div>
          <span className="text-green-700 text-xs font-medium hidden sm:inline">
            VENDRE DES PRODUITS
          </span>
          <span className="text-green-700 text-xs font-medium sm:hidden">
            PRODUITS
          </span>
        </div>

        <div className="flex items-center gap-1 xs:gap-1.5 bg-purple-50 border border-purple-200 px-2 xs:px-3 py-1 xs:py-1.5 rounded-full">
          <div className="w-3 xs:w-4 h-3 xs:h-4 bg-purple-100 rounded-full flex items-center justify-center">
            <div className="w-2 xs:w-2.5 h-2 xs:h-2.5 bg-purple-600 rounded-sm"></div>
          </div>
          <span className="text-purple-700 text-xs font-medium hidden sm:inline">
            PAGE D'ACCUEIL
          </span>
          <span className="text-purple-700 text-xs font-medium sm:hidden">
            ACCUEIL
          </span>
        </div>

        <div className="flex items-center gap-1 xs:gap-1.5 bg-pink-50 border border-pink-200 px-2 xs:px-3 py-1 xs:py-1.5 rounded-full">
          <div className="w-3 xs:w-4 h-3 xs:h-4 bg-pink-100 rounded-full flex items-center justify-center">
            <div className="flex gap-0.5">
              <div className="w-1 h-1.5 bg-pink-600 rounded-sm"></div>
              <div className="w-1 h-1.5 bg-pink-600 rounded-sm"></div>
            </div>
          </div>
          <span className="text-pink-700 text-xs font-medium hidden sm:inline">
            LIENS BIO
          </span>
          <span className="text-pink-700 text-xs font-medium sm:hidden">
            BIO
          </span>
        </div>

        <div className="flex items-center gap-1 xs:gap-1.5 bg-blue-50 border border-blue-200 px-2 xs:px-3 py-1 xs:py-1.5 rounded-full">
          <div className="w-3 xs:w-4 h-3 xs:h-4 bg-blue-100 rounded-full flex items-center justify-center">
            <div className="flex flex-col gap-0.5">
              <div className="w-2 xs:w-2.5 h-0.5 bg-blue-600 rounded-sm"></div>
              <div className="w-2 xs:w-2.5 h-0.5 bg-blue-600 rounded-sm"></div>
              <div className="w-2 xs:w-2.5 h-0.5 bg-blue-600 rounded-sm"></div>
            </div>
          </div>
          <span className="text-blue-700 text-xs font-medium">BLOG</span>
        </div>

        <div className="flex items-center gap-1 xs:gap-1.5 bg-yellow-50 border border-yellow-200 px-2 xs:px-3 py-1 xs:py-1.5 rounded-full">
          <div className="w-3 xs:w-4 h-3 xs:h-4 bg-yellow-100 rounded-full flex items-center justify-center">
            <div className="flex flex-col gap-0.5">
              <div className="w-2 xs:w-2.5 h-0.5 bg-yellow-600 rounded-sm"></div>
              <div className="w-2 xs:w-2.5 h-0.5 bg-yellow-600 rounded-sm"></div>
              <div className="w-2 xs:w-2.5 h-0.5 bg-yellow-600 rounded-sm"></div>
            </div>
          </div>
          <span className="text-yellow-700 text-xs font-medium hidden sm:inline">
            FORMULAIRE
          </span>
          <span className="text-yellow-700 text-xs font-medium sm:hidden">
            FORM
          </span>
        </div>
      </motion.div>

      {/* Titre h1 principal */}
      <motion.h1
        initial={{ opacity: 0, y: 30 }}
        animate={{ opacity: 1, y: 0 }}
        transition={{ duration: 0.8, delay: 0.4 }}
        className="text-xl xs:text-2xl sm:text-3xl md:text-4xl lg:text-5xl xl:text-6xl font-bold text-[#101010] mb-3 xs:mb-4 sm:mb-6 leading-tight relative z-20"
      >
        Construisez des
        <br />
        <span className="text-[#635BFF]">
          <HeroContent />
        </span>
      </motion.h1>

      <motion.p
        initial={{ opacity: 0, y: 20 }}
        animate={{ opacity: 1, y: 0 }}
        transition={{ duration: 0.8, delay: 0.4 }}
        className="text-sm xs:text-base sm:text-lg md:text-xl lg:text-2xl text-gray-600 mb-4 xs:mb-6 sm:mb-8 lg:mb-10 max-w-[350px] xs:max-w-[450px] sm:max-w-[550px] md:max-w-[700px] lg:max-w-[800px] mx-auto leading-relaxed"
      >
        L'outil no-code qui transforme vos idées en landing pages
        professionnelles en quelques clics.
        <br className="hidden sm:block" />
        Plus de code, plus de complexité, juste du résultat.
      </motion.p>

      {/* Boutons CTA */}
      <motion.div
        initial={{ opacity: 0, y: 20 }}
        animate={{ opacity: 1, y: 0 }}
        transition={{ duration: 0.8, delay: 0.6 }}
        className="flex flex-col sm:flex-row gap-2 xs:gap-3 sm:gap-4 justify-center items-center mb-6 xs:mb-8 sm:mb-12"
      >
        <Button
          className="bg-[#635BFF] hover:bg-[#7D76FF] text-white px-3 xs:px-4 sm:px-6 md:px-8 py-2 xs:py-3 sm:py-4 text-sm xs:text-base sm:text-lg font-semibold rounded-lg xs:rounded-xl shadow-lg hover:shadow-xl transition-all duration-300 transform hover:scale-105"
          size="lg"
        >
          Commencer gratuitement
        </Button>
        <Button
          variant="outline"
          className="border-2 border-[#EDEDED] hover:border-[#635BFF] hover:text-[#635BFF] px-3 xs:px-4 sm:px-6 md:px-8 py-2 xs:py-3 sm:py-4 text-sm xs:text-base sm:text-lg font-semibold rounded-lg xs:rounded-xl transition-all duration-300"
          size="lg"
        >
          Voir la démo
        </Button>
      </motion.div>

      {/* Quelques stats*/}
      <motion.div
        initial={{ opacity: 0, y: 20 }}
        animate={{ opacity: 1, y: 0 }}
        transition={{ duration: 0.8, delay: 0.8 }}
        className="grid grid-cols-1 sm:grid-cols-3 gap-3 xs:gap-4 sm:gap-6 max-w-[400px] xs:max-w-[500px] sm:max-w-[600px] md:max-w-[700px] lg:max-w-[800px] mx-auto"
      >
        <motion.div
          initial={{ opacity: 0, scale: 0.8 }}
          animate={{ opacity: 1, scale: 1 }}
          transition={{ duration: 0.6, delay: 1.0 }}
          className="text-center"
        >
          <div className="text-lg xs:text-xl sm:text-2xl md:text-3xl font-bold text-[#101010] mb-1 xs:mb-2">
            500+
          </div>
          <div className="text-xs xs:text-sm text-gray-600">
            Landing pages créées
          </div>
        </motion.div>
        <motion.div
          initial={{ opacity: 0, scale: 0.8 }}
          animate={{ opacity: 1, scale: 1 }}
          transition={{ duration: 0.6, delay: 1.1 }}
          className="text-center"
        >
          <div className="text-lg xs:text-xl sm:text-2xl md:text-3xl font-bold text-[#101010] mb-1 xs:mb-2">
            50+
          </div>
          <div className="text-xs xs:text-sm text-gray-600">
            Blocs disponibles
          </div>
        </motion.div>
        <motion.div
          initial={{ opacity: 0, scale: 0.8 }}
          animate={{ opacity: 1, scale: 1 }}
          transition={{ duration: 0.6, delay: 1.2 }}
          className="text-center"
        >
          <div className="text-lg xs:text-xl sm:text-2xl md:text-3xl font-bold text-[#101010] mb-1 xs:mb-2">
            5min
          </div>
          <div className="text-xs xs:text-sm text-gray-600">
            Temps de création
          </div>
        </motion.div>
      </motion.div>
    </div>
  );
};

export default HeroAnimations;
