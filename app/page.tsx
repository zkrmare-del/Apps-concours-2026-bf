export default function Home() {
  return (
    <div className="min-h-screen bg-gradient-to-br from-blue-50 to-indigo-100">
      {/* Hero Section */}
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-20">
        <div className="text-center">
          <h2 className="text-5xl font-bold text-gray-900 mb-4">
            Préparez vos concours 2026
          </h2>
          <p className="text-xl text-gray-600 mb-8">
            La plateforme complète pour réussir votre préparation au niveau licence
          </p>
          <div className="flex justify-center gap-4">
            <button className="bg-blue-600 hover:bg-blue-700 text-white px-8 py-3 rounded-lg font-semibold">
              Commencer maintenant
            </button>
            <button className="bg-white hover:bg-gray-50 text-blue-600 border-2 border-blue-600 px-8 py-3 rounded-lg font-semibold">
              En savoir plus
            </button>
          </div>
        </div>
      </div>

      {/* Features Section */}
      <div className="bg-white py-20">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <h3 className="text-3xl font-bold text-center mb-12">Nos fonctionnalités</h3>
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-8">
            <div className="text-center">
              <div className="text-4xl mb-4">📖</div>
              <h4 className="font-semibold text-lg mb-2">Cours complets</h4>
              <p className="text-gray-600">Accédez à des ressources pédagogiques de qualité</p>
            </div>
            <div className="text-center">
              <div className="text-4xl mb-4">✅</div>
              <h4 className="font-semibold text-lg mb-2">Quiz & Exercices</h4>
              <p className="text-gray-600">Testez vos connaissances avec des QCM</p>
            </div>
            <div className="text-center">
              <div className="text-4xl mb-4">📊</div>
              <h4 className="font-semibold text-lg mb-2">Suivi de progrès</h4>
              <p className="text-gray-600">Suivez votre évolution en temps réel</p>
            </div>
            <div className="text-center">
              <div className="text-4xl mb-4">🏆</div>
              <h4 className="font-semibold text-lg mb-2">Classements</h4>
              <p className="text-gray-600">Comparez vos résultats avec d'autres</p>
            </div>
          </div>
        </div>
      </div>

      {/* CTA Section */}
      <div className="bg-gradient-to-r from-blue-600 to-indigo-600 py-12">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 text-center">
          <h3 className="text-3xl font-bold text-white mb-4">
            Prêt à réussir?
          </h3>
          <button className="bg-white text-blue-600 px-8 py-3 rounded-lg font-semibold hover:bg-gray-50">
            Créer un compte
          </button>
        </div>
      </div>
    </div>
  );
}
