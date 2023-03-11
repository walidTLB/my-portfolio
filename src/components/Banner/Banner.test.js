import React from 'react';
import {shallow, render, mount} from 'enzyme';
import Banner from './Banner';

describe('Banner', () => {
    let props;
    let shallowBanner;
    let renderedBanner;
    let mountedBanner;

    const shallowTestComponent = () => {
        if (!shallowBanner) {
            shallowBanner = shallow(<Banner {...props} />);
        }
        return shallowBanner;
    };

    const renderTestComponent = () => {
        if (!renderedBanner) {
            renderedBanner = render(<Banner {...props} />);
        }
        return renderedBanner;
    };

    const mountTestComponent = () => {
        if (!mountedBanner) {
            mountedBanner = mount(<Banner {...props} />);
        }
        return mountedBanner;
    };

    beforeEach(() => {
        props = {};
        shallowBanner = undefined;
        renderedBanner = undefined;
        mountedBanner = undefined;
    });

    // Shallow / unit tests begin here

    // Render / mount / integration tests begin here

});