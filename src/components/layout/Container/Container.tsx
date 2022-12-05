import { PropsWithChildren } from "react";

export type ContainerProps = PropsWithChildren<Record<string, unknown>>;

export const Container = ({ children }: ContainerProps) => {
  return <div className="container mx-auto max-w-3xl px-4">{children}</div>;
};
