# Módulo 3: Ejercicio de evaluación final

Aplicación web de los personajes de Rick and Morty. Desarrollada por Alicia Ripoll para el Módulo 3: REACT

   ![700143678ddfb9dae5534bf3dca2e7ab](https://user-images.githubusercontent.com/113428720/207731468-ae04643d-f9e7-4d55-926a-05bb99a824f7.jpg)


La web contiene las siguientes funcionalidades:

## Listado de personajes

En primer lugar, vamos a realizar una web con el listado de personajes de Rick and Morty. Para eso, vamos a
utilizar el servicio de https://rickandmortyapi.com/documentation/#get-all-characters que nos devuelve
información sobre los primeros 20 personajes de la serie. Sobre cada uno, vamos a pintar al menos:

- Foto
- Nombre
- Especie

## Filtrado de personajes

Ahora que ya tenemos el listado de personajes en pantalla, la segunda parte consiste en poder buscarlos
por nombre. Para eso, añadimos un input a la interfaz, de forma que al ir escribiendo un nombre queden
en la interfaz solo los personajes cuyo nombre contiene las letras escritas.

## Componentes del listado de personajes

El listado contiene:

1. Componente para el filtro de nombre.
2. Componente para el filtro de especie.
3. Componente para el listado.
4. Componente para la tarjeta de cada personaje del listado.
5. Componente para el detalle de cada personaje.

## Detalle de personajes

Utilizando las rutas dinámicas, al hacer clic sobre la tarjeta de un personaje, su
información aparecerá a pantalla completa. Para hacer esto usaremos rutas y React Router DOM. En la
pantalla de detalle aparece además de la foto, nombre y especie, el planeta de origen, el número de
episodios en los que aparece y si está vivo o muerto.

## Otros detalles

- Si el usuario busca un personaje que no existe, aparece en la pantalla un mensaje de aviso.
- Cuando el usuario escribe en el input, el filtrado admite tanto minúsculas como mayúsculas.
- Se ha agregado un favicon a la página web.
