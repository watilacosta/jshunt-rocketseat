import React, { Component } from 'react'

import api from '../../services/api'

export default class Principal extends Component {

  state = {
    contatos: [],
  }

  componentDidMount() {
    this.carregarContatos()
  }

  carregarContatos = async () => {
    const response = await api.get('/contacts')

    this.setState({ contatos: response.data })
  }

  render() {
    return (
      <div className='lista-contatos'>
        {
          this.state.contatos.map(contato =>
          <article key={contato.id}>
            <strong>{contato.name}</strong>
            <p>{contato.email}</p>
            <p>{contato.birthdate}</p>
            <br />
          </article>
        )}
      </div>
    )
  }
}
