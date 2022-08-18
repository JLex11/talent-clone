import { memo } from 'react';

const SearchJobsTags = () => { 
  const tags = ['Local', 'Remoto', 'Full Time', 'Part Time', 'Freelance'];

  return (
    <div className="SearchJobsTags">
      <div className="SearchJobsTagsList">
        {tags.map(tag => (
          <a
            key={tag}
            href="#"
            className="SearchJobsTagsItem LinkButton btn-white">
            {tag}
          </a>
        ))}
      </div>
    </div>
  );
};

export default memo(SearchJobsTags);