import { FormEventHandler, useState } from 'react';
import { Button } from '../Button';

interface State {
  name: string;
}

const initialState: State = {
  name: '',
};

const PlanSaver = () => {
  const [state, setState] = useState<State>(initialState);
  const nameChange = (e: React.ChangeEvent) => {
    setState({
      ...state,
      name: (e.target as HTMLInputElement).value,
    });
  };

  const submit: FormEventHandler = (e) => {
    console.log('Not implemented');
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
        <Button type="submit"></Button>
      </form>
    </>
  );
};

export default PlanSaver;
