import React, { useEffect, useState } from 'react';
import { Button } from '@/components/ui/button';
import Link from 'next/link';
import Events from './Events';
import Footer from './Footer';
import NetworkHubCollege from './NetworkHub';
import ResearchCollege from './ResearchCollege';

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

interface NavBarCollegeDetailsProps {
  collegeName: string;
}

export const NavBarCollegeDetails: React.FC<NavBarCollegeDetailsProps> = ({ collegeName }) => {
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
        {content === 'Events' && <Events collegeName={collegeName} />}
        {content === 'Research' && <ResearchCollege collegeName={collegeName}/>}
        {content === 'Startup' && <Startup />}
        {content === 'NetworkHub' && <NetworkHubCollege collegeName={collegeName} />}
      </div>
    </div>
  );
};

const NavItem: React.FC<NavItemProps> = ({ label, onClick }) => (
  <Button
    onClick={() => onClick(label)}
    variant={'navBarButton'}
    className="px-16 transition duration-300 ease-in-out"
  >
    {label}
  </Button>
);

const Divider = () => (
  <div className="w-0 h-10 border-l-2 border-white transform rotate-12"></div>
);



const Research = () => (
  <div>
    <h2 className="text-xl font-bold">Research Content</h2>
  </div>
);

const Startup = () => (
  <div>
    <h2 className="text-xl font-bold">Startup Content</h2>
  </div>
);

const NetworkHub = () => (
  <div>
    <h2 className="text-xl font-bold">Network Hub Content</h2>
  </div>


);
