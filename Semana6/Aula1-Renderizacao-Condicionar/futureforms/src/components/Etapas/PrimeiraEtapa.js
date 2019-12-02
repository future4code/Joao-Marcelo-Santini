import React from 'react';

class PrimeiraEtapa extends React.Component {
    constructor(props){
        super(props)
    }

    render() {
        return (
            <div className="App" >
            <h2>Primeira Etapa : Dados Gerais</h2>

            <p>1.Qual o seu nome?</p>
                <input type="text" />
            <p>2.Qual a sua idade?</p>
                <input type="text" />
            <p>3.Qual a sua escolaridade?</p>
                <input type="email" />

            <p>4.Qual sua escolaridade?</p>
                <select>
                    <option>Ensino médio incompleto</option>
                    <option>Ensino médio completo</option>
                    <option>Ensino superior incompleto</option>
                    <option>Ensino superior completo</option>
                </select>
                
    
        </div>
        )
    }

}
export default PrimeiraEtapa;