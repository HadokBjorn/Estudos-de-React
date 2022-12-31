import Button from "./components/Button";
import Input from "./components/Input";
import { Container, Content, Row, } from "./styles";

import { useState } from "react";


const App = () => {
  const [currentNumber, setCurrentNumber] = useState('0');
  const [firstNumber, setFirstNumber] = useState('0');
  const [operation, setOperation] = useState('');

  const handleClear = () => {
    setCurrentNumber('0');
    setFirstNumber('0');
    setOperation('');
  };
  const handleAddNumber = (num) => {
    setCurrentNumber(prev => `${prev=='0'? '' : prev}${num}`)
  };

  const handleSumNumbers = () => {
    if(firstNumber ==='0'){
      setFirstNumber(currentNumber);
      setCurrentNumber('0');
      setOperation('+');
    }else{
      const sum = Number(firstNumber) + Number(currentNumber);
      setCurrentNumber(String(sum));
      setOperation('');
    }
  };

  const handleSubNumbers = () => {
    if(firstNumber ==='0'){
      setFirstNumber(currentNumber);
      setCurrentNumber('0');
      setOperation('-');
    }else{
      const sub = Number(firstNumber) - Number(currentNumber);
      setCurrentNumber(String(sub));
      setOperation('');
    }
  };

  const handleMultiNumbers = () => {
    if(firstNumber ==='0'){
      setFirstNumber(currentNumber);
      setCurrentNumber('0');
      setOperation('x');
    }else{
      const multi = Number(firstNumber) * Number(currentNumber);
      setCurrentNumber(String(multi));
      setOperation('');
    }
  };
  const handleDivNumbers = () => {
    if(firstNumber ==='0'){
      setFirstNumber(currentNumber);
      setCurrentNumber('0');
      setOperation('/');
    }else{
      const div = Number(firstNumber) / Number(currentNumber);
      setCurrentNumber(String(div));
      setOperation('');
    }
  };

  const handleEquals = () => {
    if(firstNumber !=='0' && operation !== '' && currentNumber !== '0'){
      switch(operation){
        case '+':
          handleSumNumbers();
          break;
          case '-':
          handleSubNumbers();
          break;
          case 'x':
          handleMultiNumbers();
          break;
          case '/':
          handleDivNumbers();
          break;
        default: 
        break;
      }
    }
  };


  return (
    <Container>
      <Content>
        <Input value={currentNumber}/>
        <Row>
          <Button Label='x' onClick={handleMultiNumbers}/>
          <Button Label='/' onClick={handleDivNumbers}/>
          <Button Label='C' onClick={handleClear}/>
          <Button Label='<' onClick={() => handleAddNumber('<')}/>
        </Row>
        <Row>
          <Button Label='7' onClick={() => handleAddNumber('7')}/>
          <Button Label='8' onClick={() => handleAddNumber('8')}/>
          <Button Label='9' onClick={() => handleAddNumber('9')}/>
          <Button Label='-' onClick={handleSubNumbers}/>
        </Row>
        <Row>
          <Button Label='4' onClick={() => handleAddNumber('4')}/>
          <Button Label='5' onClick={() => handleAddNumber('5')}/>
          <Button Label='6' onClick={() => handleAddNumber('6')}/>
          <Button Label='+' onClick={handleSumNumbers}/>
        </Row>
        <Row>
          <Button Label='1' onClick={() => handleAddNumber('1')}/>
          <Button Label='2' onClick={() => handleAddNumber('2')}/>
          <Button Label='3' onClick={() => handleAddNumber('3')}/>
          <Button Label='=' onClick={handleEquals}/>
        </Row>
        <Row>
          <Button Label='°°' />
          <Button Label='0' onClick={() => handleAddNumber('0')}/>
          <Button Label='°°' />
          <Button Label='°°'/>
        </Row>
      </Content>
    </Container>
  );
}

export default App;
