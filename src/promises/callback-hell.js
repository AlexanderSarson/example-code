// how to avoid this
firstFunction(args, function() {
  secondFunction(args, function() {
    thirdFunction(args, function() {
      // And so on…
    });
  });
});

// split your functions up and use promises
const getBeef = nextStep => {
  const fridge = leftFright;
  const beef = getBeefFromFridge(fridge);
  nextStep(beef);
};

const cookBeef = (beef, nextStep) => {
  const workInProgress = putBeefinOven(beef);
  setTimeout(function() {
    nextStep(workInProgress);
  }, 1000 * 60 * 20);
};

// promise chaining
const makeBurger = () => {
  return getBeef()
    .then(beef => cookBeef(beef))
    .then(cookedBeef => getBuns(beef))
    .then(bunsAndBeef => putBeefBetweenBuns(bunsAndBeef));
};

// Make and serve burger
makeBurger().then(burger => serve(burger));






const crypto = require('crypto');

function firstAssignment() {
  var result = { title: '6 secure randoms', randoms: [] };
  let size = 48;

  crypto.randomBytes(size, function (err, buffer) {
    let secureHex = buffer.toString('hex');
    result.randoms.push({ length: size, random: secureHex });
    size = size - 8;

    crypto.randomBytes(size, function (err, buffer) {
      let secureHex = buffer.toString('hex');
      result.randoms.push({ length: size, random: secureHex });
      size = size - 8;

      crypto.randomBytes(size, function (err, buffer) {
        let secureHex = buffer.toString('hex');
        result.randoms.push({ length: size, random: secureHex });
        size = size - 8;

        crypto.randomBytes(size, function (err, buffer) {
          let secureHex = buffer.toString('hex');
          result.randoms.push({ length: size, random: secureHex });
          size = size - 8;

          crypto.randomBytes(size, function (err, buffer) {
            let secureHex = buffer.toString('hex');
            result.randoms.push({ length: size, random: secureHex });
            size = size - 8;

            crypto.randomBytes(size, function (err, buffer) {
              let secureHex = buffer.toString('hex');
              result.randoms.push({ length: size, random: secureHex });
              size = size - 8;
              console.log(result);
            });
          });
        });
      });
    });
  });
}