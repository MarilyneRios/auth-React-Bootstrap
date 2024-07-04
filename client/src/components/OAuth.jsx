import { useDispatch } from 'react-redux';
import { useNavigate } from 'react-router-dom';
import { Button,  } from "react-bootstrap";

export default function OAuth() {
  const dispatch = useDispatch();
  const navigate = useNavigate();
  const handleGoogleClick = async () => {
  
  };

  return (
    <Button
      type='button'
      variant="outline-dark"
      onClick={handleGoogleClick}
      className='w-100 d-flex align-items-center justify-content-center gap-2'
    >
    <img
            src="https://img.icons8.com/?size=100&id=17949&format=png&color=000000"
            alt="Google"
            height="25"
            width="25"
          />
      Continue with google
    </Button>
  );
}