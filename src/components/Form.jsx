
import { useState, useEffect } from 'react'
import { SendContactData, UpdateUserContact } from '../assets/FetchApi'

function Form({ setRefresh, edit }) {
    
    let BASE_URL = "http://localhost:7000/users"
    const [user, setUser] = useState({
        name: '',
        phonenumber: '',
        age: '',
        city: ''
    })

    useEffect(() => {
        if (edit) {
            setUser({
                name: edit.name || '',
                phonenumber: edit.phonenumber || '',
                age: edit.age || '',
                city: edit.city || ''
            })
            UpdateUserContact(BASE_URL, edit.id, user)
        }
    }, [edit])

    async function handleClick(e) {
        e.preventDefault()
        setUser(user)
        await SendContactData(BASE_URL, user)
        setUser({
            name: '',
            phonenumber: '',
            age: '',
            city: ''
        })

        setRefresh(prev => prev + 1)
    }

    function handleChange(e) {
        const { name, value } = e.target;
        setUser((prev) => ({ ...prev, [name]: value }));

    }

    return (
        <>
            <div className='container p-3 bg-dark'>
                <form className='' action="" onSubmit={handleClick}>
                    <div className="row">
                        <div className="col-6 d-flex flex-column gap-2 mb-4">
                            <label className='text-light fs-5 fw-bold' >Name</label>
                            <input
                                className=' p-2 border border-secondary rounded-2 bg-dark text-light w-75'
                                placeholder='Enter Name....'
                                value={user.name}
                                onChange={handleChange}
                                name='name'
                                type="text"
                            />
                        </div>

                        <div className="col-6 d-flex flex-column gap-2 mb-4">
                            <label className='text-light fs-5 fw-bold' >Phone Number</label>
                            <input
                                className='p-2 border border-secondary rounded-2 bg-dark text-light w-75'
                                placeholder='Enter Phone Number....'
                                name='phonenumber'
                                value={user.phonenumber}
                                onChange={handleChange}
                                maxLength={10}
                                type="tel"
                            />
                        </div>

                        <div className="col-6 d-flex flex-column gap-2 mb-4">
                            <label className='text-light fs-5 fw-bold' >Age</label>
                            <input
                                className='p-2 border border-secondary rounded-2 bg-dark text-light w-75'
                                placeholder='Enter Age...'
                                value={user.age}
                                onChange={handleChange}
                                name='age'
                                type="text"
                            />
                        </div>

                        <div className="col-6 d-flex flex-column gap-2 mb-4">
                            <label className='text-light fs-5 fw-bold'>City</label>
                            <input
                                className='p-2 border border-secondary rounded-2 bg-dark text-light w-75'
                                placeholder='Enter City...'
                                value={user.city}
                                onChange={handleChange}
                                name='city'
                                type="text"
                            />
                        </div>
                    </div>
                    <button type="submit" className='bg-primary border-0 text-light px-5 py-2 rounded-2'>Add</button>
                </form>
            </div>
        </>
    )
}

export default Form