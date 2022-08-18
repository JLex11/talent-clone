import { memo, useState } from 'react';
import { useLocation, useNavigate, useSearchParams } from 'react-router-dom';
import SearchBar from './SearchBar';

const SearchJobs = () => {
  const [searchParams] = useSearchParams();
  const navigate = useNavigate();
  
  const [search, setSearch] = useState(searchParams.get('searchWord') || '');
  const [location, setLocation] = useState(searchParams.get('locationWord') || '');

  const {pathname} = useLocation();
  const onRoute = pathname.includes('job-search');

  const handleChangeSearchWord = (searchWord) => setSearch(searchWord);
  const handleChangeLocationWord = (locationWord) => setLocation(locationWord);

  const handleSubmit = (e) => { 
    e.preventDefault();
    navigate(`/job-search?searchWord=${search}&locationWord=${location}`);
  };

  return (
    <form className="SearchJobsContainer">
      <SearchBar
        label={'¿Que empleo deseas?'}
        placeholder={'Palabras clave: empresa, competencias...'}
        value={search}
        handleChange={(word) => handleChangeSearchWord(word || '')}
      />
      <SearchBar
        label={'¿Donde?'}
        placeholder={'Ciudad, region, pais'}
        icon={'location_on'}
        value={location}
        handleChange={(word) => handleChangeLocationWord(word || '')}
      />
      <button type='submit' onClick={handleSubmit} className='LinkButton BtnForm'>Buscar</button>
    </form>
  );
};

export default memo(SearchJobs);