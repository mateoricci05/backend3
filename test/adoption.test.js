import request from 'supertest'
import app from '../src/app.js'

describe('Adoption', () => {
  it('GET all', async () => {
    const res = await request(app).get('/api/adoptions')
    expect(res.statusCode).toBe(200)
  })

  it('Adopt pet', async () => {
    const res = await request(app).post('/api/adoptions/1')
    expect(res.statusCode).toBe(200)
  })

  it('Error pet', async () => {
    const res = await request(app).post('/api/adoptions/999')
    expect(res.statusCode).toBe(404)
  })
})
