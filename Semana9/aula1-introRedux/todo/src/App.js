import React from 'react';
import styled from "styled-components"
import {Layout} from "./components/Layout/Layout"






const List = styled.div`
display:flex;
justify-content:center;
`



function App() {
  return (

    
      <List>
        <Layout></Layout>
      </List>
   

  );
}

export default App;
