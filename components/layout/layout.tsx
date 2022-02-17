import * as React from 'react';
import { Header } from './header/header';
import { Navigation } from './nav/nav-bottom';

export const Layout: React.FC = ({ children }) => (
  <main className="flex flex-col w-full min-h-screen bg-gray-100">
    <Header />
    {children}
    <Navigation />
  </main>
);
