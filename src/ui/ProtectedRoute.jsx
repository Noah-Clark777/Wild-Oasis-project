import { useNavigate } from "react-router-dom";
import { useUser } from "../features/authentication/useUser";
import Spinner from "./Spinner";
import styled from "styled-components";
import { useEffect } from "react";

const FullPage = styled.div`
  height: 100vh;
  background-color: var(--color-grey-50);
  align-items: center;
  justify-content: center;
`;

function ProtectedRoute({ children }) {
  const navigate = useNavigate();
  // load the authenticated user
  const { isLoading, isAuthenticated } = useUser();

  // if there is no authentication redirect to login

  useEffect(
    function () {
      if (!isAuthenticated && !isLoading) navigate("/login");
    },
    [isAuthenticated, isLoading, navigate],
  );

  // while loading show spiiner
  if (isLoading)
    return (
      <FullPage>
        <Spinner></Spinner>;
      </FullPage>
    );

  // if theie is a user render the app

  if (isAuthenticated) return children;
}

export default ProtectedRoute;
