import { TimelineCapShape } from '../../enums/timelineCapShape';
import { TimelineCursorType } from '../../enums/timelineCursorType';
import { TimelineStyle } from '../styles/timelineStyle';

export const defaultTimelineStyle = {
  width: 2,
  marginTop: 15,
  marginBottom: 0,
  strokeColor: '#3D54A9',
  fillColor: '#3D54A9',
  lineDash: [5, 5],
  capStyle: {
    width: 10,
    height: 10,
    /**
     * Draw timeline rectangular cap.
     */
    capType: TimelineCapShape.Rect,
    strokeColor: '#3D54A9',
    fillColor: '#3D54A9',
  },
  cursor: TimelineCursorType.EWResize,
} as TimelineStyle;
