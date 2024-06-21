export function formatTime(counter: number) {
  const minutes = Math.floor(counter / 60);
  const seconds = counter % 60;
  const formattedMinutes = minutes.toString().padStart(2, "0");
  const formattedSeconds = seconds.toString().padStart(2, "0");
  return `${formattedMinutes}:${formattedSeconds}`;
}
