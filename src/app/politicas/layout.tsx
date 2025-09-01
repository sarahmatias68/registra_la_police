import type { Metadata } from "next";

export const metadata: Metadata = {
  title: "Políticas - Registra-La",
  description: "Termos de Uso e Política de Privacidade do aplicativo Registra-La.",
};

export default function PoliticasLayout({
  children,
}: {
  children: React.ReactNode;
}) {
  return (
    <section className="bg-gray-50 dark:bg-gray-900">
      <div className="container mx-auto min-h-screen max-w-4xl px-6 py-12">
        <div className="prose prose-lg dark:prose-invert bg-white dark:bg-gray-800 shadow-md rounded-lg p-8">
          {children}
        </div>
      </div>
    </section>
  );
}
