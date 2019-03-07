import React from "react";
import { Menu, Icon, Modal, Form, Input, Button, Label } from "semantic-ui-react";

export default class Rooms extends React.Component {
  state = {
    rooms: [],
    roomName: "",
    roomDetails: "",
    modal: false,
  };

  openModal = () => this.setState({ modal: true });

  closeModal = () => this.setState({ modal: false });

  displayRooms = rooms =>
    rooms.length > 0 &&
    rooms.map(room => (
      <Menu.Item
        key={room.id}
        onClick={() => this.changeRoom(room)}
        name={room.name}
        style={{ opacity: 0.7 }}
        active={room.id === this.state.activeRoom}
      >
        {this.getNotificationCount(room) && (
          <Label color="red">{this.getNotificationCount(room)}</Label>
        )}
        # {room.name}
      </Menu.Item>
    ));

  render() {
    const { rooms, modal } = this.state;

    return (
      <React.Fragment>
        <Menu.Menu style={{ paddingBottom: "2em" }}>
          <Menu.Item>
            <span>
              <Icon name="exchange" /> ROOMS
            </span>{" "}
            ({rooms.length}) <Icon name="add" onClick={this.openModal} />
          </Menu.Item>
          {this.displayRooms(rooms)}
          <Menu.Item
            name={'sport'}
            style={{ opacity: 0.7 }}
          >
            # Sport
          </Menu.Item>
          <Menu.Item
            name={'food'}
            style={{ opacity: 0.7 }}
          >
            # Food
          </Menu.Item>
          <Menu.Item
            name={'food'}
            style={{ opacity: 0.7 }}
          >
            # IT
          </Menu.Item>
          <Menu.Item
            name={'food'}
            style={{ opacity: 0.7 }}
          >
            # Party
          </Menu.Item>
        </Menu.Menu>

        <Modal basic open={modal} onClose={this.closeModal}>
          <Modal.Header>Add a Room</Modal.Header>
          <Modal.Content>
            <Form onSubmit={this.handleSubmit}>
              <Form.Field>
                <Input
                  fluid
                  label="Name of Room"
                  name="roomName"
                  onChange={this.handleChange}
                />
              </Form.Field>

              <Form.Field>
                <Input
                  fluid
                  label="About the Room"
                  name="roomDetails"
                  onChange={this.handleChange}
                />
              </Form.Field>
            </Form>
          </Modal.Content>

          <Modal.Actions>
            <Button color="green" inverted onClick={this.handleSubmit}>
              <Icon name="checkmark" /> Add
            </Button>
            <Button color="red" inverted onClick={this.closeModal}>
              <Icon name="remove" /> Cancel
            </Button>
          </Modal.Actions>
        </Modal>
      </React.Fragment>
    );
  }
}