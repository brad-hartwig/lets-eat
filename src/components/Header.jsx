import '/src/scss/Header.sass';
import pizzaHeader from '/src/assets/pizzaHeader.png';

const pizzaStyle = {
  backgroundImage: `url(${pizzaHeader})`,
  backgroundRepeat: 'no-repeat',
};

const Header = () => {
  return (
    <header className='bg-dark py-1 mb-4' style={pizzaStyle}>
      <div className='container my-1'>
        <div className='text-center text-black'>
          <h1 className='header-title display-4 fw-bolder mb-0'>Let&rsquo;s Eat!</h1>
          <p className='header-subtitle lead fw-normal text-black-50 mb-0'>让我们吃 &#8226; Comamos &#8226; चलो खाते हैं &#8226; Давайте есть &#8226; Mangeons &#8226; Mangiamo</p>
        </div>
      </div>
    </header>
  );
};

export default Header;
