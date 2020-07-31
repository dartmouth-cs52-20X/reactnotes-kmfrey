import React, { Component } from 'react';

class AddBar extends Component {
  constructor(props) {
    super(props);
    this.state = { title: '' };
  }

  onCreate = (event) => {
    this.props.onNoteAdd(this.state.title);
    this.setState({ title: '' });
  }

  onTitleChange = (event) => {
    this.setState({ title: event.target.value });
  }

  render() {
    return (
      <div id="add-bar">
        <input onChange={this.onTitleChange} value={this.state.title} />
        <button type="button" onClick={this.onCreate}>Create</button>
      </div>
    );
  }
}

export default AddBar;
