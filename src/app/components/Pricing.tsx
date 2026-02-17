import { Check } from 'lucide-react';

export function Pricing() {
  const plans = [
    {
      name: 'Futebool',
      price: 'Kz 200',
      period: 'por hora',
      features: [
        'Acesso a todos os PCs',
        'Internet ultra-rápida',
        'Periféricos gamer',
        'Sem tempo mínimo',
      ],
      highlight: false,
    },
    {
      name: 'Pacote 10h',
      price: 'Kz 4000',
      period: 'validade 30 dias',
      features: [
        'Economia de Kz 100',
        'Acesso prioritário',
        'Internet ultra-rápida',
        'Periféricos gamer',
        '1 bebida grátis',
      ],
      highlight: true,
    },
    {
      name: 'Mensalidade',
      price: 'Kz 12000',
      period: 'por mês',
      features: [
        'Horas ilimitadas',
        'Reserva de PC garantida',
        'Desconto na lanchonete',
        'Eventos exclusivos',
        'Suporte prioritário',
      ],
      highlight: false,
    },
  ];

  return (
    <section id="pricing" className="py-20 bg-black">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="text-center mb-16">
          <h2 className="text-4xl md:text-5xl font-bold text-white mb-4">
            Preços e Planos
          </h2>
          <p className="text-xl text-gray-400">
            Escolha o plano que melhor se adapta às suas necessidades
          </p>
        </div>

        <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
          {plans.map((plan, index) => (
            <div
              key={index}
              className={`relative rounded-xl p-8 ${
                plan.highlight
                  ? 'bg-gradient-to-b from-purple-600 to-purple-800 border-2 border-purple-400 shadow-2xl shadow-purple-500/50 transform scale-105'
                  : 'bg-gray-800 border border-purple-500/20'
              }`}
            >
              {plan.highlight && (
                <div className="absolute -top-4 left-1/2 -translate-x-1/2 bg-purple-500 text-white px-4 py-1 rounded-full text-sm font-semibold">
                  Mais Popular
                </div>
              )}
              <div className="text-center mb-6">
                <h3 className="text-2xl font-bold text-white mb-2">{plan.name}</h3>
                <div className="text-4xl font-bold text-white mb-1">{plan.price}</div>
                <div className="text-gray-300">{plan.period}</div>
              </div>
              <ul className="space-y-3 mb-8">
                {plan.features.map((feature, idx) => (
                  <li key={idx} className="flex items-start gap-2">
                    <Check className={`w-5 h-5 mt-0.5 flex-shrink-0 ${plan.highlight ? 'text-white' : 'text-purple-500'}`} />
                    <span className={plan.highlight ? 'text-white' : 'text-gray-300'}>
                      {feature}
                    </span>
                  </li>
                ))}
              </ul>
              <button
                className={`w-full py-3 rounded-lg font-semibold transition-colors ${
                  plan.highlight
                    ? 'bg-white text-purple-700 hover:bg-gray-100'
                    : 'bg-purple-600 text-white hover:bg-purple-700'
                }`}
              >
                Escolher Plano
              </button>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}
