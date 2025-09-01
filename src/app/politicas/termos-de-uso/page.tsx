import Link from 'next/link';
import type { Metadata } from 'next';

export const metadata: Metadata = {
  title: "Termos de Uso - Registra-La",
};

const TermsOfUsePage = () => {
  return (
    <>
      <h1 className="text-3xl font-bold mb-2">Termos de Uso – Registra-La</h1>
      <p className="text-sm text-gray-500 mb-6"><strong>Última atualização:</strong> [Data da Última Atualização]</p>

      <h2 className="text-2xl font-semibold mt-6 mb-3">1. Aceitação dos Termos</h2>
      <p className="mb-4">Ao acessar e utilizar o aplicativo "Registra-La" (a "Aplicação"), você concorda em cumprir e estar vinculado a estes Termos de Uso. Se você não concordar com qualquer parte destes termos, não deverá utilizar a Aplicação.</p>

      <h2 className="text-2xl font-semibold mt-6 mb-3">2. Descrição do Serviço</h2>
      <p className="mb-4">O "Registra-La" é um sistema de ponto eletrônico digital que permite aos funcionários de empresas registrarem suas horas de trabalho (entrada, pausas e saída) através de uma interface web. Os registros são armazenados para gestão da folha de ponto pela empresa empregadora.</p>

      <h2 className="text-2xl font-semibold mt-6 mb-3">3. Responsabilidades do Usuário</h2>
      <p className="mb-4">Ao utilizar o "Registra-La", você concorda em:</p>
      <ul className="list-disc pl-5 space-y-2">
        <li>Fornecer informações cadastrais verdadeiras, precisas e completas.</li>
        <li>Manter a confidencialidade de suas credenciais de acesso (e-mail e senha). Sua conta é pessoal e intransferível, e você é o único responsável por todas as atividades que ocorrerem nela.</li>
        <li>Utilizar a Aplicação exclusivamente para registrar seu próprio ponto. É estritamente proibido tentar manipular registros, acessar contas de terceiros ou realizar qualquer outra atividade fraudulenta.</li>
        <li>Notificar-nos imediatamente sobre qualquer uso não autorizado de sua conta.</li>
      </ul>

      <h2 className="text-2xl font-semibold mt-6 mb-3">4. Responsabilidades do "Registra-La"</h2>
      <p className="mb-4">Nós nos comprometemos a:</p>
      <ul className="list-disc pl-5 space-y-2">
        <li>Manter a Aplicação disponível e funcionando corretamente, salvo interrupções necessárias para manutenção ou por motivos de força maior.</li>
        <li>Proteger os dados dos usuários com medidas de segurança adequadas, conforme descrito em nossa <Link href="/politicas/privacidade" className="text-blue-600 hover:underline dark:text-blue-400">Política de Privacidade</Link>.</li>
        <li>Garantir a integridade dos registros de ponto, assegurando que não possam ser alterados após a marcação.</li>
      </ul>

      <h2 className="text-2xl font-semibold mt-6 mb-3">5. Limitação de Responsabilidade</h2>
      <p className="mb-4">O "Registra-La" é uma ferramenta para facilitar o registro de ponto. Portanto:</p>
      <ul className="list-disc pl-5 space-y-2">
        <li>Não nos responsabilizamos por quaisquer disputas trabalhistas, negociações ou desacordos entre funcionário e empregador. A veracidade e a gestão dos horários são de responsabilidade da empresa contratante.</li>
        <li>Não podemos ser responsabilizados por falhas no registro de ponto decorrentes de problemas no dispositivo do usuário, na sua conexão com a internet ou em outros fatores fora do nosso controle direto.</li>
      </ul>

      <h2 className="text-2xl font-semibold mt-6 mb-3">6. Propriedade Intelectual</h2>
      <p className="mb-4">Todo o conteúdo da Aplicação, incluindo o código-fonte, o design, os textos, os gráficos, o logotipo e o nome "Registra-La", são de propriedade exclusiva de <strong className="font-semibold">[Nome da Sua Empresa ou Seu Nome]</strong> e protegidos pelas leis de propriedade intelectual. É proibida a cópia, reprodução ou distribuição de qualquer parte da Aplicação sem nossa autorização prévia e por escrito.</p>

      <h2 className="text-2xl font-semibold mt-6 mb-3">7. Disposições Gerais</h2>
      <p className="mb-4">Estes Termos de Uso podem ser atualizados periodicamente. Notificaremos os usuários sobre alterações significativas. O uso contínuo da Aplicação após tais alterações constituirá sua aceitação dos novos termos.</p>

      <div className="mt-8">
        <Link href="/politicas" className="text-blue-600 hover:underline dark:text-blue-400">
          &larr; Voltar para Políticas
        </Link>
      </div>
    </>
  );
};

export default TermsOfUsePage;
