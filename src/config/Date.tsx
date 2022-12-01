const date1 = 20221119

const date1S = date1.toString()
const yearS = date1S.slice(0, 4)
const monthS = date1S.slice(4, 6)
const dayS = date1S.slice(6, 8)
const date1d = new Date(monthS + '/' + dayS + '/' + yearS);

export const startDate = date1d