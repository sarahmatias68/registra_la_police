import Link from 'next/link';
import type { Metadata } from 'next';

export const metadata: Metadata = {
  title: "Política de Privacidade - Registra-La",
};

const PrivacyPolicyPage = () => {
  return (
    <>
      <h1 className="text-3xl font-bold mb-2">Política de Privacidade – Registra-La</h1>
      <p className="text-sm text-gray-500 mb-6"><strong>Última atualização:</strong> [Data da Última Atualização]</p>

      <p className="mb-4">A sua privacidade é importante para nós. Esta Política de Privacidade explica como o "Registra-La" (a "Aplicação") coleta, usa e compartilha suas informações pessoais quando você utiliza nossos serviços.</p>

      <h2 className="text-2xl font-semibold mt-6 mb-3">1. Dados que Coletamos</h2>
      <p className="mb-4">Para fornecer nossos serviços, coletamos os seguintes tipos de informações:</p>
      <ul className="list-disc pl-5 space-y-4">
        <li>
          <strong>Dados de Identificação do Usuário:</strong>
          <ul className="list-circle pl-5 mt-2 space-y-1">
            <li>Nome completo.</li>
            <li>Endereço de e-mail.</li>
            <li>Senha (armazenada de forma segura e criptografada).</li>
            <li>Opcionalmente, a pedido da empresa empregadora, podemos coletar dados como CPF ou número de PIS para identificação única do funcionário.</li>
          </ul>
        </li>
        <li>
          <strong>Dados Gerados pelo Uso da Aplicação:</strong>
          <ul className="list-circle pl-5 mt-2 space-y-1">
            <li><strong>Registros de Ponto:</strong> Coletamos e armazenamos a data e a hora exata de cada registro de ponto (entrada, início de pausa, fim de pausa e saída).</li>
            <li><strong>Endereço IP:</strong> Coletamos o endereço IP do dispositivo utilizado para cada registro de ponto, como medida de segurança e para fins de auditoria.</li>
            <li><strong>Dados de Geolocalização (GPS):</strong> Para aumentar a segurança e a confiabilidade dos registros, poderemos solicitar acesso à sua geolocalização no momento do registro de ponto. O objetivo é verificar se a marcação está sendo realizada em um local autorizado pela empresa empregadora. O uso desta funcionalidade será opcional e dependerá de consentimento prévio.</li>
          </ul>
        </li>
      </ul>

      <h2 className="text-2xl font-semibold mt-6 mb-3">2. Para que usamos esses dados?</h2>
      <p className="mb-4">Utilizamos as informações coletadas para as seguintes finalidades:</p>
      <ul className="list-disc pl-5 space-y-2">
        <li><strong>Finalidade Principal:</strong> Permitir o registro das horas de trabalho do funcionário, que é a função central da nossa Aplicação.</li>
        <li><strong>Obrigações Legais:</strong> Fornecer à empresa empregadora os registros necessários para o cumprimento das leis trabalhistas e para o correto cálculo da folha de pagamento.</li>
        <li><strong>Segurança:</strong> Prevenir fraudes, garantir a integridade dos dados e identificar acessos não autorizados.</li>
        <li><strong>Comunicação:</strong> Enviar notificações importantes sobre sua conta, seus registros ou atualizações em nossos serviços.</li>
      </ul>

      <h2 className="text-2xl font-semibold mt-6 mb-3">3. Com quem compartilhamos os dados?</h2>
      <p className="mb-4">Seus dados são tratados com confidencialidade, mas podem ser compartilhados com:</p>
      <ul className="list-disc pl-5 space-y-2">
        <li><strong>A Empresa Empregadora:</strong> Seus dados de identificação e registros de ponto são compartilhados com a sua empresa contratante, que atua como a controladora dos dados para fins de gestão de Recursos Humanos.</li>
        <li><strong>Provedores de Serviços de Terceiros:</strong> Podemos utilizar serviços de terceiros para hospedar nossa aplicação e banco de dados (como Amazon Web Services, Google Cloud, Vercel, etc.). Exigimos que esses provedores adotem rigorosas políticas de segurança e privacidade.</li>
        <li><strong>Requisição Legal:</strong> Poderemos compartilhar informações pessoais em caso de requisição judicial ou para cumprir obrigações legais.</li>
      </ul>

      <h2 className="text-2xl font-semibold mt-6 mb-3">4. Segurança dos Dados</h2>
      <p className="mb-4">Adotamos medidas técnicas e administrativas para proteger seus dados contra acesso não autorizado, alteração, divulgação ou destruição. O acesso às suas informações é restrito aos colaboradores e prestadores de serviço que precisam delas para operar e melhorar nossa Aplicação.</p>

      <h2 className="text-2xl font-semibold mt-6 mb-3">5. Alterações a Esta Política</h2>
      <p className="mb-4">Podemos atualizar esta Política de Privacidade periodicamente. Notificaremos você sobre quaisquer alterações publicando a nova política nesta página e, se as alterações forem significativas, forneceremos um aviso mais destacado.</p>

      <h2 className="text-2xl font-semibold mt-6 mb-3">6. Contato</h2>
      <p className="mb-4">Se você tiver alguma dúvida sobre esta Política de Privacidade, entre em contato conosco através do e-mail: <strong className="font-semibold">[Seu E-mail de Contato]</strong>.</p>

      <div className="mt-8">
        <Link href="/" className="text-blue-600 hover:underline dark:text-blue-400">
          &larr; Voltar à página inicial
        </Link>
      </div>
    </>
  );
};

export default PrivacyPolicyPage;
