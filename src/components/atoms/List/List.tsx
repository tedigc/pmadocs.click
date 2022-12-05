import { HTMLAttributes } from "react";

export type ListProps = HTMLAttributes<HTMLUListElement>;

export const List = (props: ListProps) => {
  return <ul {...props} className="list-disc" />;
};

export type ListItemProps = HTMLAttributes<HTMLLIElement>;

export const ListItem = (props: ListItemProps) => {
  return <li {...props} className="mb-1 hover:text-indigo-900" />;
};
