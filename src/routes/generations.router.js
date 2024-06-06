const express = require("express");

const generationUseCases = require("../usecases/genarations.usecases");

const router = express.Router();

router.get("/", async (req, res) => {
    try {
        const generations = await generationUseCases.getAll();

        res.json({
            success: true,
            message: "All generations",
            data: {
                generations,
            },
        });
    } catch (error) {
        res.status(error.status || 500);
        res.json({
            success: false,
            error: error.message,
        });
    }
});

router.get("/:id", async (req, res) => {
    try {
        const { id } = req.params;
        const generation = await generationUseCases.getById(id);

        res.json({
            success: true,
            message: "Generation found",
            data: {
                generation,
            },
        });
    } catch (error) {
        res.status(error.status || 500);
        res.json({
            success: false,
            error: error.message,
        });
    }
});

router.post('/', async (req, res) => {
    try {
        const generationCreated = await generationUseCases.create(req.body);
        res.json({
            success: true,
            data: { generation: generationCreated },
        })
    } catch (error) {
        res.status(error.status || 500);
        res.json({
            success: false,
            error: error.message,
        });
    }
})

router.delete('/:id', async ( req, res) => {
    try {
        // const id = req.params.id
        const { id } = req.params;
        const generationDeleted = await generationUseCases.deleteById(id);
        res.json({
            success: true,
            data: { generation: generationDeleted },
        })
    } catch (error) {
        res.status(error.status || 500);
        res.json({
            success: false,
            error: error.message,
        });
    }
})

router.patch('/:id', async ( req, res) => {
    try {
        // const id = req.params.id
        const { id } = req.params;
        const generationUpdated = await generationUseCases.updateById(id, req.body);
        res.json({
            success: true,
            data: { generation: generationUpdated },
        })
    } catch (error) {
        res.status(error.status || 500);
        res.json({
            success: false,
            error: error.message,
        });
    }
})

module.exports = router;
