export const _today = new Date();

export const lastWeek = () => {
    let todayForWeek = new Date();
    let lastWeek = todayForWeek.getDate() - 7;
    return new Date(todayForWeek.setDate(lastWeek));
};

export const lastMonths = (count) => {
    let todayForMonth = new Date();
    let lastMonth = todayForMonth.getMonth() - count;
    return new Date(todayForMonth.setMonth(lastMonth))
};

export const lastYear = () => {
    let todayForYear = new Date();
    let lastYear = todayForYear.getFullYear() - 1;
    return new Date(todayForYear.setFullYear(lastYear));
};