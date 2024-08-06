import { Router } from 'express'
import * as skillsCtrl from '../controllers/skills.js'
const router = Router()

// GET localhost:3000/skills
router.get('/', skillsCtrl.index)
// GET localhost:3000/skills/new
router.get('/new', skillsCtrl.new)
// GET localhost:3000/skills/:skillId
router.get('/:skillId', skillsCtrl.show)
// GET localhost:3000/skills/:skillId/edit
router.get('/:skillId/edit', skillsCtrl.edit)
// GET localhost:3000/skills/
router.post('/',skillsCtrl.create)
// GET localhost:3000/skills/:skillId
router.delete('/:skillId', skillsCtrl.delete)
router.put('/:skillId', skillsCtrl.update)








export { router }
