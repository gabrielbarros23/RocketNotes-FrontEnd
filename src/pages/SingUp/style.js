import styled from 'styled-components'
import BackgroundIMG from '../../assets/background.png'


export const Container = styled.div`
    height:100vh;
    
    display: flex;
    align-items: stretch;
    overflow-x: scroll;
    overflow-wrap: normal;

`

export const Form = styled.form`
    padding: 0 136px;
    display: flex;
    flex-direction: column;
    justify-content: center;
    align-items: center;

    >h1{
        color: ${({theme}) => theme.COLORS.ORANGE};
        font-weight: 700;
        font-size:48px;
    }

    >span{
        margin-bottom: 68px;
        color: ${({theme}) => theme.COLORS.GRAY_100};
    }

    >h2 {
        margin-bottom:48px;
        font-size:24px;
        font-weight: 500;
    }

    >a{
        text-decoration:none;
        color: ${({theme}) => theme.COLORS.ORANGE};
        margin-top: 80px
    }
    
`

export const Background = styled.div`
    flex: 1;
    background: url(${BackgroundIMG}) no-repeat center center;
    background-size: cover;
    filter: brightness(0.4)
`