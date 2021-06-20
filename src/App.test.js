import React from 'react'
import ReactDOM from 'react-dom'
import { shallow, mount } from 'enzyme'
import App from './App'
import Toast from './components/Toast/Toast'

const factory = () => {
  return shallow(<App/>)
}

describe('App Component', () => {
  it('should render my component', () => {
    const wrapper = factory()
    expect(wrapper.getElements()).toMatchSnapshot()
  })

  it('renders without crashing', () => {
    const div = document.createElement('div')
    ReactDOM.render(<App/>, div)
    ReactDOM.unmountComponentAtNode(div)
  })

  it('should render Toast ref', () => {
    const wrapper = mount(<App/>)
    expect(wrapper.find(Toast)).toHaveLength(1)
    expect(wrapper.instance().toastRef).toBeTruthy();
  })

  it('updates state with data from Filter Component', () => {
    const wrapper = mount(<App/>)
    const test = {
      name: 'Test'
    }
    const wrapperInstance = wrapper.instance()
    wrapperInstance.setFilterData(test)

    expect(wrapperInstance.state.name).toBe(test.name)
  })
})
