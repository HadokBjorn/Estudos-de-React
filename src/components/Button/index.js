import { ButtonContainer } from "./styles";

const Button = ({Label, onClick}) => {
    return (
      <ButtonContainer onClick={onClick} type="button">
        {Label}
      </ButtonContainer>
    );
  }
  
  export default Button;
  