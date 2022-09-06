const validatorReg =
  (matcher: RegExp) =>
  (value: string): boolean => {
    return Boolean(value.match(matcher))
  }

export default validatorReg
