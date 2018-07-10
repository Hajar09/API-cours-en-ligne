import express from "express" 
import { Cour } from "../models/cour"

const courRouter = express.Router()

courRouter.get('/', (req, res, next) => {
    Cour.find({}, (err, cours) => {
        if(err) res.send(err)
        res.json(cours)
    })
})

courRouter.get("/add", (req, res) => {
    res.render('add_cours')
})

courRouter.post("/add", (req, res) => {//pb req.body vide    
    let newCour = new Cour(req.body)
    newCour.save((err, cour) => {
        if(err) res.send(err)
        res.json(cour)
        //res.redirect('/')
        
    })
})

// courRouter.get("/:id", (req, res) => {
//     let _id= req.params.id
//     Cour.findById({_id}, (err, cour) => {
//         if(err) res.send(err)
//         res.json(cour)
//     })
// })

// courRouter.post('/:id', (req,res) => {
//     Cour.findOneAndUpdate({_id: req.params.id}, req.body, (err, cour) => {
//         if(err) res.send(err)
//         res.json(cour)
//     })
// })

// courRouter.put('/:id', (req,res) => {
//     Cour.findById({
//         _id:req.params.id
//     }, (err, cour) => {
//         if(err) res.send(err)
//         Object.assign(cour, req.body).save((err,cour) => {
//             if(err) res.send(err)
//             res.json({
//                 message: "cours modifié",
//                 cour
//             })
//         })
//     })
// })


// courRouter.delete('/:id', (req,res) => {
//     Cour.remove({_id: req.params.id}, (err, cour) => {
//         if(err) res.send(err)
//         res.json({message: "cours supprimé avec succès", cour})
//     })
// })

export {courRouter}