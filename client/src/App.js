import './App.css';
import './style_components/glareDiv.css';
import './style_components/simulations.css';
import { BrowserRouter as Router , Routes , Route, Link } from 'react-router-dom';
import GreetingsPage from './GreetingPage';
import About from './About';
import FAQs from './FAQ';
import Courses from './Courses';
import MathematicalMethodsForPhysicsAndCalculus from './courses/MathematicalMethodsForPhysicsAndCalculus';
import LinearAlgebra from './courses/LinearAlgebra';
import MethodsInMathematicalPhysics from './courses/MethodsInMathematicalPhysics';
import VectorCalculus from './courses/VectorCalculus';
import NewtonianMechanics from './courses/NewtonianMechanics';
import AnalyticalMechanics from './courses/AnalyticalMechanics';
import OscillationsAndWaves from './courses/OscillationsAndWaves';
import Electrostatics from './courses/Electrostatics';
import Magnetostatics from './courses/Magnetostatics';
import ExtendedElectroMagnetism from './courses/ExtendedElectroMagnetism';
import ElectrodynamicsAndRelativity from './courses/ElectrodynamicsAndRelativity';
import ThermodynamicsAndStatistics from './courses/ThermodynamicsAndStatistics';
import QuantumMechanics from './courses/QuantumMechanics';
import OpticsAndWaves from './courses/OpticsAndWaves';
import SolidStateAndSemiconductors from './courses/SolidStateAndSemiconductors';
import CreateChallengesPage from './courses/CreateChallengesPages';
import Relativity from './courses/Relativity';
import {UserLoginProvider} from './AppContexts';
import UserDashboard from './UserDashboard';
import LoginForm from './LoginForm';
import RegistrationForm from './RegisterForm';
import SimultationsDashboard from './SimulationsDashboard';
import useClickSplash from "./style_components/useClickSplash";
import './ComplementaryStyles.css';
import QuantumFieldTheory from './courses/QuantumFieldTheory';
import StatisticalQuantumMechanics from './courses/StatisticalQuantumMechanics';
import LasersSystems from './courses/LaserSystems';
import SemiconductorsAdvanced from './courses/SemiconductorsAdvanced';
import AdvancedOpticsForLaserSystems from './courses/AdvancedOpticsForLaserSystems';
import ThermodynamicsPotentials from './courses/ThermodynamicPotentials';
import HeatEngines from './courses/HeatEngines';
import Cryogenics from './courses/Cryogenics';
import ConductorsAndMetals from './courses/ConductorsAndMetals';

function App() {

  useClickSplash();

  const courseRoutes = [
    { path: 'mathematical-methods-for-physics-and-calculus', component: MathematicalMethodsForPhysicsAndCalculus },
    { path: 'linear-algebra', component: LinearAlgebra },
    { path: 'methods-in-mathematical-physics', component: MethodsInMathematicalPhysics },
    { path: 'vector-calculus', component: VectorCalculus },
    { path: 'newtonian-mechanics', component: NewtonianMechanics },
    { path: 'analytical-mechanics', component: AnalyticalMechanics },
    { path: 'oscillations-and-waves', component: OscillationsAndWaves },
    { path: 'electrostatics', component: Electrostatics },
    { path: 'magnetostatics', component: Magnetostatics },
    { path: 'extended-electro-magnetism', component: ExtendedElectroMagnetism },
    { path: 'electrodynamics-and-relativity', component: ElectrodynamicsAndRelativity },
    { path: 'thermodynamics-and-statistics', component: ThermodynamicsAndStatistics },
    { path: 'quantum-mechanics', component: QuantumMechanics },
    { path: 'quantum-field-theory', component: QuantumFieldTheory },
    { path: 'statistical-quantum-mechanics', component: StatisticalQuantumMechanics },
    { path: 'relativity' ,  component: Relativity },
    { path: 'optics-and-waves', component: OpticsAndWaves },
    { path: 'laser-systems', component: LasersSystems},
    { path: 'solid-state-and-semiconductors', component: SolidStateAndSemiconductors },
    { path: 'semiconductors-advanced' , component: SemiconductorsAdvanced },
    { path: "advanced-optics-for-laser-systems", component: AdvancedOpticsForLaserSystems },
    { path: 'thermodynamic-potentials', component: ThermodynamicsPotentials },
    { path: 'heat-engines' , component: HeatEngines },
    { path: "cryogenics" , component: Cryogenics },
    { path: 'conductors-and-metals' , component: ConductorsAndMetals }
  ];

  return (
    <UserLoginProvider>
      <Router>
        <Routes>
          <Route path='/' element={<GreetingsPage/>}/>
          <Route path='/about' element={<About/>}/>
          <Route path='/faq' element={<FAQs/>}/>
          <Route path='/courses' element={<Courses/>}/>
          <Route path='/simulations/*' element={<SimultationsDashboard/>}/>
          <Route path='/user' element={<UserDashboard/>}/>
          <Route path='/login' element={<LoginForm/>}/>
          <Route path='/registration' element={<RegistrationForm/>} />
          {/* Dynamically mapped course routes */}
          {courseRoutes.map((course, index) => (
            <Route
              key={index}
              path={`/courses/${course.path}`}
              element={<course.component />}
            />
          ))}
          <Route path='/courses/:topicId/problems' element={<CreateChallengesPage/>}/>
        </Routes>
      </Router>
    </UserLoginProvider>
  );
}

export default App;
