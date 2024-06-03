import { Box } from "@mui/material";
import ColoredButton from "./ColoredButton";

interface Props {
  color: string
  onClick: (position: number, c: string) => void
}

const ClueRow = ({color, onClick}: Props) => {
  const clueLetter = color === 'lightgreen' ? "g" : color === 'yellow' ? "y" : "x"
    return (
      <Box textAlign={'center'} marginTop={2}>
        <ColoredButton color={color} onClick={() => onClick(0, clueLetter)} />
        <ColoredButton color={color} onClick={() => onClick(1, clueLetter)} />
        <ColoredButton color={color} onClick={() => onClick(2, clueLetter)} />
        <ColoredButton color={color} onClick={() => onClick(3, clueLetter)} />
        <ColoredButton color={color} onClick={() => onClick(4, clueLetter)} />
      </Box>

    );
};

export default ClueRow;
