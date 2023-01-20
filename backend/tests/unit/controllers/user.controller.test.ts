import { expect } from 'chai';
import * as sinon from 'sinon';
import { Request, Response } from 'express';
import { User } from '../../../src/models/User';
import UserService from '../../../src/services/user.service';
import UserController from '../../../src/controllers/user.controller';

describe('User Controller', () => {
  const user = new User()
  const service = new UserService(user);
  const controller = new UserController(service);
  const req = {} as Request;
  const res = {} as Response;

  before(() => {
    sinon.stub(service, 'login').resolves({ token: "token_valid" });

    res.status = sinon.stub().returns(res);
    res.json = sinon.stub().returns(res);
    res.end = sinon.stub().returns(res);
  });

  after(() => {
    sinon.restore()
  })

  describe('login user', () => {
    it('successfully', async () => {
      req.body = { userName: 'user_valid', password: 'password_valid' };
      await controller.login(req, res);

      expect((res.status as sinon.SinonStub).calledWith(200)).to.be.true;
      expect((res.json as sinon.SinonStub).calledWith({ token: 'token_valid' })).to.be.true;
    });
  });
});