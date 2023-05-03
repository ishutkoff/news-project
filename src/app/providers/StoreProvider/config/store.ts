import { configureStore } from '@reduxjs/toolkit';
import { CountReducer } from '../../../../entities/Counter'; // TODO Разобраться почему тут требуется относительный путь
import { StateSchema } from './StateSchema';

export const createReduxStore = (initialState?: StateSchema) => configureStore<StateSchema>({
    reducer: {
        counter: CountReducer,
    },
    devTools: __IS_DEV__,
    preloadedState: initialState,
});
