import { memo } from 'react';

const JobHead = ({ logo, company_name, job_title, job_location, handleClosetInformation }) => { 
  return (
    <div className='JobHead'>
      <div className='InformationLogo'>
        <img src={logo} alt={company_name} loading='lazy'/>
      </div>
      <div className='JobHeader'>
        <div className='JobTitle'>
          <h3>{job_title}</h3>
          {handleClosetInformation && (
            <span
              className='material-symbols-outlined CloseBtn'
              onClick={handleClosetInformation}
            >
              close
            </span>
          )}
        </div>
        <h4>{job_location}</h4>
        <h5>{company_name}</h5>
      </div>
    </div>
  );
};

export default memo(JobHead);