import React from 'react';
import Link from 'next/link';
import Image from 'next/image';

interface MenuItem {
  title: string;
  path: string;
  icon?: string;
  subItems?: MenuItem[];
}

const menuItems: MenuItem[] = [
  { title: 'Instantané des rapports', path: '/rapports' },
  { title: 'Aperçu en temps réel', path: '/temps-reel' },
  { 
    title: 'Flux en direct des direct TikTok', 
    path: '/flux-tiktok',
    subItems: [
      { title: 'Live TikTok', path: '/flux-tiktok/live', icon: '🔴' },
      { title: 'Live Facebook', path: '/flux-tiktok/facebook', icon: '🔴' }
    ]
  },
  {
    title: 'Détection et Analyse',
    path: '/detection',
    subItems: [
      { title: 'Toxicité des publications viraux', path: '/detection/toxicite' },
      { title: 'Analyse l\'opinion publique', path: '/detection/opinion' },
      { title: 'Identification des sources d\'informations', path: '/detection/sources' }
    ]
  },
  {
    title: 'Analyse avancée sur',
    path: '/analyse',
    subItems: [
      { title: 'Incitations à la violence', path: '/analyse/violence' },
      { title: 'Les réseaux de désinformation', path: '/analyse/desinformation' },
      { title: 'Discours haineux', path: '/analyse/haine' },
      { title: 'Fake News', path: '/analyse/fake-news' },
      { title: 'Discours manipulés', path: '/analyse/manipulation' }
    ]
  },
  {
    title: 'Liste des influenceurs',
    path: '/influenceurs',
    subItems: [
      { title: 'Influenceurs Locaux', path: '/influenceurs/locaux' },
      { title: 'Influenceurs de la Diaspora', path: '/influenceurs/diaspora' }
    ]
  },
  {
    title: 'Gestion d\'alertes & Interventions',
    path: '/alertes',
    subItems: [
      { title: 'Historique d\'alerte avec niveau de priorité', path: '/alertes/historique' },
      { title: 'Détails des publications suspectes', path: '/alertes/suspects' },
      { title: 'Alerter les autorités compétentes', path: '/alertes/autorites' }
    ]
  },
  {
    title: 'Actions',
    path: '/actions',
    subItems: [
      { title: 'Avertissements', path: '/actions/avertissements' },
      { title: 'Signaler auprès des plateformes', path: '/actions/signaler' },
      { title: 'Bloquer le compte', path: '/actions/bloquer' }
    ]
  },
  {
    title: 'Gestion d\'opinion publique',
    path: '/opinion',
    subItems: [
      { title: 'Opinion publique', path: '/opinion/public' },
      { title: 'Audiences', path: '/opinion/audiences' },
      { title: 'Démenti officiel', path: '/opinion/dementi' }
    ]
  },
  {
    title: 'Archivage et Reporting',
    path: '/archivage',
    subItems: [
      { title: 'Tableau de Stockage des données', path: '/archivage/stockage' },
      { title: 'Exportation des Rapport en PDF', path: '/archivage/export' }
    ]
  }
];

const Sidebar = () => {
  const renderMenuItem = (item: MenuItem, level: number = 0) => {
    return (
      <div key={item.path} className="mb-1">
        <Link
          href={item.path}
          className={`flex items-center gap-2 px-4 py-2 text-gray-300 hover:bg-[#2CB8C6] rounded ${
            level > 0 ? 'ml-4 text-sm' : 'font-medium'
          }`}
        >
          {item.icon && <span>{item.icon}</span>}
          <span>{item.title}</span>
        </Link>
        {item.subItems && (
          <div className="mt-1">
            {item.subItems.map(subItem => renderMenuItem(subItem, level + 1))}
          </div>
        )}
      </div>
    );
  };

  return (
    <aside className="w-72 bg-gray-900 text-white h-screen fixed left-0 top-0 flex flex-col">
      <div className="flex-1 overflow-y-auto p-4">
        {menuItems.map(item => renderMenuItem(item))}
      </div>
      <div className="p-4 border-t border-gray-800">
        <div className="flex items-center">
          <div className="w-8 h-8 rounded-full bg-gray-600 mr-3"></div>
          <div>
            <div className="text-sm font-medium">Admin User</div>
            <div className="text-xs text-gray-400">admin@stabletech.com</div>
          </div>
        </div>

        <div className="mt-6">
          <p className="text-xs text-gray-500 mb-4 text-center">powered by</p>
          <div className="flex justify-center -ml-4">
            <div className="bg-white rounded-full p-3 w-20 h-20 flex items-center justify-center">
              <Image
                src="/stabletech.png"
                alt="StableTech Logo"
                width={64}
                height={64}
                className="w-full h-full object-contain"
              />
            </div>
          </div>
        </div>
      </div>
    </aside>
  );
};

export default Sidebar;
