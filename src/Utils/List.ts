import { Pager } from 'src/Modules/Issue/Issue.dto';
import { PagerData } from './Types';

export const usePager = (pager: Pager): PagerData => ({
  skip: (pager.index - 1 >= 0 ? pager.index - 1 : 0) * pager.size,
  size: pager.size,
});
