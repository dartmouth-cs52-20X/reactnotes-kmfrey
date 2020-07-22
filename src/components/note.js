/* eslint-disable jsx-a11y/no-static-element-interactions */
import React, { Component } from 'react';
import Draggable from 'react-draggable';
import marked from 'marked';
import EditNote from './edit_note';

class Note extends Component {
  constructor(props) {
    super(props);
    this.state = {
      showModal: false,
    };
  }

  onDelete = () => {
    this.props.onDeleteNote(this.props.id);
  }

  onDrag = (e, data) => {
    const position = this.props.notePosition;
    const newPosition = { x: position.x + data.deltaX, y: position.y + data.deltaY, z: position.z };
    this.props.onMoveNote(this.props.id, newPosition);
  }

  toShowModal = () => {
    this.setState((prevState) => ({
      showModal: !prevState.showModal,
    }));
  }

  saveEdit =(title, content) => {
    this.props.onAlter(this.props.id, title, content);
    this.toShowModal();
  }

  makeModal() {
    const editModal = (
      <EditNote
        show={this.state.showModal}
        onSaveEdit={this.saveEdit}
        onExit={this.toShowModal}
        title={this.props.noteTitle}
        content={this.props.noteContent}
      />
    );
    return editModal;
  }

  render() {
    return (
      <div className="note-body">
        <Draggable
          handle=".fa-arrows-alt"
          defaultPosition={{ x: this.props.notePosition.x, y: this.props.notePosition.y }}
          onDrag={this.onDrag}
          grid={[10, 10]}
          bounds="body"
        >
          <div className="note">
            <div className="title-bar">
              <div className="title"> {this.props.noteTitle} </div>
              <div className="alterations">
                <i onClick={this.onDelete} className="fas fa-trash" />
                <i onClick={this.toShowModal} className="fas fa-edit" />
                <i className="fas fa-arrows-alt" />
              </div>
            </div>
            { /* eslint-disable-next-line react/no-danger */ }
            <div className="content" dangerouslySetInnerHTML={{ __html: marked(this.props.noteContent) }} />
          </div>
        </Draggable>

        {this.makeModal()}
      </div>
    );
  }
}

export default Note;
