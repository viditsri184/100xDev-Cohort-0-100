import { atom } from 'recoil';

export const todoAtom = atom({
    key: "todoAtom",
    default: [{
        id: 1,
        title: "Buy groceries",
        description: "Milk, Bread, Eggs, and Fruits",
    },
    {
        id: 2,
        title: "Finish React project",
        description: "Complete the Todo app using Recoil for state management",
    },
    {
        id: 3,
        title: "Exercise",
        description: "Go for a 30-minute run in the park",
    },
    {
        id: 4,
        title: "Read a book",
        description: "Read at least 50 pages of 'Atomic Habits'",
    },
    {
        id: 5,
        title: "Call mom",
        description: "Catch up with mom over the phone",
    }]
});

