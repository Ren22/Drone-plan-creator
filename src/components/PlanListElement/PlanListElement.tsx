import { Button } from '../Button';

interface Props {
  element: {
    name: string;
    cooridinates: [];
  };
}

const PlanListElement = ({ element }: Props) => {
  const deleteElement = () => {};
  return (
    <>
      <div>
        <p>name: {String(element.name)}</p>
      </div>
      <Button onClick={deleteElement}>Remove the plan</Button>
    </>
  );
};

export default PlanListElement;
