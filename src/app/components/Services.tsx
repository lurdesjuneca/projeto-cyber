import { Monitor, Wifi, Printer, Headphones, Coffee, Shield } from 'lucide-react';

export function Services() {
  const services = [
    {
      icon: Monitor,
      title: 'PCs Gamer',
      description: 'Computadores com RTX 4070, processadores Intel i7 e monitores 144Hz para a melhor experiência de jogo.',
    },
    {
      icon: Wifi,
      title: 'Internet Ultra-Rápida',
      description: 'Conexão de fibra óptica com 1Gbps de velocidade para navegação e download sem limites.',
    },
    {
      icon: Printer,
      title: 'Impressão e Digitalização',
      description: 'Serviços de impressão colorida e P&B, além de scanner e fotocópias.',
    },
    {
      icon: Headphones,
      title: 'Periféricos Premium',
      description: 'Fones de ouvido (Headsets), teclados mecânicos e mouses gamer de alta performance.',
    },
    {
      icon: Coffee,
      title: 'Lanchonete',
      description: 'Bebidas, lanches (snacks) para manter você energizado durante suas sessões.',
    },
    {
      icon: Shield,
      title: 'Ambiente Seguro',
      description: 'Monitoramento 24h, equipe presente e ambiente climatizado.',
    },
  ];

  return (
    <section id="services" className="py-20 bg-gray-900">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="text-center mb-16">
          <h2 className="text-4xl md:text-5xl font-bold text-white mb-4">
            Nossos Serviços
          </h2>
          <p className="text-xl text-gray-400">
            Tudo que você precisa em um só lugar
          </p>
        </div>

        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
          {services.map((service, index) => {
            const Icon = service.icon;
            return (
              <div
                key={index}
                className="bg-gray-800 p-6 rounded-lg border border-purple-500/20 hover:border-purple-500/50 transition-all hover:transform hover:scale-105"
              >
                <div className="w-12 h-12 bg-purple-500/10 rounded-lg flex items-center justify-center mb-4">
                  <Icon className="w-6 h-6 text-purple-500" />
                </div>
                <h3 className="text-xl font-semibold text-white mb-2">
                  {service.title}
                </h3>
                <p className="text-gray-400">
                  {service.description}
                </p>
              </div>
            );
          })}
        </div>
      </div>
    </section>
  );
}
