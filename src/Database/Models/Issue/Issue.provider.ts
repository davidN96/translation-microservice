import { ISSUE, IssueSchema } from './Issue.model';
import { MongooseModule } from '@nestjs/mongoose';

export const IssueProvider = MongooseModule.forFeature([
  { name: ISSUE, schema: IssueSchema },
]);
