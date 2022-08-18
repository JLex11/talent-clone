import { memo } from 'react';

const SalarySearch = () => {
  return (
    <div className='ContainerSalarySearch'>
      <h1>Tu salario ideal</h1>
      <div className='ContainerInputs'>
        <input type='text' placeholder='Ingresa tu salario' />
        <input type='text' placeholder='Ingresa tu edad' />
        <input type='text' placeholder='Ingresa tu estado civil' />
      </div>
      <button>Calcular</button>
    </div>
  );
};

export default memo(SalarySearch);