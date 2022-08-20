import React from 'react'

const ModalDelete = ({user, deleteUser, toggleModalDelete}) => {
    return (
    <div className='bg-[#111111bd] fixed top-0 bottom-0 left-0 right-0 w-full h-full mx-auto flex items-center justify-center'>
	<div className='relative w-[350px] bg-[#F7F5FB] rounded-xl py-2 px-4'>
	<button onClick={toggleModalDelete} className='absolute text-black top-3 right-5 text-[22px]'><i className='bx bx-x' ></i></button>
	    <h3 className='my-5 text-xl font-bold'>Eliminar Usuario</h3>
	    <p className='text-[14px]'>el usuarios <strong>{user.first_name} {user.last_name} </strong> sera eliminado</p>
	    <button onClick={() => deleteUser(user.id)} className='w-[95%] bg-[#555A88] py-2 text-white my-6'>Aceptar</button>
	</div>

	</div>
    )
}

export default ModalDelete
