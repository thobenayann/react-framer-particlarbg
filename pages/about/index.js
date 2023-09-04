// icons
import {
    FaHtml5,
    FaCss3,
    FaJs,
    FaReact,
    FaWordpress,
    FaFigma,
} from 'react-icons/fa';

import {
    SiNextdotjs,
    SiFramer,
    SiAdobexd,
    SiAdobephotoshop,
} from 'react-icons/si';

//  data
const aboutData = [
    {
        id: 1,
        title: 'skills',
        info: [
            {
                id: 1,
                title: 'Web Development',
                icons: [
                    { id: 1, component: <FaHtml5 /> },
                    { id: 2, component: <FaCss3 /> },
                    { id: 3, component: <FaJs /> },
                    { id: 4, component: <FaReact /> },
                    { id: 5, component: <SiNextdotjs /> },
                    { id: 6, component: <SiFramer /> },
                    { id: 7, component: <FaWordpress /> },
                ],
            },
            {
                id: 2,
                title: 'UI/UX Design',
                icons: [
                    { id: 1, component: <FaFigma /> },
                    { id: 2, component: <SiAdobexd /> },
                    { id: 3, component: <SiAdobephotoshop /> },
                ],
            },
        ],
    },
    {
        id: 2,
        title: 'awards',
        info: [
            {
                id: 1,
                title: 'Webby Awards - Honoree',
                stage: '2011 - 2012',
            },
            {
                id: 2,
                title: 'Adobe Design Achievement Awards - Finalist',
                stage: '2009 - 2010',
            },
        ],
    },
    {
        id: 3,
        title: 'experience',
        info: [
            {
                id: 1,
                title: 'UX/UI Designer - XYZ Company',
                stage: '2012 - 2023',
            },
            {
                id: 2,
                title: 'Web Developer - ABC Agency',
                stage: '2010 - 2012',
            },
            {
                id: 3,
                title: 'Intern - DEF Corporation',
                stage: '2008 - 2010',
            },
        ],
    },
    {
        id: 4,
        title: 'credentials',
        info: [
            {
                id: 1,
                title: 'Web Development - ABC University, LA, CA',
                stage: '2011',
            },
            {
                id: 2,
                title: 'Computer Science Diploma - AV Technical Institute',
                stage: '2009',
            },
            {
                id: 3,
                title: 'Certified Graphic Designer - ABC Institute, Los Angeles, CA',
                stage: '2006',
            },
        ],
    },
];

const About = () => {
    return <div>About</div>;
};

export default About;
