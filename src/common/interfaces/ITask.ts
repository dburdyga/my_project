export interface ITask {
    id?: string;
    userId: string;
    title: string;
    description: string;
    completed: boolean;
    effort: string;
    estimator: string;
}
