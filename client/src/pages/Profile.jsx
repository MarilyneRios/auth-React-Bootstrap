import { useState, useRef } from "react"; 
import { useSelector, useDispatch } from "react-redux";
import { useNavigate } from "react-router-dom";
import { Form, Button, Image } from "react-bootstrap";
import FormContainer from "../components/FormContainer";
import { FaEye, FaEyeSlash } from "react-icons/fa";

export default function Profile() {
  const { currentUser, loading } = useSelector((state) => state.user);
  const [formData, setFormData] = useState({
    username: currentUser.username,
    email: currentUser.email,
    password: "",
    passwordConfirm: "",
    profilePicture: currentUser.profilePicture,
  });

  const [visiblePassword, setVisiblePassword] = useState(false);
  const [visibleConfirmPassword, setVisibleConfirmPassword] = useState(false);
  const [localError, setLocalError] = useState("");

  const dispatch = useDispatch();
  const navigate = useNavigate();
  const fileRef = useRef(null); 

  // Fonction de gestion du changement de valeur des champs du formulaire
  const handleChange = (e) => {
    const { id, value } = e.target;
    setFormData({ ...formData, [id]: value });
  };

  // Fonction de validation de fichier (exemple)
  const validateFile = (file) => {
   
    return true; 
  };

  // Fonction de soumission du formulaire
  const handleSubmit = async (e) => {
    e.preventDefault();

    try {
      console.log(formData);
    
      navigate('/'); 
    } catch (error) {
      console.error("Erreur lors de la soumission du formulaire :", error);
    }
  };

  const { username, email, password, passwordConfirm } = formData;

  return (
    <FormContainer>
      <h1 className="d-flex justify-content-center text-dark">Profil</h1>
      <Form onSubmit={handleSubmit}>
       {/* Image de profil */}
        <Form.Group className="my-2 d-flex justify-content-center ">
         
          <Image
            src={formData.profilePicture || currentUser.profilePicture}
            alt="image de profil"
            className="cursor-pointer rounded-circle object-cover mt-2 border border-dark"
            style={{ width: "100px", height: "100px" }}
            onClick={() => fileRef.current.click()} 
          />
          <Form.Control
            type="file"
            accept="image/*"
            ref={fileRef}
            hidden
            onChange={(e) => {
              const file = e.target.files[0];
              if (validateFile(file)) {
                setFormData({ ...formData, profilePicture: URL.createObjectURL(file) });
              }
            }}
          />
        </Form.Group>

        <Form.Group className="my-2">
          <Form.Control
            type="text"
            id="username"
            placeholder="Pseudo"
            value={username}
            onChange={handleChange}
            autoComplete="username"
          />
        </Form.Group>

        <Form.Group className="my-2">
          <Form.Control
            type="email"
            id="email"
            placeholder="Email"
            value={email}
            onChange={handleChange}
            autoComplete="email"
          />
        </Form.Group>

        <Form.Group className="my-2">
          <div className="d-flex">
            <Form.Control
              type={visiblePassword ? "text" : "password"}
              id="password"
              placeholder="Mot de passe"
              value={password}
              onChange={handleChange}
              autoComplete="current-password"
              className="me-2"
            />
            {visiblePassword ? (
              <FaEyeSlash
                onClick={() => setVisiblePassword(false)}
                className="m-3"
                size={20}
              />
            ) : (
              <FaEye
                onClick={() => setVisiblePassword(true)}
                size={20}
                className="m-3"
              />
            )}
          </div>
        </Form.Group>

        <Form.Group className="my-2">
          <div className="d-flex">
            <Form.Control
              type={visibleConfirmPassword ? "text" : "password"}
              id="passwordConfirm"
              placeholder="Confirmation du mot de passe"
              value={passwordConfirm}
              onChange={handleChange}
              autoComplete="new-password"
              className="me-2"
            />
            {visibleConfirmPassword ? (
              <FaEyeSlash
                onClick={() => setVisibleConfirmPassword(false)}
                className="m-3"
                size={20}
              />
            ) : (
              <FaEye
                onClick={() => setVisibleConfirmPassword(true)}
                size={20}
                className="m-3"
              />
            )}
          </div>
        </Form.Group>

        <Button type="submit" variant="outline-dark" className="my-3 w-100" disabled={loading}>
          Enregistrer
        </Button>
      </Form>
    </FormContainer>
  );
}
