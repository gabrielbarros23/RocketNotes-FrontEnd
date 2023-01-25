import { Container} from './style'

export function ButtonText({title, IsActive = false, ...rest}) {
    return (
        <Container
            type='button'
            IsActive={IsActive}
            {...rest}
        >
            {title}
        </Container>
    )
}