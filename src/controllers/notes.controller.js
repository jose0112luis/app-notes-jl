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
    req.flash('success_msg', 'Note Add Successfully');
    res.redirect('/notes');
};

// Get All Notes
notesCtrl.renderNotes = async (req,res) => {
    const notes = await Note.find().lean();
    res.render('notes/allNotes', { notes });
};

// Edit Notes
notesCtrl.renderEditForm = async (req,res) => {
    const note = await Note.findById(req.params.id).lean();
    res.render('notes/editNotes', {note});  //{note} = {note:note}
};

notesCtrl.updateNote = async (req,res) => {
    const { title, description } = req.body;
    await Note.findByIdAndUpdate(req.params.id, {title, description}); //{title,desciption} = {title:title, description:description}
    req.flash('success_msg', 'Note Updated Successfully');
    res.redirect('/notes');
};

// Delete Notes
notesCtrl.deleteNote = async (req,res) => {
    await Note.findByIdAndDelete(req.params.id);
    req.flash('success_msg', 'Note Deleted Successfully');
    res.redirect('/notes');
};

module.exports = notesCtrl;