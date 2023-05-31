
import { useAuth0 } from "@auth0/auth0-react";
import '../styles/navbar.css'

const LoginButton = () => {
  const { loginWithRedirect } = useAuth0();

  return <p className="nav-links , boton-login" onClick={() => loginWithRedirect()}>Log In</p>;
};

export default LoginButton;