import { memo, useEffect, useState } from 'react';
import JobHead from './JobHead';

const JobInformation = ({job, handleClosetInformation}) => {
  const { description, posted_date } = job;
  const [descriptionLayouts, setDescriptionLayouts] = useState({});
  
  useEffect(() => {
    const header = document.querySelector('header');
    new ResizeObserver(() => {
      setDescriptionLayouts({
        top: header.offsetHeight + 20,
        maxHeight: window.innerHeight - header.offsetHeight - 40
      });
    }).observe(header);
  }, []);

  return (
    <div className='JobInformation' style={{...descriptionLayouts}}>
      <article>
        <JobHead
          {...job}
          handleClosetInformation={handleClosetInformation}
        />
        <div className='JobDescription'>
          <p>{description}</p>
        </div>
        <div className='JobDate'>
          <h5>{posted_date}</h5>
        </div>
      </article>
    </div>
  );
};

export default memo(JobInformation);