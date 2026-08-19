
export type FilterCardColor = "red" | "blue" | "green" | "brown";
export type FilterCardProps = {
  emoji: string;
  title: string;
  subtitle: string;
  onClick?: () => void;
  color?: FilterCardColor;
  selected?: boolean;
};