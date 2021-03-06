import styled from 'styled-components';

export const StyledRegisterOne = styled.div `
    display: flex;
    flex-direction: column;
    align-items: center;

    margin: auto;
    padding-bottom: 2rem;
    
    width: 45vw;
    height: 100%;


    background-color: #ffffffff;

    .title {
        text-align: center;
        width: 70%;
        font-size: 2rem;
        font-weight: bold;
        margin: 2rem 0; 
    }

    .titles {
        text-align: center;
        font-size: 2rem;
        font-weight: bold;
        margin-bottom: 2rem; 
    }

    .center {
        text-align: center;
        margin-top: 2rem; 
    }

    #img {
        display: none;
    }

    .square {
        display: flex;
        flex-direction: column;
        text-align: center;
        padding: 6px 14px 6px 14px;
        border-radius: 10px;
        background-color: #B09F9F;
        font-size: 1.2rem;
        border-radius: 10px;
        cursor: pointer;
        margin-bottom: 2rem;
    }

    .square:hover {
        color:#fff;
        background: #736E6E;
    }

    .img {
        display: inline-block;
        width: 200px;
        height: 200px;
        border-radius: 10px;
        margin-bottom: 2rem;
    }
    
    .inline {
        display: flex;
        width: 100%;
    }

    & input, & select {
        margin-bottom: 3rem
    }

` 