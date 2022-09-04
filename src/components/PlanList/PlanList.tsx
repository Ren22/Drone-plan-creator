import { selectPlans } from '../../features/plans/planSlice';
import { useAppSelector } from '../../hooks';
import { PlanListElement } from '../PlanListElement';

const PlanList = () => {
  const storedPlans = useAppSelector(selectPlans);
  return (
    <div>
      {storedPlans.map((P) => (
        // eslint-disable-next-line react/no-unknown-property
        <div key={P.id}>
          <PlanListElement plan={P} />
        </div>
      ))}
    </div>
  );
};

export default PlanList;
