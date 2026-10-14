import React from 'react'
import Header from '../components/Header'
import Form from '../components/Form'
import UsersData from '../components/UsersData'
import { useState } from 'react'

function PhoneDirectory() {

  const [editContact , setEditContact] = useState({})
      const [refresh, setRefresh] = useState(0);
  return (
    <>
      <div className='bg-dark min-vh-100 overflow-auto hide-scrollbar'>
        <Header />
        <Form  setRefresh={setRefresh} edit={editContact}/>
        <UsersData
          refresh={refresh}
          edit={editContact}
          setEdit={setEditContact} 
        />
      </div>

    </>
  )
}

export default PhoneDirectory