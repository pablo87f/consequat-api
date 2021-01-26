import { ConflictException, HttpException } from '@nestjs/common';

export class ApiError extends ConflictException {
  constructor(message: string, readonly code = '') {
    super(message, code);
  }
}
