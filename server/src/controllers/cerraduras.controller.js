export const estrella = async (req, res) => {
  let num = req.params.n;
  console.log(num);
  num = parseInt(num);
  let array = Array(num);
  for (let i = 0; i < array.length; i++) {
    array[i] = i;
  }

  const generateKleeneLock = (n) => {
    const result = [];
    const generate = (prefix, n) => {
      if (n === 0) {
        result.push(prefix);
        return;
      }
      generate(prefix + "0", n - 1);
      generate(prefix + "1", n - 1);
    };
    generate("", n);
    return result;
  };

  array = generateKleeneLock(num);
  array.unshift("λ");
  console.log(array);
  res.json(array);
};

export const suma = async (req, res) => {
  let num = req.params.n;
  num = parseInt(num);
  let array = Array(num);
  for (let i = 0; i < array.length; i++) {
    array[i] = i;
  }

  const generateKleeneLock = (n) => {
    const result = [];
    const generate = (prefix, n) => {
      if (n === 0) {
        result.push(prefix);
        return;
      }
      generate(prefix + "0", n - 1);
      generate(prefix + "1", n - 1);
    };
    generate("", n);
    return result;
  };

  array = generateKleeneLock(num);
  console.log(array);
  return res.json(array);
};
