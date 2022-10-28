import styled from "styled-components";

export const BackgroundCover = styled.body`
  background-size: cover;
`;
export const Cardinput = styled.div`
position:relative;
top: 15%
max-width:487px;
max-height:642px;
display:flex;
justify-content: center
align-items:center;
flex-direction: column;
margin: auto;
border-width: 1px 1px 1px 1px;
border-style: solid;
border-color: #C5C5C5;
background-color:white;

@media only screen and (max-width:400px) {
    max-width:300px;
    position:relative;
    top:5%;
}



h1{
    text-align:center;
    color:black;
}
img{
    width:171px;
    margin: 60px auto 0 auto
}
a{
    color:#555555;
    text-decoration:none;
    margin: 0 auto;
    font-size: 18px

}

`;
