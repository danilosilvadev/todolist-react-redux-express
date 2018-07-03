import React, { Component } from 'react'

class List extends Component {
  constructor() {
    super()
    this.state = {
      list: [],
      checked: true
    }
  }

  componentDidMount() {
    fetch('/teste')
      .then(response => {
        return response.json()
      })
      .then(response => {
        this.setState({
          list: response
        })
      })
      .catch(err => {
        console.log(err);
      })
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
