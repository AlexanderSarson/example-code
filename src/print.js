export default function printMe() {
  // It returns the right operand (rightExpression) if the left operand (leftExpression) is null or undefined.
  const name = null ?? 'I can compile newest syntax';
  console.log(name);
}