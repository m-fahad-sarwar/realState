import { useSelector } from "react-redux"
import { useNavigate } from "react-router-dom"
import {toast} from 'react-toastify'

export default function UsePorducts() {
const user  = useSelector(store=> store.auth.isUser)

const data = useSelector(store => store.search.data)
const navigate = useNavigate()
const contactHandeler = ()=>{
  if (user) {
    return alert('Contact Sucessfully')
  }else{
    toast('Please Login to Continue')
    navigate('/login')
  }

}
  return{
    data,
    contactHandeler
  }
}
