import { MemoryRouter as Router, Routes, Route, NavLink, HashRouter } from 'react-router-dom';
import useToken from './useToken.jsx';
import useTipo from './useTokenTC.jsx'
import Home from './Home.jsx';
import Protected from './Protected.jsx';
import Login from './login.jsx';
import Logout from './Logout.jsx';
import Register from './register.jsx';
import Empleado from './empleado.jsx';
import Jefe from './jefe.jsx';

function App() {
  const { token, setToken } = useToken();
  const { tipo, setTipo } = useTipo();
  console.log("App: token: ", token);
  console.log("App: tipo: ", tipo);

  return (
    <div>
      <HashRouter>
        <nav>
          <ul>
            {!token ? (
              <>
                <li>
                  <NavLink to="/login">Login</NavLink>
                </li>
                <li>
                  <NavLink to="/register">Register</NavLink>
                </li>
              </>
            ) : (
              <>
                <li>
                  <NavLink to="/">Home</NavLink>
                </li>
                <li>
                  <NavLink to="/protected">Protected</NavLink>
                </li>
                <li>
                  <NavLink to="/logout">Logout</NavLink>
                </li>
                {tipo === "empleado" ? (
                  <li>
                  <NavLink to="/empleado">Empleado</NavLink>
                  </li>
                    ) : (
                  <li>
                    <NavLink to="/jefe">Jefe</NavLink>
                  </li>
                    )}
              </>
            )}
          </ul>
        </nav>

        <div>
          <div>
            <span>Welcome!</span> {token ? token.username : "Guest"}
          </div>

          <Routes>
            {!token ? (
              <>
                <Route path="/login" element={<Login setToken={setToken} setTipo={setTipo} />} />
                <Route path="/register" element={<Register />} />
              </>
            ) : (
              <>
                <Route path="/" element={<Home />} />
                <Route path="/protected" element={<Protected />} />
                <Route path="/logout" element={<Logout />} />
                {tipo === "empleado" ? (
                  <Route path="/empleado" element={<Empleado />} />
                ) : (
                  <Route path="/jefe" element={<Jefe />} />
                )}
              </>
            )}
            {/* Ruta genérica para casos no definidos */}
            <Route path="/" element={<Home />} />
          </Routes>
        </div>
      </HashRouter>
    </div>
  );
}

export default App;
