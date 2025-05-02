
import React from 'react';
import { Leaf } from 'lucide-react';

const Header = () => {
  return (
    <header className="py-4 border-b">
      <div className="container flex items-center justify-between">
        <div className="flex items-center gap-2">
          <Leaf className="h-6 w-6 text-green-600" />
          <h1 className="text-xl font-bold">India Carbon Watch</h1>
        </div>
        <nav>
          <ul className="flex gap-6">
            <li><a href="#dashboard" className="text-sm font-medium hover:text-primary transition-colors">Dashboard</a></li>
            <li><a href="#sources" className="text-sm font-medium hover:text-primary transition-colors">Sources</a></li>
            <li><a href="#measures" className="text-sm font-medium hover:text-primary transition-colors">Measures</a></li>
            <li><a href="#calculator" className="text-sm font-medium hover:text-primary transition-colors">Calculator</a></li>
          </ul>
        </nav>
      </div>
    </header>
  );
};

export default Header;
