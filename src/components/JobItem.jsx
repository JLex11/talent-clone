import { memo } from 'react';
import JobHead from './JobHead';

const JobItem = ({ job, handleSelectedJob }) => {
  const { job_title, company_name, job_location, description, posted_date, logo } = job;

  const shortDescription = description.substring(0, description.indexOf('.') + 1);

  const handleClick = (e) => {
    e.preventDefault();
    handleSelectedJob({job_title, company_name, job_location, description, posted_date, logo});
  };

  return (
    <a href='#' onClick={handleClick}>
      <article className='JobItem'>
        <JobHead
          {...job}
        />
        <p>{shortDescription}</p>
        <span>{posted_date}</span>
      </article>
    </a>
  );
};

export default memo(JobItem);