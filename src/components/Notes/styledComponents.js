import styled from 'styled-components'

export const NotesMainContainer = styled.div`
display:flex;
flex-direction:column;
align-items:center;
justify-content:center;
min-height:100vh;
// background-color:red;
`
export const NotesContainer = styled.div`
display:flex;
flex-direction:column;
align-items:center;

padding:20px;
`
export const NotesHeading = styled.h1`
color:#4c63b6;
font-family:Bree Serif;
font-size:40px;
`
export const NotesInputContainer = styled.div`
background-color:#ffffff;
padding:20px;
box-shadow:0px 4px 16px 0px #cbd5e1;
border-radius:5px;
display:flex;
flex-direction:column;

`
export const NotesInput = styled.input`
width:100%;
border-width:0px;
outline:none;
paadding:10px 10px 10px 10px;
margin-bottom:10px;
color:#475569;
font-family:Roboto;
font-weight:400;
`
export const NotesTextArea = styled.textarea`
width:100%;
border-width:0px;
outline:none;
paadding:10px 10px 10px 10px;
margin-bottom:10px;
color:#475569;
font-family:Roboto;
font-weight:400;
`
export const NotesButton = styled.button`
align-self:flex-end;
background-color: #4c63b6;
color:#ffffff;
border-radius:4px;
border-width:0px;
padding:10px 10px 10px 10px;
`
export const EmptyNotesContainer = styled.div`
display:flex;
flex-direction:column;
align-items:center;
width:100%;
padding-top:50px;
margin-top:20px;
`
export const EmptyImage = styled.img`
width:100%;
max-width:60px;
`
export const EmptyHeading = styled.h1`
margin-bottom:0px;
color:#334155;
font-size:20px;
`
export const EmptyPara = styled.p`
color:#aab8c8;
font-size:14px;
`
export const NotesItemMainContainer = styled.ul`
width:100%;
padding-left:0px;
list-style:none;
display:flex;
flex-wrap:wrap;
align-items:center;


`
