import React from 'react'
import { Router, Route, IndexRoute, hashHistory } from 'react-router'

// import comp from '../screen/comp'
// import valMealBf from '../screen/value-meal-bf'
// import valMealRod from '../screen/value-meal-rod'
// import happyMealRod from '../screen/happy-meal-rod'
// import happyMealBf from '../screen/happy-meal-bf'

import {
    Screen1,
    Screen2,
} from '@screens'

const router = () =>
    <Router history={hashHistory}>
        <Route path='/' component={Screen1} />
        <Route path='screen1' component={Screen1} />
        <Route path='screen2' component={Screen2} />
    </Router>

export default router
