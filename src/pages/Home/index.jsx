import {Container, Brand, Menu, Search, Content, NewNote} from './style'
import { useNavigate } from 'react-router-dom'
import {useState, useEffect} from 'react'
import { Header } from '../../components/Header'
import { ButtonText } from '../../components/ButtonText'
import { FiPlus, FiSearch } from 'react-icons/fi'
import { Input } from '../../components/Input'
import { Note } from '../../components/Note'
import { Section } from '../../components/Section'
import { api } from '../../services/api'



export function Home() {
    const [tags, setTags] = useState([])
    const [tagsSelected, setTagsSelected] = useState([])
    const [search, setSearch] = useState("")
    const [notes, setNotes] = useState([])



    function handeTagSelected(tagName) {
        if(tagName === "all"){
            return setTagsSelected([])
        }

        const tagsExist = tagsSelected.includes(tagName)

        if(tagsExist) {
            setTagsSelected(tagsSelected.filter(tag => tag !== tagName))
        }else{
            setTagsSelected(prevState => [...prevState, tagName])
        }
        


    }

    const navigate = useNavigate()
    function handleDetails(id){
        navigate(`/details/${id}`)
    }

    useEffect(() => {
        async function fetchTags() {
            const response = await api.get('/tags')
            setTags(response.data)
        } 
        fetchTags()
    }, [])

    useEffect(() => {
        async function fecthNotes () {
            const response = await api.get(`/notes?title=${search}&tags=${tagsSelected}`)
            setNotes(response.data)
        }
        fecthNotes()
    }, [tagsSelected, search])
    return(
        <Container>
            <Brand>
                <h1>Rocketnotes</h1>
            </Brand>

            <Header/>
            
            <Menu>
                <li>
                    <ButtonText 
                        title="Todos"
                        onClick={() => handeTagSelected("all")}
                        IsActive={tagsSelected.length === 0}
                    />
                </li>
                {
                    tags && tags.map((tag) => (
                        <li key={tag.id}>
                            <ButtonText 
                                title={tag.name}
                                onClick={() => handeTagSelected(tag.name)}
                                IsActive={tagsSelected.includes(tag.name)}
                            />
                        </li>
                    ))
                }
            </Menu>

            <Search>
                <Input 
                    placeholder="Pesquisar pelo título" 
                    icon={FiSearch}
                    onChange={(e) => setSearch(e.target.value)}
                />
            </Search>

            <Content>
                <Section title="Minhas notas">
                   { 
                        notes.map((note) => (
                            <Note 
                            key={String(note.id)}
                            data={note}
                            onClick={() => handleDetails(note.id)}
                            />
                        ))
                    }
                </Section>
            </Content>

            <NewNote to="/new">
                <FiPlus/>
                Criar Nota
            </NewNote>
        </Container>
    )
}