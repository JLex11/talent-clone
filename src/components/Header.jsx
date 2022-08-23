import { memo, useEffect, useState } from 'react';
import { Link } from 'react-router-dom';
import LinkButton from './LinkButton';
import Logo from './Logo';
import MenuIcon from './MenuIcon';

const Header = () => {
  const [isOpen, setIsOpen] = useState(false);
  const [isMobile, setIsMobile] = useState(window.innerWidth < 500);

  useEffect(() => {
    new ResizeObserver(() => {
      setIsMobile(window.innerWidth < 500);
      window.innerWidth > 500 && setIsOpen(false);
    }).observe(document.body);
  }, []);

  const oppenToggle = () => setIsOpen(!isOpen);

  return (
    <header className={isOpen ? 'Open' : ''}>
      <div className='HeaderLogo'>
        <Logo />
        {isMobile && <MenuIcon openToggle={oppenToggle} />}
      </div>
      {isMobile ?
        (
          isOpen && (
            <>
              <nav className='NavOptions'>
                <Link to='/job-search'>Encuentra un trabajo</Link>
                <Link to='/salary-search'>Tu salario ideal</Link>
                <Link to='/tax-calculator'>Calcular impuestos</Link>
              </nav>
              <div className='AcessOptions'>
                <LinkButton to={'/login'} color='white'>Iniciar sesión</LinkButton>
                <LinkButton to={'/enterprises'} color='orange'>Para empleadores</LinkButton>
              </div>
            </>
          )
        ) : (
          <>
            <nav className='NavOptions'>
              <Link to='/job-search'>Encuentra un trabajo</Link>
              <Link to='/salary-search'>Tu salario ideal</Link>
              <Link to='/tax-calculator'>Calcular impuestos</Link>
            </nav>
            <div className='AcessOptions'>
              <LinkButton to={'/login'} color='white'>Iniciar sesión</LinkButton>
              <LinkButton to={'/enterprises'} color='orange'>Para empleadores</LinkButton>
            </div>
          </>
        )
      }
    </header>
  );
};

export default memo(Header);
