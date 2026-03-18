import express from 'express'
import adoptionRouter from './routes/adoption.router.js'
import usersRouter from './routes/users.router.js'
import swaggerUi from 'swagger-ui-express'
import YAML from 'yamljs'

const app = express()
app.use(express.json())

const swaggerDocument = YAML.load('./src/docs/users.yaml')
app.use('/api/docs', swaggerUi.serve, swaggerUi.setup(swaggerDocument))

app.use('/api/adoptions', adoptionRouter)
app.use('/api/users', usersRouter)

export default app
