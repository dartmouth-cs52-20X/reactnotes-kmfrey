/* eslint-disable new-cap */
import './style.scss';
import { Map } from 'immutable';
import React, { Component } from 'react';
import ReactDOM from 'react-dom';
import AddBar from './components/add_bar';
import NotePage from './components/note_page';
import * as db from './services/datastore';

class App extends Component {
  constructor(props) {
    super(props);
    this.state = {
      notes: Map(),
    };
  }

  componentDidMount() {
    db.fetchNotes((notes) => {
      const newNotes = Map(notes).map((value) => Map(value));
      this.setState({ notes: newNotes });
    });
  }

  addNote = (title) => {
    db.addNote(title);
  }

  deleteNote = (id) => {
    db.deleteNote(id);
    // this.setState((prevState) => ({
    //   notes: prevState.notes.delete(id),
    // }));
  }

  moveNote = (id, position) => {
    db.updateNotePostion(id, position);
    // this.setState((prevState) => ({
    //   notes: prevState.notes.setIn([id, 'position'], position),
    // }));
  }

  alterNote = (id, title, content) => {
    db.updateNoteContent(id, title, content);
    // const position = this.state.notes.getIn([id, 'position']);
    // const newMap = Map({ title, content, position });
    // this.setState((prevState) => ({
    //   notes: prevState.notes.set(id, newMap),
    // }));
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
