import React, { useState, useEffect, useCallback } from 'react';
import { Routes, Route, Link } from 'react-router-dom';
import {
  Cloud, Cpu, HardDrive, Clock, Power, ChevronRight, ChevronLeft,
  ChevronRight as ChevronRightIcon, MemoryStick, ChevronDown, ChevronUp,
  HelpCircle, Save, Server, Shield, Lock, Instagram, MessageCircle,
  Phone, Youtube, Gamepad, Code, Palette, LineChart, Video, Building,
  Star, Menu, X, Zap, Monitor, Gauge, Wifi, ArrowRight, Check, Search,
  TrendingUp, Users, Award, Sparkles, Timer, DollarSign, Play
} from 'lucide-react';
import { AnimatedSection } from './components/AnimatedSection';
import { ScrollToTop } from './components/ScrollToTop';
import { PrivacyPolicy } from './pages/PrivacyPolicy';
import { TermsOfUse } from './pages/TermsOfUse';
import { FacebookPixel } from './components/FacebookPixel';
import { ConfirmationModal } from './components/ConfirmationModal';
import { ContactWidget } from './components/ContactWidget';
import LogoImg from '../IMG/LOGO.png';

function MobileMenu({ isOpen, onClose }: { isOpen: boolean; onClose: () => void }) {
  return (
    <div className={`fixed inset-0 z-50 transform transition-all duration-500 ${isOpen ? 'translate-x-0 opacity-100' : 'translate-x-full opacity-0'}`}>
      <div className="absolute inset-0 bg-surface-500/98 backdrop-blur-2xl">
        <div className="flex justify-end p-6">
          <button onClick={onClose} className="text-gray-400 hover:text-white transition-colors p-2 rounded-xl bg-white/5 hover:bg-white/10">
            <X className="w-6 h-6" />
          </button>
        </div>
        <nav className="flex flex-col items-center gap-6 p-8">
          <a href="#home" onClick={onClose} className="text-2xl text-white hover:text-brand-400 transition-colors font-medium">Home</a>
          <a href="#como-funciona" onClick={onClose} className="text-2xl text-white hover:text-brand-400 transition-colors font-medium">Como Funciona</a>
          <a href="#plans" onClick={onClose} className="text-2xl text-white hover:text-brand-400 transition-colors font-medium">Planos</a>
          <a href="#testimonials" onClick={onClose} className="text-2xl text-white hover:text-brand-400 transition-colors font-medium">Depoimentos</a>
          <a href="#faq" onClick={onClose} className="text-2xl text-white hover:text-brand-400 transition-colors font-medium">FAQ</a>
          <div className="flex flex-col gap-4 mt-8 w-full max-w-xs">
            <a href="https://spacecloudbr.com/painel/login" className="btn-secondary text-center">Login</a>
            <a href="https://spacecloudbr.com/painel/register.php" className="btn-primary text-center">Criar conta gratis</a>
          </div>
        </nav>
      </div>
    </div>
  );
}

function PurchaseNotification() {
  const [visible, setVisible] = useState(false);
  const [current, setCurrent] = useState(0);

  const notifications = [
    { name: 'Lucas M.', plan: 'Azuli', city: 'Sao Paulo', time: '2 min' },
    { name: 'Gabriel S.', plan: 'Rubi', city: 'Rio de Janeiro', time: '5 min' },
    { name: 'Ana C.', plan: 'Iron', city: 'Belo Horizonte', time: '8 min' },
    { name: 'Pedro H.', plan: 'Azuli', city: 'Curitiba', time: '12 min' },
    { name: 'Matheus R.', plan: 'Rubi', city: 'Brasilia', time: '15 min' },
  ];

  useEffect(() => {
    const showNotification = () => {
      setVisible(true);
      setTimeout(() => setVisible(false), 4000);
      setCurrent(prev => (prev + 1) % notifications.length);
    };

    const interval = setInterval(showNotification, 15000);
    const initialTimeout = setTimeout(showNotification, 8000);
    return () => { clearInterval(interval); clearTimeout(initialTimeout); };
  }, []);

  const n = notifications[current];

  return (
    <div className={`fixed bottom-24 left-6 z-40 transition-all duration-500 ${visible ? 'translate-x-0 opacity-100' : '-translate-x-full opacity-0'}`}>
      <div className="glass-card p-4 flex items-center gap-3 max-w-xs">
        <div className="w-10 h-10 rounded-full bg-gradient-to-br from-brand-500 to-violet-600 flex items-center justify-center flex-shrink-0">
          <Check className="w-5 h-5 text-white" />
        </div>
        <div>
          <p className="text-sm text-white font-medium">{n.name} de {n.city}</p>
          <p className="text-xs text-gray-400">Assinou o <span className="text-brand-400">{n.plan}</span> ha {n.time}</p>
        </div>
      </div>
    </div>
  );
}

function UserCategory({ icon: Icon, title, description }: { icon: any; title: string; description: string }) {
  return (
    <AnimatedSection animation="scale" className="glass-card group cursor-default">
      <div className="flex flex-col items-center text-center">
        <div className="w-14 h-14 rounded-2xl bg-gradient-to-br from-brand-500/20 to-violet-600/20 flex items-center justify-center mb-4 group-hover:from-brand-500/30 group-hover:to-violet-600/30 transition-all duration-500">
          <Icon className="w-7 h-7 text-brand-400" />
        </div>
        <h3 className="text-lg font-semibold text-white mb-2">{title}</h3>
        <p className="text-gray-400 text-sm leading-relaxed">{description}</p>
      </div>
    </AnimatedSection>
  );
}

function ProviderToggle({ activeProvider, onToggle }: { activeProvider: string; onToggle: (p: string) => void }) {
  return (
    <div className="flex justify-center mb-10">
      <div className="bg-white/[0.03] p-1.5 rounded-2xl inline-flex border border-white/5">
        <button
          onClick={() => onToggle('GOOGLE')}
          className={`px-8 py-3 rounded-xl transition-all duration-300 text-sm font-semibold ${
            activeProvider === 'GOOGLE'
              ? 'bg-gradient-to-r from-brand-600 to-violet-600 text-white shadow-lg shadow-brand-500/20'
              : 'text-gray-400 hover:text-white'
          }`}
        >
          GOOGLE CLOUD
        </button>
        <button
          onClick={() => onToggle('AWS')}
          className={`px-8 py-3 rounded-xl transition-all duration-300 text-sm font-semibold ${
            activeProvider === 'AWS'
              ? 'bg-gradient-to-r from-brand-600 to-violet-600 text-white shadow-lg shadow-brand-500/20'
              : 'text-gray-400 hover:text-white'
          }`}
        >
          AWS
        </button>
      </div>
    </div>
  );
}

function PreSaleCountdown({ timeLeft, ended }: { timeLeft: number; ended: boolean }) {
  if (ended) {
    return (
      <div className="mt-6 inline-flex items-center gap-2 rounded-xl bg-accent-500/10 border border-accent-500/30 px-5 py-3 text-accent-300 text-sm font-medium">
        Pre-venda encerrada. Entraremos em contato com os primeiros clientes.
      </div>
    );
  }

  const days = Math.floor(timeLeft / (1000 * 60 * 60 * 24));
  const hours = Math.floor((timeLeft / (1000 * 60 * 60)) % 24);
  const minutes = Math.floor((timeLeft / (1000 * 60)) % 60);

  const pad = (n: number) => String(n).padStart(2, '0');

  return (
    <div className="mt-6 inline-flex flex-col items-center gap-3 rounded-2xl bg-white/[0.03] border border-brand-500/25 px-5 py-4">
      <p className="text-xs uppercase tracking-[0.18em] text-brand-400 font-semibold">Pre-venda por tempo limitado</p>
      <div className="flex items-center gap-2 text-white">
        <span className="rounded-lg bg-surface-300 border border-white/10 px-3 py-2 text-lg font-bold">{pad(days)}d</span>
        <span className="text-gray-500">:</span>
        <span className="rounded-lg bg-surface-300 border border-white/10 px-3 py-2 text-lg font-bold">{pad(hours)}h</span>
        <span className="text-gray-500">:</span>
        <span className="rounded-lg bg-surface-300 border border-white/10 px-3 py-2 text-lg font-bold">{pad(minutes)}m</span>
      </div>
      <p className="text-xs text-gray-400">Entrega prevista das VMs em até 15 dias após o fim da pre-venda.</p>
    </div>
  );
}

