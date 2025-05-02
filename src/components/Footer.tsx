
import React from 'react';
import { Leaf } from 'lucide-react';

const Footer = () => {
  return (
    <footer className="border-t py-8 mt-12">
      <div className="container">
        <div className="flex flex-col md:flex-row justify-between items-center gap-4">
          <div className="flex items-center gap-2">
            <Leaf className="h-5 w-5 text-green-600" />
            <span className="font-medium">India Carbon Watch</span>
          </div>
          
          <div className="text-sm text-muted-foreground">
            <p>Data sources: Ministry of Environment, Forest and Climate Change, IEA, UNFCCC</p>
          </div>
          
          <div className="text-sm text-muted-foreground">
            <p>&copy; {new Date().getFullYear()} India Carbon Watch. All rights reserved.</p>
          </div>
        </div>
      </div>
    </footer>
  );
};

export default Footer;
