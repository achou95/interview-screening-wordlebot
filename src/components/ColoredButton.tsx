import { Button } from "@mui/material";

interface Props {
  color: string
  onClick: () => void
}

const ColoredButton = ({color, onClick}: Props) => {
    return (
      <Button sx={{ 
        width: '50px',
        height: '50px',
        minWidth: '0px',
        borderRadius: '0px', 
        mx: 1, 
        display: 'inline-block', 
        border: '1px solid',
        textAlign: 'center',
        alignContent: 'center',
        backgroundColor: color,
        '&:hover': {
          backgroundColor: color
        }
        }}
        onClick={onClick}
     />

    );
};

export default ColoredButton;
