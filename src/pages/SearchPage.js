import { Box, Button, TextField, Typography } from '@mui/material'
import React from 'react'
import SearchOutlinedIcon from '@mui/icons-material/SearchOutlined';
import { useState } from 'react';
import { onSearch } from '../store/SearchSlice';
import { useDispatch } from 'react-redux';
import SearchPropertites from '../components/searchProperties/SearchProperties';


export default function SearchPage() {
  const [item, setItem] = useState('')
  const Dispatch = useDispatch()
  const searchHandeler = () => {
    let data = {
      item
    }
    Dispatch(onSearch(data))
  }

  return (<>
    <div style={{ display: 'flex', justifyContent: 'center', paddingTop: 20 }}>
      <Box style={{}}>

        <TextField variant='filled' label='Search' style={{ width: 200 }} value={item} onChange={(e) => setItem(e.target.value)} />
        <Button variant='contained' style={{ height: 50 }} onClick={searchHandeler}>
          <SearchOutlinedIcon />
        </Button>
      </Box>
    </div>
    <SearchPropertites />
    <Typography variant='h4' margin={10} >Results :</Typography>
  </>
  )
}
