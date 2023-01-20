import app from '../../src/app';
import sinon from 'sinon'
import chai from 'chai'
import chaiHttp = require('chai-http')
import bcrypt from 'bcryptjs';
import { Response } from 'superagent';
import { Model } from 'mongoose';

chai.use(chaiHttp);

const { expect } = chai;

describe('Login', () => {
  let chaiHttpResponse: Response;

  afterEach(() => sinon.restore());

  describe('POST /login', () => {
    it('successfully', async () => {
      sinon.stub(Model, 'findOne').resolves({ userName: 'user_valid', password: bcrypt.hashSync('password_valid', bcrypt.genSaltSync(10)) });
      chaiHttpResponse = await chai.request(app)
        .post('/login')
        .send({ userName: 'user_valid', password: 'password_valid' });

      expect(chaiHttpResponse.status).to.equal(200);
      expect(chaiHttpResponse.body).to.have.property('token');
    });

  })
});