import './App.css';
import React from 'react';
import {Button} from '@material-ui/core';
import IconButton from '@material-ui/core/IconButton';
import DeleteIcon from '@material-ui/icons/Delete';

const base_url = "http://localhost:5000"

class PopUp extends React.Component {

  constructor(props) {
    super(props)
    this.state = {
      name: "",
      lastname: ""
    }
  }

  submit() {
    console.log(this.state)
    this.props.userCreation(this.state.name, this.state.lastname);
    this.props.togglePopup()
  }

  update(event) {
    if (event.target.id === 'name') {
      this.setState({
        name: event.target.value
      })
    } else {
      this.setState({
        lastname: event.target.value
      })
    }

  }

  render() {
    return (
      <div className='popup'>
        <div className='popup_inner'>
          <div className="user-add">
            <div className="user-name">
              Name: <input id="name" value={this.state.name} onChange={event => this.update(event)} />
            </div>
            <div className="user-second-name">
              Second Name: <input id="second-name" value={this.state.lastname} onChange={event => this.update(event)} />
            </div>
            <div className="outer">
              <Button color="primary" variant="contained" onClick={() => this.submit()}>Create User</Button>
              <Button color="primary" variant="contained" onClick={this.props.togglePopup}>Cancel</Button>
            </div>
          </div>

        </div>
      </div>
    );
  }
}

class UserCreation extends React.Component {
  constructor(props) {
    super(props);
    this.state = {
      showPopup: false
    }
    this.togglePopup = this.togglePopup.bind(this)
    this.userCreation = this.userCreation.bind(this)
  }

  togglePopup() {
    this.setState({
      showPopup: !this.state.showPopup
    })
  }

  userCreation(name, lastname) {
    this._body = { 'name': name, "surname": lastname }
    fetch(base_url + "/user", {
      method: 'POST', 
      headers: {
        'Content-Type': 'application/json',
      }, 
      body: JSON.stringify(this._body)
    }).then(res => res.json()).then((result) => {

      this.setState({
        users: result
      })
      this.props.updateCallback()
    })
  }

  render() {
    return (<div className="user-creation">
      <Button color="primary" variant="contained" onClick={this.togglePopup}>Add New User</Button>
      {
        this.state.showPopup ?
          <PopUp
            userCreation={this.userCreation}
            togglePopup={this.togglePopup} />
          : null
      }
    </div>
    )
  }
}

class Users extends React.Component {

  constructor(props) {
    super(props)
    this.deleteUser = this.deleteUser.bind(this)
  }

  deleteUser(event, id){
    event.preventDefault()
    fetch(base_url + "/user/" + id, {
      method: 'DELETE', 
      headers: {
        'Content-Type': 'application/json',
      }
    }).then(res => res.json()).then((result) => {
      console.log(result)
      this.props.updateCallback()
    })
  }

  render() {
    return (
      <table>
        <tbody>
          <tr>
            <th>Name</th>
            <th>Surname</th>
          </tr>
          {
            this.props.users.map((user) =>
              <tr key={user.id}>
                <td>{user.name}</td>
                <td>{user.surname}</td>
                <td>
                    <IconButton aria-label="delete"  size="small">
                        <DeleteIcon fontSize="small" onClick={event => this.deleteUser(event, user.id)}/>
                    </IconButton>
                </td>
              </tr>
            )
          }
        </tbody>
      </table>
    )
  }

}


class App extends React.Component {

  constructor(props) {
    super(props)
    this.state = {
      users: []
    }
    this.update = this.update.bind(this)
  }

  update(){
    fetch(base_url + "/user").then(res => res.json()).then((result) => {
      this.setState({
        users: result
      }
      )
    })
  }

  componentDidMount() {
    this.update()
  }

  render() {
    return (
      <div>
        <UserCreation updateCallback={this.update}/>
        <Users users={this.state.users} updateCallback={this.update}/>
      </div>

    );
  }
}

export default App;