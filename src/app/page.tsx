import Link from 'next/link';
import type { Metadata } from 'next';

export const metadata: Metadata = {
  title: "Políticas - Registra-La",
  description: "Consulte os Termos de Uso e a Política de Privacidade do aplicativo Registra-La.",
};

export default function HomePage() {
  return (
    <section className="bg-gray-50 dark:bg-gray-900">
      <div className="container mx-auto min-h-screen max-w-4xl px-6 py-12">
        <div className="prose prose-lg dark:prose-invert bg-white dark:bg-gray-800 shadow-md rounded-lg p-8">
          <h1 className="text-3xl font-bold mb-4 text-blue-600 dark:text-blue-400">Políticas do Registra-La</h1>
          <p className="mb-6">
            Para garantir transparência e segurança para todos os nossos usuários, disponibilizamos abaixo os documentos que regem o uso da nossa plataforma. Recomendamos a leitura atenta de ambos.
          </p>
          <ul className="list-disc pl-5 space-y-2">
            <li>
              <Link href="/politicas/termos-de-uso" className="text-blue-600 hover:underline dark:text-blue-400">
                <strong>Termos de Uso</strong>
              </Link>
              <p className="text-sm text-gray-600 dark:text-gray-400">Conheça as regras e responsabilidades ao usar o Registra-La.</p>
            </li>
            <li>
              <Link href="/politicas/privacidade" className="text-blue-600 hover:underline dark:text-blue-400">
                <strong>Política de Privacidade</strong>
              </Link>
              <p className="text-sm text-gray-600 dark:text-gray-400">Entenda como coletamos, usamos e protegemos os seus dados.</p>
            </li>
          </ul>
        </div>
      </div>
    </section>
  );
}
