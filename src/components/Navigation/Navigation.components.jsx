import React from 'react';

import {
    NavBar,
    NavContainer,
    Pages,
    Link,
    CallToAction,
    GetInTouch
} from './Navigation.styles';

import {ReactComponent as Send} from '../../assets/send-icon.svg';

const Navigation = () => {
    return (
        <nav>
            <NavBar>
                <NavContainer>
                    <Pages>
                        <Link to="/">my projects</Link>
                        <Link to="/about-me">about me</Link>
                    </Pages>
                    <CallToAction>
                        <GetInTouch href="mailto:guillsav@gmail.com">
                            <Send
                                style={{
                                    marginRight: '6px',
                                    width: '14px',
                                    height: '12px'
                                }}
                            />
                            get in touch
                        </GetInTouch>
                    </CallToAction>
                </NavContainer>
            </NavBar>
        </nav>
    );
};

export default Navigation;
