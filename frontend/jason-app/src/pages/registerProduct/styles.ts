import Styled from "styled-components";

export const Container = Styled.div`
display:flex;
flex-direction: column;
width: 100%;
justify-content: center;
align-items: center;
height: 84.6vh;

& h1{
    text-align: center;
    margin-bottom: 30px;
}
`;

export const Form = Styled.form`
display:flex;
justify-content: center;
align-items: center;
margin-bottom: 50px;

& input{
    height: 40px;
    width: 500px;
    border-radius: 5px;
    border: 1px solid #FFC300;
    margin-bottom: 10px;
}

& button{
    margin: 0 auto;
}
`;
