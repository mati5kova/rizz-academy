import 'aos/dist/aos.css';
import React from 'react';
import ChiefKeefImage from '../../assets/chief_keef.jpg';
import JusKrekImage from '../../assets/jus_krek.jpg';
import MarkVodicarImage from '../../assets/mark_vodicar.jpg';
import PeterMalacicImage from '../../assets/peter_malacic.jpg';
import PeteDavidsonImage from '../../assets/pete_davidson.jpg';
import RokPopovicImage from '../../assets/rok_popovic.jpg';
import '../../styles/Students.css';
import { aosAnimation } from '../Section';
import IndividualStudents from './IndividualStudents';

interface StudentsProps {
    id: string;
    title: string;
}

export default function Students({ id, title }: StudentsProps) {
    return (
        <section id={id}>
            <h5 aos-init="true" data-aos-once="false" data-aos={aosAnimation}>
                {title}
            </h5>
            <div aos-init="true" data-aos-once="false" data-aos={aosAnimation} className="content students-flexbox-container">
                <IndividualStudents
                    students={[
                        {
                            key: 'mark-vodicar',
                            name: 'Mark Vodicar',
                            description:
                                'Smartest student of them all. He has the Rizz academy scholarship and is currently studying in Hong Kong. He also has the bigest nose out of all students.',
                            image: MarkVodicarImage,
                        },
                        {
                            key: 'jus-krek',
                            name: 'Jus Krek',
                            description: 'He is as strong as a gorilla. In Clash Royale he would be worth at least 7 elixir.',
                            image: JusKrekImage,
                        },
                        {
                            key: 'rok-popovic',
                            name: 'Rok Popovic',
                            description:
                                'Best basketball player out of all students. He averages  4,3 ppg 4,6 rpg and 0,4 apg with 5,3 efficiency. He is studying in USA with a Rizz academy scholarship.',
                            image: RokPopovicImage,
                        },
                        {
                            key: 'peter-malacic',
                            name: 'Peter Malacic',
                            description: '“Joining Rizz academy feels and is better than wining european championship.” -Peter Malacic',
                            image: PeterMalacicImage,
                        },
                        {
                            key: 'pete-davidson',
                            name: 'Pete Davidson',
                            description: 'He rizzed up Ariana grande, kim kardashian and many other super models.',
                            image: PeteDavidsonImage,
                        },
                        {
                            key: 'ChiefKeef',
                            name: 'Chief Keef',
                            description: '“I Love sosa was actually inspired by Rizz academy!” -Chief Keef',
                            image: ChiefKeefImage,
                        },
                    ]}
                ></IndividualStudents>
            </div>
        </section>
    );
}
