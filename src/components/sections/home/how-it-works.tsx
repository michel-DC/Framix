import React from "react";
import { motion } from "framer-motion";

const HowItWorks: React.FC = () => {
  const steps = [
    {
      id: 1,
      badge: "Étape 1",
      title: "Choisissez vos blocs",
      description:
        "Sélectionnez parmi 50+ blocs pré-conçus pour créer votre landing page parfaitement adaptée à vos besoins.",
      icon: "🎯",
      color: "bg-blue-50 border-blue-200 text-blue-700",
      badgeColor: "bg-blue-100 text-blue-700",
    },
    {
      id: 2,
      badge: "Étape 2",
      title: "Personnalisez en drag & drop",
      description:
        "Modifiez couleurs, textes, images et mise en page directement dans l'éditeur visuel intuitif.",
      icon: "✨",
      color: "bg-purple-50 border-purple-200 text-purple-700",
      badgeColor: "bg-purple-100 text-purple-700",
    },
    {
      id: 3,
      badge: "Étape 3",
      title: "Publiez en 1 clic",
      description:
        "Votre landing page est automatiquement optimisée et mise en ligne. Aucun code requis !",
      icon: "🚀",
      color: "bg-green-50 border-green-200 text-green-700",
      badgeColor: "bg-green-100 text-green-700",
    },
  ];

  return (
    <section
      className="py-12 xs:py-16 sm:py-20 lg:py-24 bg-white/50 backdrop-blur-sm"
      id="steps"
    >
      <div className="max-w-6xl mx-auto px-4 xs:px-6 sm:px-8 lg:px-12">
        {/* Header de la section */}
        <div className="text-center mb-8 xs:mb-12 sm:mb-16">
          {/* Badge principal */}
          <div className="inline-flex items-center gap-2 bg-[#E8FCEB] text-[#166534] px-3 xs:px-4 py-1.5 xs:py-2 rounded-full text-xs xs:text-sm font-medium mb-4 xs:mb-6 border border-[#BBF7D0]">
            <span className="w-1.5 xs:w-2 h-1.5 xs:h-2 bg-[#22C55E] rounded-full"></span>
            Processus simplifié
          </div>

          {/* Titre */}
          <h2 className="text-2xl xs:text-3xl sm:text-4xl md:text-5xl lg:text-6xl font-bold text-[#101010] mb-3 xs:mb-4 sm:mb-6">
            Comment ça marche ?
          </h2>

          {/* Sous-titre */}
          <p className="text-sm xs:text-base sm:text-lg md:text-xl text-gray-600 max-w-2xl xs:max-w-3xl mx-auto leading-relaxed">
            Créez votre landing page professionnelle en 3 étapes simples. Aucune
            compétence technique requise.
          </p>
        </div>

        {/* Étapes */}
        <div className="grid grid-cols-1 md:grid-cols-3 gap-6 xs:gap-8 sm:gap-10 lg:gap-12">
          {steps.map((step, index) => (
            <div key={step.id} className="relative">
              {/* Ligne de connexion (sauf pour le dernier) */}
              {index < steps.length - 1 && (
                <div className="hidden md:block absolute top-8 left-full w-full h-0.5 bg-gradient-to-r from-gray-200 to-transparent z-0"></div>
              )}

              {/* Card principale */}
              <div
                className={`relative z-10 p-4 xs:p-6 sm:p-8 rounded-2xl border-2 ${step.color}`}
              >
                {/* Badge d'étape */}
                <div
                  className={`inline-flex items-center px-2 xs:px-3 py-1 xs:py-1.5 rounded-full text-xs xs:text-sm font-semibold ${step.badgeColor} mb-4 xs:mb-6`}
                >
                  {step.badge}
                </div>

                {/* Icône */}
                <div className="text-3xl xs:text-4xl sm:text-5xl mb-4 xs:mb-6">
                  {step.icon}
                </div>

                {/* Titre */}
                <h3 className="text-lg xs:text-xl sm:text-2xl md:text-3xl font-bold text-[#101010] mb-2 xs:mb-3 sm:mb-4">
                  {step.title}
                </h3>

                {/* Description */}
                <p className="text-sm xs:text-base sm:text-lg text-gray-600 leading-relaxed">
                  {step.description}
                </p>

                {/* Indicateur de progression */}
                <div className="flex items-center gap-2 mt-4 xs:mt-6">
                  <div className="flex gap-1">
                    {[...Array(3)].map((_, i) => (
                      <div
                        key={i}
                        className={`w-1.5 xs:w-2 h-1.5 xs:h-2 rounded-full ${
                          i <= index ? "bg-[#635BFF]" : "bg-gray-200"
                        }`}
                      />
                    ))}
                  </div>
                  <span className="text-xs xs:text-sm text-gray-500 font-medium">
                    {index + 1}/3
                  </span>
                </div>
              </div>
            </div>
          ))}
        </div>

        {/* Call-to-action */}
        <div className="text-center mt-8 xs:mt-12 sm:mt-16">
          <div className="inline-flex items-center gap-2 bg-[#FEF3C7] text-[#92400E] px-3 xs:px-4 py-1.5 xs:py-2 rounded-full text-xs xs:text-sm font-medium mb-4 xs:mb-6 border border-[#FDE68A]">
            <span className="w-1.5 xs:w-2 h-1.5 xs:h-2 bg-[#F59E0B] rounded-full"></span>
            Temps de création : 5 minutes
          </div>

          <p className="text-sm xs:text-base sm:text-lg text-gray-600 mb-4 xs:mb-6">
            Prêt à créer votre première landing page ?
          </p>

          <button className="bg-[#635BFF] hover:bg-[#7D76FF] text-white px-6 xs:px-8 sm:px-10 py-2 xs:py-3 sm:py-4 text-sm xs:text-base sm:text-lg font-semibold rounded-xl shadow-lg hover:shadow-xl transition-all duration-300">
            Commencer maintenant
          </button>
        </div>
      </div>
    </section>
  );
};

export default HowItWorks;
