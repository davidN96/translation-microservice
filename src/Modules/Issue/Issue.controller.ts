import { EventPattern, MessagePattern } from '@nestjs/microservices';
import { Issue } from 'models/Issue/Issue.model';
import { IssueService } from './Issue.service';
import { Patterns } from 'src/Utils/Patterns';
import { Controller } from '@nestjs/common';

@Controller()
export class IssueController {
  constructor(private readonly Issue: IssueService) {}

  @MessagePattern(Patterns.ListIssues)
  public async listIssues(): Promise<Issue[]> {
    return await this.Issue.getAllIssues();
  }

  @EventPattern(Patterns.ReportIssue)
  public async reportIssue(issue: Issue): Promise<void> {
    return await this.Issue.createIssue(issue);
  }
}
