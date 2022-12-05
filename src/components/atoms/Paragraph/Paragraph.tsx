import { HTMLAttributes } from "react";

export type ParagraphProps = HTMLAttributes<HTMLParagraphElement>;

export const Paragraph = (props: ParagraphProps) => {
  return <p {...props} className="mb-4" />;
};
