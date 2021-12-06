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
<li>Se utiliza Firebase para cargar el catálogo de productos y para grabar las ordenes de compra.</li>
<li>Se ingresa a la ruta base con "/".</li>
<li>Se accede al carrito con la ruta "/Cart".</li>
<li>También se puede acceder a las cartegorias e items con el ruteo "categories/:categoryId" y "/item/:itemid" respectivamente.</li>
<li>Se hace uso de los componentes sugeridos: NavBar, CartWidget, CartContext, Cart, Item, ItemList, ItemListContainer, ItemDetail, ItemDetailContainer, Category, ItemCount.</li>
</ul>

## `El simulador permite las siguientes interacciones:`

<ul>
<li>Navegar por el catálogo de películas e ir a sus detalles.</li>
<li>Filtrar por género de película.</li>
<li>Desde el detalle se puede ver la descripción, foto y precio e ingresarlo al carrito.</li>
<li>Se valida desde el contador número mínimo y máximo (de acuerdo al stock disponible) de unidades que se pueden agregar.</li>
<li>En el carrito se pueden visualizar un listado compacto de la orden que incluye cada item, cantidad de unidades y el precio total.</li>
<li>Se pueden remover las películas del carrito desde el detalle de cada una y también desde el Carrito.</li>
<li>Al ingresar nombre y apellido, teléfono e e-mail, se activa el botón de "Finalizar compra".</li>
<li>Al clickear en "Finalizar compra", se guarda la orden en la base de datos de Firebase que contiene los datos del comprador, todos los productos, el monto total y un código de orden.</li>
</ul>

