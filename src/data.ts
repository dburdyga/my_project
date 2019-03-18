function generateRandomNumber(floor: number) {
    return Math.floor(Math.random() * floor);
}

const statuses = [
    'Approved',
    'Wait for approve',
    'Assigned',
    'Wait for merge',
    'Merged',
    'Closed',
];

export default function generateMockData() {
    const data = [];

    for (let i = 0; i < 6; i++) {
        data.push({
            number: 'CR12345' + i,
            title: `Test change ${i}`,
            status: statuses[generateRandomNumber(5)],
            project: 'WMS-TI',
            owner: 'Test user',
            version: '1.0.1',
            createdAt: new Date(2019, generateRandomNumber(11), generateRandomNumber(27)).toLocaleDateString(),
            actions: 'Assignee1 Assignee2',
        });
    }
    return data;
}
