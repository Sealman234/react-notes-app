import axios from 'axios';

const notesInstance = axios.create({
  baseURL: 'https://react-notes-app-66bfb-default-rtdb.firebaseio.com/',
});

export const apiGetNotes = () => notesInstance.get('/notes.json');
export const apiAddNote = (data) => notesInstance.post('/notes.json', data);
export const apiDeleteNote = (id) => notesInstance.delete(`/notes/${id}.json`);
export const apiPatchNote = (id, data) =>
  notesInstance.patch(`/notes/${id}.json`, data);
