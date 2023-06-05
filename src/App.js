import { Switch, Route } from 'react-router-dom';
import './App.css';
import Base from './Base/Base';
import DashBoard from './DashBoard';
import Login from './Component/Login';
import SignUp from './Component/SignUp';
import Nopage from './Component/Nopage';
import ForgetPassword from './Component/ForgetPassword';
import Table from './Component/Table';
import Button from './Component/Button';
import Cards from './Component/Cards';
import Colors from './Utilities/Colors';
import UtilityBorder from './Utilities/UtilityBorder'
import UtilityAnimation from './Utilities/UtilityAnimation'
import Other from './Utilities/Other';


function App() {
  return (
    <div className="App">
     <Switch>
      <Route exact path = "/">
      <DashBoard/>
      </Route>
      <Route path = "/login">
      <Login/>
      </Route>
      <Route path = "/signup">
      <SignUp/>
      </Route>
      <Route path = "/nopage">
      <Nopage/>
      </Route>
      <Route path = "/forgetpassword">
      <ForgetPassword/>
      </Route>
      <Route path = "/table">
      <Table/>
      </Route>
      <Route path = "/colors">
      <Colors/>
      </Route>
      <Route path = "/border">
      <UtilityBorder/>
      </Route>
      <Route path = "/Animation">
      <UtilityAnimation/>
      </Route>
      <Route path = "/Other">
      <Other/>
      </Route>
      <Route path = "/Card">
      <Cards/>
      </Route>
      <Route path = "/buttons">
      <Button/>
      </Route>
     </Switch>
    </div>
  );
}

export default App;