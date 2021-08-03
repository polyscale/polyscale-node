export const mockImplementOnce = (
  fn: (...args: Array<any>) => any,
  mockImplementation: (...args: Array<any>) => any
) => {
  return (fn as jest.MockedFunction<typeof fn>).mockImplementationOnce(
    mockImplementation
  );
};

export const mockImplementationOnceThrow = (
  fn: (...args: Array<any>) => any
) => {
  return mockImplementOnce(fn, () => {
    throw new Error("error");
  });
};

export const mockResolveOnce = (
  fn: (...args: Array<any>) => any,
  value: any
) => {
  (fn as jest.MockedFunction<typeof fn>).mockResolvedValueOnce(value);
};
