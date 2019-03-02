import React from 'react';
import { MouseMoveContext } from '../MouseMoveProvider';

export function withAppContext(Component) {
    return function WrapperComponent(props) {
        return (
            <MouseMoveContext.Consumer>
                {mouseState => <Component {...props} context={mouseState} />}
            </MouseMoveContext.Consumer>
        );
    };
}