import tasksReducer from './task-list-reducer';

describe('Task reducer test', () => {
    it('Should add task through reducer', () => {
        const initialState = [];
        const action = { 
            type: 'LOAD_TASKS', 
            tasks: [
                {
                    name: 'Task1'
                }
            ] 
        };

        const actual = tasksReducer(initialState, action);
        const expectedTasksArray = [ { name: 'Task1' } ];

        expect(actual).toEqual(expectedTasksArray);
    });
});