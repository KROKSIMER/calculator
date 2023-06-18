import './App.css';
import { Box, Text, Button, Input } from '@chakra-ui/react';
import Buttons from './components/Buttons';
import { useState } from 'react';

function App() {
  const [count, setCount] = useState('');
  const [count2, setCount2] = useState('');
  const [result, setResult] = useState('0');
  const [operator, setOperator] = useState('');
  const handleKeyPress = (e) => {
    if(!/[0-9]/.test(e.key)){
      e.preventDefault();
    }
  }
  const inputChager = (e) => {
    setCount(e)
  }
  const secondCount = (e) => {
    
    if (e === "C"){
      setCount('')
    }
    else if (e === 'del') {
      setCount('');
      setCount2('')
      setResult('0')
    }
    else if (e === '+') {
      setCount2(count);
      setResult(count + ' + ');
      setOperator(' ' + e + ' ');
      setCount('');
    }
    else if (e === '-') {
      setCount2(count);
      setResult(count + ' - ');
      setOperator(' ' + e + ' ');
      setCount('');
    }
    else if (e === '*') {
      setCount2(count);
      setResult(count + ' x ');
      setOperator(' ' + e + ' ');
      setCount('');
    }
    else if (e === '/') {
      setCount2(count);
      setResult(count + ' ÷ ');
      setOperator(' ' + e + ' ');
      setCount('');
    }
    else if (e === '<-') {
      setCount(count.slice(0, -1));
    }
    else if (e === '='){
      setResult(count2 + operator + count + ' =');
      setCount(String(eval(Number(count2) + operator + Number(count))));
      setCount2(count);
    }
    else {
      setCount(count + e);
    }
  }
  return (
    <Box display="flex" justifyContent="center" alignItems="center" h="100vh">
      <Box className='calcBox'>
        <Box>
          <Text className='result' fontSize="xl">{result}</Text>
          <Input className='counterInput' placeholder="0" size="2lg" onKeyPress={handleKeyPress} onChange={(event) =>  inputChager(event.target.value)} value={count}/>
        </Box><hr />
        <Box>
          <Buttons buttonHandler={secondCount}/>
        </Box>
      </Box>
    </Box>
  );
}

export default App;
