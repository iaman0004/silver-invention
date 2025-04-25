type SocialIcon = {
  _id: string;
  iconName: string;
  target: string;
  canContact?: boolean;
  iconType: 'material' | 'core'
};

type Company = {
  _id: string;
  org: string;
  title: string;
  duration: {
    start: Time;
    end?: Time;
  }
  location: string;
  description: Array<string>;
}

type Time = {
  month: number;
  year: number;
}