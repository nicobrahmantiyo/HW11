const { app, server } = require('../app.js');
const request = require('supertest');

describe('API /todos', () => {
  it('GET /todos', (done) => {
    request(app)
      .get('/todos')
      .expect(200)
      .then((response) => {
        const firstData = response.body[0];
        expect(firstData.status).toBe('active');
        done();
      })
      .catch(done);
  });

  it('GET /todos/:id', (done) => {
    request(app)
      .get('/todos/1')
      .expect(200)
      .then((response) => {
        const data = response.body;
        expect(data.title).toBe('Watching a learning recording vidio rakamin');
        expect(data.status).toBe('active');
        done();
      })
      .catch(done);
  });

  it('POST /todos', (done) => {
    request(app)
      .post('/todos')
      .send({
        title: 'Live zoom',
        status: 'active',
      })
      .expect(200)
      .then((response) => {
        expect(response.body.message).toBe('create success');
        done();
      })
      .catch(done);
  });

  it('PUT /todos/:id', (done) => {
    request(app)
      .put('/todos/1')
      .send({
        title: 'Watching a learning recording vidio rakamin',
        status: 'active',
      })
      .expect(200)
      .then((response) => {
        expect(response.body.message).toBe('update success');

        done();
      })
      .catch(done);
  });

  it('DELETE/todos/:id', (done) => {
    request(app)
      .delete('/todos/7')
      .expect(200)
      .then((response) => {
        expect(response.body.message).toBe('todo deleted successfully');
        done();
      })
      .catch(done);
  });
});

afterAll((done) => {
  server.close();
  done();
});
