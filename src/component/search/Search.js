import React from 'react'
import SearchIcon from '@mui/icons-material/Search';
import { Box, InputAdornment, TextField } from '@mui/material';

const Search = () => {
  return (
    <Box sx={{ minWidth: 120 }} className="col-lg-3 col-md-3 col-4">
              <TextField
                id="outlined-basic"
                variant="outlined"
                InputProps={{
                  startAdornment: (
                    <InputAdornment position="start">
                      <SearchIcon />
                    </InputAdornment>
                  ),
                }}
              />
            </Box>
  )
}

export default Search
