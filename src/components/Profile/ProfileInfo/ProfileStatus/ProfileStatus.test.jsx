import React from 'react';
import {create} from 'react-test-renderer';
import ProfileStatus from "./ProfileStatus";

describe('ProfileStatus component', () => {
    test('status from props should be in the state', () => {
        const component = create(<ProfileStatus status='New Status' />);
        const instance = component.getInstance();
        expect(instance.state.status).toBe('New Status');
    });
    test('after creation span should be display', () => {
        const component = create(<ProfileStatus status='New Status' />);
        const instance = component.root;
        let span = instance.findByType('span');
        expect(span.length).toBe(1);
    });
});