import { Link } from "react-router-dom";

import { Heading1 } from "../../atoms/Heading/Heading";
import { Container } from "../../layout/Container/Container";

export default function IntroductionPage() {
  return (
    <Container>
      <Heading1>Introduction</Heading1>
      <p>
        Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore
        magna aliqua. Ut enim ad minim veniam, quis nostrud exercitation ullamco laboris nisi ut aliquip ex ea commodo
        consequat. Duis aute irure dolor in reprehenderit in voluptate velit esse cillum dolore eu fugiat nulla
        pariatur. Excepteur sint occaecat cupidatat non proident, sunt in culpa qui officia deserunt mollit anim id est
        laborum.
      </p>
      <Link to="/">Home</Link>
    </Container>
  );
}
