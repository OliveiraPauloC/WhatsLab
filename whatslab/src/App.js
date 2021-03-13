import React from 'react'
import styled from 'styled-components'

const AppContainer = styled.div`
  border: 1px solid black;
  height: 100vh;
  box-sizing: bordex-box;
  width: 600px;
  margin: auto;
  display: flex;
  flex-direction: column;
`

const Messagescontainer = styled.div`
  flex-grow: 1;
  padding: 16px;
  display: flex;
  flex-direction: column-reverse;
`

const InputContainer = styled.div`
  display: flex;
`

const NameInput = styled.input`
  width: 100px:
`

const MessageInput = styled.input`
  flex-grow: 1;
`

class App extends React.Component {
  state = {
    messages: [],
    userValue: '',
    messageValue: ''
  }

  onchangeUserValue = (event) => {
    this.setState({ userValue: event.target.value })
  }

  onchangeMessageValue = (event) => {
    this.setState({ messageValue: event.target.value })
  }

  sendMessage = () => {
    const newMessage = {
      user: this.state.userValue,
      text: this.state.messageValue
    }

    const newMessageArray = [newMessage, ...this.state.messages]

    this.setState({ messages: newMessageArray, messageValue: '' })
  }

  render() {
    return (
      <AppContainer>
        <Messagescontainer>
          { this.state.messages.map((message, index) => {
            return <p key={ index }>
                    <strong>{ message.user }</strong>: { message.text }
                  </p>
          }) }
        </Messagescontainer>
        <InputContainer>
          <NameInput 
            onChange={ this.onchangeUserValue }
            value={ this.state.userValue }
            placeholder={ 'Nome' }
          />
          <MessageInput 
            onChange={ this.onchangeMessageValue }
            value={ this.state.messageValue }
            placeholder={ 'mensagem' }
          />
          <button onClick={ this.sendMessage }>Enviar</button>
        </InputContainer>
      </AppContainer>
    )
  }

}

export default App;
