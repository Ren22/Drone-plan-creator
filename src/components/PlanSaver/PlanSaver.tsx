import { FormEventHandler, useState } from 'react';
import { createPlan } from '../../features/plans/planSlice';
import { useAppDispatch } from '../../hooks';
import { Button } from '../Button';

interface State {
  name: string;
  coords: Array<[]>;
}

const initialState: State = {
  name: '',
  coords: [[]],
};

const PlanSaver = () => {
  const [state, setState] = useState<State>(initialState);
  const dispatch = useAppDispatch();
  const nameChange = (e: React.ChangeEvent) => {
    setState({
      ...state,
      name: (e.target as HTMLInputElement).value,
    });
  };

  const submit: FormEventHandler = (e) => {
    e.preventDefault();
    dispatch(
      createPlan({
        ...state,
      }),
    );
  };

  return (
    <>
      <form onSubmit={submit}>
        <label htmlFor="plan-saver">Save a plan</label>
        <input
          id="plan-saver"
          type="text"
          required={true}
          placeholder="Plan name"
          onChange={nameChange}
        ></input>
        <Button type="submit">Save</Button>
      </form>
    </>
  );
};

export default PlanSaver;
