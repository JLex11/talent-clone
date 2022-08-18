import { memo } from 'react';

const TaxCalculator = () => {
  return (
    <div className='ContainerTaxCalculator'>
      <h1>Calculadora de impuestos</h1>
      <div className='ContainerInputs'>
        <input type='text' placeholder='Ingresa tu salario' />
        <input type='text' placeholder='Ingresa tu edad' />
        <input type='text' placeholder='Ingresa tu estado civil' />
      </div>
      <button>Calcular</button>
    </div>
  );
};

export default memo(TaxCalculator);