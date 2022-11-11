export const millisToMinutesAndSeconds = (millis: number) => {
  var minutes: number = Math.floor(millis / 60000);
  var seconds: string = ((millis % 60000) / 1000).toFixed(0);
  return minutes + ":" + (Number(seconds) < 10 ? "0" : "") + seconds;
};

export const generateShortName = (title: string, n: number) => {
  return title?.length > n ? title.substr(0, n) + "..." : title;
};
