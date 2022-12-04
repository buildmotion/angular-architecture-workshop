import { accountInfo } from '@buildmotion/dashboard-types';
import { CreateNewAccountAction } from './create-new-account.action';

describe('CreateNewAccountAction', () => {
  it('should create an instance', () => {
    expect(new CreateNewAccountAction(new accountInfo.NewAccount())).toBeTruthy();
  });
});
