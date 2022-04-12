import { Teaser, Hero, Logos } from '@quansight/shared/ui-components';

import { Board } from '../Board/Board';
import { BoardList } from '../BoardList/BoardList';
import { FeatureArticle } from '../FeatureArticle/FeatureArticle';
import { Features } from '../Features/Features';
import { IntertwinedArticle } from '../IntertwinedArticle/IntertwinedArticle';
import { JobList } from '../JobList/JobList';
import { StickyNotes } from '../StickyNotes/StickyNotes';

import { ComponentType } from './types';

export const componentsMap = {
  [ComponentType.Board]: Board,
  [ComponentType.BoardList]: BoardList,
  [ComponentType.FeatureArticle]: FeatureArticle,
  [ComponentType.Features]: Features,
  [ComponentType.Hero]: Hero,
  [ComponentType.IntertwinedArticle]: IntertwinedArticle,
  [ComponentType.JobList]: JobList,
  [ComponentType.StickyNotes]: StickyNotes,
  [ComponentType.Teaser]: Teaser,
  [ComponentType.Logos]: Logos,
};
