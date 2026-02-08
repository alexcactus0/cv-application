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
    edLevel: '',
    schoolName: '',
    schoolAddress: '',
    schoolYear: '',
    edStatus: '',
    experience: '',
  });

  const [imagePreview, setImagePreview] = useState('');
  const [imageError, setImageError] = useState('');

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
      <InfoSide
        data={userData}
        onChange={handleChange}
        setImagePreview={setImagePreview}
        setImageError={setImageError}
        imageError={imageError}
      />
      <CV data={userData} imagePreview={imagePreview} />
    </>
  );
}

export default App;
