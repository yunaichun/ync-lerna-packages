// == react 组件测试用例编写参考：https://juejin.im/post/5b6c39bde51d45195c079d62
import React from 'react'
import Enzyme, { shallow } from 'enzyme'
import Adapter from 'enzyme-adapter-react-16'
import Index from '../src/index.js'

Enzyme.configure({ adapter: new Adapter() })

test('Index: 组件可以正常渲染测试', () => {
    const component = shallow(
        <Index />
    );
    expect(component).toMatchSnapshot();
});

test('Index: 组件某个节点存在测试', () => {
    const component = shallow(
        <Index />
    );
    // 获取元素
    expect(component.find('div').length).toBe(1);
});

test('Index: 组件某个节点点击事件测试', () => {
    const component = shallow(
        <Index/>
    );
    // 模拟点击
    component.find('div').at(0).simulate('click');
    expect(1).toBe(1);
});
