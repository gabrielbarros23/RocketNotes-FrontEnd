import { Container, Form } from './style'
import { Header } from '../../components/Header'
import { Input } from '../../components/Input'
import { Textarea } from '../../components/Textarea'
import { Section } from '../../components/Section'
import { NoteItem } from '../../components/NoteItem'
import { Button } from '../../components/Button'
import { ButtonText } from '../../components/ButtonText'
import { useState } from 'react'
import {api} from '../../services/api'
import { useNavigate } from 'react-router-dom'


export function New() {
    const navigate = useNavigate()
    const [title, setTitle] = useState("")
    const [description, setDescrition] = useState("")

    const [links, setLinks] = useState([])
    const [newLink, setNewLink] = useState("")

    const [tags, setTags] = useState([])
    const [newTag, setNewTag] = useState("")

    function handleBack(){
        navigate(-1)
    }

    function handleAddTag(){
        setTags(prevState => [...prevState, newTag])
        setNewTag("")
    }

    function handlRemoveTag(deleted){
        setTags(prevState => prevState.filter(links => links !== deleted))
    }


    function handleAddLink(){
        setLinks(prevState => [...prevState, newLink])
        setNewLink("")
    }

    function handleRemoveLink(deleted){
        setLinks(prevState => prevState.filter(link => link !== deleted))
    }


    async function newNote(){
        if(!title){
            return alert('digite o titulo da nota')
        }
        
        if(newLink) {
            return alert("Você deixou um link no campo para adicionar, mas não clicou em adicionar. Clique para adicionar ou deixe o campo vazio.")
        }

        if(newTag) {
            return alert("Você deixou uma tag no campo para adicionar, mas não clicou em adicionar. Clique para adicionar ou deixe o campo vazio.")
        }

        const note = {
            title,
            description,
            tags,
            links
        }
        await api.post('/notes', note)

        alert("Nota criada com sucesso")
        navigate(-1)
    }
    
    return(
        <Container>
            <Header/>

            <main>
                <Form>
                    <header>

                        <h1>Criar nota</h1>
                        <ButtonText title="Voltar" onClick={handleBack}>voltar</ButtonText>

                    </header>

                    <Input 
                        placeholder="Título" 
                        onChange={(e) => setTitle(e.target.value)}
                    />

                    <Textarea 
                        placeholder="Obeservações"
                        onChange={(e) => setDescrition(e.target.value)}
                    />

                    <Section title="Links úteis">
                        {
                         links.map((link, index) => (
                            <NoteItem 
                                key={String(index)}
                                onClick={() => handleRemoveLink(link)} 
                                value={link} 
                            />
                         ))
                        }

                        <NoteItem 
                            isNew 
                            placeholder="Novo link" 
                            onChange={e => setNewLink(e.target.value)}
                            onClick={handleAddLink} 
                            value={newLink} 
                        />
                    </Section>

                    <Section title="Marcadores">
                        <div className='tags'>
                            {
                                tags.map((tag, index) => (
                                    <NoteItem 
                                        key={String(index)}
                                        value={tag}
                                        onClick={() => handlRemoveTag(tag)}
                                    />
                                )
                                )
                            }

                            <NoteItem 
                                isNew 
                                placeholder="Novo marcador"
                                value={newTag}
                                onChange={e => setNewTag(e.target.value)}
                                onClick={handleAddTag}
                            />
                        </div>
                    </Section>
                    <Button 
                        title='Salvar'
                        onClick={newNote}
                    />
                </Form>
            </main>
        </Container>
    )
}