function PlanCard({ title, price, priceUnit = "/mes", specs, isPopular = false, link, isSpot = true, purchaseEnabled = true, preSaleMode = true }: any) {
  const [showTooltip, setShowTooltip] = useState(false);
  const [showModal, setShowModal] = useState(false);

  const incompatibleGames = "Incompativeis: FIFA23, FiveM (BAN), REDM, Valorant, Genshin Impact, MTA: Multi Theft Auto, COD Warzone";
  const canPurchase = Boolean(link);

  const handlePurchase = () => {
    if (canPurchase && link) {
      window.location.href = link;
    }
  };

  return (
    <>
      <AnimatedSection
        animation="scale"
        className={`relative rounded-2xl overflow-visible transition-all duration-500 hover:scale-[1.02] ${
          isPopular ? 'z-10' : ''
        }`}
      >
        {isPopular && (
          <div className="absolute inset-0 rounded-2xl p-[1px] bg-gradient-to-b from-brand-400 via-violet-500 to-brand-400">
            <div className="absolute inset-[1px] rounded-2xl bg-surface-300" />
          </div>
        )}

        <div
          className={`pricing-card ${
            isPopular
              ? 'pricing-card--popular ring-1 ring-cyan-400/50 shadow-[0_30px_90px_rgba(34,211,238,0.25)]'
              : 'border border-white/10 bg-[#0c1017]'
          }`}
        >
          <h3 className="text-xl font-bold text-white mb-2 flex items-center gap-2 flex-wrap">
            {title}
            {preSaleMode && (
              <span className="text-[11px] px-3 py-1 rounded-full border border-yellow-500/30 bg-yellow-500/10 text-yellow-300 whitespace-nowrap leading-none block">Pré-venda</span>
            )}
            {isPopular && (
              <span className="badge text-[11px] px-4 py-1 whitespace-nowrap leading-none block">Mais popular</span>
            )}
          </h3>

          <div className="flex items-baseline gap-1 mb-6">
            <span className="text-sm text-gray-400">R$</span>
            <span className="text-4xl font-bold text-white">{price}</span>
            <span className="text-sm text-gray-500">{priceUnit}</span>
          </div>

          {isSpot === false && (
            <div className="mb-4 bg-accent-500/10 text-accent-400 px-4 py-2 rounded-xl text-sm font-medium border border-accent-500/20">
              Dedicada - Sem Interrupcoes
            </div>
          )}

          <ul className="space-y-3 mb-8">
            {specs.map((spec: any, index: number) => (
              <li key={index} className="flex items-center gap-3">
                <div className="spec-icon bg-cyan-500/10 border border-cyan-400/20">
                  <spec.icon className="w-4 h-4 text-cyan-300" />
                </div>
                <span className="text-gray-200 text-sm">{spec.text}</span>
              </li>
            ))}
            <li className="relative">
              <div
                className="flex items-center gap-3 cursor-help"
                onMouseEnter={() => setShowTooltip(true)}
                onMouseLeave={() => setShowTooltip(false)}
              >
                <div className="spec-icon spec-icon--warning">
                  <HelpCircle className="w-4 h-4 text-orange-300" />
                </div>
                <span className="text-gray-300 text-sm">Jogos Incompativeis</span>
              </div>
              {showTooltip && (
                <div className="absolute z-10 w-72 p-4 mt-2 left-0 glass-card text-sm text-gray-300 shadow-[0_20px_60px_rgba(0,0,0,0.45)]">
                  {incompatibleGames}
                </div>
              )}
            </li>
          </ul>

          <button
            onClick={() => (canPurchase ? setShowModal(true) : null)}
            disabled={!canPurchase}
            className={`pricing-button ${
              canPurchase
                ? isPopular
                  ? 'pricing-button--primary'
                  : 'pricing-button--ghost'
                : 'pricing-button--disabled'
            } ${canPurchase ? 'shadow-[0_16px_50px_rgba(34,211,238,0.25)]' : ''}`}
          >
            {canPurchase ? (
              <>{preSaleMode ? 'Garantir pre-venda' : 'Comprar agora'} <ArrowRight className="w-4 h-4" /></>
            ) : 'Sem link'}
          </button>
        </div>
      </AnimatedSection>

      <ConfirmationModal
        isOpen={showModal}
        onClose={() => setShowModal(false)}
        onConfirm={handlePurchase}
        planTitle={title}
        preSaleMode={preSaleMode}
      />
    </>
  );
}

function SavingsCalculator() {
  const [months, setMonths] = useState(12);

  const pcCost = 12000;
  const pcMaintenanceMonthly = 150;
  const pcEnergyCost = 120;
  const cloudMonthly = 119.90;

  const totalPc = pcCost + (pcMaintenanceMonthly + pcEnergyCost) * months;
  const totalCloud = cloudMonthly * months;
  const savings = totalPc - totalCloud;
  const savingsPercent = Math.round((savings / totalPc) * 100);

  return (
    <AnimatedSection animation="slideUp">
      <div className="glass-card p-6 md:p-8 max-w-4xl mx-auto">
        <div className="text-center mb-8">
          <span className="section-label">Calculadora de Economia</span>
          <h3 className="text-2xl md:text-3xl font-bold text-white mt-2">Quanto voce economiza com a SpaceCloud?</h3>
          <p className="text-gray-400 mt-2">Compare os custos de um PC gamer fisico com nosso plano Google Cloud 8 vCPU</p>
        </div>

        <div className="mb-8">
          <div className="flex justify-between items-center mb-3">
            <span className="text-gray-300 text-sm font-medium">Periodo de uso</span>
            <span className="text-brand-400 font-bold text-lg">{months} {months === 1 ? 'mes' : 'meses'}</span>
          </div>
          <input
            type="range"
            min="1"
            max="36"
            value={months}
            onChange={(e) => setMonths(Number(e.target.value))}
            className="w-full h-2 bg-white/10 rounded-full appearance-none cursor-pointer [&::-webkit-slider-thumb]:appearance-none [&::-webkit-slider-thumb]:w-5 [&::-webkit-slider-thumb]:h-5 [&::-webkit-slider-thumb]:rounded-full [&::-webkit-slider-thumb]:bg-gradient-to-r [&::-webkit-slider-thumb]:from-brand-400 [&::-webkit-slider-thumb]:to-violet-500 [&::-webkit-slider-thumb]:shadow-lg [&::-webkit-slider-thumb]:shadow-brand-500/30 [&::-webkit-slider-thumb]:cursor-pointer"
          />
        </div>

        <div className="grid md:grid-cols-3 gap-4 mb-6">
          <div className="rounded-xl bg-red-500/5 border border-red-500/10 p-5 text-center">
            <Monitor className="w-6 h-6 text-red-400 mx-auto mb-2" />
            <p className="text-xs text-gray-400 mb-1">PC Gamer Fisico</p>
            <p className="text-2xl font-bold text-red-400">R$ {totalPc.toLocaleString('pt-BR', { minimumFractionDigits: 2 })}</p>
            <p className="text-xs text-gray-500 mt-1">Hardware + energia + manutencao</p>
          </div>

          <div className="rounded-xl bg-brand-500/5 border border-brand-500/10 p-5 text-center">
            <Cloud className="w-6 h-6 text-brand-400 mx-auto mb-2" />
            <p className="text-xs text-gray-400 mb-1">SpaceCloud</p>
            <p className="text-2xl font-bold text-brand-400">R$ {totalCloud.toLocaleString('pt-BR', { minimumFractionDigits: 2 })}</p>
            <p className="text-xs text-gray-500 mt-1">Google Cloud 8 vCPU - R$ 119,90/mes</p>
          </div>

          <div className="rounded-xl bg-accent-500/5 border border-accent-500/10 p-5 text-center">
            <TrendingUp className="w-6 h-6 text-accent-400 mx-auto mb-2" />
            <p className="text-xs text-gray-400 mb-1">Sua economia</p>
            <p className="text-2xl font-bold text-accent-400">R$ {savings.toLocaleString('pt-BR', { minimumFractionDigits: 2 })}</p>
            <p className="text-xs text-gray-500 mt-1">Voce economiza {savingsPercent}%</p>
          </div>
        </div>

        <div className="w-full bg-white/5 rounded-full h-3 overflow-hidden">
          <div
            className="h-full bg-gradient-to-r from-accent-500 to-brand-400 rounded-full transition-all duration-500"
            style={{ width: `${savingsPercent}%` }}
          />
        </div>
        <p className="text-center text-sm text-gray-400 mt-3">
          Em {months} meses voce economiza <span className="text-accent-400 font-semibold">{savingsPercent}%</span> usando a SpaceCloud
        </p>
      </div>
    </AnimatedSection>
  );
}

