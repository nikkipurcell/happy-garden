export const monthlyColor = (className, month) => {
  switch (month) {
    case "January":
    case "February":
      className.push("blue");
      break;
    case "June":
    case "July":
    case "August":
      className.push("yellow");
      break;
    case "September":
    case "October":
    case "November":
      className.push("orange");
      break;
    case "December":
      className.push("red");
      break;
    default:
      className.push("green");
  }

  return className;
};
