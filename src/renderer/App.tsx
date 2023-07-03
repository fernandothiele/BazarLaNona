import { MemoryRouter as Router, Routes, Route, NavLink, HashRouter } from 'react-router-dom';
import useToken from './useToken.jsx';
import Home from './Home.jsx';
import Protected from './Protected.jsx';
import Login from './login.jsx';
import Logout from './Logout.jsx';
import Register from './register.jsx';

function App() {
  const { token, setToken } = useToken();

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
                <Route path="/login" element={<Login setToken={setToken} />} />
                <Route path="/register" element={<Register />} />
              </>
            ) : (
              <>
                <Route path="/" element={<Home />} />
                <Route path="/protected" element={<Protected />} />
                <Route path="/logout" element={<Logout />} />
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