function FAQ() {
  const categories = {
    'Geral': [
      {
        question: 'O que e um "PC na nuvem"?',
        answer: 'Um computador em nuvem e uma maquina virtual acessada remotamente pelo seu dispositivo. Voce tem todas as funcionalidades de um PC real — jogos, trabalho, streaming — sem precisar do hardware fisico. Basta sua internet e qualquer aparelho.'
      },
      {
        question: 'Por que usar um PC em nuvem?',
        answer: 'Um PC com as mesmas especificacoes custaria cerca de R$ 12.000, fora gastos com energia e manutencao. Com a SpaceCloud, voce tem acesso a maquinas de alta performance por uma fracao do custo, sem preocupacao com hardware.'
      },
      {
        question: 'Como isso funciona?',
        answer: 'Voce se conecta a um computador poderoso no nosso servidor atraves de apps como Parsec, Moonlight ou Steam Link. E como se o PC estivesse na sua frente — so que esta na nuvem, pronto para usar.'
      },
    ],
    'Tecnico': [
      {
        question: 'Funciona em Android e iOS?',
        answer: 'Sim! No Android, use Moonlight ou Parsec. No iOS, o Steam Link e a melhor opcao. O primeiro acesso de ambos e feito por RDP ou VNC para configurar os apps de streaming.'
      },
      {
        question: 'Posso jogar pelo RDP ou VNC?',
        answer: 'Nao. RDP e VNC sao usados apenas no primeiro acesso para vincular suas contas Parsec, Moonlight ou Steam Link. Depois, jogue exclusivamente por essas plataformas de streaming para ter a melhor experiencia.'
      },
      {
        question: 'Posso atualizar o sistema?',
        answer: 'Nao. Drivers e configuracoes foram otimizados para maximo desempenho. Alterar pode reduzir performance ou causar instabilidade, alem de ser considerado uso indevido.'
      },
    ],
    'Servico': [
      {
        question: 'O que e Maquina Spot?',
        answer: 'Maquinas Spot sao VMs com custo reduzido que podem sofrer interrupcoes esporadicas. Sao ideais para quem quer economia — e na pratica, as interrupcoes sao raras.'
      },
      {
        question: 'Eu perco meus arquivos ao desligar?',
        answer: 'Nao! Todos os planos incluem salvamento de arquivos. Seus jogos, documentos e projetos ficam guardados com seguranca. Basta alocar nos HDs da maquina.'
      },
      {
        question: 'Existe fila de login?',
        answer: 'Nao. Trabalhamos sem filas de espera. Acesse sua maquina quando e onde quiser, instantaneamente. Sem espera, sem burocracia.'
      },
      {
        question: 'Como funciona a fila prioritaria da pre-venda?',
        answer: 'Pedidos confirmados entram na fila prioritaria de ativacao. Assim que as VMs forem liberadas, os clientes da pre-venda sao ativados primeiro, respeitando a ordem de confirmacao.'
      },
      {
        question: 'Se eu cancelar, perco a prioridade?',
        answer: 'Sim. Em caso de cancelamento/reembolso, a vaga prioritaria e liberada e a recompra futura fica sujeita a nova disponibilidade e nova fila.'
      },
      {
        question: 'O prazo de 15 dias pode ser menor?',
        answer: 'Sim. O prazo informado e o limite maximo de ativacao. Em muitos casos, a liberacao pode ocorrer antes desse periodo.'
      },
    ],
  };

  const [activeCategory, setActiveCategory] = useState('Geral');
  const [openIndex, setOpenIndex] = useState<number | null>(null);
  const [searchQuery, setSearchQuery] = useState('');

  const filteredFaqs = searchQuery
    ? Object.values(categories).flat().filter(
        faq => faq.question.toLowerCase().includes(searchQuery.toLowerCase()) ||
               faq.answer.toLowerCase().includes(searchQuery.toLowerCase())
      )
    : categories[activeCategory as keyof typeof categories] || [];

  return (
    <div className="max-w-3xl mx-auto">
      <div className="relative mb-8">
        <Search className="absolute left-4 top-1/2 -translate-y-1/2 w-5 h-5 text-gray-500" />
        <input
          type="text"
          placeholder="Buscar em todas as perguntas..."
          value={searchQuery}
          onChange={(e) => setSearchQuery(e.target.value)}
          className="input-primary w-full pl-12"
        />
      </div>

      {!searchQuery && (
        <div className="flex justify-center gap-2 mb-8 flex-wrap">
          {Object.keys(categories).map(cat => (
            <button
              key={cat}
              onClick={() => { setActiveCategory(cat); setOpenIndex(null); }}
              className={`px-5 py-2 rounded-xl text-sm font-medium transition-all duration-300 ${
                activeCategory === cat
                  ? 'bg-gradient-to-r from-brand-500/20 to-violet-600/20 text-brand-400 border border-brand-500/30'
                  : 'text-gray-400 hover:text-white bg-white/[0.02] border border-white/5 hover:border-white/10'
              }`}
            >
              {cat}
            </button>
          ))}
        </div>
      )}

      <div className="space-y-3">
        {filteredFaqs.map((faq, index) => (
          <AnimatedSection
            key={`${activeCategory}-${index}`}
            animation="slideUp"
            delay={index * 0.05}
          >
            <div className={`rounded-xl overflow-hidden border transition-all duration-300 ${
              openIndex === index ? 'border-brand-500/20 bg-white/[0.03]' : 'border-white/[0.05] bg-white/[0.01]'
            }`}>
              <button
                className="w-full px-6 py-5 text-left flex justify-between items-center hover:bg-white/[0.02] transition-colors"
                onClick={() => setOpenIndex(openIndex === index ? null : index)}
              >
                <h3 className="text-base font-medium text-white pr-4">{faq.question}</h3>
                <div className={`w-8 h-8 rounded-lg flex items-center justify-center flex-shrink-0 transition-all duration-300 ${
                  openIndex === index ? 'bg-brand-500/20 rotate-180' : 'bg-white/5'
                }`}>
                  <ChevronDown className="w-4 h-4 text-brand-400" />
                </div>
              </button>
              {openIndex === index && (
                <div className="px-6 pb-5">
                  <p className="text-gray-400 leading-relaxed text-sm">{faq.answer}</p>
                </div>
              )}
            </div>
          </AnimatedSection>
        ))}
      </div>
    </div>
  );
}

