
import styled from "styled-components";

const Button = styled.button`
    
    margin: auto;
    margin-left: 2%;
    margin-top: 7%;
    font-size: 27px;
    padding: 2% 3%;
    background: none;
   
    border: ${ ({theme}) =>{

        if(theme == "blue"){
            return "2px solid blue"
        }

        else if(theme == "dashed"){
            return "2px dashed black"
        }

        else if(theme == "text"){
            return "2px hidden gray"
        }

        else if(theme == "link"){
            return "none"
        }
    }};

    background-color: ${({theme}) =>{

        if(theme == "blue"){
            return "blue"
        }

        else if(theme == "default"){
            return "gray"
        }
    }};

    color: ${({theme}) =>{
        
        if(theme == "blue"){
            return "white"
        }

        if(theme == "link"){
            return "blue"
        }
    }};

    
`

export {Button} 