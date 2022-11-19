const startDate = 20221119
const today = new Date()
const todayDateS = today.getFullYear() + '' + (today.getMonth() + 1) + '' + today.getDate()
export const todayDate = parseInt(todayDateS)

export const Diff = (a: any) => (a - startDate)