function Testimonials() {
  const testimonials = [
    {
      content: "O servico e muito bom, 100% de confianca. A entrega e rapida e as maquinas sao otimas. Comecei com 6 nucleos, fiz upgrade para 8 e supriu todas as minhas necessidades nos games.",
      author: "DaniFull",
      rating: 5,
    },
    {
      content: "Melhor VM que ja usei. Sem fila de login, salva arquivos e acesso quase instantaneo. Comprei o plano de 4 nucleos e Warzone rodou com desempenho otimo e zero delay.",
      author: "Felps",
      rating: 5,
    },
    {
      content: "Fiz prova de fogo com Nier Automata cheio de mod grafico, reshade e texturas HD. Teria explodido meu PC real. A SpaceCloud segurou tudo sem esforco. Obrigado pessoal!",
      author: "Justice",
      rating: 5,
    },
    {
      content: "A maquina de 16 nucleos e surreal. Mesmo com HD, supera outras clouds. Jogo um titulo pesado demais e so a SpaceCloud aguentou. PC top demais.",
      author: "Dilann",
      rating: 5,
    },
    {
      content: "Maquinas com potencia altissima desde o plano basico. O salvamento de arquivos coloca a Space Cloud a frente de muitas. Suporte resolve rapido.",
      author: "Yuri",
      rating: 5,
    },
    {
      content: "Apos um mes de uso, impressionado. Atendimento incrivel, os caras resolvem rapido. Bom investimento pelo preco dos hardwares atualmente. Jogabilidade incrivel, sem lags.",
      author: "Verstappen",
      rating: 5,
    },
  ];

  const [currentIndex, setCurrentIndex] = useState(0);

  const next = () => setCurrentIndex(prev => prev === testimonials.length - 1 ? 0 : prev + 1);
  const prev = () => setCurrentIndex(prev => prev === 0 ? testimonials.length - 1 : prev - 1);

  useEffect(() => {
    const interval = setInterval(next, 6000);
    return () => clearInterval(interval);
  }, []);

  return (
    <div className="relative max-w-4xl mx-auto px-4">
      <div className="overflow-hidden">
        <div
          className="flex transition-transform duration-700 ease-out"
          style={{ transform: `translateX(-${currentIndex * 100}%)` }}
        >
          {testimonials.map((t, index) => (
            <div key={index} className="w-full flex-shrink-0 px-4">
              <div className="glass-card p-8 md:p-10 text-center max-w-2xl mx-auto">
                <div className="flex justify-center gap-1 mb-6">
                  {[...Array(t.rating)].map((_, i) => (
                    <Star key={i} className="w-5 h-5 text-yellow-400 fill-yellow-400" />
                  ))}
                </div>
                <p className="text-gray-300 text-lg leading-relaxed mb-8 italic">"{t.content}"</p>
                <div>
                  <div className="w-12 h-12 rounded-full bg-gradient-to-br from-brand-500 to-violet-600 mx-auto mb-3 flex items-center justify-center">
                    <span className="text-white font-bold text-lg">{t.author[0]}</span>
                  </div>
                  <p className="font-semibold text-white">{t.author}</p>
                  <p className="text-sm text-brand-400">Cliente SpaceCloud</p>
                </div>
              </div>
            </div>
          ))}
        </div>
      </div>

      <button
        onClick={prev}
        className="absolute left-0 top-1/2 -translate-y-1/2 w-10 h-10 rounded-xl bg-white/[0.05] hover:bg-white/[0.1] flex items-center justify-center transition-all border border-white/5"
      >
        <ChevronLeft className="w-5 h-5 text-white" />
      </button>
      <button
        onClick={next}
        className="absolute right-0 top-1/2 -translate-y-1/2 w-10 h-10 rounded-xl bg-white/[0.05] hover:bg-white/[0.1] flex items-center justify-center transition-all border border-white/5"
      >
        <ChevronRightIcon className="w-5 h-5 text-white" />
      </button>

      <div className="flex justify-center gap-2 mt-8">
        {testimonials.map((_, i) => (
          <button
            key={i}
            onClick={() => setCurrentIndex(i)}
            className={`w-2 h-2 rounded-full transition-all duration-300 ${
              i === currentIndex ? 'bg-brand-400 w-6' : 'bg-white/20 hover:bg-white/40'
            }`}
          />
        ))}
      </div>
    </div>
  );
}

function Footer() {
  const [email, setEmail] = useState('');
  const [subscribed, setSubscribed] = useState(false);

  const handleSubscribe = (e: React.FormEvent) => {
    e.preventDefault();
    if (email) {
      setSubscribed(true);
      setEmail('');
      setTimeout(() => setSubscribed(false), 3000);
    }
  };

  return (
    <footer className="relative bg-surface-500 border-t border-white/[0.04]">
      <div className="absolute inset-0 bg-mesh-gradient opacity-30" />

      <div className="relative container mx-auto py-16 px-6">
        <div className="grid md:grid-cols-2 lg:grid-cols-4 gap-10 mb-12">
          <div>
            <img src={LogoImg} alt="SpaceCloud" className="h-8 w-auto mb-4" />
            <p className="text-gray-400 text-sm leading-relaxed mb-4">
              O poder de um PC gamer na palma da sua mao. Jogue, trabalhe e crie de qualquer lugar, sem limites.
            </p>
            <div className="flex gap-3">
              <a href="https://www.instagram.com/spacecloud.gg" target="_blank" rel="noopener noreferrer"
                 className="w-9 h-9 rounded-lg bg-white/[0.04] hover:bg-white/[0.08] flex items-center justify-center transition-all border border-white/5 hover:border-brand-500/30">
                <Instagram className="w-4 h-4 text-gray-400 hover:text-white" />
              </a>
              <a href="https://discord.gg/aj9Dkajjkq" target="_blank" rel="noopener noreferrer"
                 className="w-9 h-9 rounded-lg bg-white/[0.04] hover:bg-white/[0.08] flex items-center justify-center transition-all border border-white/5 hover:border-brand-500/30">
                <MessageCircle className="w-4 h-4 text-gray-400 hover:text-white" />
              </a>
              <a href="https://api.whatsapp.com/send/?phone=551148580895&text&type=phone_number&app_absent=0" target="_blank" rel="noopener noreferrer"
                 className="w-9 h-9 rounded-lg bg-white/[0.04] hover:bg-white/[0.08] flex items-center justify-center transition-all border border-white/5 hover:border-brand-500/30">
                <Phone className="w-4 h-4 text-gray-400 hover:text-white" />
              </a>
              <a href="https://www.youtube.com/@spacecloudgg" target="_blank" rel="noopener noreferrer"
                 className="w-9 h-9 rounded-lg bg-white/[0.04] hover:bg-white/[0.08] flex items-center justify-center transition-all border border-white/5 hover:border-brand-500/30">
                <Youtube className="w-4 h-4 text-gray-400 hover:text-white" />
              </a>
            </div>
          </div>

          <div>
            <h4 className="text-white font-semibold text-sm mb-4">Navegacao</h4>
            <ul className="space-y-3">
              <li><a href="#home" className="text-gray-400 hover:text-white transition-colors text-sm">Home</a></li>
              <li><a href="#como-funciona" className="text-gray-400 hover:text-white transition-colors text-sm">Como Funciona</a></li>
              <li><a href="#plans" className="text-gray-400 hover:text-white transition-colors text-sm">Planos</a></li>
              <li><a href="#testimonials" className="text-gray-400 hover:text-white transition-colors text-sm">Depoimentos</a></li>
              <li><a href="#faq" className="text-gray-400 hover:text-white transition-colors text-sm">FAQ</a></li>
            </ul>
          </div>

          <div>
            <h4 className="text-white font-semibold text-sm mb-4">Legal</h4>
            <ul className="space-y-3">
              <li><Link to="/privacy" className="text-gray-400 hover:text-white transition-colors text-sm">Politica de Privacidade</Link></li>
              <li><Link to="/terms" className="text-gray-400 hover:text-white transition-colors text-sm">Termos de Uso</Link></li>
            </ul>
          </div>

          <div>
            <h4 className="text-white font-semibold text-sm mb-4">Fique por dentro</h4>
            <p className="text-gray-400 text-sm mb-4">Receba novidades e promocoes exclusivas.</p>
            <form onSubmit={handleSubscribe} className="flex gap-2">
              <input
                type="email"
                placeholder="seu@email.com"
                value={email}
                onChange={(e) => setEmail(e.target.value)}
                className="input-primary flex-1 text-sm py-2.5"
              />
              <button type="submit" className="btn-primary px-4 py-2.5 text-sm">
                {subscribed ? <Check className="w-4 h-4" /> : <ArrowRight className="w-4 h-4" />}
              </button>
            </form>
            {subscribed && (
              <p className="text-accent-400 text-xs mt-2">Inscrito com sucesso!</p>
            )}
          </div>
        </div>

        <div className="divider-gradient mb-8" />

        <div className="flex flex-col md:flex-row justify-between items-center gap-4 text-xs text-gray-500">
          <p>&copy; 2025 Todos os direitos reservados. Spaceverse Negocios Digitais LTDA CNPJ: 52.877.876/0001-14.</p>
          <p>Feito com dedicacao para gamers brasileiros</p>
        </div>
      </div>
    </footer>
  );
}

