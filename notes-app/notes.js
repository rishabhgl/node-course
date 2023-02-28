const fs = require('fs');

const getNotes = function () {
    const message = 'Your notes...';
    return message;
}

const addNote = (title, body) => {

    const notes = loadNotes();

    if (notes.filter(note => note.title === title).length === 0) {
        notes.push({
            title,
            body
        });
        saveNotes(notes);
    }
    else{
        console.log('Note title taken');
    }
}

const removeNote = title => {
    const notes = loadNotes();
    const noteIndex = notes.findIndex( note => note.title === title);
     
    if (noteIndex !== -1)
        console.log('Note does not exist!');
    else {
        notes = notes.filter(note => note.title !== title);
        saveNotes(notes);
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
    getNotes,
    addNote,
    removeNote
};