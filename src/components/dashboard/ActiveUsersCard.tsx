import React from 'react';
import Image from 'next/image';

const ActiveUsersCard = () => {
  return (
    <div className="border border-[#2CB8C6] rounded-xl bg-white p-4 h-full">
      <div className="flex justify-between items-center mb-4">
        <h3 className="text-base font-medium text-gray-800">
          Followers ACTIFS AU COURS DES<br />
          30 DERNIÈRES MINUTES
        </h3>
        <button className="text-gray-600">✓</button>
      </div>

      <div className="border-t border-b border-dashed border-[#2CB8C6] py-6 my-6">
        <div className="text-4xl font-semibold text-center text-gray-800">
          59458
        </div>
        <div className="text-sm font-medium text-center text-gray-800 mt-2">
          UTILISATEURS ACTIFS PAR MINUTE
        </div>
      </div>

      <div>
        <div className="flex justify-between text-sm font-medium text-gray-800 mb-4 border-b border-dashed border-[#2CB8C6] pb-2">
          <span>PAYS</span>
          <span>UTILISATEURS</span>
        </div>

        <div className="space-y-6">
          <div className="relative">
            <div className="absolute left-0 top-1/2 -translate-y-1/2">
              <div className="relative w-10 h-10">
                <Image
                  src="/icons/facebook.svg"
                  alt="Facebook"
                  fill
                  style={{ objectFit: 'contain' }}
                />
              </div>
              <div className="absolute -top-2 -right-2 bg-red-500 text-white text-xs rounded-full w-5 h-5 flex items-center justify-center">
                202
              </div>
            </div>
            <div className="pl-16 space-y-2">
              {[80, 40, 20, 10].map((value, i) => (
                <div key={i} className="flex items-center">
                  <div className="w-full bg-gray-100 h-1 rounded-full">
                    <div
                      className="bg-[#2CB8C6] h-1 rounded-full"
                      style={{ width: `${value}%` }}
                    />
                  </div>
                  <span className="ml-2 text-xs text-gray-800">{value}</span>
                </div>
              ))}
            </div>
          </div>

          <div className="relative">
            <div className="absolute left-0 top-1/2 -translate-y-1/2">
              <div className="relative w-10 h-10">
                <Image
                  src="/icons/instagram.svg"
                  alt="Instagram"
                  fill
                  style={{ objectFit: 'contain' }}
                />
              </div>
              <div className="absolute -top-2 -right-2 bg-red-500 text-white text-xs rounded-full w-5 h-5 flex items-center justify-center">
                202
              </div>
            </div>
            <div className="pl-16 space-y-2">
              {[70, 50, 30, 20].map((value, i) => (
                <div key={i} className="flex items-center">
                  <div className="w-full bg-gray-100 h-1 rounded-full">
                    <div
                      className="bg-pink-500 h-1 rounded-full"
                      style={{ width: `${value}%` }}
                    />
                  </div>
                  <span className="ml-2 text-xs text-gray-800">{value}</span>
                </div>
              ))}
            </div>
          </div>
        </div>
      </div>

      <div className="text-right mt-6">
        <button className="text-[#2CB8C6] text-sm hover:underline">
          Afficher Temps réel →
        </button>
      </div>
    </div>
  );
};

export default ActiveUsersCard;
