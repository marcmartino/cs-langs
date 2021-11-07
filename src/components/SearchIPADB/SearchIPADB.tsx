import { FC } from "react";
import phonsByLen from "../../langMaps/dictByPhonLen.json";

interface Props {
  search: string;
}

export const SearchIPADB: FC<Props> = ({ search }) => {
  console.log(phonsByLen[search.length]);
  // @ts-ignore
  const foundPhons: string[] = phonsByLen[search.length][search] || [];
  return (
    <div>
      <div>{search}</div>
      <ul>
        {foundPhons.map((word: string) => (
          <li key={word}>{word}</li>
        ))}
      </ul>
    </div>
  );
};
