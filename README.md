

# Bazar La Nona

# Instalar
Instalar dependencias
```npm
npm install
```
## Script Base de Datos

```sql  
create database "Nombre base de datos";
use "Nombre base de datos";

-- Crear la tabla Cuenta
CREATE TABLE Cuenta (
  nombre_usuario VARCHAR(255) PRIMARY KEY NOT NULL,
  contrasena VARCHAR(255) NOT NULL,
  tipo_cuenta VARCHAR(20) NOT NULL
);
-- Crear la tabla Venta
CREATE TABLE Venta (
  codigo INT PRIMARY KEY AUTO_INCREMENT NOT NULL,
  nombre_empleado varchar(255) NOT NULL,
  fecha DATE NOT NULL,
  tipo_documento VARCHAR(20) NOT NULL,
  
  FOREIGN KEY (nombre_empleado) REFERENCES Cuenta(nombre_usuario)
);
-- Crear la tabla Inventario
CREATE TABLE Inventario (
  codigo_producto INT PRIMARY KEY NOT NULL,
  nombre_producto VARCHAR(255) NOT NULL,
  informacion VARCHAR(255) NOT NULL,
  precio_unitario DECIMAL(10, 2) NOT NULL,
  cantidad INT NOT NULL
);
-- Crear la tabla Factura
CREATE TABLE Factura (
  codigo INT PRIMARY KEY AUTO_INCREMENT NOT NULL,
  fecha DATE NOT NULL,
  venta INT NOT NULL,
  razon_social VARCHAR(255) NOT NULL,
  rut_cliente VARCHAR(20) NOT NULL,
  giro VARCHAR(255) NOT NULL,
  direccion VARCHAR(255) NOT NULL,
  total_neto DECIMAL(10, 2) NOT NULL,
  iva DECIMAL(10, 2) NOT NULL,
  total_final DECIMAL(10, 2) NOT NULL,
  
  FOREIGN KEY (venta) REFERENCES Venta(codigo)
);
-- Crear la tabla DetalleFactura
CREATE TABLE DetalleFactura (
  id INT PRIMARY KEY AUTO_INCREMENT NOT NULL,
  factura INT NOT NULL,
  codigo_producto INT NOT NULL,
  cantidad INT NOT NULL,
  precio_unitario DECIMAL(10, 2) NOT NULL,
  
  FOREIGN KEY (factura) REFERENCES Factura(codigo),
  FOREIGN KEY (codigo_producto) REFERENCES Inventario(codigo_producto)
);
-- Crear la tabla Boleta
CREATE TABLE Boleta (
  codigo INT PRIMARY KEY AUTO_INCREMENT NOT NULL,
  fecha DATE NOT NULL,
  venta INT NOT NULL,
  total_pagar DECIMAL(10, 2) NOT NULL,
  
  FOREIGN KEY (venta) REFERENCES Venta(codigo)
);
```
# Modelo SQL
![base de datos](https://github.com/fernandothiele/BazarLaNona/assets/133150948/fbe94620-c598-4151-9a3c-7c7edf0be64b)


# Modificar conexión MySQL
Ruta Archivo
```
/src/lib/coneccion.ts
```

```ts
const  connection  =  mysql.createConnection({
	host:  'host', //localhost direccion de la base de datos
	user:  'user', //Nombre de Usuario
	password:  'password', //Contraseña de Usuario
	database:  'database' // Nombre Base de Datos
});
```

# comandos npm 
#### Start
```npm
npm start
```
#### Package
```npm
npm run package 
```



