import { FC } from "react";

interface Props {
  search: string;
}

export const SearchIPADB: FC<Props> = ({ search }) => {
  return <div>searchipadb + {search}</div>;
};
