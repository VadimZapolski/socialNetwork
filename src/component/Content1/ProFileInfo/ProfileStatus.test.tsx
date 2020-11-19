import React from 'react';
import ProfileStatus from './ProfileStatus';
import {create} from 'react-test-renderer';


describe('ProfileStatus component', () => {
    test('status from props should be in the state', () => {
        const component = create(<ProfileStatus status='it-kamasutra.com'/>);
        const instance = component.getInstance() as any;
        expect(instance.state.status).toBe('it-kamasutra.com');
    });

    test('after creation <span> should be displayed ', () => {
        const component = create(<ProfileStatus status='it-kamasutra.com'/>);
        const root = component.root as any;
        let span = root.findByType('span')
        expect(span).not.toBeNull();
    });

    test('after creation <span> should contains with correct status', () => {
        const component = create(<ProfileStatus status='it-kamasutra.com'/>);
        const root = component.root as any;
        let span = root.findByType('span')
        expect(span.children[0]).toBe('it-kamasutra.com');
    });

    test('input should be displayed in editMode ', () => {
        const component = create(<ProfileStatus status='it-kamasutra.com'/>);
        const root = component.root as any;
        let span = root.findByType('span')
        span.props.onDoubleClick()
        let input = root.findByType('input')
        expect(input.props.value).toBe('it-kamasutra.com');
    });

    test(' call callback ', () => {
        const mockCallback = jest.fn()
        const component = create(<ProfileStatus status='it-kamasutra.com' updateStatus = { mockCallback}/>);
        const instance = component.getInstance() as any;
        instance.deactivedEditMode();
        expect(mockCallback.mock.calls.length).toBe(1)

    });
});