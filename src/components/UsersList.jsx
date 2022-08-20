import React,{useState} from 'react'
import axios from 'axios'
import ModalDelete from './ModalDelete'

const UsersList = ({user, getAllUsers, setUpdateInfo, toggleModal}) => {

const [modalDelete, setModalDelete ] = useState(false)

    const deleteUser = (id) =>{
	const URL = `https://users-crud1.herokuapp.com/users/${id}/`
	axios.delete(URL)
	    .then(res => getAllUsers())
	    .catch(err => console.log(err))
	
    }


    const toggleModalDelete = () =>{
	setModalDelete(!modalDelete)
    } 

    const handleUpdate = () =>{
	setUpdateInfo(user)
	toggleModal(true)
    }

    return (
	<div className='w-[340px] sm:w-[360px] bg-[#F7F5FB] py-2 rounded-xl '>
	    <div className='mx-3 text-left'>
		<h2 className='my-3 text-center text-[25px] font-bold'>{`${user['first_name']} ${user['last_name']}`}</h2>
		<p className='text-[11px] text-gray-400'>EMAIL</p>
		<p className='mbot'>{user.email}</p>
		<p className='text-[11px] text-gray-400'>BIRTHDAY</p>
		<p className='mbot'>{user.birthday}</p>
	    </div>
	    <div className='flex justify-end w-full px-3 gap-1'>
		<button onClick={ toggleModalDelete} className=' w-[35px] aspect-square bg-red-500 text-white rounded-md'><i className='bx bx-trash'></i></button>
		{
		    modalDelete !== true?  "" : <ModalDelete user={user}
							     toggleModalDelete={toggleModalDelete}
							    deleteUser={deleteUser}/>
		}
		<button onClick={handleUpdate} className=' w-[35px] aspect-square bg-gray-300 rounded-md'><i className='bx bx-pencil'></i></button>
	    </div>
	</div>
    )
}
export default UsersList
