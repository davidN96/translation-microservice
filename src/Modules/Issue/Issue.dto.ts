import { IssueType } from 'models/Issue/Issue.enums';

export interface Pager {
  index: number;
  size: number;
}

export interface ListIssuesFilters {
  type: IssueType;
  pager: Pager;
}
