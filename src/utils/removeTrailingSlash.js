export default function (str) {
  return str.substr(-1) === "/" ? str.substr(0, str.length - 1) : str;
}
