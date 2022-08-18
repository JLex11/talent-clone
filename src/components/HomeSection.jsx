import { memo } from 'react';
import LinkButton from './LinkButton';

const HomeSection = ({ picture, title, description, link }) => {
  return (
    <section className='HomeSection'>
      <div className='AniPicture'>
        <img src={picture} alt={`talent-${picture}`} loading='lazy' />
      </div>
      <div className='SectionInfo'>
        <h1>{title}</h1>
        <p>{description}</p>
        <LinkButton to={link.href} color='orange'>{link.label || 'Más información'}</LinkButton>
      </div>
    </section>
  );
};

export default memo(HomeSection);