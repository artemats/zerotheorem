import { combineReducers } from 'redux';
import { trendReducer } from './charts/trend/reducer';
import { residualPlotReducer } from "./charts/residualPlot/reducer";
import { residualHisReducer } from './charts/residualHistogram/reducer';
import { qqPlotReducer } from './charts/qqPlot/reducer';
import { probabilityPlotReducer } from './charts/probabilityPlot/reducer';

export default combineReducers({
    trendReducer,
    residualPlotReducer,
    residualHisReducer,
    qqPlotReducer,
    probabilityPlotReducer
});