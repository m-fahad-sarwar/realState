import React from 'react'
import { useDispatch , useSelector} from 'react-redux'
import { useEffect } from 'react'
import Products from '../components/properties/properties'
import { Typography } from '@mui/material'
import { fetchProducts } from '../store/ProductsSlice'
import Slider from '../components/slider/Slider'
import { isLoginUser } from '../store/AuthSlice'
import Footer from '../components/footer/Footer'

export default function HomePage() {
  const data = useSelector(store => store.products.data)
  const Dispatch = useDispatch()
  useEffect(() => {
    Dispatch(fetchProducts())
    Dispatch(isLoginUser())
 
  }, [])
  return (
    <div>
        <Slider/>
        <Typography variant='h2' textAlign='center' marginY={4}>Explore our website</Typography>

        <Products data={data}/>
        <Footer/>
    </div>
  )
}
