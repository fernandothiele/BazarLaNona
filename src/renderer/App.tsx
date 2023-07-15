//Importar Funciones relacionadas con React y distintos modulos node
import { MemoryRouter as Router, Routes, Route, NavLink, HashRouter } from 'react-router-dom';
import { useEffect } from 'react'; 
// Importar Funcion de Tokens
import useToken from './useToken.jsx';
import useTipo from './useTokenTC.jsx'
import useCaja from './cajaToken.jsx';
//-----------------------------------------
//Importar Componentes generales
import Home from './Home.jsx';
import Login from './login.jsx';
import Logout from './Logout.jsx';
import Register from './register.jsx';
import Caja from './caja.jsx';
//-----------------------------------------
//Componentes boleta
import Boleta from './boleta.jsx';
//-----------------------------------------
//Componentes Jefe de Ventas
import Factura from './factura.jsx';
import AñadirProducto from './añadirProducto.jsx';
import añadirProducto from 'lib/añadirProducto.js';
//-----------------------------------------



function App() {
  const { token, setToken } = useToken();
  const { tipo, setTipo } = useTipo();
  const { caja, setCaja } = useCaja();

  




  console.log("App: token: ", token);
  console.log("App: tipo: ", tipo);
  console.log("Caja",caja)

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
                {tipo === "empleado" ? (
                  <li>
                  <NavLink to="/boleta">Generar Boleta</NavLink>
                  </li>
                    ) : (
                  <>
                  <li>
                    <NavLink to="/factura">Generar Factura</NavLink>
                  </li>
                  <li>
                    <NavLink to="/añadirProducto">Añadir Producto</NavLink>
                  </li>
                  <li>
                    <Caja caja={caja} setCaja={setCaja}/>
                  </li>
                  </>)}
                <li>
                  <Logout/>
                </li>
              </>
            )}
          </ul>
        </nav>

        <div>
          <div>
            <span>Welcome!</span> {token ? token : "Guest"}
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
                {tipo === "empleado" ? (
                  <Route path="/boleta" element={<Boleta caja={caja}/>} />
                ) : (
                  <>
                  <Route path="/factura" element={<Factura />} />
                  <Route path='/añadirProducto' element={<AñadirProducto />}/>
                  </>
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
