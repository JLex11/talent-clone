import { memo } from 'react';

const SearchJobsTags = () => { 
  const tags = [
    { label: 'Local', icon: 'home' }, 
    { label: 'Remoto', icon: 'connect_without_contact' },
    { label: 'Full Time', icon: 'hourglass_full' },
    { label: 'Part Time', icon: 'hourglass_bottom' },
    { label: 'Freelance', icon: 'free_cancellation' }
  ];

  return (
    <div className="SearchJobsTags">
      <div className="SearchJobsTagsList">
        {tags.map(tag => (
          <a
            key={tag.label}
            href="#"
            className="SearchJobsTagsItem LinkButton btn-white"
          >
            <div>
              <span className='material-symbols-outlined'>{tag.icon}</span>
              <span>{tag.label}</span>
            </div>
          </a>
        ))}
      </div>
    </div>
  );
};

export default memo(SearchJobsTags);