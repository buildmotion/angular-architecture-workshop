export class CreateBase {
    createdOn?: Date;
    createdBy?: string;
}

export class NewAccount extends CreateBase {
    acceptTermsConditions: boolean;
    emailAddress: string;
    password: string;
    passwordConfirm: string;
}
