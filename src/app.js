import express from 'express'
import usersRouter from './routes/users.router.js'
import adoptionRouter from './routes/adoption.router.js'
import swaggerUi from 'swagger-ui-express'
import YAML from 'yamljs'

const app = express()
app.use(express.json())

const swaggerDocument = YAML.load('./src/docs/users.yaml')
app.use('/api/docs', swaggerUi.serve, swaggerUi.setup(swaggerDocument))

app.use('/api/users', usersRouter)
app.use('/api/adoptions', adoptionRouter)

export default app
