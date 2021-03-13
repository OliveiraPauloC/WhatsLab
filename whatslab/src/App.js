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
  background-color: #440a67;
  
`

const Messagescontainer = styled.div`
  flex-grow: 1;
  padding: 16px;
  display: flex;
  flex-direction: column-reverse;
  font-size: 18px;
`

const MessagesWhite = styled.p`
  color: #ffe3fe;
`

const InputContainer = styled.div`
  display: flex;
  height: 7%;
  margin: 15px;
  color: #ffe3fe;
`

const NameInput = styled.input`
  width: 100px;
  border: none;
  font-size: 18px;
  background-color: #93329e;
  color: #ffe3fe;
  border-radius: 10px;
  padding-left: 10px;
`

const MessageInput = styled.input`
  flex-grow: 1;
  border: none;
  margin-left: 5px;
  font-size: 18px;
  background-color: #93329e;
  color: #ffe3fe;
  border-radius: 10px;
  padding-left: 10px;
`

const SendButton = styled.button`
  margin-left: 5px;
  border: none;
  font-size: 18px;
  font-weight: bold;
  border-radius: 10px;
  background-color: #ffe3fe;
  color: #93329e;
  &:hover {
    background-color: #b4aee8;
    color: #440a67;
  }
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
            return <MessagesWhite key={ index }>
                    <strong>{ message.user }</strong>: { message.text }
                  </MessagesWhite>
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
            placeholder={ 'Mensagem' }
          />
          <SendButton onClick={ this.sendMessage }>Enviar</SendButton>
        </InputContainer>
      </AppContainer>
    )
  }

}

export default App;
