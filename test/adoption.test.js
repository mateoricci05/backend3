import request from 'supertest'
import app from '../src/app.js'

describe('Adoption Router', () => {

  it('GET /api/adoptions debe devolver mascotas', async () => {
    const res = await request(app).get('/api/adoptions')
    expect(res.statusCode).toBe(200)
    expect(Array.isArray(res.body)).toBe(true)
  })

  it('POST /api/adoptions/:id adopta mascota', async () => {
    const res = await request(app).post('/api/adoptions/1')
    expect(res.statusCode).toBe(200)
    expect(res.body.message).toBe('Adopted')
  })

  it('POST mascota inexistente', async () => {
    const res = await request(app).post('/api/adoptions/999')
    expect(res.statusCode).toBe(404)
  })

})
