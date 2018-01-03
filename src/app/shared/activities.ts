import { IActivity } from './activity.model';

export const SAVED_ACTIVITIES: IActivity[] = [
  {
    'id' : 1,
    'name' : 'Went for a Hike',
    'date' : new Date('06/01/2017'),
    'distance': 7.5,
    'comments': 'nice day, awesome hike',
    'gpxData': '../../assets/gpx/1.gpx'

  },
  {
    'id' : 2,
    'name' : 'Went for a walk',
    'date' : new Date('10/19/2017'),
    'distance': 3.5,
    'comments': 'nice day, cool temp',
    'gpxData': '../../assets/gpx/2.gpx'

  }
];
