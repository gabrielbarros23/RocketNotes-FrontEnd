import styled from 'styled-components'

export const Container = styled.div`
    width: 100%;

    >header {
        width: 100%;
        height: 144px;

        background: ${({theme}) => theme.COLORS.BACKGROUND_900};

        display: flex;
        align-items: center;

        padding: 0 124px;

        svg{
            color: ${({theme}) => theme.COLORS.GRAY_100}
        }
        button{
            border:none;
            background:none;
            font-size: 25px;
        }
    }

`

export const Form = styled.form`
    max-width: 340px;
    margin: -100px auto 0;

    div:nth-child(3){
        margin-bottom: 28px
    }
`

export const Avatar = styled.div`
    position: relative;
    margin: 0 auto 32px;
    
    width: 186px;
    height: 186px;
    > img{
        width: 186px;
        height: 186px;

        border-radius: 50%;
    }
    > label{
        width: 48px;
        height: 48px;
        
        background: ${({theme}) => theme.COLORS.ORANGE};
        border-radius: 50%;
        
        position: absolute;
        bottom: 7px;
        right: 7px;
        
        display:flex;
        align-items: center;
        justify-content: center;

        cursor: pointer;

       > input{
        display:none
        }
    }
`