import React from "react";

const Features: React.FC = () => {
  const features = [
    {
      id: 1,
      title: "Templates prêts à l'emploi",
      description:
        "50+ templates professionnels pour tous les secteurs d'activité",
      icon: "📋",
      badge: "Populaire",
      badgeColor: "bg-red-100 text-red-700 border-red-200",
      color: "bg-gradient-to-br from-blue-50 to-indigo-50 border-blue-200",
    },
    {
      id: 2,
      title: "Drag & Drop intuitif",
      description: "Modifiez votre page en glissant-déposant les éléments",
      icon: "🎯",
      badge: "Nouveau",
      badgeColor: "bg-green-100 text-green-700 border-green-200",
      color: "bg-gradient-to-br from-purple-50 to-pink-50 border-purple-200",
    },
    {
      id: 3,
      title: "Design responsive",
      description: "S'adapte parfaitement à tous les écrans automatiquement",
      icon: "📱",
      badge: "Essentiel",
      badgeColor: "bg-blue-100 text-blue-700 border-blue-200",
      color: "bg-gradient-to-br from-green-50 to-emerald-50 border-green-200",
    },
    {
      id: 4,
      title: "Optimisation SEO",
      description: "Meta tags, structure HTML et vitesse optimisées",
      icon: "🔍",
      badge: "Pro",
      badgeColor: "bg-purple-100 text-purple-700 border-purple-200",
      color: "bg-gradient-to-br from-yellow-50 to-orange-50 border-yellow-200",
    },
    {
      id: 5,
      title: "Analytics intégrés",
      description: "Suivez vos performances avec des métriques détaillées",
      icon: "📊",
      badge: "Avancé",
      badgeColor: "bg-indigo-100 text-indigo-700 border-indigo-200",
      color: "bg-gradient-to-br from-pink-50 to-rose-50 border-pink-200",
    },
    {
      id: 6,
      title: "Intégrations multiples",
      description: "Connectez vos outils favoris en quelques clics",
      icon: "🔗",
      badge: "Flexible",
      badgeColor: "bg-cyan-100 text-cyan-700 border-cyan-200",
      color: "bg-gradient-to-br from-gray-50 to-slate-50 border-gray-200",
    },
    {
      id: 7,
      title: "Hébergement inclus",
      description: "Hébergement rapide et sécurisé inclus dans tous les plans",
      icon: "☁️",
      badge: "Inclus",
      badgeColor: "bg-emerald-100 text-emerald-700 border-emerald-200",
      color: "bg-gradient-to-br from-teal-50 to-cyan-50 border-teal-200",
    },
    {
      id: 8,
      title: "Support 24/7",
      description: "Équipe d'experts disponible pour vous accompagner",
      icon: "💬",
      badge: "Premium",
      badgeColor: "bg-amber-100 text-amber-700 border-amber-200",
      color: "bg-gradient-to-br from-violet-50 to-purple-50 border-violet-200",
    },
  ];

  return (
    <section
      className="py-12 xs:py-16 sm:py-20 lg:py-24 bg-gradient-to-br from-gray-50/50 to-white/50 backdrop-blur-sm"
      id="features"
    >
      <div className="max-w-7xl mx-auto px-4 xs:px-6 sm:px-8 lg:px-12">
        {/* Header de la section */}
        <div className="text-center mb-8 xs:mb-12 sm:mb-16">
          {/* Badge principal */}
          <div className="inline-flex items-center gap-2 bg-[#FEF3C7] text-[#92400E] px-3 xs:px-4 py-1.5 xs:py-2 rounded-full text-xs xs:text-sm font-medium mb-4 xs:mb-6 border border-[#FDE68A]">
            <span className="w-1.5 xs:w-2 h-1.5 xs:h-2 bg-[#F59E0B] rounded-full"></span>
            Fonctionnalités avancées
          </div>

          {/* Titre */}
          <h2 className="text-2xl xs:text-3xl sm:text-4xl md:text-5xl lg:text-6xl font-bold text-[#101010] mb-3 xs:mb-4 sm:mb-6">
            Tout ce dont vous avez besoin
          </h2>

          {/* Sous-titre */}
          <p className="text-sm xs:text-base sm:text-lg md:text-xl text-gray-600 max-w-3xl xs:max-w-4xl mx-auto leading-relaxed">
            Des outils puissants et intuitifs pour créer des landing pages qui
            convertissent. Tout est inclus, de la conception à la publication.
          </p>
        </div>

        {/* Grille de fonctionnalités */}
        <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-4 xs:gap-6 sm:gap-8">
          {features.map((feature) => (
            <div key={feature.id} className="relative">
              {/* Card principale */}
              <div
                className={`relative p-4 xs:p-6 rounded-2xl border-2 ${feature.color} h-full`}
              >
                {/* Badge */}
                <div
                  className={`inline-flex items-center px-2 xs:px-3 py-1 xs:py-1.5 rounded-full text-xs font-semibold border ${feature.badgeColor} mb-3 xs:mb-4`}
                >
                  {feature.badge}
                </div>

                {/* Icône */}
                <div className="text-2xl xs:text-3xl sm:text-4xl mb-3 xs:mb-4">
                  {feature.icon}
                </div>

                {/* Titre */}
                <h3 className="text-base xs:text-lg sm:text-xl font-bold text-[#101010] mb-2 xs:mb-3 leading-tight">
                  {feature.title}
                </h3>

                {/* Description */}
                <p className="text-sm xs:text-base text-gray-600 leading-relaxed">
                  {feature.description}
                </p>
              </div>
            </div>
          ))}
        </div>

        {/* Section statistiques */}
        <div className="mt-12 xs:mt-16 sm:mt-20 lg:mt-24">
          <div className="bg-white/70 backdrop-blur-sm rounded-3xl border border-gray-200 p-6 xs:p-8 sm:p-10 lg:p-12">
            <div className="grid grid-cols-2 md:grid-cols-4 gap-4 xs:gap-6 sm:gap-8">
              <div className="text-center">
                <div className="text-2xl xs:text-3xl sm:text-4xl font-bold text-[#635BFF] mb-1 xs:mb-2">
                  50+
                </div>
                <div className="text-xs xs:text-sm text-gray-600">
                  Templates
                </div>
              </div>
              <div className="text-center">
                <div className="text-2xl xs:text-3xl sm:text-4xl font-bold text-[#635BFF] mb-1 xs:mb-2">
                  100+
                </div>
                <div className="text-xs xs:text-sm text-gray-600">Blocs</div>
              </div>
              <div className="text-center">
                <div className="text-2xl xs:text-3xl sm:text-4xl font-bold text-[#635BFF] mb-1 xs:mb-2">
                  24/7
                </div>
                <div className="text-xs xs:text-sm text-gray-600">Support</div>
              </div>
              <div className="text-center">
                <div className="text-2xl xs:text-3xl sm:text-4xl font-bold text-[#635BFF] mb-1 xs:mb-2">
                  99.9%
                </div>
                <div className="text-xs xs:text-sm text-gray-600">Uptime</div>
              </div>
            </div>
          </div>
        </div>

        {/* Call-to-action */}
        <div className="text-center mt-8 xs:mt-12 sm:mt-16">
          <div className="inline-flex items-center gap-2 bg-[#E8FCEB] text-[#166534] px-3 xs:px-4 py-1.5 xs:py-2 rounded-full text-xs xs:text-sm font-medium mb-4 xs:mb-6 border border-[#BBF7D0]">
            <span className="w-1.5 xs:w-2 h-1.5 xs:h-2 bg-[#22C55E] rounded-full"></span>
            Essai gratuit de 14 jours
          </div>

          <p className="text-sm xs:text-base sm:text-lg text-gray-600 mb-4 xs:mb-6">
            Découvrez toutes ces fonctionnalités gratuitement
          </p>

          <button className="bg-[#635BFF] hover:bg-[#7D76FF] text-white px-6 xs:px-8 sm:px-10 py-2 xs:py-3 sm:py-4 text-sm xs:text-base sm:text-lg font-semibold rounded-xl shadow-lg hover:shadow-xl transition-all duration-300">
            Essayer gratuitement
          </button>
        </div>
      </div>
    </section>
  );
};

export default Features;
