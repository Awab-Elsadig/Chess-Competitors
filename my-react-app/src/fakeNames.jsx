// utils/fakeNames.js

const generateFakeNames = () => {
   const fakeNames = [];
   for (let i = 1; i <= 128; i++) {
      fakeNames.push(`Player ${i}`);
   }
   return fakeNames;
};

export default generateFakeNames;
