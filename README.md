# Proyecto entrega Final de React JS de CoderHouse (Camada: 19745)
<strong>Nombre:</strong> Simulador de e-commerce - <strong>Alumno:</strong> Emmanuel Pinto

## `Available Scripts`

This project was bootstrapped with [Create React App](https://github.com/facebook/create-react-app).

In the project directory, you can run:

### `npm start`

Runs the app in the development mode.\
Open [http://localhost:3000](http://localhost:3000) to view it in the browser.

The page will reload if you make edits.\
You will also see any lint errors in the console.

## `Notas del proyecto:`

<ul>
<li>Se declara el objeto Producto con su método validaStock.</li>
<li>Se intancian los Productos y se crea el array Base de Datos.</li>
<li>Se declara el objeto Ecommerce que contiene su arreglo Carrito y sus métodos.</li>
<li>Se hace uso del Local Storage para validar nombre del visitante y carrito pendiente.</li>
<li>Se declaran la funciones cargarProducto y armarCatalogo para agregar productos al catálogo y mostrarlos en el Front respectivamente.</li>
<li>Se declara la función FiltroPorCategoria para aplicar el filtro al catálogo de productos en el Front a través del Menu de navegación.</li>
<li>Se incorpora la librería jQuery al proyecto, en su opción de archivo local. Se hace uso de los mismos para generar una breve animación en los campos del formulario de carga de producto.</li>
<li>Se incorpora la carga de datos estáticos mediante llamada asíncrona desde un archivo JSON local. Trae el stock desde un JSON y lo muestra en el catálogo en el front.</li>
</ul>

## `El simulador permite las siguientes interacciones:`

<ul>
<li>Navegar por el catálogo de películas e ir a sus detalles.</li>
<li>Filtrar por género de película.</li>
<li>Desde el detalle se puede ver la descripción, foto y precio e ingresarlo al carrito.</li>
<li>Se valida desde el contador número mínimo y máximo (de acuerdo al stock disponible) de unidades que se pueden agregar.</li>
<li>En el carrito se pueden visualizar un listado compacto de la orden con el precio total.</li>
<li>Se pueden remover las películas del carrito desde el detalle de cada una y también desde el Carrito.</li>
<li>Al ingresar nombre y apellido, teléfono e e-mail, se activa el botón de "Finalizar compra".</li>
<li>Al clickear en "Finalizar compra", se guarda la orden en la base de datos de Firebase que contiene los datos del comprador, todos los productos, el monto total y un código de orden.</li>
</ul>

