import type { LucideIcon } from 'lucide-react';

export type ScheduleActivityCardProps = {
    tourState: string;
    startTime: string;
    imgSrc: string;
    title: string;
    duration: string;
    guests: number;
    price: number;
    icon: LucideIcon; 
}