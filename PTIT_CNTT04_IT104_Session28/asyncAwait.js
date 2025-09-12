function getDataFormAPI1() {
  return new Promise((resolve, reject) => {
    setTimeout(() => {
      console.log(`lay du lieu tu API 1 tai len giao dien thanh cong`);
      resolve();
    }, 2000);
  });
}
function getDataFormAPI2() {
  return new Promise((resolve, reject) => {
    setTimeout(() => {
      console.log(`lay du lieu tu API 2 tai len giao dien thanh cong`);
      resolve();
    }, 2000);
  });
}
function getDataFormAPI3() {
  return new Promise((resolve, reject) => {
    setTimeout(() => {
      console.log(`lay du lieu tu API 3 tai len giao dien thanh cong`);
      resolve();
    }, 2000);
  });
}
async function runAllTask() {
  try {
    await getDataFormAPI1();
    await getDataFormAPI2();
    await getDataFormAPI3();
  } catch (error) {
    console.log("loi", error);
  }
}
runAllTask();
