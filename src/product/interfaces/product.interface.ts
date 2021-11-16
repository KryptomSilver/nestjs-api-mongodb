import { Document } from 'mongoose';

export interface IProduct extends Document {
  readonly _id: string;
  readonly name: string;
  readonly description: string;
  readonly price: number;
  readonly quantity: number;
}
