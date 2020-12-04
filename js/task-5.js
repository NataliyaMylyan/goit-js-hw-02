const checkForSpam = function (message) {
  message = message.toLowerCase();

  let result = false;

  if (message.includes("spam") || message.includes("sale")) {
    result = true;
  }
  return result;
};

console.log(checkForSpam("Latest technology news")); // false
console.log(checkForSpam("JavaScript weekly newsletter")); // false
console.log(checkForSpam("Get best sale offers now!")); // true
console.log(checkForSpam("[SPAM] How to earn fast money?")); // true
