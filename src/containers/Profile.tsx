import {Container, Typography} from "@mui/material";
import UserList from "../components/UserList";
import axiosApi from "../axiosApi";
import React, {useEffect} from "react";
import {useGlobalState} from "../state";

const Profile: React.FC = () => {

    const [profile, setProfile] = useGlobalState('profile');

    useEffect(() => {
        const getProfile = async () => {
            const response = await axiosApi.get('/users/1');
            setProfile(response.data);
        };

        getProfile();
    }, [])

    return (
        <Container>
            <Typography variant="h4" sx={{marginTop: '35px', textAlign: 'center'}}>
                PROFILE
            </Typography>
            <UserList arr={profile}/>
        </Container>
    )
};

export default Profile;