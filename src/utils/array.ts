/**
 * 数组移动方法
 * @param arr
 * @param from
 * @param to
 * @returns
 */
export const arrayMove = <T>(arr: T[], from: number, to: number) => {
  const newArr = arr.slice()
  newArr.splice(to < 0 ? newArr.length + to : to, 0, newArr.splice(from, 1)[0])
  return newArr
}
