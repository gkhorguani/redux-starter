import 'jsdom-global/register';
import React from 'react'
import { shallow, mount, render } from 'enzyme'
import {expect} from 'chai'
import configureStore from 'redux-mock-store'
import Home from '../screens/Home'

const middlewares = []
const mockStore = configureStore(middlewares)

describe("Home Screen Tests", () => {

    let initialState = {}
    let store = {}
    let props = {}

    beforeEach(() => {
        initialState = {
            users: {
                list: {},
                loggedIn: false
            }
        }

        store = mockStore(initialState)
        props = {
            store: store
        }
    })

    it("should render home screen", () => {
        const wrapper = mount(<Home {...props} />)
        const body = wrapper.find('.custom-title');

        expect(body.html().toString()).to.have.string('Home page')
    })

    it('Should have unordered list and a link to load tasks in it', () => {
        const wrapper = mount(<Home {...props} />)
        const body = wrapper.find('.unorderedList');

        expect(body.html().toString()).to.have.string('Load Tasks')
    })

    it('Should find a div with a class name .unorderedList. USING SHALLOW RENDERING', () => {

        const wrapper = shallow(<Home {...props} />)
        expect(wrapper.dive().find('.unorderedList')).to.have.length(1);
    })
})