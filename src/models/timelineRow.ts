import { TimelineKeyframe } from './timelineKeyframe';
import { TimelineRowStyle } from '../settings/styles/timelineRowStyle';
import { TimelineRanged } from './timelineRanged';

export interface TimelineRow extends TimelineRanged {
  id?: string;
  style?: TimelineRowStyle;
  keyframes?: TimelineKeyframe[] | null;
  hidden?: boolean;
  /**
   * Whether group keyframes are draggable.
   */
  keyframesDraggable?: boolean;
  groupsDraggable?: boolean;
}
