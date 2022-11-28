const { Organization } = require('../models');


const getOrganization = async (req, res, _next) => {
    try {
        const organization = await Organization.findOne();
        res.json(organization);
    } catch (err) {
        res.status(400).send(err)
    }

};

const updateOrganization = async (req, res, _next) => {
    try {
        const { title, description, image, welcomeTitle, welcomeImage, facebook, linkedin, instagram, facebookUrl, linkedinUrl, instagramUrl } = req.body
        const existOrganization = await Organization.findOne()
        if (!existOrganization) {
            throw "Organization doesn't exist"
        } else {
            const organization = {
                id: existOrganization.id,
                title: title,
                description: description,
                image: image,
                welcomeTitle: welcomeTitle,
                welcomeImage: welcomeImage,
                facebook: facebook,
                linkedin: linkedin,
                instagram: instagram,
                facebookUrl: facebookUrl,
                linkedinUrl: linkedinUrl,
                instagramUrl: instagramUrl
            }
            await Organization.update(organization, {
                where: { id: organization.id }
            })
            res.json(organization)
        }
    } catch (error) {
        res.status(400).send(err)
    }

}

module.exports = {
    getOrganization,
    updateOrganization
}