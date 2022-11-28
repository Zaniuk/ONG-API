const { Contact } = require('../models')
const createContact = async (req, res, _next) => {
  const { name, phone, email, message } = req.body

  try {
    const newContact = await Contact.create({
      name,
      email,
      phone: phone || null,
      message: message || null
    })
    res.status(200).send(newContact)
  } catch (err) {
    res.status(400).send(err)
  }

}
const getContacts = async (req, res, _next) => {
  try {
    const contacts = await Contact.findAll()
    res.status(200).send(contacts)
  } catch (err) {
    res.status(400).send(err)
  }
}

const deleteContact = async (req, res, _next) => {
  try {
    const { id } = req.params
    const contactExist = await Contact.findOne({ where: { id } })
    if (!contactExist) {
      throw "Contact doesn't exist"
    } else {

      await Contact.destroy({
        where: { id }
      })
      res.send(contactExist)
    }

  } catch (err) {
    res.status(400).send(err)
  }
};

module.exports = {
  createContact,
  getContacts,
  deleteContact
}