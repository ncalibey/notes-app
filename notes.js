const fs = require('fs');
const chalk = require('chalk');

const messages = {
  success (string) {
    return chalk.green.inverse('SUCCESS:') + chalk.green(string);
  },
  error (string) {
    return chalk.red.inverse('ERROR:') + chalk.red(string);
  },
  header (string) {
    return chalk.underline.bold(string);
  }
};

const addNote = (title, body) => {
  const notes = loadNotes();
  const duplicateNote = notes.find(note => note.title === title);

  if (!duplicateNote) {
    notes.push({
      title,
      body,
    });

    saveNotes(notes);
    console.log(messages.success(' New note added!'));
  } else {
    console.log(messages.error(' Note title already taken!'));
  }
};

const removeNote = (title) => {
  const notes = loadNotes();
  const notesToKeep = notes.filter(note => note.title !== title);

  if (notes.length !== notesToKeep.length) {
    saveNotes(notesToKeep);
    console.log(messages.success(` note "${title}" was deleted!`));
  } else {
    console.log(messages.error(' Note does not exist!'));
  }
};

const listNotes = () => {
  const notes = loadNotes();

  console.log(messages.header('Your notes:'));

  for (let i = 0; i < notes.length; i +=1) {
    console.log(chalk.green(notes[i].title));
  }
};

const readNote = (title) => {
  const notes = loadNotes();
  const note = notes.find(note => note.title === title);

  if (note) {
    console.log(messages.header(note.title));
    console.log(note.body);
  } else {
    console.log(messages.error(' Note does not exist!'));
  }
};

// Helper functions
const saveNotes = (notes) => {
  const json = JSON.stringify(notes);

  fs.writeFileSync('notes.json', json);
};

const loadNotes = () => {
  try {
    const dataBuffer = fs.readFileSync('notes.json');
    const dataJSON = dataBuffer.toString();

    return JSON.parse(dataJSON);
  } catch (e) {
    return [];
  }
};

module.exports = {
  addNote,
  removeNote,
  listNotes,
  readNote,
};
