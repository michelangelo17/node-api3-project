import React, { Component } from 'react'

class App extends Component {
  state = {
    name: '',
    email: '',
    location: '',
    showDetails: false,
  }

  handleSubmit = e => {
    e.preventDefault()
    this.setState({ ...this.state, showDetails: true })
  }
  handleChange = e =>
    this.setState({ ...this.state, [e.target.name]: e.target.value })

  render() {
    return (
      <>
        <h1>A Basic Info Form!</h1>

        <form onSubmit={this.handleSubmit}>
          <div>
            <label htmlFor='name'>Please enter your full name</label>
            <input
              type='text'
              name='name'
              placeholder='name'
              value={this.state.name}
              onChange={this.handleChange}
            />
          </div>
          <div>
            <label htmlFor='email'>Please enter your email</label>
            <input
              type='email'
              name='email'
              placeholder='email'
              value={this.state.email}
              onChange={this.handleChange}
            />
          </div>
          <div>
            <label htmlFor='location'>Please enter your location</label>
            <input
              type='text'
              name='location'
              placeholder='location'
              value={this.state.location}
              onChange={this.handleChange}
            />
          </div>
          <button type='submit'>Submit</button>
          {this.state.showDetails && (
            <>
              <h2>{this.state.name}</h2>
              <p>{this.state.email}</p>
              <p>{this.state.location}</p>
            </>
          )}
        </form>
      </>
    )
  }
}

export default App
