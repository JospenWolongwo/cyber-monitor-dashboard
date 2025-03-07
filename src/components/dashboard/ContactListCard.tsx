import React from 'react';

interface Contact {
  name: string;
  email: string;
  phone: string;
  color: string;
}

const ContactListCard = () => {
  const contacts: Contact[] = [
    {
      name: 'Name of contact',
      email: 'name@email.com',
      phone: '+12651123 128 90',
      color: '#FF69B4' // Pink
    },
    {
      name: 'Name of contact',
      email: 'name@email.com',
      phone: '+12651123 128 90',
      color: '#FFA500' // Orange
    },
    {
      name: 'Name of contact',
      email: 'name@email.com',
      phone: '+12651123 128 90',
      color: '#00BFFF' // Light blue
    }
  ];

  return (
    <div className="border border-[#2CB8C6] rounded-xl bg-white h-full">
      <div className="flex items-center justify-between p-4">
        <div className="flex items-center gap-3">
          <div className="text-[#2CB8C6]">
            <svg width="20" height="20" viewBox="0 0 24 24" fill="none" xmlns="http://www.w3.org/2000/svg">
              <path d="M12 21C16.9706 21 21 16.9706 21 12C21 7.02944 16.9706 3 12 3C7.02944 3 3 7.02944 3 12C3 16.9706 7.02944 21 12 21Z" stroke="currentColor" strokeWidth="2"/>
              <path d="M3.6001 9H20.4001" stroke="currentColor" strokeWidth="2"/>
              <path d="M3.6001 15H20.4001" stroke="currentColor" strokeWidth="2"/>
            </svg>
          </div>
          <h3 className="text-sm font-medium text-gray-800">
            liste des activistes
          </h3>
        </div>
        <button className="text-gray-400">•••</button>
      </div>

      <div className="p-4">
        <div className="relative mb-4">
          <input
            type="text"
            placeholder="Rechercher un contact..."
            className="w-full px-3 py-2 bg-gray-50 border border-gray-200 rounded-lg text-gray-900 placeholder-gray-500 focus:outline-none focus:border-[#2CB8C6] focus:ring-1 focus:ring-[#2CB8C6]"
          />
          <div className="absolute right-3 top-1/2 -translate-y-1/2">
            <svg width="16" height="16" viewBox="0 0 24 24" fill="none" stroke="currentColor" className="text-gray-400">
              <path d="M21 21L16.65 16.65M19 11C19 15.4183 15.4183 19 11 19C6.58172 19 3 15.4183 3 11C3 6.58172 6.58172 3 11 3C15.4183 3 19 6.58172 19 11Z" strokeWidth="2" strokeLinecap="round"/>
            </svg>
          </div>
        </div>

        <div className="space-y-4">
          {contacts.map((contact, index) => (
            <div key={index} className="flex items-center gap-3">
              <div className="w-10 h-10 rounded-full flex items-center justify-center" style={{ backgroundColor: contact.color }}>
                <svg width="20" height="20" viewBox="0 0 24 24" fill="white" xmlns="http://www.w3.org/2000/svg">
                  <path d="M20 21V19C20 17.9391 19.5786 16.9217 18.8284 16.1716C18.0783 15.4214 17.0609 15 16 15H8C6.93913 15 5.92172 15.4214 5.17157 16.1716C4.42143 16.9217 4 17.9391 4 19V21" />
                  <path d="M12 11C14.2091 11 16 9.20914 16 7C16 4.79086 14.2091 3 12 3C9.79086 3 8 4.79086 8 7C8 9.20914 9.79086 11 12 11Z" />
                </svg>
              </div>
              <div className="flex-1">
                <div className="text-sm font-medium text-gray-800">{contact.name}</div>
                <div className="text-xs text-gray-500">{contact.email}</div>
                <div className="text-xs text-gray-500">{contact.phone}</div>
              </div>
            </div>
          ))}
        </div>
      </div>
    </div>
  );
};

export default ContactListCard;
