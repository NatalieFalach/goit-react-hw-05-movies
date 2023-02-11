import { Outlet } from "react-router-dom";
import { Container, Header, Logo, Link } from "./SharedLayout.styled";
import { Suspense } from "react";
import Spinner from "components/Spinner/Spinner";

export const SharedLayout = () => {
  return (
    <Container>
      <Header>
        <Logo>
          
          Trend{" "}<span role="img" aria-label="computer icon">
            💻
          </span>{" "}FilMix
        </Logo>
        <nav>
          <Link to="/" end>
            Home
          </Link>
          <Link to="/movies">Movies</Link>
        </nav>
      </Header>
      <Suspense fallback={<Spinner/>}>
        <Outlet />
      </Suspense>
    </Container>
  );
};
