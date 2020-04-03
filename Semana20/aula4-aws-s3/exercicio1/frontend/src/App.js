import React from 'react';
import styled from "styled-components";


const DivBody = styled.div`
display:flex;
align-items: center;
justify-content: center;
flex-direction: column;
`


const ContentForm = styled.form`
display: flex;
flex-direction: column;
width: 500px;
height: 200px;
justify-content: center;
align-items: center;
border: solid 1px;
`


function App() {


  return (
    <DivBody>
      <h3>Envie um arquivo</h3>
      <ContentForm 
        action="http://localhost:3000/uploadFile"
        method="POST"
        encType="multpart/form-data"
      >
        <input name="arquivo" type="file" />
        
        <br/>
        
        <button type="submit">Enviar</button>
      
      </ContentForm>
     
    </DivBody>
  );
}

export default App;
