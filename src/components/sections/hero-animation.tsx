import React from "react";
import { motion } from "framer-motion";
import { Button } from "@/components/ui/button";
import HeroContent from "./hero-content";

const HeroAnimations: React.FC = () => {
  return (
    <div className="relative z-10 max-w-4xl mx-auto px-6 text-center bg-transparent">
      {/* Badges vert tout en haut*/}
      <motion.div
        initial={{ opacity: 0, y: 20 }}
        animate={{ opacity: 1, y: 0 }}
        transition={{ duration: 0.6, delay: 0.1 }}
        className="mt-4 inline-flex items-center gap-2 bg-[#E8FCEB] text-[#166534] px-4 py-2 rounded-full text-sm font-medium mb-8 border border-[#BBF7D0]"
      >
        <span className="w-2 h-2 bg-[#22C55E] rounded-full animate-pulse"></span>
        Nouveau : Création de landing pages par blocs
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
            src="/src/assets/images/hero-section/new.svg"
            alt="Hero section group"
            className="w-full max-w-3xl h-auto bg-transparent scale-105 md:scale-110 lg:scale-125 mx-auto"
            style={{ display: "block" }}
          />
        </motion.div>
      </div>

      {/* Boutons de fonctionnalités en bas de l'image */}
      <motion.div
        initial={{ opacity: 0, y: 20 }}
        animate={{ opacity: 1, y: 0 }}
        transition={{ duration: 0.6, delay: 0.4 }}
        className="flex flex-wrap justify-center gap-2 mb-8"
      >
        <div className="flex items-center gap-1.5 bg-green-50 border border-green-200 px-3 py-1.5 rounded-full">
          <div className="w-4 h-4 bg-green-100 rounded-full flex items-center justify-center">
            <span className="text-green-600 text-xs font-bold">$</span>
          </div>
          <span className="text-green-700 text-xs font-medium">
            VENDRE DES PRODUITS
          </span>
        </div>

        <div className="flex items-center gap-1.5 bg-purple-50 border border-purple-200 px-3 py-1.5 rounded-full">
          <div className="w-4 h-4 bg-purple-100 rounded-full flex items-center justify-center">
            <div className="w-2.5 h-2.5 bg-purple-600 rounded-sm"></div>
          </div>
          <span className="text-purple-700 text-xs font-medium">
            PAGE D'ACCUEIL
          </span>
        </div>

        <div className="flex items-center gap-1.5 bg-pink-50 border border-pink-200 px-3 py-1.5 rounded-full">
          <div className="w-4 h-4 bg-pink-100 rounded-full flex items-center justify-center">
            <div className="flex gap-0.5">
              <div className="w-1 h-1.5 bg-pink-600 rounded-sm"></div>
              <div className="w-1 h-1.5 bg-pink-600 rounded-sm"></div>
            </div>
          </div>
          <span className="text-pink-700 text-xs font-medium">LIENS BIO</span>
        </div>

        <div className="flex items-center gap-1.5 bg-blue-50 border border-blue-200 px-3 py-1.5 rounded-full">
          <div className="w-4 h-4 bg-blue-100 rounded-full flex items-center justify-center">
            <div className="flex flex-col gap-0.5">
              <div className="w-2.5 h-0.5 bg-blue-600 rounded-sm"></div>
              <div className="w-2.5 h-0.5 bg-blue-600 rounded-sm"></div>
              <div className="w-2.5 h-0.5 bg-blue-600 rounded-sm"></div>
            </div>
          </div>
          <span className="text-blue-700 text-xs font-medium">BLOG</span>
        </div>

        <div className="flex items-center gap-1.5 bg-yellow-50 border border-yellow-200 px-3 py-1.5 rounded-full">
          <div className="w-4 h-4 bg-yellow-100 rounded-full flex items-center justify-center">
            <div className="flex flex-col gap-0.5">
              <div className="w-2.5 h-0.5 bg-yellow-600 rounded-sm"></div>
              <div className="w-2.5 h-0.5 bg-yellow-600 rounded-sm"></div>
              <div className="w-2.5 h-0.5 bg-yellow-600 rounded-sm"></div>
            </div>
          </div>
          <span className="text-yellow-700 text-xs font-medium">
            FORMULAIRE
          </span>
        </div>
      </motion.div>

      {/* Titre h1 principal */}
      <motion.h1
        initial={{ opacity: 0, y: 30 }}
        animate={{ opacity: 1, y: 0 }}
        transition={{ duration: 0.8, delay: 0.4 }}
        className="text-5xl md:text-7xl font-bold text-[#101010] mb-6 leading-tight relative z-20"
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
        className="text-xl md:text-2xl text-gray-600 mb-12 max-w-3xl mx-auto leading-relaxed"
      >
        L'outil no-code qui transforme vos idées en landing pages
        professionnelles en quelques clics.
        <br className="hidden md:block" />
        Plus de code, plus de complexité, juste du résultat.
      </motion.p>

      {/* Boutons CTA */}
      <motion.div
        initial={{ opacity: 0, y: 20 }}
        animate={{ opacity: 1, y: 0 }}
        transition={{ duration: 0.8, delay: 0.6 }}
        className="flex flex-col sm:flex-row gap-4 justify-center items-center mb-16"
      >
        <Button
          className="bg-[#635BFF] hover:bg-[#7D76FF] text-white px-8 py-4 text-lg font-semibold rounded-xl shadow-lg hover:shadow-xl transition-all duration-300 transform hover:scale-105"
          size="lg"
        >
          Commencer gratuitement
        </Button>
        <Button
          variant="outline"
          className="border-2 border-[#EDEDED] hover:border-[#635BFF] hover:text-[#635BFF] px-8 py-4 text-lg font-semibold rounded-xl transition-all duration-300"
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
        className="grid grid-cols-1 md:grid-cols-3 gap-8 max-w-2xl mx-auto"
      >
        <motion.div
          initial={{ opacity: 0, scale: 0.8 }}
          animate={{ opacity: 1, scale: 1 }}
          transition={{ duration: 0.6, delay: 1.0 }}
          className="text-center"
        >
          <div className="text-3xl font-bold text-[#101010] mb-2">500+</div>
          <div className="text-gray-600">Landing pages créées</div>
        </motion.div>
        <motion.div
          initial={{ opacity: 0, scale: 0.8 }}
          animate={{ opacity: 1, scale: 1 }}
          transition={{ duration: 0.6, delay: 1.1 }}
          className="text-center"
        >
          <div className="text-3xl font-bold text-[#101010] mb-2">50+</div>
          <div className="text-gray-600">Blocs disponibles</div>
        </motion.div>
        <motion.div
          initial={{ opacity: 0, scale: 0.8 }}
          animate={{ opacity: 1, scale: 1 }}
          transition={{ duration: 0.6, delay: 1.2 }}
          className="text-center"
        >
          <div className="text-3xl font-bold text-[#101010] mb-2">5min</div>
          <div className="text-gray-600">Temps de création</div>
        </motion.div>
      </motion.div>
    </div>
  );
};

export default HeroAnimations;
