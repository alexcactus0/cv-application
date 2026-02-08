import { GeneralInfos } from './components/infos';
import { InfoSide } from './components/infos';
import { CV } from './components/cv';

import { useState } from 'react';

import './styles/app.css';

function App() {
  const [userData, setUserData] = useState({
    name: '',
    address: '',
    contact: '',
    email: '',
    objective: '',
    education: {
      schoolName: '',
      schoolAddress: '',
      schoolYear: '',
    },
    experience: '',
  });

  // update function
  const handleChange = (e) => {
    const { name, value } = e.target;
    setUserData((prev) => ({
      ...prev,
      [name]: value,
    }));
  };

  return (
    <>
      <InfoSide data={userData} onChange={handleChange} />
      <CV data={userData} />
    </>
  );
}

export default App;
