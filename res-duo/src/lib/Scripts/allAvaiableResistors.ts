export default function allResPossibleValues(): number[] {
  const base: number[] = [12, 15, 18, 22, 27, 33, 39, 47, 56, 68, 82];

  return base
    .map((thisBase) => {
      return [thisBase, thisBase * 10, thisBase * 100, thisBase * 1000];
    })
    .flat()
    .sort((a, b) => a - b);
};