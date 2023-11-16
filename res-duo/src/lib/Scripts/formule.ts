type TypeOhmParameters = {
  V: number,
  R?: number,
  I?: number
};

export function ohm(x: TypeOhmParameters) {
  let result = x;
  let { V, R, I } = x;

  if (V && I) { result.R = V / I; };
  if (V && R) { result.I = V / R; };

  return result;
}