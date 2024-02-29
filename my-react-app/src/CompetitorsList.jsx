// CompetitorsList.js
import PropTypes from "prop-types";

const CompetitorsList = ({groups}) => {
   return (
      <div className="container">
         <h1>Chess Tournament Competitors </h1>
         <div className="groups">
            {groups.map((group, groupIndex) => (
               <div key={groupIndex} className="group">
                  <h2>Group {groupIndex + 1} - (16 Players)</h2>
                  <hr />
                  <ul>
                     {group.map((competitor, index) => (
                        <li key={index}>
                           {index + 1}. {competitor}
                        </li>
                     ))}
                  </ul>
               </div>
            ))}
         </div>
      </div>
   );
};

CompetitorsList.propTypes = {
   groups: PropTypes.array,
};

export default CompetitorsList;
