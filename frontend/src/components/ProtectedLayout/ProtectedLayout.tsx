import { checkLogin } from "../../services/user";
import { useEffect } from "react";
import { useNavigate, useOutlet } from "react-router-dom";
import NavBar from "../NavBar";

export const ProtectedLayout = () => {
  const outlet = useOutlet();
  const navigate = useNavigate();

  useEffect(() => {
    const autoCheckLogin = async () =>
      checkLogin().catch(() => navigate("/login"));

    autoCheckLogin();
  }, [navigate]);

  return (
    <>
      <NavBar />
      {outlet}
    </>
  );
};
