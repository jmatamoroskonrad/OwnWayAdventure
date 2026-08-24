export type TimeLineActivity = {
  image: string;
  price: number;
  badge: string;
  title: string;
  duration: string;
  guests: number;
};

export type TimeLineProps = {
  time: string;
  activity?: TimeLineActivity;
  onEdit?: () => void;
  onRemove?: () => void;
  onSetTime?: (time: string) => void;
};