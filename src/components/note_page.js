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
        noteSize={note.get('size')}
        onDeleteNote={props.onDeleteNote}
        onMoveNote={props.onMoveNote}
        onAlter={props.onAlterNote}
        onResize={props.onResizeNote}
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

export default NotePage;
