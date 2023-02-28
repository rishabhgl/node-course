const yargs = require('yargs');
const { addNote, removeNote, listNotes, readNote } = require('./notes.js');

yargs.command({
    command: 'add',
    describe: 'Adds a new note',
    builder: {
        title: {
            type: 'string',
            demandOption: true,
            describe: 'Note title'
        },
        body: {
            type: 'string',
            demandOption: true,
            describe: 'Body for note'
        }
    },
    handler(argv){
        addNote(argv.title, argv.body);
    }
})

yargs.command({
    command: ['remove', 'delete'],
    describe: 'Removes an existing note',
    builder: {
        title: {
            type: 'string',
            demandOption: true,
            describe: 'Title of note to be removed'
        }
    },
    handler(argv){
        removeNote(argv.title);
    }
})

yargs.command({
    command: 'list',
    describe: 'Lists all the exisiting notes',
    handler(){
        listNotes();
    }
})

yargs.command({
    command: 'read',
    describe: 'Reads an existing note',
    builder:{
        title: {
            type: 'string',
            demandOption: true,
            describe: 'Title of note to be read'
        }
    },
    handler(argv){
        readNote(argv.title);
    }
})

yargs.parse();