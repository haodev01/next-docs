/* eslint-disable max-classes-per-file */
/* eslint-disable @typescript-eslint/no-explicit-any */
import { AuthError } from 'next-auth';

export class CustomAuthError extends AuthError {
  static type: string;

  constructor(message?: any) {
    super(message);
    this.type = message;
  }
}

export class InvalidEmailPasswordError extends AuthError {
  static type = 'InvalidEmailPasswordError';
}
