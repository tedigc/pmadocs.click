import { HTMLAttributes } from "react";

export type Heading1Props = HTMLAttributes<HTMLHeadingElement>;

export const Heading1 = ({ ...restProps }: Heading1Props) => {
  return <h1 {...restProps} className="text-3xl font-bold text-slate-700 mb-4" />;
};

export type Heading2Props = HTMLAttributes<HTMLHeadingElement>;

export const Heading2 = ({ ...restProps }: Heading2Props) => {
  return <h2 {...restProps} className="text-xl font-medium text-slate-700 mb-4" />;
};
