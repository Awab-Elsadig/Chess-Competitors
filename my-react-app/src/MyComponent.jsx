import {useState} from "react";

function MyComponent() {
   const [cars, setCars] = useState([]);
   const [carYear, setCarYear] = useState(new Date().getFullYear());
   const [carMake, setCarMake] = useState("");
   const [carModel, setCarModel] = useState("");

   function handleAddCar() {
      setCars((c) => [...c, {year: carYear, make: carMake, model: carModel}]);

      setCarYear(new Date().getFullYear());
      setCarMake("");
      setCarModel("");
   }
   function handleRemoveCar(index) {
      setCars((c) => c.filter((_, i) => i != index));
   }

   function handleYearChange(e) {
      setCarYear(e.target.value);
   }

   function handleMakeChange(e) {
      setCarMake(e.target.value);
   }

   function handleModelChange(e) {
      setCarModel(e.target.value);
   }

   return (
      <div>
         <h2>List of Cars</h2>
         <ul>
            {cars.map((c, i) => (
               <li key={i} onClick={() => handleRemoveCar(i)}>
                  {c.year} {c.make} {c.model}
               </li>
            ))}
         </ul>

         <input type="number" value={carYear} onChange={handleYearChange} />
         <input type="text" value={carMake} onChange={handleMakeChange} placeholder="Enter car make" />
         <input type="text" value={carModel} onChange={handleModelChange} placeholder="Enter car model" />

         <button onClick={handleAddCar}>Add Car</button>
      </div>
   );
}

export default MyComponent;
