import app from '../../src/app';
import sinon from 'sinon'
import chai from 'chai'
import chaiHttp = require('chai-http')
import { Response } from 'superagent';
import { Model } from 'mongoose';
import { userInvalid, userValid, userValidDatabase } from '../data/userMock';
import { errorCatalog } from '../../src/errors/catalog';

chai.use(chaiHttp);

const { expect } = chai;

describe('Login', () => {
  let chaiHttpResponse: Response;

  afterEach(() => sinon.restore());

  describe('POST /login', () => {
    it('successfully', async () => {
      sinon.stub(Model, 'findOne').resolves(userValidDatabase);
      chaiHttpResponse = await chai.request(app)
        .post('/login')
        .send(userValid);

      expect(chaiHttpResponse.status).to.equal(200);
      expect(chaiHttpResponse.body).to.have.property('token');
    });

    it('failure: invalid credentials', async () => {
      sinon.stub(Model, 'findOne').resolves(userValidDatabase);
      chaiHttpResponse = await chai.request(app)
        .post('/login')
        .send(userInvalid);

      const { httpStatus, error } = errorCatalog.InvalidCredentials;

      expect(chaiHttpResponse.status).to.equal(httpStatus);
      expect(chaiHttpResponse.body).to.deep.equal({ error });
    });

    it('failure: all fields must be filled', async () => {
      chaiHttpResponse = await chai.request(app)
        .post('/login')
        .send();

      const { httpStatus, error } = errorCatalog.AllFieldsMustBeFilled;

      expect(chaiHttpResponse.status).to.equal(httpStatus);
      expect(chaiHttpResponse.body).to.deep.equal({ error });
    });

    it('failure: object not found', async () => {
      sinon.stub(Model, 'findOne').resolves(null);
      chaiHttpResponse = await chai.request(app)
        .post('/login')
        .send(userInvalid);

      const { httpStatus, error } = errorCatalog.ObjectNotFound;

      expect(chaiHttpResponse.status).to.equal(httpStatus);
      expect(chaiHttpResponse.body).to.deep.equal({ error });
    });

  })

  describe('GET /login/me', () => {
    it('successfully', async () => {
      sinon.stub(Model, "findOne").resolves(userValidDatabase);

      chaiHttpResponse = await chai.request(app)
        .post('/login')
        .send(userValid);

      const { token } = chaiHttpResponse.body;

      chaiHttpResponse = await chai.request(app)
        .get('/login/me')
        .set('Authorization', token);

      expect(chaiHttpResponse.status).to.equal(200);
      expect(chaiHttpResponse.body).to.have.property('userName');
      expect(chaiHttpResponse.body.userName).to.be.equal(userValid.userName);
    });

  })

});