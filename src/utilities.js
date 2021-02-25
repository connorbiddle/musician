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
