export function capitalizeFirstLetterOfEachWord(value: string): string {
  return value
    .trim()
    .replace(/\s+/g, " ")
    .split(" ")
    .map((word) => word.charAt(0).toUpperCase() + word.slice(1).toLowerCase())
    .join(" ");
}

export function formatDateTimeToLocal(value: string): string {
  const displayDate = new Date(value).toLocaleDateString("en-US");
  const displayTime = new Date(value).toLocaleTimeString("en-US");
  return `${displayDate} ${displayTime}`;
}
