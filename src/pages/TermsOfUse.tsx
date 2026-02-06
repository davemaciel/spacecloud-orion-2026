import { useNavigate } from 'react-router-dom';
import { AnimatedSection } from '../components/AnimatedSection';
import { ArrowLeft, FileText, AlertCircle, Check, X, Clock, Shield, HardDrive } from 'lucide-react';

export function TermsOfUse({ onBack }: { onBack?: () => void }) {
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
                <FileText className="w-5 h-5 text-brand-400" />
              </div>
              <h1 className="text-3xl font-bold text-white">Termos de Uso</h1>
            </div>

            <div className="space-y-8 text-gray-300">
              <section>
                <div className="flex items-center gap-3 mb-4">
                  <Check className="w-5 h-5 text-brand-400" />
                  <h2 className="text-lg font-semibold text-white">1. Aceitacao dos Termos</h2>
                </div>
                <p className="text-sm leading-relaxed">
                  Ao utilizar os servicos da Space Cloud, voce concorda com estes termos de uso.
                  Nossos servicos de computacao em nuvem sao projetados para fornecer uma experiencia
                  segura e eficiente, mantendo altos padroes de qualidade e desempenho.
                </p>
              </section>

              <section>
                <div className="flex items-center gap-3 mb-4">
                  <AlertCircle className="w-5 h-5 text-brand-400" />
                  <h2 className="text-lg font-semibold text-white">2. Responsabilidades do Usuario</h2>
                </div>
                <ul className="list-disc list-inside space-y-2 ml-4 text-sm text-gray-400">
                  <li>Manter suas credenciais de acesso seguras</li>
                  <li>Nao compartilhar ou vender acesso a sua instancia</li>
                  <li>Utilizar os recursos de forma responsavel</li>
                  <li>Respeitar os limites de uso estabelecidos no plano</li>
                  <li>Nao realizar modificacoes nao autorizadas no sistema</li>
                  <li>Manter backups de seus dados importantes</li>
                </ul>
              </section>

              <section>
                <div className="flex items-center gap-3 mb-4">
                  <X className="w-5 h-5 text-brand-400" />
                  <h2 className="text-lg font-semibold text-white">3. Atividades Proibidas</h2>
                </div>
                <ul className="list-disc list-inside space-y-2 ml-4 text-sm text-gray-400">
                  <li>Mineracao de criptomoedas</li>
                  <li>Ataques de rede ou hacking</li>
                  <li>Distribuicao de malware ou virus</li>
                  <li>Hospedagem de conteudo ilegal</li>
                  <li>Violacao de direitos autorais</li>
                  <li>Modificacao nao autorizada do sistema operacional</li>
                </ul>
              </section>

              <section>
                <div className="flex items-center gap-3 mb-4">
                  <Clock className="w-5 h-5 text-brand-400" />
                  <h2 className="text-lg font-semibold text-white">4. Disponibilidade do Servico</h2>
                </div>
                <p className="mb-4 text-sm leading-relaxed">A Space Cloud se compromete a manter:</p>
                <ul className="list-disc list-inside space-y-2 ml-4 text-sm text-gray-400">
                  <li>Alta disponibilidade dos servicos conforme SLA</li>
                  <li>Manutencoes programadas com aviso previo</li>
                  <li>Suporte tecnico durante horario comercial</li>
                  <li>Backup e recuperacao de dados conforme politica</li>
                </ul>
              </section>

              <section>
                <div className="flex items-center gap-3 mb-4">
                  <Shield className="w-5 h-5 text-brand-400" />
                  <h2 className="text-lg font-semibold text-white">5. Seguranca e Privacidade</h2>
                </div>
                <p className="mb-4 text-sm leading-relaxed">Nosso compromisso com sua seguranca inclui:</p>
                <ul className="list-disc list-inside space-y-2 ml-4 text-sm text-gray-400">
                  <li>Protecao contra ameacas externas</li>
                  <li>Isolamento de recursos entre usuarios</li>
                  <li>Monitoramento constante de seguranca</li>
                  <li>Atualizacoes regulares de seguranca</li>
                </ul>
              </section>

              <section>
                <div className="flex items-center gap-3 mb-4">
                  <HardDrive className="w-5 h-5 text-brand-400" />
                  <h2 className="text-lg font-semibold text-white">6. Isencao de Responsabilidade sobre Dados</h2>
                </div>
                <p className="mb-4 text-sm leading-relaxed rounded-xl bg-brand-500/5 border border-brand-500/10 p-4">
                  Ao utilizar nossos servicos, voce reconhece e concorda que nao nos responsabilizamos pela perda, dano ou indisponibilidade de quaisquer arquivos armazenados em nossa plataforma. E de sua inteira responsabilidade manter copias de seguranca (backups) regulares de todos os seus arquivos importantes.
                </p>
              </section>

              <section>
                <div className="flex items-center gap-3 mb-4">
                  <AlertCircle className="w-5 h-5 text-brand-400" />
                  <h2 className="text-lg font-semibold text-white">7. Alteracoes nos Termos</h2>
                </div>
                <p className="text-sm leading-relaxed">
                  A Space Cloud se reserva o direito de modificar estes termos a qualquer momento,
                  com notificacao previa aos usuarios. O uso continuado dos servicos apos alteracoes
                  constitui aceitacao dos novos termos.
                </p>
              </section>
            </div>
          </div>
        </AnimatedSection>
      </div>
    </div>
  );
}
