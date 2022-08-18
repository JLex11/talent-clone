import { memo } from 'react';
import { Route, Routes } from 'react-router-dom';
import Header from './components/Header';
import Home from './pages/Home';
import JobSearch from './pages/JobSearch';
import SalarySearch from './pages/SalarySearch';
import TaxCalculator from './pages/TaxCalculator';

const App = () => {
  return (
    <div className="App">
      <Header />
      <Routes>
        <Route path="/*" element={<Home />} />
        <Route path='/job-search/*' element={<JobSearch />} />
        <Route path='/salary-search/*' element={<SalarySearch/>} />
        <Route path='/tax-calculator/*' element={<TaxCalculator/>} />
      </Routes>
    </div>
  );
};

export default memo(App);
