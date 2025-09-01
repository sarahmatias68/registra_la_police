import Image from "next/image";
import Link from "next/link";

export default function Home() {
  return (
    <div className="flex flex-col min-h-screen bg-gray-50 dark:bg-gray-900">
      <main className="flex-grow flex items-center justify-center p-8">
        <div className="text-center max-w-2xl">
          <div className="inline-block p-4 bg-blue-100 dark:bg-blue-900 rounded-full mb-6">
            <svg className="w-12 h-12 text-blue-600 dark:text-blue-300" fill="none" stroke="currentColor" viewBox="0 0 24 24" xmlns="http://www.w3.org/2000/svg"><path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M8 7V3m8 4V3m-9 8h10M5 21h14a2 2 0 002-2V7a2 2 0 00-2-2H5a2 2 0 00-2 2v12a2 2 0 002 2z"></path></svg>
          </div>
          <h1 className="text-4xl sm:text-5xl font-extrabold text-gray-900 dark:text-white mb-4">
            Registra-La
          </h1>
          <p className="text-lg text-gray-600 dark:text-gray-300 mb-8">
            Seu sistema de ponto eletrônico digital. Simples, rápido e confiável para registrar suas horas de trabalho com precisão.
          </p>
          <Link
            href="/login"
            className="inline-block bg-blue-600 text-white font-semibold rounded-lg px-8 py-3 hover:bg-blue-700 transition-colors duration-300 focus:outline-none focus:ring-2 focus:ring-blue-500 focus:ring-offset-2"
          >
            Acessar o sistema
          </Link>
        </div>
      </main>
      <footer className="w-full py-6 px-8 bg-white dark:bg-gray-800 border-t border-gray-200 dark:border-gray-700">
        <div className="max-w-4xl mx-auto flex flex-col sm:flex-row items-center justify-center gap-x-6 gap-y-3 flex-wrap text-sm text-gray-600 dark:text-gray-400">
          <p>&copy; {new Date().getFullYear()} Registra-La. Todos os direitos reservados.</p>
          <div className="hidden sm:block w-px h-4 bg-gray-300 dark:bg-gray-600" />
          <Link href="/politicas/termos-de-uso" className="hover:underline">
            Termos de Uso
          </Link>
          <Link href="/politicas/privacidade" className="hover:underline">
            Política de Privacidade
          </Link>
        </div>
      </footer>
    </div>
  );
}
