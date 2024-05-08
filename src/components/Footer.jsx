import '/src/scss/Footer.sass';

const Footer = () => {
  return (
    <footer className='py-3 bg-dark fixed-bottom'>
      <div className='container'>
        <p className='m-0 text-center text-white'>Copyright &copy; LetsEat {new Date().getFullYear()}</p>
      </div>
    </footer>
  );
};

export default Footer;
