import { PlanListElement } from "../PlanListElement";

const PlanList = () => {
  const storedPlans = [];
  return (
    <div>
      storedPlans.map((P) => {
        <div key={P.id} >
          <PlanListElement element={M} /> 
        </div>
      })
    </div>
  )
}

export default PlanList;