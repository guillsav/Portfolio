import React from 'react';

import {
    AboutMe,
    AboutContainer,
    AboutTitle,
    AboutDetails
} from './about.styles';

const AboutPage = () => (
    <AboutMe id="about-me">
        <AboutContainer>
            <AboutTitle>about me</AboutTitle>
            <AboutDetails>
                <p>
                    I am a Web Developer residing in the Greater NYC Area with a
                    background in Web Design. When working as a Web Designer, I
                    worked closely with Developers and found myself enjoying the
                    technical aspect of building products for clients. This
                    experience led me to learn Web Development and
                    technologies like HTML, CSS, Javascript, React, Nodejs
                    etc... I am looking forward to combining my knowledge in Web
                    Development and Web Design to help build products that make
                    a difference.
                </p>
            </AboutDetails>
        </AboutContainer>
    </AboutMe>
);

export default AboutPage;
