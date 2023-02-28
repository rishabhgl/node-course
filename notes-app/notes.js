const fs = require('fs');
const chalk = require('chalk');

const addNote = (title, body) => {

    let notes = loadNotes();

    if (!notes.find(note => note.title === title)) {
        notes.push({
            title,
            body
        });
        saveNotes(notes);
        console.log(chalk.bgGreen('Note added successfully!'));
    }
    else{
        console.log(chalk.bgRed('Note title taken'));
    }
}

const removeNote = title => {
    let notes = loadNotes();
    const noteExists = notes.find( note => note.title === title);
     
    if (!noteExists)
    console.log(chalk.bgRed('Note does not exist!'));
    else {
        notes = notes.filter(note => note.title !== title);
        saveNotes(notes);
        console.log(chalk.bgGreen('Note removed successfully!'));
    }
}

const listNotes = () => {
    const notes = loadNotes();
    console.log(chalk.blue.italic('Your notes: '));
    notes.forEach(note => {
        console.log(note.title);
    })
} 

const readNote = title => {
    const notes = loadNotes();
    const reqNote = notes.find(note => note.title === title);

    if(reqNote){
        console.log(chalk.blue.italic.inverse(reqNote.title));
        console.log(reqNote.body);
    } else{
        console.log(chalk.bgRed('Note not found!!'));
    }
}

const saveNotes = notes => {
    const data = JSON.stringify(notes);
    fs.writeFileSync('notes.json', data);
}

const loadNotes = () => {
    try {
        const data = fs.readFileSync('notes.json');
        const dataJson = data.toString();
        const notes = JSON.parse(dataJson);
        return notes;
    } catch (err) {
        return [];
    }
}

module.exports = {
    addNote,
    removeNote,
    listNotes,
    readNote
};