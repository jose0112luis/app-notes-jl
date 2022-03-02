const notesCtrl = {};

// New Notes
notesCtrl.renderNoteForm = (req,res) => {
    res.render('notes/newNote');
};

notesCtrl.createNewNote = (req,res) => {
    console.log(req.body);
    res.send('New Note');
};

// Get All Notes
notesCtrl.renderNotes = (req,res) => {
    res.send('render Notes');
};

// Edit Notes
notesCtrl.renderEditForm = (req,res) => {
    res.send('render edit form');
};

notesCtrl.updateNote = (req,res) => {
    res.send('update note');
};

// Delete Notes
notesCtrl.deleteNote = (req,res) => {
    res.send('delete notess');
};

module.exports = notesCtrl;