import React, { useEffect, useState } from 'react';
import Navbar from '../components/Navbar/Navbar';
import TeamCard from '../components/Utils/TeamCard';
import personImg from './../assets/person1.png';
import hiringImg from './../assets/hiring.png';
import Footer from '../components/Footer/Footer';

const strategizersAndOperators = [
  {
    name: 'John Doe',
    role: 'Strategist',
    description: 'Lorem ipsum dolor sit amet, consectetur adipiscing elit.',
    socialMedia: {
      twitter: 'https://twitter.com/johndoe',
      linkedin: 'https://www.linkedin.com/in/johndoe/',
    },
    image: personImg,
  },
  {
    name: 'Jane Doe',
    role: 'Operator',
    description: 'Lorem ipsum dolor sit amet, consectetur adipiscing elit.',
    socialMedia: {
      twitter: 'https://twitter.com/janedoe',
      linkedin: 'https://www.linkedin.com/in/janedoe/',
    },
    image: hiringImg,
  },
  {
    name: 'John Doe',
    role: 'Strategist',
    description: 'Lorem ipsum dolor sit amet, consectetur adipiscing elit.',
    socialMedia: {
      twitter: 'https://twitter.com/johndoe',
      linkedin: 'https://www.linkedin.com/in/johndoe/',
    },
    image: hiringImg,
  },
];

const teamData = {
  'IT Team': [
    {
      name: 'John Doe',
      role: 'Strategist',
      description: 'Lorem ipsum dolor sit amet, consectetur adipiscing elit.',
      socialMedia: {
        twitter: 'https://twitter.com/johndoe',
        linkedin: 'https://www.linkedin.com/in/johndoe/',
      },
      image: personImg,
    },
    {
      name: 'Alice Smith',
      role: 'Developer',
      description: 'Lorem ipsum dolor sit amet, consectetur adipiscing elit.',
      socialMedia: {
        twitter: 'https://twitter.com/alicesmith',
        linkedin: 'https://www.linkedin.com/in/alicesmith/',
      },
      image: hiringImg,
    },
    {
      name: 'Bob Johnson',
      role: 'Designer',
      description: 'Lorem ipsum dolor sit amet, consectetur adipiscing elit.',
      socialMedia: {
        twitter: 'https://twitter.com/bobjohnson',
        linkedin: 'https://www.linkedin.com/in/bobjohnson/',
      },
      image: hiringImg,
    },
    {
      name: 'Eva Williams',
      role: 'QA Engineer',
      description: 'Lorem ipsum dolor sit amet, consectetur adipiscing elit.',
      socialMedia: {
        twitter: 'https://twitter.com/evawilliams',
        linkedin: 'https://www.linkedin.com/in/evawilliams/',
      },
      image: hiringImg,
    },
  ],
  'Marketers': [
    {
      name: 'Jane Doe',
      role: 'Operator',
      description: 'Lorem ipsum dolor sit amet, consectetur adipiscing elit.',
      socialMedia: {
        twitter: 'https://twitter.com/janedoe',
        linkedin: 'https://www.linkedin.com/in/janedoe/',
      },
      image: hiringImg,
    },
    {
      name: 'Charlie Brown',
      role: 'Content Marketer',
      description: 'Lorem ipsum dolor sit amet, consectetur adipiscing elit.',
      socialMedia: {
        twitter: 'https://twitter.com/charliebrown',
        linkedin: 'https://www.linkedin.com/in/charliebrown/',
      },
      image: hiringImg,
    },
    {
      name: 'Diana Clark',
      role: 'SEO Specialist',
      description: 'Lorem ipsum dolor sit amet, consectetur adipiscing elit.',
      socialMedia: {
        twitter: 'https://twitter.com/dianaclark',
        linkedin: 'https://www.linkedin.com/in/dianaclark/',
      },
      image: hiringImg,
    },
    {
      name: 'Frank Miller',
      role: 'Digital Marketer',
      description: 'Lorem ipsum dolor sit amet, consectetur adipiscing elit.',
      socialMedia: {
        twitter: 'https://twitter.com/frankmiller',
        linkedin: 'https://www.linkedin.com/in/frankmiller/',
      },
      image: hiringImg,
    },
  ],
  'Talent Recruiters': [
    {
      name: 'John Doe',
      role: 'Strategist',
      description: 'Lorem ipsum dolor sit amet, consectetur adipiscing elit.',
      socialMedia: {
        twitter: 'https://twitter.com/johndoe',
        linkedin: 'https://www.linkedin.com/in/johndoe/',
      },
      image: hiringImg,
    },
  ],
  'Educators': [
    {
      name: 'Jane Doe',
      role: 'Operator',
      description: 'Lorem ipsum dolor sit amet, consectetur adipiscing elit.',
      socialMedia: {
        twitter: 'https://twitter.com/janedoe',
        linkedin: 'https://www.linkedin.com/in/janedoe/',
      },
      image: hiringImg,
    },
  ],
  'Local Representatives': [
    {
      name: 'John Doe',
      role: 'Strategist',
      description: 'Lorem ipsum dolor sit amet, consectetur adipiscing elit.',
      socialMedia: {
        twitter: 'https://twitter.com/johndoe',
        linkedin: 'https://www.linkedin.com/in/johndoe/',
      },
      image: hiringImg,
    },
  ],
};

