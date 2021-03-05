import { v4 as uuid } from "uuid";
import moment from "moment";
import { randomFromArray, toTitleCase } from "../utilities";

// const tourDateTemplate = {
//   date: new Date(),
//   ticketsUrl: "./",
//   location: {
//     event: "Mad Cool Festival 2021",
//     venue: "IFEMA Feria de Madrid",
//     city: "Madrid, Spain",
//   },
// };

const generateTour = datesCount => {
  const tour = [];

  for (let i = 0; i < datesCount; i++) {
    const show = {
      id: uuid(),
      ticketsUrl: "/",
      location: {
        event: getEvent(),
        venue: "Example Venue",
        city: "City, Country",
      },
    };

    const daysToAdd = Math.ceil(5 + Math.random() * 365);
    show.date = moment().add(daysToAdd, "days");

    tour.push(show);
  }

  return tour;
};

const getEvent = () => {
  const w1 = randomFromArray([
    "Pretty",
    "Rather",
    "Quite",
    "Fairly",
    "Relatively",
    "Somewhat",
    "Moderately",
  ]);
  const w2 = randomFromArray([
    "Alright",
    "Cool",
    "Good",
    "Decent",
    "Adequate",
    "Okay",
    "Satisfactory",
  ]);
  const w3 = randomFromArray(["Festival"]);

  return `${w1} ${w2} ${w3}`;
};

const numOfShows = 15 + Math.ceil(Math.random() * 6);
const tour = generateTour(numOfShows);
export default tour;
