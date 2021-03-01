export const throttled = (func, frequency) => {
  let funcCanRun = true;

  return e => {
    if (!funcCanRun) return;
    func(e);
    funcCanRun = false;
    setTimeout(() => (funcCanRun = true), frequency);
  };
};

export const randomFromArray = arr => {
  const index = Math.floor(Math.random() * arr.length);
  return arr[index];
};

export const shorten = (str, wordCount) => {
  const words = str.split(" ");
  if (words.length <= wordCount) return str;
  return words.slice(0, wordCount).join(" ") + "...";
};
