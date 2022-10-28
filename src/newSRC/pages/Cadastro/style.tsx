import styled from "styled-components";

export const BackgroundCover = styled.body`
background-image: url(src\img\cover.png)
background-size:cover;

`

export const Cardinput = styled.div`
background-color:gray;
Width:487px;
Height:841px;
display:flex;
justify-content: center
align-items:center;
flex-direction: column;
margin:60px auto 60px auto;

h1{
    text-align:center;
    color:white;
}
img{
    width:171px;
    margin: 60px auto 0 auto
}
input{
    margin: 10px auto 
}
a{
    color:white;
    text-decoration:none;
    margin: 0 auto;
    font-size: 18px

}

`