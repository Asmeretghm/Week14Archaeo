const express = require("express");
const router = express.Router();
const Archaeosite = require("../models/archaeo.js");



router.post("/archaeosite", async (req, res) => {
    const { siteName, region, country, age, siteType, images } = req.body;
    const archaeosite = new Archaeosite({
        siteName,
        region,
        country,
        age,
        siteType,
        images
    });


    await archaeosite.save();

    res.status(200).json({ createdArchaeosite: archaeosite });
});


router.get("/archaeosite/:id", async (req, res) => {
    try {
        const archaeosite = await Archaeosite.findById(req.params.id);
        if (archaeosite) {
            res.status(200).json({ archaeosite });
        } else {
            res.status(400).json({ archaeosite })
        }
    } catch (error) {
        res.status(400).send(error)
    }
});

router.get("/archaeosites", async (req, res) => {
    const archaeosites = await Archaeosite.find({ ...req.body });
    res.status(200).json({ archaeosites });
});


router.put("/archaeosite/:id", async (req, res) => {
    try {
        const { siteName, region, country, age, siteType, images } = req.body;
        const archaeosite = await Archaeosite.findByIdAndUpdate(req.params.id, {
            siteName,
            region,
            country,
            age,
            siteType,
            images
        },

            { upsert: true, new: true, runValidators: true }
        );
        res.status(200).json({ archaeosite });
    } catch (error) {
        res.status(400).send(error)
    }
});


router.delete("/archaeosite/:id", async (req, res) => {
    try {
        const deletedArchaeosite = await Archaeosite.findByIdAndDelete(req.params.id);

        if (deletedArchaeosite) {
            res.status(200).send('Archaeosite deleted');
        } else {
            res.status(404).send('Archaeosite not found');
        }
    } catch (error) {
        res.status(500).json({ message: `There was an error: ${error.message}` });
    }
});

router.get("/test", (req, res) => {
    res.status(200).json({ message: "good job" });
});

module.exports = router;
