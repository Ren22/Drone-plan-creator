import { deletePlan, Plan } from '../../features/plans/planSlice';
import { useAppDispatch } from '../../hooks';
import { Button } from '../Button';

interface Props {
  plan: Plan;
}

const PlanListElement = ({ plan }: Props) => {
  const dispatch = useAppDispatch();
  const deletePlanFromList = () => dispatch(deletePlan(plan));
  return (
    <>
      <div>
        <p>Name: {String(plan.name)}</p>
      </div>
      <Button onClick={deletePlanFromList}>Remove the plan</Button>
    </>
  );
};

export default PlanListElement;
