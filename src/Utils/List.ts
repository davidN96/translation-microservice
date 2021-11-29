import { Pager } from 'src/Modules/Issue/Issue.dto';
import { PagerData } from './Types';
import * as _ from 'lodash';

export const usePager = (pager: Pager): PagerData => ({
  skip: (pager.index - 1 >= 0 ? pager.index - 1 : 0) * pager.size,
  size: pager.size,
});

export const useOptionalFilters = (filters: Record<string, unknown>): Record<string, unknown> => {
  const cleanFilters: Record<string, unknown> = {};

  for (const field in filters) if (!_.isEmpty(filters[field])) cleanFilters[field] = filters[field];

  return cleanFilters;
};
