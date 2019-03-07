import React from "react";
import { Segment, Comment } from "semantic-ui-react";

import MessagesHeader from "./MessagesHeader";
import MessageForm from "./MessageForm";
import Message from "./Message";
import { now } from "moment";
import Goose from '../../img/goose.jpeg';
import Cock from '../../img/cock.jpg';

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
        name: "Goose",
        avatar: Goose

      },
      content: 'Ти чув, що Maruv не їде на євробачення ?'
    },
    {
      timestamp: Date.now(),
      message: "Message",
      user: {
        name: "Cock",
        avatar: Cock
      },
      content: "Ти ся вспокоїш вже з тим?"
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
