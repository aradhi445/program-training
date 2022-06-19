// @ts-check
import { initSchema } from '@aws-amplify/datastore';
import { schema } from './schema';



const { NavBar, HomeWorks, Quiz, CourseDetails } = initSchema(schema);

export {
  NavBar,
  HomeWorks,
  Quiz,
  CourseDetails
};