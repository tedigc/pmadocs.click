import { Heading1 } from "../../atoms/Heading/Heading";
import { Link } from "../../atoms/Link/Link";
import { Container } from "../../layout/Container/Container";

export default function OverviewPage() {
  return (
    <Container>
      <Heading1>Home</Heading1>
      <ul>
        <li>
          <Link to="/overview">Introduction</Link>
        </li>
        <li>
          <Link to="/overview">Overview</Link>
        </li>
      </ul>
    </Container>
  );
}
