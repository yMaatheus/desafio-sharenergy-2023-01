type ErrorResponseObject = {
  error: string;
  httpStatus: number
};

export type ErrorCatalog = {
  [key in ErrorTypes]: ErrorResponseObject
};

export enum ErrorTypes {
  ObjectNotFound = 'ObjectNotFound',
  InvalidMongoId = 'InvalidMongoId',
  InvalidCredentials = 'InvalidCredentials',
  TokenNotFound = 'TokenNotFound',
  AllFieldsMustBeFilled = 'AllFieldsMustBeFilled',
  InvalidId = 'InvalidId',
  FieldWithInvalidFormat = 'FieldWithInvalidFormat',
  ObjectAlreadyExistsDatabase = 'ObjectAlreadyExistsDatabase',
}

export const errorCatalog: ErrorCatalog = {
  ObjectNotFound: {
    error: 'Object not found',
    httpStatus: 404,
  },
  InvalidMongoId: {
    error: 'Id must have 24 hexadecimal characters',
    httpStatus: 400,
  },
  InvalidCredentials: {
    error: 'Invalid credentials',
    httpStatus: 401,
  },
  TokenNotFound: {
    error: 'Token not found',
    httpStatus: 401,
  },
  AllFieldsMustBeFilled: {
    error: 'All fields must be filled',
    httpStatus: 400,
  },
  InvalidId: {
    error: 'id invalid',
    httpStatus: 400,
  },
  FieldWithInvalidFormat: {
    error: 'Field with invalid format',
    httpStatus: 400,
  },
  ObjectAlreadyExistsDatabase: {
    error: 'Object already exists in database',
    httpStatus: 400,
  },
};