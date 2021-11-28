import { IssueController } from './Issue.controller';
import { IssueService } from './Issue.service';
import { Module } from '@nestjs/common';

@Module({
  imports: [],
  controllers: [IssueController],
  providers: [IssueService],
  exports: [IssueService],
})
export class IssueModule {}
