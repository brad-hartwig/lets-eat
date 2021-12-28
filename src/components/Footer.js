import React from 'react';
import 'styles/Footer.sass';

const Footer = () => {
  return (
    <footer className='py-3 bg-dark'>
      <div className='container'>
        <p className='m-0 text-center text-white'>Copyright &copy; Let&rsquo;s Eat! {new Date().getFullYear()}</p>
      </div>
    </footer>
  );
};

export default Footer;
