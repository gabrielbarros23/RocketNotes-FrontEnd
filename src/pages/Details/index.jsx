import {Container, Links, Content} from './styles'
import { useState, useEffect } from 'react'
import { useParams, useNavigate } from 'react-router-dom'
import { api } from '../../services/api'
import { Header } from '../../components/Header'
import { Button } from '../../components/Button'
import { ButtonText } from '../../components/ButtonText'
import { Section } from '../../components/Section'
import { Tags } from '../../components/Tags'

export function Details() {
	const [data, setData] = useState(null)

	const params = useParams()
	const navigate = useNavigate()

	function handleBack(){
		navigate(-1)
	}

	async function handleDelete(){
		const confirm = window.confirm('Você tem certeza que deseja apagar essa nota')

		if(confirm){
			await api.delete(`/notes/${params.id}`)
			navigate("/")
		}
	}

	useEffect(()=> {
		async function fecthNote(){
			const response = await api.get(`/notes/${params.id}`)
			setData(response.data)
		}
		fecthNote()
	},[])
	return (
		<Container>
			<Header/>
			{
				data && 
				<main>
					<Content>

						<ButtonText title="Exluir a nota" onClick={handleDelete}/>

						<h1>{data.title}</h1>

						<p>{data.description}</p>

						{ data.links &&
							<Section title="Links úteis">
								<Links>
								{
									data.links.map(link => (
										<li key={link.id}>
											<a href={link.url} target="_blank">
												{link.url}
											/</a>
										</li>
									))
								}
								</Links>
							</Section>
						}

						{ data.tags &&
							<Section title="Marcadores">
								{ data.tags.map(tag => (
									<Tags title={tag.name}/>
								))
								}
							</Section>
						}

						<Button title="Voltar" loading={false} onClick={handleBack}></Button>
					</Content>
				</main>
			}
		</Container>
	)
}