const TeamsPage = () => {
  const [activeCategory, setActiveCategory] = useState('IT Team');

  const teamCategories = [
    'IT Team',
    'Marketers',
    'Talent Recruiters',
    'Educators',
    'Local Representatives',
  ];

  const handleActiveMenu = (category) => {
    setActiveCategory(category);
  };

  useEffect(() => {
    handleActiveMenu(teamCategories[0]);
  }, []);

  const chunkArray = (array, chunkSize) => {
    const result = [];
    for (let i = 0; i < array.length; i += chunkSize) {
      result.push(array.slice(i, i + chunkSize));
    }
    return result;
  };

  const teamMembersRows = chunkArray(teamData[activeCategory], 1);

  const dynamicFooterContent = {
    title: 'Apply to Become A Staff Member!',
    subtitle: 'Join our team and make a difference!',
    buttonText: 'Apply',
    image: false,
  };

  return (
    <>
      <Navbar />
      <div className="p-8 bg-gray-50 mt-20">
        {/* Teams Header */}
        <section className="text-center mb-12">
          <h4 className="text-lg text-gray-600">Not All heroes wear capes!</h4>
          <h1 className="text-4xl md:text-5xl font-bold text-black mt-4">Meet The Codey Team</h1>
        </section>

        {/* Strategizers & Operators */}
        <section className="text-center mb-12">
          <h3 className="text-2xl font-semibold text-gray-800 mb-8">Strategizers & Operators</h3>
          <div className="flex flex-wrap justify-center gap-6">
            {strategizersAndOperators.map((person, index) => (
              <TeamCard key={index} person={person} />
            ))}
          </div>
        </section>

        {/* Team Categories */}
        <section className="mb-12">
          <ul className="flex flex-wrap justify-center gap-4">
            {teamCategories.map((category, index) => (
              <li
                key={index}
                className={`cursor-pointer text-lg font-medium ${
                  category === activeCategory
                    ? 'text-green-500 border-b-2 border-green-500'
                    : 'text-gray-600 hover:text-green-500'
                }`}
                onClick={() => handleActiveMenu(category)}
              >
                {category}
              </li>
            ))}
          </ul>
        </section>

        {/* Team Showcase */}
        <section className="flex flex-wrap justify-center gap-6">
          {teamMembersRows.map((row, rowIndex) => (
            <div key={rowIndex} className="flex flex-wrap justify-center gap-6">
              {row.map((person, index) => (
                <TeamCard key={index} person={person} />
              ))}
            </div>
          ))}
        </section>
      </div>
      <Footer dynamicContent={dynamicFooterContent} />
    </>
  );
};

export default TeamsPage;