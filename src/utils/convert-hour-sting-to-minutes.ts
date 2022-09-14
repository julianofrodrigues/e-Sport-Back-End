export function convertHourStringToMinutes(hourSting: string){
    const [hours, minutes] = hourSting.split(':').map(Number);
    const minutesAmount = (hours * 60) + minutes;
    return minutesAmount;
}