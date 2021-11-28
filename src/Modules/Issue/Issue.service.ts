import { TranslateMessage } from 'src/Modules/Translation/Translation.dto';
import { ISSUE, Issue } from 'models/Issue/Issue.model';
import { InjectModel } from '@nestjs/mongoose';
import { Injectable, Logger } from '@nestjs/common';
import * as DTO from './Issue.dto';
import { Model } from 'mongoose';

@Injectable()
export class IssueService {
  constructor(@InjectModel(ISSUE) private readonly Issue: Model<Issue>) {}

  private async findIssueByMessage(message: string): Promise<Issue | null> {
    return await this.Issue.findOne({ message });
  }

  public async getAllIssues(): Promise<DTO.ParsedIssue[]> {
    return this.Issue.find();
  }

  private async createMissingTranslationIssue(message: string): Promise<void> {
    await this.Issue.create({ message });
  }

  public async createIssue(issue: Issue): Promise<void> {
    await this.Issue.create(issue);
  }

  private logMissingTranslation(translation: TranslateMessage): string {
    const message = `Missing key [${translation.key}] on [${translation.language}] lang`;

    return Logger.error(message, 'Issue'), message;
  }

  public async reportMissingTranslation(translation: TranslateMessage): Promise<void> {
    const message: string = this.logMissingTranslation(translation);
    const issue = await this.findIssueByMessage(message);

    if (!issue) await this.createMissingTranslationIssue(message);
  }
}
