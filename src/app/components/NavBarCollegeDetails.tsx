'use client'
import { Button } from '@/components/ui/button';
import Link from 'next/link';
import React, { useState } from 'react';

type NavItemProps = {
  label: keyof contentType;
  onClick: (label: keyof contentType) => void;
};

interface contentType { 
  Events: string;
  Research: string;
  Startup: string;
  NetworkHub: string;
}

export const NavBarCollegeDetails = () => {
  const [content, setContent] = useState<keyof contentType>('Events');

  const handleNavItemClick = (label: keyof contentType) => {
    setContent(label);
  };

  return (
    <div>
      <nav className="flex justify-evenly items-center space-x-2 bg-[#3185FC] p-2 py-1 m-8 rounded-full">
        <NavItem label="Events" onClick={handleNavItemClick} />
        <Divider />
        <NavItem label="Research" onClick={handleNavItemClick} />
        <Divider />
        <NavItem label="Startup" onClick={handleNavItemClick} />
        <Divider />
        <NavItem label="NetworkHub" onClick={handleNavItemClick} />
      </nav>
      <div className="mt-4">
        {content === 'Events' && <Events />}
        {content === 'Research' && <Research />}
        {content === 'Startup' && <Startup />}
        {content === 'NetworkHub' && <NetworkHub />}
      </div>
    </div>
  );
};

const NavItem: React.FC<NavItemProps> = ({ label, onClick }) => (
  <Button
    onClick={() => onClick(label)}
    variant={'navBarButton'}
    className='px-16'
  >
    {label}
  </Button>
);

const Divider = () => (
  <div className="w-0 h-10 border-l-2 border-white transform rotate-12"></div>
);

const Events = () => (
  <div>
    <h2 className="text-xl font-bold">Events Content</h2>
    <p>Details about events will be displayed here.</p>
  </div>
);

const Research = () => (
  <div>
    <h2 className="text-xl font-bold">Research Content</h2>
    <p>Details about research will be displayed here.</p>
  </div>
);

const Startup = () => (
  <div>
    <h2 className="text-xl font-bold">Startup Content</h2>
    <p>Details about startups will be displayed here.</p>
  </div>
);

const NetworkHub = () => (
  <div>
    <h2 className="text-xl font-bold">Network Hub Content</h2>
    <p>Details about the network hub will be displayed here.</p>
  </div>
);
