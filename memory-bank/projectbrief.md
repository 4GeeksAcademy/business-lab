# Resumen del proyecto — Nexova Solutions

## Qué es Nexova

Nexova Solutions es una consultora de recursos humanos y selección de talento fundada en 2011. Tiene su sede en Valencia y una oficina de expansión en Miami. Cuenta con 120 empleados y genera aproximadamente 8 millones de dólares en ingresos anuales.

Sus principales líneas de negocio son:

- búsqueda de perfiles de mandos medios y directivos;
- externalización de equipos de atención al cliente para empresas tecnológicas;
- formación corporativa en habilidades blandas y liderazgo.

La empresa trabaja con medianas empresas, sobre todo de tecnología, comercio minorista y servicios financieros, que externalizan parte o toda la gestión de talento.

## Servicios principales y problemas del negocio

Nexova tiene tres áreas principales de negocio, cada una con distintos retos operativos:

1. Operaciones de Selección
   - El proceso es principalmente manual.
   - Los CV se revisan sin automatización.
   - La comunicación con los candidatos se gestiona por separado, mediante correo electrónico.
   - No hay información en tiempo real sobre el estado de cada proceso.
   - La comparación entre los perfiles de candidatos y los requisitos de las vacantes depende de la intuición del consultor.

2. Formación Corporativa
   - El catálogo de formación está en un PDF y las inscripciones se gestionan con Google Forms y hojas de cálculo.
   - No hay seguimiento real del progreso ni personalización.
   - El proceso no puede crecer fácilmente y es difícil de medir.

3. Atención al Cliente Externalizada
   - Los agentes disponen de poca información centralizada.
   - No hay una base de conocimiento compartida, información en tiempo real sobre los SLA ni un seguimiento claro del trabajo pendiente.
   - El tiempo medio de resolución supera el nivel de servicio acordado.

Además, Nexova tiene problemas comunes en ventas, marketing, recursos humanos, dirección ejecutiva e infraestructura tecnológica. Hay procesos manuales, datos separados y no existe una visión unificada del negocio.

## Objetivo del proyecto

El objetivo es crear un monorepo que apoye la transformación digital de Nexova con IA, automatización y datos. Así, la empresa podrá mantener su ventaja competitiva y trabajar con más rapidez y a mayor escala, con menos esfuerzo manual.

La idea central es aplicar IA y automatización a procesos reales del negocio: selección, atención al cliente, ventas, formación, recursos humanos e informes ejecutivos.

## Alcance de la tarea actual

La tarea actual consiste en crear el memory bank y documentar la situación inicial del proyecto, sin instalar dependencias ni escribir código de aplicación todavía.

Este trabajo se centra en:

- incorporar el briefing real de la empresa;
- mantener la estructura del monorepo alineada con la plantilla;
- documentar cómo se organiza el trabajo y qué responsabilidad tiene cada carpeta;
- registrar el estado actual del proyecto y las decisiones pendientes.

Esta tarea no entrega la solución completa del producto. Es solo la base para los siguientes hitos.

## Alcance del hito completo

El hito completo incluye estos resultados:

- creación del memory bank;
- archivo `AGENTS.md` en la raíz con al menos cuatro pasos obligatorios antes de un commit;
- al menos una regla explícita con un alcance definido;
- una skill con entradas documentadas y criterios de aceptación verificables;
- sitio web funcional en `uis/website`;
- backoffice funcional en `uis/backoffice`, con diseño propio y contenido relacionado con Nexova.

Estas dos interfaces forman parte del hito completo, aunque todavía están pendientes en esta etapa.

La automatización, los agentes del negocio y las integraciones completas quedan para desarrollos posteriores.

## Desarrollo futuro

Entre otros trabajos futuros, se prevé:

- ampliar las funciones del sitio web y del backoffice iniciales;
- crear un backend centralizado con FastAPI;
- crear flujos de datos y conjuntos de evaluación;
- crear agentes de IA y skills reutilizables;
- crear MCPs y automatizar flujos de trabajo;
- preparar la infraestructura y los despliegues;
- crear dashboards ejecutivos y herramientas operativas para cada área.

Estas partes corresponden a hitos posteriores y quedan fuera del alcance de esta tarea inicial del memory bank.
