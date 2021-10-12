import React from 'react';
import ReactDOM from 'react-dom';
import { library } from '@fortawesome/fontawesome-svg-core'
import { fab } from '@fortawesome/free-brands-svg-icons'
import { 
  faUser, 
  faSuitcase, 
  faUserTie, 
  faGraduationCap,
  faMapMarkerAlt,
  faBars,
  faTimes,
} from '@fortawesome/free-solid-svg-icons'

import CV from './pages/CV';

library.add(faTimes, faBars, faUser, fab, faSuitcase, faUserTie, faGraduationCap, faMapMarkerAlt);

const App = () => {

  return <CV />
}

const root = document.getElementById('root');
ReactDOM.render(<App/>, root);

module.hot.accept();
