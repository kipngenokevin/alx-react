import { shallow } from 'enzyme';
import React from 'react';
import NotificationItem from './NotificationItem';

// shallow render the Notifications component
describe('<NotificationItem />', () => {
	it('Tests that NotificationItem renders without crashing', () => {
		const wrapper = shallow(<NotificationItem />);
		expect(wrapper.exists()).toBe(true);
	})

	it('Passes dumb `type` prop and checks for correct html rendering', () => {
		const wrapper = shallow(<NotificationItem type="urgent" />);
		expect(wrapper.html()).toContain('urgent');
	})

	it('Passes dumb `value` prop and checks for correct html rendering', () => {
		const wrapper = shallow(<NotificationItem value="This is a notification" />);
		expect(wrapper.html()).toContain('This is a notification');
	})

	it('Passes dumb `html` prop and checks for correct html rendering', () => {
		const wrapper = shallow(<NotificationItem html={{ __html: 'dangerouslySetInnerHtml' }} />);
		expect(wrapper.html()).toContain('dangerouslySetInnerHtml');
	})
})