import { useAuth0 } from "@auth0/auth0-react";
import '../styles/navbar.css'
const LogoutButton = () => {
  const { logout } = useAuth0();

  return (
    <p className="nav-links , boton-login" onClick={() => logout({ logoutParams: { returnTo: window.location.origin } })}>
      Log Out
    </p>
  );
};

export default LogoutButton;
