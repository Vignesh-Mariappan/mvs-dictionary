import axios from 'axios';
import { useEffect, useState } from 'react';
import { alpha, Container, styled } from '@mui/material';
import './App.css';
import Header from './components/Header/Header';
import Definitions from './components/Definitions/Definitions.jsx';
import Switch from '@mui/material/Switch';
import { grey } from '@mui/material/colors';

function App() {
  const [searchData, setSearchData] = useState([]);
  const [word, setWord] = useState('');
  const [category, setCategory] = useState('en');
  const [mode, setMode] = useState('dark');

  const SwitchMode = styled(Switch)(({ theme }) => ({
    '& .MuiSwitch-switchBase.Mui-checked': {
      color: grey[600],
      '&:hover': {
        backgroundColor: alpha(grey[600], theme.palette.action.hoverOpacity),
      },
    },
    '& .MuiSwitch-switchBase.Mui-checked + .MuiSwitch-track': {
      backgroundColor: grey[600],
    },
  }));

  const dictionaryApi = async () => {
    try {
      const dictionaryData = await axios.get(`https://api.dictionaryapi.dev/api/v2/entries/${category}/${word}`);

      // console.log({dictionaryData});

      setSearchData(dictionaryData.data);
    } catch (error) {
      setSearchData([]);
      console.log(error);
    }
  };

  console.log({ searchData });

  useEffect(() => {
    dictionaryApi();
  }, [word, category]);

  return (
    <div className='App' style={{ height: '100vh', backgroundColor: mode === 'dark' ? '#282c34' : 'whitesmoke', color: mode === 'dark' ? 'whitesmoke' : '#282c34' }}>
      <Container maxWidth='md' style={{ display: 'flex', height: '100vh', flexDirection: 'column', position: 'relative' }}>
        <div style={{ position: 'absolute', top: '10px', right: '10px' }}>
          <span>{mode === 'dark' ? 'dark' : 'light'}</span>
          <SwitchMode checked={mode === 'dark'} onChange={() => setMode(mode === 'dark' ? 'light' : 'dark')} />
        </div>
        <Header category={category} setCategory={setCategory} word={word} setWord={setWord} mode={mode} />

        <Definitions word={word} category={category} searchData={searchData} mode={mode} />
        {/*  searchData.length > 0 ? ( <Definitions word = { word } category = { category } searchData = { searchData }/> ) : (<></>) */}
      </Container>
    </div>
  );
}

export default App;
