export class Quote {
    constructor(
        public id: number,
        public name: string,
        public email: string,
        public quote: string,
        public upvote: number,
        public downvote: number,
        public currentDate: Date
        ) { }
}