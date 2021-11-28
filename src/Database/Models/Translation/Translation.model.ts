import { Prop, Schema, SchemaFactory } from '@nestjs/mongoose';
import { Document } from 'mongoose';

export type TranslationDocument = Translation & Document;
export const TRANSLATION = 'Translation';

@Schema()
export class Translation {
  @Prop({ required: true, type: String })
  public key: string;

  @Prop({ required: true, type: String })
  public language: string;

  @Prop({ type: String })
  public value: string;
}

export const TranslationSchema = SchemaFactory.createForClass(Translation);
