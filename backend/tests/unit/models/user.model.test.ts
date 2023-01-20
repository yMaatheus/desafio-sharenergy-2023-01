import { expect } from 'chai';
import sinon from 'sinon';
import { Model } from 'mongoose';
import { User } from '../../../src/models/User';
import { userValid, userValidDatabase } from '../../data/userMock';

describe('User Model', () => {
  const user = new User();

  before(() => {
    sinon.stub(Model, 'findOne').resolves(userValidDatabase);
  });

  after(() => sinon.restore());

  describe('FindOne', () => {
    it('successfully', async () => {
      const result = await user.findOne(userValid.userName);
      expect(result).to.be.deep.equal(userValidDatabase);
    });

    it('failure: username not found', async () => {
      try {
        await user.findOne('ID_ERRADO');
      } catch (error: any) {
        expect(error.message).to.be.eq('InvalidMongoId');
      }
    });
  });
});