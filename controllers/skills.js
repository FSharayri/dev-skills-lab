// import {skills} from '../data/skills-data.js'
import { Skill } from '../models/skill.js'

// Cat.create({name: 'Fred', breed: 'Taco Cat'})


async function index(req,res){
    res.redirect('/skills/index')
}


async function skillsfunc(req,res){
  try{
    const skills = await Skill.find({})
    res.render('skills/index', {
      skills
    })
  }
  catch(err){
    console.log(err)
    res.redirect('/')
  }
}

async function newSkill(req, res) {
    res.render('skills/new')
}


async function create(req,res){
  try{
    console.log(req.body)
    await Skill.create(req.body)
    res.redirect('/skills/index')
  }
  catch(err){
    console.log(err)
    res.redirect('/')
  }
}

async function show(req, res) {
  try{
  const skill =  await Skill.findById(req.params.skillId) 
  res.render('skills/show', {skill })
  }
  catch(err){
    console.log(err)
    res.redirect('/skills')
  }
}

async function deleteSkill(req,res){
  try{
    await Skill.findByIdAndDelete(req.params.skillId)
    res.redirect('/skills')
  }
  catch(err){
    console.log(err)
    res.redirect('/skills')
  }
}

async function edit(req, res) {
  try{
  const skill =  await Skill.findById(req.params.skillId) 
  res.render('skills/edit', {skill})
  }
  catch(err){
    console.log(err)
    res.redirect('/skills')
  }
}

async function update(req, res) {
  try{
  await Skill.findByIdAndUpdate(req.params.skillId,req.body, {new : true}) 
  res.redirect(`/skills/${req.param.skillId}`)
  }
  catch(err){
    console.log(err)
    res.redirect('/skills')
  }
}

export{
  index,
  skillsfunc as skills,
  create,
  newSkill as new,
  show,
  deleteSkill as delete,
  edit,
  update,


}