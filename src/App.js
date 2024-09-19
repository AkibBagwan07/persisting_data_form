import './App.css';
import AddressInfo from './form/AddressInfo';
import PersonalInfo from './form/personalInfo';
import { BrowserRouter, Routes, Route } from 'react-router-dom';
import ReviewData from './form/ReviewData';
import { useState } from 'react';

function App() {
  // const [addressData, setAddressData] = useState({})
  // console.log(personalInfoData)
  
  return (
    <div className="App">
      <BrowserRouter>
      <Routes>
          <Route path='/' element={ <PersonalInfo />} />
        <Route path='/addressInfo' element={ <AddressInfo />} />
        <Route path='/reviewData' element={ <ReviewData />} />
        </Routes>
      </BrowserRouter>
    </div>
  );
}

export default App;
