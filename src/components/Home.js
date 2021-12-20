import React from 'react';
import { useState, useEffect } from 'react'
import { Container } from '@mui/material';
import UserCard from './UserCard';
import axios from 'axios';

export default function Home({classes}) {
    const [userData, setUserData] = useState([]);
    useEffect(() => {
        axios.post('https://api.meetworks.in/users/get_unique_jobseeker_profile', {
            jobseeker_id: "614b410c2c4b197356a37f18"
        }).then(function (response) {
            setUserData(response.data);
            console.log(userData)
        })
    }, [])
    return (
        <>
            <Container className={classes.cardContainer} >
                {userData.map((user, id) => (
                    <UserCard key={id} user={user} classes={classes} />
                ))}
            </Container>
        </>
    )
}
