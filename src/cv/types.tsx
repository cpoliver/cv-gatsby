export type Location = {
  name: string;
  isRemote?: boolean;
  latLong?: [string, string];
  flagUrl?: string;
};

export type TrainingHistoryItem = {
  institution: string;
  date: {
    from: string;
    to: string;
  };
  description: string[];
};

export type WorkHistoryItem = {
  company: string;
  role: string;
  date: {
    from: string;
    to?: string;
  };
  location?: Location;
  description: string | string[];
};

export type CVData = {
  name: string;
  role: string;
  email: string;
  website?: string;
  phone: string;
  location: Location;
  profile: string;
  skills: string[];
  workHistory: WorkHistoryItem[];
  trainingHistory: TrainingHistoryItem[];
};
