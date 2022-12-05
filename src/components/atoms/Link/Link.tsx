import { Link as ReactRouterLink, LinkProps as ReactRouterLinkProps } from "react-router-dom";

export type LinkProps = ReactRouterLinkProps & React.RefAttributes<HTMLAnchorElement>;

export const Link = (props: LinkProps) => {
  return <ReactRouterLink {...props} className="text-indigo-600" />;
};
