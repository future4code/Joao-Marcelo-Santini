import React from 'react';
import styled from "styled-components";


// const DivBody = styled.div`
// display:flex;
// align-items: center;
// justify-content: center;
// flex-direction: column;
// `


// const ContentForm = styled.form`
// display: flex;
// flex-direction: column;
// width: 500px;
// height: 200px;
// justify-content: center;
// align-items: center;
// border: solid 1px;
// `


function App() {


  return (
    <div>
    <h4>Olá! Bora fazer uploads 😉</h4>
<form
  action="http://localhost:3000/uploadFile"
  method="POST"
  enctype="multipart/form-data"
>
  <input name="arquivo" type="file" />
  <button type="submit">Enviar</button>
</form>
     
    </div>
  );
}

export default App;
