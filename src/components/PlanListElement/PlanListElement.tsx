import { deletePlan, Plan } from '../../features/plans/planSlice';
import { restoreCoords } from '../../features/currentCoords/currentCoords';
import { useAppDispatch } from '../../hooks';
import { Button } from '../Button';
import './PlanListElement.css';
import bemCn from 'bem-cn-lite';
interface Props {
  plan: Plan;
}

const PlanListElement = ({ plan }: Props) => {
  const dispatch = useAppDispatch();
  const deletePlanFromList = () => dispatch(deletePlan(plan));
  const restorePlanFromList = () => dispatch(restoreCoords(plan.coords));
  const block = bemCn('planListElement');
  return (
    <>
      <div className={block()}>
        <p>Name: {String(plan.name)}</p>
        <div className={block('buttons')}>
          <Button onClick={deletePlanFromList}>Remove {String(plan.name)}</Button>
          <Button onClick={restorePlanFromList}>Restore {String(plan.name)}</Button>
        </div>
      </div>
    </>
  );
};

export default PlanListElement;
