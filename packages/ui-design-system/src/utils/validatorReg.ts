const validatorReg = (matcher: {
  [Symbol.match](string: string): RegExpMatchArray;
}) => (value: string): boolean => {
  return Boolean(value.match(matcher));
}

export default validatorReg;