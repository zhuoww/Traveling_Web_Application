import React from "react";
import Plan from "../../components/Plan/Plan";
import "./Plans.css";
import plansData from "../../components/Data/plansData";

function Plans() {
  return (
    <div id="main-content" className="plans">
      <h2 className="plans-title">PLAN YOUR TRIP</h2>
      {plansData.map((plan, index) => (
        <Plan
          key={`plan${index}`}
          className={`${index % 2 === 0 ? "plan" : "plan-reverse"}`}
          title={plan.title}
          pic={plan.pic}
          alt={plan.alt}
          text={plan.text}
          showButton={true}
        />
      ))}
    </div>
  );
}

export default Plans;
