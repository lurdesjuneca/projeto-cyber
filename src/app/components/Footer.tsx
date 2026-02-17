import { Gamepad2, Facebook, Instagram, Twitter } from 'lucide-react';

export function Footer() {
  return (
    <footer className="bg-gray-900 border-t border-purple-500/20">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-12">
        <div className="grid grid-cols-1 md:grid-cols-4 gap-8">
          {/* Brand */}
          <div className="col-span-1 md:col-span-2">
            <div className="flex items-center gap-2 mb-4">
              <Gamepad2 className="w-8 h-8 text-purple-500" />
              <span className="text-xl font-bold text-white">CyberJuneTec</span>
            </div>
            <p className="text-gray-400 mb-4">
              O melhor cyber café da cidade com infraestrutura de ponta para gamers, estudantes e profissionais.
            </p>
            <div className="flex gap-4">
              <a href="#" className="w-10 h-10 bg-purple-500/10 rounded-lg flex items-center justify-center hover:bg-purple-500/20 transition-colors">
                <Facebook className="w-5 h-5 text-purple-500" />
              </a>
              <a href="#" className="w-10 h-10 bg-purple-500/10 rounded-lg flex items-center justify-center hover:bg-purple-500/20 transition-colors">
                <Instagram className="w-5 h-5 text-purple-500" />
              </a>
              <a href="#" className="w-10 h-10 bg-purple-500/10 rounded-lg flex items-center justify-center hover:bg-purple-500/20 transition-colors">
                <Twitter className="w-5 h-5 text-purple-500" />
              </a>
            </div>
          </div>

          {/* Quick Links */}
          <div>
            <h3 className="text-white font-semibold mb-4">Links Rápidos</h3>
            <ul className="space-y-2">
              <li>
                <a href="#home" className="text-gray-400 hover:text-purple-400 transition-colors">
                  Início
                </a>
              </li>
              <li>
                <a href="#services" className="text-gray-400 hover:text-purple-400 transition-colors">
                  Serviços
                </a>
              </li>
              <li>
                <a href="#pricing" className="text-gray-400 hover:text-purple-400 transition-colors">
                  Preços
                </a>
              </li>
              <li>
                <a href="#gallery" className="text-gray-400 hover:text-purple-400 transition-colors">
                  Galeria
                </a>
              </li>
            </ul>
          </div>

          {/* Contact */}
          <div>
            <h3 className="text-white font-semibold mb-4">Contacto</h3>
            <ul className="space-y-2 text-gray-400">
              <li>(09) 951-184-193</li>
              <li>contato@cyberjunetec.com.an</li>
              <li>Mun.Mulenvos, 288</li>
              <li>Luanda, LA</li>
            </ul>
          </div>
        </div>

        <div className="mt-8 pt-8 border-t border-purple-500/20 text-center text-gray-400">
          <p>&copy; 2026 CyberJuneTec. Todos os direitos reservados.</p>
        </div>
      </div>
    </footer>
  );
}
