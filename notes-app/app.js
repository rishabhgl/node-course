const yargs = require('yargs');
const { addNote, removeNote } = require('./notes.js');

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
    handler: (argv) => {
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
    handler: (argv) => {
        removeNote(argv.title);
    }
})

yargs.command({
    command: 'list',
    describe: 'Lists all the exisiting notes',
    handler: () => {
        console.log('Listed all the existing notes!');
    }
})

yargs.command({
    command: 'read',
    describe: 'Reads an existing note',
    handler: () => {
        console.log('Read the note!');
    }
})

yargs.parse();