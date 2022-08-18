import { memo } from 'react';

const SearchBar = ({label, placeholder,icon, value, handleChange}) => {
  return (
    <div className='SearchBar'>
      <span>{label || placeholder}</span>
      <div className='InputMask'>
        <span className='material-symbols-outlined InputIcon'>
          {icon || 'search'}
        </span>
        <input
          type='text'
          placeholder={placeholder}
          value={value}
          onChange={e => handleChange(e.target.value)}
        />
        <span
          className='material-symbols-outlined CloseBtn'
          onClick={() => handleChange('')}
          style={{opacity: value ? 1 : 0}}
        >
          close
        </span>
      </div>
    </div>
  );
};

export default memo(SearchBar);
