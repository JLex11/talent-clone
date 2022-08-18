import { memo } from 'react';
import { Link } from 'react-router-dom';
import { TalentLogo } from './icons/SvgIcons';

const Logo = () => {
  return (
    <Link to='/' className='ContainerLogo' title='TalentLogo'>
      <TalentLogo />
    </Link>
  );
};

export default memo(Logo);