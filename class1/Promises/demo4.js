function who() {
  return new Promise((resolve) => {
    setTimeout(() => {
      resolve("Mark");
    }, 2000);
  });
}

function what() {
  return new Promise((resolve) => {
    setTimeout(() => {
      resolve("is playing");
    }, 2000);
  });
}

function where() {
  return new Promise((resolve) => {
    setTimeout(() => {
      resolve("cricket");
    }, 2000);
  });
}

async function msg() {
  const a = await who();
  const b = await what();
  const c = await where();

  console.log(`${a} ${b} ${c}`)
}

msg()