import React,{useEffect} from 'react'
import axios from 'axios'
import {useForm} from 'react-hook-form'

const resetDefault ={
    first_name: "",
    last_name: "",
    email: "",
    password:"",
    birthday: ""
}
const Form = ({getAllUsers, toggleModal, updateInfo, setUpdateInfo}) => {
 
    const {register, reset, handleSubmit} = useForm()

    const createUser = data => {
    const URL = 'https://users-crud1.herokuapp.com/users/'
    axios.post(URL, data)
    .then(res => {
    getAllUsers()
    toggleModal(false)
    })
    .catch(err => console.log(err))
}


useEffect(() => {
    reset(updateInfo)
}, [updateInfo])

    const updateUser = data => {
    const URL = `https://users-crud1.herokuapp.com/users/${updateInfo.id}/`
	axios.patch(URL, data)
	    .then(res => getAllUsers())
	    .catch(err => console.log(err))
    }
    const submit = data => {
	if(updateInfo){
	    updateUser(data)
	    setUpdateInfo()
	    toggleModal(false)
	    
	}else{
	createUser(data)
	}

	reset(resetDefault)
    } 

const resetForm = () => {
    toggleModal()
    setUpdateInfo()

}

    return (
<div className='bg-[#111111bd] fixed top-0 bottom-0 left-0 right-0 w-full h-full mx-auto flex items-center justify-center '>
    <div className='relative w-[330px] rounded-[2px] sm:w-[450px] py-3 mx-auto  bg-[#F7F5FB] flex flex-col px-3 '>
	<button className='absolute text-2xl text-black top-3 right-4'  onClick={resetForm}><i className='bx bx-x' ></i></button>
	<form onSubmit={handleSubmit(submit)}>
	    <h3 className='my-5 text-xl font-bold'>{updateInfo? "Edit User" : "Create new user"}</h3>
	    <label className='text-[15px]' htmlFor="name">Name</label>
	    <input className='outline-none w-[95%] mbot py-2 px-2 rounded-md '  type="text" id='name'  {...register("first_name")}/>
	    <label className='text-[15px]' htmlFor="lastname">Last Name</label>
	    <input className='outline-none w-[95%] mbot py-2 px-2 rounded-md'type="text" id='lastname' {...register("last_name")}/>
	    <label className='text-[15px]'htmlFor="email">Email</label>
	    <input  className='outline-none w-[95%] mbot py-2 px-2 rounded-md'type="text" id='email' {...register("email")}/>
	    <label className='text-[15px]'htmlFor="password">Password</label>
	    <input className='outline-none w-[95%] mbot py-2 px-2 rounded-md'type="password" id='password' {...register("password")}/>
	    <label className='text-[15px]'htmlFor="release-date">Birthday</label>
	    <input className='outline-none w-[95%] mbot py-2 px-2 rounded-md'type="date" id='release-date' {...register("birthday")}/>

	    <button className='w-[95%] bg-[#555A88] py-2 text-white my-6'>{updateInfo? "Update" : "Create"}</button>
	</form>
    </div>
</div>
  )
}

export default Form
