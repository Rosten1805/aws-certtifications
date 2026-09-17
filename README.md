# CloudPrep

**CloudPrep** es una plataforma de práctica personal para preparar certificaciones de AWS. Permite estudiar por dominios del examen, hacer simulacros cronometrados en condiciones similares al examen real, y seguir la evolución del progreso a lo largo del tiempo — todo desde el navegador, sin necesidad de cuenta ni servidor: los datos se guardan localmente en el propio dispositivo.

## Para qué sirve

En lugar de memorizar preguntas sueltas, CloudPrep está pensada para preparar el examen de verdad:

- **Banco de preguntas** — Practica pregunta a pregunta, con filtros por dominio del examen, servicio de AWS, dificultad y estado (respondidas, correctas, incorrectas, marcadas, guardadas). Cada pregunta incluye una explicación completa de por qué cada opción es correcta o incorrecta y, en muchas preguntas, un diagrama de arquitectura y enlaces a la documentación oficial de AWS.
- **Simulacro de examen** — Exámenes cronometrados que reparten las preguntas entre los dominios oficiales según sus pesos reales, igual que en el examen de certificación. Incluye varios simulacros numerados (que rotan por el banco para repetir el mínimo posible de preguntas entre sí) y un modo aleatorio.
- **Repaso inteligente** — Sesiones rápidas que priorizan automáticamente las preguntas falladas, las que no se han respondido todavía y los puntos más débiles.
- **Mi progreso** — Estadísticas generales y por dominio/servicio AWS, historial de simulacros realizados (con opción de borrar resultados individuales o todo el historial), y detección de los temas que más conviene repasar.
- **Español / inglés** — Todo el contenido (preguntas, respuestas y explicaciones) está disponible en ambos idiomas, con un selector para cambiar sobre la marcha sin perder las respuestas ya marcadas.

## Certificaciones disponibles

| Certificación | Preguntas en el banco |
| --- | --- |
| AWS Certified AI Practitioner (AIF-C01) | 391 |
| AWS Certified Solutions Architect – Associate (SAA-C03) | 195 (ampliación en curso hasta 390) |

Ninguna pregunta reproduce el examen oficial de AWS ni proviene de un dump de examen real.

## Privacidad

CloudPrep no tiene backend ni sistema de cuentas: todo el progreso (respuestas, favoritos, resultados de simulacros) se guarda en el `localStorage` del navegador. Nada se envía a ningún servidor.

## Stack técnico

- [React 19](https://react.dev/) + [TypeScript](https://www.typescriptlang.org/)
- [Vite](https://vite.dev/) como bundler y entorno de desarrollo
- [Tailwind CSS v4](https://tailwindcss.com/) para los estilos
- [React Router](https://reactrouter.com/) para la navegación
- [lucide-react](https://lucide.dev/) para los iconos

## Desarrollo local

```bash
npm install
npm run dev       # entorno de desarrollo
npm run build     # build de producción (carpeta dist/)
npm run preview   # sirve el build de producción en local
npm run lint       # linting con oxlint
```

## Estructura del proyecto

```
src/
  components/   Componentes de UI (banco de preguntas, examen, estadísticas, comunes...)
  pages/        Páginas/rutas de la aplicación
  data/         Metadatos y bancos de preguntas por certificación
  services/     Lógica de negocio (exámenes, progreso, estadísticas, almacenamiento)
  stores/       Contexto de React (certificación activa, idioma, notificaciones)
  types/        Tipos de TypeScript compartidos
  utils/        Utilidades (traducción, puntuación, formato...)
```

---

Banco de preguntas elaborado por [Cristina Cañadas](https://cristinagomez-limon.com/).
