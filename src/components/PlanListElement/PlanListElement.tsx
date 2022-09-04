import { deletePlan, Plan } from '../../features/plans/planSlice';
import { restoreCoords } from '../../features/currentCoords/currentCoords';
import { useAppDispatch } from '../../hooks';
import { Button } from '../Button';

interface Props {
  plan: Plan;
}

const PlanListElement = ({ plan }: Props) => {
  const dispatch = useAppDispatch();
  const deletePlanFromList = () => dispatch(deletePlan(plan));
  const restorePlanFromList = () => dispatch(restoreCoords(plan.coords));
  return (
    <>
      <div>
        <p>Name: {String(plan.name)}</p>
      </div>
      <Button onClick={deletePlanFromList}>Remove {String(plan.name)}</Button>
      <Button onClick={restorePlanFromList}>Restore {String(plan.name)}</Button>
    </>
  );
};

export default PlanListElement;
