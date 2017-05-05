export default function tasks(state = [], action){

    switch(action.type) {
        case 'LOAD_TASKS':
            return action.tasks;
        default:
            return state;
    }

};