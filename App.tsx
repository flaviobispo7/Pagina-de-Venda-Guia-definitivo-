import React, { useState } from 'react';
import { Check, Star, ChevronDown, Award, BookOpen, BarChart, ShieldCheck, Search, DollarSign } from 'lucide-react';

// --- CONFIGURATION ---

// TODO: REPLACE THIS URL WITH YOUR UPLOADED IMAGE URL
// Since I cannot access your local files, I used a placeholder that generates the text.
// If you host your image (e.g., imgur, AWS S3) or put it in a public folder, paste the link here.
const BOOK_COVER_URL = "https://placehold.co/400x580/f1f5f9/0f172a?text=O+GUIA+DEFINITIVO\nDAS+LICITAÇÕES\n(Sua+Imagem+Aqui)";

// --- COMPONENTS ---

const Icons = {
  Check: () => <Check className="w-6 h-6 text-green-500" />,
  Star: () => <Star className="w-4 h-4 fill-current text-brand-gold" />,
  ChevronDown: ({ className }: { className?: string }) => <ChevronDown className={className} />,
};

const HeroSection = () => {
  return (
    <header className="relative min-h-screen flex items-center overflow-hidden bg-brand-dark text-white">
      {/* Background Image with Overlay */}
      <div className="absolute inset-0 z-0">
        <div className="absolute inset-0 bg-gradient-to-r from-brand-dark/95 to-brand-dark/80 z-10"></div>
        <img 
          src="https://images.unsplash.com/photo-1454165804606-c3d57bc86b40?ixlib=rb-4.0.3&auto=format&fit=crop&w=1920&q=80" 
          alt="Background Office" 
          className="w-full h-full object-cover"
        />
      </div>

      <div className="absolute top-0 right-0 w-1/2 h-full bg-gradient-to-l from-brand-gold/10 to-transparent pointer-events-none z-10"></div>

      <div className="container mx-auto px-6 py-20 md:py-32 relative z-20 flex flex-col md:flex-row items-center gap-12">
        <div className="md:w-3/5 text-center md:text-left">
          <span className="inline-block py-1 px-3 rounded-full bg-brand-gold/20 border border-brand-gold text-brand-gold text-sm font-bold mb-6 tracking-wide uppercase animate-fade-in-up">
            Para empreendedores e MEIs
          </span>
          <h1 className="text-4xl md:text-6xl font-extrabold leading-tight mb-6 font-heading">
            Transforme o <span className="text-brand-gold">Governo</span> no seu melhor cliente.
          </h1>
          <p className="text-lg md:text-xl text-gray-300 mb-8 leading-relaxed max-w-2xl">
            Pare de correr atrás de clientes que pedem desconto. Descubra o passo a passo simples para vender seus produtos ou serviços para o maior comprador do Brasil.
          </p>
          <div className="flex flex-col sm:flex-row gap-4 justify-center md:justify-start">
            <a 
              href="#oferta" 
              className="bg-gradient-to-r from-green-600 to-green-700 hover:from-green-500 hover:to-green-600 text-white font-bold text-lg py-4 px-8 rounded-xl shadow-lg hover:shadow-green-900/50 hover:-translate-y-1 transition-all duration-300 text-center"
            >
              QUERO VENDER PARA O GOVERNO
            </a>
            <a href="#como-funciona" className="flex items-center justify-center text-gray-300 hover:text-white font-medium px-6 py-4 transition group">
              <ChevronDown className="w-5 h-5 mr-2 group-hover:translate-y-1 transition-transform" />
              Entenda como funciona
            </a>
          </div>
        </div>
        
        {/* Book Cover Image */}
        <div className="md:w-2/5 flex justify-center md:justify-end relative group perspective-1000">
          <div className="relative z-10 transform md:rotate-y-12 md:rotate-z-3 group-hover:rotate-0 transition duration-700 ease-out">
            <img 
              src={BOOK_COVER_URL} 
              alt="Capa do Guia Definitivo das Licitações" 
              className="rounded-lg shadow-2xl border-4 border-white/10 w-full max-w-sm object-cover aspect-[2/3]"
            />
          </div>
          {/* Decorative Glow */}
          <div className="absolute top-1/2 left-1/2 transform -translate-x-1/2 -translate-y-1/2 w-80 h-80 bg-brand-gold/20 rounded-full blur-3xl -z-10 animate-pulse"></div>
        </div>
      </div>
    </header>
  );
};

