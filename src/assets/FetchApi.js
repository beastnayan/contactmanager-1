import React from 'react'
import axios from 'axios'

export async function GetData(url) {
    try {
        let userDetails = await axios.get(url)
        return userDetails
    } catch (error) {
        return error
    }
}


export async function SendContactData(url, newUserContactData) {


    try {
        let userDetails = await axios.post(url, newUserContactData)
        return userDetails
    } catch (error) {
        return error
    }
}

export async function GetSelectedUserContact(url, id) {

    console.log("edit", id);

    try {

        let userDetails = await axios.delete(`${url}/${id}`);
        return userDetails
    } catch (error) {
        return error
    }
}

export async function UpdateUserContact(url, data) {

    try {
        let userDetails = await axios.patch( `${url}/${user.id}`, data);
        return userDetails
    } catch (error) {
        return error
    }
}


export async function DeleteUserContact(url, id) {


    try {

        let userDetails = await axios.delete(`${url}/${id}`);

        return userDetails
    } catch (error) {
        return error
    }
}