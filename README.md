# Challenge Automatización de Pruebas | Luis Alfredo Rojas

El siguiente proyecto contiene una prueba que es parte de un reto para una entrevista de trabajo. Usamos [SauceDemo](https://www.saucedemo.com/), implementamos **Playwright**, **Cucumber** y **Node.js**.

## Prerrequisitos

- Node.js (v14 o superior)
- npm
- Vs code

## Instalación

1.  Clonar el repositorio.
2.  Instalar dependencias:
    ```bash
    npm install
    ```
3.  Instalar navegadores de Playwright:
    ```bash
    npx playwright install
    ```

## Ejecución

Para ejecutar las pruebas, utilice el siguiente comando:

```bash
npm test
```
Si deseas ejecutar la prueba abriendo el navegador usa 

```bash
npm run test:headed
```

Este comando ejecuta `cucumber-js`, el cual corre los archivos de características (features) encontrados en el directorio `features` utilizando las definiciones de pasos en `src/steps`.

Gracias a la configuracion que agregue en cucumber.js se pueden generar reportes.
Para ver el resultado ddetallado en formato de reporte, usa este comando. `open cucumber-report.html` para mac. `start cucumber-report.html para windows`.

<img width="1082" height="792" alt="image" src="https://github.com/user-attachments/assets/29930213-8761-4f22-bc40-91e40ccd2dbf" />


## Estructura del Proyecto

El proyecto sigue el patrón de diseño **Page Object Model (POM)** para asegurar mantenibilidad y escalabilidad.

-   **features/**: Contiene los archivos de características Gherkin (`.feature`).
-   **src/pages/**: Contiene las clases Page Object (`LoginPage.js`, `ProductsPage.js`) que encapsulan los elementos y acciones específicas de cada página.
-   **src/steps/**: Contiene las definiciones de pasos de Cucumber (`shop_steps.js`) y los hooks (`hooks.js`).
-   **playwright.config.js**: Configuración para Playwright (navegador, tiempos de espera, etc.).
-   **cucumber.js**: Configuración para Cucumber.

## Decisiones Técnicas

1.  **Playwright + Cucumber**: Para combinar la velocidad y confiabilidad de Playwright con la legibilidad y capacidades BDD de Cucumber.
2.  **Page Object Model (POM)**: Para separar la lógica de prueba (pasos) de los detalles de la página (selectores CSS, acciones). Esto hace que el código sea más fácil de mantener; si un selector cambia, solo necesita actualizarse en un lugar.
3.  **Hooks**: Utilizamos hooks `Before` y `After` para gestionar el ciclo de vida del contexto del navegador, asegurando que cada escenario comience con un estado limpio.
4.  **JavaScript**: Utilizamos JavaScript moderno (ES6+) por compatibilidad y facilidad de desarrollo.
5.  **Validacion de login**: Verificamos que hayamos hecho login validando que los productos existan con await expect(this.title).toHaveText('Products');
6.  Agregamos al carrito un item y verificamos que fue agregado con un count de la cantidad de productos
7.  Utilizamos pattern matching entre el archivo .feature y archivos de codigo .js para tener un orden completo dentro de nuestros steps
8.  Facilitamos la ejecucion headed o headless para no tener que depende de la configuracion global.


## Mejoras Futuras

-   Agregar herramientas de reporte (ej. Allure Report) para una mejor visibilidad.
-   Implementar Bugster https://www.bugster.dev/ como herramienta de IA para generar pruebas que se pueden escapar de nuestro scope.
-   Configurar proyectos para ejecutar pc o mobile.
-   Implementar soporte para ejecución en paralelo en la configuración de Cucumber.
-   Agregar más escenarios para cubrir casos borde (ej. eliminar ítems, login inválido).
-   Externalizar la configuración (URLs, credenciales) a variables de entorno.
-   Bajo el patron de diseño del codigo podemos implementar otras pruebas como verificar que mensajes de error aparezcan correctamente, verificar que los filtros funcionen o verificar que se despliegue el GNAV correctamente
-   Implementar un test para verificar links con 404 usando el context api nativo de playwirght.
-   Agregar CI/CD. Github Actions(GHA) puede servir para empezar.
-   De escalar a un proyecto mas grande podemos usar scenario object model(SOM)
-   Revisar https://youtu.be/gOYjPQ3IaT4?si=L56uvvar9XYGRIBY para otra forma de implementacion del diseño POM. Tutorial hecho por mi.
