import { useAuth } from '../../hooks/auth'
import { Container, Form, Background } from './style'
import {useState} from "react"
import { Link } from 'react-router-dom'	
import { Input } from '../../components/Input'
import {FiMail, FiLock} from 'react-icons/fi'
import { Button } from '../../components/Button'

export function SingIn(){
    const [email, setEmail] = useState("")
    const [password, setPassword] = useState("")

    const {singIn, user} = useAuth()

    function handleSingIn(){
        singIn({email, password})

    }


   

    return(
        <Container>
            <Form>
                <h1>Rocket Notes</h1>
                <span>Aplicação para salvar e gerenciar seus links uteis</span>
                <h2> Faça seu login </h2>

                <Input type='text' icon={FiMail} placeholder="Email" onChange={e => setEmail(e.target.value)}/>
                <Input type='password' icon={FiLock} placeholder="Senha" onChange={e => setPassword(e.target.value)}/>

                <Button title="Entrar"  onClick={handleSingIn}/>

                <Link to="/register">Criar Conta</Link>
            </Form>
            <Background/>


        </Container>
    )

}