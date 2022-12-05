import { useRouteError } from "react-router-dom";
import { Heading1 } from "../../atoms/Heading/Heading";
import { Link } from "../../atoms/Link/Link";
import { Paragraph } from "../../atoms/Paragraph/Paragraph";
import { Container } from "../../layout/Container/Container";

export default function ErrorPage() {
  const error = useRouteError() as Error;
  console.error(error);

  return (
    <Container>
      <Heading1>Oops!</Heading1>
      <Paragraph>Sorry, an unexpected error has occurred.</Paragraph>
      <Paragraph>{error.message}</Paragraph>
      <Link to="/">Back to home screen</Link>
    </Container>
  );
}
