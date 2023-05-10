import { RiShutDownLine} from 'react-icons/ri'
import { Container, Profile, Logout } from "./style";
import {api} from '../../services/api'
import avatarPlaceholder from '../../assets/avatar_placeholder.svg'
import {useAuth} from '../../hooks/auth'
import { useNavigate } from 'react-router-dom';
import { useEffect, useState } from 'react';

export function Header() {

    const {singOut, user} = useAuth()
    const [avatar, setAvatar] = useState()

    const navigate = useNavigate()

    function handleSingOut(){
        navigate("/")
        singOut()
    }

    useEffect(() => {
        async function handleAvatar(){

            if(user.avatar){
                try{
                    await api.get(`/files/${user.avatar}`)
                    setAvatar(`${api.defaults.baseURL}/files/${user.avatar}`)
                }catch{
                    setAvatar(avatarPlaceholder)
                }
            }
        }
        handleAvatar()
    },[])

    return(
        <Container>
            <Profile to="/profile">
                <img src={avatar || avatarPlaceholder} alt="" />

                <div>
                    <span>Bem vindo</span>
                    <strong>{user.name}</strong>
                </div>
            </Profile>
            
            <Logout onClick={handleSingOut}>
                <RiShutDownLine/>
            </Logout>
        </Container>
    )
}