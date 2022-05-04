import React from 'react';
import { shallow, mount, render } from 'enzyme';

import Login from '../pages/account/login';
import Link from ' ../components'
// jest.dontMock('../pages/account/login');
// jest.mock(Login)
// const Foo = require('../pages/account/login');


describe('Login', function() {
    it('should render without throwing an error', function() {
        expect(shallow(<Login />).contains(<h4 className="box-header">Login</h4>)).toBe(true);
    })
})

