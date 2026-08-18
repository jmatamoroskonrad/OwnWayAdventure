export const formatToLongDate = (date: Date = new Date()): string => {
  const options: Intl.DateTimeFormatOptions = { 
    weekday: 'long', 
    day: 'numeric', 
    month: 'long' 
  };
  
  return date.toLocaleDateString('en-US', options);
};
