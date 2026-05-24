import type { Metadata } from 'next';
import Link from 'next/link';
import './globals.css';

export const metadata: Metadata = {
  title: 'Apps Concours 2026 - Préparation Licence',
  description: 'Préparez vos concours 2026 avec notre plateforme moderne et complète',
};

export default function RootLayout({
  children,
}: {
  children: React.ReactNode;
}) {
  return (
    <html lang="fr">
      <body className="bg-gray-50">
        <nav className="bg-white shadow sticky top-0 z-50">
          <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
            <div className="flex justify-between h-16 items-center">
              <div className="flex items-center">
                <Link href="/" className="text-xl font-bold text-blue-600">
                  📚 Concours 2026
                </Link>
              </div>
              <div className="flex space-x-4 items-center">
                <Link href="/" className="text-gray-700 hover:text-blue-600 transition">
                  Accueil
                </Link>
                <Link href="/courses/courses" className="text-gray-700 hover:text-blue-600 transition">
                  Cours
                </Link>
                <Link href="/courses/quizzes" className="text-gray-700 hover:text-blue-600 transition">
                  Quiz
                </Link>
                <Link href="/courses/leaderboard" className="text-gray-700 hover:text-blue-600 transition">
                  Classement
                </Link>
                <Link href="/courses/dashboard" className="text-gray-700 hover:text-blue-600 transition">
                  Tableau de bord
                </Link>
                <Link href="/courses/profile" className="text-gray-700 hover:text-blue-600 transition">
                  Profil
                </Link>
                <Link
                  href="/auth/login"
                  className="bg-blue-600 hover:bg-blue-700 text-white px-4 py-2 rounded-lg transition"
                >
                  Connexion
                </Link>
              </div>
            </div>
          </div>
        </nav>
        <main>
          {children}
        </main>
        
        {/* Footer */}
        <footer className="bg-gray-900 text-gray-300 py-12 mt-20">
          <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
            <div className="grid grid-cols-1 md:grid-cols-4 gap-8 mb-8">
              <div>
                <h4 className="font-bold text-white mb-4">📚 Concours 2026</h4>
                <p className="text-sm">Votre plateforme complète de préparation aux concours</p>
              </div>
              <div>
                <h4 className="font-bold text-white mb-4">Navigation</h4>
                <ul className="space-y-2 text-sm">
                  <li><Link href="/" className="hover:text-blue-400">Accueil</Link></li>
                  <li><Link href="/courses/courses" className="hover:text-blue-400">Cours</Link></li>
                  <li><Link href="/courses/quizzes" className="hover:text-blue-400">Quiz</Link></li>
                  <li><Link href="/courses/leaderboard" className="hover:text-blue-400">Classement</Link></li>
                </ul>
              </div>
              <div>
                <h4 className="font-bold text-white mb-4">Support</h4>
                <ul className="space-y-2 text-sm">
                  <li><a href="#" className="hover:text-blue-400">Contact</a></li>
                  <li><a href="#" className="hover:text-blue-400">FAQ</a></li>
                  <li><a href="#" className="hover:text-blue-400">Aide</a></li>
                  <li><a href="#" className="hover:text-blue-400">Conditions</a></li>
                </ul>
              </div>
              <div>
                <h4 className="font-bold text-white mb-4">Suivez-nous</h4>
                <div className="space-y-2 text-sm">
                  <p>📧 contact@concours2026.com</p>
                  <p>📱 +212 6 XX XX XX XX</p>
                </div>
              </div>
            </div>
            <div className="border-t border-gray-800 pt-8 text-center text-sm">
              <p>&copy; 2026 Apps Concours. Tous droits réservés.</p>
            </div>
          </div>
        </footer>
      </body>
    </html>
  );
}
