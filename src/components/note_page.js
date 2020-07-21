import React from 'react';
import Note from './note';

const NotePage = (props) => {
  const notes = props.noteMap.entrySeq().map(([id, note]) => {
    return (
      <Note key={id}
        id={id}
        noteTitle={note.get('title')}
        noteContent={note.get('content')}
        notePosition={note.get('position')}
        onDeleteNote={props.onDeleteNote}
        onMoveNote={props.onMoveNote}
        onAlter={props.onAlterNote}
      />
    );
  });

  return (
    <div>
      <div className="notes">
        {notes}
      </div>
    </div>

  );
};

// class NotePage extends Component {
//   constructor(props) {
//     super(props);
//     this.state = {
//       modalShown: false,
//       modalId: NaN,
//     };
//   }

//   showEdit = (id) => {
//     this.setState((prevState) => ({
//       modalShown: !prevState.modalShown,
//       modalId: id,
//     }));
//   }

//   exitModal = () => {
//     this.setState((prevState) => ({
//       modalShown: !prevState.modalShown,
//     }));
//   }

//   saveEdits = (title, content) => {
//     this.props.onAlterNote(this.state.modalId, title, content);
//     this.exitModal();
//   }

//   makeModal() {
//     const editModal = (
//       <EditNote
//         show={this.state.modalShown}
//         onSaveEdit={this.saveEdits}
//         onExit={this.exitModal}
//         id={this.state.modalId}
//         title={this.props.noteMap.getIn([this.state.modalId, 'title'])}
//         content={this.props.noteMap.getIn([this.state.modalId, 'content'])}
//       />
//     );
//     return editModal;
//   }

//   makeNotes() {
//     const notes = this.props.noteMap.entrySeq().map(([id, note]) => {
//       return (
//         <Note key={id}
//           id={id}
//           noteTitle={note.get('title')}
//           noteContent={note.get('content')}
//           notePosition={note.get('position')}
//           onDeleteNote={this.props.onDeleteNote}
//           onMoveNote={this.props.onMoveNote}
//           onShowEdit={this.showEdit}
//         />
//       );
//     });
//     return notes;
//   }

//   render() {
//     return (
//       <div>
//         <div className="notes">
//           {this.makeNotes()}
//         </div>
//         {this.makeModal()}
//       </div>
//     );
//   }
// }

export default NotePage;
