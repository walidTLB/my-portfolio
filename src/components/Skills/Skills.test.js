import React from 'react';
import {shallow, render, mount} from 'enzyme';
import Skills from './Skills';

describe('Skills', () => {
    let props;
    let shallowSkills;
    let renderedSkills;
    let mountedSkills;

    const shallowTestComponent = () => {
        if (!shallowSkills) {
            shallowSkills = shallow(<Skills {...props} />);
        }
        return shallowSkills;
    };

    const renderTestComponent = () => {
        if (!renderedSkills) {
            renderedSkills = render(<Skills {...props} />);
        }
        return renderedSkills;
    };

    const mountTestComponent = () => {
        if (!mountedSkills) {
            mountedSkills = mount(<Skills {...props} />);
        }
        return mountedSkills;
    };

    beforeEach(() => {
        props = {};
        shallowSkills = undefined;
        renderedSkills = undefined;
        mountedSkills = undefined;
    });

    // Shallow / unit tests begin here

    // Render / mount / integration tests begin here

});