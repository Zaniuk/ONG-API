const { Member } = require('../models');


const findOneMember = async (req, res) => {
    const { id } = req.params;
    const member = await Member.findOne({
        attributes: ["id", "name", "description", "image", "rol"],
        where: { id: id },
    });
    res.status(200).send(member);
    };

const createMember = async (req, res, _next) => {
    try {
        const { name, image, rol, description } = req.body
        const newMember = await Member.create({
            name,
            image,
            rol,
            description
        })
        res.send(newMember)
    } catch (err) {
        res.status(400).send(err)
    }
};
const findAllMembers = async (req, res, _next) => {
    try {
        const members = await Member.findAll();
        res.json(members);
    } catch (err) {
        res.status(400).send(err)
    }

};
const removeMember = async (req, res, _next) => {
    try {
        const { id } = req.params
        const memberExist = await Member.findOne({ where: { id } })
        if (!memberExist) {
            throw "Member doesn't exist"
        } else {

            await Member.destroy({
                where: { id }
            })
            res.send(memberExist)
        }

    } catch (err) {
        res.status(400).send(err)
    }
};
const updateMember = async (req, res, _next) => {
    try {
        const { id } = req.params
        const { name, image, rol, description } = req.body
        const memberExist = await Member.findOne({ where: { id } })
        if (!memberExist) {
            throw "Member doesn't exist"
        } else {
            const member = {
                id,
                name,
                image,
                rol,
                description
            }
            await Member.update(member, {
                where: { id }
            })
            res.send(member)
        }

    } catch (err) {
        res.status(400).send(err)
    }
};

module.exports = {
    createMember,
    findAllMembers,
    removeMember,
    updateMember,
    findOneMember
}