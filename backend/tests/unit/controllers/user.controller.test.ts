import { expect } from 'chai';
import * as sinon from 'sinon';
import { Request, Response } from 'express';
import { User } from '../../../src/models/User';
import UserService from '../../../src/services/user.service';
import UserController from '../../../src/controllers/user.controller';
import { tokenValid, userValid } from '../../data/userMock';

describe('User Controller', () => {
  const user = new User()
  const service = new UserService(user);
  const controller = new UserController(service);
  const req = {} as Request;
  const res = {} as Response;

  before(() => {
    sinon.stub(service, 'login').resolves(tokenValid);

    res.status = sinon.stub().returns(res);
    res.json = sinon.stub().returns(res);
    res.end = sinon.stub().returns(res);
  });

  after(() => {
    sinon.restore()
  })

  describe('Login', () => {
    it('successfully', async () => {
      req.body = userValid;
      await controller.login(req, res);

      expect((res.status as sinon.SinonStub).calledWith(200)).to.be.true;
      expect((res.json as sinon.SinonStub).calledWith(tokenValid)).to.be.true;
    });
  });
});