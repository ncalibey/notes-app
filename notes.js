const fs = require('fs');
const chalk = require('chalk');

const getNotes = () => {
  return "Your notes...";
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
    console.log(chalk.green('New note added!'));
  } else {
    console.log(chalk.red('Note title already taken!'));
  }
};

const removeNote = (title) => {
  const notes = loadNotes();
  const notesToKeep = notes.filter(note => note.title !== title);

  if (notes.length !== notesToKeep.length) {
    saveNotes(notesToKeep);
    console.log(chalk.green.inverse('SUCCESS:') + chalk.green(` note "${title}" was deleted!`));
  } else {
    console.log(chalk.red.inverse('ERROR:') + chalk.red(' Note does not exist!'));
  }
};

const listNotes = () => {
  const notes = loadNotes();
  console.log(chalk.underline.bold('Your notes:'));

  for (let i = 0; i < notes.length; i +=1) {
    console.log(chalk.green(notes[i].title));
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
  getNotes,
  addNote,
  removeNote,
  listNotes,
};
