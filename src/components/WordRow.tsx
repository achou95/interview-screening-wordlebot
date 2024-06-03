import Textbox from "./Textbox";

interface Props {
  clue?: string
  word: string
}

// Displays the word produced by the bot
const WordRow = ({clue, word}: Props) => {
  const backgroundColor = clue ?? 'xxxxx'
  return (
      <>
        <Textbox color={backgroundColor.charAt(0)}>{word.charAt(0)}</Textbox>
        <Textbox color={backgroundColor.charAt(1)}>{word.charAt(1)}</Textbox>
        <Textbox color={backgroundColor.charAt(2)}>{word.charAt(2)}</Textbox>
        <Textbox color={backgroundColor.charAt(3)}>{word.charAt(3)}</Textbox>
        <Textbox color={backgroundColor.charAt(4)}>{word.charAt(4)}</Textbox>
      </>

    );
};

export default WordRow;
