import React from 'react';
import { X } from 'lucide-react';
import { AnimatedSection } from './AnimatedSection';
import { PrivacyPolicy } from '../pages/PrivacyPolicy';
import { TermsOfUse } from '../pages/TermsOfUse';

interface ConfirmationModalProps {
  isOpen: boolean;
  onClose: () => void;
  onConfirm: () => void;
  planTitle: string;
  preSaleMode?: boolean;
}

export function ConfirmationModal({ isOpen, onClose, onConfirm, planTitle, preSaleMode = true }: ConfirmationModalProps) {
  const [accepted, setAccepted] = React.useState(false);
  const [showTerms, setShowTerms] = React.useState(false);
  const [showPrivacy, setShowPrivacy] = React.useState(false);

  if (!isOpen) return null;

  const handleConfirm = () => {
    if (accepted) {
      onConfirm();
    }
  };

  const handleShowTerms = (e: React.MouseEvent) => {
    e.preventDefault();
    setShowTerms(true);
    setShowPrivacy(false);
  };

  const handleShowPrivacy = (e: React.MouseEvent) => {
    e.preventDefault();
    setShowPrivacy(true);
    setShowTerms(false);
  };

  const handleBack = () => {
    setShowTerms(false);
    setShowPrivacy(false);
  };

  if (showTerms) {
    return (
      <div className="fixed inset-0 bg-black/60 backdrop-blur-sm z-50 flex items-center justify-center p-4">
        <div className="w-full max-w-4xl h-[80vh] bg-surface-500 rounded-2xl overflow-hidden border border-white/[0.06]">
          <div className="h-full overflow-y-auto">
            <TermsOfUse onBack={handleBack} />
          </div>
        </div>
      </div>
    );
  }

  if (showPrivacy) {
    return (
      <div className="fixed inset-0 bg-black/60 backdrop-blur-sm z-50 flex items-center justify-center p-4">
        <div className="w-full max-w-4xl h-[80vh] bg-surface-500 rounded-2xl overflow-hidden border border-white/[0.06]">
          <div className="h-full overflow-y-auto">
            <PrivacyPolicy onBack={handleBack} />
          </div>
        </div>
      </div>
    );
  }

  return (
    <div className="fixed inset-0 bg-black/60 backdrop-blur-sm z-50 flex items-center justify-center p-4">
      <AnimatedSection animation="scale" className="w-full max-w-md">
        <div className="glass-card">
          <div className="p-6 border-b border-white/[0.06]">
            <div className="flex items-center justify-between">
              <h3 className="text-xl font-semibold text-white">Confirmar Compra</h3>
              <button
                onClick={onClose}
                className="text-gray-400 hover:text-white transition-colors p-1.5 rounded-lg hover:bg-white/5"
              >
                <X className="w-5 h-5" />
              </button>
            </div>
          </div>

          <div className="p-6">
            <p className="text-gray-300 mb-4">
              Voce esta prestes a adquirir o plano <span className="font-semibold text-brand-400">{planTitle}</span>
            </p>

            {preSaleMode && (
              <div className="mb-5 rounded-xl border border-yellow-500/20 bg-yellow-500/5 p-4">
                <p className="text-sm text-yellow-200 font-medium mb-2">Informacoes da pre-venda</p>
                <ul className="space-y-1.5 text-xs text-gray-300">
                  <li>• Sua compra garante vaga na fila prioritaria de ativacao.</li>
                  <li>• Prazo de ativacao: ate 15 dias (podendo ocorrer antes).</li>
                  <li>• Em caso de cancelamento, a prioridade da vaga e perdida.</li>
                </ul>
              </div>
            )}

            <div className="mb-6">
              <label className="flex items-start gap-3 cursor-pointer">
                <input
                  type="checkbox"
                  checked={accepted}
                  onChange={(e) => setAccepted(e.target.checked)}
                  className="mt-1 w-4 h-4 rounded border-white/20 bg-white/5 text-brand-500 focus:ring-brand-500/50 focus:ring-offset-0"
                />
                <span className="text-sm text-gray-300">
                  Li e aceito os{' '}
                  <button
                    onClick={handleShowTerms}
                    className="text-brand-400 hover:text-brand-300 underline underline-offset-2"
                  >
                    Termos de Uso
                  </button>
                  {' '}e a{' '}
                  <button
                    onClick={handleShowPrivacy}
                    className="text-brand-400 hover:text-brand-300 underline underline-offset-2"
                  >
                    Politica de Privacidade
                  </button>
                  {' '}da Space Cloud.
                </span>
              </label>
            </div>

            <div className="flex gap-3">
              <button
                onClick={onClose}
                className="flex-1 btn-secondary py-2.5 text-sm text-center"
              >
                Cancelar
              </button>
              <button
                onClick={handleConfirm}
                disabled={!accepted}
                className={`flex-1 py-2.5 rounded-xl text-sm font-semibold transition-all duration-300 ${
                  accepted
                    ? 'btn-primary'
                    : 'bg-white/[0.03] text-gray-500 cursor-not-allowed border border-white/5'
                }`}
              >
                Confirmar
              </button>
            </div>
          </div>
        </div>
      </AnimatedSection>
    </div>
  );
}
