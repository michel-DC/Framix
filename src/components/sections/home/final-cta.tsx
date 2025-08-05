import React from "react";

const FinalCTA: React.FC = () => {
  const guarantees = [
    {
      icon: "🛡️",
      title: "Garantie 14 jours",
      description: "Essai gratuit sans engagement",
    },
    {
      icon: "⚡",
      title: "Création en 5 min",
      description: "Votre première page rapidement",
    },
    {
      icon: "🎯",
      title: "Templates optimisés",
      description: "Taux de conversion élevés",
    },
    {
      icon: "💬",
      title: "Support 24/7",
      description: "Aide disponible à tout moment",
    },
  ];

  const trustBadges = [
    "SSL Sécurisé",
    "GDPR Conforme",
    "99.9% Uptime",
    "Support Français",
  ];

  return (
    <section className="py-12 xs:py-16 sm:py-20 lg:py-24 bg-gradient-to-br from-[#635BFF]/5 via-white/50 to-[#7D76FF]/5 backdrop-blur-sm">
      <div className="max-w-6xl mx-auto px-4 xs:px-6 sm:px-8 lg:px-12">
        {/* Header principal */}
        <div className="text-center mb-8 xs:mb-12 sm:mb-16">
          {/* Badge principal */}
          <div className="inline-flex items-center gap-2 bg-[#E8FCEB] text-[#166534] px-3 xs:px-4 py-1.5 xs:py-2 rounded-full text-xs xs:text-sm font-medium mb-4 xs:mb-6 border border-[#BBF7D0]">
            <span className="w-1.5 xs:w-2 h-1.5 xs:h-2 bg-[#22C55E] rounded-full"></span>
            Prêt à commencer ?
          </div>

          {/* Titre principal */}
          <h2 className="text-2xl xs:text-3xl sm:text-4xl md:text-5xl lg:text-6xl font-bold text-[#101010] mb-3 xs:mb-4 sm:mb-6">
            Créez votre landing page
            <br />
            <span className="text-[#635BFF]">en 5 minutes</span>
          </h2>

          {/* Sous-titre */}
          <p className="text-sm xs:text-base sm:text-lg md:text-xl text-gray-600 max-w-3xl mx-auto leading-relaxed">
            Rejoignez 500+ entrepreneurs qui ont déjà transformé leurs idées en
            landing pages qui convertissent.
          </p>
        </div>

        {/* Garanties */}
        <div className="grid grid-cols-2 lg:grid-cols-4 gap-4 xs:gap-6 mb-8 xs:mb-12 sm:mb-16">
          {guarantees.map((guarantee, index) => (
            <div
              key={index}
              className="text-center p-4 xs:p-6 bg-white/70 backdrop-blur-sm rounded-2xl border border-gray-200"
            >
              <div className="text-2xl xs:text-3xl sm:text-4xl mb-2 xs:mb-3">
                {guarantee.icon}
              </div>
              <h3 className="font-semibold text-sm xs:text-base text-[#101010] mb-1 xs:mb-2">
                {guarantee.title}
              </h3>
              <p className="text-xs xs:text-sm text-gray-600">
                {guarantee.description}
              </p>
            </div>
          ))}
        </div>

        {/* Call-to-action principal */}
        <div className="text-center mb-8 xs:mb-12">
          <div className="bg-gradient-to-r from-[#635BFF] to-[#7D76FF] rounded-3xl p-6 xs:p-8 sm:p-10 lg:p-12 text-white shadow-2xl">
            <div className="text-4xl xs:text-5xl sm:text-6xl mb-4 xs:mb-6">
              🚀
            </div>
            <h3 className="text-xl xs:text-2xl sm:text-3xl lg:text-4xl font-bold mb-3 xs:mb-4">
              Commencez gratuitement dès maintenant
            </h3>
            <p className="text-sm xs:text-base sm:text-lg mb-6 xs:mb-8 opacity-90">
              Aucune carte de crédit requise • Essai de 14 jours • Annulation à
              tout moment
            </p>

            <div className="flex flex-col sm:flex-row gap-3 xs:gap-4 justify-center items-center">
              <button className="bg-white text-[#635BFF] hover:bg-gray-50 px-8 xs:px-10 sm:px-12 py-3 xs:py-4 sm:py-5 text-sm xs:text-base sm:text-lg font-bold rounded-xl shadow-lg hover:shadow-xl transition-all duration-300">
                Créer ma landing page
              </button>
              <button className="border-2 border-white/30 hover:border-white/50 text-white px-8 xs:px-10 sm:px-12 py-3 xs:py-4 sm:py-5 text-sm xs:text-base sm:text-lg font-semibold rounded-xl transition-all duration-300">
                Voir la démo
              </button>
            </div>
          </div>
        </div>

        {/* Badges de confiance */}
        <div className="text-center mb-8 xs:mb-12">
          <p className="text-xs xs:text-sm text-gray-500 mb-4 xs:mb-6">
            Certifications et garanties
          </p>
          <div className="flex flex-wrap justify-center gap-2 xs:gap-3">
            {trustBadges.map((badge, index) => (
              <div
                key={index}
                className="inline-flex items-center gap-1.5 px-3 xs:px-4 py-1.5 xs:py-2 bg-white/70 backdrop-blur-sm rounded-full text-xs xs:text-sm font-medium border border-gray-200"
              >
                <span className="w-1.5 xs:w-2 h-1.5 xs:h-2 bg-green-500 rounded-full"></span>
                {badge}
              </div>
            ))}
          </div>
        </div>

        {/* Statistiques finales */}
        <div className="bg-white/70 backdrop-blur-sm rounded-3xl border border-gray-200 p-6 xs:p-8 sm:p-10">
          <div className="grid grid-cols-2 md:grid-cols-4 gap-4 xs:gap-6">
            <div className="text-center">
              <div className="text-2xl xs:text-3xl sm:text-4xl font-bold text-[#635BFF] mb-1 xs:mb-2">
                500+
              </div>
              <div className="text-xs xs:text-sm text-gray-600">
                Clients satisfaits
              </div>
            </div>
            <div className="text-center">
              <div className="text-2xl xs:text-3xl sm:text-4xl font-bold text-[#635BFF] mb-1 xs:mb-2">
                1000+
              </div>
              <div className="text-xs xs:text-sm text-gray-600">
                Pages créées
              </div>
            </div>
            <div className="text-center">
              <div className="text-2xl xs:text-3xl sm:text-4xl font-bold text-[#635BFF] mb-1 xs:mb-2">
                98%
              </div>
              <div className="text-xs xs:text-sm text-gray-600">
                Taux de satisfaction
              </div>
            </div>
            <div className="text-center">
              <div className="text-2xl xs:text-3xl sm:text-4xl font-bold text-[#635BFF] mb-1 xs:mb-2">
                24/7
              </div>
              <div className="text-xs xs:text-sm text-gray-600">
                Support disponible
              </div>
            </div>
          </div>
        </div>

        {/* Message de fin */}
        <div className="text-center mt-8 xs:mt-12">
          <div className="inline-flex items-center gap-2 bg-[#FEF3C7] text-[#92400E] px-3 xs:px-4 py-1.5 xs:py-2 rounded-full text-xs xs:text-sm font-medium border border-[#FDE68A]">
            <span className="w-1.5 xs:w-2 h-1.5 xs:h-2 bg-[#F59E0B] rounded-full"></span>
            Rejoignez la révolution no-code
          </div>
        </div>
      </div>
    </section>
  );
};

export default FinalCTA;
