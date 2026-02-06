import { useNavigate } from 'react-router-dom';
import { AnimatedSection } from '../components/AnimatedSection';
import { ArrowLeft, Shield, Lock, Eye, Database, Server, UserCheck } from 'lucide-react';

export function PrivacyPolicy({ onBack }: { onBack?: () => void }) {
  const navigate = useNavigate();

  const handleBack = () => {
    if (onBack) {
      onBack();
    } else {
      navigate('/');
    }
  };

  return (
    <div className="min-h-screen bg-surface-500">
      <div className="container mx-auto px-6 py-12">
        <button
          onClick={handleBack}
          className="flex items-center gap-2 text-white hover:text-brand-400 transition-colors mb-8"
        >
          <ArrowLeft className="w-5 h-5" />
          Voltar
        </button>

        <AnimatedSection animation="slideUp" className="max-w-4xl mx-auto">
          <div className="glass-card p-8">
            <div className="flex items-center gap-3 mb-8">
              <div className="w-10 h-10 rounded-xl bg-brand-500/10 flex items-center justify-center">
                <Shield className="w-5 h-5 text-brand-400" />
              </div>
              <h1 className="text-3xl font-bold text-white">Politica de Privacidade</h1>
            </div>

            <div className="space-y-8 text-gray-300">
              <section>
                <div className="flex items-center gap-3 mb-4">
                  <Lock className="w-5 h-5 text-brand-400" />
                  <h2 className="text-lg font-semibold text-white">1. Coleta de Dados</h2>
                </div>
                <p className="mb-4 text-sm leading-relaxed">
                  A Space Cloud coleta apenas as informacoes necessarias para fornecer nossos servicos de computacao em nuvem:
                </p>
                <ul className="list-disc list-inside space-y-2 ml-4 text-sm text-gray-400">
                  <li>Informacoes de cadastro (nome, e-mail, telefone)</li>
                  <li>Dados de pagamento (processados de forma segura por nossos parceiros)</li>
                  <li>Informacoes tecnicas sobre uso dos servicos</li>
                  <li>Logs de acesso para seguranca</li>
                </ul>
              </section>

              <section>
                <div className="flex items-center gap-3 mb-4">
                  <Eye className="w-5 h-5 text-brand-400" />
                  <h2 className="text-lg font-semibold text-white">2. Uso das Informacoes</h2>
                </div>
                <p className="mb-4 text-sm leading-relaxed">Utilizamos seus dados para:</p>
                <ul className="list-disc list-inside space-y-2 ml-4 text-sm text-gray-400">
                  <li>Fornecer e melhorar nossos servicos de cloud computing</li>
                  <li>Garantir a seguranca de sua conta e dados</li>
                  <li>Comunicar atualizacoes e informacoes importantes</li>
                  <li>Processar pagamentos e gerenciar sua conta</li>
                </ul>
              </section>

              <section>
                <div className="flex items-center gap-3 mb-4">
                  <Database className="w-5 h-5 text-brand-400" />
                  <h2 className="text-lg font-semibold text-white">3. Armazenamento de Dados</h2>
                </div>
                <p className="mb-4 text-sm leading-relaxed">Seus dados sao armazenados com seguranca em nossos servidores:</p>
                <ul className="list-disc list-inside space-y-2 ml-4 text-sm text-gray-400">
                  <li>Utilizamos criptografia de ponta a ponta</li>
                  <li>Backups regulares para garantir a preservacao dos dados</li>
                  <li>Acesso restrito apenas a pessoal autorizado</li>
                  <li>Monitoramento constante de seguranca</li>
                </ul>
              </section>

              <section>
                <div className="flex items-center gap-3 mb-4">
                  <Server className="w-5 h-5 text-brand-400" />
                  <h2 className="text-lg font-semibold text-white">4. Seguranca da Infraestrutura</h2>
                </div>
                <p className="mb-4 text-sm leading-relaxed">Nossa infraestrutura e projetada com multiplas camadas de seguranca:</p>
                <ul className="list-disc list-inside space-y-2 ml-4 text-sm text-gray-400">
                  <li>Firewalls avancados e sistemas de deteccao de intrusao</li>
                  <li>Monitoramento 24/7 de atividades suspeitas</li>
                  <li>Atualizacoes regulares de seguranca</li>
                  <li>Isolamento de recursos entre clientes</li>
                </ul>
              </section>

              <section>
                <div className="flex items-center gap-3 mb-4">
                  <UserCheck className="w-5 h-5 text-brand-400" />
                  <h2 className="text-lg font-semibold text-white">5. Seus Direitos</h2>
                </div>
                <p className="mb-4 text-sm leading-relaxed">Voce tem direito a:</p>
                <ul className="list-disc list-inside space-y-2 ml-4 text-sm text-gray-400">
                  <li>Acessar seus dados pessoais</li>
                  <li>Solicitar correcoes de informacoes</li>
                  <li>Exportar seus dados</li>
                  <li>Solicitar exclusao de conta e dados</li>
                </ul>
              </section>
            </div>
          </div>
        </AnimatedSection>
      </div>
    </div>
  );
}
