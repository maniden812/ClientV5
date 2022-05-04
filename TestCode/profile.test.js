import '@testing-library/jest-dom'
// NOTE: jest-dom adds handy assertions to Jest and is recommended, but not required

import * as React from 'react'
import {render, fireEvent, screen} from '@testing-library/react'
// import {render, fireEvent, screen} from '@testing-library/react';
import Profile from '../pages/Profile/profile';
// import TestRenderer from 'react-test-renderer';
// import { shallow } from 'enzyme';
//const profilemodule = require('../pages/profile');
test('check if values are empty', () => {
    <Profile />
    // const instance = wrapper.instance();
    expect(true).toBe(true);
    const [fullname, address1, address2, city, state, zipcode] = Profile(fullname, address1, address2, city, state, zipcode);

    render(<Profile />);

    
    expect(fullname).not.toBeNull();
    // creat object that mimics db and check if params are empty 
    expect(fullname).toBeLessThanOrEqual(50);

    expect(address1).not.toBeNull();
    expect(address1).toBeLessThanOrEqual(100);

    expect(address2).toBeLessThanOrEqual(100);

    expect(city).not.toBeNull();
    expect(city).toBeLessThanOrEqual(100);

    expect(state).not.toBeNull();

    expect(zipcode).not.toBeNull();
    expect(zipcode).toBeLessThanOrEqual(9);
    expect(zipcode).toBeGreaterThanOrEqual(5);
});