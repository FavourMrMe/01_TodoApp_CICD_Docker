
const request = require('supertest');
const app = require('../app/server'); // Adjust path if needed

describe('GET /todos', () => {
  it('should return an array', async () => {
    const res = await request(app).get('/todos');
    expect(res.body).toBeInstanceOf(Array);
  });
});
