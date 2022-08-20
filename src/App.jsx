import axios from 'axios'
import {useEffect, useState} from 'react'
import UsersList from './components/UsersList'
import Form from './components/Form'

function App() {
    const [users, setUsers] = useState()
    const [modal, setModal] = useState(false)
    const [updateInfo, setUpdateInfo] = useState()

    const URL = 'https://users-crud1.herokuapp.com/users/'

    const getAllUsers = () => {
	axios.get(URL)
	    .then(res => setUsers(res.data))
	    .catch(err => console.log(err))
    }

    useEffect(() => {
        getAllUsers()
    }, [])

    const toggleModal = () => {
	setModal(!modal)
	
    }

  return (
      <div className=" mx-auto w-[100%] py-3  max-w-7xl my-3  ">
	  <div className='w-[90%]  mx-auto flex items-center justify-between py-2 lg:w-[85%] sm:justify-between sm:mx-auto' >
	    <h1 className='text-2xl font-bold  sm:text-[33px]'>Usuarios</h1>
	    <button className='flex items-center gap-2 p-2 mx-2 bg-[#555A88] text-white rounded-md text-xs sm:text-[17px]' onClick={toggleModal}><i className='bx bx-plus-medical'></i> Create new user</button>
	</div>
	    
	    {
		modal !== true ? " " : <Form  getAllUsers={getAllUsers}
						toggleModal={toggleModal}
						setUpdateInfo={setUpdateInfo}
						updateInfo = {updateInfo} />
	    }
	
	<div className='flex flex-wrap justify-center w-full mx-auto my-4 gap-5'>
	    {
		users?.map(user => (
		    <UsersList key={user.id}
				user={user}
				getAllUsers={getAllUsers}
				setUpdateInfo={setUpdateInfo}
				toggleModal={toggleModal}/>
		))
	    }
	</div>
    </div>
  )
}

export default App
