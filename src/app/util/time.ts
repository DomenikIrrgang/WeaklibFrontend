export class Time {
    public difference(previous): string {
        let current = Date.now();
        let msPerMinute = 60 * 1000;
        let msPerHour = msPerMinute * 60;
        let msPerDay = msPerHour * 24;
        let msPerMonth = msPerDay * 30;
        let msPerYear = msPerDay * 365;
        if (typeof (previous) === "string") {
            let match: any = previous.match(/^(\d+)-(\d+)-(\d+) (\d+)\:(\d+)\:(\d+)$/);
            let date = new Date(match[1], match[2] - 1, match[3], match[4], match[5], match[6]);
            previous = date.getTime();
        }
        let elapsed = current - previous;
        if (elapsed < msPerMinute) {
            return Math.round(elapsed / 1000) + " second(s) ago";
        } else if (elapsed < msPerHour) {
            return Math.round(elapsed / msPerMinute) + " minute(s) ago";
        } else if (elapsed < msPerDay) {
            return Math.round(elapsed / msPerHour) + " hour(s) ago";
        } else if (elapsed < msPerMonth) {
            return Math.round(elapsed / msPerDay) + " day(s) ago";
        } else if (elapsed < msPerYear) {
            return Math.round(elapsed / msPerMonth) + " month(s) ago";
        } else {
            return Math.round(elapsed / msPerYear) + " year(s) ago";
        }
    }
}