import React from 'react';
import Image from 'next/image';

const Header = () => {
  return (
    <div className="bg-white">
      {/* Top bar with logo and title */}
      <div className="border-b border-gray-100 px-6 py-2">
        <div className="flex items-center justify-between">
          <div className="flex-1 flex items-center">
            {/* Center text */}
            <div className="flex-1 text-center text-gray-700 uppercase text-sm font-medium tracking-wider">
              CYBERSURVEILLANCE ET RENSEIGNEMENT SUR LES MENACES CYBERNÉTIQUE
              <div className="text-xs text-gray-500 mt-0.5">
                DÉTECTION,SURVEILLANCE & RÉPONDRE EFFICACEMENT
              </div>
            </div>
            {/* Right side icons */}
            <div className="flex items-center space-x-4">
              <div className="relative">
                <div className="bg-white rounded-full p-2 shadow-sm">
                  <Image
                    src="/email-icon.png"
                    alt="Messages"
                    width={24}
                    height={24}
                    className="text-[#2CB8C6]"
                  />
                </div>
                <span className="absolute -top-1 -right-1 bg-red-500 text-white text-xs rounded-full w-4 h-4 flex items-center justify-center">
                  2
                </span>
              </div>
              <div className="h-6 w-px bg-gray-200 mx-2"></div>
              <button className="text-[#2CB8C6] text-sm font-medium">
                Tous les utilisateurs
              </button>
              <button className="text-gray-600 text-sm font-medium flex items-center">
                Ajouter une conversation
                <span className="ml-1 text-lg">+</span>
              </button>
            </div>
          </div>
        </div>
      </div>

      {/* Action buttons and title */}
      <div className="px-6 py-4 flex items-center justify-between">
        <div className="flex items-center space-x-4">
          <button className="bg-red-500 hover:bg-red-600 text-white px-4 py-2 rounded-lg transition-colors">
            Lancer d'alerte
          </button>
          <button className="border border-[#2CB8C6] text-[#2CB8C6] px-4 py-2 rounded-lg hover:bg-[#2CB8C6] hover:text-white">
            Données démographiques
          </button>
        </div>
        <h1 className="text-xl font-bold">Vue d'ensemble</h1>
      </div>
    </div>
  );
};

export default Header;