function App() {
  const [mobileMenuOpen, setMobileMenuOpen] = useState(false);
  const [activeProvider, setActiveProvider] = useState('GOOGLE');

  const PRE_SALE_MODE = true;
  const presaleDeadline = new Date('2026-02-24T23:59:59Z').getTime();
  const [timeLeft, setTimeLeft] = useState(() => Math.max(0, presaleDeadline - Date.now()));

  useEffect(() => {
    const timer = setInterval(() => {
      setTimeLeft(Math.max(0, presaleDeadline - Date.now()));
    }, 1000);

    return () => clearInterval(timer);
  }, [presaleDeadline]);

  const presaleEnded = timeLeft <= 0;

  const userCategories = [
    { icon: Gamepad, title: "Gamer", description: "Jogue os titulos mais pesados em qualidade ultra, sem travamentos. Sua maquina local nao importa mais." },
    { icon: Code, title: "Desenvolvedor", description: "Compile projetos complexos, rode containers pesados e teste apps com velocidade de servidor." },
    { icon: Palette, title: "Designer/Editor", description: "Renderize videos e graficos pesados sem delays. Softwares criativos voam na nuvem." },
    { icon: LineChart, title: "Data Science", description: "Treine modelos de IA, execute analises massivas e simulacoes complexas com recursos dedicados." },
    { icon: Video, title: "Streamer", description: "Transmita ao vivo com qualidade maxima sem sobrecarregar nada. Stream + jogo no mesmo PC." },
    { icon: Building, title: "Empreendedor", description: "Escale seu negocio com maquinas flexiveis que acompanham suas demandas de TI." },
  ];

  const GOOGLEPlans = [
    {
      title: "Iron",
      price: "99,90",
      link: "https://www.spacecloudbr.com/painel/store/space-nw-google/iron-nw",
      specs: [
        { icon: Server, text: "Servidores - Sao Paulo BR" },
        { icon: Shield, text: "Windows 10 Pro Booster" },
        { icon: Cpu, text: "6vCPU Intel Xeon 2.20Ghz" },
        { icon: Gauge, text: "GPU Tesla T4 16GB (simula RTX 2060)" },
        { icon: MemoryStick, text: "16GB Memoria RAM" },
        { icon: HardDrive, text: "256GB SSD" },
        { icon: Save, text: "Contem salvamento de arquivos" },
      ],
    },
    {
      title: "Azuli",
      price: "119,90",
      link: "https://www.spacecloudbr.com/painel/store/space-nw-google/azuli-nw",
      specs: [
        { icon: Server, text: "Servidores - Sao Paulo BR" },
        { icon: Shield, text: "Windows 10 Pro Booster" },
        { icon: Cpu, text: "8vCPU Intel Xeon 2.20Ghz" },
        { icon: Gauge, text: "GPU Tesla T4 16GB (simula RTX 2060)" },
        { icon: MemoryStick, text: "22GB Memoria RAM" },
        { icon: HardDrive, text: "256GB SSD" },
        { icon: Save, text: "Contem salvamento de arquivos" },
      ],
      isPopular: true,
    },
    {
      title: "Rubi",
      price: "199,90",
      link: "https://www.spacecloudbr.com/painel/store/space-nw-google/rubi-nw",
      specs: [
        { icon: Server, text: "Servidores - Sao Paulo BR" },
        { icon: Shield, text: "Windows 10 Pro Booster" },
        { icon: Cpu, text: "16vCPU Intel Xeon 2.20Ghz" },
        { icon: Gauge, text: "GPU Tesla T4 16GB (simula RTX 2060)" },
        { icon: MemoryStick, text: "30GB Memoria RAM" },
        { icon: HardDrive, text: "256GB SSD" },
        { icon: Save, text: "Contem salvamento de arquivos" },
      ],
    },
  ];

  const AWSPlans = [
    {
      title: "Presencer",
      price: "102,90",
      purchaseEnabled: true,
      link: "https://www.spacecloudbr.com/painel/store/space-new-era-aws/presencer-nw",
      specs: [
        { icon: Server, text: "Servidores - Sao Paulo BR" },
        { icon: Shield, text: "Windows 10 Pro Booster" },
        { icon: Cpu, text: "4vCPU Intel Xeon Platinum 2.50Ghz" },
        { icon: Gauge, text: "GPU Tesla T4 16GB (simula RTX 2060)" },
        { icon: MemoryStick, text: "16GB Memoria RAM" },
        { icon: HardDrive, text: "256GB NVME" },
        { icon: Cloud, text: "Contem Spot (desligamentos aleatorios)" },
        { icon: Clock, text: "Desligamentos planejados: 00:00, 06:00, 18:00" },
        { icon: Save, text: "Contem salvamento de arquivos" },
      ],
    },
    {
      title: "Archangel",
      price: "159,90",
      purchaseEnabled: true,
      isPopular: true,
      link: "https://www.spacecloudbr.com/painel/store/space-new-era-aws/archangel-new",
      specs: [
        { icon: Server, text: "Servidores - Sao Paulo BR" },
        { icon: Shield, text: "Windows 10 Pro Booster" },
        { icon: Cpu, text: "8vCPU Intel Xeon Platinum 2.50Ghz" },
        { icon: Gauge, text: "GPU Tesla T4 16GB (simula RTX 2060)" },
        { icon: MemoryStick, text: "32GB Memoria RAM" },
        { icon: HardDrive, text: "256GB NVME" },
        { icon: Cloud, text: "Contem Spot (desligamentos aleatorios)" },
        { icon: Clock, text: "Desligamentos planejados: 06:00 e 18:00" },
        { icon: Save, text: "Contem salvamento de arquivos" },
      ],
    },
    {
      title: "Eternum",
      price: "225,90",
      purchaseEnabled: true,
      link: "https://www.spacecloudbr.com/painel/store/space-new-era-aws/eternum-new",
      specs: [
        { icon: Server, text: "Servidores - Sao Paulo BR" },
        { icon: Shield, text: "Windows 10 Pro Booster" },
        { icon: Cpu, text: "16vCPU Intel Xeon Platinum 2.50Ghz" },
        { icon: Gauge, text: "GPU Tesla T4 16GB (simula RTX 2060)" },
        { icon: MemoryStick, text: "64GB Memoria RAM" },
        { icon: HardDrive, text: "256GB NVME" },
        { icon: Cloud, text: "Contem Spot (desligamentos aleatorios)" },
        { icon: Clock, text: "Desligamentos planejados: 00:00, 06:00, 18:00" },
        { icon: Save, text: "Contem salvamento de arquivos" },
      ],
    },
  ];

  const activePlans = activeProvider === 'GOOGLE' ? GOOGLEPlans : AWSPlans;

  return (
    <>
      <FacebookPixel />
      <Routes>
        <Route path="/" element={
          <div className="min-h-screen relative bg-surface-500">
            <ScrollToTop />


            {/* === HEADER === */}
            <header className="fixed w-full px-4 py-3 z-50">
              <div className="container mx-auto">
                <div className="glass-effect rounded-2xl px-6 py-3.5">
                  <div className="flex items-center justify-between">
                    <img src={LogoImg} alt="SpaceCloud" className="h-7 w-auto" />
                    <nav className="hidden md:flex items-center gap-8">
                      <a href="#home" className="nav-link">Home</a>
                      <a href="#como-funciona" className="nav-link">Como Funciona</a>
                      <a href="#plans" className="nav-link">Planos</a>
                      <a href="#testimonials" className="nav-link">Depoimentos</a>
                      <a href="#faq" className="nav-link">FAQ</a>
                    </nav>
                    <div className="hidden md:flex items-center gap-3">
                      <a href="https://spacecloudbr.com/painel/login" className="btn-secondary px-5 py-2.5 text-sm">Login</a>
                      <a href="https://spacecloudbr.com/painel/register.php" className="btn-primary px-5 py-2.5 text-sm">Criar conta</a>
                    </div>
                    <button className="md:hidden text-white p-2" onClick={() => setMobileMenuOpen(true)}>
                      <Menu className="w-6 h-6" />
                    </button>
                  </div>
                </div>
              </div>
            </header>

            <MobileMenu isOpen={mobileMenuOpen} onClose={() => setMobileMenuOpen(false)} />

            {/* === HERO === */}
            <section id="home" className="relative pt-32 pb-24 px-6 overflow-hidden">
              <div className="absolute top-20 left-1/4 w-96 h-96 bg-brand-500/10 rounded-full filter blur-[120px] pointer-events-none" />
              <div className="absolute bottom-0 right-1/4 w-80 h-80 bg-violet-600/10 rounded-full filter blur-[100px] pointer-events-none" />

              <div className="container mx-auto text-center relative z-10">
                <AnimatedSection animation="slideUp">
                  <span className="badge mb-6 inline-flex items-center gap-2">
                    <Sparkles className="w-3.5 h-3.5" />
                    SpaceCloud esta de volta
                  </span>
                </AnimatedSection>

                <AnimatedSection animation="slideUp" delay={0.1}>
                  <h1 className="heading-primary max-w-4xl mx-auto">
                    Seu PC gamer na nuvem.
                    <br />
                    <span className="gradient-text">Sem hardware. Sem limites.</span>
                  </h1>
                </AnimatedSection>

                <AnimatedSection animation="slideUp" delay={0.2}>
                  <p className="text-lg md:text-xl text-gray-400 max-w-2xl mx-auto mb-10 leading-relaxed">
                    Jogue os titulos mais pesados, trabalhe com softwares profissionais e crie sem barreiras — tudo direto do seu navegador ou celular. <span className="whitespace-nowrap">De R$ 99,90/mes.</span>
                  </p>
                </AnimatedSection>

                <AnimatedSection animation="scale" delay={0.3}>
                  {PRE_SALE_MODE && <PreSaleCountdown timeLeft={timeLeft} ended={presaleEnded} />}
                  <div className={`flex flex-col sm:flex-row gap-4 justify-center items-center ${PRE_SALE_MODE ? 'mt-6' : ''}`}>
                    <a href="#plans" className="btn-primary inline-flex items-center gap-2 text-lg px-8 py-4">
                      {PRE_SALE_MODE ? 'Garantir vaga na pre-venda' : 'Comecar agora'}
                      <ArrowRight className="w-5 h-5" />
                    </a>
                    <a href="#como-funciona" className="btn-secondary inline-flex items-center gap-2 text-lg px-8 py-4">
                      <Play className="w-5 h-5" />
                      Como funciona
                    </a>
                  </div>
                </AnimatedSection>

                <AnimatedSection animation="fadeIn" delay={0.5}>
                  <div className="flex flex-wrap justify-center gap-8 mt-16 text-sm text-gray-500">
                    <div className="flex items-center gap-2">
                      <Check className="w-4 h-4 text-accent-500" />
                      <span>Sem fila de login</span>
                    </div>
                    <div className="flex items-center gap-2">
                      <Check className="w-4 h-4 text-accent-500" />
                      <span>Salvamento de arquivos</span>
                    </div>
                    <div className="flex items-center gap-2">
                      <Check className="w-4 h-4 text-accent-500" />
                      <span>{PRE_SALE_MODE ? 'Pre-venda: entrega prevista em ate 15 dias' : 'Entrega em 2 dias'}</span>
                    </div>
                    <div className="flex items-center gap-2">
                      <Check className="w-4 h-4 text-accent-500" />
                      <span>Suporte rapido</span>
                    </div>
                  </div>
                </AnimatedSection>
              </div>
            </section>

            {/* === STATS BAR === */}
            <section className="py-8 border-y border-white/[0.04]">
              <div className="container mx-auto">
                <div className="grid grid-cols-2 md:grid-cols-4 gap-8 text-center">
                  <AnimatedSection animation="fadeIn" delay={0}>
                    <div>
                      <p className="stat-number">500+</p>
                      <p className="text-sm text-gray-500 mt-1">Clientes ativos</p>
                    </div>
                  </AnimatedSection>
                  <AnimatedSection animation="fadeIn" delay={0.1}>
                    <div>
                      <p className="stat-number">99.5%</p>
                      <p className="text-sm text-gray-500 mt-1">Uptime garantido</p>
                    </div>
                  </AnimatedSection>
                  <AnimatedSection animation="fadeIn" delay={0.2}>
                    <div>
                      <p className="stat-number">&lt;5min</p>
                      <p className="text-sm text-gray-500 mt-1">Tempo de acesso</p>
                    </div>
                  </AnimatedSection>
                  <AnimatedSection animation="fadeIn" delay={0.3}>
                    <div>
                      <p className="stat-number">4.8</p>
                      <p className="text-sm text-gray-500 mt-1">Avaliacao media</p>
                    </div>
                  </AnimatedSection>
                </div>
              </div>
            </section>

            {/* === PROBLEMA -> SOLUCAO === */}
            <section className="py-20 px-6 relative overflow-hidden">
              <div className="absolute top-0 right-0 w-96 h-96 bg-violet-600/5 rounded-full filter blur-[120px] pointer-events-none" />

              <div className="container mx-auto relative z-10">
                <AnimatedSection animation="slideUp" className="text-center mb-16">
                  <span className="section-label">O problema</span>
                  <h2 className="section-title">Voce merece mais do que o seu PC pode oferecer</h2>
                  <p className="section-subtitle">A maioria dos brasileiros nao tem acesso a hardware de ponta. E comprar um PC gamer custa caro, envelhece rapido e da dor de cabeca.</p>
                </AnimatedSection>

                <div className="grid md:grid-cols-2 gap-8 max-w-5xl mx-auto mb-16">
                  <AnimatedSection animation="slideLeft">
                    <div className="rounded-2xl p-8 bg-red-500/[0.03] border border-red-500/10">
                      <div className="flex items-center gap-3 mb-6">
                        <div className="w-10 h-10 rounded-xl bg-red-500/10 flex items-center justify-center">
                          <X className="w-5 h-5 text-red-400" />
                        </div>
                        <h3 className="text-lg font-semibold text-white">Sem SpaceCloud</h3>
                      </div>
                      <ul className="space-y-4">
                        {[
                          'R$ 12.000+ para montar um PC gamer decente',
                          'Gastos mensais com energia e manutencao',
                          'Hardware que desvaloriza a cada ano',
                          'Travamentos e queda de FPS nos jogos',
                          'Limitado ao local onde o PC esta',
                        ].map((item, i) => (
                          <li key={i} className="flex items-start gap-3">
                            <X className="w-4 h-4 text-red-400 mt-1 flex-shrink-0" />
                            <span className="text-gray-400 text-sm">{item}</span>
                          </li>
                        ))}
                      </ul>
                    </div>
                  </AnimatedSection>

                  <AnimatedSection animation="slideRight">
                    <div className="rounded-2xl p-8 bg-accent-500/[0.03] border border-accent-500/10">
                      <div className="flex items-center gap-3 mb-6">
                        <div className="w-10 h-10 rounded-xl bg-accent-500/10 flex items-center justify-center">
                          <Check className="w-5 h-5 text-accent-400" />
                        </div>
                        <h3 className="text-lg font-semibold text-white">Com SpaceCloud</h3>
                      </div>
                      <ul className="space-y-4">
                        {[
                          'A partir de R$ 99,90/mes - sem investimento inicial',
                          'Zero gastos com energia extra ou manutencao',
                          'Hardware sempre atualizado nos servidores',
                          'Performance estavel com GPU dedicada Tesla T4',
                          'Jogue de qualquer dispositivo, em qualquer lugar',
                        ].map((item, i) => (
                          <li key={i} className="flex items-start gap-3">
                            <Check className="w-4 h-4 text-accent-400 mt-1 flex-shrink-0" />
                            <span className="text-gray-300 text-sm">{item}</span>
                          </li>
                        ))}
                      </ul>
                    </div>
                  </AnimatedSection>
                </div>
              </div>
            </section>

            {/* === COMO FUNCIONA === */}
            <section id="como-funciona" className="py-20 px-6 border-y border-white/[0.04] relative">
              <div className="absolute inset-0 bg-mesh-gradient opacity-20" />
              <div className="container mx-auto relative z-10">
                <AnimatedSection animation="slideUp" className="text-center mb-16">
                  <span className="section-label">Simples assim</span>
                  <h2 className="section-title">Comece a jogar em 4 passos</h2>
                  <p className="section-subtitle">Da escolha do plano ate o primeiro jogo, leva menos de 5 minutos.</p>
                </AnimatedSection>

                <div className="grid md:grid-cols-4 gap-6 max-w-5xl mx-auto">
                  {[
                    { step: '01', icon: DollarSign, title: 'Escolha seu plano', desc: 'Selecione o plano ideal para sua necessidade e orcamento.' },
                    { step: '02', icon: Timer, title: 'Receba sua maquina', desc: 'Em ate 2 dias uteis, sua VM esta pronta e configurada.' },
                    { step: '03', icon: Wifi, title: 'Conecte-se', desc: 'Acesse via Parsec, Moonlight ou Steam Link de qualquer dispositivo.' },
                    { step: '04', icon: Gamepad, title: 'Jogue sem limites', desc: 'Aproveite jogos em ultra sem travamentos, de onde estiver.' },
                  ].map((item, index) => (
                    <AnimatedSection key={index} animation="slideUp" delay={index * 0.1}>
                      <div className="text-center group">
                        <div className="relative mb-6">
                          <div className="w-16 h-16 rounded-2xl bg-gradient-to-br from-brand-500/10 to-violet-600/10 border border-brand-500/20 flex items-center justify-center mx-auto group-hover:border-brand-400/40 group-hover:from-brand-500/20 group-hover:to-violet-600/20 transition-all duration-500">
                            <item.icon className="w-7 h-7 text-brand-400" />
                          </div>
                          <span className="absolute -top-2 -right-2 text-xs font-bold text-brand-500/40">{item.step}</span>
                        </div>
                        <h3 className="text-base font-semibold text-white mb-2">{item.title}</h3>
                        <p className="text-sm text-gray-400 leading-relaxed">{item.desc}</p>
                      </div>
                    </AnimatedSection>
                  ))}
                </div>
              </div>
            </section>

            {/* === PARA QUEM E === */}
            <section className="py-20 px-6 relative">
              <div className="container mx-auto">
                <AnimatedSection animation="slideUp" className="text-center mb-16">
                  <span className="section-label">Para todo tipo de profissional</span>
                  <h2 className="section-title">A SpaceCloud e para voce</h2>
                  <p className="section-subtitle">Nao importa se voce e gamer, dev ou criador de conteudo. Temos a maquina ideal.</p>
                </AnimatedSection>
                <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-6 max-w-6xl mx-auto">
                  {userCategories.map((category, index) => (
                    <UserCategory key={index} {...category} />
                  ))}
                </div>
              </div>
            </section>

            {/* === DIFERENCIAIS === */}
            <section className="py-20 px-6 border-y border-white/[0.04] relative">
              <div className="absolute inset-0 bg-mesh-gradient opacity-10" />
              <div className="container mx-auto relative z-10">
                <AnimatedSection animation="slideUp" className="text-center mb-16">
                  <span className="section-label">Por que a SpaceCloud</span>
                  <h2 className="section-title">O que ninguem mais oferece</h2>
                </AnimatedSection>

                <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-6 max-w-6xl mx-auto">
                  {[
                    { icon: Zap, title: 'Sem fila de login', desc: 'Acesse sua maquina instantaneamente. Zero espera, zero burocracia.' },
                    { icon: Save, title: 'Salvamento de arquivos', desc: 'Seus jogos, projetos e documentos ficam salvos entre sessoes. Nada se perde.' },
                    { icon: Shield, title: 'Seguranca e isolamento', desc: 'Cada VM e isolada, com Windows 11 Pro e monitoramento ativo 24/7.' },
                    { icon: Timer, title: 'Ativacao rapida', desc: 'Maquina pronta em ate 2 dias uteis. Sem processos demorados.' },
                    { icon: Users, title: 'Suporte humano real', desc: 'Time brasileiro que responde rapido via Discord e WhatsApp.' },
                    { icon: Award, title: 'Melhor custo-beneficio', desc: 'Hardware de R$ 12.000 por uma fracao do custo. Sem manutencao.' },
                  ].map((item, index) => (
                    <AnimatedSection key={index} animation="slideUp" delay={index * 0.05}>
                      <div className="card h-full">
                        <div className="flex items-start gap-4">
                          <div className="w-11 h-11 rounded-xl bg-gradient-to-br from-brand-500/10 to-violet-600/10 flex items-center justify-center flex-shrink-0 border border-brand-500/10">
                            <item.icon className="w-5 h-5 text-brand-400" />
                          </div>
                          <div>
                            <h3 className="text-base font-semibold text-white mb-1.5">{item.title}</h3>
                            <p className="text-sm text-gray-400 leading-relaxed">{item.desc}</p>
                          </div>
                        </div>
                      </div>
                    </AnimatedSection>
                  ))}
                </div>
              </div>
            </section>

            {/* === CALCULADORA === */}
            <section className="py-20 px-6">
              <div className="container mx-auto">
                <SavingsCalculator />
              </div>
            </section>

            {/* === PLANOS === */}
            <section id="plans" className="py-20 px-6 relative">
              <div className="absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 w-[600px] h-[600px] bg-brand-500/5 rounded-full filter blur-[150px] pointer-events-none" />

              <div className="container mx-auto relative z-10">
                <AnimatedSection animation="slideUp" className="text-center mb-4">
                  <span className="section-label">Planos e precos</span>
                  <h2 className="section-title">Escolha o plano ideal para voce</h2>
                  <p className="section-subtitle">{PRE_SALE_MODE ? 'Todos os planos desta pagina sao de pre-venda. Entrega prevista das VMs em ate 15 dias.' : 'Todos os planos incluem salvamento de arquivos, GPU dedicada e suporte brasileiro.'}</p>
                </AnimatedSection>

                {PRE_SALE_MODE && (
                  <div className="max-w-4xl mx-auto mb-6 rounded-2xl border border-brand-500/25 bg-brand-500/5 p-4 text-center">
                    <p className="text-sm text-gray-200">
                      Ao garantir agora, sua vaga entra na <span className="text-brand-400 font-semibold">fila prioritaria de ativacao</span>. O prazo de 15 dias e o maximo e pode ser antes.
                    </p>
                    <p className="text-xs text-gray-400 mt-1.5">
                      Em caso de cancelamento, a vaga prioritaria e liberada.
                    </p>
                  </div>
                )}

                <ProviderToggle activeProvider={activeProvider} onToggle={setActiveProvider} />

                <div className="grid md:grid-cols-3 gap-6 max-w-5xl mx-auto">
                  {(activeProvider === 'GOOGLE' ? GOOGLEPlans : AWSPlans).map((plan, index, arr) => {
                    const middleIndex = Math.floor(arr.length / 2);
                    const isPopular = index === middleIndex;
                    const purchaseEnabled = plan.purchaseEnabled ?? true;

                    return (
                      <PlanCard
                        key={`${activeProvider}-${plan.title}`}
                        {...plan}
                        isPopular={isPopular}
                        purchaseEnabled={purchaseEnabled}
                        preSaleMode={PRE_SALE_MODE}
                      />
                    );
                  })}
                </div>
              </div>
            </section>

            {/* === CTA INTERMEDIARIO === */}
            <section className="py-8 px-6">
              <div className="container mx-auto">
                <AnimatedSection animation="slideUp">
                  <div className="glass-card p-8 md:p-10 flex flex-col md:flex-row md:items-center md:justify-between gap-6">
                    <div>
                      <span className="section-label">{PRE_SALE_MODE ? 'Pre-venda com prioridade' : 'Disponivel agora'}</span>
                      <h3 className="text-2xl font-bold text-white mt-1">{PRE_SALE_MODE ? 'Garanta sua vaga na fila prioritaria' : 'Sua maquina pronta em minutos'}</h3>
                      <p className="text-gray-400 mt-2 text-sm">{PRE_SALE_MODE ? 'Ativacao prevista em ate 15 dias (podendo ocorrer antes), com salvamento de arquivos e suporte dedicado.' : 'Sem filas, com salvamento de arquivos e suporte dedicado.'}</p>
                    </div>
                    <div className="flex flex-col sm:flex-row gap-3">
                      <a href="#plans" className="btn-primary text-center">Ver planos</a>
                      <a href="https://discord.gg/aj9Dkajjkq" target="_blank" rel="noopener noreferrer" className="btn-secondary text-center">
                        Falar com suporte
                      </a>
                    </div>
                  </div>
                </AnimatedSection>
              </div>
            </section>

            {/* === DEPOIMENTOS === */}
            <section id="testimonials" className="py-20 px-6 relative">
              <div className="container mx-auto">
                <AnimatedSection animation="slideUp" className="text-center mb-16">
                  <span className="section-label">Prova social</span>
                  <h2 className="section-title">O que nossos clientes dizem</h2>
                  <p className="section-subtitle">Depoimentos reais de gamers e profissionais que usam a SpaceCloud no dia a dia.</p>
                </AnimatedSection>
                <Testimonials />
              </div>
            </section>

            {/* === FAQ === */}
            <section id="faq" className="py-20 px-6 border-t border-white/[0.04]">
              <div className="container mx-auto">
                <AnimatedSection animation="slideUp" className="text-center mb-12">
                  <span className="section-label">Duvidas</span>
                  <h2 className="section-title">Perguntas frequentes</h2>
                  <p className="section-subtitle">Tudo que voce precisa saber antes de comecar.</p>
                </AnimatedSection>
                <FAQ />
              </div>
            </section>

            {/* === CTA FINAL === */}
            <section className="py-20 px-6 relative overflow-hidden">
              <div className="absolute inset-0 bg-gradient-to-b from-brand-950/20 via-violet-950/20 to-transparent" />
              <div className="container mx-auto relative z-10 text-center">
                <AnimatedSection animation="slideUp">
                  <span className="badge mb-6 inline-flex items-center gap-2">
                    <Zap className="w-3.5 h-3.5" />
                    {PRE_SALE_MODE ? 'Pre-venda ativa' : 'Comece agora mesmo'}
                  </span>
                  <h2 className="section-title max-w-3xl mx-auto">
                    {PRE_SALE_MODE ? 'Garanta sua vaga prioritaria na SpaceCloud' : 'Pronto para ter o PC dos seus sonhos na nuvem?'}
                  </h2>
                  <p className="text-gray-400 text-lg max-w-xl mx-auto mt-4 mb-8">
                    {PRE_SALE_MODE ? 'Ativacao em ate 15 dias (podendo ocorrer antes). Ao confirmar seu plano, voce entra na fila prioritaria de liberacao.' : 'Crie sua conta gratis, escolha um plano e comece a jogar em minutos. Sem compromisso — cancele quando quiser.'}
                  </p>
                  <div className="flex flex-col sm:flex-row gap-4 justify-center">
                    <a href="https://spacecloudbr.com/painel/register.php" className="btn-primary inline-flex items-center justify-center gap-2 text-lg px-10 py-4">
                      Criar conta gratis
                      <ArrowRight className="w-5 h-5" />
                    </a>
                  </div>
                  <p className="text-xs text-gray-600 mt-6">Sem cartao de credito para criar conta. Planos a partir de R$ 99,90/mes.</p>
                </AnimatedSection>
              </div>
            </section>

            <Footer />
          </div>
        } />
        <Route path="/privacy" element={<><ScrollToTop /><PrivacyPolicy /><Footer /></>} />
        <Route path="/terms" element={<><ScrollToTop /><TermsOfUse /><Footer /></>} />
      </Routes>
      <ContactWidget />
    </>
  );
}

export default App;
