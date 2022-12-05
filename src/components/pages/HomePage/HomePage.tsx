import { Heading1, Heading2 } from "../../atoms/Heading/Heading";
import { Link } from "../../atoms/Link/Link";
import { List, ListItem } from "../../atoms/List/List";
import { Container } from "../../layout/Container/Container";

export default function OverviewPage() {
  return (
    <Container>
      <Heading1>Home</Heading1>

      <Heading2>About</Heading2>
      <div className="mb-10">
        <List>
          <ListItem>
            <Link to="/introduction">Introduction</Link>
          </ListItem>
          <ListItem>
            <Link to="/overview">Overview</Link>
          </ListItem>
        </List>
      </div>

      <Heading2>Getting started</Heading2>
      <div>
        <List>
          <ListItem>
            <Link to="/your-first-optional-field">Your first optional field</Link>
          </ListItem>
          <ListItem>
            <Link to="/adding-input-validation">Adding input validation</Link>
          </ListItem>
          <ListItem>
            <Link to="/cross-component-dependencies">Cross-component dependencies</Link>
          </ListItem>
          <ListItem>
            <Link to="/clearing-state-upon-deletion">Clearing state upon deletion</Link>
          </ListItem>
          <ListItem>
            <Link to="/formatting-request-payloads">Formatting request payloads</Link>
          </ListItem>
          <ListItem>
            <Link to="/formatting-response-bodies">Formatting response bodies</Link>
          </ListItem>
          <ListItem>
            <Link to="/editing-and-duplication">Editing and duplicating</Link>
          </ListItem>
        </List>
      </div>
    </Container>
  );
}
