export const formatToLongDate = (date: Date = new Date()): string => {
  const options: Intl.DateTimeFormatOptions = { 
    weekday: 'long', 
    day: 'numeric', 
    month: 'long' 
  };
  
  return date.toLocaleDateString('en-US', options);
};

export const parseTimeToMinutes = (time: string): number => {
  const [rawTime, period] = time.trim().split(" ");
  const [hoursStr, minutesStr] = rawTime.split(":");
  let hours = Number(hoursStr);
  const minutes = Number(minutesStr) || 0;

  if (period?.toUpperCase() === "PM" && hours !== 12) hours += 12;
  if (period?.toUpperCase() === "AM" && hours === 12) hours = 0;

  return hours * 60 + minutes;
};

export const formatTimeInputTo12Hour = (value: string): string => {
  const [hoursStr, minutesStr] = value.split(":");
  let hours = Number(hoursStr);
  const minutes = minutesStr ?? "00";
  const period = hours >= 12 ? "PM" : "AM";
  hours = hours % 12;
  if (hours === 0) hours = 12;
  return `${hours}:${minutes} ${period}`;
};