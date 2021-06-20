import React from 'react'
import ReactDOM from 'react-dom'
import { shallow, mount } from 'enzyme'
import Toast from './Toast'

const factory = () => {
  return shallow(<Toast/>)
}

describe('Toast Component', () => {
  it('should render my component', () => {
    const wrapper = factory()
    expect(wrapper.getElements()).toMatchSnapshot()
  })

  it('renders without crashing', () => {
    const div = document.createElement('div')
    ReactDOM.render(<Toast/>, div)
    ReactDOM.unmountComponentAtNode(div)
  })

  it('add Toast method', () => {
    const wrapper = mount(<Toast/>)
    const Test = 'test'
    wrapper.instance().addToast(Test)
    expect(wrapper.instance().state.toasts).toStrictEqual([Test])
  })

  it('clear Toast method is called after add Toast', () => {
    const wrapper = mount(<Toast/>)
    const Test = 'test'
    wrapper.instance().addToast(Test)
    expect(wrapper.instance().state.toasts).toStrictEqual([Test])
    setTimeout(() => {
      expect(wrapper.instance().state.toasts).toStrictEqual([])
    }, 5000)
  })
})
