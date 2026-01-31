# Desafío de Automatización de Pruebas

Este proyecto contiene una prueba automatizada para el sitio web [SauceDemo](https://www.saucedemo.com/), implementada utilizando **Playwright**, **Cucumber** y **Node.js**.

## Prerrequisitos

- Node.js (v14 o superior)
- npm

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

Este comando ejecuta `cucumber-js`, el cual corre los archivos de características (features) encontrados en el directorio `features` utilizando las definiciones de pasos en `src/steps`.

## Estructura del Proyecto

El proyecto sigue el patrón de diseño **Page Object Model (POM)** para asegurar mantenibilidad y escalabilidad.

-   **features/**: Contiene los archivos de características Gherkin (`.feature`).
-   **src/pages/**: Contiene las clases Page Object (`LoginPage.js`, `ProductsPage.js`) que encapsulan los elementos y acciones específicas de cada página.
-   **src/steps/**: Contiene las definiciones de pasos de Cucumber (`shop_steps.js`) y los hooks (`hooks.js`).
-   **playwright.config.js**: Configuración para Playwright (navegador, tiempos de espera, etc.).
-   **cucumber.js**: Configuración para Cucumber.

## Decisiones Técnicas

1.  **Playwright + Cucumber**: Elegido para combinar la velocidad y confiabilidad de Playwright con la legibilidad y capacidades BDD de Cucumber.
2.  **Page Object Model (POM)**: Implementado para separar la lógica de prueba (pasos) de los detalles de la página (selectores CSS, acciones). Esto hace que el código sea más fácil de mantener; si un selector cambia, solo necesita actualizarse en un lugar.
3.  **Hooks**: Se utilizaron hooks `Before` y `After` para gestionar el ciclo de vida del contexto del navegador, asegurando que cada escenario comience con un estado limpio.
4.  **JavaScript**: Se utilizó JavaScript moderno (ES6+) por compatibilidad y facilidad de desarrollo.

## Mejoras Futuras

-   Agregar herramientas de reporte (ej. Allure Report) para una mejor visibilidad.
-   Implementar soporte para ejecución en paralelo en la configuración de Cucumber.
-   Agregar más escenarios para cubrir casos borde (ej. eliminar ítems, login inválido).
-   Externalizar la configuración (URLs, credenciales) a variables de entorno.
