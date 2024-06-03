import { Box, Typography } from "@mui/material";
import { ReactNode } from "react";
import ClueRow from "./ClueRow";
import WordRow from "./WordRow";

interface Props {
  children?: ReactNode;
  clue: string
  active: boolean
  setClue: (c: string) => void
}

const WordResponse = ({children, clue, active, setClue}: Props) => {
  const word = children ? children.toString().toUpperCase() : ''

  const onClick = (position: number, color: string) => {
    if (position === 0) {
      setClue(color + clue.substring(1))
    } else if (position === 5) {
      setClue(clue.substring(0,5) + color)
    } else {
      setClue(clue.substring(0, position) + color + clue.substring(position + 1))
    }
    return
  }
  return (
    <>
      { !!word ? (
        <Box sx={{my: 2}}>
          <Typography sx={{textAlign: 'left', py: '15px' }}>What response did you get back?</Typography>
          <Box textAlign={'center'}>
            <WordRow clue={clue} word={word} />
          </Box>
          {active && (
            <>
              <ClueRow color="lightgreen" onClick={onClick}/>
              <ClueRow color="yellow" onClick={onClick}/>
              <ClueRow color="white" onClick={onClick}/>
            </>
          )}
        </Box>
      ) : (
        <Typography variant="body2" color="red" mt={2}>Something went wrong please try again</Typography>
      )}
    </>
  );
};

export default WordResponse;
