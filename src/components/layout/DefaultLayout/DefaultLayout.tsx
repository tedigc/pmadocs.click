import { PropsWithChildren } from "react";

export type DefaultLayoutProps = PropsWithChildren<Record<string, unknown>>;

export const DefaultLayout = ({ children }: DefaultLayoutProps) => {
  return <div className="py-10">{children}</div>;
};
