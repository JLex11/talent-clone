import { memo, useEffect, useState } from 'react';
import { Link } from 'react-router-dom';
import LinkButton from './LinkButton';
import Logo from './Logo';
import MenuIcon from './MenuIcon';

const Header = () => {
  const [isOpen, setIsOpen] = useState(false);
  const [isMobile, setIsMobile] = useState(window.innerWidth < 500);

  useEffect(() => {
    new ResizeObserver(entries => {
      setIsMobile(window.innerWidth < 500);
    }).observe(document.body);
  }, []);

  const oppenToggle = () => setIsOpen(!isOpen);

  return (
    <header className={isOpen ? 'Open' : ''}>
      <Logo />
      {isMobile && <MenuIcon openToggle={oppenToggle} />}
      <nav className='NavOptions'>
        <Link to='/job-search'>Encuentra un trabajo</Link>
        <Link to='/salary-search'>Tu salario ideal</Link>
        <Link to='/tax-calculator'>Calcular impuestos</Link>
      </nav>
      <div className='AcessOptions'>
        <LinkButton to={'/login'} color='white'>Iniciar sesión</LinkButton>
        <LinkButton to={'/enterprises'} color='orange'>Para empleadores</LinkButton>
      </div>
    </header>
  );
};

export default memo(Header);
