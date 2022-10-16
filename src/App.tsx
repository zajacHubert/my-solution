import React from 'react';
import { About } from './components/About/About';
import { Amazed } from './components/Amazed/Amazed';
import { Benefits } from './components/Benefits/Benefits';
import { Cars } from './components/Cars/Cars';
import { Contact } from './components/Contact/Contact';
import { Footer } from './components/Footer/Footer';
import { Header } from './components/Header/Header';

export const App = () => {
  return (
    <>
      <Header />
      <About />
      <Benefits />
      <Cars />
      <Amazed />
      <Contact />
      <Footer />
    </>
  );
}

