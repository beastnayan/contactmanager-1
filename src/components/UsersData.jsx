import React from 'react'
import { useEffect, useState } from 'react'
import { Edit, Trash, Search } from 'lucide-react';

import {
    DeleteUserContact,
    GetData,
    GetSelectedUserContact
} from '../assets/FetchApi.js';

function UsersData({ setEdit, refresh }) {

    const [users, setUsers] = useState([])
    const [search, setSearch] = useState('')

    let BASE_URL = "http://localhost:7000/users"

    useEffect(() => {
        GetData(BASE_URL)
            .then(res => {
                setUsers(res.data)
            })
            .catch(error => console.log(error))
    }, [refresh])

    // search 
    const filteredUsers = users.filter((user) =>
        String(user.name || '')
            .toLowerCase()
            .includes(search.toLowerCase()) ||

        String(user.phonenumber || '')
            .includes(search) ||

        String(user.age ?? '')
            .includes(search) ||

        String(user.city || '')
            .toLowerCase()
            .includes(search.toLowerCase())
    )

    async function handelEdit(id) {
        let user = await GetSelectedUserContact(BASE_URL, id)
        setEdit(user.data)
    }

    async function handelDelete(id) {
        try {
            await DeleteUserContact(BASE_URL, id)

            setUsers((prevUsers) =>
                prevUsers.filter((user) => user.id !== id)
            )
        } catch (error) {
            console.log("Delete failed:", error)
        }
    }

    return (
        <>
            <div className='container p-3 unde mt-5 rounded-3'>

                <div className='container d-flex bg-secondary rounded-3 text-center justify-content-between align-content-center p-2'>

                    <h2 className='text-light'>Your Contacts...</h2>

                    <div className="text-light d-flex justify-content-end w-50">
                        <div className="border rounded-3 d-flex align-items-center">

                            <input
                                type="text"
                                className="form-control text-white bg-transparent t border-0 shadow-none"
                                placeholder="Search..."
                                value={search}
                                onChange={(e) => setSearch(e.target.value)}
                            />

                            <button
                                type="button"
                                className="btn text-light border-0"
                                onClick={() => {}}
                            >
                                <Search size={20} />
                            </button>

                        </div>
                    </div>
                </div>

                <div className='table-responsive'>
                    <table className="table border-light table-dark table-striped table-hover">

                        <thead>
                            <tr>
                                <th>Name</th>
                                <th>Phone Number</th>
                                <th>Age</th>
                                <th>City</th>
                                <th>Edit</th>
                                <th>Delete</th>
                            </tr>
                        </thead>

                        <tbody>
                            {filteredUsers.length > 0 ? (
                                filteredUsers.map((user) => (
                                    <tr key={user.id}>
                                        <td>{user.name}</td>
                                        <td>{user.phonenumber}</td>
                                        <td>{user.age}</td>
                                        <td>{user.city}</td>

                                        <td>
                                            <Edit
                                                onClick={() => handelEdit(user.id)}
                                                size={17}
                                            />
                                        </td>

                                        <td>
                                            <Trash
                                                onClick={() => handelDelete(user.id)}
                                                size={17}
                                            />
                                        </td>
                                    </tr>
                                ))
                            ) : (
                                <tr>
                                    <td colSpan="6" className="text-center">
                                        No contacts found
                                    </td>
                                </tr>
                            )}
                        </tbody>

                    </table>
                </div>
            </div>
        </>
    )
}

export default UsersData