import { Box } from "@mui/material";
import { ReactNode } from "react";

interface Props {
  children?: ReactNode;
  color?: string
}

const Textbox = ({children, color}: Props) => {
  const backgroundColor = color === 'g' ? "lightgreen" : color === 'y' ? "yellow" : "white"
    return (
      <Box sx=
        {{
          width: '50px',
          height: '50px', 
          mx: 1, 
          display: 'inline-block', 
          border: '1px solid',
          textAlign: 'center',
          alignContent: 'center',
          backgroundColor: backgroundColor
        }}
      >
          {children ?? ' '}
      </Box>

    );
};

export default Textbox;