const ProblemSection = () => {
  return (
    <section id="como-funciona" className="py-20 bg-white">
      <div className="container mx-auto px-6">
        <div className="flex flex-col md:flex-row items-center gap-12">
          <div className="md:w-1/2">
            <div className="relative rounded-2xl overflow-hidden shadow-2xl group">
              <img 
                src="https://images.unsplash.com/photo-1520607162513-77705c0f0d4a?ixlib=rb-4.0.3&auto=format&fit=crop&w=800&q=80" 
                alt="Empreendedor preocupado" 
                className="w-full h-auto object-cover opacity-90 group-hover:scale-105 transition duration-700"
              />
              <div className="absolute bottom-0 left-0 w-full bg-gradient-to-t from-black/80 to-transparent p-8">
                <p className="text-white font-bold text-lg">"Será que fecho as contas esse mês?"</p>
              </div>
            </div>
          </div>

          <div className="md:w-1/2">
            <h2 className="text-3xl md:text-4xl font-bold mb-6 text-brand-dark font-heading">
              A montanha-russa do empreendedorismo está te cansando?
            </h2>
            <p className="text-lg text-gray-600 mb-6 leading-relaxed">
              Você tem um bom produto ou serviço, acorda cedo, trabalha duro... mas no final do mês, a conta não fecha como deveria. A concorrência é desleal e os clientes "somem" sem explicação.
            </p>
            <p className="text-lg text-gray-600 mb-8 leading-relaxed">
              Enquanto isso, existe um cliente que compra de tudo — de café a material de construção, de serviços de limpeza a marketing — e que <strong>precisa desesperadamente</strong> de fornecedores como você.
            </p>
            
            <div className="grid grid-cols-1 sm:grid-cols-2 gap-4">
              <div className="bg-gray-50 p-4 rounded-lg border-l-4 border-brand-gold hover:bg-brand-gold/10 transition">
                <h3 className="font-bold text-brand-dark mb-1 flex items-center"><Award className="w-4 h-4 mr-2 text-brand-gold" /> Pequenos têm vantagem</h3>
                <p className="text-sm text-gray-600">Leis exclusivas para ME e EPP.</p>
              </div>
              <div className="bg-gray-50 p-4 rounded-lg border-l-4 border-brand-gold hover:bg-brand-gold/10 transition">
                <h3 className="font-bold text-brand-dark mb-1 flex items-center"><ShieldCheck className="w-4 h-4 mr-2 text-brand-gold" /> Pagamento Garantido</h3>
                <p className="text-sm text-gray-600">Segurança da Nota de Empenho.</p>
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};

const SolutionSection = () => {
  return (
    <section className="py-20 bg-brand-cream relative">
      <div className="container mx-auto px-6 text-center">
        <span className="text-brand-gold font-bold tracking-widest uppercase mb-2 block">A Solução Definitiva</span>
        <h2 className="text-3xl md:text-5xl font-bold mb-8 text-brand-dark max-w-4xl mx-auto font-heading">
          Transforme a burocracia em um mapa do tesouro
        </h2>
        
        <div className="bg-white rounded-3xl shadow-xl p-8 md:p-12 max-w-5xl mx-auto flex flex-col md:flex-row items-center gap-10 border border-gray-100">
          <div className="md:w-1/2 order-2 md:order-1 text-left">
            <h3 className="text-2xl font-bold mb-4 text-brand-dark">O Guia Definitivo das Licitações</h3>
            <p className="text-gray-600 mb-6">
              Não é apenas um e-book. É um manual de campo testado e validado para quem quer sair do zero e fechar o primeiro contrato público em tempo recorde.
            </p>
            <ul className="space-y-4 mb-8">
              {[
                "Linguagem simples (sem 'juridiquês')",
                "Passo a passo visual e prático",
                "Estratégias para quem é MEI"
              ].map((item, idx) => (
                <li key={idx} className="flex items-center text-gray-700">
                  <div className="bg-green-100 p-1 rounded-full mr-3">
                    <Check className="w-4 h-4 text-green-600" />
                  </div>
                  {item}
                </li>
              ))}
            </ul>
          </div>
          <div className="md:w-1/2 order-1 md:order-2 relative">
             {/* Use the main image here as well, or a mockup variant */}
            <div className="relative transform hover:scale-105 transition duration-300">
                <img 
                    src={BOOK_COVER_URL} 
                    alt="Mockup do Guia" 
                    className="w-full max-w-[300px] h-auto rounded-lg shadow-2xl mx-auto"
                />
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};

const FeatureCard = ({ number, title, description, icon: Icon }: { number: number, title: string, description: string, icon: React.ElementType }) => (
  <div className="bg-slate-800 p-8 rounded-2xl hover:bg-slate-750 transition duration-300 border border-slate-700 hover:border-brand-gold/50 group">
    <div className="flex justify-between items-start mb-6">
        <div className="w-12 h-12 bg-brand-gold rounded-lg flex items-center justify-center text-brand-dark font-bold text-xl shadow-lg group-hover:scale-110 transition">
        {number}
        </div>
        <Icon className="w-6 h-6 text-slate-500 group-hover:text-brand-gold transition" />
    </div>
    <h3 className="text-xl font-bold mb-3 text-white">{title}</h3>
    <p className="text-gray-400 text-sm">{description}</p>
  </div>
);

const FeaturesGrid = () => {
  return (
    <section className="py-20 bg-brand-dark text-white">
      <div className="container mx-auto px-6">
        <div className="text-center mb-16">
          <h2 className="text-3xl md:text-4xl font-bold mb-4 font-heading">O que tem dentro do Guia?</h2>
          <p className="text-gray-400 max-w-2xl mx-auto">Dividimos o processo complexo em pílulas digeríveis de conhecimento prático.</p>
        </div>

        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6 max-w-6xl mx-auto">
          <FeatureCard number={1} icon={ShieldCheck} title="Fundação Sólida" description="Como preparar seu CNPJ e blindar sua empresa antes mesmo de entrar na disputa." />
          <FeatureCard number={2} icon={BookOpen} title="Habilitação Descomplicada" description="O checklist definitivo de documentos e como conseguir cada um deles sem sair de casa." />
          <FeatureCard number={3} icon={Search} title="O Segredo do SICAF" description="Passo a passo com telas para se cadastrar no sistema federal de fornecedores." />
          <FeatureCard number={4} icon={BarChart} title="Radar de Oportunidades" description="Como filtrar milhares de editais e encontrar aqueles que ninguém está vendo." />
          <FeatureCard number={5} icon={DollarSign} title="Precificação à Prova de Erro" description="A planilha mental para garantir lucro e cobrir todos os impostos e custos." />
          <FeatureCard number={6} icon={Award} title="Pós-Venda Governamental" description="Da entrega do produto à emissão da nota fiscal para receber o dinheiro na conta." />
        </div>
      </div>
    </section>
  );
};

const AuthorSection = () => {
  return (
    <section className="py-20 bg-white border-b border-gray-100">
      <div className="container mx-auto px-6">
        <div className="flex flex-col md:flex-row items-center gap-12 max-w-5xl mx-auto">
          <div className="md:w-1/3 text-center">
            <div className="relative inline-block group">
              <img 
                src="https://images.unsplash.com/photo-1560250097-0b93528c311a?ixlib=rb-4.0.3&auto=format&fit=crop&w=400&q=80" 
                alt="Foto do Autor" 
                className="w-64 h-64 object-cover rounded-full shadow-2xl border-4 border-brand-cream group-hover:scale-105 transition duration-500" 
              />
              <div className="absolute bottom-4 right-4 bg-brand-gold text-brand-dark font-bold px-4 py-1 rounded-full text-sm shadow-md">
                Especialista
              </div>
            </div>
          </div>
          <div className="md:w-2/3 text-center md:text-left">
            <h2 className="text-3xl font-bold mb-4 text-brand-dark font-heading">Quem vai te guiar nessa jornada?</h2>
            <h3 className="text-xl text-brand-gold font-semibold mb-6">Olá, eu sou [Seu Nome]</h3>
            <p className="text-gray-600 mb-4 text-lg">
              Há 5 anos, eu estava exatamente onde você está: cheio de dúvidas e com medo da burocracia. Minha primeira licitação foi um desastre, mas eu não desisti.
            </p>
            <p className="text-gray-600 mb-4 text-lg">
              Hoje, já fechei mais de <strong>R$ 2 milhões em contratos</strong> para minha pequena empresa e ajudei centenas de alunos a fazerem o mesmo.
            </p>
            <p className="text-gray-600 mb-6 text-lg">
              Criei este guia para ser o mentor que eu gostaria de ter tido no começo. Sem enrolação, direto ao ponto e focado em resultados reais.
            </p>
            <div className="font-heading text-2xl text-gray-400 font-bold italic opacity-60">
              [Assinatura]
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};

const TestimonialCard = ({ name, role, text, img }: { name: string, role: string, text: string, img: string }) => (
  <div className="bg-white p-8 rounded-2xl shadow-lg border-t-4 border-brand-gold relative hover:shadow-xl transition duration-300">
    <div className="absolute -top-6 left-8 text-6xl text-brand-gold opacity-20 font-serif">"</div>
    <div className="flex items-center gap-4 mb-4">
      <img src={img} alt={name} className="w-14 h-14 rounded-full object-cover border border-gray-200" />
      <div>
        <p className="font-bold text-brand-dark">{name}</p>
        <p className="text-xs text-gray-500">{role}</p>
      </div>
    </div>
    <p className="text-gray-600 italic relative z-10">{text}</p>
    <div className="flex text-brand-gold mt-4 text-sm gap-1">
      <Icons.Star /><Icons.Star /><Icons.Star /><Icons.Star /><Icons.Star />
    </div>
  </div>
);

const SocialProof = () => {
  return (
    <section className="py-20 bg-brand-cream">
      <div className="container mx-auto px-6">
        <h2 className="text-3xl md:text-4xl font-bold text-center mb-12 text-brand-dark font-heading">Histórias reais de quem aplicou o método</h2>
        <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
          <TestimonialCard 
            name="João Pereira" 
            role="MEI - Serviços Gerais" 
            text="Eu achava que licitação era só para peixe grande. O guia me mostrou as Dispensas Eletrônicas e em 15 dias fechei R$ 8.500 com a prefeitura."
            img="https://randomuser.me/api/portraits/men/32.jpg"
          />
          <TestimonialCard 
            name="Maria Souza" 
            role="Papelaria e Escritório" 
            text="O checklist de documentos vale ouro! Organizei minha pasta em uma tarde e nunca fui inabilitada. O investimento se pagou na primeira venda."
            img="https://randomuser.me/api/portraits/women/44.jpg"
          />
          <TestimonialCard 
            name="Carlos Andrade" 
            role="Manutenção de Ar Condicionado" 
            text="O capítulo de precificação me salvou. Eu estava cobrando errado e quase tendo prejuízo. Agora tenho margem segura e lucro no bolso."
            img="https://randomuser.me/api/portraits/men/85.jpg"
          />
        </div>
      </div>
    </section>
  );
};

const OfferSection = () => {
  return (
    <section id="oferta" className="py-20 bg-white">
      <div className="container mx-auto px-6">
        <div className="max-w-5xl mx-auto bg-white rounded-3xl shadow-2xl overflow-hidden border border-gray-200">
          <div className="flex flex-col md:flex-row">
            
            <div className="bg-brand-dark p-10 text-white md:w-2/5 flex flex-col justify-between relative overflow-hidden">
              <div className="absolute top-0 left-0 w-full h-full opacity-10 bg-[radial-gradient(ellipse_at_top_right,_var(--tw-gradient-stops))] from-white to-transparent pointer-events-none"></div>
              <div className="relative z-10">
                <span className="bg-brand-gold text-brand-dark text-xs font-bold px-3 py-1 rounded uppercase tracking-wide">Oferta Limitada</span>
                <h3 className="text-3xl font-bold mt-4 leading-tight font-heading">Comece sua jornada hoje mesmo.</h3>
                <div className="mt-8 flex justify-center">
                  <img 
                    src={BOOK_COVER_URL} 
                    alt="Box do Produto" 
                    className="w-48 rounded-lg shadow-2xl transform rotate-3 hover:rotate-0 transition duration-500 border border-white/20"
                  />
                </div>
              </div>
              <div className="mt-8 text-sm text-gray-400 relative z-10 space-y-1">
                <p className="flex items-center"><Check className="w-4 h-4 mr-2 text-green-500" /> Acesso Imediato</p>
                <p className="flex items-center"><Check className="w-4 h-4 mr-2 text-green-500" /> Download em PDF</p>
                <p className="flex items-center"><Check className="w-4 h-4 mr-2 text-green-500" /> Leitura em qualquer dispositivo</p>
              </div>
            </div>

            <div className="p-10 md:w-3/5 bg-gray-50">
              <h4 className="text-2xl font-bold text-gray-800 mb-6">O que você recebe:</h4>
              <ul className="space-y-4 mb-8">
                <li className="flex items-start">
                  <BookOpen className="w-6 h-6 text-green-600 mr-3 flex-shrink-0" />
                  <span className="text-gray-700"><strong>E-book Completo:</strong> O Guia Definitivo das Licitações</span>
                </li>
                <li className="flex items-start">
                  <Star className="w-6 h-6 text-brand-gold mr-3 flex-shrink-0 fill-current" />
                  <span className="text-gray-700"><strong>Bônus #1:</strong> Checklist Mestre da Habilitação <span className="text-xs text-red-500 line-through ml-2">(R$ 47)</span></span>
                </li>
                <li className="flex items-start">
                  <Star className="w-6 h-6 text-brand-gold mr-3 flex-shrink-0 fill-current" />
                  <span className="text-gray-700"><strong>Bônus #2:</strong> Modelos de E-mail e Documentos <span className="text-xs text-red-500 line-through ml-2">(R$ 67)</span></span>
                </li>
                <li className="flex items-start">
                  <Star className="w-6 h-6 text-brand-gold mr-3 flex-shrink-0 fill-current" />
                  <span className="text-gray-700"><strong>Bônus #3:</strong> Glossário do Licitante <span className="text-xs text-red-500 line-through ml-2">(R$ 27)</span></span>
                </li>
              </ul>
              
              <div className="border-t border-gray-200 pt-6">
                <p className="text-sm text-gray-500">De <span className="line-through">R$ 338,00</span> por apenas:</p>
                <div className="flex items-baseline gap-2 mb-2">
                  <span className="text-5xl font-extrabold text-green-600">R$ 97</span>
                  <span className="text-gray-600">à vista</span>
                </div>
                <p className="text-sm text-gray-500 mb-6">ou 12x de R$ 9,74 no cartão</p>
                
                <button className="w-full bg-gradient-to-r from-green-600 to-green-700 hover:from-green-500 hover:to-green-600 text-white font-bold text-xl py-5 rounded-lg shadow-lg hover:shadow-xl transform transition hover:-translate-y-1 active:translate-y-0">
                  GARANTIR MEU ACESSO AGORA
                </button>
                <div className="mt-4 flex justify-center items-center gap-2 text-gray-500 text-xs">
                  <ShieldCheck className="w-4 h-4" />
                  Pagamento 100% Seguro
                </div>
              </div>
            </div>
          </div>
        </div>
        
        <div className="max-w-3xl mx-auto mt-12 text-center">
          <div className="w-20 h-20 bg-white rounded-full mx-auto mb-4 flex items-center justify-center shadow-md border-2 border-brand-gold">
             <span className="font-bold text-brand-gold text-xl">7 Dias</span>
          </div>
          <h3 className="font-bold text-xl mb-2">Garantia Incondicional de 7 Dias</h3>
          <p className="text-gray-600">Seu risco é zero. Se não gostar do conteúdo, devolvemos seu dinheiro sem perguntas.</p>
        </div>
      </div>
    </section>
  );
};

const FAQSection = () => {
  const [openIndex, setOpenIndex] = useState<number | null>(null);

  const toggle = (index: number) => {
    setOpenIndex(openIndex === index ? null : index);
  };

  const faqs = [
    {
      q: "Serve para quem está começando do zero?",
      a: "Sim! O guia foi desenhado especificamente para quem nunca vendeu para o governo. Ensinamos desde a abertura do MEI até a emissão da primeira nota fiscal."
    },
    {
      q: "Preciso ter capital de giro alto?",
      a: "Não necessariamente. Ensinamos estratégias para começar com produtos de entrega imediata ou serviços que não exigem grande investimento inicial. Além disso, a Nota de Empenho serve como garantia para negociar com fornecedores."
    },
    {
      q: "Como recebo o acesso?",
      a: "Imediatamente após a confirmação do pagamento, você receberá um e-mail com o link para baixar o E-book e todos os bônus na nossa área de membros segura."
    }
  ];

  return (
    <section className="py-20 bg-gray-50">
      <div className="container mx-auto px-6 max-w-3xl">
        <h2 className="text-3xl font-bold text-center mb-12 text-brand-dark font-heading">Dúvidas Frequentes</h2>
        <div className="space-y-4">
          {faqs.map((faq, index) => (
            <div 
              key={index}
              className={`bg-white rounded-xl shadow-sm border border-gray-100 overflow-hidden transition-all duration-300 ${openIndex === index ? 'ring-2 ring-brand-gold/50' : ''}`}
            >
              <button 
                onClick={() => toggle(index)}
                className="w-full p-6 text-left flex justify-between items-center font-semibold text-lg text-brand-dark focus:outline-none"
              >
                {faq.q}
                <ChevronDown className={`w-6 h-6 text-brand-gold transition-transform duration-300 ${openIndex === index ? 'rotate-180' : ''}`} />
              </button>
              <div 
                className={`px-6 text-gray-600 leading-relaxed overflow-hidden transition-all duration-300 ${openIndex === index ? 'max-h-40 pb-6 opacity-100' : 'max-h-0 opacity-0'}`}
              >
                {faq.a}
              </div>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
};

const Footer = () => {
  return (
    <footer className="bg-brand-dark text-white py-12 border-t border-gray-800">
      <div className="container mx-auto px-6 text-center">
        <p className="font-bold text-xl mb-4 text-brand-gold font-heading">O Guia Definitivo das Licitações</p>
        <p className="text-gray-400 text-sm mb-6 max-w-lg mx-auto">
          Capacitando empreendedores a transformarem suas realidades através das vendas públicas.
        </p>
        <div className="flex justify-center gap-6 text-sm text-gray-500 mb-8">
          <a href="#" className="hover:text-white transition">Termos de Uso</a>
          <a href="#" className="hover:text-white transition">Política de Privacidade</a>
          <a href="#" className="hover:text-white transition">Contato</a>
        </div>
        <p className="text-xs text-gray-600">Copyright © 2025. Todos os direitos reservados. Este site não tem vínculo com o Governo Federal.</p>
      </div>
    </footer>
  );
};

function App() {
  return (
    <div className="min-h-screen">
      <HeroSection />
      <main>
        <ProblemSection />
        <SolutionSection />
        <FeaturesGrid />
        <AuthorSection />
        <SocialProof />
        <OfferSection />
        <FAQSection />
      </main>
      <Footer />
    </div>
  );
}

export default App;