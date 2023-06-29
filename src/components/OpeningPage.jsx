import { useEffect } from 'react';
import { useNavigate } from 'react-router-dom';
import LogoImage from '../IMAGE/LOGOAIR.PNG'; 
import 'animate.css';


function OpeningPage() {
  const navigate = useNavigate();

  useEffect(() => {
    const timeout = setTimeout(() => {
      navigate('/register-page');
    }, 8000); // 3 secondi

    return () => clearTimeout(timeout);
  }, [navigate]);

  return (
    <img src={LogoImage} alt="" width={'500px'} className="logo-image animate__animated animate__bounce animate__delay-2s" />
  );
}

export default OpeningPage;
