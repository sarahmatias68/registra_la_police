import Link from 'next/link';

export default function PoliticasPage() {
  return (
    <>
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
    </>
  );
}
