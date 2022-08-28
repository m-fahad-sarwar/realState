import React from 'react'
import { useState } from 'react'
import { useDispatch } from 'react-redux'
import { addProduct } from '../../store/ProductsSlice'


export default function UseAddProperty() {
    const [title, setTitle] = useState('')
    const [location, setLocation] = useState('')
    const [noOfBedRooms, setNoOfBedRooms] = useState('')
    const [noOfBathRooms, setNoOfBathRooms] = useState('')
    const [noOfKitchen, setNoOfKitchen] = useState('')
    const [contactNo, setContactNo] = useState('')
    const [price, sePrice] = useState('')
    const [imgSrc, setImgSrc] = useState('')

    const Dispatch = useDispatch()

    const addHandeler = () => {
        // req.body. || !req.body. ||
        //  !req.body.
        let data = {
            title,
            location,
            noOfBedRooms,
            noOfBathRooms,
            noOfKitchen,
            price,
            imgSrc,
            contactNo
        }
        Dispatch(addProduct(data))
    }


    return {
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
        contactNo,
        setContactNo


    }
}
