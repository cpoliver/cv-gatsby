import { CVData } from "./types";

const getFlag = (countryCode: string) =>
  `https://www.countryflags.io/${countryCode}/flat/24.png`;

export const data: CVData = {
  name: "Charles P. Oliver",
  role: "Front-End Architect & Full-Stack Developer",
  email: "charles@cpoliver.com",
  phone: "+44 7957 127 XXX",
  location: {
    name: "Leeds, UK",
    latLong: ["53.8060835", "-1.6057712"],
    flagUrl: getFlag("gb")
  },
  profile:
    "I am a passionate polyglot programmer who thrives off problem-solving in a variety of languages, both professionally and for fun. My main skills are centred around full-stack web development with JavaScript (React, React Native, Node), GraphQL, SCSS/CSS-in-JS, and HTML to create rich, responsive user experiences. Prior experience of people management, application support, and UI design also contribute to my offerings as a multi-disciplined professional.",
  skills: [
    "Leading and working as part of Agile development remotely and on-site",
    "Creating responsive, accessible sites and apps, using a mobile-first approach",
    "Mentoring and upskilling new developers internally and as a 3rd party consultant",
    "Advocating TDD in a multitude of languages such as JavaScript, C#, and Elixir",
    "Extensive experience with libraries such as React, Redux, Apollo, Ramda, Express, and Jest",
    "Using React Native and Expo to create cross-platform mobile apps",
    "Engaging with clients in-person and remotely on the behalf of a consulting company"
  ],
  workHistory: [
    {
      company: "IAM Cloud",
      role: "Front-End Architect",
      date: { from: "2020-06-01" },
      location: {
        name: "Huddersfield, UK",
        isRemote: true,
        latLong: ["53.649602", "-1.7827837"],
        flagUrl: getFlag("gb")
      },
      description: [
        "Creating reusable components with React and ES6",
        "Rewriting NodeJS services in Elixir for improved performance",
        "Developing comprehensive UI tests with Jest and Enzyme",
        "Harnessing the power of functional programming within Elixir and JavaScript codebases",
        "Integrating A/B testing and conversion tracking throughout the tech stack",
        "Working as part of a lean, cross-functional team made up of self-organised squads"
      ]
    },
    {
      company: "cloudThing",
      role: "Front-End Architect",
      date: { from: "2019-09-01", to: "2020-05-01" },
      location: {
        name: "Birmingham, UK",
        isRemote: true,
        latLong: ["52.3937796", "-2.1029368"],
        flagUrl: getFlag("gb")
      },
      description: [
        "Creating reusable components with React and ES6",
        "Rewriting NodeJS services in Elixir for improved performance",
        "Developing comprehensive UI tests with Jest and Enzyme",
        "Harnessing the power of functional programming within Elixir and JavaScript codebases",
        "Integrating A/B testing and conversion tracking throughout the tech stack",
        "Working as part of a lean, cross-functional team made up of self-organised squads"
      ]
    },
    {
      company: "Casumo",
      role: "Full-Stack Developer",
      date: { from: "2017-08-01", to: "2019-05-01" },
      location: {
        name: "Swieqi, Malta",
        isRemote: true,
        latLong: ["35.9228936", "14.4743492"],
        flagUrl: getFlag("mt")
      },
      description: [
        "Migrating legacy KnockoutJS and ES5 code to a new React and Webpack-driven platform",
        "Greenfield React Native mobile app development for Android and iOS",
        "Producing interactive documentation and visual regression tests with Storybook and Chromatic",
        "Refactoring Redux stores to use Apollo client state and Flow types",
        "Creating GraphQL endpoints to aggregate business logic reliant upon disparate REST APIs",
        "Organising workshops, conferences, and get-togethers for the Front-End team"
      ]
    },
    {
      company: "HolidayCheck",
      role: "Full-Stack Developer",
      date: { from: "2017-02-01", to: "2019-07-01" },
      location: {
        name: "Bottighofen, Switzerland",
        latLong: ["47.6400672", "9.2112216"],
        flagUrl: getFlag("ch")
      },
      description: [
        "Node and React development for the largest German holiday deal website",
        "Authoring React components shared across the company web estate",
        "Writing node endpoints to replace the legacy php backend",
        "Maintaining 100% code coverage with Mocha and Enzyme tests",
        "Porting Fluxible stores and reducers to Redux",
        "Engaging in hackathons to turn concepts into revenue-generating production code"
      ]
    }
  ],
  trainingHistory: [
    {
      institution: "Interaction Design Foundation",
      date: { from: "2019-12-01", to: "2020-04-01" },
      description: [
        "User Experience: The Beginner’s Guide",
        "Design Thinking: The Beginner’s Guide"
      ]
    },
    {
      institution: "Hull College of Art & Design",
      date: { from: "2007-09-01", to: "2008-07-01" },
      description: [
        "National Certificate in Graphic Design (Double Merit)",
        "AS Level Art & Design"
      ]
    }
  ]
};
