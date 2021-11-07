import { FC } from "react";

export type KeyboardPress<L extends string> =
  | { letter: L; ipa: string }
  | { letter: "backspace" };

interface Props<M extends Record<string, string>> {
  langMap: M;
  onPress: (ev: KeyboardPress<Extract<keyof M, string>>) => void;
}

const KEY_SIZE = 40;

export const Keyboard = <M extends Record<string, string>>({
  langMap,
  onPress,
}: Props<M>) => {
  const langEntries = Object.entries(langMap) as [
    Extract<keyof M, string>,
    string
  ][];

  return (
    <div
      style={{
        display: "flex",
        width: "75%",
        flexWrap: "wrap",
        maxWidth: KEY_SIZE * 14,
      }}
    >
      {langEntries.map(([letter, ipa]) => (
        <button
          key={letter}
          style={{
            height: KEY_SIZE,
            width: KEY_SIZE,
            fontSize: "1.5rem",
            margin: KEY_SIZE / 20,
          }}
          onClick={() => onPress({ letter, ipa })}
        >
          {letter}
        </button>
      ))}
      <button
        style={{
          height: KEY_SIZE,
          width: KEY_SIZE * 2 + (2 * KEY_SIZE) / 20,
          margin: KEY_SIZE / 20,
        }}
        onClick={() => onPress({ letter: "backspace" })}
      >
        Bkspce
      </button>
    </div>
  );
};
