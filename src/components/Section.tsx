import 'aos/dist/aos.css';
import React from 'react';
import MasterImage from '../assets/master.jpg';
import '../styles/Section.css';

interface SectionProps {
    title: string;
    content: string;
    id: string;
}

export default function Section({ title, content, id }: SectionProps) {
    const aosAnimation = 'fade-up';

    return (
        <section id={id}>
            <h5 aos-init="true" data-aos-once="false" data-aos={aosAnimation} style={{ margin: `${id === 'master-section' ? '0' : null}` }}>
                {title.toLowerCase()}
            </h5>
            {id === 'master-section' ? (
                <img
                    src={MasterImage}
                    alt="Master Image"
                    width={'250px'}
                    height={'auto'}
                    aos-init="true"
                    data-aos-once="false"
                    data-aos={aosAnimation}
                    style={{ margin: '0' }}
                ></img>
            ) : null}
            <div aos-init="true" data-aos-once="false" data-aos={aosAnimation} className="content">
                {content.toLowerCase()}
            </div>
        </section>
    );
}

export const aosAnimation = 'fade-up';
