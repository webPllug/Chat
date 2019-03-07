import React from "react";
import { Segment, Comment } from "semantic-ui-react";

import MessagesHeader from "./MessagesHeader";
import MessageForm from "./MessageForm";
import Message from "./Message";
import { now } from "moment";
import Goose from '../../img/goose.jpeg';
import Rostyk from '../../img/rostyk.jpeg';

class Messages extends React.Component {

  state = {
    messages: []
  }


  displayMessages = messages =>
    messages.length > 0 &&
    messages.map(message => (
      <Message
        key={message.timestamp}
        message={message}
        user={this.state.user}
      />
    ));

  render() {
    const mes = [{
      timestamp: Date.now(),
      message: "Message",
      user: {
        name: "Roman",
        avatar: Goose

      },
      content: 'За кого то голосувати на виборах?'
    },
    {
      timestamp: Date.now(),
      message: "Message",
      user: {
        name: "Rostyk",
        avatar: Rostyk
      },
      content: "Я за Тимошенчиху"
    }]
    const { messages } = this.state;
    return (
      <React.Fragment>
        <MessagesHeader />
        <Segment>
          <Comment.Group className="messages">
            {this.displayMessages(mes)}
          </Comment.Group>
        </Segment>

        <MessageForm />
      </React.Fragment>
    );
  }
}

export default Messages;
