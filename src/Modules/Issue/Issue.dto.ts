import { IssueType } from 'models/Issue/Issue.enums';
import { Pager } from 'src/Utils/Types';

export interface ListIssuesFilters {
  type: IssueType;
  pager: Pager;
}
