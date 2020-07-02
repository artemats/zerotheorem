import { combineReducers } from 'redux';
import { trendReducer } from './charts/trend/reducer';
import { residualPlotReducer } from "./charts/residualPlot/reducer";
import { residualHisReducer } from './charts/residualHistogram/reducer';

export default combineReducers({
    trendReducer,
    residualPlotReducer,
    residualHisReducer
});