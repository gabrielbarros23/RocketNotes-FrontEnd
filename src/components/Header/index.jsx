import { RiShutDownLine} from 'react-icons/ri'
import { Container, Profile, Logout } from "./style";
import {api} from '../../services/api'
import avatarPlaceholder from '../../assets/avatar_placeholder.svg'
import {useAuth} from '../../hooks/auth'
import { useNavigate } from 'react-router-dom';

export function Header() {

    const {singOut, user} = useAuth()
    const avatarUrl = user.avatar ? `${api.defaults.baseURL}/files/${user.avatar}` : avatarPlaceholder
    const navigate = useNavigate()

    function handleSingOut(){
        navigate("/")
        singOut()
    }


    return(
        <Container>
            <Profile to="/profile">
                <img src={avatarUrl} alt="" />

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