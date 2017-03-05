export class TimeEntry {

    constructor(
		public userId: string,
		public projectName: string,
		public cardNumber: string,
		public startTime: Date,
		public endTime: Date
    ) { }

}
