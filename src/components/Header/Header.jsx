import React from 'react';

import categories from '../../data/categories';
import { TextField, MenuItem, Select } from '@mui/material';
import { ThemeProvider, createTheme } from '@mui/material/styles';
import './Header.css';

const Header = ({ category, setCategory, word, setWord, mode }) => {
    /* darkTheme and ThemeProvider are used to make react material ui components to look better in the darker screen */
    const darkTheme = createTheme({
        palette: {
          mode: mode ==='dark' ? 'dark' : 'light',
        },
      });

    const handleSelectChange = language => {
        // set the category to new language selected
        setCategory(language);

        // clear the search input field 
        setWord('')
    }

    return (
        <div className = "header">
           <span className = "title">MV's Dictionary</span> 
           <div className = "inputs">
                <ThemeProvider theme={darkTheme}>
                    <TextField className = "search" label="Search a word" variant="standard" value = { word }
                    onChange = { (event) => setWord(event.target.value) } />
                    <TextField
                        className = "select"
                        select
                        label="Select"
                        helperText="Please select your language"
                        value = { category }
                        onChange = { (event) => handleSelectChange(event.target.value) }
                        >
                            {
                                categories.map(category => <MenuItem key = { category.label } value = { category.label }>{ category.value }</MenuItem>
                                )
                            }
                        </TextField>
                </ThemeProvider>
           </div>
        </div>
    )
}

export default Header;
