import React from 'react';

class TerceiraEtapa extends React.Component {
    constructor(props){
        super(props)
    }

    render() {
        return (
            <div className="App" >
            <h2>Terceira Etapa: Informações gerais de ensino</h2>

            <p>7.Por que você não terminou o curso de graduação?</p>
                <input type="text" />
           

            <p>8.Fez algum curso complementar?</p>
                <select>
                    <option>Nenhum</option>
                    <option>Curso Técnico</option>
                    <option>Curso de Inglês</option>
                </select>
    
        </div>
        )
    }

}
export default TerceiraEtapa;