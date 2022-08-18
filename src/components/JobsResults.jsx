import { memo, useState } from 'react';
import { useSelector } from 'react-redux';
import { useSearchParams } from 'react-router-dom';
import JobInformation from './JobInformation';
import JobItem from './JobItem';

const JobsResults = () => {
  const jobs = useSelector(state => state.jobs);
  const [selectedJob , setSelectedJob] = useState(null);

  const [searchParams] = useSearchParams();

  /* useEffect(() => {
    const jobsData = getJobs({
      search_terms: searchParams.get('searchWord') || '',
      location: searchParams.get('locationWord') || '',
    });

    jobsData.then(setJobs);
  }, []); */

  const handleSelectedJob = (job) => setSelectedJob(job);

  const handleClosetInformation = () => setSelectedJob(null);

  return (
    <div className='JobResultsContainer'>
      <div className='JobResultsTitles'>
        <h2>Trabajos para ti</h2>
        {selectedJob && <h2>Mas información</h2>}
      </div>
      <div className='JobResultsContent'>
        <div className='JobList'>
          {jobs.map(job => (
            <JobItem
              key={job.id}
              job={job}
              handleSelectedJob={handleSelectedJob}
            />
          ))}
        </div>
        {selectedJob && (
          <JobInformation
            job={selectedJob}
            handleClosetInformation={handleClosetInformation}
          />
        )}
      </div>
    </div>
  );
};

export default memo(JobsResults);