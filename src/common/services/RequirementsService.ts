// const statuses = [
//     'Approved',
//     'Wait for approve',
//     'Assigned',
//     'Wait for merge',
//     'Merged',
//     'Closed',
// ];
//
// const actions = [
//     'Approve',
//     'Reject',
//     'Assignee 1',
//     'Assignee 2',
// ];
//
// function generateRandomNumber(floor: number) {
//     return Math.floor(Math.random() * floor);
// }
//
// export class RequirementsService {
//     public static generateMockData() {
//         const data = [];
//
//         for (let i = 0; i < 40; i++) {
//             data.push({
//                 number: 'CR12345' + i,
//                 title: `Test change ${i}`,
//                 status: statuses[generateRandomNumber(5)],
//                 project: 'WMS-TI',
//                 owner: 'Test user',
//                 version: '1.0.1',
//                 createdAt: new Date(2019, generateRandomNumber(11), generateRandomNumber(27)),
//                 action: actions[generateRandomNumber(5)],
//             });
//         }
//         return data;
//     }
//
//     public static getRequirements() {
//         return Promise.resolve(this.generateMockData());
//     }
// }
