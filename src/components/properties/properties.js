import React from 'react'
import { Box } from '@mui/system'
import { Button, Typography } from '@mui/material'
import './style.css'
import UseProperties from './UseProperties'

export default function Properties() {
  const { data , contactHandeler } = UseProperties()
  return (
    <div className='container'>
      {
        data.map((data, i) => {
          return (

            <div key={i} className='card' style={{marginTop: 20}}>

              <img src={data.imgSrc} className='cardImg' />
              <Box className='box'>

                  <Typography><span style={{fontWeight : 'bold'}}>Title  :</span>   {data.title}</Typography>
                  <Typography> <span style={{fontWeight : 'bold'}}>location :</span>{data.location}</Typography>
                  <Typography><span style={{fontWeight : 'bold'}}> No of Bed Rooms :</span>{data.noOfBedRooms}</Typography>
                  <Typography><span style={{fontWeight : 'bold'}}>No of BathRooms :</span>{data.noOfBathRooms}</Typography>
                  <Typography><span style={{fontWeight : 'bold'}}>No of Kitchen  :</span>{data.noOfKitchen}</Typography>
                  <Typography><span style={{fontWeight : 'bold'}}>Price  :</span>{data.price}</Typography>
                  
          

                  <Button variant='contained'  onClick={()=>  contactHandeler(data.contactNo)} >Contact Seller</Button>
              </Box>
            </div>

          )

        })}
    </div>
  )
}
