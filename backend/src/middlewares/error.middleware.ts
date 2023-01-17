import { ErrorRequestHandler } from 'express';
import { StatusCodes } from 'http-status-codes';
import { ErrorTypes, errorCatalog } from '../errors/catalog';

const errorHandler: ErrorRequestHandler = (err: Error, _r, res, _n) => {
  // aqui vamos fazer o cast da mensagem de erro para uma chave do Enum ErrorTypes
  // com o keyof typeof - traduzindo seria algo como 'chaves do tipo de'
  // dizemos que o `err.message` é alguma das chaves do ErrorTypes
  const messageAsErrorType = err.message as keyof typeof ErrorTypes;

  // vamos usar a mensagem para acessar um erro do nosso catálogo
  // se a mensagem não for uma chave do nosso catálogo "mappedError" vai retornar undefined e não entrar no "if"
  const mappedError = errorCatalog[messageAsErrorType];
  if (mappedError) {
    // dado que o erro está mapeado no nosso catálogo
    // "mappedError" tem valores necessário para responder a requisição
    const { httpStatus, error } = mappedError;
    return res.status(httpStatus).json({ error });
  }
  return res.status(StatusCodes.INTERNAL_SERVER_ERROR).json({ error: 'internal error' });
};

export default errorHandler;