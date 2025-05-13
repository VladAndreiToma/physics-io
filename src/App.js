import logo from './logo.svg';
import './App.css';
import { BrowserRouter as Router , Routes , Route, Link } from 'react-router-dom';
import GreetingsPage from './GreetingPage';
import TopBar from './TopBar';
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

function App() {

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
    { path: 'relativity' ,  component: Relativity },
    { path: 'optics-and-waves', component: OpticsAndWaves },
    { path: 'solid-state-and-semiconductors', component: SolidStateAndSemiconductors },
  ];

  return (
    <UserLoginProvider>
      <Router>
        <Routes>
          <Route path='/' element={<GreetingsPage/>}/>
          <Route path='/about' element={<About/>}/>
          <Route path='/faq' element={<FAQs/>}/>
          <Route path='/courses' element={<Courses/>}/>
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
