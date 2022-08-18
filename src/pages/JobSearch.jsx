import { memo } from 'react';
import JobsResults from '../components/JobsResults';
import SearchJobs from '../components/SearchJobs';
import SearchJobsTags from '../components/SearchJobsTags';

const JobSearch = () => { 
  return (
    <main className='ContainerJobSearch'>
      <section className="SearchJobs">
        <SearchJobs />
        <SearchJobsTags />
      </section>
      <section className='JobResults'>
        <JobsResults />
      </section>
    </main>
  );
};

export default memo(JobSearch);