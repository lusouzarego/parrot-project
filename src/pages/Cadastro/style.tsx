import styled from "styled-components";

export const BackgroundCover = styled.body``;

export const Cardinput = styled.div`
position:relative;
top:10%;
display:flex;
background-color:white;
max-width:487px;
max-height:841px;
justify-content: center
align-items:center;
flex-direction: column;
margin: auto;
border-width: 1px 1px 1px 1px;
border-style: solid;
border-color: #C5C5C5;

h1{
    font-size:24px;
    text-align:center;
    color:black;
    margin:0 0 20px 0px;
}
img{
    width:171px;
    margin: 60px auto 0 auto
}
input{
    margin: 10px auto 
}
a{
    color:black;
    text-decoration:none;
    margin: 0 auto;
    font-size: 18px

}

@media only screen and (max-width: 400px) {
    max-width: 350px;
    top:-5%;
  
  
  }

`;
