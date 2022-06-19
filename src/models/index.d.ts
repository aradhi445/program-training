import { ModelInit, MutableModel, PersistentModelConstructor } from "@aws-amplify/datastore";





type NavBarMetaData = {
  readOnlyFields: 'createdAt' | 'updatedAt';
}

type HomeWorksMetaData = {
  readOnlyFields: 'createdAt' | 'updatedAt';
}

type QuizMetaData = {
  readOnlyFields: 'createdAt' | 'updatedAt';
}

type CourseDetailsMetaData = {
  readOnlyFields: 'createdAt' | 'updatedAt';
}

export declare class NavBar {
  readonly id: string;
  readonly createdAt?: string | null;
  readonly updatedAt?: string | null;
  constructor(init: ModelInit<NavBar, NavBarMetaData>);
  static copyOf(source: NavBar, mutator: (draft: MutableModel<NavBar, NavBarMetaData>) => MutableModel<NavBar, NavBarMetaData> | void): NavBar;
}

export declare class HomeWorks {
  readonly id: string;
  readonly task?: string | null;
  readonly content?: string | null;
  readonly name?: string | null;
  readonly createdAt?: string | null;
  readonly updatedAt?: string | null;
  constructor(init: ModelInit<HomeWorks, HomeWorksMetaData>);
  static copyOf(source: HomeWorks, mutator: (draft: MutableModel<HomeWorks, HomeWorksMetaData>) => MutableModel<HomeWorks, HomeWorksMetaData> | void): HomeWorks;
}

export declare class Quiz {
  readonly id: string;
  readonly question?: string | null;
  readonly option1?: string | null;
  readonly option2?: string | null;
  readonly option3?: string | null;
  readonly createdAt?: string | null;
  readonly updatedAt?: string | null;
  constructor(init: ModelInit<Quiz, QuizMetaData>);
  static copyOf(source: Quiz, mutator: (draft: MutableModel<Quiz, QuizMetaData>) => MutableModel<Quiz, QuizMetaData> | void): Quiz;
}

export declare class CourseDetails {
  readonly id: string;
  readonly lecturer?: string | null;
  readonly subject?: string | null;
  readonly content?: string | null;
  readonly datetime?: string | null;
  readonly createdAt?: string | null;
  readonly updatedAt?: string | null;
  constructor(init: ModelInit<CourseDetails, CourseDetailsMetaData>);
  static copyOf(source: CourseDetails, mutator: (draft: MutableModel<CourseDetails, CourseDetailsMetaData>) => MutableModel<CourseDetails, CourseDetailsMetaData> | void): CourseDetails;
}