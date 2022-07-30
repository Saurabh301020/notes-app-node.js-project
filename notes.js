const fs = require('fs')
const chalk = require('chalk')
// add notes function
const addNotes = (title, body) => {
    const notes = laodNotes();
    const duplicateNotes = notes.find(item => item.title === title)
    if (!duplicateNotes) {
        notes.push({
            title: title,
            body: body
        })
        saveNotes(notes);
        console.log(chalk.green.inverse('New note added!'));
    }
    else {
        console.log(chalk.red.inverse('Note title already taken!'));
    }
}
// remove the notes

const removeNote = (title) => {
    // console.log(title);
    const notes = laodNotes();
    const keepNotes = notes.filter(item => item.title !== title);
    if (keepNotes.length < notes.length) {
        saveNotes(keepNotes);
        console.log(chalk.green.inverse('Note Removed!'));
    }
    else {
        console.log(chalk.red.inverse('Note title not found!'));
    }
}
// list the alll notes
const listNotes = () => {
    // console.log('hey!');
    const notes = laodNotes();
    if (notes.length === 0) {
        console.log(chalk.red.inverse('There is no notes present!'));
    }
    else {
        notes.forEach(item => {
            console.log(item.title);
        });
    }
}
// reading the notes!
const readNotes = (title) => {
    // console.log(title);
    const notes = laodNotes();
    const noteForRead = notes.find(item => item.title === title);
    if (!noteForRead) {
        console.log(chalk.red.inverse('Note not found!'));
    }
    else {
        console.log('Title:' + title);
        console.log('Body:' + noteForRead.body);
    }
}
const saveNotes = (notes) => {
    const notesJson = JSON.stringify(notes);
    fs.writeFileSync('notes-json.json', notesJson);
}
const laodNotes = () => {
    try {
        const notesFromFile = (fs.readFileSync('notes-json.json')).toString();
        return JSON.parse(notesFromFile);
    } catch (err) {
        return [];
    }
}

module.exports = {
    addNotes: addNotes,
    removeNote: removeNote,
    listNotes: listNotes,
    readNotes: readNotes
}