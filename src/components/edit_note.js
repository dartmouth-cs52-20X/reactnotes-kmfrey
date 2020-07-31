import React, { Component } from 'react';

class EditNote extends Component {
  constructor(props) {
    super(props);
    this.state = {
      title: props.title || '',
      content: props.content || '',
    };
  }

  makeEdits = () => {
    this.props.onSaveEdit(this.state.title, this.state.content);
  }

  updateTitle = (event) => {
    this.setState({ title: event.target.value });
  }

  updateContent = (event) => {
    this.setState({ content: event.target.value });
  }

  close = () => {
    this.props.onExit();
    // reset to what was originally there
    this.setState({
      title: this.props.title || '',
      content: this.props.content || '',
    });
  }

  render() {
    if (!this.props.show) {
      return null;
    }
    return (
      <div className="edit-modal">
        { /* eslint-disable-next-line jsx-a11y/no-static-element-interactions */ }
        <span onClick={this.close} className="fas fa-times-circle" />
        <input onChange={this.updateTitle} value={this.state.title} />
        <textarea onChange={this.updateContent} value={this.state.content} />
        <button type="button" onClick={this.makeEdits}>Save</button>
      </div>
    );
  }
}

export default EditNote;
