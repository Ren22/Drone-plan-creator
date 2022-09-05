import { selectPlans } from '../../features/plans/planSlice';
import { useAppSelector } from '../../hooks';
import { PlanListElement } from '../PlanListElement';
import './PlanList.css';
import bemCn from 'bem-cn-lite';

const PlanList = () => {
  const storedPlans = useAppSelector(selectPlans);
  const block = bemCn('planList');

  return (
    <div className={block()}>
      <span>Saved plans:</span>
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
