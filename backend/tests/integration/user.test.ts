import app from '../../src/app';
import sinon from 'sinon'
import chai from 'chai'
import chaiHttp = require('chai-http')
import { Response } from 'superagent';
import { Model } from 'mongoose';
import { userValid, userValidDatabase } from '../data/userMock';

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

  })
});