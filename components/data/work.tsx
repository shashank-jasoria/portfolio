/**
 * @typedef {Object} Position
 * Conforms to https://jsonresume.org/schema/
 *
 * @property {string} name - Name of the company
 * @property {string} position - Position title
 * @property {string} url - Company website
 * @property {string} startDate - Start date of the position in YYYY-MM-DD format
 * @property {string|undefined} endDate - End date of the position in YYYY-MM-DD format.
 * If undefined, the position is still active.
 * @property {string|undefined} summary - html/markdown summary of the position
 * @property {string[]} highlights - plain text highlights of the position (bulleted list)
 */
const work = [
  {
    name: 'Authnull',
    position: 'Senior Frontend Developer',
    // url: 'https://promptfoo.dev',
    startDate: '2024-08-01',
    endDate: '2025-12-31',
    summary: "At Authnull, I contributed to enterprise-scale solutions for Broadcom by enhancing both admin and end-user platforms. I integrated a dynamic query builder into the consoles, reducing data retrieval time by 22% and accelerating report generation. I also overhauled authentication and login security flows for over 100K users, cutting failure rates by 17% while improving compliance with access policies. Additionally, I introduced a structured documentation framework for testing workflows, which reduced onboarding time by 25% and lowered functional defects by 19%, improving overall development efficiency and reliability.",
  },
  {
    name: 'Farida Gupta',
    position: 'Frontend Developer',
    // url: 'https://promptfoo.dev',
    startDate: '2023-01-01',
    endDate: '2024-05-31',
    summary: "At Farida Gupta, a product-based company, I contributed to developing and maintaining the front-end of a large-scale e-commerce platform. I focused on creating responsive, user-centric web pages, optimizing performance, and ensuring seamless integration with back-end systems. By working closely with the product and design teams, I enhanced the overall user experience, streamlining navigation and improving website functionality for an efficient shopping journeyss.",
  },
  {
    name: 'Build with Innovation',
    position: 'Frontend Developer',
    // url: 'https://promptfoo.dev',
    startDate: '2021-12-01',
    endDate: '2022-12-31',
    summary: "In my recent at role at office Box, I specialized in crafting dynamic web applications using cutting-edge technologies like React, Redux, and Firebase, delivered high-quality, SEO-optimized front-end code for web applications, meeting client specifications and exceeding expectations, designed sleek and functional websites that ensured optimal user experience and client satisfaction",
  },
  {
    name: 'MediaMonks',
    position: 'Intern Frontend Developer',
    // url: 'http://skepticalinvestments.biz',
    startDate: '2021-06-01',
    endDate: '2021-12-31',
    summary: `In my role as a front-end developer i developed responsive and cross-browser compatible front-end code for high-traffic websites proactively researched 3rd party libraries to avoid technical debt and refactored code to adhere to best practices, engaged in code reviews and provided constructive feedback to enhance team productivity.`,
  },
  
];

export default work;
