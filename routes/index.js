// declare our routes here

const { Router } = require("express")
const { main } = require("../lib/app")

const router = Router()

router.get("/", async (req,res) => {
    let weather = await main("ellesmere port, cheshire, uk")
    res.render("index", { weather })
})

router.post("/", async (req,res) => {
    let weather = await main()
})

module.exports = router