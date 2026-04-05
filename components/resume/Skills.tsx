"use client";
import React, { useState } from 'react';
import CategoryButton from '../CV_sections/CategoryButton';
import SkillBar from '../CV_sections/SkillBar';

// Define the types for the component props
interface SkillsProps {
  skills: Array<{
    title: string;
    category: string[];
    competency: number;
  }>;
  categories: Array<{
    name: string;
  }>;
}

// Define the type for the button state object
interface ButtonsState {
  [key: string]: boolean; // Dynamic keys representing 'All' and category names
  All: boolean;           // 'All' is explicitly required
}

const Skills = ({ skills, categories }: SkillsProps) => {
  // Initialize buttons state with 'All' and category names as keys
  const initialButtons: ButtonsState = Object.fromEntries(
    [['All', false]].concat(categories.map(({ name }) => [name, false]))
  ) as ButtonsState;

  const [buttons, setButtons] = useState<ButtonsState>(initialButtons);

  const handleChildClick = (label: string) => {
    // Toggle button that was clicked, turn all others off
    const newButtons: ButtonsState = Object.keys(buttons).reduce(
      (obj, key) => ({
        ...obj,
        [key]: label === key && !buttons[key],
      }),
      {} as ButtonsState
    );
    // Turn on 'All' button if no other button is active
    newButtons.All = !Object.keys(buttons).some((key) => newButtons[key]);
    setButtons(newButtons);
  };

  const getRows = () => {
    // Search for active categories
    const actCat = Object.keys(buttons).reduce(
      (cat, key) => (buttons[key] ? key : cat),
      'All'
    );

    const comparator = (a,b) => {
      let ret = 0;
      if (a.competency > b.competency) ret = -1;
      else if (a.competency < b.competency) ret = 1;
      else if (a.category[0] > b.category[0]) ret = -1;
      else if (a.category[0] < b.category[0]) ret = 1;
      else if (a.title > b.title) ret = 1;
      else if (a.title < b.title) ret = -1;
      return ret;
    };

    return skills
      .sort(comparator)
      .filter((skill) => actCat === 'All' || skill.category.includes(actCat))
      .map((skill) => (
        <SkillBar categories={categories} data={skill} key={skill.title} />
      ));
  };

  const getButtons = () => Object.keys(buttons).map((key) => (
    <CategoryButton
      label={key}
      key={key}
      active={buttons[key]}
      handleClick={handleChildClick}
    />
  ));

  return (
    <div className="skills">
      <div className="link-to" id="skills" />
      <div className="title">
        <h3>Skills</h3>
        <p>
          Note: I think these sections are silly, but everyone seems to have one.
          Here is a *mostly* honest overview of my skills.
        </p>
      </div>
      <div className="skill-button-container">{getButtons()}</div>
      <div className="skill-row-container">{getRows()}</div>
    </div>
  );
};

export default Skills;
































































































// "use client"
// import React, { useState } from 'react';
// // import PropTypes from 'prop-types';

// import CategoryButton from '../sections/CategoryButton';
// import SkillBar from '../sections/SkillBar';

// const Skills = ({ skills, categories }) => {
//   const initialButtons = Object.fromEntries(
//     [['All', false]].concat(categories.map(({ name }) => [name, false])),
//   );

//   const [buttons, setButtons] = useState(initialButtons);

//   const handleChildClick = (label) => {
//     // Toggle button that was clicked. Turn all other buttons off.
//     const newButtons = Object.keys(buttons).reduce(
//       (obj, key) => ({
//         ...obj,
//         [key]: label === key && !buttons[key],
//       }),
//       {},
//     );
//     // Turn on 'All' button if other buttons are off
//     newButtons.All = !Object.keys(buttons).some((key) => newButtons[key]);
//     setButtons(newButtons);
//   };

//   const getRows = () => {
//     // search for true active categories
//     const actCat = Object.keys(buttons).reduce(
//       (cat, key) => (buttons[key] ? key : cat),
//       'All',
//     );

//     const comparator = (a, b) => {
//       let ret = 0;
//       if (a.competency > b.competency) ret = -1;
//       else if (a.competency < b.competency) ret = 1;
//       else if (a.category[0] > b.category[0]) ret = -1;
//       else if (a.category[0] < b.category[0]) ret = 1;
//       else if (a.title > b.title) ret = 1;
//       else if (a.title < b.title) ret = -1;
//       return ret;
//     };

//     return skills
//       .sort(comparator)
//       .filter((skill) => actCat === 'All' || skill.category.includes(actCat))
//       .map((skill) => (
//         <SkillBar categories={categories} data={skill} key={skill.title} />
//       ));
//   };

//   const getButtons = () => Object.keys(buttons).map((key) => (
//     <CategoryButton
//       label={key}
//       key={key}
//       active={buttons}
//       handleClick={handleChildClick}
//     />
//   ));

//   return (
//     <div className="skills">
//       <div className="link-to" id="skills" />
//       <div className="title">
//         <h3>Skills</h3>
//         <p>
//           Note: I think these sections are silly, but everyone seems to have
//           one. Here is a *mostly* honest overview of my skills.
//         </p>
//       </div>
//       <div className="skill-button-container">{getButtons()}</div>
//       <div className="skill-row-container">{getRows()}</div>
//     </div>
//   );
// };

// Skills.propTypes = {
//   skills: PropTypes.arrayOf(
//     PropTypes.shape({
//       title: PropTypes.string,
//       competency: PropTypes.number,
//       category: PropTypes.arrayOf(PropTypes.string),
//     }),
//   ),
//   categories: PropTypes.arrayOf(
//     PropTypes.shape({
//       name: PropTypes.string,
//       color: PropTypes.string,
//     }),
//   ),
// };

// Skills.defaultProps = {
//   skills: [],
//   categories: [],
// };

// export default Skills;
