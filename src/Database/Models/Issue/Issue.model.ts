import { TranslateMessage } from 'src/Modules/Translation/Translation.dto';
import { Prop, Schema, SchemaFactory } from '@nestjs/mongoose';
import { IssueType } from './Issue.enums';
import { Document } from 'mongoose';
export * from './Issue.enums';

export type IssueDocument = Issue & Document;
export const ISSUE = 'Issue';

@Schema({ _id: false })
export class IssueMessage implements TranslateMessage {
  @Prop({ type: String })
  public key: string;

  @Prop({ type: String })
  public language: string;
}

@Schema({ versionKey: false })
export class Issue {
  @Prop({ type: String, default: IssueType.MissingTranslation })
  public type: string;

  @Prop({ type: IssueMessage })
  public message: IssueMessage;
}

export const IssueSchema = SchemaFactory.createForClass(Issue);
