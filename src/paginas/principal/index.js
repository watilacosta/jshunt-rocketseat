import React, { Component } from 'react'

import api from '../../services/api'
import { async } from 'q';

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
        { this.state.contatos.map((contato, index) => (
          <h2>{ contato[index] }</h2>
        ))}
      </div>
    )
  }
}