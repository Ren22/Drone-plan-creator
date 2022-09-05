import { FormEventHandler, useEffect, useState } from 'react';
import { Coords, selectCurrentCoords } from '../../features/currentCoords/currentCoords';
import { createPlan } from '../../features/plans/planSlice';
import { useAppDispatch, useAppSelector } from '../../hooks';
import { Button } from '../Button';
import bemCn from 'bem-cn-lite';
import './PlanSaver.css';
interface State {
  name: string;
  coords: Coords[];
}

const initialState: State = {
  name: '',
  coords: [],
};

const PlanSaver = () => {
  const [state, setState] = useState<State>(initialState);
  const currentCoords = useAppSelector(selectCurrentCoords);
  const dispatch = useAppDispatch();
  const nameChange = (e: React.ChangeEvent) => {
    setState({
      ...state,
      name: (e.target as HTMLInputElement).value,
    });
  };

  useEffect(() => {
    setState({
      ...state,
      coords: currentCoords,
    });
  }, [currentCoords]);

  const submit: FormEventHandler = (e) => {
    e.preventDefault();
    dispatch(
      createPlan({
        ...state,
      }),
    );
  };

  const block = bemCn('planSaver');

  return (
    <>
      <form className={block()} onSubmit={submit}>
        <div className={block('content')}>
          <label htmlFor="plan-saver">Plan name:</label>
          <input
            id="plan-saver"
            type="text"
            required={true}
            placeholder="Enter you plan name"
            onChange={nameChange}
          ></input>
          <Button className={block('button')} type="submit">
            Save plan
          </Button>
        </div>
      </form>
    </>
  );
};

export default PlanSaver;
