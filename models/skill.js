import mongoose from 'mongoose'

const skillSchema = new mongoose.Schema({
  name: String,
  level: String,
  field: String
})
const Skill = mongoose.model('Skill', skillSchema)

export {
  Skill
}