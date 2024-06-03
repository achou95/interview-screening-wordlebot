import { Box, Typography } from "@mui/material";
import { PropsWithChildren } from "react";
import WordRow from "./WordRow";

const GuessWord = (props: PropsWithChildren) => {
  const word = props.children ? props.children.toString().toUpperCase() : ''

  return (
    <>
      { !!word && (
        <Box sx={{my: 2, textAlign: 'center'}}>
          <Typography sx={{textAlign: 'left', display: 'inline-block', pt: '15px' }}>Word to Guess:</Typography>
          <WordRow word={word} />
        </Box>
      )}
    </>
  );
};

export default GuessWord;
