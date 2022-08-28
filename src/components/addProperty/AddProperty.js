import React from 'react'
import UseAddProperty from './UseAddProperty'
import { Box, Button, TextField, Typography } from '@mui/material'

export default function AddProperty() {
  const {
    title,
    setTitle,
    location,
    setLocation,
    noOfBedRooms,
    setNoOfBedRooms,
    noOfBathRooms,
    setNoOfBathRooms,
    noOfKitchen,
    setNoOfKitchen,
    price,
    sePrice,
    imgSrc,
    setImgSrc,
    addHandeler,
    setContactNo,
    contactNo

    
  } = UseAddProperty()
  return (
    <>
        <Typography variant='h2' style={{ margin: 10 } } textAlign='center'>AddProperty</Typography>

    <Box style={{margin: 'auto' ,display: 'flex', flexWrap: 'wrap' , width: '50%' , justifyContent: 'center', borderBlockColor: 'black'}} className='addBox'>

    <TextField variant='outlined' label='Title' value={title} onChange={(e) => setTitle(e.target.value)} style={{ margin: 10}} />
    <TextField variant='outlined' label='Location' value={location} onChange={(e) => setLocation(e.target.value)} style={{ margin: 10 }} />
    <TextField variant='outlined' label='No of BedRooms' value={noOfBedRooms} onChange={(e) => setNoOfBedRooms(e.target.value)} style={{ margin: 10}} />
    <TextField variant='outlined' label='No of BathRooms' value={noOfBathRooms} onChange={(e) => setNoOfBathRooms(e.target.value)} style={{ margin: 10}} />
    <TextField variant='outlined' label='No of Kitchen' value={noOfKitchen} onChange={(e) => setNoOfKitchen(e.target.value)} style={{ margin: 10,width: 200 }} />
    <TextField variant='outlined' label='Price' value={price} onChange={(e) => sePrice(e.target.value)} style={{ margin: 10,width: 200 }} />
    <TextField variant='outlined' label='Contact No' value={contactNo} onChange={(e) => setContactNo(e.target.value)} style={{ margin: 10,width: 200 }} />
    <TextField variant='outlined' label='Img' value={imgSrc} onChange={(e) => setImgSrc(e.target.value)} style={{ margin: 10,width: 200 }} />
    
  
  <Button variant='contained' style={{ margin: 10 }} onClick={addHandeler}>Add Property</Button>
  </Box> 
    </>
   )
}
