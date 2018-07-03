import React, { Component } from 'react'

class List extends Component {
  constructor() {
    super()
    this.state = {
      list: [
        {
          done: false,
          name: 'Teminar de Lavar a Louça'
        },
        {
          done: false,
          name: 'Fazer a POI no Tibia'
        },
        {
          done: true,
          name: 'Jogar lixo para fora'
        },
        {
          done: true,
          name: 'Teminar de estudar Redux'
        }
      ],

      checked: true
    }
  }

  controlCheckbox() {
    this.setState({
      checked: !this.state.checked
    })
  }

  render() {
    return (
      <div className='list'>
        <h1 className='title'> Tarefas </h1>
        {this.state.list.map((item, index) => (
          <li className='list_item' key={index}>
            <label>
              {item.name}
              <input
                className='checkbox'
                type='checkbox'
                checked={this.checked}
                onChange={this.controlCheckbox.bind(this)} />
            </label> </li>
        ))}
      </div>
    )
  }
}

export default List
