import { IUser } from './../../../src/models/User';
import { userInvalid, userValid, userValidWithPasswordInvalid } from './../../data/userMock';
import { expect } from 'chai';
import * as sinon from 'sinon';
import { User } from '../../../src/models/User';
import UserService from '../../../src/services/user.service';
import { userValidDatabase } from '../../data/userMock';
import { ErrorTypes } from '../../../src/errors/catalog';

describe('User Service', () => {
  const user = new User();
  const service = new UserService(user);

  before(() => {
    sinon.stub(user, 'findOne')
      .onFirstCall().resolves(userValidDatabase)
      .onSecondCall().resolves(userValidDatabase)
      .resolves(null);
  })

  after(() => sinon.restore())

  describe('Login', () => {
    it('successfully', async () => {
      const result = await service.login(userValid);

      expect(result).to.have.property('token');
    });

    it('failure: invalid credentials', async () => {
      let error;
      try {
        await service.login(userValidWithPasswordInvalid);
      } catch (err: any) {
        error = err
      }

      expect(error.message).to.be.deep.equal(ErrorTypes.InvalidCredentials);
    });

    it('failure: all fields must be filled', async () => {
      let error;
      try {
        await service.login({} as IUser);
      } catch (err: any) {
        error = err
      }

      expect(error.message).to.be.deep.equal(ErrorTypes.AllFieldsMustBeFilled);
    });

    it('failure: object not found', async () => {
      let error;
      try {
        await service.login(userInvalid);
      } catch (err: any) {
        error = err
      }

      expect(error.message).to.be.deep.equal(ErrorTypes.ObjectNotFound);
    });

  });

});