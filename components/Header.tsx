import React, { useState, useRef } from 'react';
import { PERSONAL_INFO } from '../constants';
import { MailIcon } from './icons/MailIcon';
import { PhoneIcon } from './icons/PhoneIcon';
import { EditIcon } from './icons/EditIcon';

const Header: React.FC = () => {
  const [profilePic, setProfilePic] = useState(PERSONAL_INFO.profilePictureUrl);
  const fileInputRef = useRef<HTMLInputElement>(null);

  const handleImageUpload = (event: React.ChangeEvent<HTMLInputElement>) => {
    const file = event.target.files?.[0];
    if (file) {
      const reader = new FileReader();
      reader.onloadend = () => {
        setProfilePic(reader.result as string);
      };
      reader.readAsDataURL(file);
    }
  };

  const triggerFileUpload = () => {
    fileInputRef.current?.click();
  };

  return (
    <header className="flex flex-col md:flex-row items-center space-y-6 md:space-y-0 md:space-x-10">
      <div className="relative group shrink-0">
        <img
          src={profilePic}
          alt="Moch. Wahyu Heriyanto"
          // --- PERUBAHAN ADA DI BARIS INI ---
          // Penambahan 'object-top' akan memposisikan gambar dari atas ke bawah.
          className="w-32 h-32 rounded-full object-cover object-top shadow-lg border-4 border-white"
        />
        <button
          onClick={triggerFileUpload}
          className="absolute inset-0 bg-black bg-opacity-50 rounded-full flex items-center justify-center text-white opacity-0 group-hover:opacity-100 transition-opacity cursor-pointer"
          aria-label="Upload new profile picture"
        >
          <EditIcon className="w-8 h-8" />
        </button>
        <input
          type="file"
          ref={fileInputRef}
          onChange={handleImageUpload}
          accept="image/png, image/jpeg, image/gif"
          className="hidden"
          aria-hidden="true"
        />
      </div>
      <div className="text-center md:text-left">
        <h1 className="text-4xl font-bold text-slate-900">{PERSONAL_INFO.name}</h1>
        <p className="mt-2 text-xl font-medium text-sky-600">{PERSONAL_INFO.title}</p>
        <div className="mt-4 flex flex-col md:flex-row items-center justify-center md:justify-start gap-x-6 gap-y-2 text-slate-600">
          <a href={`mailto:${PERSONAL_INFO.email}`} className="flex items-center gap-2 hover:text-sky-600 transition-colors">
            <MailIcon className="w-5 h-5" />
            <span>{PERSONAL_INFO.email}</span>
          </a>
          <a href={`tel:${PERSONAL_INFO.phone.replace(/\s/g, '')}`} className="flex items-center gap-2 hover:text-sky-600 transition-colors">
            <PhoneIcon className="w-5 h-5" />
            <span>{PERSONAL_INFO.phone}</span>
          </a>
        </div>
      </div>
    </header>
  );
};

export default Header;