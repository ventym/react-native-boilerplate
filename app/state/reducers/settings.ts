import { reducerWithInitialState } from 'typescript-fsa-reducers';
import { produce } from 'immer';

import actions from 'app/actions';
import { ISettingsState } from 'app/state/types';

const initialState: ISettingsState = {
    themeName: 'defaultTheme',
};

const settings = reducerWithInitialState(initialState)
.case(actions.settings.toggleTheme, produce((draft: ISettingsState) => {
    draft.themeName = draft.themeName === 'defaultTheme' ? 'alterTheme' : 'defaultTheme';
}))
.build();

export default settings;
