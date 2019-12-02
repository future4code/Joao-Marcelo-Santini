import React from 'react';

class SegundaEtapa extends React.Component {
    constructor(props){
        super(props)
    }

    render() {
        return (
            <div className="App" >
            <h2>Segunda etapa : Informações do ensino superior</h2>

            <p>5.QUal curso</p>
                <input type="text" />
            <p>6.QUal a unidade de ensino?</p>
                <input type="text"/>

                
            
        </div>
        )
    }

}
export default SegundaEtapa;