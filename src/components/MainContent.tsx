import Aos from 'aos';
import 'aos/dist/aos.css';
import React, { useEffect } from 'react';
import '../styles/MainContent.css';
import Section from './Section';
import Students from './students/Students';

const MainContent = () => {
    useEffect(() => {
        Aos.init({ duration: 1000 });
    }, []);

    return (
        <main id="main-main">
            <section data-aos="fade" data-aos-once="true">
                <div className="title-div">
                    <p className="one">RIZZ ACADEMY</p>
                    <p className="two">by</p>
                    <p className="three">LEVKO</p>
                </div>
            </section>

            <Section
                id="about-section"
                title={'about rizz academy'}
                content={
                    'since the founding of rizz academy in 2020, over 18.000 people graduated and transformed their life. our goal is to expend knowledge of spoken and unspoken rizz. we also offer scholarships to the most promising students. subscribe to our newsletter or purchase training to start rizzing up the people you like, today!'
                }
            ></Section>
            <Section
                id="master-section"
                title={'about the master'}
                content={
                    'He goes by nickname Levko. He is famous for his knowledge of rizzing up women. He has helped thousands of men talk to the other sex, given Ted talks, inspirational speeches and more.  Everything started when he fumbled some blonde 3 times.  He told himself to never become that naive ever  again. Then this social phenomen was reborn.'
                }
            ></Section>

            <Students id="students-section" title="students"></Students>
        </main>
    );
};

export default MainContent;
