import firebase from 'firebase/app';
import 'firebase/database';

// Your web app's Firebase configuration
const firebaseConfig = {
  apiKey: 'AIzaSyAfXVhew7qgkXNilrt0tzHVGOlhCkppCw0',
  authDomain: 'reactnotes-c0a0d.firebaseapp.com',
  databaseURL: 'https://reactnotes-c0a0d.firebaseio.com',
  projectId: 'reactnotes-c0a0d',
  storageBucket: 'reactnotes-c0a0d.appspot.com',
  messagingSenderId: '107853368380',
  appId: '1:107853368380:web:b983e04dd2ff1822190739',
  measurementId: 'G-HN3DXSQY37',
};
// Initialize Firebase
firebase.initializeApp(firebaseConfig);

export function fetchNotes(callback) {
  firebase.database().ref('notes').on('value', (snapshot) => {
    const newNoteState = snapshot.val();
    callback(newNoteState);
  });
}

/* add a note to the database */
export function addNote(title) {
  const noteData = {
    title,
    content: '',
    position: { x: 0, y: 0, z: 0 },
  };
  const newNoteKey = firebase.database().ref('notes').push(noteData);
  // ????
  return newNoteKey;
}

export function deleteNote(id) {
  firebase.database().ref('notes').child(id).remove();
}

/* separate because I never update title/content and position at the same time */
export function updateNoteContent(id, title, content) {
  const updates = {
    title,
    content,
  };
  firebase.database().ref('notes').child(id).update(updates);
}

export function updateNotePostion(id, position) {
  firebase.database().ref('notes').child(id).update({ position });
}
