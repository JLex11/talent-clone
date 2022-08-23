import { memo, useEffect, useRef, useState } from 'react';
import JobHead from './JobHead';

const JobItem = ({ job, handleSelectedJob }) => {
  const [itemLayouts, setItemLayouts] = useState({});

  const { job_title, company_name, job_location, description, posted_date, logo } = job;
  const shortDescription = description.substring(0, description.indexOf('.') + 1);

  const itemRef = useRef(null);

  useEffect(() => {
    const header = document.querySelector('header');
    new ResizeObserver(() => {
      setItemLayouts({
        scrollMargin: header.offsetHeight + 20,
      });
    }).observe(header);
  }, []);

  const handleClick = (e) => {
    e.preventDefault();
    setTimeout(() => { 
      itemRef.current.scrollIntoView({behavior: 'smooth'});
    }, 300);
    handleSelectedJob({job_title, company_name, job_location, description, posted_date, logo});
  };

  return (
    <article
      className='JobItem'
      onClick={handleClick}
      ref={itemRef}
      style={itemLayouts}
    >
      <JobHead
        {...job}
      />
      <p>{shortDescription}</p>
      <span>{posted_date}</span>
    </article>
  );
};

export default memo(JobItem);