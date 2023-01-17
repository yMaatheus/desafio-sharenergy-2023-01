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
  }
};