import { memo } from 'react';
import HomeSection from '../components/HomeSection';
import SearchJobs from '../components/SearchJobs';
import { sections } from '../others/HomeSections';

const Home = () => {
  return (
    <main className="Home">
      <section className='SearchJobs'>
        <SearchJobs />
      </section>
      {sections.map((s, i) => (
        <HomeSection
          key={i}
          picture={s.picture}
          title={s.title}
          description={s.description}
          link={s.link}
        />
      ))}
    </main>
  );
};

export default memo(Home);