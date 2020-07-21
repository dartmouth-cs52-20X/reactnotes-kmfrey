/* eslint-disable new-cap */
import './style.scss';
import { Map } from 'immutable';
import React, { Component } from 'react';
import ReactDOM from 'react-dom';
import AddBar from './components/add_bar';
import NotePage from './components/note_page';

class App extends Component {
  constructor(props) {
    super(props);
    this.state = {
      notes: Map(),
      key: 0,
    };
  }

  addNote = (title) => {
    const { key } = this.state;
    const position = Map({ x: 0, y: 0, z: 0 });
    const value = Map({ title, content: '', position });
    this.setState((prevState) => ({
      notes: prevState.notes.set(key, value),
      key: prevState.key + 1,
    }));
  }

  deleteNote = (id) => {
    this.setState((prevState) => ({
      notes: prevState.notes.delete(id),
    }));
  }

  moveNote = (id, position) => {
    this.setState((prevState) => ({
      notes: prevState.notes.setIn([id, 'position'], position),
    }));
  }

  alterNote = (id, title, content) => {
    const position = this.state.notes.getIn([id, 'position']);
    const newMap = Map({ title, content, position });
    this.setState((prevState) => ({
      notes: prevState.notes.set(id, newMap),
    }));
  }

  render() {
    return (
      <div>
        <AddBar onNoteAdd={this.addNote} />
        <NotePage noteMap={this.state.notes} onDeleteNote={this.deleteNote} onMoveNote={this.moveNote} onAlterNote={this.alterNote} />
      </div>
    );
  }
}

ReactDOM.render(<App />, document.getElementById('main'));
