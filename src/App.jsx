// App.js

import CompetitorsList from "./CompetitorsList";
import faker from "faker";

const generateRandomNames = (count) => {
   const names = [];
   for (let i = 0; i < count; i++) {
      const firstName = faker.name.firstName();
      const lastName = faker.name.lastName();
      names.push(`${firstName} ${lastName}`);
   }
   return names;
};

const App = () => {
   const numCompetitors = 128;
   const numGroups = 8;

   const randomNames = generateRandomNames(numCompetitors);

   // Divide the competitors into groups
   const groupedCompetitors = Array.from({length: numGroups}, (_, groupIndex) => randomNames.slice(groupIndex * (numCompetitors / numGroups), (groupIndex + 1) * (numCompetitors / numGroups)));

   return <CompetitorsList groups={groupedCompetitors} />;
};

export default App;
