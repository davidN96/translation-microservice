import { Prop, Schema, SchemaFactory } from '@nestjs/mongoose';
import { IssueType } from './Issue.enums';
import { Document } from 'mongoose';
export * from './Issue.enums';

export type IssueDocument = Issue & Document;
export const ISSUE = 'Issue';

@Schema({ versionKey: false })
export class Issue {
  @Prop({ type: String, default: IssueType.MissingTranslation })
  public type: string;

  @Prop({ type: String })
  public message: string;

  public get id(): string {
    return this.id;
  }
}

export const IssueSchema = SchemaFactory.createForClass(Issue);
