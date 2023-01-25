const RFC5322 =
  // eslint-disable-next-line no-useless-escape
  /^(([^<>()\[\]\\.,;:\s@"]+(\.[^<>()\[\]\\.,;:\s@"]+)*)|(".+"))@((\[[0-9]{1,3}\.[0-9]{1,3}\.[0-9]{1,3}\.[0-9]{1,3}])|(([a-zA-Z\-0-9]+\.)+[a-zA-Z]{2,}))$/;
const email = RFC5322;
const engAndNum = /(?=.*[A-Za-z])(?=.*\d)/;
const specialCharacters = /(?=.*[$@$!%*#?&])/;

type Validations = { (value: string): boolean };
type CriterionValidations = { (value: string, criterion: number): boolean };

export const isRequired: Validations = (value) => {
  return value.length > 0;
};

export const isMin: CriterionValidations = (value, criterion) => {
  return Number(value) >= criterion;
};

export const isMax: CriterionValidations = (value, criterion) => {
  return Number(value) <= criterion;
};

export const isMinLength: CriterionValidations = (value, criterion) => {
  return value.length >= criterion;
};

export const isMaxLength: CriterionValidations = (value, criterion) => {
  return value.length <= criterion;
};

export const isEngAndNum: Validations = (value) => {
  return engAndNum.test(value);
};

export const isSpecialCharactors: Validations = (value) => {
  return specialCharacters.test(value);
};

export const isEmail: Validations = (value) => {
  return email.test(value);
};
