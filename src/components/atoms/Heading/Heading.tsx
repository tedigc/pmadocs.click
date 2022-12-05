import { HTMLAttributes } from "react";

export type Heading1Props = HTMLAttributes<HTMLHeadingElement>;

export const Heading1 = ({ ...restProps }: Heading1Props) => {
  return <h1 {...restProps} className="text-3xl font-bold text-slate-700 mb-4" />;
};
