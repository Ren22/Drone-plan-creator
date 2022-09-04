import { RootState } from './store';

const KEY = 'redux';
export function loadState() {
  try {
    const serializedState = localStorage.getItem(KEY);
    if (serializedState === '' || serializedState === null) return undefined;
    return { plans: JSON.parse(serializedState) };
  } catch (e) {
    return undefined;
  }
}

export async function saveState(state: RootState) {
  try {
    const serializedState = JSON.stringify({ plans: state.plans.plans });
    localStorage.setItem(KEY, serializedState);
  } catch (e) {
    // Ignore
  }
}
