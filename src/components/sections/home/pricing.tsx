import React from "react";

const Pricing: React.FC = () => {
  const plans = [
    {
      id: 1,
      name: "Gratuit",
      price: "0€",
      period: "/mois",
      description: "Parfait pour tester et commencer",
      badge: "Essai gratuit",
      badgeColor: "bg-green-100 text-green-700 border-green-200",
      color: "bg-gradient-to-br from-green-50 to-emerald-50 border-green-200",
      features: [
        "1 landing page",
        "5 templates de base",
        "Support par email",
        "Hébergement inclus",
        "Analytics de base",
      ],
      notIncluded: [
        "Templates premium",
        "Domaine personnalisé",
        "Support prioritaire",
        "Intégrations avancées",
      ],
      cta: "Commencer gratuitement",
      popular: false,
    },
    {
      id: 2,
      name: "Pro",
      price: "29€",
      period: "/mois",
      description: "Pour les professionnels qui veulent plus",
      badge: "Le plus populaire",
      badgeColor: "bg-[#635BFF]/10 text-[#635BFF] border-[#635BFF]/20",
      color:
        "bg-gradient-to-br from-[#635BFF]/5 to-[#7D76FF]/5 border-[#635BFF]",
      features: [
        "Landing pages illimitées",
        "50+ templates premium",
        "Domaine personnalisé",
        "Support prioritaire 24/7",
        "Analytics avancées",
        "Intégrations (Stripe, Mailchimp)",
        "A/B testing",
        "Backup automatique",
      ],
      notIncluded: ["API personnalisée", "Support dédié"],
      cta: "Commencer l'essai gratuit",
      popular: true,
    },
    {
      id: 3,
      name: "Entreprise",
      price: "99€",
      period: "/mois",
      description: "Pour les équipes et agences",
      badge: "Sur mesure",
      badgeColor: "bg-purple-100 text-purple-700 border-purple-200",
      color: "bg-gradient-to-br from-purple-50 to-pink-50 border-purple-200",
      features: [
        "Tout du plan Pro",
        "API personnalisée",
        "Support dédié",
        "Formation équipe",
        "SSO & LDAP",
        "Audit de sécurité",
        "SLA garanti",
        "Migration assistée",
      ],
      notIncluded: [],
      cta: "Contacter les ventes",
      popular: false,
    },
  ];

  return (
    <section
      className="py-12 xs:py-16 sm:py-20 lg:py-24 bg-gradient-to-br from-gray-50/50 to-white/50 backdrop-blur-sm"
      id="pricing"
    >
      <div className="max-w-7xl mx-auto px-4 xs:px-6 sm:px-8 lg:px-12">
        {/* Header de la section */}
        <div className="text-center mb-8 xs:mb-12 sm:mb-16">
          {/* Badge principal */}
          <div className="inline-flex items-center gap-2 bg-[#E8FCEB] text-[#166534] px-3 xs:px-4 py-1.5 xs:py-2 rounded-full text-xs xs:text-sm font-medium mb-4 xs:mb-6 border border-[#BBF7D0]">
            <span className="w-1.5 xs:w-2 h-1.5 xs:h-2 bg-[#22C55E] rounded-full"></span>
            Tarifs transparents
          </div>

          {/* Titre */}
          <h2 className="text-2xl xs:text-3xl sm:text-4xl md:text-5xl lg:text-6xl font-bold text-[#101010] mb-3 xs:mb-4 sm:mb-6">
            Choisissez votre plan
          </h2>

          {/* Sous-titre */}
          <p className="text-sm xs:text-base sm:text-lg md:text-xl text-gray-600 max-w-3xl xs:max-w-4xl mx-auto leading-relaxed">
            Des tarifs simples et transparents. Commencez gratuitement et
            évoluez selon vos besoins.
          </p>
        </div>

        {/* Grille des plans */}
        <div className="grid grid-cols-1 md:grid-cols-3 gap-6 xs:gap-8 sm:gap-10">
          {plans.map((plan, index) => (
            <div
              key={plan.id}
              className={`relative ${plan.popular ? "md:scale-105" : ""}`}
            >
              {/* Badge populaire */}
              {plan.popular && (
                <div className="absolute -top-3 left-1/2 transform -translate-x-1/2 z-10">
                  <div className="bg-[#635BFF] text-white px-4 xs:px-6 py-1 xs:py-2 rounded-full text-xs xs:text-sm font-semibold shadow-lg">
                    ⭐ Le plus populaire
                  </div>
                </div>
              )}

              {/* Card principale */}
              <div
                className={`relative p-6 xs:p-8 rounded-3xl border-2 ${plan.color} h-full`}
              >
                {/* Badge du plan */}
                <div
                  className={`inline-flex items-center px-3 xs:px-4 py-1.5 xs:py-2 rounded-full text-xs xs:text-sm font-semibold border ${plan.badgeColor} mb-4 xs:mb-6`}
                >
                  {plan.badge}
                </div>

                {/* Nom et prix */}
                <div className="mb-4 xs:mb-6">
                  <h3 className="text-xl xs:text-2xl sm:text-3xl font-bold text-[#101010] mb-2">
                    {plan.name}
                  </h3>
                  <div className="flex items-baseline gap-1">
                    <span className="text-3xl xs:text-4xl sm:text-5xl font-bold text-[#635BFF]">
                      {plan.price}
                    </span>
                    <span className="text-sm xs:text-base text-gray-600">
                      {plan.period}
                    </span>
                  </div>
                  <p className="text-sm xs:text-base text-gray-600 mt-2">
                    {plan.description}
                  </p>
                </div>

                {/* Fonctionnalités incluses */}
                <div className="mb-6 xs:mb-8">
                  <h4 className="font-semibold text-sm xs:text-base text-[#101010] mb-3 xs:mb-4">
                    ✅ Inclus :
                  </h4>
                  <ul className="space-y-2 xs:space-y-3">
                    {plan.features.map((feature, i) => (
                      <li
                        key={i}
                        className="flex items-center gap-2 text-sm xs:text-base text-gray-700"
                      >
                        <span className="w-1.5 xs:w-2 h-1.5 xs:h-2 bg-green-500 rounded-full flex-shrink-0"></span>
                        {feature}
                      </li>
                    ))}
                  </ul>
                </div>

                {/* Fonctionnalités non incluses */}
                {plan.notIncluded.length > 0 && (
                  <div className="mb-6 xs:mb-8">
                    <h4 className="font-semibold text-sm xs:text-base text-[#101010] mb-3 xs:mb-4">
                      ❌ Non inclus :
                    </h4>
                    <ul className="space-y-2 xs:space-y-3">
                      {plan.notIncluded.map((feature, i) => (
                        <li
                          key={i}
                          className="flex items-center gap-2 text-sm xs:text-base text-gray-500"
                        >
                          <span className="w-1.5 xs:w-2 h-1.5 xs:h-2 bg-gray-300 rounded-full flex-shrink-0"></span>
                          {feature}
                        </li>
                      ))}
                    </ul>
                  </div>
                )}

                {/* Bouton CTA */}
                <button
                  className={`w-full py-3 xs:py-4 text-sm xs:text-base font-semibold rounded-xl transition-all duration-300 ${
                    plan.popular
                      ? "bg-[#635BFF] hover:bg-[#7D76FF] text-white shadow-lg hover:shadow-xl"
                      : "bg-white hover:bg-gray-50 text-[#635BFF] border-2 border-[#635BFF] hover:border-[#7D76FF]"
                  }`}
                >
                  {plan.cta}
                </button>
              </div>
            </div>
          ))}
        </div>

        {/* Garantie */}
        <div className="mt-12 xs:mt-16 sm:mt-20 text-center">
          <div className="bg-white/70 backdrop-blur-sm rounded-2xl border border-gray-200 p-6 xs:p-8 max-w-2xl mx-auto">
            <div className="flex flex-col sm:flex-row items-center gap-4 xs:gap-6">
              <div className="text-3xl xs:text-4xl">🛡️</div>
              <div className="text-center sm:text-left">
                <h3 className="text-lg xs:text-xl font-semibold text-[#101010] mb-2">
                  Garantie satisfait ou remboursé
                </h3>
                <p className="text-sm xs:text-base text-gray-600">
                  Essai gratuit de 14 jours. Annulez à tout moment sans
                  engagement.
                </p>
              </div>
            </div>
          </div>
        </div>

        {/* FAQ rapide */}
        <div className="mt-8 xs:mt-12 sm:mt-16">
          <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-4 xs:gap-6">
            <div className="text-center p-4 xs:p-6 bg-white/50 backdrop-blur-sm rounded-xl border border-gray-200">
              <div className="text-2xl mb-2">❓</div>
              <h4 className="font-semibold text-sm xs:text-base text-[#101010] mb-1">
                Puis-je changer de plan ?
              </h4>
              <p className="text-xs xs:text-sm text-gray-600">
                Oui, à tout moment depuis votre dashboard
              </p>
            </div>
            <div className="text-center p-4 xs:p-6 bg-white/50 backdrop-blur-sm rounded-xl border border-gray-200">
              <div className="text-2xl mb-2">💳</div>
              <h4 className="font-semibold text-sm xs:text-base text-[#101010] mb-1">
                Carte de crédit requise ?
              </h4>
              <p className="text-xs xs:text-sm text-gray-600">
                Non pour l'essai gratuit
              </p>
            </div>
            <div className="text-center p-4 xs:p-6 bg-white/50 backdrop-blur-sm rounded-xl border border-gray-200">
              <div className="text-2xl mb-2">📞</div>
              <h4 className="font-semibold text-sm xs:text-base text-[#101010] mb-1">
                Support disponible ?
              </h4>
              <p className="text-xs xs:text-sm text-gray-600">
                Email, chat et téléphone 24/7
              </p>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default Pricing;
