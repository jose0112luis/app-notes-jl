const notesCtrl = {};
const Note = require('../models/Note');

// New Notes
notesCtrl.renderNoteForm = (req,res) => {
    res.render('notes/newNote');
};

notesCtrl.createNewNote = async (req,res) => {
    const {title, description} = req.body;
    const newNote = new Note({title, description})  //es igual a Note({title:title, description:description})
    await newNote.save();
    res.redirect('/notes');
};

// Get All Notes
notesCtrl.renderNotes = async (req,res) => {
    const notes = await Note.find().lean();
    res.render('notes/allNotes', { notes });
};

// Edit Notes
notesCtrl.renderEditForm = (req,res) => {
    res.send('render edit form');
};

notesCtrl.updateNote = (req,res) => {
    res.send('update note');
};

// Delete Notes
notesCtrl.deleteNote = async (req,res) => {
    await Note.findByIdAndDelete(req.params.id);
    res.redirect('/notes');
};

module.exports = notesCtrl;