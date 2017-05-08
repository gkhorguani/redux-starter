import * as actions from './index'

describe('actions', () => {
  it('should create an action to load a task', () => {
    const expectedAction = {
      type: 'LOAD_TASKS',
      tasks: []
    }

    //Test with an empty array
    expect(actions.loadTasks([])).toEqual(expectedAction)
  })
})
