export type RitmoSummaryBarProps = {
  experienceCount: number;
  hoursPlanned: number;
  guestCount: number;
  total: number;
  onConfirm?: () => void;
  disclaimer?: string;
  paid?: boolean;
};