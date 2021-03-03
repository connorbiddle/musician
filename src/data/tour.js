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
        venue: "An Example Venue",
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
  const rfa = randomFromArray;
  const w1 = rfa(["Pretty", "Rather", "Quite", "Fairly", "Relatively"]);
  const w2 = rfa(["Alright", "Cool", "Good", "Decent", "Adequate"]);
  const w3 = rfa(["Festival"]);

  return `${w1} ${w2} ${w3}`;
};

const numOfShows = 15 + Math.ceil(Math.random() * 6);
const tour = generateTour(numOfShows);
export default tour;
