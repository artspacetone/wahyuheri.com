import React from 'react';
import { PERSONAL_INFO } from '../constants';

const Footer: React.FC = () => {
  return (
    <footer className="mt-16 text-center text-sm text-slate-500 py-6 border-t border-slate-200">
      <p>&copy; {new Date().getFullYear()} {PERSONAL_INFO.name}. All Rights Reserved.</p>
    </footer>
  );
};

export default Footer;