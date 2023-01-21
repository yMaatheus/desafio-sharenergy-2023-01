import app from '../../src/app';
import sinon from 'sinon'
import chai from 'chai'
import chaiHttp = require('chai-http')
import { Response } from 'superagent';
import { Model } from 'mongoose';
import { userValid, userValidDatabase } from '../data/userMock';
import { customersListDatabase } from '../data/customerMock';

chai.use(chaiHttp);

const { expect } = chai;

describe('Login', () => {
  let chaiHttpResponse: Response;
  let token: string;

  before(async () => {
    sinon.stub(Model, 'findOne').resolves(userValidDatabase);
      chaiHttpResponse = await chai.request(app)
        .post('/login')
        .send(userValid);
    
    token = chaiHttpResponse.body.token;
  })

  afterEach(() => sinon.restore());

  describe('GET /customer', () => {
    it('successfully', async () => {
      sinon.stub(Model, "find").resolves(customersListDatabase);

      chaiHttpResponse = await chai.request(app)
        .get('/customer')
        .set('Authorization', token);

      expect(chaiHttpResponse.status).to.equal(200);
      expect(chaiHttpResponse.body).to.deep.equal(customersListDatabase);
    });

  })

});