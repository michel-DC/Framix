import React, { useState } from "react";
import { AnimatePresence } from "framer-motion";

const FAQ: React.FC = () => {
  const [openItem, setOpenItem] = useState<number | null>(null);

  const faqCategories = [
    {
      id: 1,
      name: "Général",
      icon: "❓",
      color: "bg-blue-100 text-blue-700 border-blue-200",
    },
    {
      id: 2,
      name: "Technique",
      icon: "⚙️",
      color: "bg-purple-100 text-purple-700 border-purple-200",
    },
    {
      id: 3,
      name: "Tarifs",
      icon: "💰",
      color: "bg-green-100 text-green-700 border-green-200",
    },
    {
      id: 4,
      name: "Support",
      icon: "🛠️",
      color: "bg-orange-100 text-orange-700 border-orange-200",
    },
  ];

  const faqItems = [
    {
      id: 1,
      question: "Comment fonctionne Framix ?",
      answer:
        "Framix est un outil no-code qui vous permet de créer des landing pages professionnelles en glissant-déposant des blocs pré-conçus. Aucune compétence technique n'est requise. Vous choisissez vos blocs, personnalisez le contenu et publiez en un clic.",
      category: "Général",
    },
    {
      id: 2,
      question: "Puis-je utiliser mon propre domaine ?",
      answer:
        "Oui ! Avec les plans Pro et Entreprise, vous pouvez connecter votre propre nom de domaine. Nous fournissons également un sous-domaine gratuit (votresite.framix.com) pour tous les plans.",
      category: "Technique",
    },
    {
      id: 3,
      question: "Y a-t-il des frais cachés ?",
      answer:
        "Non, nos tarifs sont transparents. Le prix affiché est le prix final. Aucun frais d'installation, de configuration ou de maintenance n'est facturé en plus.",
      category: "Tarifs",
    },
    {
      id: 4,
      question: "Puis-je annuler à tout moment ?",
      answer:
        "Absolument ! Vous pouvez annuler votre abonnement à tout moment depuis votre dashboard. Aucun engagement à long terme n'est requis.",
      category: "Tarifs",
    },
    {
      id: 5,
      question: "Mes pages sont-elles optimisées pour mobile ?",
      answer:
        "Oui, toutes les landing pages créées avec Framix sont automatiquement optimisées pour mobile, tablette et desktop. Le design s'adapte parfaitement à tous les écrans.",
      category: "Technique",
    },
    {
      id: 6,
      question: "Quel type de support proposez-vous ?",
      answer:
        "Nous proposons un support par email pour le plan gratuit, et un support prioritaire 24/7 par email, chat et téléphone pour les plans Pro et Entreprise.",
      category: "Support",
    },
    {
      id: 7,
      question: "Puis-je exporter mes pages ?",
      answer:
        "Oui, vous pouvez exporter le code HTML/CSS de vos pages avec les plans Pro et Entreprise. Cela vous permet de les héberger ailleurs si nécessaire.",
      category: "Technique",
    },
    {
      id: 8,
      question: "Combien de pages puis-je créer ?",
      answer:
        "Le plan gratuit permet 1 landing page, le plan Pro offre des pages illimitées, et le plan Entreprise inclut également des fonctionnalités avancées pour les équipes.",
      category: "Tarifs",
    },
  ];

  const toggleItem = (id: number) => {
    setOpenItem(openItem === id ? null : id);
  };

  return (
    <section
      className="py-12 xs:py-16 sm:py-20 lg:py-24 bg-white/60 backdrop-blur-sm"
      id="faq"
    >
      <div className="max-w-5xl mx-auto px-4 xs:px-6 sm:px-8 lg:px-12">
        {/* Header de la section */}
        <div className="text-center mb-8 xs:mb-12 sm:mb-16">
          {/* Badge principal */}
          <div className="inline-flex items-center gap-2 bg-[#FEF3C7] text-[#92400E] px-3 xs:px-4 py-1.5 xs:py-2 rounded-full text-xs xs:text-sm font-medium mb-4 xs:mb-6 border border-[#FDE68A]">
            <span className="w-1.5 xs:w-2 h-1.5 xs:h-2 bg-[#F59E0B] rounded-full"></span>
            Questions fréquentes
          </div>

          {/* Titre */}
          <h2 className="text-2xl xs:text-3xl sm:text-4xl md:text-5xl lg:text-6xl font-bold text-[#101010] mb-3 xs:mb-4 sm:mb-6">
            Vous avez des questions ?
          </h2>

          {/* Sous-titre */}
          <p className="text-sm xs:text-base sm:text-lg md:text-xl text-gray-600 max-w-3xl mx-auto leading-relaxed">
            Trouvez rapidement les réponses à vos questions les plus fréquentes.
            Notre équipe est également là pour vous aider.
          </p>
        </div>

        {/* Catégories */}
        <div className="flex flex-wrap justify-center gap-2 xs:gap-3 mb-8 xs:mb-12">
          {faqCategories.map((category, index) => (
            <div
              key={category.id}
              className={`inline-flex items-center gap-1.5 xs:gap-2 px-3 xs:px-4 py-1.5 xs:py-2 rounded-full text-xs xs:text-sm font-medium border ${category.color}`}
            >
              <span className="text-sm xs:text-base">{category.icon}</span>
              {category.name}
            </div>
          ))}
        </div>

        {/* FAQ Items */}
        <div className="space-y-4 xs:space-y-6">
          {faqItems.map((item) => (
            <div key={item.id}>
              <div className="bg-white/70 backdrop-blur-sm rounded-2xl border border-gray-200 overflow-hidden">
                {/* Question */}
                <button
                  onClick={() => toggleItem(item.id)}
                  className="w-full p-4 xs:p-6 text-left flex items-center justify-between hover:bg-gray-50/50 transition-colors duration-200"
                >
                  <div className="flex items-start gap-3 xs:gap-4 flex-1">
                    {/* Badge de catégorie */}
                    <div
                      className={`inline-flex items-center px-2 xs:px-3 py-1 xs:py-1.5 rounded-full text-xs font-semibold border ${
                        faqCategories.find((cat) => cat.name === item.category)
                          ?.color || "bg-gray-100 text-gray-700 border-gray-200"
                      }`}
                    >
                      {item.category}
                    </div>

                    {/* Question */}
                    <h3 className="text-sm xs:text-base sm:text-lg font-semibold text-[#101010] leading-relaxed">
                      {item.question}
                    </h3>
                  </div>

                  {/* Icône de toggle */}
                  <div
                    className={`ml-4 flex-shrink-0 transition-transform duration-200 ${
                      openItem === item.id ? "rotate-180" : ""
                    }`}
                  >
                    <svg
                      className="w-5 xs:w-6 h-5 xs:h-6 text-gray-400"
                      fill="none"
                      stroke="currentColor"
                      viewBox="0 0 24 24"
                    >
                      <path
                        strokeLinecap="round"
                        strokeLinejoin="round"
                        strokeWidth={2}
                        d="M19 9l-7 7-7-7"
                      />
                    </svg>
                  </div>
                </button>

                {/* Réponse */}
                <AnimatePresence>
                  {openItem === item.id && (
                    <div className="overflow-hidden">
                      <div className="px-4 xs:px-6 pb-4 xs:pb-6">
                        <div className="border-t border-gray-200 pt-4 xs:pt-6">
                          <p className="text-sm xs:text-base text-gray-600 leading-relaxed">
                            {item.answer}
                          </p>
                        </div>
                      </div>
                    </div>
                  )}
                </AnimatePresence>
              </div>
            </div>
          ))}
        </div>

        {/* Call-to-action */}
        <div className="text-center mt-12 xs:mt-16 sm:mt-20">
          <div className="bg-gradient-to-r from-[#635BFF]/10 to-[#7D76FF]/10 rounded-3xl border border-[#635BFF]/20 p-6 xs:p-8 sm:p-10">
            <div className="text-3xl xs:text-4xl mb-4 xs:mb-6">💬</div>
            <h3 className="text-xl xs:text-2xl sm:text-3xl font-bold text-[#101010] mb-2 xs:mb-3">
              Vous ne trouvez pas votre réponse ?
            </h3>
            <p className="text-sm xs:text-base sm:text-lg text-gray-600 mb-6 xs:mb-8">
              Notre équipe d'experts est là pour vous aider 24/7
            </p>

            <div className="flex flex-col sm:flex-row gap-3 xs:gap-4 justify-center items-center">
              <button className="bg-[#635BFF] hover:bg-[#7D76FF] text-white px-6 xs:px-8 sm:px-10 py-2 xs:py-3 sm:py-4 text-sm xs:text-base sm:text-lg font-semibold rounded-xl shadow-lg hover:shadow-xl transition-all duration-300">
                Contacter le support
              </button>
              <button className="border-2 border-[#635BFF] hover:border-[#7D76FF] text-[#635BFF] hover:text-[#7D76FF] px-6 xs:px-8 sm:px-10 py-2 xs:py-3 sm:py-4 text-sm xs:text-base sm:text-lg font-semibold rounded-xl transition-all duration-300">
                Voir la documentation
              </button>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default FAQ;
