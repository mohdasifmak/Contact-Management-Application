const Contact = require('../models/contact');


exports.getAllContact = async (req, res) => {
    try {
        const contacts = await Contact.find();
        res.render('contacts', { contacts }); 
    } catch (err) {
        console.error('Error fetching contacts:', err);
        res.status(500).send('Error fetching contacts');
    }
};


exports.create = (req, res) => {
    res.render('newContact'); 
};


exports.createContact = async (req, res) => {
    try {
        // const { name, email, phone, company, job_title, picture } = req.body;
        const newContact = new Contact(req.body);
        await newContact.save();
        res.redirect('/');
    } catch (err) {
        console.error('Error creating contact:', err);
        res.status(500).send('Error creating contact');
    }
};



exports.updateProduct = async (req, res) => {
    try {
        const contact = await Contact.findById(req.params.id);
        res.render('editContact', { contact }); 
    } catch (err) {
        console.error('Error fetching contact for update:', err);
        res.status(500).send('Error fetching contact for update');
    }
};


exports.update = async (req, res) => {
    try {
        const updatedContact = await Contact.findByIdAndUpdate(
            req.params.id, req.body,{ new: true }
        );
        res.redirect('/');
    } catch (err) {
        console.error('Error updating contact:', err);
        res.status(500).send('Error updating contact');
    }
};


exports.deleteProduct = async (req, res) => {
    try {
        const deletedContact = await Contact.findByIdAndDelete(req.params.id);
        res.redirect('/');
    } catch (err) {
        console.error('Error deleting contact:', err);
        res.status(500).send('Error deleting contact');
    }
};