const { Slide } = require('../models');

const getAllSlides = async (_req, res, _next) => {
    try {
        const slides = await Slide.findAll()
        if (slides) {
            res.status(200).send(slides)
        } else {
            res.status(404).send({ 'error': 'no slides where found' })
        }
    } catch (e) {
        res.status(400).send({ 'error': e })
    }
}

const createSlide = async (req, res, _next) => {
    try {
        const { imageUrl, text, order, organizationId } = req.body
        const newSlide = await Slide.create({
            imageUrl,
            text,
            order,
            organizationId
        })
        res.send(newSlide)
    } catch (err) {
        res.status(400).send(err)
    }
};

const updateSlide = async (req, res, _next) => {
    try {
        const { id } = req.params
        const { imageUrl, text, order, organizationId } = req.body
        const slideExist = await Slide.findOne({ where: { id } })
        if (!slideExist) {
            throw "Slide doesn't exist"
        } else {
            const slide = {
                id,
                imageUrl,
                text,
                order,
                organizationId
            }
            await Slide.update(slide, {
                where: { id }
            })
            res.send(slide)
        }
    } catch (err) {
        res.status(400).send(err)
    }
};

const removeSlide = async (req, res, _next) => {
    try {
        const { id } = req.params
        const slideExist = await Slide.findOne({ where: { id } })
        if (!slideExist) {
            throw "Slide doesn't exist"
        } else {

            await Slide.destroy({
                where: { id }
            })
            res.send(slideExist)
        }

    } catch (err) {
        res.status(400).send(err)
    }
};

module.exports = {
    getAllSlides,
    createSlide,
    updateSlide,
    removeSlide
}