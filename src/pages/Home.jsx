import React, { useEffect } from 'react';
import Header from '../components/Header';
import Footer from '../components/Footer';
import LayoutCorporate from './LayoutCorporate';

export default function Home() {
  useEffect(() => {
    document.body.className = 'layout-corporate';
  }, []);

  return (
    <div className="app-container">
      <Header activeLayout="corporate" />
      
      <main className="layout-content">
        <LayoutCorporate />
      </main>

      <Footer activeLayout="corporate" />
    </div>
  );
}

