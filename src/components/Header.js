import React from 'react';
import '../styles/Header.sass';

const Header = () => {
    return ( 
        <header className="bg-dark py-1">
        <div className="container px-4 px-lg-5 my-4">
          <div className="text-center text-black">
            <h1 className="display-4 fw-bolder header-title">Let&rsquo;s Eat!</h1>
            <p className="lead fw-normal text-black-50 mb-0">让我们吃 &#8226; Comamos &#8226; चलो खाते हैं &#8226; Давайте есть &#8226; Mangeons &#8226; Mangiamo</p>
          </div>
        </div>
      </header>
    );
}
 
export default Header;