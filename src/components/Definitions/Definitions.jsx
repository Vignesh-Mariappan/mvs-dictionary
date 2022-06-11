import React from 'react';
import SingleMeaning from '../SingleMeaning/SingleMeaning';
import './Definitions.css';

const Definitions = ({ word, category, searchData, mode }) => {

  return (
    <div className='meanings' style = {{ fontWeight: '100' }}>
      {
          (word && category === 'en' && searchData[0]) && <audio src = { searchData[0].phonetics[0] && searchData[0].phonetics[0].audio } style = {{ backgroundColor: 'white', borderRadius: '10px' }} controls className = 'audio'>
            Your browser doesn't support audio
          </audio>
      }
      {word === '' ? (
        <span className='subtitle' style = {{ color: 'whitesmoke' }}>Start by typing a word to search</span>
      ) : (
        <SingleMeaning searchData = { searchData }  mode = { mode }/>
      )}
    </div>
  );
};

export default Definitions;

