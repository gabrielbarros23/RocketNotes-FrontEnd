import {useEffect, useState} from 'react'
import {useAuth} from '../../hooks/auth'
import {Container, Form, Avatar } from './style'
import {api} from '../../services/api'
import { useNavigate } from 'react-router-dom'
import {Input} from '../../components/Input'
import {Button} from '../../components/Button'
import avatarPlaceholder from '../../assets/avatar_placeholder.svg'
import {FiArrowLeft, FiUser, FiMail, FiLock, FiCamera} from 'react-icons/fi'


export function Profile(){
    const {user, updateProfile} = useAuth()
    const navigate = useNavigate()

    const [name, setName] = useState(user.name)
    const [email, setEmail] = useState(user.email)
    const [passwordOld, setPasswordOld] = useState()
    const [passwordNew, setPasswordNew] = useState()

    const [avatar, setAvatar] = useState()
    const [avatarFile, setAvatarFile] = useState(null)

    function handleBack(){
		navigate(-1)
	}

    async function handleUpdate(){
        const updated = {
            name: name,
            email: email,
            password: passwordNew,
            oldpassword: passwordOld
        }

        const userUpdated = Object.assign(user, updated)
       await updateProfile({user: userUpdated, avatarFile})
    }

    function handleChangeAvatar(e){
        const file = e.target.files[0]
        setAvatarFile(file)
        
        const imagePreview = URL.createObjectURL(file);
        setAvatar(imagePreview)
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
    },[avatar])

    return(
        <Container>
            <header>
                <button onClick={handleBack}><FiArrowLeft/></button>
            </header>
            <Form>
                <Avatar>
                    <img 
                        src={avatar || avatarPlaceholder} 
                        alt="" 
                    />

                    <label htmlFor="avatar">
                        <FiCamera/>
                        <input 
                            id="avatar"
                            type="file" 
                            onChange={handleChangeAvatar}
                        />
                    </label>
                </Avatar>
                <Input 
                    type='text' 
                    placeholder='Nome' 
                    icon = {FiUser}
                    value = {name}
                    onChange={e => setName(e.target.value)}
                />
                <Input 
                    type='text' 
                    placeholder='Email' 
                    icon = {FiMail}
                    value = {email}
                    onChange={e => setEmail(e.target.value)}

                />
                <Input 
                    type='password' 
                    placeholder='Senha Atual' 
                    icon = {FiLock}
                    value = {passwordOld}

                    onChange={e => setPasswordOld(e.target.value)}

                />
                <Input 
                    type='password' 
                    placeholder='Nova Senha' 
                    icon = {FiLock}
                    value = {passwordNew}

                    onChange={e => setPasswordNew(e.target.value)}

                />

                <Button title='Salvar' onClick={handleUpdate}/>
            </Form>
        </Container>
    )
}