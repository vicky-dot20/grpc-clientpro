import path from 'path';
import { config } from 'dotenv';

config({
  path: `.env.${process.env.NODE_ENV ?? 'local'}`,
});

export const GRPC_SERVER_ADDRESS = process.env.GRPC_SERVER_ADDRESS ?? 'localhost:8000';
