import React from "react";

const Testimonials: React.FC = () => {
  const testimonials = [
    {
      id: 1,
      name: "Marie Dubois",
      role: "Fondatrice",
      company: "StartupTech",
      avatar: "👩‍💼",
      content:
        "Framix a révolutionné notre approche des landing pages. En 2 heures, j'ai créé une page qui convertit 3x mieux qu'avant !",
      rating: 5,
      badge: "Conversion +300%",
      badgeColor: "bg-green-100 text-green-700 border-green-200",
      color: "bg-gradient-to-br from-blue-50 to-indigo-50 border-blue-200",
    },
    {
      id: 2,
      name: "Thomas Martin",
      role: "Marketing Manager",
      company: "E-commerce Pro",
      avatar: "👨‍💻",
      content:
        "L'interface drag & drop est incroyablement intuitive. Mes équipes créent maintenant des pages en quelques minutes.",
      rating: 5,
      badge: "Temps -80%",
      badgeColor: "bg-purple-100 text-purple-700 border-purple-200",
      color: "bg-gradient-to-br from-purple-50 to-pink-50 border-purple-200",
    },
    {
      id: 3,
      name: "Sophie Bernard",
      role: "Freelance Designer",
      company: "Creative Studio",
      avatar: "👩‍🎨",
      content:
        "Les templates sont magnifiques et personnalisables. Mes clients adorent le résultat professionnel obtenu.",
      rating: 5,
      badge: "Satisfaction 100%",
      badgeColor: "bg-yellow-100 text-yellow-700 border-yellow-200",
      color: "bg-gradient-to-br from-green-50 to-emerald-50 border-green-200",
    },
    {
      id: 4,
      name: "Alexandre Moreau",
      role: "CEO",
      company: "Digital Agency",
      avatar: "👨‍💼",
      content:
        "L'intégration avec nos outils existants est parfaite. Nous gagnons un temps fou sur nos projets clients.",
      rating: 5,
      badge: "Efficacité +150%",
      badgeColor: "bg-red-100 text-red-700 border-red-200",
      color: "bg-gradient-to-br from-yellow-50 to-orange-50 border-yellow-200",
    },
  ];

  const stats = [
    { number: "500+", label: "Clients satisfaits" },
    { number: "98%", label: "Taux de satisfaction" },
    { number: "4.9/5", label: "Note moyenne" },
    { number: "24h", label: "Support réponse" },
  ];

  return (
    <section
      className="py-12 xs:py-16 sm:py-20 lg:py-24 bg-white/60 backdrop-blur-sm"
      id="testimonials"
    >
      <div className="max-w-7xl mx-auto px-4 xs:px-6 sm:px-8 lg:px-12">
        {/* Header de la section */}
        <div className="text-center mb-8 xs:mb-12 sm:mb-16">
          {/* Badge principal */}
          <div className="inline-flex items-center gap-2 bg-[#FEF3C7] text-[#92400E] px-3 xs:px-4 py-1.5 xs:py-2 rounded-full text-xs xs:text-sm font-medium mb-4 xs:mb-6 border border-[#FDE68A]">
            <span className="w-1.5 xs:w-2 h-1.5 xs:h-2 bg-[#F59E0B] rounded-full"></span>
            Témoignages clients
          </div>

          {/* Titre */}
          <h2 className="text-2xl xs:text-3xl sm:text-4xl md:text-5xl lg:text-6xl font-bold text-[#101010] mb-3 xs:mb-4 sm:mb-6">
            Ils nous font confiance
          </h2>

          {/* Sous-titre */}
          <p className="text-sm xs:text-base sm:text-lg md:text-xl text-gray-600 max-w-3xl xs:max-w-4xl mx-auto leading-relaxed">
            Découvrez ce que nos clients disent de Framix et comment nous les
            aidons à créer des landing pages qui convertissent.
          </p>
        </div>

        {/* Statistiques de confiance */}
        <div className="grid grid-cols-2 md:grid-cols-4 gap-4 xs:gap-6 mb-8 xs:mb-12 sm:mb-16">
          {stats.map((stat, index) => (
            <div
              key={index}
              className="text-center p-4 xs:p-6 bg-white/70 backdrop-blur-sm rounded-2xl border border-gray-200"
            >
              <div className="text-2xl xs:text-3xl sm:text-4xl font-bold text-[#635BFF] mb-1 xs:mb-2">
                {stat.number}
              </div>
              <div className="text-xs xs:text-sm text-gray-600">
                {stat.label}
              </div>
            </div>
          ))}
        </div>

        {/* Grille de témoignages */}
        <div className="grid grid-cols-1 md:grid-cols-2 gap-6 xs:gap-8 sm:gap-10">
          {testimonials.map((testimonial) => (
            <div key={testimonial.id} className="relative">
              {/* Card principale */}
              <div
                className={`relative p-6 xs:p-8 rounded-3xl border-2 ${testimonial.color}`}
              >
                {/* Badge de résultat */}
                <div
                  className={`inline-flex items-center px-3 xs:px-4 py-1.5 xs:py-2 rounded-full text-xs xs:text-sm font-semibold border ${testimonial.badgeColor} mb-4 xs:mb-6`}
                >
                  {testimonial.badge}
                </div>

                {/* Étoiles */}
                <div className="flex gap-1 mb-4 xs:mb-6">
                  {[...Array(testimonial.rating)].map((_, i) => (
                    <span
                      key={i}
                      className="text-lg xs:text-xl text-yellow-400"
                    >
                      ⭐
                    </span>
                  ))}
                </div>

                {/* Contenu du témoignage */}
                <blockquote className="text-sm xs:text-base sm:text-lg text-gray-700 leading-relaxed mb-6 xs:mb-8 italic">
                  "{testimonial.content}"
                </blockquote>

                {/* Informations client */}
                <div className="flex items-center gap-3 xs:gap-4">
                  <div className="text-2xl xs:text-3xl sm:text-4xl">
                    {testimonial.avatar}
                  </div>
                  <div>
                    <div className="font-semibold text-sm xs:text-base text-[#101010]">
                      {testimonial.name}
                    </div>
                    <div className="text-xs xs:text-sm text-gray-600">
                      {testimonial.role} chez {testimonial.company}
                    </div>
                  </div>
                </div>

                {/* Guillemets décoratifs */}
                <div className="absolute top-4 xs:top-6 right-4 xs:right-6 text-4xl xs:text-5xl text-gray-200 opacity-50">
                  "
                </div>
              </div>
            </div>
          ))}
        </div>

        {/* Section de confiance */}
        <div className="mt-12 xs:mt-16 sm:mt-20">
          <div className="bg-gradient-to-r from-[#635BFF]/10 to-[#7D76FF]/10 rounded-3xl border border-[#635BFF]/20 p-6 xs:p-8 sm:p-10">
            <div className="text-center">
              <div className="text-2xl xs:text-3xl sm:text-4xl mb-4 xs:mb-6">
                🏆
              </div>
              <h3 className="text-xl xs:text-2xl sm:text-3xl font-bold text-[#101010] mb-2 xs:mb-3">
                Rejoignez 500+ entrepreneurs satisfaits
              </h3>
              <p className="text-sm xs:text-base sm:text-lg text-gray-600 mb-6 xs:mb-8 max-w-2xl mx-auto">
                Commencez votre essai gratuit de 14 jours. Aucune carte de
                crédit requise.
              </p>

              <div className="flex flex-col sm:flex-row gap-3 xs:gap-4 justify-center items-center">
                <button className="bg-[#635BFF] hover:bg-[#7D76FF] text-white px-6 xs:px-8 sm:px-10 py-2 xs:py-3 sm:py-4 text-sm xs:text-base sm:text-lg font-semibold rounded-xl shadow-lg hover:shadow-xl transition-all duration-300">
                  Commencer gratuitement
                </button>
                <div className="flex items-center gap-2 text-xs xs:text-sm text-gray-500">
                  <span className="w-2 h-2 bg-green-500 rounded-full"></span>
                  Essai gratuit de 14 jours
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default Testimonials;
