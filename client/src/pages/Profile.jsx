import { useState, useRef, useEffect } from "react";
import { useSelector, useDispatch } from "react-redux";
import { useNavigate } from "react-router-dom";
import { Form, Button, Image } from "react-bootstrap";
import FormContainer from "../components/FormContainer";
import { FaEye, FaEyeSlash } from "react-icons/fa";
import {  getDownloadURL,  getStorage,  ref,  uploadBytesResumable,} from 'firebase/storage';
import { app } from "../firebase";

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

  //états pour upload images
  const [image, setImage] = useState(undefined);

  const [imagePercent, setImagePercent] = useState(0);
  const [imageError, setImageError] = useState("");
  const [updateSuccess, setUpdateSuccess] = useState(false);

  // Vérifie si 'image' a une valeur. Si oui, la fonction handleFileUpload est appelée
  useEffect(() => {
    if (image) {
      handleFileUpload(image);
    }
  }, [image]);

  const handleFileUpload = async (image) => {
    const storage = getStorage(app);
    const fileName = new Date().getTime() + image.name;
    const storageRef = ref(storage, fileName);
    const uploadTask = uploadBytesResumable(storageRef, image);
    uploadTask.on(
      'state_changed',
      (snapshot) => {
        const progress =
          (snapshot.bytesTransferred / snapshot.totalBytes) * 100;
        setImagePercent(Math.round(progress));
      },
      (error) => {
        setImageError(true);
      },
      () => {
        getDownloadURL(uploadTask.snapshot.ref).then((downloadURL) =>
          setFormData({ ...formData, profilePicture: downloadURL })
        );
      }
    );
  };

  const dispatch = useDispatch();
  const navigate = useNavigate();

  const fileRef = useRef(null);

  // Fonction de gestion du changement de valeur des champs du formulaire
  const handleChange = (e) => {
    const { id, value } = e.target;
    setFormData({ ...formData, [id]: value });
  };

  // Fonction de validation de fichier (si erreur)
  const validateFile = (file) => {
    if (!file.type.startsWith('image/')) {
      setImageError("Le fichier doit être une image");
      return false;
    }
    if (file.size > 2 * 1024 * 1024) { // 2 MB
      setImageError("L'image doit être inférieure à 2 Mo");
      return false;
    }
    setImageError(""); // Réinitialiser les erreurs
    return true;
  };

  // Fonction de soumission du formulaire
  const handleSubmit = async (e) => {
    e.preventDefault();

    try {
      console.log(formData);

      navigate("/");
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
                setImagePercent(0);
                setImage(file);
              }
            }}
          />
           {imageError && <p className="text-danger text-center">{imageError}</p>}

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

        <Button
          type="submit"
          variant="outline-dark"
          className="my-3 w-100"
          disabled={loading}
        >
          Enregistrer
        </Button>
        <div className="d-flex justify-content-between mt-3">
          <span className="btn text-danger ">Supprimer le compte</span>

          <span className="btn text-danger ">Déconnexion</span>
        </div>
        <div>
          <p className="text-danger mt-5">{"Quelque chose ne pas !"}</p>

          <p className="text-danger mt-5">
            {"Les modifications sont mise à jour avec succès !"}
          </p>
        </div>
      </Form>
    </FormContainer>
  );
}
