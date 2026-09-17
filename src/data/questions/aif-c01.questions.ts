import type { Question } from '@/types/question'

/**
 * Banco de preguntas de práctica para AWS Certified AI Practitioner (AIF-C01).
 *
 * Incluye:
 * - Preguntas 1-20: preguntas originales redactadas para esta aplicación.
 * - Preguntas 21-391: banco de preguntas de estudio de fuente gratuita (398 preguntas
 *   originales del banco, de las cuales 371 son de opción única/selección múltiple;
 *   se excluyeron las de tipo "relacionar" y "ordenar" por no encajar con el formato
 *   de opción múltiple de esta app). Distribuidas por dominio oficial del examen.
 *
 * Ninguna pregunta reproduce el examen oficial de AWS ni proviene de un dump de examen real.
 */
export const AIF_C01_QUESTIONS: Question[] = [
  {
    id: 1,
    certification: 'AIF-C01',
    domain: 'ai-ml-fundamentals',
    topic: 'Tipos de aprendizaje automático',
    services: [],
    difficulty: 'easy',
    type: 'single',
    question:
      '¿Cuál de las siguientes opciones describe mejor el aprendizaje supervisado?',
    answers: [
      { id: 'A', text: 'Entrena un modelo con datos etiquetados para predecir una salida conocida.' },
      { id: 'B', text: 'Descubre patrones ocultos en datos que no tienen etiquetas.' },
      { id: 'C', text: 'Aprende mediante prueba y error a partir de recompensas y penalizaciones.' },
      { id: 'D', text: 'Genera contenido nuevo a partir de una instrucción (prompt).' },
    ],
    correctAnswers: ['A'],
    explanation:
      'El aprendizaje supervisado utiliza datos de entrenamiento etiquetados (pares entrada-salida) para que el modelo aprenda a predecir la salida correcta ante nuevas entradas.',
    keyConcept:
      'Supervisado = datos etiquetados. No supervisado = sin etiquetas. Por refuerzo = recompensas. Generativo = crea contenido nuevo.',
  },
  {
    id: 2,
    certification: 'AIF-C01',
    domain: 'ai-ml-fundamentals',
    topic: 'Tipos de aprendizaje automático',
    services: ['SageMaker'],
    difficulty: 'medium',
    type: 'single',
    question:
      'Una empresa quiere agrupar a sus clientes en segmentos según su comportamiento de compra, sin conocer de antemano las categorías. ¿Qué enfoque de machine learning es el más adecuado?',
    answers: [
      {
        id: 'A',
        text: 'Aprendizaje supervisado de clasificación',
        explanation: 'Requiere categorías (etiquetas) conocidas de antemano, algo que aquí no se tiene.',
      },
      { id: 'B', text: 'Aprendizaje no supervisado de clustering (agrupamiento)' },
      {
        id: 'C',
        text: 'Aprendizaje por refuerzo',
        explanation: 'Se basa en agentes que aprenden mediante recompensas, no en agrupar datos existentes.',
      },
      {
        id: 'D',
        text: 'Aprendizaje supervisado de regresión',
        explanation: 'La regresión predice un valor numérico continuo, no agrupa registros similares.',
      },
    ],
    correctAnswers: ['B'],
    explanation:
      'El clustering agrupa registros similares entre sí sin necesidad de etiquetas previas, por lo que es la técnica estándar para segmentar clientes cuando no se conocen las categorías de antemano.',
    keyConcept: 'El clustering (p. ej. k-means) es la técnica no supervisada de referencia para segmentación.',
  },
  {
    id: 3,
    certification: 'AIF-C01',
    domain: 'ai-ml-fundamentals',
    topic: 'Amazon SageMaker',
    services: ['SageMaker'],
    difficulty: 'medium',
    type: 'single',
    question:
      '¿Qué componente de Amazon SageMaker permite etiquetar grandes conjuntos de datos combinando trabajadores humanos y etiquetado automático?',
    answers: [
      {
        id: 'A',
        text: 'SageMaker Clarify',
        explanation: 'Se usa para detectar sesgo y explicar predicciones, no para etiquetar datos.',
      },
      { id: 'B', text: 'SageMaker Ground Truth' },
      {
        id: 'C',
        text: 'SageMaker Model Monitor',
        explanation: 'Supervisa la calidad y la deriva (drift) de modelos ya desplegados en producción.',
      },
      {
        id: 'D',
        text: 'SageMaker Feature Store',
        explanation: 'Es un repositorio centralizado para almacenar y compartir features de ML.',
      },
    ],
    correctAnswers: ['B'],
    explanation:
      'Ground Truth ofrece flujos de trabajo de etiquetado de datos que combinan trabajadores humanos con etiquetado automático asistido por ML para crear datasets de entrenamiento de alta calidad a menor coste.',
    keyConcept: 'Ground Truth = etiquetado de datos; Clarify = sesgo/explicabilidad; Model Monitor = monitorización en producción.',
    documentation: [
      { title: 'Amazon SageMaker Ground Truth', url: 'https://aws.amazon.com/sagemaker/groundtruth/' },
    ],
  },
  {
    id: 4,
    certification: 'AIF-C01',
    domain: 'ai-ml-fundamentals',
    topic: 'Métricas de evaluación',
    services: ['SageMaker'],
    difficulty: 'hard',
    type: 'multiple',
    question: 'Selecciona DOS métricas habituales para evaluar un modelo de clasificación binaria.',
    answers: [
      { id: 'A', text: 'Precisión (Precision)' },
      {
        id: 'B',
        text: 'Error cuadrático medio (RMSE)',
        explanation: 'Es una métrica típica de problemas de regresión, no de clasificación.',
      },
      { id: 'C', text: 'Sensibilidad / Exhaustividad (Recall)' },
      {
        id: 'D',
        text: 'Coeficiente de determinación (R²)',
        explanation: 'Mide el ajuste de un modelo de regresión, no la calidad de una clasificación.',
      },
    ],
    correctAnswers: ['A', 'C'],
    explanation:
      'Precision y Recall (junto con F1-score y AUC) son las métricas estándar para evaluar modelos de clasificación. RMSE y R² se utilizan para evaluar modelos de regresión, donde la salida es un valor numérico continuo.',
    keyConcept: 'Clasificación → precision/recall/F1/AUC. Regresión → RMSE/MAE/R².',
  },
  {
    id: 5,
    certification: 'AIF-C01',
    domain: 'generative-ai-fundamentals',
    topic: 'Modelos fundacionales',
    services: ['Bedrock'],
    difficulty: 'easy',
    type: 'single',
    question: '¿Qué es un modelo fundacional (foundation model)?',
    answers: [
      {
        id: 'A',
        text: 'Un modelo entrenado desde cero exclusivamente para una única tarea muy específica.',
      },
      {
        id: 'B',
        text: 'Un modelo de gran escala, preentrenado con grandes volúmenes de datos, que puede adaptarse a múltiples tareas.',
      },
      {
        id: 'C',
        text: 'Una base de datos vectorial utilizada para búsquedas semánticas.',
      },
      { id: 'D', text: 'Un conjunto de reglas de negocio codificadas manualmente por un experto.' },
    ],
    correctAnswers: ['B'],
    explanation:
      'Un modelo fundacional es un modelo de gran escala preentrenado con enormes volúmenes de datos, que sirve como base reutilizable adaptable a múltiples tareas posteriores mediante prompting o ajuste fino, en lugar de entrenarse desde cero para cada caso de uso.',
    keyConcept: 'Los foundation models son una base reutilizable para múltiples casos de uso, a diferencia de los modelos entrenados para una única tarea.',
  },
  {
    id: 6,
    certification: 'AIF-C01',
    domain: 'generative-ai-fundamentals',
    topic: 'Amazon Bedrock',
    services: ['Bedrock'],
    difficulty: 'medium',
    type: 'single',
    question:
      'Una empresa quiere acceder a modelos fundacionales de distintos proveedores mediante una única API, sin aprovisionar ni gestionar servidores. ¿Qué característica de Amazon Bedrock cubre esta necesidad?',
    answers: [
      { id: 'A', text: 'Es un servicio totalmente gestionado y sin servidor que expone modelos de múltiples proveedores mediante una API unificada.' },
      {
        id: 'B',
        text: 'Requiere desplegar instancias EC2 con GPU dedicadas para cada modelo que se quiera usar.',
        explanation: 'Bedrock es serverless: no es necesario aprovisionar ni gestionar instancias EC2.',
      },
      {
        id: 'C',
        text: 'Solo permite usar modelos desarrollados por Amazon.',
        explanation: 'Bedrock incluye también modelos de terceros como Anthropic, Meta o Mistral AI, además de los modelos Titan de Amazon.',
      },
      {
        id: 'D',
        text: 'Obliga a reentrenar cada modelo antes de poder utilizarlo.',
        explanation: 'Los modelos pueden usarse directamente mediante inferencia; el ajuste fino es opcional, no obligatorio.',
      },
    ],
    correctAnswers: ['A'],
    explanation:
      'Amazon Bedrock es un servicio completamente gestionado y sin servidor que ofrece acceso mediante una API unificada a modelos fundacionales de múltiples proveedores, sin necesidad de gestionar infraestructura.',
    keyConcept: 'Bedrock = acceso serverless y unificado a foundation models de múltiples proveedores.',
  },
  {
    id: 7,
    certification: 'AIF-C01',
    domain: 'generative-ai-fundamentals',
    topic: 'RAG (Retrieval Augmented Generation)',
    services: ['Bedrock', 'Kendra'],
    difficulty: 'medium',
    type: 'single',
    question:
      '¿Qué técnica permite reducir las "alucinaciones" de un modelo de lenguaje incorporando información recuperada de una base de conocimiento externa en el momento de la consulta?',
    answers: [
      {
        id: 'A',
        text: 'Ajuste fino completo (fine-tuning) del modelo',
        explanation: 'Modifica los pesos del modelo y resulta costoso; no garantiza que la respuesta esté basada en datos actualizados.',
      },
      { id: 'B', text: 'Retrieval Augmented Generation (RAG)' },
      {
        id: 'C',
        text: 'Reducir el parámetro de temperatura a 0',
        explanation: 'Reduce la aleatoriedad de la generación, pero no aporta información factual externa.',
      },
      {
        id: 'D',
        text: 'Cuantización del modelo',
        explanation: 'Reduce el tamaño y coste del modelo, pero no está relacionada con la veracidad de las respuestas.',
      },
    ],
    correctAnswers: ['B'],
    explanation:
      'RAG recupera documentos relevantes de una base de conocimiento externa (habitualmente mediante una base de datos vectorial) y los incorpora al prompt, ayudando a que el modelo genere respuestas fundamentadas en información actualizada sin necesidad de reentrenarlo.',
    keyConcept: 'RAG combina recuperación de información (búsqueda semántica) con generación de texto para mejorar la precisión factual.',
    documentation: [
      { title: '¿Qué es Retrieval Augmented Generation?', url: 'https://aws.amazon.com/what-is/retrieval-augmented-generation/' },
    ],
  },
  {
    id: 8,
    certification: 'AIF-C01',
    domain: 'generative-ai-fundamentals',
    topic: 'Embeddings y búsqueda semántica',
    services: ['Bedrock', 'SageMaker'],
    difficulty: 'hard',
    type: 'single',
    question: '¿Qué representa un "embedding" en el contexto de los modelos de lenguaje?',
    answers: [
      { id: 'A', text: 'Una representación numérica vectorial que captura el significado semántico de un texto.' },
      {
        id: 'B',
        text: 'El número total de parámetros entrenables del modelo.',
        explanation: 'Eso describe el tamaño del modelo, no un embedding.',
      },
      {
        id: 'C',
        text: 'El proceso de dividir un texto largo en fragmentos más pequeños antes de procesarlo.',
        explanation: 'Eso describe el "chunking", un paso de preprocesamiento distinto de la generación de embeddings.',
      },
      {
        id: 'D',
        text: 'El parámetro de temperatura utilizado durante la generación de texto.',
        explanation: 'La temperatura controla la aleatoriedad de la generación, no la representación semántica del texto.',
      },
    ],
    correctAnswers: ['A'],
    explanation:
      'Un embedding convierte texto en un vector numérico denso dentro de un espacio semántico, de forma que textos con significados similares quedan representados por vectores cercanos. Se utilizan para búsqueda semántica, RAG y clustering de texto.',
    keyConcept: 'Los embeddings permiten comparar similitud semántica mediante distancia vectorial, base de la búsqueda semántica.',
  },
  {
    id: 9,
    certification: 'AIF-C01',
    domain: 'generative-ai-fundamentals',
    topic: 'Coste de inferencia',
    services: ['Bedrock'],
    difficulty: 'hard',
    type: 'multiple',
    question:
      'Selecciona DOS factores que afectan directamente al coste de invocar un modelo fundacional en Amazon Bedrock mediante inferencia bajo demanda (on-demand).',
    answers: [
      { id: 'A', text: 'El número de tokens de entrada y salida procesados' },
      { id: 'B', text: 'El modelo fundacional elegido' },
      {
        id: 'C',
        text: 'El número de usuarios con acceso a la consola de AWS',
        explanation: 'El número de usuarios de la consola no influye en el coste de las invocaciones a Bedrock.',
      },
      {
        id: 'D',
        text: 'La región de una VPC no relacionada con la aplicación',
        explanation: 'Una VPC sin relación con la llamada al modelo no tiene impacto en el coste de la inferencia.',
      },
    ],
    correctAnswers: ['A', 'B'],
    explanation:
      'El coste de la inferencia bajo demanda en Bedrock se calcula principalmente en función del número de tokens de entrada y salida procesados y del modelo fundacional utilizado, ya que cada modelo tiene su propio precio por token.',
    keyConcept: 'El coste de inferencia on-demand en Bedrock depende sobre todo de los tokens procesados y del modelo elegido.',
  },
  {
    id: 10,
    certification: 'AIF-C01',
    domain: 'foundation-model-applications',
    topic: 'Amazon Transcribe y Amazon Polly',
    services: ['Transcribe', 'Polly'],
    difficulty: 'easy',
    type: 'single',
    question:
      'Una empresa quiere transcribir automáticamente a texto las llamadas de su centro de atención al cliente. ¿Qué servicio de AWS es el más adecuado?',
    answers: [
      { id: 'A', text: 'Amazon Transcribe' },
      {
        id: 'B',
        text: 'Amazon Polly',
        explanation: 'Polly hace lo contrario: convierte texto en voz (text-to-speech).',
      },
      {
        id: 'C',
        text: 'Amazon Textract',
        explanation: 'Textract extrae texto de documentos e imágenes, no de audio.',
      },
      {
        id: 'D',
        text: 'Amazon Rekognition',
        explanation: 'Rekognition analiza imágenes y vídeo, no audio.',
      },
    ],
    correctAnswers: ['A'],
    explanation:
      'Amazon Transcribe es un servicio de reconocimiento automático de voz (ASR) que convierte audio en texto, ideal para transcribir llamadas de un centro de atención al cliente.',
    keyConcept: 'Transcribe = voz → texto. Polly = texto → voz.',
  },
  {
    id: 11,
    certification: 'AIF-C01',
    domain: 'foundation-model-applications',
    topic: 'Amazon Textract',
    services: ['Textract'],
    difficulty: 'easy',
    type: 'single',
    question:
      '¿Qué servicio de AWS permite extraer texto, campos de formularios y tablas de documentos escaneados o imágenes?',
    answers: [
      {
        id: 'A',
        text: 'Amazon Comprehend',
        explanation: 'Comprehend analiza texto ya existente (NLP), pero no extrae texto de imágenes o documentos escaneados.',
      },
      { id: 'B', text: 'Amazon Textract' },
      {
        id: 'C',
        text: 'Amazon Kendra',
        explanation: 'Kendra es un buscador inteligente para contenido empresarial, no un servicio de extracción de documentos.',
      },
      {
        id: 'D',
        text: 'Amazon Lex',
        explanation: 'Lex se utiliza para construir interfaces conversacionales (chatbots), no para extraer datos de documentos.',
      },
    ],
    correctAnswers: ['B'],
    explanation:
      'Amazon Textract usa OCR combinado con machine learning para extraer texto, campos de formularios y tablas de documentos escaneados o imágenes de forma automática.',
    keyConcept: 'Textract = extracción de datos de documentos. Comprehend = análisis de texto (NLP) ya existente.',
  },
  {
    id: 12,
    certification: 'AIF-C01',
    domain: 'foundation-model-applications',
    topic: 'Amazon Comprehend',
    services: ['Comprehend'],
    difficulty: 'medium',
    type: 'single',
    question:
      'Una aplicación necesita detectar automáticamente el sentimiento (positivo, negativo o neutro) de las reseñas de producto escritas por los clientes. ¿Qué servicio gestionado de AWS resuelve esto sin necesidad de entrenar un modelo propio?',
    answers: [
      { id: 'A', text: 'Amazon Comprehend' },
      {
        id: 'B',
        text: 'Amazon Forecast',
        explanation: 'Forecast se utiliza para predicción de series temporales, no para análisis de sentimiento.',
      },
      {
        id: 'C',
        text: 'Amazon Personalize',
        explanation: 'Personalize se utiliza para generar recomendaciones personalizadas, no para analizar sentimiento.',
      },
      {
        id: 'D',
        text: 'Amazon Lex',
        explanation: 'Lex se utiliza para construir chatbots conversacionales, no para análisis de sentimiento de texto.',
      },
    ],
    correctAnswers: ['A'],
    explanation:
      'Amazon Comprehend es un servicio de procesamiento de lenguaje natural (NLP) totalmente gestionado que ofrece análisis de sentimiento, reconocimiento de entidades y extracción de frases clave listo para usar, sin necesidad de entrenar un modelo propio.',
    keyConcept: 'Comprehend ofrece NLP listo para usar (sentimiento, entidades, frases clave) sin necesidad de entrenamiento previo.',
  },
  {
    id: 13,
    certification: 'AIF-C01',
    domain: 'foundation-model-applications',
    topic: 'Chatbots y agentes conversacionales',
    services: ['Lex', 'Bedrock'],
    difficulty: 'medium',
    type: 'multiple',
    question:
      'Una empresa quiere construir un chatbot de atención al cliente que entienda lenguaje natural y pueda ejecutar acciones en sistemas backend mediante llamadas a funciones. Selecciona DOS servicios de AWS relevantes para este caso de uso.',
    answers: [
      { id: 'A', text: 'Amazon Lex' },
      {
        id: 'B',
        text: 'Amazon Rekognition',
        explanation: 'Rekognition se utiliza para análisis de imagen y vídeo, no para construir chatbots.',
      },
      { id: 'C', text: 'Amazon Bedrock (Agents)' },
      {
        id: 'D',
        text: 'Amazon FSx',
        explanation: 'FSx es un servicio de almacenamiento de archivos gestionado, no relacionado con IA conversacional.',
      },
    ],
    correctAnswers: ['A', 'C'],
    explanation:
      'Amazon Lex permite construir interfaces conversacionales (voz y texto) basadas en intents y slots. Los agentes de Amazon Bedrock permiten que un modelo fundacional orqueste tareas de varios pasos y realice llamadas a funciones o APIs backend, combinando comprensión de lenguaje natural con ejecución de acciones.',
    keyConcept: 'Lex = chatbots basados en intents/slots. Bedrock Agents = orquestación de LLM con llamadas a funciones/APIs.',
  },
  {
    id: 14,
    certification: 'AIF-C01',
    domain: 'foundation-model-applications',
    topic: 'Amazon Personalize',
    services: ['Personalize'],
    difficulty: 'hard',
    type: 'single',
    question:
      'Una empresa de comercio electrónico quiere ofrecer recomendaciones de producto personalizadas en tiempo real, sin construir su propio motor de recomendación desde cero. ¿Qué servicio de AWS es el más adecuado?',
    answers: [
      { id: 'A', text: 'Amazon Personalize' },
      {
        id: 'B',
        text: 'Amazon Forecast',
        explanation: 'Forecast se centra en la predicción de demanda mediante series temporales, no en recomendaciones por usuario.',
      },
      {
        id: 'C',
        text: 'Amazon Kendra',
        explanation: 'Kendra es un servicio de búsqueda empresarial inteligente, no un motor de recomendaciones.',
      },
      {
        id: 'D',
        text: 'Amazon Translate',
        explanation: 'Translate ofrece traducción automática de idiomas, sin relación con recomendaciones de producto.',
      },
    ],
    correctAnswers: ['A'],
    explanation:
      'Amazon Personalize es un servicio de machine learning totalmente gestionado, diseñado específicamente para generar recomendaciones personalizadas en tiempo real a partir del comportamiento de los usuarios.',
    keyConcept: 'Personalize = recomendaciones personalizadas en tiempo real como servicio gestionado.',
  },
  {
    id: 15,
    certification: 'AIF-C01',
    domain: 'foundation-model-applications',
    topic: 'Optimización de modelos',
    services: ['SageMaker', 'Bedrock'],
    difficulty: 'hard',
    type: 'single',
    question:
      'Un equipo tiene un modelo de lenguaje en producción y necesita reducir la latencia y el coste de inferencia para un volumen alto de peticiones, sin sacrificar significativamente la precisión. ¿Qué técnica es la más adecuada?',
    answers: [
      {
        id: 'A',
        text: 'Aumentar el tamaño del modelo añadiendo más parámetros',
        explanation: 'Aumentaría el coste y la latencia, justo lo contrario del objetivo buscado.',
      },
      { id: 'B', text: 'Cuantización del modelo (reducir la precisión numérica de sus pesos)' },
      {
        id: 'C',
        text: 'Aumentar la longitud máxima de contexto del prompt',
        explanation: 'Incrementa el coste y la latencia por token procesado, sin optimizar la inferencia.',
      },
      {
        id: 'D',
        text: 'Desactivar el streaming de la respuesta',
        explanation: 'Afecta a la percepción de latencia de entrega, pero no reduce el coste computacional subyacente.',
      },
    ],
    correctAnswers: ['B'],
    explanation:
      'La cuantización reduce la precisión numérica de los pesos del modelo (por ejemplo, de FP32 a INT8), disminuyendo el uso de memoria y el coste/latencia de inferencia, con una pérdida de precisión generalmente asumible para muchos casos de uso.',
    keyConcept: 'Técnicas como la cuantización o la destilación reducen coste y latencia de inferencia manteniendo un rendimiento aceptable.',
  },
  {
    id: 16,
    certification: 'AIF-C01',
    domain: 'responsible-ai',
    topic: 'Sesgo en machine learning',
    services: ['SageMaker'],
    difficulty: 'easy',
    type: 'single',
    question: '¿Qué se entiende por "sesgo" (bias) en un modelo de machine learning?',
    answers: [
      {
        id: 'A',
        text: 'Un error de sintaxis en el código utilizado para entrenar el modelo.',
        explanation: 'Un error de sintaxis es un fallo de programación, no un concepto de sesgo en ML.',
      },
      {
        id: 'B',
        text: 'Una tendencia sistemática del modelo a favorecer o perjudicar a determinados grupos o resultados, originada en los datos o en el diseño del modelo.',
      },
      {
        id: 'C',
        text: 'La latencia adicional al desplegar un modelo en producción.',
        explanation: 'Eso es una cuestión de rendimiento operativo, no de sesgo.',
      },
      {
        id: 'D',
        text: 'El coste computacional de entrenar un modelo de gran tamaño.',
        explanation: 'Es una cuestión de coste, no de imparcialidad del modelo.',
      },
    ],
    correctAnswers: ['B'],
    explanation:
      'El sesgo en machine learning es una desviación sistemática que hace que el modelo favorezca o perjudique a ciertos grupos o resultados, habitualmente originada por datos de entrenamiento no representativos o por decisiones de diseño del modelo.',
    keyConcept: 'El sesgo puede introducirse en los datos, en el etiquetado o en el propio algoritmo, y debe evaluarse y mitigarse de forma activa.',
  },
  {
    id: 17,
    certification: 'AIF-C01',
    domain: 'responsible-ai',
    topic: 'SageMaker Clarify',
    services: ['SageMaker'],
    difficulty: 'medium',
    type: 'single',
    question:
      '¿Qué herramienta de AWS ayuda a detectar sesgos en los datos de entrenamiento y en las predicciones de un modelo, además de explicar qué características influyen más en sus decisiones?',
    answers: [
      { id: 'A', text: 'Amazon SageMaker Clarify' },
      {
        id: 'B',
        text: 'Amazon SageMaker Ground Truth',
        explanation: 'Ground Truth se centra en el etiquetado de datos, no en la detección de sesgo o la explicabilidad.',
      },
      {
        id: 'C',
        text: 'Amazon SageMaker Pipelines',
        explanation: 'Pipelines orquesta flujos de trabajo de ML (CI/CD para ML), no analiza sesgo ni explicabilidad.',
      },
      {
        id: 'D',
        text: 'AWS Glue DataBrew',
        explanation: 'DataBrew se utiliza para limpieza y preparación visual de datos, no evalúa el sesgo de modelos de ML.',
      },
    ],
    correctAnswers: ['A'],
    explanation:
      'Amazon SageMaker Clarify detecta posibles sesgos en los conjuntos de datos y en las predicciones de los modelos, y genera informes de explicabilidad que muestran qué características (features) influyen más en las decisiones del modelo.',
    keyConcept: 'SageMaker Clarify = detección de sesgo + explicabilidad (importancia de características).',
    documentation: [
      { title: 'Amazon SageMaker Clarify', url: 'https://aws.amazon.com/sagemaker/clarify/' },
    ],
  },
  {
    id: 18,
    certification: 'AIF-C01',
    domain: 'responsible-ai',
    topic: 'Explicabilidad',
    services: [],
    difficulty: 'medium',
    type: 'single',
    question:
      'Dentro de los principios de IA responsable, ¿qué concepto se refiere a la capacidad de comprender y explicar por qué un modelo llegó a una determinada predicción?',
    answers: [
      {
        id: 'A',
        text: 'Robustez',
        explanation: 'La robustez se refiere a la estabilidad del modelo ante datos ruidosos o adversarios, no a explicar sus decisiones.',
      },
      { id: 'B', text: 'Explicabilidad (interpretabilidad)' },
      {
        id: 'C',
        text: 'Escalabilidad',
        explanation: 'La escalabilidad se refiere a la capacidad de crecer con la carga de trabajo, no a explicar decisiones.',
      },
      {
        id: 'D',
        text: 'Disponibilidad',
        explanation: 'La disponibilidad se refiere a que el sistema esté operativo cuando se necesita, no a explicar sus predicciones.',
      },
    ],
    correctAnswers: ['B'],
    explanation:
      'La explicabilidad (o interpretabilidad) es la capacidad de comprender y comunicar por qué un modelo produjo una determinada predicción, lo cual es clave para generar confianza, auditar decisiones y cumplir requisitos regulatorios.',
    keyConcept: 'La explicabilidad es uno de los pilares de la IA responsable, junto con la equidad, la robustez, la privacidad y la gobernanza.',
  },
  {
    id: 19,
    certification: 'AIF-C01',
    domain: 'security-compliance-governance',
    topic: 'Auditoría y monitorización',
    services: ['CloudTrail', 'CloudWatch', 'Bedrock'],
    difficulty: 'medium',
    type: 'multiple',
    question:
      'Una empresa despliega un modelo fundacional a través de Amazon Bedrock y necesita cumplir requisitos de auditoría, registrando quién invocó el modelo y cuándo. Selecciona DOS servicios de AWS que ayudan a cumplir este requisito.',
    answers: [
      { id: 'A', text: 'AWS CloudTrail' },
      { id: 'B', text: 'Amazon CloudWatch' },
      {
        id: 'C',
        text: 'AWS Direct Connect',
        explanation: 'Direct Connect proporciona conectividad de red dedicada, sin relación con la auditoría de llamadas a la API.',
      },
      {
        id: 'D',
        text: 'Amazon Route 53',
        explanation: 'Route 53 es un servicio de DNS, sin relación con el registro de auditoría de invocaciones.',
      },
    ],
    correctAnswers: ['A', 'B'],
    explanation:
      'AWS CloudTrail registra las llamadas a la API (quién invocó el modelo y cuándo), mientras que Amazon CloudWatch permite recopilar métricas y logs operativos y configurar alarmas sobre el uso del servicio. Ambos son complementarios para cumplir requisitos de auditoría y monitorización.',
    keyConcept: 'CloudTrail = auditoría de llamadas a la API. CloudWatch = métricas, logs y alarmas operacionales.',
  },
  {
    id: 20,
    certification: 'AIF-C01',
    domain: 'security-compliance-governance',
    topic: 'Cifrado y gestión de claves',
    services: ['KMS', 'S3', 'Macie'],
    difficulty: 'medium',
    type: 'single',
    question:
      'Una organización almacena datos de entrenamiento y artefactos de modelos en Amazon S3 y necesita garantizar el cifrado en reposo con control total sobre las claves de cifrado utilizadas. ¿Qué servicio deben utilizar?',
    answers: [
      { id: 'A', text: 'AWS KMS con claves gestionadas por el cliente (CMK)' },
      {
        id: 'B',
        text: 'Amazon Macie',
        explanation: 'Macie descubre y clasifica datos sensibles (como información personal), pero no realiza el cifrado de los datos.',
      },
      {
        id: 'C',
        text: 'AWS IAM Identity Center',
        explanation: 'IAM Identity Center gestiona el acceso de usuarios (SSO), sin relación directa con el cifrado de datos en reposo.',
      },
      {
        id: 'D',
        text: 'AWS Config',
        explanation: 'AWS Config evalúa la configuración y el cumplimiento de los recursos, pero no cifra los datos.',
      },
    ],
    correctAnswers: ['A'],
    explanation:
      'AWS KMS con claves gestionadas por el cliente (CMK) permite cifrar los datos en reposo en S3 (SSE-KMS) con control total sobre la creación, rotación y las políticas de acceso a la clave, algo que no ofrecen las claves gestionadas por AWS por defecto.',
    keyConcept: 'SSE-KMS con CMK ofrece cifrado en reposo con control granular de claves; Macie se usa para descubrir datos sensibles, no para cifrarlos.',
  },
  {
    id: 21,
    certification: 'AIF-C01',
    domain: 'ai-ml-fundamentals',
    topic: 'Fundamentos de IA y ML',
    services: [],
    difficulty: 'easy',
    type: 'single',
    question:
      'Una fintech necesita poner en producción un detector de fraude en semanas y no dispone de un dataset etiquetado propio para entrenar desde cero. ¿Cuál es la principal ventaja de partir de un modelo preentrenado (pretrained model) en este escenario?',
    answers: [
      { id: 'A', text: 'Garantiza mayor precisión que cualquier modelo entrenado solo con datos de la empresa' },
      { id: 'B', text: 'Elimina la necesidad de evaluar el modelo en datos de fraude reales de la fintech' },
      { id: 'C', text: 'Puede usarse de inmediato para inferencia (inference) sin aportar un dataset de entrenamiento propio' },
      { id: 'D', text: 'Sustituye por completo el monitoreo de deriva (drift) en producción' },
    ],
    correctAnswers: ['C'],
    explanation:
      'Un modelo preentrenado ya aprendió representaciones útiles de un corpus grande, por lo que el equipo puede generar predicciones sin recolectar ni entrenar desde cero con datos propios. Aun así, suele hacer falta evaluación o ajuste fino para el dominio de fraude.',
  },
  {
    id: 22,
    certification: 'AIF-C01',
    domain: 'ai-ml-fundamentals',
    topic: 'Métricas de evaluación',
    services: [],
    difficulty: 'easy',
    type: 'single',
    question:
      'Un equipo de ciencia de datos evalúa un clasificador de correos spam con clases muy desbalanceadas. Necesita una métrica que equilibre falsos positivos y falsos negativos, no solo la exactitud global. ¿Qué mide el puntaje F1 (F1 score)?',
    answers: [
      { id: 'A', text: 'La latencia promedio de inferencia por solicitud' },
      { id: 'B', text: 'El área bajo la curva ROC (AUC-ROC) en todos los umbrales' },
      { id: 'C', text: 'La media armónica entre precisión (precision) y recall del modelo' },
      { id: 'D', text: 'La proporción de predicciones correctas sobre el total (accuracy)' },
    ],
    correctAnswers: ['C'],
    explanation:
      'El F1 es la media armónica de precisión y recall, por lo que resume el equilibrio entre acertar positivos y detectarlos todos. Es preferible a accuracy cuando el spam es una minoría de los correos.',
  },
  {
    id: 23,
    certification: 'AIF-C01',
    domain: 'ai-ml-fundamentals',
    topic: 'Servicios de IA gestionados de AWS',
    services: ['Comprehend', 'Translate', 'Polly', 'Transcribe'],
    difficulty: 'easy',
    type: 'single',
    question:
      'Una cadena hotelera necesita publicar las descripciones de sus habitaciones en portugués, inglés y español de forma automática. ¿Qué servicio de AWS cumple este requisito?',
    answers: [
      { id: 'A', text: 'Amazon Polly' },
      { id: 'B', text: 'Amazon Translate' },
      { id: 'C', text: 'Amazon Comprehend' },
      { id: 'D', text: 'Amazon Transcribe' },
    ],
    correctAnswers: ['B'],
    explanation:
      'Amazon Translate traduce texto entre idiomas con traducción automática neuronal, ideal para convertir descripciones de habitaciones a varios idiomas.',
  },
  {
    id: 24,
    certification: 'AIF-C01',
    domain: 'ai-ml-fundamentals',
    topic: 'IA agéntica',
    services: [],
    difficulty: 'easy',
    type: 'single',
    question:
      'Una startup de logística quiere un sistema que, sin supervisión constante, planee rutas, consulte inventario vía API y dispare pedidos de reposición cuando detecte faltantes. ¿Qué enfoque de IA describe mejor esta capacidad?',
    answers: [
      { id: 'A', text: 'IA generativa de imágenes a partir de prompts de texto' },
      { id: 'B', text: 'IA agéntica (agentic AI) que planifica, decide y ejecuta acciones para alcanzar objetivos' },
      { id: 'C', text: 'Reconocimiento automático de voz (speech-to-text)' },
      { id: 'D', text: 'Aprendizaje no supervisado (unsupervised learning) para clústeres de clientes' },
    ],
    correctAnswers: ['B'],
    explanation:
      'La IA agéntica (agentic AI) orquesta pasos, usa herramientas y actúa de forma autónoma hacia un objetivo, a diferencia de un modelo que solo genera texto o clasifica datos.',
  },
  {
    id: 25,
    certification: 'AIF-C01',
    domain: 'ai-ml-fundamentals',
    topic: 'Deep Learning y redes neuronales',
    services: [],
    difficulty: 'hard',
    type: 'single',
    question:
      'Un equipo de visión industrial compara un clasificador clásico (features manuales + SVM) con una red convolucional profunda sobre fotos de piezas. ¿Qué afirmación describe mejor la diferencia entre Deep Learning y Machine Learning tradicional?',
    answers: [
      { id: 'A', text: 'Deep Learning exige features diseñadas a mano, mientras que el ML tradicional las aprende solo' },
      { id: 'B', text: 'Deep Learning usa redes neuronales multicapa que aprenden representaciones directamente de datos crudos' },
      { id: 'C', text: 'Deep Learning solo se aplica a texto y no a imágenes o audio' },
      { id: 'D', text: 'Deep Learning siempre requiere menos datos etiquetados que el ML tradicional' },
    ],
    correctAnswers: ['B'],
    explanation:
      'Deep Learning emplea redes con muchas capas que descubren features útiles desde datos crudos, reduciendo la ingeniería manual típica del ML tradicional. Suele necesitar más datos y cómputo, no menos.',
  },
  {
    id: 26,
    certification: 'AIF-C01',
    domain: 'ai-ml-fundamentals',
    topic: 'Amazon SageMaker',
    services: ['SageMaker'],
    difficulty: 'easy',
    type: 'single',
    question:
      'Un analista de RR. HH. sin experiencia en programación quiere predecir la rotación de personal sin escribir código. ¿Qué función de Amazon SageMaker satisface este requisito?',
    answers: [
      { id: 'A', text: 'SageMaker Canvas' },
      { id: 'B', text: 'SageMaker Clarify' },
      { id: 'C', text: 'SageMaker Model Monitor' },
      { id: 'D', text: 'SageMaker Data Wrangler' },
    ],
    correctAnswers: ['A'],
    explanation:
      'Amazon SageMaker Canvas ofrece una interfaz visual sin código para construir, entrenar y obtener predicciones, ideal para usuarios de negocio que predicen rotación de personal.',
  },
  {
    id: 27,
    certification: 'AIF-C01',
    domain: 'ai-ml-fundamentals',
    topic: 'Tipos de inferencia',
    services: [],
    difficulty: 'easy',
    type: 'single',
    question:
      '¿Cuál es la diferencia principal entre inferencia por lotes (batch) e inferencia en tiempo real?',
    answers: [
      { id: 'A', text: 'La inferencia por lotes siempre es más precisa' },
      { id: 'B', text: 'La inferencia en tiempo real solo funciona con datasets pequeños' },
      { id: 'C', text: 'La inferencia por lotes procesa múltiples entradas juntas; la inferencia en tiempo real procesa cada solicitud al llegar' },
      { id: 'D', text: 'La inferencia en tiempo real siempre es más rápida que la inferencia por lotes' },
    ],
    correctAnswers: ['C'],
    explanation:
      'Batch inferencing agrupa entradas y las procesa en un job, optimizando throughput cuando no hay urgencia. Real-time inferencing responde solicitud por solicitud al instante, útil para fraude o moderación de contenido.',
  },
  {
    id: 28,
    certification: 'AIF-C01',
    domain: 'ai-ml-fundamentals',
    topic: 'IA agéntica',
    services: [],
    difficulty: 'easy',
    type: 'single',
    question:
      'Una consultora necesita un sistema que investigue tendencias de mercado, redacte un informe ejecutivo y lo envíe por correo a directivos sin intervención humana en cada paso. ¿Qué tipo de aplicación de IA encaja mejor?',
    answers: [
      { id: 'A', text: 'Reconocimiento de voz (speech recognition)' },
      { id: 'B', text: 'Clasificación de imágenes (image classification)' },
      { id: 'C', text: 'IA agéntica (agentic AI)' },
      { id: 'D', text: 'Análisis de sentimiento (sentiment analysis)' },
    ],
    correctAnswers: ['C'],
    explanation:
      'La IA agéntica puede orquestar un flujo de varios pasos —investigar, redactar y enviar— de forma autónoma, alineado con el requisito de la consultora.',
  },
  {
    id: 29,
    certification: 'AIF-C01',
    domain: 'ai-ml-fundamentals',
    topic: 'Métricas de evaluación',
    services: [],
    difficulty: 'easy',
    type: 'single',
    question:
      'Un banco entrena un detector de fraude donde las transacciones legítimas superan ampliamente a las fraudulentas. Quiere una sola métrica que equilibre detectar fraudes (recall) y limitar falsas alarmas (precision). ¿Cuál debe priorizar?',
    answers: [
      { id: 'A', text: 'Accuracy (exactitud), porque refleja el porcentaje global de aciertos' },
      { id: 'B', text: 'Recall solo, porque maximiza la detección de fraudes sin importar falsos positivos' },
      { id: 'C', text: 'Precision solo, porque minimiza falsas alarmas sin importar fraudes omitidos' },
      { id: 'D', text: 'F1 score (puntaje F1), porque combina precisión y recall en una media armónica' },
    ],
    correctAnswers: ['D'],
    explanation:
      'Con clases desbalanceadas, accuracy puede ser engañosa. El F1 combina precisión y recall y penaliza modelos que optimizan solo una de las dos, adecuado para fraude.',
  },
  {
    id: 30,
    certification: 'AIF-C01',
    domain: 'ai-ml-fundamentals',
    topic: 'Sesgo en Machine Learning',
    services: [],
    difficulty: 'hard',
    type: 'single',
    question:
      'En Machine Learning, ¿a qué se refiere más comúnmente el término bias (sesgo)?',
    answers: [
      { id: 'A', text: 'La velocidad de entrenamiento del modelo' },
      { id: 'B', text: 'Un error sistemático que hace que el modelo favorezca ciertos resultados de forma consistente' },
      { id: 'C', text: 'La cantidad total de parámetros del modelo' },
      { id: 'D', text: 'El proceso de dividir datos en entrenamiento y prueba' },
    ],
    correctAnswers: ['B'],
    explanation:
      'El sesgo en ML es un error sistemático donde el modelo inclina sus predicciones hacia ciertos resultados, a menudo por datos no representativos o supuestos incorrectos; identificarlo es clave para modelos justos.',
  },
  {
    id: 31,
    certification: 'AIF-C01',
    domain: 'ai-ml-fundamentals',
    topic: 'Fundamentos de IA y ML',
    services: [],
    difficulty: 'easy',
    type: 'single',
    question:
      'Una planta de embotellado usa cámaras en la línea para marcar automáticamente botellas con defectos visuales. ¿Qué tipo de aplicación de IA describe mejor este caso?',
    answers: [
      { id: 'A', text: 'Sistema de recomendaciones (recommendation system)' },
      { id: 'B', text: 'Procesamiento de lenguaje natural (NLP)' },
      { id: 'C', text: 'Visión por computadora (computer vision)' },
      { id: 'D', text: 'Forecasting de series temporales (time series forecasting)' },
    ],
    correctAnswers: ['C'],
    explanation:
      'La visión por computadora (computer vision) interpreta imágenes o video; es la base de la inspección visual automatizada en manufactura.',
  },
  {
    id: 32,
    certification: 'AIF-C01',
    domain: 'ai-ml-fundamentals',
    topic: 'Amazon SageMaker',
    services: ['SageMaker', 'Forecast'],
    difficulty: 'easy',
    type: 'single',
    question:
      'Un supermercado planea pronosticar la demanda semanal de productos perecederos usando el algoritmo DeepAR de Amazon SageMaker AI. ¿Qué tipo de datos necesita?',
    answers: [
      { id: 'A', text: 'Datos de texto' },
      { id: 'B', text: 'Datos de series temporales' },
      { id: 'C', text: 'Datos de audio' },
      { id: 'D', text: 'Datos de imagen' },
    ],
    correctAnswers: ['B'],
    explanation:
      'DeepAR es un algoritmo de forecasting que aprende de valores históricos registrados en secuencia temporal, como ventas diarias indexadas por fecha.',
  },
  {
    id: 33,
    certification: 'AIF-C01',
    domain: 'ai-ml-fundamentals',
    topic: 'Servicios de IA gestionados de AWS',
    services: ['Comprehend', 'Polly', 'Transcribe', 'Personalize'],
    difficulty: 'easy',
    type: 'single',
    question:
      'Una plataforma de streaming de video quiere recomendar contenido a cada usuario según su historial de visualización. ¿Qué servicio de AWS cumple este requisito?',
    answers: [
      { id: 'A', text: 'Amazon Personalize' },
      { id: 'B', text: 'Amazon Transcribe' },
      { id: 'C', text: 'Amazon Polly' },
      { id: 'D', text: 'Amazon Comprehend' },
    ],
    correctAnswers: ['A'],
    explanation:
      'Amazon Personalize es un servicio gestionado de recomendaciones que analiza historial e interacciones para personalizar sugerencias en tiempo real.',
  },
  {
    id: 34,
    certification: 'AIF-C01',
    domain: 'ai-ml-fundamentals',
    topic: 'Amazon SageMaker',
    services: ['SageMaker'],
    difficulty: 'easy',
    type: 'single',
    question:
      'Tras entrenar un modelo de churn en Amazon SageMaker AI, un equipo de retail lo expone en un endpoint para predecir clientes en riesgo cada noche. ¿Qué significa inferencia (inference) en este contexto?',
    answers: [
      { id: 'A', text: 'Recolectar y etiquetar el dataset histórico de abandono' },
      { id: 'B', text: 'Diseñar un algoritmo de ML completamente nuevo desde cero' },
      { id: 'C', text: 'Ajustar hiperparámetros (hyperparameter tuning) durante el entrenamiento' },
      { id: 'D', text: 'Aplicar el modelo ya entrenado a datos nuevos para producir predicciones' },
    ],
    correctAnswers: ['D'],
    explanation:
      'Inferencia es la fase en la que un modelo entrenado procesa datos no vistos y genera predicciones, distinta del entrenamiento donde el modelo aprende patrones.',
  },
  {
    id: 35,
    certification: 'AIF-C01',
    domain: 'ai-ml-fundamentals',
    topic: 'Servicios de IA gestionados de AWS',
    services: ['Comprehend', 'Translate', 'Polly', 'Transcribe'],
    difficulty: 'easy',
    type: 'single',
    question:
      'Una productora de podcasts necesita generar automáticamente transcripciones escritas del audio de cada episodio para publicar subtítulos. ¿Qué servicio de AWS cumple este requisito?',
    answers: [
      { id: 'A', text: 'Amazon Transcribe' },
      { id: 'B', text: 'Amazon Translate' },
      { id: 'C', text: 'Amazon Polly' },
      { id: 'D', text: 'Amazon Comprehend' },
    ],
    correctAnswers: ['A'],
    explanation:
      'Amazon Transcribe convierte audio hablado en texto mediante reconocimiento automático de voz (ASR). Polly sintetiza voz, Translate traduce texto y Comprehend analiza NLP.',
  },
  {
    id: 36,
    certification: 'AIF-C01',
    domain: 'ai-ml-fundamentals',
    topic: 'Fundamentos de IA y ML',
    services: ['Textract', 'Comprehend', 'Transcribe', 'Q'],
    difficulty: 'easy',
    type: 'single',
    question:
      'Un equipo de desarrollo necesita un asistente de IA en el IDE que responda preguntas sobre su código, explique funciones y ayude a depurar errores. ¿Qué servicio de AWS cumple este requisito?',
    answers: [
      { id: 'A', text: 'Amazon Comprehend' },
      { id: 'B', text: 'Amazon Q Developer' },
      { id: 'C', text: 'Amazon Textract' },
      { id: 'D', text: 'Amazon Transcribe' },
    ],
    correctAnswers: ['B'],
    explanation:
      'Amazon Q Developer se integra con IDEs para responder sobre código, explicar implementaciones y apoyar troubleshooting. Los otros servicios cubren NLP, OCR o speech-to-text, no asistencia de desarrollo.',
  },
  {
    id: 37,
    certification: 'AIF-C01',
    domain: 'ai-ml-fundamentals',
    topic: 'Amazon SageMaker',
    services: ['SageMaker'],
    difficulty: 'easy',
    type: 'single',
    question:
      'Una empresa opera decenas de modelos en endpoints de Amazon SageMaker AI y necesita alertas cuando la calidad de datos o predicciones se desvíe de la línea base. ¿Qué capacidad cumple este requisito?',
    answers: [
      { id: 'A', text: 'Amazon SageMaker Data Wrangler' },
      { id: 'B', text: 'Amazon SageMaker Model Monitor' },
      { id: 'C', text: 'Amazon SageMaker JumpStart' },
      { id: 'D', text: 'Amazon SageMaker Feature Store' },
    ],
    correctAnswers: ['B'],
    explanation:
      'Amazon SageMaker Model Monitor compara datos y predicciones en producción con una línea base y genera alertas ante desviaciones (drift).',
  },
  {
    id: 38,
    certification: 'AIF-C01',
    domain: 'ai-ml-fundamentals',
    topic: 'Servicios de IA gestionados de AWS',
    services: ['Textract', 'Comprehend', 'Polly', 'Kendra'],
    difficulty: 'easy',
    type: 'single',
    question:
      'Una universidad digital almacena miles de guías, videos y manuales y necesita búsqueda empresarial inteligente sobre ese contenido no estructurado. ¿Qué servicio de AWS encaja mejor?',
    answers: [
      { id: 'A', text: 'Amazon Polly' },
      { id: 'B', text: 'Amazon Kendra' },
      { id: 'C', text: 'Amazon Textract' },
      { id: 'D', text: 'Amazon Comprehend' },
    ],
    correctAnswers: ['B'],
    explanation:
      'Amazon Kendra es un servicio de búsqueda empresarial inteligente (enterprise search) diseñado para indexar y consultar contenido no estructurado a escala.',
  },
  {
    id: 39,
    certification: 'AIF-C01',
    domain: 'ai-ml-fundamentals',
    topic: 'Tipos de datos',
    services: ['RDS'],
    difficulty: 'easy',
    type: 'single',
    question:
      'Una empresa de telecomunicaciones monitorea niveles de señal en antenas rurales, registrando lecturas cada minuto en Amazon RDS para predecir cortes de servicio. ¿Qué tipo de datos debe recolectar?',
    answers: [
      { id: 'A', text: 'Datos tabulares' },
      { id: 'B', text: 'Datos de texto' },
      { id: 'C', text: 'Datos de series temporales' },
      { id: 'D', text: 'Datos de audio' },
    ],
    correctAnswers: ['C'],
    explanation:
      'Las series temporales registran valores en secuencia cronológica, como lecturas de señal cada minuto, necesarias para analizar fluctuaciones y predecir cortes.',
  },
  {
    id: 40,
    certification: 'AIF-C01',
    domain: 'ai-ml-fundamentals',
    topic: 'Métricas de evaluación',
    services: [],
    difficulty: 'easy',
    type: 'single',
    question:
      '¿Cuál es el propósito del ajuste de hiperparámetros (hyperparameter tuning) en el ciclo de vida de ML?',
    answers: [
      { id: 'A', text: 'Recolectar y limpiar los datos crudos de entrenamiento' },
      { id: 'B', text: 'Encontrar la configuración del modelo que produce el mejor rendimiento' },
      { id: 'C', text: 'Desplegar el modelo entrenado a un endpoint de producción' },
      { id: 'D', text: 'Monitorear drift de datos después del despliegue' },
    ],
    correctAnswers: ['B'],
    explanation:
      'Hyperparameter tuning busca la mejor combinación de configuraciones como learning rate, batch size o número de capas, definidas antes del entrenamiento, para maximizar métricas como accuracy.',
  },
  {
    id: 41,
    certification: 'AIF-C01',
    domain: 'ai-ml-fundamentals',
    topic: 'Ciclo de vida de ML y MLOps',
    services: [],
    difficulty: 'easy',
    type: 'single',
    question:
      'Un equipo de MLOps hereda pipelines frágiles, notebooks sin versionar y dependencias sin documentar que retrasan cada cambio en producción. En MLOps, ¿a qué se refiere gestionar la deuda técnica (technical debt)?',
    answers: [
      { id: 'A', text: 'Reducir solo el costo de instancias de cómputo en la nube' },
      { id: 'B', text: 'Atender atajos acumulados, dependencias obsoletas y procesos no documentados que dificultan mantener sistemas ML' },
      { id: 'C', text: 'Aumentar el número de parámetros del modelo para mejorar precisión' },
      { id: 'D', text: 'Eliminar datasets antiguos del almacén de objetos sin más análisis' },
    ],
    correctAnswers: ['B'],
    explanation:
      'La deuda técnica en MLOps es el costo acumulado de atajos, acoplamiento y falta de documentación que dificultan evolucionar sistemas ML; gestionarla implica refactorizar y estandarizar.',
  },
  {
    id: 42,
    certification: 'AIF-C01',
    domain: 'ai-ml-fundamentals',
    topic: 'Tipos de aprendizaje automático',
    services: [],
    difficulty: 'easy',
    type: 'single',
    question:
      'Una cadena de retail quiere descubrir grupos naturales de clientes a partir de compras y demografía, sin etiquetas previas de segmento. ¿Cuál es un ejemplo de aprendizaje no supervisado (unsupervised learning)?',
    answers: [
      { id: 'A', text: 'Predecir el precio de viviendas con etiquetas de venta' },
      { id: 'B', text: 'Detectar spam en correos con mensajes ya etiquetados' },
      { id: 'C', text: 'Agrupar clientes en segmentos de comportamiento (clustering)' },
      { id: 'D', text: 'Clasificar imágenes de productos con categorías conocidas' },
    ],
    correctAnswers: ['C'],
    explanation:
      'Agrupar clientes por similitud es clustering no supervisado: el algoritmo descubre grupos sin etiquetas predefinidas. Las demás opciones son tareas supervisadas.',
  },
  {
    id: 43,
    certification: 'AIF-C01',
    domain: 'ai-ml-fundamentals',
    topic: 'Amazon SageMaker',
    services: ['SageMaker', 'Audit Manager'],
    difficulty: 'easy',
    type: 'single',
    question:
      'Tras entrenar varias versiones de un modelo, un equipo necesita un repositorio central para almacenarlos, versionarlos y rastrear su estado de aprobación y despliegue. ¿Qué capacidad de AWS cumple esto?',
    answers: [
      { id: 'A', text: 'Amazon SageMaker Model Monitor' },
      { id: 'B', text: 'Amazon SageMaker Canvas' },
      { id: 'C', text: 'Amazon SageMaker Model Registry' },
      { id: 'D', text: 'AWS Audit Manager' },
    ],
    correctAnswers: ['C'],
    explanation:
      'Amazon SageMaker Model Registry centraliza el almacenamiento, versionado y seguimiento del ciclo de vida de modelos ML para gobernanza y despliegue.',
  },
  {
    id: 44,
    certification: 'AIF-C01',
    domain: 'ai-ml-fundamentals',
    topic: 'Sobreajuste, subajuste y generalización',
    services: [],
    difficulty: 'easy',
    type: 'single',
    question:
      'Una app de movilidad urbana procesa miles de solicitudes de rutas diarias con patrones de tráfico que cambian cada semana. ¿Qué beneficio ofrece AI/ML frente a un sistema basado solo en reglas fijas?',
    answers: [
      { id: 'A', text: 'Salidas siempre determinísticas e idénticas para toda entrada' },
      { id: 'B', text: 'Capacidad de escalar y adaptarse a patrones cambiantes en los datos' },
      { id: 'C', text: 'Corrección garantizada sin necesidad de validación continua' },
      { id: 'D', text: 'Eliminación total de costos de cómputo e infraestructura' },
    ],
    correctAnswers: ['B'],
    explanation:
      'Los sistemas ML aprenden de datos y generalizan ante cambios, escalando a alto volumen sin codificar a mano cada escenario, a diferencia de reglas estáticas.',
  },
  {
    id: 45,
    certification: 'AIF-C01',
    domain: 'ai-ml-fundamentals',
    topic: 'Fundamentos de IA y ML',
    services: [],
    difficulty: 'easy',
    type: 'single',
    question:
      'Un biólogo marino tiene miles de fotos submarinas y quiere localizar y clasificar automáticamente especies en cada imagen sin revisión manual de todas. ¿Qué estrategia cumple este requisito?',
    answers: [
      { id: 'A', text: 'Reconocimiento de entidades nombradas (NER)' },
      { id: 'B', text: 'Inpainting generativo de regiones de la imagen' },
      { id: 'C', text: 'Detección de objetos (object detection)' },
      { id: 'D', text: 'Detección de anomalías (anomaly detection) en series temporales' },
    ],
    correctAnswers: ['C'],
    explanation:
      'La detección de objetos (object detection) localiza y clasifica objetos dentro de imágenes, adecuada para encontrar y categorizar especies en fotos submarinas.',
  },
  {
    id: 46,
    certification: 'AIF-C01',
    domain: 'ai-ml-fundamentals',
    topic: 'Fundamentos de IA y ML',
    services: [],
    difficulty: 'easy',
    type: 'single',
    question:
      'Una empresa de software recibe miles de comentarios libres en encuestas de satisfacción y quiere analizar el sentimiento expresado. ¿Qué solución cumple este requisito?',
    answers: [
      { id: 'A', text: 'Usar un algoritmo de regresión para ordenar comentarios en categorías predefinidas' },
      { id: 'B', text: 'Usar un motor de recomendaciones para detectar sentimiento' },
      { id: 'C', text: 'Usar un modelo de lenguaje grande (LLM) con NLP para análisis de sentimiento' },
      { id: 'D', text: 'Usar un algoritmo de series temporales para predecir sentimiento histórico' },
    ],
    correctAnswers: ['C'],
    explanation:
      'Un LLM con NLP puede interpretar texto no estructurado y determinar si el sentimiento es positivo, negativo o neutral, adecuado para comentarios libres en encuestas.',
  },
  {
    id: 47,
    certification: 'AIF-C01',
    domain: 'ai-ml-fundamentals',
    topic: 'Fundamentos de IA y ML',
    services: ['Bedrock'],
    difficulty: 'easy',
    type: 'single',
    question:
      'Una startup quiere usar un foundation model (modelo fundacional) pero no tiene presupuesto ni datos para preentrenarlo desde cero. ¿Qué enfoque le permite obtener uno listo para usar o ajustar?',
    answers: [
      { id: 'A', text: 'Usar un modelo preentrenado de código abierto desde un hub de modelos' },
      { id: 'B', text: 'Construir un sistema experto basado solo en reglas de negocio' },
      { id: 'C', text: 'Entrenar un árbol de decisión pequeño con pocos ejemplos etiquetados' },
      { id: 'D', text: 'Escribir código de inferencia personalizado sin ningún modelo' },
    ],
    correctAnswers: ['A'],
    explanation:
      'Los modelos preentrenados open source en hubs (por ejemplo Hugging Face) o mediante Amazon Bedrock/JumpStart permiten usar o hacer fine-tuning sin el costo del preentrenamiento completo.',
  },
  {
    id: 48,
    certification: 'AIF-C01',
    domain: 'ai-ml-fundamentals',
    topic: 'Amazon SageMaker',
    services: ['SageMaker'],
    difficulty: 'easy',
    type: 'single',
    question:
      'Una aseguradora debe ejecutar inferencia sobre años de registros archivados de siniestros (lotes de varios GB) y no necesita resultados en tiempo real. Con el MENOR costo operativo de endpoint persistente, ¿qué opción de Amazon SageMaker AI encaja mejor?',
    answers: [
      { id: 'A', text: 'Serverless inference' },
      { id: 'B', text: 'Batch transform' },
      { id: 'C', text: 'Real-time inference' },
      { id: 'D', text: 'Asynchronous inference' },
    ],
    correctAnswers: ['B'],
    explanation:
      'Batch transform procesa datasets grandes de forma offline sin mantener un endpoint siempre activo, ideal cuando la urgencia es baja. Real-time y serverless sirven tráfico interactivo; async encaja mejor con payloads grandes con respuesta diferida, no con archivos masivos históricos.',
  },
  {
    id: 49,
    certification: 'AIF-C01',
    domain: 'ai-ml-fundamentals',
    topic: 'Amazon SageMaker',
    services: ['SageMaker'],
    difficulty: 'easy',
    type: 'single',
    question:
      'Una empresa construye modelos con Amazon SageMaker y necesita compartir y gestionar variables (features) entre varios equipos. ¿Qué función de SageMaker cumple esto?',
    answers: [
      { id: 'A', text: 'Amazon SageMaker Data Wrangler' },
      { id: 'B', text: 'Amazon SageMaker Feature Store' },
      { id: 'C', text: 'Amazon SageMaker Clarify' },
      { id: 'D', text: 'Amazon SageMaker Model Cards' },
    ],
    correctAnswers: ['B'],
    explanation:
      'Amazon SageMaker Feature Store es un repositorio centralizado para almacenar, compartir y reutilizar features entre equipos y pipelines.',
  },
  {
    id: 50,
    certification: 'AIF-C01',
    domain: 'ai-ml-fundamentals',
    topic: 'Tipos de aprendizaje automático',
    services: ['SageMaker', 'Comprehend', 'Rekognition', 'DeepRacer'],
    difficulty: 'easy',
    type: 'single',
    question:
      'Una cadena de retail quiere que analistas de negocio construyan y desplieguen modelos ML en AWS sin escribir código. ¿Qué servicio o función cumple este requisito?',
    answers: [
      { id: 'A', text: 'Amazon Rekognition' },
      { id: 'B', text: 'Amazon Comprehend' },
      { id: 'C', text: 'Amazon SageMaker Canvas' },
      { id: 'D', text: 'AWS DeepRacer' },
    ],
    correctAnswers: ['C'],
    explanation:
      'Amazon SageMaker Canvas ofrece una interfaz visual sin código para preparar datos, entrenar y desplegar modelos personalizados. Rekognition y Comprehend son APIs de IA gestionada; DeepRacer es un entorno de aprendizaje por refuerzo.',
  },
  {
    id: 51,
    certification: 'AIF-C01',
    domain: 'ai-ml-fundamentals',
    topic: 'Tipos de aprendizaje automático',
    services: [],
    difficulty: 'easy',
    type: 'single',
    question:
      'Una minera quiere detectar lecturas anómalas en sensores de maquinaria sin contar con ejemplos etiquetados de fallas. ¿Qué método de ML cumple este requisito?',
    answers: [
      { id: 'A', text: 'Árbol de decisión' },
      { id: 'B', text: 'Autoencoders' },
      { id: 'C', text: 'Regresión lineal' },
      { id: 'D', text: 'Regresión logística' },
    ],
    correctAnswers: ['B'],
    explanation:
      'Los autoencoders aprenden a reconstruir patrones normales; lecturas con alto error de reconstrucción se marcan como anomalías sin necesidad de etiquetas.',
  },
  {
    id: 52,
    certification: 'AIF-C01',
    domain: 'ai-ml-fundamentals',
    topic: 'Servicios de IA gestionados de AWS',
    services: ['Textract', 'Comprehend', 'Translate', 'Polly'],
    difficulty: 'easy',
    type: 'multiple',
    question:
      '¿Cuáles servicios de AWS pueden usarse para análisis de documentos y extracción de información? (Seleccione DOS.)',
    answers: [
      { id: 'A', text: 'Amazon Textract' },
      { id: 'B', text: 'Amazon Comprehend' },
      { id: 'C', text: 'Amazon Polly' },
      { id: 'D', text: 'Amazon Translate' },
    ],
    correctAnswers: ['A', 'B'],
    explanation:
      'Amazon Textract extrae texto, formularios y tablas de documentos e imágenes con OCR. Amazon Comprehend aplica NLP sobre ese texto para identificar entidades, frases clave y sentimiento.',
  },
  {
    id: 53,
    certification: 'AIF-C01',
    domain: 'ai-ml-fundamentals',
    topic: 'Métricas de evaluación',
    services: [],
    difficulty: 'easy',
    type: 'single',
    question:
      'Una plataforma de suscripción entrena un modelo binario para predecir qué usuarios cancelarán su plan. ¿Qué métrica es apropiada para evaluarlo?',
    answers: [
      { id: 'A', text: 'R-cuadrado (R-squared)' },
      { id: 'B', text: 'Error cuadrático medio (MSE)' },
      { id: 'C', text: 'F1 score' },
      { id: 'D', text: 'Tiempo de entrenamiento del modelo' },
    ],
    correctAnswers: ['C'],
    explanation:
      'El F1 combina precisión y recall, adecuado para clasificación binaria de churn donde importa equilibrar falsos positivos y falsos negativos.',
  },
  {
    id: 54,
    certification: 'AIF-C01',
    domain: 'ai-ml-fundamentals',
    topic: 'Ciclo de vida de ML y MLOps',
    services: [],
    difficulty: 'easy',
    type: 'single',
    question:
      'Un equipo de e-commerce construye un modelo que predice retrasos en entregas. Debe seguir el ciclo de vida de ML en el orden correcto. ¿Qué secuencia es correcta?',
    answers: [
      { id: 'A', text: '1) Recolectar historial de envíos → 2) Ingeniería de features y limpieza → 3) Entrenar el modelo → 4) Desplegar a endpoint → 5) Definir el problema de negocio y métrica de éxito' },
      { id: 'B', text: '1) Desplegar a endpoint → 2) Entrenar el modelo → 3) Ingeniería de features → 4) Recolectar historial → 5) Definir problema de negocio' },
      { id: 'C', text: '1) Recolectar historial → 2) Definir problema de negocio → 3) Ingeniería de features → 4) Entrenar → 5) Desplegar' },
      { id: 'D', text: '1) Definir el problema de negocio y métrica de éxito → 2) Recolectar historial de envíos → 3) Ingeniería de features y limpieza → 4) Entrenar el modelo → 5) Desplegar a endpoint' },
    ],
    correctAnswers: ['D'],
    explanation:
      'El ciclo inicia definiendo el problema y la métrica de éxito; luego se recolectan datos, se preparan features, se entrena y se despliega el modelo validado.',
  },
  {
    id: 55,
    certification: 'AIF-C01',
    domain: 'ai-ml-fundamentals',
    topic: 'Fundamentos de IA y ML',
    services: ['Config', 'CloudTrail', 'CloudWatch', 'Trusted Advisor'],
    difficulty: 'easy',
    type: 'single',
    question:
      'Una empresa necesita un servicio altamente escalable de AWS para monitorear el rendimiento de sus sistemas ML en producción. ¿Qué servicio cumple este requisito?',
    answers: [
      { id: 'A', text: 'AWS CloudTrail' },
      { id: 'B', text: 'AWS Config' },
      { id: 'C', text: 'Amazon CloudWatch' },
      { id: 'D', text: 'AWS Trusted Advisor' },
    ],
    correctAnswers: ['C'],
    explanation:
      'Amazon CloudWatch recopila métricas en tiempo real como latencia, errores y uso de recursos, con alarmas y dashboards ideales para observar sistemas ML.',
  },
  {
    id: 56,
    certification: 'AIF-C01',
    domain: 'ai-ml-fundamentals',
    topic: 'Servicios de IA gestionados de AWS',
    services: ['Textract', 'Translate', 'Transcribe', 'Transform'],
    difficulty: 'easy',
    type: 'single',
    question:
      'Una empresa quiere modernizar aplicaciones heredadas (legacy) usando herramientas asistidas por IA para transformar y migrar cargas de trabajo. ¿Qué servicio de AWS cumple este requisito?',
    answers: [
      { id: 'A', text: 'AWS Transform' },
      { id: 'B', text: 'Amazon Textract' },
      { id: 'C', text: 'Amazon Translate' },
      { id: 'D', text: 'Amazon Transcribe' },
    ],
    correctAnswers: ['A'],
    explanation:
      'AWS Transform usa IA para ayudar a transformar y modernizar aplicaciones legacy. Textract, Translate y Transcribe cubren OCR, traducción y speech-to-text, no modernización de apps.',
  },
  {
    id: 57,
    certification: 'AIF-C01',
    domain: 'ai-ml-fundamentals',
    topic: 'Fundamentos de IA y ML',
    services: [],
    difficulty: 'easy',
    type: 'single',
    question:
      'Una clínica rural quiere desplegar una herramienta de apoyo diagnóstico en tablets con poca memoria y sin conexión a internet. ¿Qué restricción favorece más un modelo ML tradicional sobre un foundation model?',
    answers: [
      { id: 'A', text: 'La necesidad de generar imágenes en tiempo real' },
      { id: 'B', text: 'Restricciones operativas de memoria y conectividad' },
      { id: 'C', text: 'El requisito de chat multilingüe' },
      { id: 'D', text: 'La necesidad de resumir texto de forma abierta' },
    ],
    correctAnswers: ['B'],
    explanation:
      'Los modelos ML tradicionales suelen ser más pequeños y ejecutarse en dispositivos edge sin conexión cloud, ideal para tablets limitadas en clínicas rurales.',
  },
  {
    id: 58,
    certification: 'AIF-C01',
    domain: 'ai-ml-fundamentals',
    topic: 'Ciclo de vida de ML y MLOps',
    services: [],
    difficulty: 'hard',
    type: 'multiple',
    question:
      'Un equipo adopta MLOps para gestionar flujos de ML con mayor confiabilidad. ¿Cuáles dos prácticas debe priorizar? (Seleccione DOS.)',
    answers: [
      { id: 'A', text: 'Versionado de modelos para reproducibilidad' },
      { id: 'B', text: 'Pruebas y validación automatizadas de modelos' },
      { id: 'C', text: 'Despliegues exclusivamente manuales' },
      { id: 'D', text: 'Documentación mínima' },
    ],
    correctAnswers: ['A', 'B'],
    explanation:
      'El versionado permite reproducir resultados y revertir cambios. Las pruebas automatizadas verifican rendimiento antes del despliegue; ambas son pilares de MLOps confiable.',
  },
  {
    id: 59,
    certification: 'AIF-C01',
    domain: 'ai-ml-fundamentals',
    topic: 'Tipos de aprendizaje automático',
    services: [],
    difficulty: 'easy',
    type: 'single',
    question:
      'Un marketplace en línea quiere segmentar compradores según historial de compras y preferencias para personalizar la experiencia. ¿Qué técnica de ML debe usar?',
    answers: [
      { id: 'A', text: 'Clasificación' },
      { id: 'B', text: 'Regresión' },
      { id: 'C', text: 'Clustering' },
      { id: 'D', text: 'Generación de contenido' },
    ],
    correctAnswers: ['C'],
    explanation:
      'Clustering agrupa compradores con comportamiento similar sin etiquetas predefinidas, descubriendo segmentos naturales para personalización.',
  },
  {
    id: 60,
    certification: 'AIF-C01',
    domain: 'ai-ml-fundamentals',
    topic: 'Fundamentos de IA y ML',
    services: [],
    difficulty: 'hard',
    type: 'single',
    question:
      'Un banco debe explicar a reguladores cada factor que influyó en decisiones de crédito. Evalúa un modelo de gradient boosting frente a un LLM. ¿Qué factor favorece más el modelo ML tradicional?',
    answers: [
      { id: 'A', text: 'Requisitos de explicabilidad' },
      { id: 'B', text: 'Soporte multilingüe' },
      { id: 'C', text: 'Capacidad de generación de contenido' },
      { id: 'D', text: 'Necesidad de interfaz conversacional' },
    ],
    correctAnswers: ['A'],
    explanation:
      'Modelos tradicionales como gradient boosting permiten trazar cada predicción a features específicas y sus pesos, cumpliendo exigencias regulatorias de explicabilidad.',
  },
  {
    id: 61,
    certification: 'AIF-C01',
    domain: 'ai-ml-fundamentals',
    topic: 'Fundamentos de IA y ML',
    services: [],
    difficulty: 'medium',
    type: 'single',
    question:
      'Una empresa de paquetería ingiere varios GB de registros de envíos diarios y necesita predicciones de volumen una vez al día sobre el dataset acumulado. ¿Qué tipo de inferencia encaja mejor?',
    answers: [
      { id: 'A', text: 'Inferencia por lotes (batch inference)' },
      { id: 'B', text: 'Inferencia asincrónica' },
      { id: 'C', text: 'Inferencia en tiempo real' },
      { id: 'D', text: 'Inferencia serverless' },
    ],
    correctAnswers: ['A'],
    explanation:
      'Batch inference procesa grandes volúmenes en un job programado, ideal para generar predicciones diarias sobre todo el dataset acumulado sin mantener endpoint persistente.',
  },
  {
    id: 62,
    certification: 'AIF-C01',
    domain: 'ai-ml-fundamentals',
    topic: 'Métricas de evaluación',
    services: [],
    difficulty: 'easy',
    type: 'single',
    question:
      'Un modelo de predicción de abandono (churn) alcanza alta accuracy en entrenamiento pero falla con clientes nuevos. El equipo sospecha sobreajuste (overfitting). ¿Qué cambio suele ayudar MÁS a mejorar la generalización?',
    answers: [
      { id: 'A', text: 'Reducir la regularización (regularization) para permitir patrones más complejos' },
      { id: 'B', text: 'Agregar más features correlacionadas sin validar en holdout' },
      { id: 'C', text: 'Entrenar durante más epochs hasta minimizar solo el error de entrenamiento' },
      { id: 'D', text: 'Aumentar la regularización para reducir la complejidad del modelo' },
    ],
    correctAnswers: ['D'],
    explanation:
      'El sobreajuste (overfitting) memoriza el entrenamiento y no generaliza. Aumentar la regularización penaliza complejidad excesiva y favorece patrones que transfieren a datos nuevos.',
  },
  {
    id: 63,
    certification: 'AIF-C01',
    domain: 'ai-ml-fundamentals',
    topic: 'Tipos de aprendizaje automático',
    services: ['SageMaker', 'CloudFront', 'API Gateway', 'Batch'],
    difficulty: 'hard',
    type: 'single',
    question:
      'Una empresa tiene un modelo de clasificación de imágenes y su app web debe invocarlo con predicciones en tiempo real, con tráfico intermitente y escalado automático sin administrar servidores. ¿Qué solución cumple esto con MENOR esfuerzo operativo?',
    answers: [
      { id: 'A', text: 'Usar Amazon SageMaker Serverless Inference para desplegar el modelo' },
      { id: 'B', text: 'Usar Amazon CloudFront para alojar y ejecutar el modelo ML' },
      { id: 'C', text: 'Usar solo Amazon API Gateway como runtime del modelo' },
      { id: 'D', text: 'Usar AWS Batch como endpoint de inferencia interactiva' },
    ],
    correctAnswers: ['A'],
    explanation:
      'Amazon SageMaker Serverless Inference sirve predicciones bajo demanda con escalado automático y sin provisionar instancias fijas. CloudFront, API Gateway y Batch no sustituyen un hosting de modelos ML en tiempo real.',
  },
  {
    id: 64,
    certification: 'AIF-C01',
    domain: 'ai-ml-fundamentals',
    topic: 'Métricas de evaluación',
    services: [],
    difficulty: 'easy',
    type: 'single',
    question:
      'Un equipo de riesgo crediticio compara clasificadores binarios y revisa la curva ROC. En métricas de rendimiento, ¿qué significa el acrónimo AUC?',
    answers: [
      { id: 'A', text: 'Area Under the Curve (área bajo la curva)' },
      { id: 'B', text: 'Average Usage Cost (costo promedio de uso)' },
      { id: 'C', text: 'Automated Update Cycle (ciclo de actualización automática)' },
      { id: 'D', text: 'Application Unit Capacity (capacidad unitaria de la aplicación)' },
    ],
    correctAnswers: ['A'],
    explanation:
      'AUC significa Area Under the Curve, habitualmente bajo la curva ROC. Resume la capacidad del clasificador para separar clases en distintos umbrales.',
  },
  {
    id: 65,
    certification: 'AIF-C01',
    domain: 'ai-ml-fundamentals',
    topic: 'Fundamentos de IA y ML',
    services: [],
    difficulty: 'easy',
    type: 'single',
    question:
      '¿Qué técnica de ML usa datos de entrenamiento etiquetados con los valores de salida correctos?',
    answers: [
      { id: 'A', text: 'Aprendizaje supervisado (Supervised learning)' },
      { id: 'B', text: 'Aprendizaje no supervisado (Unsupervised learning)' },
      { id: 'C', text: 'Aprendizaje por refuerzo (Reinforcement learning)' },
      { id: 'D', text: 'Transfer learning' },
    ],
    correctAnswers: ['A'],
    explanation:
      'Supervised learning entrena con pares entrada-etiqueta conocida, aprendiendo la relación entre inputs y targets para predecir en datos nuevos.',
  },
  {
    id: 66,
    certification: 'AIF-C01',
    domain: 'ai-ml-fundamentals',
    topic: 'Fundamentos de IA y ML',
    services: [],
    difficulty: 'easy',
    type: 'single',
    question:
      'Un hospital entrenó un modelo con historial clínico para estimar si un paciente será readmitido en 30 días. Al alta, el sistema debe devolver esa predicción para un paciente nuevo. ¿Qué tarea representa inferencia (inference)?',
    answers: [
      { id: 'A', text: 'Aplicar el modelo entrenado para predecir readmisión de un paciente nuevo' },
      { id: 'B', text: 'Recolectar registros históricos de readmisión para el dataset' },
      { id: 'C', text: 'Medir rendimiento del modelo con métricas de evaluación en validación' },
      { id: 'D', text: 'Analizar correlaciones exploratorias entre variables de pacientes' },
    ],
    correctAnswers: ['A'],
    explanation:
      'Inferencia es aplicar un modelo ya entrenado a datos nuevos para generar predicciones, por ejemplo el riesgo de readmisión al momento del alta.',
  },
  {
    id: 67,
    certification: 'AIF-C01',
    domain: 'ai-ml-fundamentals',
    topic: 'Amazon SageMaker',
    services: ['SageMaker'],
    difficulty: 'easy',
    type: 'single',
    question:
      'Una empresa ejecuta un pipeline ML en Amazon SageMaker AI con solicitudes de hasta 1 GB que pueden tardar una hora, pero necesita latencia casi en tiempo real. ¿Qué opción de inferencia cumple estos requisitos?',
    answers: [
      { id: 'A', text: 'Real-time inference' },
      { id: 'B', text: 'Batch transform' },
      { id: 'C', text: 'Serverless inference' },
      { id: 'D', text: 'Asynchronous inference' },
    ],
    correctAnswers: ['D'],
    explanation:
      'Asynchronous inference acepta payloads de hasta 1 GB y procesamiento de hasta una hora, encolando solicitudes y devolviendo resultados cuando están listos sin bloquear al cliente.',
  },
  {
    id: 68,
    certification: 'AIF-C01',
    domain: 'ai-ml-fundamentals',
    topic: 'Fundamentos de IA y ML',
    services: [],
    difficulty: 'easy',
    type: 'single',
    question:
      '¿Qué tipo de machine learning es más apropiado para entrenar un agente que toma decisiones interactuando con su entorno?',
    answers: [
      { id: 'A', text: 'Aprendizaje supervisado' },
      { id: 'B', text: 'Aprendizaje no supervisado' },
      { id: 'C', text: 'Aprendizaje por refuerzo (Reinforcement learning)' },
      { id: 'D', text: 'Transfer learning' },
    ],
    correctAnswers: ['C'],
    explanation:
      'Reinforcement learning entrena un agente que recibe recompensas o penalizaciones por sus acciones en un entorno, aprendiendo una estrategia óptima con el tiempo.',
  },
  {
    id: 69,
    certification: 'AIF-C01',
    domain: 'ai-ml-fundamentals',
    topic: 'Servicios de IA gestionados de AWS',
    services: ['Textract', 'Comprehend', 'Kendra', 'Personalize'],
    difficulty: 'easy',
    type: 'single',
    question:
      'Un centro médico tiene expedientes clínicos ya en texto estructurado y necesita extraer entidades clínicas (medicamentos, condiciones) y producir resúmenes concisos con lógica de negocio. ¿Qué solución encaja MEJOR?',
    answers: [
      { id: 'A', text: 'Usar Amazon Personalize para modelar engagement y pasar la salida a un modelo general' },
      { id: 'B', text: 'Usar Amazon Comprehend Medical para extraer entidades clínicas y aplicar lógica basada en reglas para formatear resúmenes' },
      { id: 'C', text: 'Usar solo Amazon Textract, aunque los expedientes ya están en texto digital' },
      { id: 'D', text: 'Usar Amazon Kendra únicamente para indexar expedientes sin extracción de entidades clínicas' },
    ],
    correctAnswers: ['B'],
    explanation:
      'Amazon Comprehend Medical extrae entidades y relaciones de texto médico; combinarlo con reglas permite formatear resúmenes. Textract sirve OCR de documentos escaneados; Personalize y Kendra no sustituyen NLP clínico.',
  },
  {
    id: 70,
    certification: 'AIF-C01',
    domain: 'ai-ml-fundamentals',
    topic: 'Métricas de evaluación',
    services: [],
    difficulty: 'easy',
    type: 'single',
    question:
      'Un practicante entrenó un modelo de deep learning que clasifica razas de gatos en fotos. ¿Qué métrica ayuda a evaluar su rendimiento?',
    answers: [
      { id: 'A', text: 'Matriz de confusión (Confusion matrix)' },
      { id: 'B', text: 'Matriz de correlación' },
      { id: 'C', text: 'Puntaje R2' },
      { id: 'D', text: 'Error cuadrático medio (MSE)' },
    ],
    correctAnswers: ['A'],
    explanation:
      'La matriz de confusión desglosa verdaderos/falsos positivos y negativos por clase, mostrando dónde el clasificador acierta o confunde razas.',
  },
  {
    id: 71,
    certification: 'AIF-C01',
    domain: 'ai-ml-fundamentals',
    topic: 'Fundamentos de IA y ML',
    services: [],
    difficulty: 'easy',
    type: 'single',
    question:
      'Un equipo de soporte analiza el tono emocional en tickets de clientes mediante análisis de sentimiento. ¿De qué campo más amplio de IA forma parte?',
    answers: [
      { id: 'A', text: 'Procesamiento de lenguaje natural (NLP)' },
      { id: 'B', text: 'Visión por computadora (Computer Vision)' },
      { id: 'C', text: 'Pronóstico de series temporales' },
      { id: 'D', text: 'Reconocimiento de voz' },
    ],
    correctAnswers: ['A'],
    explanation:
      'El análisis de sentimiento es una tarea de NLP, el campo de IA enfocado en comprender e interpretar lenguaje humano escrito o hablado.',
  },
  {
    id: 72,
    certification: 'AIF-C01',
    domain: 'ai-ml-fundamentals',
    topic: 'Servicios de IA gestionados de AWS',
    services: ['Textract', 'Translate', 'Polly', 'Transcribe'],
    difficulty: 'hard',
    type: 'multiple',
    question:
      'Un cineasta quiere ampliar su audiencia agregando subtítulos y locuciones en varios idiomas a sus películas. ¿Qué dos pasos juntos cumplen este requisito? (Seleccione DOS.)',
    answers: [
      { id: 'A', text: 'Usar Amazon Polly para generar locuciones en varios idiomas' },
      { id: 'B', text: 'Usar Amazon Transcribe y Amazon Translate para producir subtítulos en varios idiomas' },
      { id: 'C', text: 'Usar Amazon Translate para generar locuciones en varios idiomas' },
      { id: 'D', text: 'Usar Amazon Textract y Amazon Translate para producir subtítulos en varios idiomas' },
    ],
    correctAnswers: ['A', 'B'],
    explanation:
      'Amazon Transcribe convierte diálogo hablado a texto y Amazon Translate lo traduce para subtítulos multilingües. Amazon Polly convierte texto traducido a audio para locuciones.',
  },
  {
    id: 73,
    certification: 'AIF-C01',
    domain: 'ai-ml-fundamentals',
    topic: 'Ciclo de vida de ML y MLOps',
    services: [],
    difficulty: 'easy',
    type: 'single',
    question:
      'Dentro del ciclo de vida de ML, un equipo de e-commerce transforma fechas de compra, codifica categorías y crea ratios de gasto antes de entrenar. ¿Cuál es el objetivo principal de la ingeniería de features (feature engineering)?',
    answers: [
      { id: 'A', text: 'Crear nuevas variables de entrada o transformar las existentes para mejorar el rendimiento del modelo' },
      { id: 'B', text: 'Recolectar datos crudos adicionales sin transformarlos' },
      { id: 'C', text: 'Medir qué tan bien rinde el modelo ya entrenado' },
      { id: 'D', text: 'Publicar el modelo en un entorno de producción' },
    ],
    correctAnswers: ['A'],
    explanation:
      'La ingeniería de features (feature engineering) transforma datos crudos en inputs útiles que mejoran el poder predictivo del modelo, distinta de recolección, evaluación o despliegue.',
  },
  {
    id: 74,
    certification: 'AIF-C01',
    domain: 'ai-ml-fundamentals',
    topic: 'Ciclo de vida de ML y MLOps',
    services: [],
    difficulty: 'easy',
    type: 'single',
    question:
      'Un equipo de MLOps quiere aprovisionar entornos de entrenamiento y endpoints de forma repetible entre desarrollo y producción. ¿Cuál es un beneficio de usar Infrastructure as Code (IaC) en MLOps?',
    answers: [
      { id: 'A', text: 'IaC elimina la necesidad de hyperparameter tuning' },
      { id: 'B', text: 'IaC garantiza por sí solo modelos con mayor precisión' },
      { id: 'C', text: 'IaC agiliza el despliegue de cargas ML escalables y consistentes en la nube' },
      { id: 'D', text: 'IaC obliga a usar solo instancias de bajo costo' },
    ],
    correctAnswers: ['C'],
    explanation:
      'IaC define infraestructura en código versionado, permitiendo aprovisionar entornos ML de forma repetible y consistente entre entornos.',
  },
  {
    id: 75,
    certification: 'AIF-C01',
    domain: 'ai-ml-fundamentals',
    topic: 'Fundamentos de IA y ML',
    services: [],
    difficulty: 'hard',
    type: 'multiple',
    question:
      '¿Cuáles de las siguientes son métricas de negocio para evaluar modelos de IA? (Seleccione DOS.)',
    answers: [
      { id: 'A', text: 'Puntaje de precisión (Precision score)' },
      { id: 'B', text: 'Puntaje de satisfacción del cliente' },
      { id: 'C', text: 'Precisión media (Mean Average Precision)' },
      { id: 'D', text: 'Time-to-value (Tiempo hasta generar valor)' },
    ],
    correctAnswers: ['B', 'D'],
    explanation:
      'La satisfacción del cliente mide valor entregado al usuario final. Time-to-value mide qué tan rápido la solución de IA produce resultados de negocio medibles.',
  },
  {
    id: 76,
    certification: 'AIF-C01',
    domain: 'ai-ml-fundamentals',
    topic: 'Métricas de evaluación',
    services: [],
    difficulty: 'easy',
    type: 'single',
    question:
      'Una fábrica de textiles entrenó un clasificador que marca fotos de telas como defectuosas o no. El equipo quiere saber qué proporción de imágenes clasificó correctamente en un conjunto balanceado. ¿Qué métrica debe usar?',
    answers: [
      { id: 'A', text: 'Error absoluto medio (MAE)' },
      { id: 'B', text: 'Número de epochs de entrenamiento' },
      { id: 'C', text: 'Raíz del error cuadrático medio (RMSE)' },
      { id: 'D', text: 'Accuracy (exactitud)' },
    ],
    correctAnswers: ['D'],
    explanation:
      'Accuracy mide la proporción de predicciones correctas sobre el total, adecuada cuando las clases están razonablemente balanceadas. MAE y RMSE son métricas de regresión.',
  },
  {
    id: 77,
    certification: 'AIF-C01',
    domain: 'ai-ml-fundamentals',
    topic: 'Tipos de aprendizaje automático',
    services: [],
    difficulty: 'easy',
    type: 'single',
    question:
      'Una tienda en línea quiere agrupar clientes según demografía y comportamiento de compra sin etiquetas de segmento previas. ¿Qué algoritmo debe usar?',
    answers: [
      { id: 'A', text: 'Árbol de decisión (decision tree) supervisado' },
      { id: 'B', text: 'Máquina de vectores de soporte (SVM) supervisada' },
      { id: 'C', text: 'K-nearest neighbours (k-NN) para clasificación etiquetada' },
      { id: 'D', text: 'K-means (clustering)' },
    ],
    correctAnswers: ['D'],
    explanation:
      'K-means es un algoritmo de clustering no supervisado que particiona datos en grupos por similitud, ideal para segmentar clientes sin etiquetas.',
  },
  {
    id: 78,
    certification: 'AIF-C01',
    domain: 'ai-ml-fundamentals',
    topic: 'Amazon SageMaker',
    services: ['SageMaker', 'CloudWatch'],
    difficulty: 'easy',
    type: 'single',
    question:
      'La calidad de inferencia de un modelo cayó tras cuatro meses en producción. El equipo quiere alertas si vuelve a degradarse. ¿Qué solución encaja?',
    answers: [
      { id: 'A', text: 'Construir un modelo nuevo y monitorear drift con Amazon SageMaker Feature Store' },
      { id: 'B', text: 'Reentrenar el modelo y monitorear drift con Amazon SageMaker Model Monitor' },
      { id: 'C', text: 'Reentrenar el modelo y monitorear drift con Amazon SageMaker Clarify' },
      { id: 'D', text: 'Construir un modelo nuevo y vigilarlo solo con alarmas de Amazon CloudWatch' },
    ],
    correctAnswers: ['B'],
    explanation:
      'Amazon SageMaker Model Monitor detecta drift de datos y calidad de predicciones en producción y envía alertas, permitiendo reentrenar antes de más degradación.',
  },
  {
    id: 79,
    certification: 'AIF-C01',
    domain: 'ai-ml-fundamentals',
    topic: 'Tipos de datos',
    services: [],
    difficulty: 'easy',
    type: 'single',
    question:
      '¿Cuál de las siguientes es un ejemplo de datos no estructurados?',
    answers: [
      { id: 'A', text: 'Una tabla de base de datos con columnas de fecha, cantidad y precio de pedidos' },
      { id: 'B', text: 'Una hoja de cálculo con IDs, nombres y salarios de empleados' },
      { id: 'C', text: 'Una colección de correos de soporte redactados libremente por clientes' },
      { id: 'D', text: 'Un archivo CSV con lecturas de sensores indexadas por timestamp' },
    ],
    correctAnswers: ['C'],
    explanation:
      'Correos redactados libremente no tienen esquema fijo: varían en longitud, estilo y formato, característica de datos no estructurados.',
  },
  {
    id: 80,
    certification: 'AIF-C01',
    domain: 'ai-ml-fundamentals',
    topic: 'Amazon SageMaker',
    services: ['SageMaker', 'S3', 'EC2', 'CloudFront', 'EKS'],
    difficulty: 'easy',
    type: 'single',
    question:
      'Una inmobiliaria entrenó un modelo que predice precios de venta y quiere hospedarlo para predicciones sin administrar servidores. ¿Qué solución cumple esto?',
    answers: [
      { id: 'A', text: 'Desplegar el modelo en una instancia Amazon EC2' },
      { id: 'B', text: 'Desplegar el modelo con Amazon CloudFront e integración Amazon S3' },
      { id: 'C', text: 'Desplegar el modelo en un endpoint de Amazon SageMaker AI' },
      { id: 'D', text: 'Desplegar el modelo en un clúster de Amazon EKS' },
    ],
    correctAnswers: ['C'],
    explanation:
      'Un endpoint de Amazon SageMaker AI es gestionado: AWS administra servidores, escalado y mantenimiento, permitiendo servir predicciones sin gestionar infraestructura.',
  },
  {
    id: 81,
    certification: 'AIF-C01',
    domain: 'ai-ml-fundamentals',
    topic: 'Tipos de aprendizaje automático',
    services: [],
    difficulty: 'easy',
    type: 'single',
    question:
      'Una empresa agrícola necesita modelos para tareas relacionadas (detección de plagas, estimación de rendimiento, clasificación de suelo) y quiere reutilizar conocimiento de modelos preentrenados en lugar de entrenar desde cero. ¿Qué estrategia cumple esto?',
    answers: [
      { id: 'A', text: 'Aumentar solo el número de epochs sin cambiar el modelo base' },
      { id: 'B', text: 'Usar transfer learning (aprendizaje por transferencia)' },
      { id: 'C', text: 'Disminuir el número de epochs para evitar aprendizaje' },
      { id: 'D', text: 'Usar solo aprendizaje no supervisado sin datos etiquetados' },
    ],
    correctAnswers: ['B'],
    explanation:
      'Transfer learning (aprendizaje por transferencia) reutiliza un modelo preentrenado y lo adapta a tareas relacionadas, ahorrando tiempo y datos frente a entrenar desde cero.',
  },
  {
    id: 82,
    certification: 'AIF-C01',
    domain: 'ai-ml-fundamentals',
    topic: 'Tipos de aprendizaje automático',
    services: [],
    difficulty: 'easy',
    type: 'single',
    question:
      'Una constructora quiere estimar el precio de venta de departamentos a partir de metros cuadrados, ubicación y número de habitaciones. ¿Qué algoritmo debe usar?',
    answers: [
      { id: 'A', text: 'K-means' },
      { id: 'B', text: 'Regresión logística' },
      { id: 'C', text: 'Regresión lineal' },
      { id: 'D', text: 'K-nearest neighbours (k-NN)' },
    ],
    correctAnswers: ['C'],
    explanation:
      'Regresión lineal modela la relación entre features y un target numérico continuo, estándar para estimar precios de propiedades.',
  },
  {
    id: 83,
    certification: 'AIF-C01',
    domain: 'ai-ml-fundamentals',
    topic: 'Fundamentos de IA y ML',
    services: ['SageMaker', 'A2I', 'Inspector', 'Audit Manager'],
    difficulty: 'medium',
    type: 'single',
    question:
      'Un banco necesita flujos donde personal revise predicciones del modelo ML, con umbrales de confianza configurables que determinen cuándo escalar a revisión humana. ¿Qué servicio de AWS cumple esto?',
    answers: [
      { id: 'A', text: 'Amazon SageMaker Ground Truth' },
      { id: 'B', text: 'Amazon Inspector' },
      { id: 'C', text: 'Amazon Augmented AI (Amazon A2I)' },
      { id: 'D', text: 'AWS Audit Manager' },
    ],
    correctAnswers: ['C'],
    explanation:
      'Amazon A2I integra revisión humana en predicciones ML, permitiendo definir umbrales de confianza que envían casos dudosos a revisores humanos.',
  },
  {
    id: 84,
    certification: 'AIF-C01',
    domain: 'ai-ml-fundamentals',
    topic: 'Amazon SageMaker',
    services: ['SageMaker', 'Comprehend', 'Personalize', 'Athena'],
    difficulty: 'easy',
    type: 'single',
    question:
      'Una empresa quiere construir un modelo ML personalizado para predecir satisfacción del cliente con ajuste automático de hiperparámetros (automatic model tuning). ¿Qué servicio de AWS cumple esto de forma nativa?',
    answers: [
      { id: 'A', text: 'Amazon Athena' },
      { id: 'B', text: 'Amazon Personalize' },
      { id: 'C', text: 'Amazon Comprehend' },
      { id: 'D', text: 'Amazon SageMaker AI' },
    ],
    correctAnswers: ['D'],
    explanation:
      'Amazon SageMaker AI incluye Automatic Model Tuning para buscar hiperparámetros óptimos al entrenar modelos personalizados. Athena consulta datos; Personalize y Comprehend son servicios gestionados para otros casos de uso.',
  },
  {
    id: 85,
    certification: 'AIF-C01',
    domain: 'ai-ml-fundamentals',
    topic: 'Servicios de IA gestionados de AWS',
    services: ['Bedrock', 'Comprehend', 'Polly', 'Lex'],
    difficulty: 'easy',
    type: 'multiple',
    question:
      'Una cadena de restaurantes quiere analizar el sentimiento en reseñas escritas de clientes. ¿Qué dos servicios de AWS pueden cumplir esto? (Seleccione DOS.)',
    answers: [
      { id: 'A', text: 'Amazon Comprehend' },
      { id: 'B', text: 'Amazon Polly' },
      { id: 'C', text: 'Amazon Bedrock' },
      { id: 'D', text: 'Amazon Lex' },
    ],
    correctAnswers: ['A', 'C'],
    explanation:
      'Amazon Comprehend tiene análisis de sentimiento integrado para determinar tono positivo, negativo o neutral en texto. Amazon Bedrock accede a foundation models que también pueden clasificar sentimiento mediante prompting.',
  },
  {
    id: 86,
    certification: 'AIF-C01',
    domain: 'ai-ml-fundamentals',
    topic: 'Fundamentos de IA y ML',
    services: [],
    difficulty: 'easy',
    type: 'single',
    question:
      '¿Cuál de las siguientes NO es un tipo de machine learning?',
    answers: [
      { id: 'A', text: 'Aprendizaje supervisado (Supervised learning)' },
      { id: 'B', text: 'Aprendizaje no supervisado (Unsupervised learning)' },
      { id: 'C', text: 'Aprendizaje por refuerzo (Reinforcement learning)' },
      { id: 'D', text: 'Aprendizaje diagnóstico (Diagnostic learning)' },
    ],
    correctAnswers: ['D'],
    explanation:
      'Diagnostic learning no es un paradigma reconocido de ML ni aparece en la guía del examen AWS; es la opción que no corresponde.',
  },
  {
    id: 87,
    certification: 'AIF-C01',
    domain: 'ai-ml-fundamentals',
    topic: 'Servicios de IA gestionados de AWS',
    services: ['Textract', 'Comprehend', 'Polly', 'Kendra'],
    difficulty: 'easy',
    type: 'single',
    question:
      '¿Qué servicio de AWS puede detectar texto y escritura a mano en las facturas almacenadas en formato PNG?',
    answers: [
      { id: 'A', text: 'Amazon Kendra' },
      { id: 'B', text: 'Amazon Textract' },
      { id: 'C', text: 'Amazon Polly' },
      { id: 'D', text: 'Amazon Comprehend' },
    ],
    correctAnswers: ['B'],
    explanation:
      'Amazon Textract es un servicio completamente administrado que puede detectar y extraer texto y datos de documentos escaneados, archivos PDF e imágenes. Uno de sus casos prácticos es procesar facturas y recibos (por ejemplo, detectar direcciones de facturación y envío a partir de imágenes).',
  },
  {
    id: 88,
    certification: 'AIF-C01',
    domain: 'ai-ml-fundamentals',
    topic: 'Tipos de aprendizaje automático',
    services: ['Textract', 'Comprehend', 'Rekognition'],
    difficulty: 'medium',
    type: 'multiple',
    question:
      'Una empresa quiere identificar etiquetas personalizadas para clasificar las imágenes de productos nuevos según las imágenes históricas de los productos. ¿Con qué combinación de pasos se cumplirán estos requisitos? (Seleccione DOS opciones)',
    answers: [
      { id: 'A', text: 'Brindar las imágenes históricas no etiquetadas al entrenamiento de modelos.' },
      { id: 'B', text: 'Crear un modelo personalizado en Amazon Comprehend.' },
      { id: 'C', text: 'Etiquetar las imágenes históricas por categoría y brindar las imágenes etiquetadas al entrenamiento de modelos.' },
      { id: 'D', text: 'Crear un proyecto de modelo de entrenamiento en Amazon Rekognition.' },
    ],
    correctAnswers: ['C', 'D'],
    explanation:
      'Amazon Rekognition permite clasificación de productos con etiquetas personalizadas mediante un proyecto de entrenamiento de modelo. Para entrenar el modelo se deben proporcionar imágenes etiquetadas por categoría. Las imágenes no etiquetadas, Comprehend (texto) o Textract (documentos) no cumplen este caso de uso de clasificación de imágenes con etiquetas personalizadas.',
  },
  {
    id: 89,
    certification: 'AIF-C01',
    domain: 'ai-ml-fundamentals',
    topic: 'Métricas de evaluación',
    services: ['Translate', 'Transcribe', 'Lex'],
    difficulty: 'medium',
    type: 'single',
    question:
      'Una empresa desea obtener información de diversos orígenes de datos para mejorar las operaciones comerciales. Los orígenes de datos incluyen audios de centros de atención telefónica. ¿Qué solución mejorará la exactitud de la transcripción para el habla de un dominio específico?',
    answers: [
      { id: 'A', text: 'Utilizar un bot personalizado en Amazon Lex.' },
      { id: 'B', text: 'Utilizar la identificación del idioma por lotes en Amazon Transcribe.' },
      { id: 'C', text: 'Utilizar un modelo de lenguaje personalizado en Amazon Translate.' },
      { id: 'D', text: 'Utilizar un modelo de lenguaje personalizado en Amazon Transcribe.' },
    ],
    correctAnswers: ['D'],
    explanation:
      'Amazon Transcribe convierte voz en texto. Si el contenido incluye términos específicos de un dominio (nombres de marca, siglas, jerga técnica), un vocabulario o modelo de lenguaje personalizado en Amazon Transcribe mejora la exactitud de las transcripciones. Lex es para chatbots, Translate para traducción e identificación de idioma no aborda vocabulario de dominio.',
  },
  {
    id: 90,
    certification: 'AIF-C01',
    domain: 'ai-ml-fundamentals',
    topic: 'Métricas de evaluación',
    services: [],
    difficulty: 'easy',
    type: 'single',
    question:
      'Un científico de datos observa que un modelo tiene una exactitud alta en los datos de entrenamiento, pero tiene una exactitud baja en los datos de prueba. ¿Cuál es la causa de estos resultados?',
    answers: [
      { id: 'A', text: 'Infraajuste' },
      { id: 'B', text: 'Demasiados datos de entrenamiento' },
      { id: 'C', text: 'Sobreajuste' },
      { id: 'D', text: 'No se entrenó el tiempo suficiente' },
    ],
    correctAnswers: ['C'],
    explanation:
      'El sobreajuste se produce cuando un modelo aprende demasiado de los datos de entrenamiento y no generaliza bien a datos nuevos. Eso explica una exactitud alta en entrenamiento y baja en prueba. El infraajuste o el poco entrenamiento suelen dar mal rendimiento también en entrenamiento.',
  },
  {
    id: 91,
    certification: 'AIF-C01',
    domain: 'ai-ml-fundamentals',
    topic: 'Ciclo de vida de ML y MLOps',
    services: [],
    difficulty: 'medium',
    type: 'multiple',
    question:
      'Un equipo de ciencia de datos quiere mejorar el rendimiento de un modelo. El equipo de ciencia de datos quiere aumentar la cantidad de variables en el conjunto de datos de entrenamiento. ¿Qué pasos de canalización de ML cumplirán estos requisitos? (Seleccione DOS opciones)',
    answers: [
      { id: 'A', text: 'Supervisión del modelo' },
      { id: 'B', text: 'Ajuste de hiperparámetros' },
      { id: 'C', text: 'Ingeniería de características' },
      { id: 'D', text: 'Recopilación de datos' },
    ],
    correctAnswers: ['C', 'D'],
    explanation:
      'La ingeniería de características crea, transforma y selecciona variables para el modelo, aumentando o mejorando las características del conjunto de entrenamiento. La recopilación de datos agrega datos de más fuentes y puede aumentar las variables disponibles. Supervisión, evaluación y ajuste de hiperparámetros no aumentan por sí solos la cantidad de variables del dataset.',
  },
  {
    id: 92,
    certification: 'AIF-C01',
    domain: 'ai-ml-fundamentals',
    topic: 'Tipos de aprendizaje automático',
    services: [],
    difficulty: 'easy',
    type: 'single',
    question:
      'Un científico de datos está construyendo un modelo de clasificación de imágenes. Quiere que el modelo aprenda automáticamente, a partir de la imagen de entrada, características cada vez más abstractas de forma progresiva (bordes → texturas → partes del objeto → objeto completo). ¿Cuál es la arquitectura más adecuada para este propósito?',
    answers: [
      { id: 'A', text: 'Conjunto de árboles de decisión (bosque aleatorio)' },
      { id: 'B', text: 'Máquina de vectores de soporte (SVM)' },
      { id: 'C', text: 'Red neuronal profunda (red con múltiples capas ocultas)' },
      { id: 'D', text: 'Perceptrón simple (red neuronal de una sola capa)' },
    ],
    correctAnswers: ['C'],
    explanation:
      'Una red neuronal profunda con varias capas ocultas aprende jerarquías de características: capas superficiales captan bordes y las profundas el objeto completo.',
  },
  {
    id: 93,
    certification: 'AIF-C01',
    domain: 'ai-ml-fundamentals',
    topic: 'Fundamentos de IA y ML',
    services: [],
    difficulty: 'medium',
    type: 'single',
    question:
      'Una empresa minorista implantó un modelo de pronóstico de la demanda y alcanzó sus objetivos en las métricas técnicas, como el error de predicción. Sin embargo, en la reunión de dirección le señalan que "no se puede juzgar si este proyecto justificó la inversión". ¿Qué se debe medir adicionalmente para poder hacer ese juicio?',
    answers: [
      { id: 'A', text: 'Volver a medir el error de predicción con los datos de validación' },
      { id: 'B', text: 'La tasa de disponibilidad del punto de enlace de inferencia' },
      { id: 'C', text: 'Métricas de negocio, como el monto de reducción de los costos de inventario o la disminución de las oportunidades perdidas por falta de existencias' },
      { id: 'D', text: 'Comparar la precisión con algoritmos más recientes' },
    ],
    correctAnswers: ['C'],
    explanation:
      'Las métricas técnicas miden calidad del modelo; para justificar la inversión hay que medir resultados de negocio (costos, faltantes, ventas).',
  },
  {
    id: 94,
    certification: 'AIF-C01',
    domain: 'ai-ml-fundamentals',
    topic: 'Tipos de datos',
    services: [],
    difficulty: 'easy',
    type: 'single',
    question:
      'Una empresa minorista quiere predecir las ventas diarias de los próximos 3 meses usando los datos de ventas diarias de los últimos 3 años, para reflejarlo en su plan de aprovisionamiento. ¿Cuál es la técnica más adecuada para esta tarea?',
    answers: [
      { id: 'A', text: 'Clasificación de imágenes' },
      { id: 'B', text: 'Agrupación en clústeres (clustering)' },
      { id: 'C', text: 'Pronóstico de series temporales' },
      { id: 'D', text: 'Reducción de dimensionalidad' },
    ],
    correctAnswers: ['C'],
    explanation:
      'Predecir valores futuros a partir de series históricas con estacionalidad y tendencia es pronóstico de series temporales.',
  },
  {
    id: 95,
    certification: 'AIF-C01',
    domain: 'ai-ml-fundamentals',
    topic: 'Métricas de evaluación',
    services: [],
    difficulty: 'medium',
    type: 'single',
    question:
      'Al revisar la matriz de confusión en la evaluación de un modelo de clasificación se observa un número elevado de casos realmente positivos que fueron clasificados como negativos. ¿En qué uso resulta más problemática esta situación?',
    answers: [
      { id: 'A', text: 'La detección automática del idioma de un texto' },
      { id: 'B', text: 'Un cribado inicial para detectar a las personas con posible presencia de una enfermedad grave' },
      { id: 'C', text: 'La reordenación de las recomendaciones de productos que se muestran' },
      { id: 'D', text: 'La selección del público de una campaña publicitaria para mejorar el retorno de la inversión' },
    ],
    correctAnswers: ['B'],
    explanation:
      'Los falsos negativos (omitir casos positivos reales) son críticos en cribado médico, donde el coste de dejar fuera a un enfermo es muy alto.',
  },
  {
    id: 96,
    certification: 'AIF-C01',
    domain: 'ai-ml-fundamentals',
    topic: 'Métricas de evaluación',
    services: [],
    difficulty: 'medium',
    type: 'single',
    question:
      'El sistema de vigilancia de transacciones de una entidad financiera detecta las transacciones con sospecha de fraude y lo notifica al personal encargado. Como cada notificación genera un costo de revisión manual, se quiere reducir al máximo las falsas alarmas, es decir, los casos en que "se notificó como fraude pero en realidad era normal". ¿Qué métrica de evaluación se debe priorizar con este requisito?',
    answers: [
      { id: 'A', text: 'Exactitud (accuracy)' },
      { id: 'B', text: 'Precisión (precision)' },
      { id: 'C', text: 'Error cuadrático medio (MSE)' },
      { id: 'D', text: 'Exhaustividad (recall)' },
    ],
    correctAnswers: ['B'],
    explanation:
      'La precisión mide cuántos de los predichos como positivos lo son realmente; priorizarla reduce falsos positivos (falsas alarmas). El recall prioriza no omitir positivos.',
  },
  {
    id: 97,
    certification: 'AIF-C01',
    domain: 'ai-ml-fundamentals',
    topic: 'Tipos de aprendizaje automático',
    services: [],
    difficulty: 'easy',
    type: 'single',
    question:
      'Un equipo de ML está abordando dos tareas. La tarea A consiste en "predecir el importe de ventas del próximo mes" y la tarea B en "determinar si un correo electrónico es spam". ¿Cuál es la clasificación correcta de estas tareas?',
    answers: [
      { id: 'A', text: 'La tarea A es un problema de regresión y la tarea B es un problema de clasificación.' },
      { id: 'B', text: 'Ambas son problemas de clasificación.' },
      { id: 'C', text: 'Ambas son problemas de regresión.' },
      { id: 'D', text: 'La tarea A es un problema de clasificación y la tarea B es un problema de regresión.' },
    ],
    correctAnswers: ['A'],
    explanation:
      'Predecir un valor continuo (importe) es regresión; predecir una categoría discreta (spam/no spam) es clasificación.',
  },
  {
    id: 98,
    certification: 'AIF-C01',
    domain: 'ai-ml-fundamentals',
    topic: 'Fundamentos de IA y ML',
    services: [],
    difficulty: 'medium',
    type: 'single',
    question:
      'Un ingeniero de ML está preprocesando un conjunto de datos médicos. Algunas columnas del conjunto de datos contienen un 15 % de valores faltantes. La cantidad de datos es limitada y desea evitar eliminar filas. En esta situación, ¿qué enfoque se debe evitar?',
    answers: [
      { id: 'A', text: 'Añadir una columna con una bandera binaria que indique la presencia o ausencia de valor faltante y rellenar los valores faltantes con una constante.' },
      { id: 'B', text: 'Imputar los valores faltantes con la mediana de la misma columna.' },
      { id: 'C', text: 'Aplicar imputación múltiple, prediciendo los valores faltantes a partir de los valores de otras columnas.' },
      { id: 'D', text: 'Dejar los valores faltantes tal cual e introducirlos en el modelo.' },
    ],
    correctAnswers: ['D'],
    explanation:
      'Muchos algoritmos no procesan NaN directamente; dejar faltantes sin tratar provoca errores o peor rendimiento. Imputar o marcar faltantes son enfoques válidos.',
  },
  {
    id: 99,
    certification: 'AIF-C01',
    domain: 'ai-ml-fundamentals',
    topic: 'Métricas de evaluación',
    services: [],
    difficulty: 'easy',
    type: 'single',
    question:
      '¿Cómo se denomina el fenómeno por el cual un modelo de aprendizaje automático muestra una alta precisión sobre los datos de entrenamiento, pero su precisión cae notablemente sobre datos de prueba desconocidos?',
    answers: [
      { id: 'A', text: 'Sobreajuste (overfitting)' },
      { id: 'B', text: 'Subajuste (underfitting)' },
      { id: 'C', text: 'Regularización' },
      { id: 'D', text: 'Desvanecimiento del gradiente' },
    ],
    correctAnswers: ['A'],
    explanation:
      'El sobreajuste ocurre cuando el modelo memoriza el entrenamiento (incluido el ruido) y generaliza mal a datos nuevos.',
  },
  {
    id: 100,
    certification: 'AIF-C01',
    domain: 'ai-ml-fundamentals',
    topic: 'Métricas de evaluación',
    services: [],
    difficulty: 'easy',
    type: 'single',
    question:
      'Un científico de datos está desarrollando un modelo. Ha alcanzado una precisión del 98 % con los datos de entrenamiento, pero antes de usarlo en producción quiere comprobar que el modelo funcione de manera similar con datos desconocidos. ¿Cuál es el objetivo principal de dividir el conjunto de datos en entrenamiento, validación y prueba?',
    answers: [
      { id: 'A', text: 'Probar de forma independiente la canalización de preprocesamiento de datos en cada partición.' },
      { id: 'B', text: 'Entrenar distintos algoritmos en paralelo sobre cada partición y construir un modelo de conjunto.' },
      { id: 'C', text: 'Evaluar correctamente la capacidad de generalización del modelo y detectar el sobreajuste.' },
      { id: 'D', text: 'Reducir el consumo de memoria durante el entrenamiento y ahorrar recursos de GPU.' },
    ],
    correctAnswers: ['C'],
    explanation:
      'La partición permite evaluar con datos no vistos en el entrenamiento, detectar sobreajuste y ajustar hiperparámetros de forma correcta.',
  },
  {
    id: 101,
    certification: 'AIF-C01',
    domain: 'ai-ml-fundamentals',
    topic: 'Fundamentos de IA y ML',
    services: [],
    difficulty: 'easy',
    type: 'single',
    question:
      '¿Cuál de las siguientes opciones presenta el orden correcto de las etapas de la canalización habitual de un proyecto de machine learning?',
    answers: [
      { id: 'A', text: 'Definición del problema de negocio → recopilación y preprocesamiento de datos → entrenamiento del modelo → evaluación → despliegue → monitoreo' },
      { id: 'B', text: 'Recopilación y preprocesamiento de datos → definición del problema de negocio → entrenamiento del modelo → despliegue → evaluación → monitoreo' },
      { id: 'C', text: 'Definición del problema de negocio → entrenamiento del modelo → recopilación y preprocesamiento de datos → despliegue → monitoreo → evaluación' },
      { id: 'D', text: 'Entrenamiento del modelo → recopilación y preprocesamiento de datos → evaluación → definición del problema de negocio → despliegue → monitoreo' },
    ],
    correctAnswers: ['A'],
    explanation:
      'Primero se define el problema de negocio, luego datos, entrenamiento, evaluación, despliegue y monitoreo continuo.',
  },
  {
    id: 102,
    certification: 'AIF-C01',
    domain: 'ai-ml-fundamentals',
    topic: 'Métricas de evaluación',
    services: [],
    difficulty: 'medium',
    type: 'single',
    question:
      'Una empresa va a construir un sistema que calcula los importes de facturación según reglas ya establecidas, como el tipo del impuesto al consumo y las condiciones de descuento. Los resultados del cálculo exigen una exactitud y una coherencia del 100 %. ¿Cuál es el enfoque más adecuado para esta tarea?',
    answers: [
      { id: 'A', text: 'Implementarlo como un sistema basado en reglas' },
      { id: 'B', text: 'Hacer que una IA generativa genere los importes de facturación' },
      { id: 'C', text: 'Hacer que el aprendizaje por refuerzo explore el método de cálculo óptimo' },
      { id: 'D', text: 'Entrenar un modelo de aprendizaje supervisado con los datos de facturación históricos' },
    ],
    correctAnswers: ['A'],
    explanation:
      'Si las reglas son claras, deterministas y exigen 100 % de exactitud, un sistema basado en reglas es lo adecuado; el ML es probabilístico y no encaja.',
  },
  {
    id: 103,
    certification: 'AIF-C01',
    domain: 'ai-ml-fundamentals',
    topic: 'Tipos de inferencia',
    services: [],
    difficulty: 'easy',
    type: 'single',
    question:
      'Una empresa minorista ejecuta cada noche, de una sola vez, un modelo de previsión del número de clientes y elabora con ello el cuadro de personal del día siguiente. ¿Cuál es la descripción más adecuada de esta modalidad de procesamiento?',
    answers: [
      { id: 'A', text: 'Aprendizaje en línea (actualiza el modelo de forma incremental cada vez que llegan datos nuevos, sin esperar a un reentrenamiento programado)' },
      { id: 'B', text: 'Inferencia por lotes (procesa en conjunto los datos acumulados y los resultados se utilizan posteriormente)' },
      { id: 'C', text: 'Inferencia en tiempo real (devuelve una respuesta en el instante para cada solicitud)' },
      { id: 'D', text: 'Aprendizaje por transferencia (reutiliza en una tarea nueva el conocimiento que el modelo adquirió al entrenarse en otra tarea distinta)' },
    ],
    correctAnswers: ['B'],
    explanation:
      'Procesar de una vez datos acumulados (p. ej. cada noche) para uso posterior es inferencia por lotes (batch).',
  },
  {
    id: 104,
    certification: 'AIF-C01',
    domain: 'ai-ml-fundamentals',
    topic: 'Tipos de aprendizaje automático',
    services: ['SageMaker', 'A2I'],
    difficulty: 'easy',
    type: 'single',
    question:
      'Un equipo necesita etiquetar cientos de miles de imágenes para entrenar un modelo de clasificación de imágenes. ¿Qué servicio de AWS permite ganar eficiencia combinando la asignación de tareas a anotadores humanos con la asistencia de etiquetado automático mediante machine learning?',
    answers: [
      { id: 'A', text: 'Amazon SageMaker Ground Truth' },
      { id: 'B', text: 'Amazon Augmented AI (A2I)' },
      { id: 'C', text: 'Amazon SageMaker Model Monitor' },
      { id: 'D', text: 'Amazon SageMaker Feature Store' },
    ],
    correctAnswers: ['A'],
    explanation:
      'SageMaker Ground Truth gestiona etiquetado con humanos y etiquetado automático asistido por ML. A2I es revisión humana de predicciones en producción; Model Monitor y Feature Store tienen otros roles.',
  },
  {
    id: 105,
    certification: 'AIF-C01',
    domain: 'ai-ml-fundamentals',
    topic: 'Métricas de evaluación',
    services: [],
    difficulty: 'medium',
    type: 'single',
    question:
      'Una fintech puso en producción un modelo de detección de fraude con F1 score 0.94. Finanzas pregunta si el modelo “ya generó valor”. El equipo solo reporta F1, accuracy y recall. ¿Qué les falta medir para responder la pregunta de negocio?',
    answers: [
      { id: 'A', text: 'El retorno de la inversión (ROI) u otras métricas de impacto (ahorro, conversión, costo por alerta)' },
      { id: 'B', text: 'Solo el número de parámetros del modelo' },
      { id: 'C', text: 'Únicamente la temperatura de muestreo del modelo' },
      { id: 'D', text: 'La cantidad de regiones de AWS donde está desplegado' },
    ],
    correctAnswers: ['A'],
    explanation:
      'F1, accuracy y recall miden desempeño del modelo. El valor de negocio se mide con ROI, costos operativos, conversión u otras métricas de impacto.',
  },
  {
    id: 106,
    certification: 'AIF-C01',
    domain: 'ai-ml-fundamentals',
    topic: 'Sobreajuste, subajuste y generalización',
    services: [],
    difficulty: 'medium',
    type: 'single',
    question:
      'Un modelo clasifica bien el set de entrenamiento y también datos nuevos de producción que nunca vio. El equipo quiere nombrar correctamente esa capacidad. ¿Qué término la describe mejor?',
    answers: [
      { id: 'A', text: 'Sobreajuste (overfitting)' },
      { id: 'B', text: 'Fuga de datos (data leakage)' },
      { id: 'C', text: 'Ajuste adecuado / buen fit (fit): generaliza sin memorizar' },
      { id: 'D', text: 'Subajuste (underfitting)' },
    ],
    correctAnswers: ['C'],
    explanation:
      'Un buen ajuste (fit) generaliza a datos nuevos. El sobreajuste memoriza el entrenamiento; el subajuste ni siquiera captura el patrón de entrenamiento.',
  },
  {
    id: 107,
    certification: 'AIF-C01',
    domain: 'ai-ml-fundamentals',
    topic: 'Fundamentos de IA y ML',
    services: [],
    difficulty: 'easy',
    type: 'multiple',
    question:
      '¿Cuáles de los siguientes son ejemplos reales de aplicaciones de IA (AI)? (Seleccione 2)',
    answers: [
      { id: 'A', text: 'Detección de fraude' },
      { id: 'B', text: 'Backup automático de bases de datos' },
      { id: 'C', text: 'Compilación de código C++ tradicional' },
      { id: 'D', text: 'Sistemas de recomendación' },
    ],
    correctAnswers: ['A', 'D'],
    explanation:
      'Ejemplos típicos de aplicaciones de IA: detección de fraude y sistemas de recomendación (junto con visión, NLP, voz, pronósticos, etc.).',
  },
  {
    id: 108,
    certification: 'AIF-C01',
    domain: 'ai-ml-fundamentals',
    topic: 'Fundamentos de IA y ML',
    services: [],
    difficulty: 'easy',
    type: 'single',
    question:
      '¿Qué tipo de datos representa una secuencia de precios de una acción registrados cada minuto durante el día?',
    answers: [
      { id: 'A', text: 'Datos no estructurados de texto' },
      { id: 'B', text: 'Datos de imagen' },
      { id: 'C', text: 'Datos tabulares' },
      { id: 'D', text: 'Datos de serie temporal (time-series)' },
    ],
    correctAnswers: ['D'],
    explanation:
      'Una secuencia de valores ordenados en el tiempo es el ejemplo clásico de datos de serie temporal.',
  },
  {
    id: 109,
    certification: 'AIF-C01',
    domain: 'ai-ml-fundamentals',
    topic: 'Amazon SageMaker',
    services: ['SageMaker'],
    difficulty: 'medium',
    type: 'single',
    question:
      'Un hospital envía a SageMaker estudios de imagen de hasta ~800 MB. Cada inferencia puede tardar varios minutos y el cliente no puede quedarse bloqueado esperando la respuesta HTTP. ¿Qué opción de inferencia encaja mejor?',
    answers: [
      { id: 'A', text: 'Inferencia en tiempo real (real-time)' },
      { id: 'B', text: 'Inferencia asíncrona (asynchronous inference)' },
      { id: 'C', text: 'Ajuste fino (fine-tuning)' },
      { id: 'D', text: 'Preentrenamiento (pre-training)' },
    ],
    correctAnswers: ['B'],
    explanation:
      'La inferencia asíncrona encola solicitudes con payload grande y devuelve el resultado cuando está listo, sin bloquear al cliente.',
  },
  {
    id: 110,
    certification: 'AIF-C01',
    domain: 'ai-ml-fundamentals',
    topic: 'Servicios de IA gestionados de AWS',
    services: ['Comprehend', 'Polly', 'Transcribe', 'Lex'],
    difficulty: 'easy',
    type: 'single',
    question:
      '¿Qué servicio de AWS está diseñado específicamente para convertir texto en voz (text-to-speech)?',
    answers: [
      { id: 'A', text: 'Amazon Lex' },
      { id: 'B', text: 'Amazon Transcribe' },
      { id: 'C', text: 'Amazon Comprehend' },
      { id: 'D', text: 'Amazon Polly' },
    ],
    correctAnswers: ['D'],
    explanation:
      'Amazon Polly convierte texto en voz (text-to-speech). Transcribe hace voz a texto (speech-to-text), Comprehend analiza texto (NLP) y Lex construye interfaces conversacionales.',
  },
  {
    id: 111,
    certification: 'AIF-C01',
    domain: 'ai-ml-fundamentals',
    topic: 'Fundamentos de IA y ML',
    services: [],
    difficulty: 'hard',
    type: 'multiple',
    question:
      'Un regulador exige que un cálculo de impuestos produzca siempre el mismo número exacto a partir de las mismas entradas, sin estimaciones. El CFO además muestra que el costo de un modelo ML supera el ahorro esperado. ¿Cuáles son razones válidas para NO usar AI/ML aquí? (Seleccione 2)',
    answers: [
      { id: 'A', text: 'Se necesita un resultado específico/determinístico, no una predicción' },
      { id: 'B', text: 'El análisis costo-beneficio no justifica la solución' },
      { id: 'C', text: 'El equipo ya tiene experiencia con Python' },
      { id: 'D', text: 'El caso de uso involucra texto en varios idiomas' },
    ],
    correctAnswers: ['A', 'B'],
    explanation:
      'AI/ML no conviene cuando hace falta un resultado fijo (no una predicción) o cuando el costo-beneficio no cierra. Experiencia en Python o multilingüismo no son razones para descartarlo.',
  },
  {
    id: 112,
    certification: 'AIF-C01',
    domain: 'ai-ml-fundamentals',
    topic: 'Tipos de aprendizaje automático',
    services: [],
    difficulty: 'medium',
    type: 'multiple',
    question:
      'Una cadena de retail quiere ayudar a gerentes a priorizar reposición y, a la vez, automatizar tareas repetitivas de clasificación de tickets a escala. ¿Cuáles son razones válidas para adoptar AI/ML? (Seleccione 2)',
    answers: [
      { id: 'A', text: 'Asistir la toma de decisiones humanas' },
      { id: 'B', text: 'Escalar la solución y automatizar tareas repetitivas' },
      { id: 'C', text: 'Garantizar un resultado 100% determinístico en todos los casos' },
      { id: 'D', text: 'Eliminar por completo la necesidad de datos de entrenamiento' },
    ],
    correctAnswers: ['A', 'B'],
    explanation:
      'Asistir decisiones y escalar/automatizar son motivos típicos para AI/ML. Un resultado siempre determinístico o “sin datos” no encajan con ML.',
  },
  {
    id: 113,
    certification: 'AIF-C01',
    domain: 'ai-ml-fundamentals',
    topic: 'Tipos de aprendizaje automático',
    services: [],
    difficulty: 'easy',
    type: 'single',
    question:
      'Un sistema aprende por prueba y error, recibiendo una recompensa cuando el usuario interactúa positivamente con una sugerencia. ¿Qué tipo de aprendizaje es?',
    answers: [
      { id: 'A', text: 'Aprendizaje auto-supervisado (self-supervised learning)' },
      { id: 'B', text: 'Aprendizaje por refuerzo (reinforcement learning)' },
      { id: 'C', text: 'Aprendizaje supervisado (supervised learning)' },
      { id: 'D', text: 'Aprendizaje no supervisado (unsupervised learning)' },
    ],
    correctAnswers: ['B'],
    explanation:
      'El aprendizaje por refuerzo (reinforcement learning) se basa en recompensas o penalizaciones según las acciones del agente.',
  },
  {
    id: 114,
    certification: 'AIF-C01',
    domain: 'ai-ml-fundamentals',
    topic: 'Métricas de evaluación',
    services: [],
    difficulty: 'hard',
    type: 'single',
    question:
      'En detección de fraude, el modelo marca 100 transacciones como fraudulentas; 80 lo son de verdad. Por otro lado, hubo 120 fraudes reales en total y el modelo detectó 80. ¿Qué métrica corresponde a “de lo que marqué positivo, cuánto acerté”?',
    answers: [
      { id: 'A', text: 'Exhaustividad (recall)' },
      { id: 'B', text: 'Exactitud (accuracy)' },
      { id: 'C', text: 'Precisión (precision)' },
      { id: 'D', text: 'Puntuación F1 (F1 score)' },
    ],
    correctAnswers: ['C'],
    explanation:
      'Precisión = verdaderos positivos / (verdaderos positivos + falsos positivos). Aquí 80/100. Recall sería 80/120; F1 combina ambas; accuracy mira el total de predicciones.',
  },
  {
    id: 115,
    certification: 'AIF-C01',
    domain: 'ai-ml-fundamentals',
    topic: 'Servicios de IA gestionados de AWS',
    services: ['Comprehend', 'Translate', 'Transcribe', 'Lex'],
    difficulty: 'easy',
    type: 'single',
    question:
      '¿Cuál emparejamiento correcto describe Amazon Transcribe, Translate, Comprehend y Lex?',
    answers: [
      { id: 'A', text: 'Transcribe: voz a texto (speech-to-text) · Translate: traducción · Comprehend: PLN/NLP sobre texto · Lex: chatbots/voicebots' },
      { id: 'B', text: 'Transcribe: texto a voz (TTS) · Translate: agrupamiento (clustering) · Comprehend: facturación · Lex: almacenamiento' },
      { id: 'C', text: 'Transcribe: traducción · Translate: voz a texto (speech-to-text) · Comprehend: chatbots · Lex: PLN/NLP' },
      { id: 'D', text: 'Los cuatro hacen únicamente clasificación tabular' },
    ],
    correctAnswers: ['A'],
    explanation:
      'Transcribe (voz a texto), Translate, Comprehend (PLN/NLP) y Lex (conversacional) son servicios gestionados de IA/ML de AWS.',
  },
  {
    id: 116,
    certification: 'AIF-C01',
    domain: 'ai-ml-fundamentals',
    topic: 'Tipos de aprendizaje automático',
    services: [],
    difficulty: 'medium',
    type: 'single',
    question:
      'Marketing quiere segmentar clientes en grupos naturales para campañas, pero no tiene etiquetas previas de “segmento”. ¿Qué enfoque es el más apropiado?',
    answers: [
      { id: 'A', text: 'Clasificación supervisada' },
      { id: 'B', text: 'Regresión' },
      { id: 'C', text: 'Agrupamiento (clustering)' },
      { id: 'D', text: 'Aprendizaje por refuerzo (reinforcement learning)' },
    ],
    correctAnswers: ['C'],
    explanation:
      'El clustering es no supervisado: encuentra grupos sin etiquetas. Clasificación requiere etiquetas; regresión predice un valor continuo.',
  },
  {
    id: 117,
    certification: 'AIF-C01',
    domain: 'ai-ml-fundamentals',
    topic: 'Fundamentos de IA y ML',
    services: [],
    difficulty: 'medium',
    type: 'single',
    question:
      'Un equipo quiere servir un modelo con tráfico muy irregular (picos y horas en cero), sin administrar servidores, pagando solo cuando hay inferencias. ¿Qué tipo de inferencia describe mejor el escenario?',
    answers: [
      { id: 'A', text: 'Inferencia por lotes (batch)' },
      { id: 'B', text: 'Inferencia sin servidor (serverless inference)' },
      { id: 'C', text: 'Preentrenamiento (pre-training)' },
      { id: 'D', text: 'Ajuste fino (fine-tuning)' },
    ],
    correctAnswers: ['B'],
    explanation:
      'La inferencia serverless escala automáticamente y cobra por uso, ideal para tráfico intermitente sin gestionar infraestructura.',
  },
  {
    id: 118,
    certification: 'AIF-C01',
    domain: 'ai-ml-fundamentals',
    topic: 'Fundamentos de IA y ML',
    services: [],
    difficulty: 'easy',
    type: 'single',
    question:
      '¿Cuál de los siguientes es un ejemplo de dato NO estructurado?',
    answers: [
      { id: 'A', text: 'Una serie temporal de precios por hora' },
      { id: 'B', text: 'Una base de datos relacional de clientes' },
      { id: 'C', text: 'Una tabla de ventas en filas y columnas' },
      { id: 'D', text: 'Una imagen de una radiografía' },
    ],
    correctAnswers: ['D'],
    explanation:
      'Imágenes, texto libre o audio no tienen esquema fijo de filas y columnas.',
  },
  {
    id: 119,
    certification: 'AIF-C01',
    domain: 'generative-ai-fundamentals',
    topic: 'Arquitecturas de modelos generativos',
    services: [],
    difficulty: 'easy',
    type: 'single',
    question:
      'Un marketplace inmobiliario debe generar miles de descripciones únicas de propiedades al día, en párrafos con estilo y tono uniformes. ¿Qué tipo de modelo generativo cumple MEJOR estos requisitos de texto largo coherente?',
    answers: [
      { id: 'A', text: 'Un autoencoder variacional (variational autoencoder, VAE)' },
      { id: 'B', text: 'Un modelo de difusión (diffusion model)' },
      { id: 'C', text: 'Un modelo basado en transformers (transformer-based model)' },
      { id: 'D', text: 'Una red generativa adversarial (generative adversarial network, GAN)' },
    ],
    correctAnswers: ['C'],
    explanation:
      'Los transformers (p. ej. LLMs) generan texto coherente a escala con estilo controlable. VAE, difusión y GAN se usan más para representaciones latentes o generación de imágenes/audio que para párrafos de copy inmobiliario.',
  },
  {
    id: 120,
    certification: 'AIF-C01',
    domain: 'generative-ai-fundamentals',
    topic: 'Precios, tokens y capacidad en Bedrock',
    services: ['Bedrock'],
    difficulty: 'easy',
    type: 'single',
    question:
      'Una fintech opera un chatbot de soporte en Amazon Bedrock y ve que la factura mensual crece aunque el número de usuarios se mantiene estable. Al revisar logs, el equipo nota que cada solicitud reenvía el historial completo de la conversación en el prompt. ¿Qué aspecto del modelo de precios por tokens (token-based pricing) explica MEJOR este aumento de costo?',
    answers: [
      { id: 'A', text: 'El costo se basa solo en la cantidad de llamadas a la API, sin importar el tamaño del prompt' },
      { id: 'B', text: 'El costo aumenta con el total de tokens de entrada (input) y de salida (output) procesados por solicitud' },
      { id: 'C', text: 'El costo se determina únicamente por el tiempo de latencia (latency) que tarda el modelo' },
      { id: 'D', text: 'El costo depende solo de la cantidad de usuarios concurrentes conectados al chatbot' },
    ],
    correctAnswers: ['B'],
    explanation:
      'En Bedrock On-Demand, el cobro es por tokens de entrada y salida. Reenviar historiales largos infla los tokens de entrada en cada turno y eleva la factura aunque el número de usuarios no cambie.',
  },
  {
    id: 121,
    certification: 'AIF-C01',
    domain: 'generative-ai-fundamentals',
    topic: 'Agentes de IA generativa',
    services: [],
    difficulty: 'easy',
    type: 'single',
    question:
      'Una empresa logística construye un agente de IA que consulta inventario, reserva envíos y genera guías de despacho invocando APIs de proveedores externos. Quiere la capacidad agéntica (agentic AI) que permita esas acciones con MENOR rediseño del modelo base. ¿Qué capacidad es la correcta?',
    answers: [
      { id: 'A', text: 'Gestión de memoria (memory management) a largo plazo del agente' },
      { id: 'B', text: 'Uso de herramientas (tool use / tool calling) para invocar APIs externas' },
      { id: 'C', text: 'Fine-tuning completo del foundation model (FM) con todos los catálogos de proveedores' },
      { id: 'D', text: 'Caché de prompts (prompt caching) de conversaciones previas' },
    ],
    correctAnswers: ['B'],
    explanation:
      'El uso de herramientas permite al agente llamar APIs y sistemas externos sin reentrenar el FM. Memoria y caché ayudan al contexto, pero no ejecutan acciones en sistemas de terceros; el fine-tuning es más costoso e innecesario para orquestar APIs.',
  },
  {
    id: 122,
    certification: 'AIF-C01',
    domain: 'generative-ai-fundamentals',
    topic: 'Modelos fundacionales (Foundation Models)',
    services: ['Bedrock'],
    difficulty: 'easy',
    type: 'single',
    question:
      'Una startup sin equipo de ML dedicado quiere construir una app de IA generativa y evitar entrenar foundation models (FMs) desde cero. ¿Cuál es una ventaja principal de usar los servicios de IA generativa de AWS en este escenario?',
    answers: [
      { id: 'A', text: 'Los servicios siempre son gratuitos en producción' },
      { id: 'B', text: 'Garantizan un 100 % de precisión en todas las salidas' },
      { id: 'C', text: 'Reducen la barrera de entrada (barrier to entry) al ofrecer FMs e infraestructura administrada' },
      { id: 'D', text: 'Eliminan por completo la necesidad de escribir código de aplicación' },
    ],
    correctAnswers: ['C'],
    explanation:
      'AWS ofrece FMs preentrenados y APIs administradas (p. ej. Bedrock), lo que reduce la barrera frente a preentrenar modelos grandes. No son gratis ni perfectos, y la app sigue requiriendo integración.',
  },
  {
    id: 123,
    certification: 'AIF-C01',
    domain: 'generative-ai-fundamentals',
    topic: 'Modelos fundacionales (Foundation Models)',
    services: ['Bedrock'],
    difficulty: 'hard',
    type: 'single',
    question:
      'Una aseguradora recibe un alto volumen diario de consultas de siniestros y planea usar Agents for Amazon Bedrock para orquestar pasos como verificar póliza, consultar estado del reclamo y generar respuestas. ¿Cuál es el beneficio clave de estos agentes frente a solo invocar un foundation model (FM) con un prompt estático?',
    answers: [
      { id: 'A', text: 'Generar foundation models (FMs) personalizados para predecir necesidades del cliente' },
      { id: 'B', text: 'Elegir automáticamente el foundation model (FM) según métricas de leaderboard públicas' },
      { id: 'C', text: 'Automatizar tareas repetitivas y orquestar flujos de trabajo (workflows) de varios pasos con herramientas' },
      { id: 'D', text: 'Invocar varios foundation models (FMs) a la vez y fusionar sus resultados por votación' },
    ],
    correctAnswers: ['C'],
    explanation:
      'Agents for Amazon Bedrock orquestan flujos multi-paso e invocan herramientas/APIs, lo que reduce trabajo manual en procesos como siniestros. No sustituyen la creación de FMs ni garantizan fusión multi-modelo por defecto.',
  },
  {
    id: 124,
    certification: 'AIF-C01',
    domain: 'generative-ai-fundamentals',
    topic: 'Fundamentos de IA generativa',
    services: [],
    difficulty: 'easy',
    type: 'single',
    question:
      'Una startup edtech desarrolla una app donde el estudiante escribe una pregunta o fotografía un ejercicio, y la app devuelve una explicación escrita paso a paso. ¿Qué tipo de modelo debe impulsar la app?',
    answers: [
      { id: 'A', text: 'Un modelo solo de visión por computadora (computer vision) sin generación de texto' },
      { id: 'B', text: 'Un modelo de difusión (diffusion model) para síntesis de imágenes' },
      { id: 'C', text: 'Un large multimodal language model (modelo de lenguaje multimodal grande)' },
      { id: 'D', text: 'Un modelo de texto a voz (text-to-speech) sin comprensión de imagen' },
    ],
    correctAnswers: ['C'],
    explanation:
      'Un modelo multimodal acepta texto e imagen y genera texto explicativo. Visión sola, difusión o TTS no cubren a la vez entrada mixta y salida escrita pedagógica.',
  },
  {
    id: 125,
    certification: 'AIF-C01',
    domain: 'generative-ai-fundamentals',
    topic: 'Precios, tokens y capacidad en Bedrock',
    services: ['Bedrock'],
    difficulty: 'easy',
    type: 'single',
    question:
      'Un equipo estima costos de Amazon Bedrock y necesita entender la unidad que el proveedor usa para medir prompts y respuestas. En IA generativa, ¿qué es un token?',
    answers: [
      { id: 'A', text: 'Una función de seguridad (security feature) del perímetro de red' },
      { id: 'B', text: 'Un tipo de arquitectura de red neuronal (neural network)' },
      { id: 'C', text: 'Una unidad de texto (texto fragmentado) que el modelo procesa y genera' },
      { id: 'D', text: 'Una métrica de evaluación (evaluation metric) como exactitud' },
    ],
    correctAnswers: ['C'],
    explanation:
      'Un token es la unidad básica (palabra o subpalabra) que el modelo consume y produce; el precio y los límites de contexto se expresan en tokens.',
  },
  {
    id: 126,
    certification: 'AIF-C01',
    domain: 'generative-ai-fundamentals',
    topic: 'Fundamentos de IA generativa',
    services: [],
    difficulty: 'easy',
    type: 'single',
    question:
      'Un equipo compara un clasificador de fraude con un sistema que redacta informes narrativos a partir de datos. ¿Cuál diferencia describe correctamente modelos discriminativos (discriminative) frente a generativos (generative)?',
    answers: [
      { id: 'A', text: 'Los modelos discriminativos siempre son más rápidos que los generativos' },
      { id: 'B', text: 'Los modelos discriminativos siempre son más precisos que los generativos' },
      { id: 'C', text: 'Los discriminativos clasifican o predicen etiquetas; los generativos crean contenido nuevo' },
      { id: 'D', text: 'Los discriminativos siempre necesitan más datos de entrenamiento que los generativos' },
    ],
    correctAnswers: ['C'],
    explanation:
      'Los discriminativos aprenden límites de decisión o predicciones; los generativos modelan datos para producir contenido nuevo. Velocidad, precisión o volumen de datos no definen esa distinción.',
  },
  {
    id: 127,
    certification: 'AIF-C01',
    domain: 'generative-ai-fundamentals',
    topic: 'Fundamentos de IA generativa',
    services: [],
    difficulty: 'easy',
    type: 'single',
    question:
      'Un fabricante de sensores agrícolas IoT necesita ejecutar inferencia de modelos de lenguaje en el dispositivo, con la MENOR latencia posible y sin depender de la nube en cada predicción. ¿Qué solución cumple este requisito con MENOR esfuerzo operativo en el edge?',
    answers: [
      { id: 'A', text: 'Desplegar large language models (LLMs) sin comprimir en cada dispositivo edge' },
      { id: 'B', text: 'Desplegar small language models (SLMs) optimizados localmente en los dispositivos edge' },
      { id: 'C', text: 'Llamar de forma asíncrona a una API centralizada de small language model (SLM) desde el edge' },
      { id: 'D', text: 'Llamar de forma asíncrona a una API centralizada de large language model (LLM) desde el edge' },
    ],
    correctAnswers: ['B'],
    explanation:
      'Los SLMs caben en hardware edge limitado y mantienen la inferencia local, evitando idas a la red. LLMs grandes suelen ser inviables en el dispositivo; APIs centralizadas añaden latencia de red.',
  },
  {
    id: 128,
    certification: 'AIF-C01',
    domain: 'generative-ai-fundamentals',
    topic: 'Riesgos y limitaciones de la IA generativa',
    services: [],
    difficulty: 'easy',
    type: 'single',
    question:
      'Un chatbot de soporte genera a veces citas de políticas internas que no existen en la base documental. En IA generativa, ¿cómo se denomina este comportamiento?',
    answers: [
      { id: 'A', text: 'Una salida visual (visual output) del modelo' },
      { id: 'B', text: 'Un tipo de arquitectura de modelo (model architecture)' },
      { id: 'C', text: 'Una alucinación (hallucination): salida incorrecta o fabricada presentada como hecho' },
      { id: 'D', text: 'Un método de entrenamiento (training method) supervisado' },
    ],
    correctAnswers: ['C'],
    explanation:
      'Una alucinación es contenido fabricado o erróneo presentado con apariencia factual. No es una arquitectura ni un método de entrenamiento.',
  },
  {
    id: 129,
    certification: 'AIF-C01',
    domain: 'generative-ai-fundamentals',
    topic: 'Amazon Bedrock',
    services: ['SageMaker', 'Bedrock'],
    difficulty: 'easy',
    type: 'single',
    question:
      'Un equipo de ciencia de datos quiere arrancar rápido un proyecto de GenAI con modelos preentrenados y plantillas listas para desplegar en su cuenta. ¿Cuál es el beneficio principal de Amazon SageMaker JumpStart?',
    answers: [
      { id: 'A', text: 'Reduce automáticamente los costos de inferencia On-Demand de Bedrock' },
      { id: 'B', text: 'Proporciona acceso a modelos preentrenados y soluciones listas para usar' },
      { id: 'C', text: 'Ajusta automáticamente todos los hiperparámetros sin intervención' },
      { id: 'D', text: 'Administra el etiquetado humano de datos (human labeling) a escala' },
    ],
    correctAnswers: ['B'],
    explanation:
      'JumpStart ofrece un catálogo de modelos preentrenados, algoritmos y soluciones desplegables. No es el mecanismo de precios de Bedrock ni sustituye Autopilot o Ground Truth por sí solo.',
  },
  {
    id: 130,
    certification: 'AIF-C01',
    domain: 'generative-ai-fundamentals',
    topic: 'Fundamentos de IA generativa',
    services: [],
    difficulty: 'easy',
    type: 'single',
    question:
      'Una empresa procesa comentarios de empleados con reglas rígidas codificadas a mano y quiere escalar la lógica a nuevas filiales con poca reescritura. ¿Qué ventaja de los modelos de IA generativa aplica MEJOR a este escenario?',
    answers: [
      { id: 'A', text: 'Salidas siempre predecibles bit a bit' },
      { id: 'B', text: 'Adaptabilidad (adaptability) a nuevos contextos con poca reconfiguración manual' },
      { id: 'C', text: 'Menor sensibilidad a cambios en la entrada que un sistema de reglas' },
      { id: 'D', text: 'Explicabilidad (explainability) completa de cada decisión interna' },
    ],
    correctAnswers: ['B'],
    explanation:
      'La adaptabilidad permite generalizar a nuevos departamentos sin reescribir reglas. Los GenAI no garantizan determinismo total ni máxima explicabilidad; suelen ser más sensibles al wording del prompt.',
  },
  {
    id: 131,
    certification: 'AIF-C01',
    domain: 'generative-ai-fundamentals',
    topic: 'Precios, tokens y capacidad en Bedrock',
    services: ['SageMaker', 'Bedrock', 'EC2'],
    difficulty: 'easy',
    type: 'single',
    question:
      'Una revista digital prueba un asistente de redacción con IA generativa en Amazon Bedrock. El tráfico del piloto es bajo, el rendimiento (throughput) no es crítico y el uso futuro es impredecible; busca el MENOR costo sin compromisos de capacidad. ¿Qué opción cumple estos requisitos?',
    answers: [
      { id: 'A', text: 'Usar instancias Amazon EC2 con GPU dedicadas durante el piloto' },
      { id: 'B', text: 'Usar Amazon Bedrock con precios On-Demand (bajo demanda)' },
      { id: 'C', text: 'Usar Amazon Bedrock con Provisioned Throughput (capacidad aprovisionada)' },
      { id: 'D', text: 'Desplegar el modelo con Amazon SageMaker JumpStart en una flota fija' },
    ],
    correctAnswers: ['B'],
    explanation:
      'On-Demand cobra solo por las invocaciones realizadas, sin reserva de capacidad. Provisioned Throughput y flotas fijas implican costo comprometido innecesario cuando el uso es bajo e impredecible.',
  },
  {
    id: 132,
    certification: 'AIF-C01',
    domain: 'generative-ai-fundamentals',
    topic: 'Modelos fundacionales (Foundation Models)',
    services: [],
    difficulty: 'easy',
    type: 'single',
    question:
      'Un equipo de producto debate si construir un clasificador estrecho o adoptar un modelo grande preentrenado adaptable a resumen, Q&A y generación. ¿Qué es un foundation model (FM) en IA generativa?',
    answers: [
      { id: 'A', text: 'Un modelo que solo puede generar texto y nada más' },
      { id: 'B', text: 'Un modelo diseñado exclusivamente para generación de imágenes' },
      { id: 'C', text: 'Un modelo grande preentrenado que puede adaptarse a muchas tareas posteriores' },
      { id: 'D', text: 'Un modelo que no requiere datos de entrenamiento en ninguna etapa' },
    ],
    correctAnswers: ['C'],
    explanation:
      'Un FM se preentrena a gran escala y luego se adapta (prompting, RAG, fine-tuning) a múltiples tareas. No está limitado a un solo modality por definición ni elimina la necesidad de datos.',
  },
  {
    id: 133,
    certification: 'AIF-C01',
    domain: 'generative-ai-fundamentals',
    topic: 'Fundamentos de IA generativa',
    services: [],
    difficulty: 'easy',
    type: 'single',
    question:
      'Un equipo jurídico necesita condensar contratos extensos en puntos clave para acelerar la revisión humana. ¿Qué estrategia de IA generativa cumple este requisito?',
    answers: [
      { id: 'A', text: 'Regresión (regression) de variables numéricas' },
      { id: 'B', text: 'Resumen (summarization) de documentos largos' },
      { id: 'C', text: 'Clustering (agrupamiento) no supervisado de cláusulas sin narrativa' },
      { id: 'D', text: 'Clasificación (classification) binaria de riesgo únicamente' },
    ],
    correctAnswers: ['B'],
    explanation:
      'El resumen condensa documentos largos en ideas esenciales para revisión rápida. Regresión, clustering o clasificación no producen por sí solos el extracto narrativo requerido.',
  },
  {
    id: 134,
    certification: 'AIF-C01',
    domain: 'generative-ai-fundamentals',
    topic: 'Modelos fundacionales (Foundation Models)',
    services: ['Bedrock', 'Textract', 'Transcribe', 'Macie'],
    difficulty: 'easy',
    type: 'single',
    question:
      'Un equipo de call center recomienda productos según la ubicación del cliente de forma manual y quiere automatizar la generación de recomendaciones con foundation models (FMs) sin gestionar servidores de ML. ¿Qué servicio de AWS encaja MEJOR?',
    answers: [
      { id: 'A', text: 'Amazon Macie' },
      { id: 'B', text: 'Amazon Bedrock' },
      { id: 'C', text: 'Amazon Textract' },
      { id: 'D', text: 'Amazon Transcribe' },
    ],
    correctAnswers: ['B'],
    explanation:
      'Amazon Bedrock da acceso por API a FMs para generar recomendaciones o copy sin administrar infraestructura de modelos. Macie, Textract y Transcribe cubren datos sensibles, OCR y speech-to-text.',
  },
  {
    id: 135,
    certification: 'AIF-C01',
    domain: 'generative-ai-fundamentals',
    topic: 'Modelos fundacionales (Foundation Models)',
    services: [],
    difficulty: 'easy',
    type: 'single',
    question:
      'Un practicante revisa el ciclo de vida de un foundation model (FM) desde datos hasta producción. ¿Cuál de las siguientes NO es una etapa de ese ciclo de vida técnico?',
    answers: [
      { id: 'A', text: 'Fine-tuning (ajuste fino)' },
      { id: 'B', text: 'Marketing (comercialización del producto)' },
      { id: 'C', text: 'Pre-entrenamiento (pre-training)' },
      { id: 'D', text: 'Despliegue (deployment)' },
    ],
    correctAnswers: ['B'],
    explanation:
      'El ciclo técnico incluye pre-entrenamiento, fine-tuning, evaluación y despliegue. Marketing es una actividad de negocio, no una etapa del lifecycle del FM.',
  },
  {
    id: 136,
    certification: 'AIF-C01',
    domain: 'generative-ai-fundamentals',
    topic: 'Arquitecturas de modelos generativos',
    services: [],
    difficulty: 'easy',
    type: 'single',
    question:
      'Un equipo elige arquitectura para un modelo de lenguaje que debe capturar dependencias a larga distancia en el prompt. ¿Qué afirmación describe una característica definitoria de los transformers?',
    answers: [
      { id: 'A', text: 'Usan capas convolucionales (convolutional layers) para filtros locales sobre la entrada' },
      { id: 'B', text: 'Usan mecanismos de self-attention (autoatención) para capturar relaciones contextuales' },
      { id: 'C', text: 'Solo pueden procesar datos de texto y nunca otros modalities' },
      { id: 'D', text: 'Procesan la secuencia estrictamente un elemento a la vez en ciclos recurrentes' },
    ],
    correctAnswers: ['B'],
    explanation:
      'Self-attention pondera relaciones entre tokens en paralelo, base de los transformers. Convoluciones y recurrencia secuencial describen otras familias; los transformers también sostienen modelos multimodales.',
  },
  {
    id: 137,
    certification: 'AIF-C01',
    domain: 'generative-ai-fundamentals',
    topic: 'Amazon Nova',
    services: ['Bedrock', 'Nova'],
    difficulty: 'hard',
    type: 'single',
    question:
      'Una empresa de medios compara modelos Amazon Nova en Amazon Bedrock y necesita un modelo multimodal que soporte varios idiomas. ¿Qué modelo Nova cumple estos requisitos de forma MÁS rentable?',
    answers: [
      { id: 'A', text: 'Nova Pro' },
      { id: 'B', text: 'Nova Lite' },
      { id: 'C', text: 'Nova Canvas' },
      { id: 'D', text: 'Nova Reel' },
    ],
    correctAnswers: ['B'],
    explanation:
      'Amazon Nova Lite es un modelo multimodal de bajo costo que soporta varios idiomas, por lo que cumple los requisitos multimodales y multilingües como la opción Nova más rentable.',
  },
  {
    id: 138,
    certification: 'AIF-C01',
    domain: 'generative-ai-fundamentals',
    topic: 'Precios, tokens y capacidad en Bedrock',
    services: ['Bedrock', 'EC2'],
    difficulty: 'easy',
    type: 'single',
    question:
      'Una agencia creativa pequeña quiere prototipar apps de IA generativa en Amazon Bedrock con presupuesto ajustado y sin compromisos a largo plazo. ¿Qué modelo de precios de Amazon Bedrock minimiza el riesgo financiero en esta fase?',
    answers: [
      { id: 'A', text: 'Provisioned Throughput (capacidad aprovisionada) con compromiso mensual' },
      { id: 'B', text: 'Model customization (personalización de modelo) con entrenamiento continuo' },
      { id: 'C', text: 'On-Demand (bajo demanda), cobrando solo por tokens e invocaciones usados' },
      { id: 'D', text: 'Spot Instances de Amazon EC2 para hospedar el foundation model (FM)' },
    ],
    correctAnswers: ['C'],
    explanation:
      'On-Demand evita compromisos de capacidad y cobra solo por uso, ideal para prototipos. Provisioned Throughput y personalización aumentan costo fijo; Spot EC2 no es el modelo de precios nativo de Bedrock para FMs gestionados.',
  },
  {
    id: 139,
    certification: 'AIF-C01',
    domain: 'generative-ai-fundamentals',
    topic: 'Precios, tokens y capacidad en Bedrock',
    services: ['Bedrock', 'S3', 'EC2', 'Lambda'],
    difficulty: 'easy',
    type: 'single',
    question:
      'Una empresa fine-tuneó un large language model (LLM) personalizado en Amazon Bedrock y servirá en producción un número estable y predecible de solicitudes por minuto. ¿Qué opción es MÁS rentable?',
    answers: [
      { id: 'A', text: 'Desplegar el modelo en una instancia de Amazon EC2 optimizada para cómputo' },
      { id: 'B', text: 'Comprar Provisioned Throughput para el modelo en Amazon Bedrock' },
      { id: 'C', text: 'Usar el modelo con throughput On-Demand en Amazon Bedrock' },
      { id: 'D', text: 'Almacenar el modelo en Amazon S3 y hospedarlo con AWS Lambda' },
    ],
    correctAnswers: ['B'],
    explanation:
      'Para un volumen de solicitudes estable y predecible, Provisioned Throughput en Amazon Bedrock ofrece un costo por solicitud más bajo al comprometer un nivel fijo de throughput, lo que lo convierte en la forma más rentable de servir un modelo personalizado.',
  },
  {
    id: 140,
    certification: 'AIF-C01',
    domain: 'generative-ai-fundamentals',
    topic: 'Modelos fundacionales (Foundation Models)',
    services: ['Bedrock'],
    difficulty: 'easy',
    type: 'single',
    question:
      'Una startup sin infraestructura de ML quiere lanzar rápidamente una funcionalidad de IA generativa. ¿Qué ventaja de usar servicios GenAI de AWS como Amazon Bedrock es más relevante?',
    answers: [
      { id: 'A', text: 'La startup debe entrenar su propio foundation model desde cero' },
      { id: 'B', text: 'Los servicios GenAI de AWS reducen la barrera de entrada al proporcionar acceso administrado a foundation models preentrenados' },
      { id: 'C', text: 'Los servicios GenAI de AWS requieren que la startup administre clústeres de GPU' },
      { id: 'D', text: 'Los servicios GenAI de AWS solo están disponibles para clientes enterprise' },
    ],
    correctAnswers: ['B'],
    explanation:
      'Los servicios GenAI de AWS como Amazon Bedrock proporcionan acceso administrado a foundation models preentrenados mediante APIs, lo que reduce la barrera de entrada al eliminar la necesidad de entrenar modelos, administrar infraestructura o adquirir GPUs, permitiendo a la startup lanzar rápidamente.',
  },
  {
    id: 141,
    certification: 'AIF-C01',
    domain: 'generative-ai-fundamentals',
    topic: 'Amazon Bedrock',
    services: ['Bedrock'],
    difficulty: 'medium',
    type: 'single',
    question:
      'Una tienda de moda usa un asistente de IA generativa en Amazon Bedrock para recomendar productos y quiere medir el impacto directo en ventas, no solo engagement. ¿Qué métrica cumple este requisito?',
    answers: [
      { id: 'A', text: 'Cantidad de interacciones de clientes con el asistente' },
      { id: 'B', text: 'Puntajes de análisis de sentimiento (sentiment analysis) del feedback' },
      { id: 'C', text: 'Tasa de conversión (conversion rate) de clientes que compran tras interactuar con el asistente' },
      { id: 'D', text: 'Tasas de precisión de comprensión del lenguaje natural (NLU accuracy)' },
    ],
    correctAnswers: ['C'],
    explanation:
      'La tasa de conversión vincula la interacción con una compra. Interacciones, sentimiento o precisión NLU miden uso o calidad lingüística, no el impacto comercial directo.',
  },
  {
    id: 142,
    certification: 'AIF-C01',
    domain: 'generative-ai-fundamentals',
    topic: 'Amazon Bedrock',
    services: ['Bedrock', 'Polly', 'Rekognition', 'Q'],
    difficulty: 'easy',
    type: 'single',
    question:
      'Una edtech construye una app de lectura donde los niños agregan ilustraciones a sus cuentos a partir de descripciones en texto. ¿Qué solución cumple este requisito?',
    answers: [
      { id: 'A', text: 'Usar Amazon Polly para crear un audiolibro a partir del texto' },
      { id: 'B', text: 'Usar Amazon Rekognition para analizar imágenes existentes y detectar texto' },
      { id: 'C', text: 'Usar Amazon Bedrock con un modelo de difusión (p. ej. Stable Diffusion) para generar imágenes desde texto' },
      { id: 'D', text: 'Usar Amazon Q Business para ilustrar cuentos infantiles automáticamente' },
    ],
    correctAnswers: ['C'],
    explanation:
      'Los modelos de text-to-image en Bedrock generan ilustraciones desde prompts. Polly es TTS, Rekognition analiza imágenes y Q Business es un asistente empresarial, no un generador de ilustraciones infantiles.',
  },
  {
    id: 143,
    certification: 'AIF-C01',
    domain: 'generative-ai-fundamentals',
    topic: 'Fundamentos de IA generativa',
    services: [],
    difficulty: 'medium',
    type: 'single',
    question:
      'Un equipo de DevOps quiere que un large language model (LLM) produzca scripts de infraestructura a partir de comentarios en lenguaje natural. ¿De qué capacidad del LLM depende esto principalmente?',
    answers: [
      { id: 'A', text: 'Resumen de texto (text summarization)' },
      { id: 'B', text: 'Clasificación de texto (text classification)' },
      { id: 'C', text: 'Generación de texto (text generation)' },
      { id: 'D', text: 'Completado de texto (text completion) limitado a continuar una frase parcial' },
    ],
    correctAnswers: ['C'],
    explanation:
      'La generación de texto crea contenido nuevo (aquí, código/scripts) a partir de instrucciones. Resumen y clasificación no escriben scripts; el completion estricto es un caso más estrecho que el requisito descrito.',
  },
  {
    id: 144,
    certification: 'AIF-C01',
    domain: 'generative-ai-fundamentals',
    topic: 'Arquitecturas de modelos generativos',
    services: [],
    difficulty: 'medium',
    type: 'single',
    question:
      'Una farmacéutica necesita generar datos sintéticos (synthetic data) que imiten la distribución de ensayos clínicos existentes para pruebas internas. ¿Qué tipo de modelo puede usar?',
    answers: [
      { id: 'A', text: 'XGBoost' },
      { id: 'B', text: 'WaveNet' },
      { id: 'C', text: 'Generative adversarial network (GAN, red generativa adversarial)' },
      { id: 'D', text: 'Red neuronal residual (ResNet)' },
    ],
    correctAnswers: ['C'],
    explanation:
      'Las GAN aprenden a generar muestras realistas compitiendo generador vs discriminador, útiles para datos sintéticos. XGBoost y ResNet son discriminativos/predictivos; WaveNet se orienta a audio.',
  },
  {
    id: 145,
    certification: 'AIF-C01',
    domain: 'generative-ai-fundamentals',
    topic: 'Amazon Nova',
    services: ['Bedrock', 'Nova'],
    difficulty: 'medium',
    type: 'single',
    question:
      'Una productora de contenido audiovisual quiere usar IA generativa para crear clips nuevos y reducir tiempos de producción. ¿Qué solución cumple estos requisitos con MAYOR eficiencia operativa?',
    answers: [
      { id: 'A', text: 'Usar el modelo Amazon Titan Image Generator en Amazon Bedrock para crear imágenes intermedias y luego armar videos con software de edición' },
      { id: 'B', text: 'Usar el modelo Amazon Nova Reel en Amazon Bedrock para generar videos' },
      { id: 'C', text: 'Usar el modelo Amazon Nova Canvas en Amazon Bedrock para crear imágenes intermedias y luego armar videos con software de edición' },
      { id: 'D', text: 'Usar el modelo Amazon Nova Pro en Amazon Bedrock para generar videos' },
    ],
    correctAnswers: ['B'],
    explanation:
      'El modelo Amazon Nova Reel en Amazon Bedrock está diseñado para creación generativa de video, por lo que permite a la productora generar contenido de video directamente y reducir tiempos de producción de la forma más eficiente operativamente.',
  },
  {
    id: 146,
    certification: 'AIF-C01',
    domain: 'generative-ai-fundamentals',
    topic: 'Fundamentos de IA generativa',
    services: [],
    difficulty: 'medium',
    type: 'single',
    question:
      'Una firma contable invirtió en IA generativa para automatizar la redacción de informes financieros y quiere saber si la inversión generó valor financiero. ¿Qué métrica mide MEJOR ese valor?',
    answers: [
      { id: 'A', text: 'Retorno de la inversión (return on investment, ROI)' },
      { id: 'B', text: 'Precisión del modelo (model accuracy) únicamente' },
      { id: 'C', text: 'Cantidad de parámetros del modelo' },
      { id: 'D', text: 'Volumen de datos de entrenamiento' },
    ],
    correctAnswers: ['A'],
    explanation:
      'El ROI compara beneficios (ahorro, productividad) frente al costo de la solución. Precisión, parámetros o tamaño del dataset no miden por sí solos el valor financiero de la inversión.',
  },
  {
    id: 147,
    certification: 'AIF-C01',
    domain: 'generative-ai-fundamentals',
    topic: 'Precios, tokens y capacidad en Bedrock',
    services: ['SageMaker', 'Bedrock'],
    difficulty: 'hard',
    type: 'single',
    question:
      'Una empresa resume contratos con un modelo base de Amazon Bedrock y luego crea un modelo personalizado (custom model) mediante fine-tuning para mejorar la calidad. ¿Qué debe hacer para invocar ese modelo personalizado en Amazon Bedrock en producción?',
    answers: [
      { id: 'A', text: 'Desplegar el modelo personalizado en un endpoint de Amazon SageMaker AI para inferencia en tiempo real' },
      { id: 'B', text: 'Registrar el modelo solo en Amazon SageMaker Model Registry sin más pasos' },
      { id: 'C', text: 'Solicitar acceso al modelo personalizado en la consola de Amazon Bedrock' },
      { id: 'D', text: 'Comprar Provisioned Throughput (capacidad aprovisionada) para el modelo personalizado' },
    ],
    correctAnswers: ['D'],
    explanation:
      'Los modelos personalizados en Amazon Bedrock se sirven mediante Provisioned Throughput dedicado; no bastan el Model Registry ni un endpoint de SageMaker para invocarlos vía la API de Bedrock.',
  },
  {
    id: 148,
    certification: 'AIF-C01',
    domain: 'generative-ai-fundamentals',
    topic: 'Fundamentos de IA generativa',
    services: ['Q'],
    difficulty: 'medium',
    type: 'single',
    question:
      'Una empresa quiere que empleados hagan preguntas en lenguaje natural sobre políticas y documentos internos con controles de acceso. ¿Cuál es el propósito principal de Amazon Q Business?',
    answers: [
      { id: 'A', text: 'Entrenar modelos de ML personalizados desde cero' },
      { id: 'B', text: 'Almacenar grandes conjuntos de datos como data lake' },
      { id: 'C', text: 'Proporcionar asistencia empresarial impulsada por IA sobre los datos de la compañía' },
      { id: 'D', text: 'Monitorear infraestructura de cómputo y alarmas' },
    ],
    correctAnswers: ['C'],
    explanation:
      'Amazon Q Business es un asistente de GenAI conectado a fuentes empresariales para Q&A y productividad, respetando permisos. No reemplaza entrenamiento custom, almacenamiento ni monitoreo de infra.',
  },
  {
    id: 149,
    certification: 'AIF-C01',
    domain: 'generative-ai-fundamentals',
    topic: 'Riesgos y limitaciones de la IA generativa',
    services: [],
    difficulty: 'easy',
    type: 'single',
    question:
      'Un practicante observa que un large language model (LLM) devuelve respuestas distintas ante la misma entrada en ejecuciones sucesivas. ¿Qué riesgo o propiedad de la IA describe esto?',
    answers: [
      { id: 'A', text: 'Alucinaciones (hallucinations)' },
      { id: 'B', text: 'No determinismo (nondeterminism)' },
      { id: 'C', text: 'Precisión (accuracy)' },
      { id: 'D', text: 'Multimodalidad (multimodality)' },
    ],
    correctAnswers: ['B'],
    explanation:
      'El no determinismo refleja variabilidad de salidas ante la misma entrada (temperatura/muestreo). Una alucinación es contenido falso; precisión y multimodalidad son conceptos distintos.',
  },
  {
    id: 150,
    certification: 'AIF-C01',
    domain: 'generative-ai-fundamentals',
    topic: 'Modelos fundacionales (Foundation Models)',
    services: ['SageMaker', 'Bedrock', 'Personalize', 'VPC', 'PartyRock'],
    difficulty: 'medium',
    type: 'single',
    question:
      'Un equipo de ciencia de datos quiere desplegar un foundation model (FM) rápidamente dentro de su propia VPC. ¿Qué opción de AWS permite hacerlo con plantillas y modelos listos?',
    answers: [
      { id: 'A', text: 'Amazon Personalize' },
      { id: 'B', text: 'PartyRock, un playground de Amazon Bedrock' },
      { id: 'C', text: 'Amazon SageMaker JumpStart' },
      { id: 'D', text: 'Un endpoint genérico de Amazon SageMaker AI sin catálogo de FMs' },
    ],
    correctAnswers: ['C'],
    explanation:
      'SageMaker JumpStart facilita desplegar FMs preconstruidos en la cuenta/VPC del cliente. Personalize es recomendaciones, PartyRock es playground de prototipos y un endpoint vacío no aporta el catálogo listo.',
  },
  {
    id: 151,
    certification: 'AIF-C01',
    domain: 'generative-ai-fundamentals',
    topic: 'Agentes de IA generativa',
    services: ['SageMaker', 'Bedrock', 'Polly', 'Kendra', 'AgentCore'],
    difficulty: 'hard',
    type: 'single',
    question:
      'Una empresa necesita infraestructura administrada para desplegar, escalar y monitorear agentes de IA en producción sin gestionar cómputo ni red subyacentes. ¿Qué servicio de AWS cumple este requisito con MENOR esfuerzo operativo?',
    answers: [
      { id: 'A', text: 'Amazon Bedrock AgentCore' },
      { id: 'B', text: 'Amazon SageMaker Canvas' },
      { id: 'C', text: 'Amazon Kendra' },
      { id: 'D', text: 'Amazon Polly' },
    ],
    correctAnswers: ['A'],
    explanation:
      'Amazon Bedrock AgentCore proporciona runtime e infraestructura administrada para agentes en producción. Canvas, Kendra y Polly resuelven ML sin código, búsqueda empresarial o texto a voz, no el hosting operativo de agentes.',
  },
  {
    id: 152,
    certification: 'AIF-C01',
    domain: 'generative-ai-fundamentals',
    topic: 'Ingeniería de prompts',
    services: ['Bedrock'],
    difficulty: 'easy',
    type: 'single',
    question:
      'Un analista mejora las respuestas de un chatbot en Amazon Bedrock refinando instrucciones, ejemplos y restricciones en el texto de entrada, sin reentrenar el modelo. ¿Qué práctica describe esto?',
    answers: [
      { id: 'A', text: 'Un método para comprimir modelos (model compression) y ejecutarlos más rápido' },
      { id: 'B', text: 'Prompt engineering: diseñar prompts de entrada efectivos para guiar las salidas del modelo' },
      { id: 'C', text: 'Diseñar la arquitectura de red neuronal (neural architecture design) del FM' },
      { id: 'D', text: 'Etiquetar datos de entrenamiento para aprendizaje supervisado (supervised learning)' },
    ],
    correctAnswers: ['B'],
    explanation:
      'Prompt engineering optimiza la entrada para guiar al modelo. No es compresión, diseño de arquitectura ni etiquetado de datasets.',
  },
  {
    id: 153,
    certification: 'AIF-C01',
    domain: 'generative-ai-fundamentals',
    topic: 'Fundamentos de IA generativa',
    services: ['Polly', 'Rekognition', 'Q', 'HealthScribe'],
    difficulty: 'easy',
    type: 'single',
    question:
      'Un hospital necesita una herramienta de IA generativa con speech-to-text orientada a dictado clínico y notas médicas. ¿Qué servicio de AWS cumple este requisito?',
    answers: [
      { id: 'A', text: 'Amazon Q Developer' },
      { id: 'B', text: 'Amazon Polly' },
      { id: 'C', text: 'AWS HealthScribe' },
      { id: 'D', text: 'Amazon Rekognition' },
    ],
    correctAnswers: ['C'],
    explanation:
      'AWS HealthScribe combina reconocimiento de voz e IA generativa para notas clínicas. Q Developer ayuda a desarrolladores, Polly es texto a voz y Rekognition analiza imágenes/video.',
  },
  {
    id: 154,
    certification: 'AIF-C01',
    domain: 'generative-ai-fundamentals',
    topic: 'Modelos fundacionales (Foundation Models)',
    services: ['Bedrock'],
    difficulty: 'medium',
    type: 'single',
    question:
      'Un equipo de producto usa un foundation model (FM) en Amazon Bedrock y quiere reducir costo y, si es posible, latencia, sin cambiar de modelo. ¿Cómo afecta reducir el límite máximo de tokens de salida (max output tokens)?',
    answers: [
      { id: 'A', text: 'Aumenta el costo pero no afecta el tiempo de respuesta' },
      { id: 'B', text: 'Disminuye el costo y puede reducir el tiempo de respuesta' },
      { id: 'C', text: 'No tiene efecto en el costo ni en el tiempo de respuesta' },
      { id: 'D', text: 'Aumenta el tiempo de respuesta pero disminuye el costo' },
    ],
    correctAnswers: ['B'],
    explanation:
      'Menos tokens de salida generados implican menor cobro por tokens y, en general, menos trabajo de decodificación, lo que puede acortar la latencia. No aumenta el costo ni alarga la respuesta por sí solo.',
  },
  {
    id: 155,
    certification: 'AIF-C01',
    domain: 'generative-ai-fundamentals',
    topic: 'Embeddings y espacio latente',
    services: [],
    difficulty: 'medium',
    type: 'single',
    question:
      'Un equipo construye recuperación semántica para un RAG y necesita representar textos como vectores comparables. En un large language model (LLM), ¿qué permiten los vector embeddings (incrustaciones vectoriales)?',
    answers: [
      { id: 'A', text: 'Dividir texto en fragmentos (chunking) manejables de datos' },
      { id: 'B', text: 'Comparar textos matemáticamente mediante similitud o distancia entre vectores' },
      { id: 'C', text: 'Agrupar caracteres en una sola unidad de tokenización únicamente' },
      { id: 'D', text: 'Contar cada palabra en la entrada para facturación' },
    ],
    correctAnswers: ['B'],
    explanation:
      'Los embeddings mapean texto a vectores de significado para comparar similitud. Chunking y tokenización son pasos distintos; contar palabras no es el rol de los embeddings.',
  },
  {
    id: 156,
    certification: 'AIF-C01',
    domain: 'generative-ai-fundamentals',
    topic: 'Modelos fundacionales (Foundation Models)',
    services: ['Bedrock', 'S3', 'EC2'],
    difficulty: 'medium',
    type: 'single',
    question:
      'Una empresa personalizó un foundation model (FM) en Amazon Bedrock y debe cargar un conjunto de datos para que Bedrock valide las respuestas del modelo. ¿Dónde debe almacenar ese dataset para integrarlo correctamente con Bedrock?',
    answers: [
      { id: 'A', text: 'Amazon Elastic Block Store (Amazon EBS) adjunto a una instancia EC2' },
      { id: 'B', text: 'AWS Snowcone como dispositivo físico de transferencia' },
      { id: 'C', text: 'Amazon S3 (Simple Storage Service)' },
      { id: 'D', text: 'Amazon Elastic File System (Amazon EFS) montado en un notebook' },
    ],
    correctAnswers: ['C'],
    explanation:
      'Amazon Bedrock espera los datasets de personalización y evaluación en Amazon S3. EBS, EFS y Snowcone no son el almacén de integración estándar para esos flujos de Bedrock.',
  },
  {
    id: 157,
    certification: 'AIF-C01',
    domain: 'generative-ai-fundamentals',
    topic: 'Agentes de IA generativa',
    services: [],
    difficulty: 'hard',
    type: 'single',
    question:
      'Una empresa de servicios financieros quiere que varios agentes de IA especializados colaboren en solicitudes complejas: uno consulta cuentas, otro procesa transacciones y otro verifica cumplimiento (compliance). ¿Qué concepto de IA agéntica representa esta arquitectura con MENOR acoplamiento monolítico?',
    answers: [
      { id: 'A', text: 'Aprendizaje por refuerzo (reinforcement learning) de un único agente generalista' },
      { id: 'B', text: 'Patrón de sistema multiagente (multi-agent system) con colaboración entre especialistas' },
      { id: 'C', text: 'Pipeline de clasificación supervisada (supervised classification) de tickets' },
      { id: 'D', text: 'Flujo de trabajo de inferencia por lotes (batch inference) programada' },
    ],
    correctAnswers: ['B'],
    explanation:
      'Un sistema multiagente reparte responsabilidades entre agentes especializados que colaboran. Un solo agente RL, un clasificador supervisado o batch inference no modelan esa orquestación colaborativa.',
  },
  {
    id: 158,
    certification: 'AIF-C01',
    domain: 'generative-ai-fundamentals',
    topic: 'Modelos fundacionales (Foundation Models)',
    services: ['Nova', 'Comprehend', 'Polly', 'Rekognition'],
    difficulty: 'medium',
    type: 'single',
    question:
      'Una empresa de medios quiere usar foundation models desarrollados por AWS para generar copy de marketing e imágenes. ¿Qué oferta proporciona FMs de primera parte (first-party) construidos por Amazon?',
    answers: [
      { id: 'A', text: 'Amazon Rekognition' },
      { id: 'B', text: 'Amazon Nova' },
      { id: 'C', text: 'Amazon Comprehend' },
      { id: 'D', text: 'Amazon Polly' },
    ],
    correctAnswers: ['B'],
    explanation:
      'Amazon Nova es la familia de FMs de Amazon para texto, imagen y más modalities. Rekognition, Comprehend y Polly son servicios de IA aplicados, no la familia FM generativa de primera parte.',
  },
  {
    id: 159,
    certification: 'AIF-C01',
    domain: 'generative-ai-fundamentals',
    topic: 'Amazon Bedrock',
    services: ['SageMaker', 'Bedrock', 'Q', 'PartyRock'],
    difficulty: 'hard',
    type: 'single',
    question:
      'Un arquitecto debe emparejar ofertas de IA generativa de AWS con su propósito principal: • Amazon Bedrock • Amazon SageMaker JumpStart • Amazon Q Business • PartyRock ¿Qué mapeo es correcto?',
    answers: [
      { id: 'A', text: 'Amazon Bedrock → hub de FMs y plantillas para desplegar/afinar en SageMaker; SageMaker JumpStart → asistente empresarial sobre datos internos; Amazon Q Business → playground sin código ni cuenta AWS; PartyRock → API unificada a FMs de varios proveedores' },
      { id: 'B', text: 'Amazon Bedrock → playground sin código sin cuenta AWS; SageMaker JumpStart → asistente empresarial; Amazon Q Business → hub de FMs en SageMaker; PartyRock → API unificada a FMs de varios proveedores' },
      { id: 'C', text: 'Amazon Bedrock → acceso unificado por API a foundation models (FMs) de varios proveedores; Amazon SageMaker JumpStart → hub de FMs preconstruidos y plantillas desplegables/afinables; Amazon Q Business → asistente de IA generativa sobre datos y documentos empresariales; PartyRock → playground sin código para prototipar apps de GenAI' },
      { id: 'D', text: 'Amazon Bedrock → hub de FMs en SageMaker; SageMaker JumpStart → API unificada a FMs de varios proveedores; Amazon Q Business → asistente empresarial; PartyRock → playground sin código' },
    ],
    correctAnswers: ['C'],
    explanation:
      'Bedrock expone FMs vía API; JumpStart ofrece modelos y soluciones en SageMaker; Q Business razona sobre datos empresariales conectados; PartyRock es un playground de prototipado rápido sin código.',
  },
  {
    id: 160,
    certification: 'AIF-C01',
    domain: 'generative-ai-fundamentals',
    topic: 'Fundamentos de IA generativa',
    services: ['Q', 'EC2'],
    difficulty: 'medium',
    type: 'single',
    question:
      'Un analista de retail quiere que se generen automáticamente gráficos de ventas de productos top por tienda del último año a partir de preguntas en lenguaje natural. ¿Qué solución de AWS se ajusta?',
    answers: [
      { id: 'A', text: 'Amazon Q Developer' },
      { id: 'B', text: 'Amazon Q in Amazon QuickSight' },
      { id: 'C', text: 'Amazon Q in AWS Chatbot' },
      { id: 'D', text: 'Amazon Q in Amazon EC2' },
    ],
    correctAnswers: ['B'],
    explanation:
      'Amazon Q en QuickSight genera visualizaciones y responde preguntas de BI en lenguaje natural. Q Developer es para código; Chatbot/EC2 no generan esos gráficos de negocio.',
  },
  {
    id: 161,
    certification: 'AIF-C01',
    domain: 'generative-ai-fundamentals',
    topic: 'Fundamentos de IA generativa',
    services: [],
    difficulty: 'easy',
    type: 'single',
    question:
      'Una agencia de publicidad evalúa casos de uso de IA generativa para una campaña. ¿Cuál es un caso de uso de IA generativa?',
    answers: [
      { id: 'A', text: 'Mejorar la seguridad de red con un sistema de detección de intrusiones' },
      { id: 'B', text: 'Pronosticar tendencias bursátiles solo con modelos predictivos clásicos' },
      { id: 'C', text: 'Generar imágenes fotorrealistas a partir de descripciones de texto para creatividades' },
      { id: 'D', text: 'Acelerar consultas a bases de datos con indexación optimizada' },
    ],
    correctAnswers: ['C'],
    explanation:
      'Generar imágenes desde texto es creación de contenido nuevo, típico de GenAI. IDS, forecasting clásico e indexación son analítica/seguridad/infra, no generación creativa.',
  },
  {
    id: 162,
    certification: 'AIF-C01',
    domain: 'generative-ai-fundamentals',
    topic: 'Modelos fundacionales (Foundation Models)',
    services: ['Bedrock'],
    difficulty: 'medium',
    type: 'single',
    question:
      'Al elegir un foundation model (FM) en Amazon Bedrock, un equipo de investigación necesita saber cuánto texto cabe en un solo prompt. ¿Qué propiedad del modelo indica esto?',
    answers: [
      { id: 'A', text: 'Temperature (temperatura de muestreo)' },
      { id: 'B', text: 'Model size (tamaño del modelo en parámetros)' },
      { id: 'C', text: 'Context window (ventana de contexto)' },
      { id: 'D', text: 'Batch size (tamaño de lote de entrenamiento)' },
    ],
    correctAnswers: ['C'],
    explanation:
      'La context window limita cuántos tokens de entrada/salida caben por solicitud. Temperature afecta aleatoriedad; tamaño del modelo y batch size no definen el límite del prompt.',
  },
  {
    id: 163,
    certification: 'AIF-C01',
    domain: 'generative-ai-fundamentals',
    topic: 'Fundamentos de IA generativa',
    services: [],
    difficulty: 'medium',
    type: 'single',
    question:
      'En el ciclo de vida de un modelo de IA generativa, el equipo debe verificar calidad antes de producción. ¿Qué etapa ejecuta pruebas para validar el desempeño del modelo?',
    answers: [
      { id: 'A', text: 'Pre-entrenamiento (pre-training)' },
      { id: 'B', text: 'Fine-tuning (ajuste fino)' },
      { id: 'C', text: 'Evaluación (evaluation)' },
      { id: 'D', text: 'Despliegue (deployment)' },
    ],
    correctAnswers: ['C'],
    explanation:
      'La evaluación mide el modelo con datos/métricas de validación antes del despliegue. Pre-entrenamiento y fine-tuning ajustan pesos; el despliegue pone el modelo en servicio.',
  },
  {
    id: 164,
    certification: 'AIF-C01',
    domain: 'generative-ai-fundamentals',
    topic: 'Agentes de IA generativa',
    services: [],
    difficulty: 'medium',
    type: 'single',
    question:
      'Una empresa de suscripción opera un chatbot de soporte con IA generativa y necesita una métrica que refleje el efecto financiero operativo del bot (no solo calidad lingüística). ¿Qué métrica debe priorizar?',
    answers: [
      { id: 'A', text: 'Cantidad de consultas de clientes atendidas por día' },
      { id: 'B', text: 'Costo por conversación (cost per conversation) con el cliente' },
      { id: 'C', text: 'Tiempo promedio de atención (average handle time, AHT) sin costo unitario' },
      { id: 'D', text: 'Costo único de entrenar los modelos de IA al inicio del proyecto' },
    ],
    correctAnswers: ['B'],
    explanation:
      'El costo por conversación vincula el gasto de tokens/infraestructura al volumen de atención y permite comparar contra agentes humanos. Conteos o AHT solos no cuantifican el impacto financiero; el costo de entrenamiento es capex puntual.',
  },
  {
    id: 165,
    certification: 'AIF-C01',
    domain: 'generative-ai-fundamentals',
    topic: 'Amazon Bedrock',
    services: ['Bedrock'],
    difficulty: 'medium',
    type: 'single',
    question:
      'El asistente de IA de un bufete jurídico en Amazon Bedrock debe combinar la pregunta del usuario, cláusulas relevantes de contratos recuperadas de una base de conocimiento, las reglas de cumplimiento de la firma y el historial de conversación en una sola llamada al modelo. ¿Qué práctica gobierna cómo se ensamblan y priorizan estos elementos?',
    answers: [
      { id: 'A', text: 'Fine-tuning' },
      { id: 'B', text: 'Hyperparameter tuning' },
      { id: 'C', text: 'Context engineering' },
      { id: 'D', text: 'Feature engineering' },
    ],
    correctAnswers: ['C'],
    explanation:
      'Context engineering gobierna cómo se ensamblan, priorizan y estructuran todos los elementos de información, como documentos recuperados, reglas del sistema, entrada del usuario e historial de conversación, antes de pasarlos al modelo, asegurando que tenga el contexto correcto para responder con precisión.',
  },
  {
    id: 166,
    certification: 'AIF-C01',
    domain: 'generative-ai-fundamentals',
    topic: 'Embeddings y espacio latente',
    services: [],
    difficulty: 'easy',
    type: 'multiple',
    question:
      '¿Cuáles dos afirmaciones sobre el espacio latente (latent space) de un modelo son correctas?',
    answers: [
      { id: 'A', text: 'Debe almacenarse en un tipo específico de base de datos' },
      { id: 'B', text: 'Captura la comprensión interna del modelo sobre las relaciones entre conceptos' },
      { id: 'C', text: 'Solo aplica a datos de imagen' },
      { id: 'D', text: 'Permite calcular similitud semántica entre distintas entradas' },
    ],
    correctAnswers: ['B', 'D'],
    explanation:
      'El espacio latente de un modelo es la representación interna donde organiza conceptos, por lo que tanto captura las relaciones que el modelo ha aprendido como permite calcular similitud semántica entre distintas entradas.',
  },
  {
    id: 167,
    certification: 'AIF-C01',
    domain: 'generative-ai-fundamentals',
    topic: 'Fundamentos de IA generativa',
    services: [],
    difficulty: 'easy',
    type: 'single',
    question:
      'Una empresa quiere utilizar IA generativa para crear las descripciones de los productos en el sitio web. ¿Cuál es la limitación de la IA generativa que la empresa debe tener en cuenta?',
    answers: [
      { id: 'A', text: 'Los modelos de IA generativa pueden generar contenido sesgado o inapropiado que necesite la revisión y la edición de un humano.' },
      { id: 'B', text: 'La IA generativa no puede generar texto en los distintos idiomas que un sitio web de comercio electrónico necesite.' },
      { id: 'C', text: 'Los modelos de IA generativa no son capaces de comprender e incorporar las especificaciones y los detalles de los productos.' },
      { id: 'D', text: 'La IA generativa no puede gestionar los volúmenes grandes de datos necesarios para describir los productos.' },
    ],
    correctAnswers: ['A'],
    explanation:
      'Los modelos de IA generativa pueden producir texto que imita el lenguaje humano, pero también pueden manifestar sesgos o generar contenido inapropiado que requiere control y edición humana. Sí pueden generar texto en varios idiomas, incorporar especificaciones vía prompts/contexto y escalar a volúmenes grandes; esas no son limitaciones centrales en este escenario.',
  },
  {
    id: 168,
    certification: 'AIF-C01',
    domain: 'generative-ai-fundamentals',
    topic: 'Riesgos y limitaciones de la IA generativa',
    services: [],
    difficulty: 'medium',
    type: 'multiple',
    question:
      'Una empresa está creando una aplicación de IA generativa mediante el uso de un modelo fundacional (FM). La empresa decide personalizar su propio FM con conjuntos de datos patentados, en lugar de utilizar un FM previamente entrenado y listo para usar. ¿Cuáles son las desventajas de personalizar un FM? (Seleccione DOS opciones)',
    answers: [
      { id: 'A', text: 'Mayor riesgo de alucinaciones' },
      { id: 'B', text: 'Menor exactitud' },
      { id: 'C', text: 'Mayor costo' },
      { id: 'D', text: 'Mayor complejidad de la implementación' },
    ],
    correctAnswers: ['C', 'D'],
    explanation:
      'Personalizar un FM suele implicar mayor costo (cómputo, datos, expertos) y mayor complejidad de implementación (preparar datos, reentrenar, evaluar) frente a usar un FM preentrenado listo para usar. No implica necesariamente más alucinaciones, menor exactitud o mayor latencia por defecto; el objetivo del personalizado suele mejorar el ajuste al dominio.',
  },
  {
    id: 169,
    certification: 'AIF-C01',
    domain: 'generative-ai-fundamentals',
    topic: 'Modelos fundacionales (Foundation Models)',
    services: [],
    difficulty: 'easy',
    type: 'single',
    question:
      '¿Qué es un modelo fundacional (FM) en el contexto de IA generativa?',
    answers: [
      { id: 'A', text: 'Una arquitectura básica que sirve como punto de partida para diseñar redes neuronales más complejas.' },
      { id: 'B', text: 'Un modelo de tarea específica que se entrena a partir de un dominio limitado, como finanzas o medicina, para que sirva de base en esa área.' },
      { id: 'C', text: 'Un modelo grande de propósito general preentrenado en diversos conjuntos de datos que se puede ajustar para tareas posteriores.' },
      { id: 'D', text: 'Un marco de trabajo teórico para entender cómo los diferentes tipos de modelos aprenden las representaciones.' },
    ],
    correctAnswers: ['C'],
    explanation:
      'Los modelos fundacionales son modelos grandes preentrenados con amplios conjuntos de datos y capaces de múltiples tareas; luego se pueden adaptar (por ejemplo con fine-tuning o prompting) a tareas posteriores. No son solo un esquema teórico ni un modelo estrecho de un solo dominio.',
  },
  {
    id: 170,
    certification: 'AIF-C01',
    domain: 'generative-ai-fundamentals',
    topic: 'Amazon Bedrock',
    services: ['Bedrock', 'Comprehend', 'Rekognition', 'Personalize'],
    difficulty: 'easy',
    type: 'single',
    question:
      'Una empresa de viajes quiere utilizar un modelo de IA generativa ya entrenado a fin de generar imágenes de fondo para materiales de marketing. La empresa no tiene experiencia en ML. Además, la empresa no quiere personalizar ni alojar el modelo de ML. ¿Qué servicio de AWS puede cumplir estos requisitos?',
    answers: [
      { id: 'A', text: 'Amazon Comprehend' },
      { id: 'B', text: 'Amazon Personalize' },
      { id: 'C', text: 'Amazon Bedrock' },
      { id: 'D', text: 'Amazon Rekognition' },
    ],
    correctAnswers: ['C'],
    explanation:
      'Amazon Bedrock ofrece una API unificada para consumir modelos fundacionales (incluida generación de imágenes de proveedores como Stability AI) sin entrenar, alojar ni administrar la infraestructura del modelo. Comprehend es NLP, Personalize es recomendaciones y Rekognition analiza imágenes existentes, no genera fondos de marketing.',
  },
  {
    id: 171,
    certification: 'AIF-C01',
    domain: 'generative-ai-fundamentals',
    topic: 'Fundamentos de IA generativa',
    services: [],
    difficulty: 'easy',
    type: 'single',
    question:
      '¿Cuál es la descripción más adecuada de un "token" en un LLM?',
    answers: [
      { id: 'A', text: 'La unidad mínima en la que el modelo divide el texto para procesarlo, que también incluye partes de palabras o símbolos.' },
      { id: 'B', text: 'El número de oraciones que componen un texto.' },
      { id: 'C', text: 'Una unidad de texto que siempre corresponde a una palabra.' },
      { id: 'D', text: 'El número de solicitudes que el modelo puede procesar a la vez.' },
    ],
    correctAnswers: ['A'],
    explanation:
      'Un token es la unidad mínima de procesamiento del texto: palabras, subpalabras, puntuación, espacios, etc. No equivale siempre a una palabra completa.',
  },
  {
    id: 172,
    certification: 'AIF-C01',
    domain: 'generative-ai-fundamentals',
    topic: 'Ingeniería de prompts',
    services: [],
    difficulty: 'easy',
    type: 'single',
    question:
      'En la ingeniería de prompts, ¿cuál es el método que mejora la precisión de las respuestas a problemas complejos al mostrar al modelo un proceso de razonamiento paso a paso?',
    answers: [
      { id: 'A', text: 'Prompting de pocos ejemplos (few-shot)' },
      { id: 'B', text: 'Prompting con plantillas' },
      { id: 'C', text: 'Prompting de cadena de pensamiento (CoT)' },
      { id: 'D', text: 'Prompt de sistema' },
    ],
    correctAnswers: ['C'],
    explanation:
      'Chain-of-thought (CoT) pide razonamiento paso a paso y mejora la precisión en problemas complejos.',
  },
  {
    id: 173,
    certification: 'AIF-C01',
    domain: 'generative-ai-fundamentals',
    topic: 'Arquitecturas de modelos generativos',
    services: [],
    difficulty: 'easy',
    type: 'single',
    question:
      '¿Cuál es el mecanismo de generación, adoptado por muchos de los modelos que generan imágenes de alta calidad a partir de instrucciones de texto, que parte de ruido aleatorio y construye la imagen eliminando el ruido de forma gradual?',
    answers: [
      { id: 'A', text: 'Modelo de difusión (diffusion model)' },
      { id: 'B', text: 'Máquina de vectores de soporte (SVM)' },
      { id: 'C', text: 'Árbol de decisión' },
      { id: 'D', text: 'Regresión logística' },
    ],
    correctAnswers: ['A'],
    explanation:
      'Los modelos de difusión (p. ej. Stable Diffusion) generan imágenes partiendo de ruido y eliminándolo gradualmente. En texto, la corriente principal son transformers.',
  },
  {
    id: 174,
    certification: 'AIF-C01',
    domain: 'generative-ai-fundamentals',
    topic: 'Ingeniería de prompts',
    services: [],
    difficulty: 'easy',
    type: 'single',
    question:
      'En la ingeniería de prompts, ¿cómo se denomina el método de presentar al modelo ejemplos concretos de entrada y salida antes de pedirle que ejecute la tarea?',
    answers: [
      { id: 'A', text: 'Prompting de pocos ejemplos (few-shot)' },
      { id: 'B', text: 'Ajuste fino (fine-tuning)' },
      { id: 'C', text: 'Prompting de cadena de pensamiento (CoT)' },
      { id: 'D', text: 'Prompting de cero ejemplos (zero-shot)' },
    ],
    correctAnswers: ['A'],
    explanation:
      'Few-shot incluye en el prompt unos pocos ejemplos de entrada/salida para que el modelo imite el patrón. Zero-shot no incluye ejemplos; fine-tuning cambia pesos del modelo.',
  },
  {
    id: 175,
    certification: 'AIF-C01',
    domain: 'generative-ai-fundamentals',
    topic: 'Fundamentos de IA generativa',
    services: [],
    difficulty: 'easy',
    type: 'single',
    question:
      'Una empresa de comercio electrónico quiere construir un sistema de atención de consultas que reciba en una misma solicitud la "foto del producto" y el "texto que describe el defecto" enviados por el cliente, y genere una respuesta que tenga en cuenta ambas informaciones. ¿Qué tipo de modelo se necesita?',
    answers: [
      { id: 'A', text: 'Un modelo de incrustaciones (embeddings) de texto' },
      { id: 'B', text: 'Un modelo de pronóstico de series temporales' },
      { id: 'C', text: 'Un modelo multimodal' },
      { id: 'D', text: 'Dos modelos de lenguaje de gran tamaño exclusivos de texto conectados en serie' },
    ],
    correctAnswers: ['C'],
    explanation:
      'Un modelo multimodal integra varias modalidades (imagen +texto) en una misma comprensión/respuesta.',
  },
  {
    id: 176,
    certification: 'AIF-C01',
    domain: 'generative-ai-fundamentals',
    topic: 'Fundamentos de IA generativa',
    services: [],
    difficulty: 'medium',
    type: 'single',
    question:
      'Al entregar a una IA generativa el acta de una reunión muy larga para que la resumiera, se superó el límite de entrada y se produjo un error. ¿Cuál es la forma más adecuada de resolverlo sin cambiar de modelo?',
    answers: [
      { id: 'A', text: 'Dividir el acta, resumir cada parte por separado y después resumir de nuevo esos resúmenes.' },
      { id: 'B', text: 'Bajar la temperature y volver a ejecutar para reducir la variabilidad de la salida' },
      { id: 'C', text: 'Enviar el mismo prompt varias veces y comparar los resultados para elegir el mejor' },
      { id: 'D', text: 'Aumentar el número máximo de tokens de salida para poder producir un resumen más largo' },
    ],
    correctAnswers: ['A'],
    explanation:
      'Ante límite de contexto, un resumen jerárquico (dividir → resumir partes → resumir resúmenes) permite procesar textos largos sin cambiar de modelo. Subir max tokens de salida no aumenta la ventana de entrada.',
  },
  {
    id: 177,
    certification: 'AIF-C01',
    domain: 'generative-ai-fundamentals',
    topic: 'Arquitecturas de modelos generativos',
    services: ['Nova'],
    difficulty: 'easy',
    type: 'single',
    question:
      '¿Cuál es la arquitectura que sirve de base a los grandes modelos de lenguaje (LLM)?',
    answers: [
      { id: 'A', text: 'Red neuronal recurrente (RNN)' },
      { id: 'B', text: 'Transformer' },
      { id: 'C', text: 'Autoencoder' },
      { id: 'D', text: 'Red neuronal convolucional (CNN)' },
    ],
    correctAnswers: ['B'],
    explanation:
      'Los LLM modernos (GPT, Claude, Amazon Nova, etc.) se basan en la arquitectura Transformer y en mecanismos de autoatención.',
  },
  {
    id: 178,
    certification: 'AIF-C01',
    domain: 'generative-ai-fundamentals',
    topic: 'Fundamentos de IA generativa',
    services: [],
    difficulty: 'medium',
    type: 'single',
    question:
      'Una aplicación de IA generativa incluye en cada solicitud el mismo preámbulo extenso (instrucciones de sistema y material de referencia común). ¿Qué medida es adecuada para contener el tiempo de espera de la respuesta y el costo?',
    answers: [
      { id: 'A', text: 'Eliminar el preámbulo en cada solicitud para acortar el texto que se envía y reducir el número de tokens.' },
      { id: 'B', text: 'Aprovechar un mecanismo que permita almacenar en caché la parte del preámbulo que se reutiliza.' },
      { id: 'C', text: 'Aumentar el número de solicitudes que se envían en paralelo para atender más peticiones a la vez.' },
      { id: 'D', text: 'Subir el valor de temperature con la idea de acelerar la generación de la respuesta.' },
    ],
    correctAnswers: ['B'],
    explanation:
      'El prompt caching reutiliza el preámbulo común y evita reprocesar los mismos tokens, reduciendo latencia y costo. Eliminar el preámbulo cambia el comportamiento; temperature no acelera la respuesta.',
  },
  {
    id: 179,
    certification: 'AIF-C01',
    domain: 'generative-ai-fundamentals',
    topic: 'Fundamentos de IA generativa',
    services: [],
    difficulty: 'easy',
    type: 'single',
    question:
      '¿Cuál es la característica de la salida cuando se establece el parámetro "temperature" de un modelo de IA generativa en un valor bajo (por ejemplo, 0,1)?',
    answers: [
      { id: 'A', text: 'Se genera una salida más determinista y coherente.' },
      { id: 'B', text: 'Mejora la velocidad de respuesta del modelo.' },
      { id: 'C', text: 'Se genera una salida más creativa y con mayor aleatoriedad.' },
      { id: 'D', text: 'Aumenta el número de tokens de la salida.' },
    ],
    correctAnswers: ['A'],
    explanation:
      'Temperature baja hace la distribución más concentrada en tokens de alta probabilidad → salida más determinista y coherente. Temperature alta aumenta aleatoriedad/creatividad.',
  },
  {
    id: 180,
    certification: 'AIF-C01',
    domain: 'generative-ai-fundamentals',
    topic: 'Fundamentos de IA generativa',
    services: [],
    difficulty: 'medium',
    type: 'single',
    question:
      'En un sistema de preguntas y respuestas sobre documentos internos se desea mostrar al usuario el nombre del documento y el pasaje concreto en que se fundamenta la respuesta. ¿Cuál es la arquitectura más adecuada para este requisito?',
    answers: [
      { id: 'A', text: 'Cambiar a un modelo con un número mayor de parámetros para que su conocimiento interno sea más amplio.' },
      { id: 'B', text: 'Establecer temperature en 0 para que la redacción de la respuesta se mantenga siempre igual.' },
      { id: 'C', text: 'Limitarse a añadir en el prompt la instrucción "cite sus fuentes" y dejar al modelo la elección de lo que escribe como fuente.' },
      { id: 'D', text: 'Presentar como fuente, junto con la respuesta, los fragmentos de documento recuperados en la búsqueda.' },
    ],
    correctAnswers: ['D'],
    explanation:
      'Con RAG, los fragmentos recuperados se usan para generar y se pueden devolver como citas fiables. Pedir solo "cita fuentes" sin recuperación no garantiza atribución real.',
  },
  {
    id: 181,
    certification: 'AIF-C01',
    domain: 'generative-ai-fundamentals',
    topic: 'Precios, tokens y capacidad en Bedrock',
    services: ['Bedrock'],
    difficulty: 'medium',
    type: 'single',
    question:
      'La aplicación de IA generativa de una empresa necesita procesar de forma permanente un gran volumen de solicitudes con un rendimiento estable. ¿Cuál es la modalidad de uso adecuada cuando se quiere reservar por adelantado la capacidad de procesamiento del modelo en Amazon Bedrock y garantizar un desempeño estable?',
    answers: [
      { id: 'A', text: 'La función de evaluación de modelos' },
      { id: 'B', text: 'Bajo demanda (pago por uso según el número de tokens)' },
      { id: 'C', text: 'El ajuste fino' },
      { id: 'D', text: 'Rendimiento aprovisionado (Provisioned Throughput)' },
    ],
    correctAnswers: ['D'],
    explanation:
      'Provisioned Throughput reserva capacidad de inferencia por periodo y encaja en cargas de producción estables y altas. On-demand es más flexible para uso variable.',
  },
  {
    id: 182,
    certification: 'AIF-C01',
    domain: 'generative-ai-fundamentals',
    topic: 'Embeddings y espacio latente',
    services: [],
    difficulty: 'medium',
    type: 'single',
    question:
      'Al evaluar la salida de una IA generativa surge la limitación de que "una frase con el mismo significado recibe una puntuación baja si está expresada de otra manera". ¿Cuál es el método de evaluación más adecuado para compensar esta limitación?',
    answers: [
      { id: 'A', text: 'Tomar el tiempo de ejecución de la inferencia como métrica de evaluación.' },
      { id: 'B', text: 'Tomar el número de caracteres de la salida como métrica de evaluación.' },
      { id: 'C', text: 'Combinar una evaluación que mida la similitud semántica con la evaluación humana.' },
      { id: 'D', text: 'Calcular de forma más estricta la tasa de coincidencia de palabras con el texto de referencia.' },
    ],
    correctAnswers: ['C'],
    explanation:
      'Métricas de solapamiento léxico penalizan paráfrasis. Compensar con similitud semántica (embeddings) y evaluación humana mitiga ese sesgo.',
  },
  {
    id: 183,
    certification: 'AIF-C01',
    domain: 'generative-ai-fundamentals',
    topic: 'Fundamentos de IA generativa',
    services: [],
    difficulty: 'medium',
    type: 'single',
    question:
      '¿Cuál es la explicación correcta sobre cuándo usar el ajuste fino y cuándo usar RAG?',
    answers: [
      { id: 'A', text: 'El ajuste fino siempre ofrece mejores resultados que RAG.' },
      { id: 'B', text: 'Cuando se manejan datos que se actualizan con frecuencia es adecuado RAG, y cuando se desea cambiar el comportamiento o el estilo del modelo es adecuado el ajuste fino.' },
      { id: 'C', text: 'RAG siempre tiene un coste mayor que el ajuste fino.' },
      { id: 'D', text: 'El ajuste fino y RAG no se pueden utilizar al mismo tiempo.' },
    ],
    correctAnswers: ['B'],
    explanation:
      'RAG consulta conocimiento externo dinámico (ideal si cambia a menudo). Fine-tuning interioriza estilo/comportamiento de dominio. Pueden combinarse; ninguno es siempre mejor ni siempre más caro.',
  },
  {
    id: 184,
    certification: 'AIF-C01',
    domain: 'generative-ai-fundamentals',
    topic: 'Amazon Bedrock',
    services: ['SageMaker', 'Bedrock', 'Q', 'PartyRock'],
    difficulty: 'easy',
    type: 'single',
    question:
      '¿Cuál es el espacio de experimentación (playground) basado en Amazon Bedrock que permite a los miembros de un departamento de planificación, sin conocimientos de programación ni cuenta de AWS, montar prototipos de aplicaciones de IA generativa solo con el navegador y experimentar las posibilidades de la IA generativa?',
    answers: [
      { id: 'A', text: 'AWS CloudShell' },
      { id: 'B', text: 'Amazon SageMaker Studio' },
      { id: 'C', text: 'PartyRock' },
      { id: 'D', text: 'Amazon Q Developer' },
    ],
    correctAnswers: ['C'],
    explanation:
      'PartyRock es un playground basado en Bedrock para prototipar apps GenAI en el navegador, sin cuenta AWS ni código.',
  },
  {
    id: 185,
    certification: 'AIF-C01',
    domain: 'generative-ai-fundamentals',
    topic: 'Fundamentos de IA generativa',
    services: [],
    difficulty: 'medium',
    type: 'single',
    question:
      'Un desarrollador está construyendo una aplicación que utiliza un LLM. Quiere que responda a preguntas consultando un extenso manual interno (unos 500.000 tokens), pero la ventana de contexto del modelo que utiliza es de 200.000 tokens. ¿Cuál es el enfoque más adecuado para hacer frente a esta limitación?',
    answers: [
      { id: 'A', text: 'El límite de la ventana de contexto es un límite flexible y, aunque se superen, se procesa sin problemas.' },
      { id: 'B', text: 'Dividir el manual en fragmentos y, mediante RAG, buscar e incluir en el contexto únicamente las partes relevantes.' },
      { id: 'C', text: 'Introducir todo el manual de una vez en el modelo y esperar a que la ventana de contexto se amplíe automáticamente.' },
      { id: 'D', text: 'Escribir todo el contenido del manual en el prompt de sistema del modelo.' },
    ],
    correctAnswers: ['B'],
    explanation:
      'La ventana de contexto es un límite duro. RAG recupera solo fragmentos relevantes para caber en el contexto disponible.',
  },
  {
    id: 186,
    certification: 'AIF-C01',
    domain: 'generative-ai-fundamentals',
    topic: 'Fundamentos de IA generativa',
    services: [],
    difficulty: 'easy',
    type: 'single',
    question:
      'Un equipo de ML está desarrollando una nueva aplicación de IA. Necesita abordar varias tareas, como generación de texto, reconocimiento de imágenes y generación de código, pero no dispone de recursos para entrenar individualmente un modelo dedicado a cada tarea. ¿Cuál es el enfoque más adecuado para esta situación?',
    answers: [
      { id: 'A', text: 'Implementar individualmente cada tarea con un sistema basado en reglas.' },
      { id: 'B', text: 'Aprovechar un modelo base (Foundation Model) preentrenado con grandes volúmenes de datos y adaptarlo a cada tarea mediante prompts o ajuste fino.' },
      { id: 'C', text: 'Utilizar un único modelo de árbol de decisión común para todas las tareas.' },
      { id: 'D', text: 'Entrenar desde cero un modelo pequeño dedicado a cada tarea.' },
    ],
    correctAnswers: ['B'],
    explanation:
      'Un FM preentrenado se adapta a múltiples tareas posteriores con prompting o fine-tuning, sin entrenar un modelo desde cero por tarea.',
  },
  {
    id: 187,
    certification: 'AIF-C01',
    domain: 'generative-ai-fundamentals',
    topic: 'Modelos fundacionales (Foundation Models)',
    services: [],
    difficulty: 'medium',
    type: 'single',
    question:
      'Una app de GenAI ya está en producción. El equipo recoge valoraciones de usuarios y casos fallidos para planificar la próxima mejora del modelo fundacional. Según el ciclo de vida de un FM, ¿en qué etapa encaja ese trabajo?',
    answers: [
      { id: 'A', text: 'Selección de datos (data selection)' },
      { id: 'B', text: 'Preentrenamiento (pre-training)' },
      { id: 'C', text: 'Retroalimentación (feedback)' },
      { id: 'D', text: 'Selección del modelo (model selection)' },
    ],
    correctAnswers: ['C'],
    explanation:
      'La etapa de retroalimentación (feedback) incorpora lo aprendido en producción para mejorar el modelo o el sistema en iteraciones siguientes.',
  },
  {
    id: 188,
    certification: 'AIF-C01',
    domain: 'generative-ai-fundamentals',
    topic: 'Modelos fundacionales (Foundation Models)',
    services: [],
    difficulty: 'hard',
    type: 'single',
    question:
      'Un arquitecto debe explicar el orden del ciclo de vida de un modelo fundacional antes de proponer un plan de adopción. ¿Cuál es el orden correcto?',
    answers: [
      { id: 'A', text: 'Selección de datos → Selección del modelo → Preentrenamiento → Ajuste fino → Evaluación → Despliegue → Retroalimentación' },
      { id: 'B', text: 'Despliegue → Preentrenamiento → Retroalimentación → Selección de datos → Evaluación → Ajuste fino → Selección del modelo' },
      { id: 'C', text: 'Ajuste fino → Selección del modelo → Despliegue → Selección de datos → Preentrenamiento → Retroalimentación → Evaluación' },
      { id: 'D', text: 'Evaluación → Selección de datos → Despliegue → Preentrenamiento → Retroalimentación → Ajuste fino → Selección del modelo' },
    ],
    correctAnswers: ['A'],
    explanation:
      'Orden del ciclo de vida del FM: data selection → model selection → pre-training → fine-tuning → evaluation → deployment → feedback.',
  },
  {
    id: 189,
    certification: 'AIF-C01',
    domain: 'generative-ai-fundamentals',
    topic: 'Amazon Bedrock',
    services: ['Bedrock'],
    difficulty: 'medium',
    type: 'multiple',
    question:
      'Una startup debe elegir un FM en Bedrock para un chatbot de soporte con SLA estricto de respuesta y presupuesto mensual fijo. ¿Cuáles factores de selección son los más relevantes? (Seleccione 2)',
    answers: [
      { id: 'A', text: 'Latencia (latency)' },
      { id: 'B', text: 'Costo (cost)' },
      { id: 'C', text: 'Elegir solo por el nombre comercial del modelo, sin mirar métricas' },
      { id: 'D', text: 'Ignorar por completo los requisitos de cumplimiento (compliance)' },
    ],
    correctAnswers: ['A', 'B'],
    explanation:
      'Para SLA y presupuesto, latencia y costo son criterios centrales de selección de FM (junto con capacidades, compliance y complejidad).',
  },
  {
    id: 190,
    certification: 'AIF-C01',
    domain: 'generative-ai-fundamentals',
    topic: 'Arquitecturas de modelos generativos',
    services: [],
    difficulty: 'easy',
    type: 'single',
    question:
      '¿Cuál emparejamiento correcto describe tipos de modelos generativos y lo que generan típicamente?',
    answers: [
      { id: 'A', text: 'Difusión (diffusion): imágenes · LLM basado en transformers: texto · Multimodal: varios tipos de dato · Embeddings: representación vectorial' },
      { id: 'B', text: 'Difusión (diffusion): solo audio · LLM: agrupamiento (clustering) · Multimodal: solo tablas · Embeddings: facturación' },
      { id: 'C', text: 'Difusión (diffusion): bases de datos · LLM: redes · Multimodal: solo código · Embeddings: logs' },
      { id: 'D', text: 'Todos generan únicamente datos tabulares estructurados' },
    ],
    correctAnswers: ['A'],
    explanation:
      'Difusión (diffusion) para imágenes, LLM con transformers para texto, multimodales para varios tipos de dato y embeddings como vectores semánticos.',
  },
  {
    id: 191,
    certification: 'AIF-C01',
    domain: 'generative-ai-fundamentals',
    topic: 'Modelos fundacionales (Foundation Models)',
    services: [],
    difficulty: 'easy',
    type: 'single',
    question:
      '¿Qué es un foundation model (FM)?',
    answers: [
      { id: 'A', text: 'Un modelo que solo funciona con datos tabulares' },
      { id: 'B', text: 'Un modelo que únicamente hace agrupamiento (clustering)' },
      { id: 'C', text: 'Un modelo entrenado desde cero para una única tarea muy específica' },
      { id: 'D', text: 'Un modelo grande, preentrenado con enormes cantidades de datos, que puede adaptarse a múltiples tareas' },
    ],
    correctAnswers: ['D'],
    explanation:
      'Un FM es grande, pre-entrenado con datos masivos y adaptable a múltiples tareas posteriores.',
  },
  {
    id: 192,
    certification: 'AIF-C01',
    domain: 'generative-ai-fundamentals',
    topic: 'Agentes de IA generativa',
    services: [],
    difficulty: 'easy',
    type: 'multiple',
    question:
      '¿Cuáles de los siguientes son casos de uso de IA generativa (GenAI)? (Seleccione 2)',
    answers: [
      { id: 'A', text: 'Resumen de texto (summarization)' },
      { id: 'B', text: 'Generación de código' },
      { id: 'C', text: 'Administración física de servidores' },
      { id: 'D', text: 'Compilación manual de binarios' },
    ],
    correctAnswers: ['A', 'B'],
    explanation:
      'Casos GenAI: resumen, generación de código, imagen/video/audio, asistentes, traducción, agentes, búsqueda y recomendaciones.',
  },
  {
    id: 193,
    certification: 'AIF-C01',
    domain: 'generative-ai-fundamentals',
    topic: 'Arquitecturas de modelos generativos',
    services: [],
    difficulty: 'easy',
    type: 'single',
    question:
      '¿Qué describe mejor a los modelos de lenguaje grandes basados en transformers (transformer-based LLMs)?',
    answers: [
      { id: 'A', text: 'Un algoritmo de agrupamiento (clustering) no supervisado' },
      { id: 'B', text: 'Un tipo de base de datos vectorial' },
      { id: 'C', text: 'Modelos de lenguaje grandes basados en la arquitectura transformer, que predicen la siguiente secuencia de tokens' },
      { id: 'D', text: 'Un servicio de AWS para desplegar contenedores' },
    ],
    correctAnswers: ['C'],
    explanation:
      'Los LLM basados en transformers predicen la siguiente secuencia de tokens.',
  },
  {
    id: 194,
    certification: 'AIF-C01',
    domain: 'generative-ai-fundamentals',
    topic: 'Embeddings y espacio latente',
    services: [],
    difficulty: 'medium',
    type: 'single',
    question:
      'Un equipo de búsqueda semántica necesita comparar qué tan “parecidos en significado” son dos párrafos de políticas internas. ¿Qué representación les permite medir esa similitud numéricamente?',
    answers: [
      { id: 'A', text: 'Un token' },
      { id: 'B', text: 'Un embedding (vector semántico)' },
      { id: 'C', text: 'La temperatura del modelo' },
      { id: 'D', text: 'El tamaño en GB del checkpoint' },
    ],
    correctAnswers: ['B'],
    explanation:
      'Un embedding es un vector que captura significado semántico; la similitud entre vectores aproxima similitud de significado.',
  },
  {
    id: 195,
    certification: 'AIF-C01',
    domain: 'generative-ai-fundamentals',
    topic: 'Ingeniería de prompts',
    services: ['IAM'],
    difficulty: 'easy',
    type: 'single',
    question:
      '¿Cuál emparejamiento correcto define token, troceado (chunking), embedding e ingeniería de prompts (prompt engineering)?',
    answers: [
      { id: 'A', text: 'Token: unidad mínima de texto · Troceado (chunking): dividir documentos · Embedding: vector semántico · Ingeniería de prompts: diseñar instrucciones efectivas' },
      { id: 'B', text: 'Token: base de datos · Troceado (chunking): cifrado · Embedding: facturación · Ingeniería de prompts: IAM' },
      { id: 'C', text: 'Token: imagen · Troceado (chunking): solo audio · Embedding: servidor · Ingeniería de prompts: DNS' },
      { id: 'D', text: 'Los cuatro son sinónimos de ajuste fino (fine-tuning) completo' },
    ],
    correctAnswers: ['A'],
    explanation:
      'Cuatro conceptos fundamentales de GenAI: token, troceado (chunking), embedding e ingeniería de prompts.',
  },
  {
    id: 196,
    certification: 'AIF-C01',
    domain: 'generative-ai-fundamentals',
    topic: 'Precios, tokens y capacidad en Bedrock',
    services: ['Bedrock', 'S3'],
    difficulty: 'hard',
    type: 'single',
    question:
      'Una empresa tendrá tráfico estable y alto a un FM en Bedrock durante al menos 6 meses y necesita capacidad dedicada predecible con mejor precio unitario. ¿Qué modalidad de precios encaja mejor?',
    answers: [
      { id: 'A', text: 'Bajo demanda (on-demand) sin compromiso' },
      { id: 'B', text: 'Rendimiento aprovisionado (Provisioned Throughput)' },
      { id: 'C', text: 'Cobro solo por usuario activo mensual' },
      { id: 'D', text: 'Almacenamiento S3 Intelligent-Tiering' },
    ],
    correctAnswers: ['B'],
    explanation:
      'Provisioned Throughput reserva capacidad dedicada con compromiso temporal; on-demand cobra por token sin reserva.',
  },
  {
    id: 197,
    certification: 'AIF-C01',
    domain: 'generative-ai-fundamentals',
    topic: 'Agentes de IA generativa',
    services: ['Bedrock', 'Polly', 'Strands Agents', 'Direct Connect', 'RDS'],
    difficulty: 'hard',
    type: 'single',
    question:
      'Un equipo quiere un SDK open source, model-driven, para construir agentes que planifiquen y usen herramientas, compatible con Bedrock y también con otros proveedores. ¿Qué tecnología de AWS encaja mejor?',
    answers: [
      { id: 'A', text: 'Amazon RDS Proxy' },
      { id: 'B', text: 'Strands Agents' },
      { id: 'C', text: 'Amazon Polly' },
      { id: 'D', text: 'AWS Direct Connect' },
    ],
    correctAnswers: ['B'],
    explanation:
      'Strands Agents es el SDK open source de AWS para agentes model-driven, usable con Bedrock y otros proveedores de modelos.',
  },
  {
    id: 198,
    certification: 'AIF-C01',
    domain: 'generative-ai-fundamentals',
    topic: 'Precios, tokens y capacidad en Bedrock',
    services: ['Bedrock', 'EC2'],
    difficulty: 'medium',
    type: 'single',
    question:
      'FinOps revisa la factura de Bedrock en modo bajo demanda para un LLM de texto. ¿De qué se cobra principalmente ese uso?',
    answers: [
      { id: 'A', text: 'Horas de instancia EC2 del modelo' },
      { id: 'B', text: 'Tokens de entrada y de salida procesados' },
      { id: 'C', text: 'Número de usuarios concurrentes en la consola' },
      { id: 'D', text: 'Tamaño en GB del archivo del modelo' },
    ],
    correctAnswers: ['B'],
    explanation:
      'En on-demand, la mayoría de FMs de texto en Bedrock se facturan por tokens de entrada y salida.',
  },
  {
    id: 199,
    certification: 'AIF-C01',
    domain: 'generative-ai-fundamentals',
    topic: 'Agentes de IA generativa',
    services: ['SQS'],
    difficulty: 'hard',
    type: 'single',
    question:
      'Un agente de IA debe consultar el CRM, crear tickets y leer una Knowledge Base sin acoplarse a un solo proveedor de herramientas. El equipo busca un protocolo estándar para conectar el agente con sistemas externos. ¿Qué concepto encaja?',
    answers: [
      { id: 'A', text: 'Model Context Protocol (MCP)' },
      { id: 'B', text: 'Una base de datos vectorial' },
      { id: 'C', text: 'Provisioned Throughput' },
      { id: 'D', text: 'Amazon SQS como única interfaz obligatoria' },
    ],
    correctAnswers: ['A'],
    explanation:
      'MCP (Model Context Protocol) es el protocolo para conectar agentes de IA con sistemas y herramientas externas.',
  },
  {
    id: 200,
    certification: 'AIF-C01',
    domain: 'generative-ai-fundamentals',
    topic: 'Agentes de IA generativa',
    services: ['Bedrock', 'Comprehend', 'Artifact', 'AgentCore'],
    difficulty: 'hard',
    type: 'single',
    question:
      'Tras prototipar agentes en un notebook, una empresa necesita operar agentes en producción con seguridad, integración de herramientas y monitoreo, sin atarse a un solo framework. ¿Qué servicio/plataforma encaja mejor?',
    answers: [
      { id: 'A', text: 'Amazon Bedrock AgentCore' },
      { id: 'B', text: 'Amazon Comprehend Medical únicamente' },
      { id: 'C', text: 'AWS Artifact' },
      { id: 'D', text: 'Amazon QuickSight sin más componentes' },
    ],
    correctAnswers: ['A'],
    explanation:
      'Amazon Bedrock AgentCore está pensado para desplegar, operar y asegurar agentes de IA en producción a escala.',
  },
  {
    id: 201,
    certification: 'AIF-C01',
    domain: 'generative-ai-fundamentals',
    topic: 'Amazon SageMaker JumpStart',
    services: ['SageMaker', 'Polly', 'Lex', 'Config'],
    difficulty: 'medium',
    type: 'single',
    question:
      'Un equipo quiere desplegar y experimentar con FMs open source dentro de su propia cuenta de SageMaker AI, no solo invocar APIs gestionadas. ¿Qué opción encaja mejor?',
    answers: [
      { id: 'A', text: 'Amazon Polly' },
      { id: 'B', text: 'SageMaker JumpStart' },
      { id: 'C', text: 'AWS Config' },
      { id: 'D', text: 'Amazon Lex' },
    ],
    correctAnswers: ['B'],
    explanation:
      'SageMaker JumpStart ofrece un catálogo de modelos (incl. open source) para desplegar y ajustar en tu entorno de SageMaker.',
  },
  {
    id: 202,
    certification: 'AIF-C01',
    domain: 'generative-ai-fundamentals',
    topic: 'Agentes de IA generativa',
    services: ['Bedrock', 'AgentCore', 'Strands Agents', 'Direct Connect', 'RDS'],
    difficulty: 'hard',
    type: 'multiple',
    question:
      'El roadmap de GenAI de una empresa menciona construir agentes productivos en AWS. ¿Cuáles tecnologías encajan en ese stack según el alcance actual de GenAI en AWS? (Seleccione 2)',
    answers: [
      { id: 'A', text: 'Amazon Bedrock AgentCore' },
      { id: 'B', text: 'Strands Agents' },
      { id: 'C', text: 'AWS Direct Connect como motor de razonamiento del agente' },
      { id: 'D', text: 'Amazon RDS Proxy como orquestador de prompts' },
    ],
    correctAnswers: ['A', 'B'],
    explanation:
      'AgentCore y Strands Agents forman parte del ecosistema GenAI de AWS para agentes. Direct Connect y RDS Proxy no orquestan agentes.',
  },
  {
    id: 203,
    certification: 'AIF-C01',
    domain: 'generative-ai-fundamentals',
    topic: 'Fundamentos de IA generativa',
    services: [],
    difficulty: 'easy',
    type: 'multiple',
    question:
      '¿Cuáles de los siguientes son beneficios de usar servicios de GenAI de AWS en vez de construir infraestructura propia? (Seleccione 2)',
    answers: [
      { id: 'A', text: 'Mayor velocidad para salir al mercado (speed to market)' },
      { id: 'B', text: 'Elimina la necesidad de definir un caso de uso de negocio' },
      { id: 'C', text: 'Menor barrera de entrada' },
      { id: 'D', text: 'Garantiza cero errores en las respuestas del modelo' },
    ],
    correctAnswers: ['A', 'C'],
    explanation:
      'Beneficios: accesibilidad, menor barrera de entrada, eficiencia, costo-efectividad y speed to market.',
  },
  {
    id: 204,
    certification: 'AIF-C01',
    domain: 'generative-ai-fundamentals',
    topic: 'Fundamentos de IA generativa',
    services: [],
    difficulty: 'medium',
    type: 'multiple',
    question:
      'Product quiere demostrar que un asistente GenAI aporta valor de negocio, no solo “buenas demos”. ¿Cuáles métricas encajan mejor para ese relato? (Seleccione 2)',
    answers: [
      { id: 'A', text: 'Tasa de conversión' },
      { id: 'B', text: 'Retorno de la inversión (ROI)' },
      { id: 'C', text: 'Cantidad de parámetros del modelo' },
      { id: 'D', text: 'Tamaño en bytes del checkpoint' },
    ],
    correctAnswers: ['A', 'B'],
    explanation:
      'ROI y tasa de conversión (u otras de negocio) miden valor. Parámetros o tamaño del modelo no demuestran impacto de negocio.',
  },
  {
    id: 205,
    certification: 'AIF-C01',
    domain: 'generative-ai-fundamentals',
    topic: 'Fundamentos de IA generativa',
    services: ['IAM'],
    difficulty: 'easy',
    type: 'multiple',
    question:
      '¿Cuáles de los siguientes son beneficios de la infraestructura de AWS para aplicaciones de GenAI? (Seleccione 2)',
    answers: [
      { id: 'A', text: 'Seguridad' },
      { id: 'B', text: 'Eliminación total de la necesidad de definir permisos de IAM' },
      { id: 'C', text: 'Latencia cero garantizada en cualquier región del mundo' },
      { id: 'D', text: 'Cumplimiento normativo (compliance)' },
    ],
    correctAnswers: ['A', 'D'],
    explanation:
      'Beneficios: seguridad, cumplimiento (compliance), responsabilidad y seguridad del modelo (safety). No elimina IAM ni garantiza latencia cero.',
  },
  {
    id: 206,
    certification: 'AIF-C01',
    domain: 'foundation-model-applications',
    topic: 'RAG (Retrieval Augmented Generation)',
    services: ['Bedrock'],
    difficulty: 'medium',
    type: 'single',
    question:
      'Una fintech opera varias aplicaciones de IA generativa en Amazon Bedrock y necesita versionar plantillas de prompts, comparar variantes A/B y revertir a una versión anterior si cae la calidad en producción. ¿Qué capacidad de Amazon Bedrock cubre ese ciclo de vida?',
    answers: [
      { id: 'A', text: 'Amazon Bedrock Knowledge Bases (bases de conocimiento)' },
      { id: 'B', text: 'Amazon Bedrock Guardrails (barandillas de seguridad)' },
      { id: 'C', text: 'Amazon Bedrock Prompt Management (gestión de prompts)' },
      { id: 'D', text: 'Amazon Bedrock Model Evaluation (evaluación de modelos)' },
    ],
    correctAnswers: ['C'],
    explanation:
      'Prompt Management permite crear, versionar y administrar plantillas de prompts, comparar variantes y revertir cambios. Knowledge Bases sirve para RAG, Guardrails filtra contenido y Model Evaluation mide calidad del modelo, no el ciclo de vida de prompts.',
  },
  {
    id: 207,
    certification: 'AIF-C01',
    domain: 'foundation-model-applications',
    topic: 'Ingeniería de prompts',
    services: ['Bedrock'],
    difficulty: 'medium',
    type: 'single',
    question:
      'Una aseguradora usa un LLM en Amazon Bedrock para analizar siniestros complejos. El equipo observa errores cuando el modelo salta a la conclusión sin justificar. Necesitan que razone de forma explícita paso a paso antes de la decisión. ¿Qué técnica de ingeniería de prompts (prompt engineering) encaja mejor?',
    answers: [
      { id: 'A', text: 'Prompts con estímulo direccional (directional stimulus prompting)' },
      { id: 'B', text: 'Encadenamiento de prompts (prompt chaining)' },
      { id: 'C', text: 'Prompts de lo menos a lo más (least-to-most prompting)' },
      { id: 'D', text: 'Cadena de pensamiento (chain-of-thought prompting)' },
    ],
    correctAnswers: ['D'],
    explanation:
      'La cadena de pensamiento (chain-of-thought) pide al modelo exponer el razonamiento intermedio como pasos lógicos, lo que mejora la calidad en problemas complejos. El encadenamiento divide tareas en prompts separados; least-to-most descompone por dificultad; stimulus direccional guía con pistas, no con razonamiento completo.',
  },
  {
    id: 208,
    certification: 'AIF-C01',
    domain: 'foundation-model-applications',
    topic: 'RAG (Retrieval Augmented Generation)',
    services: ['Bedrock'],
    difficulty: 'medium',
    type: 'single',
    question:
      'Un despacho jurídico quiere aplicar ajuste fino (fine-tuning) a un foundation model (FM) de Amazon Bedrock con dictámenes internos para mejorar la precisión en búsqueda legal. ¿Qué preparación de datos es la correcta para el fine-tuning supervisado?',
    answers: [
      { id: 'A', text: 'Comprar Provisioned Throughput (capacidad aprovisionada) en Amazon Bedrock' },
      { id: 'B', text: 'Proporcionar ejemplos etiquetados con un campo prompt y un campo completion (completación esperada)' },
      { id: 'C', text: 'Subir los PDF a Amazon Bedrock Knowledge Bases y activar RAG' },
      { id: 'D', text: 'Lanzar un trabajo de evaluación con Amazon Bedrock Model Evaluation' },
    ],
    correctAnswers: ['B'],
    explanation:
      'El fine-tuning en Bedrock requiere un dataset etiquetado que empareja cada prompt de entrada con la completion esperada. Provisioned Throughput solo reserva capacidad de inferencia; Knowledge Bases implementa RAG sin cambiar pesos; Model Evaluation mide calidad, no entrena.',
  },
  {
    id: 209,
    certification: 'AIF-C01',
    domain: 'foundation-model-applications',
    topic: 'Bases de datos vectoriales y embeddings',
    services: ['DynamoDB', 'Neptune', 'ElastiCache', 'Redshift'],
    difficulty: 'easy',
    type: 'single',
    question:
      'Un hospital construye un grafo de conocimiento clínico que debe almacenar embeddings vectoriales y ejecutar, en el mismo almacén, recorridos de grafo y búsquedas por similitud (similarity search). ¿Qué servicio de AWS combina ambas capacidades?',
    answers: [
      { id: 'A', text: 'Amazon DynamoDB' },
      { id: 'B', text: 'Amazon Neptune' },
      { id: 'C', text: 'Amazon Redshift' },
      { id: 'D', text: 'Amazon ElastiCache' },
    ],
    correctAnswers: ['B'],
    explanation:
      'Amazon Neptune es una base de datos de grafos que también admite búsqueda por similitud vectorial, permitiendo embeddings junto a relaciones clínicas. DynamoDB, Redshift y ElastiCache no ofrecen de forma nativa el combo grafo + vectores que pide el escenario.',
  },
  {
    id: 210,
    certification: 'AIF-C01',
    domain: 'foundation-model-applications',
    topic: 'RAG (Retrieval Augmented Generation)',
    services: ['Bedrock'],
    difficulty: 'medium',
    type: 'single',
    question:
      'Una cadena de restaurantes quiere que un foundation model (FM) preentrenado en Amazon Bedrock redacte publicaciones para redes con el tono de marca, sin reentrenar el modelo ni montar RAG. ¿Qué enfoque debe usar el equipo primero?',
    answers: [
      { id: 'A', text: 'Agregar capas a la arquitectura del modelo para aumentar su capacidad' },
      { id: 'B', text: 'Diseñar prompts claros con instrucciones, contexto de marca y formato de salida (prompt engineering)' },
      { id: 'C', text: 'Aplicar ajuste fino (fine-tuning) con un corpus grande de publicaciones históricas' },
      { id: 'D', text: 'Configurar Amazon Bedrock Agents para orquestar APIs de redes sociales' },
    ],
    correctAnswers: ['B'],
    explanation:
      'La ingeniería de prompts guía al FM preentrenado con instrucciones y contexto de marca sin modificar pesos ni infraestructura. Fine-tuning y Agents son más costosos o complejos; alterar la arquitectura no es una opción en Bedrock managed FMs.',
  },
  {
    id: 211,
    certification: 'AIF-C01',
    domain: 'foundation-model-applications',
    topic: 'Parámetros de inferencia',
    services: ['Bedrock'],
    difficulty: 'medium',
    type: 'single',
    question:
      'Una clínica integra un LLM en su sistema de codificación médica y necesita salidas lo más deterministas y reproducibles posible entre invocaciones con el mismo prompt. ¿Qué ajuste de inferencia cumple el requisito?',
    answers: [
      { id: 'A', text: 'Agregar al final del prompt la frase «haz tu respuesta determinista»' },
      { id: 'B', text: 'Establecer temperature (temperatura) en 1' },
      { id: 'C', text: 'Establecer temperature (temperatura) en 0' },
      { id: 'D', text: 'Activar Amazon Bedrock Guardrails con filtros de temas' },
    ],
    correctAnswers: ['C'],
    explanation:
      'Temperature 0 favorece decodificación greedy: el modelo elige el token más probable en cada paso y reduce la aleatoriedad. Temperature 1 aumenta diversidad; instrucciones en el prompt no garantizan determinismo; Guardrails filtra contenido, no controla el muestreo.',
  },
  {
    id: 212,
    certification: 'AIF-C01',
    domain: 'foundation-model-applications',
    topic: 'RAG (Retrieval Augmented Generation)',
    services: ['Bedrock', 'Nova'],
    difficulty: 'medium',
    type: 'single',
    question:
      'Una inmobiliaria genera renders con Amazon Nova Canvas en Amazon Bedrock y necesita excluir de forma explícita elementos no deseados (por ejemplo, muebles o personas). ¿Qué técnica de prompting aplica?',
    answers: [
      { id: 'A', text: 'Subir la temperature (temperatura) para más diversidad' },
      { id: 'B', text: 'Usar un prompt negativo (negative prompt) que liste lo que debe evitarse' },
      { id: 'C', text: 'Indexar catálogos en Amazon Bedrock Knowledge Bases (RAG)' },
      { id: 'D', text: 'Aplicar ajuste fino (fine-tuning) del modelo de imagen' },
    ],
    correctAnswers: ['B'],
    explanation:
      'Un negative prompt indica al modelo de imagen qué elementos evitar. Subir temperature aumenta variación; Knowledge Bases y fine-tuning no son el mecanismo directo para excluir objetos en una generación puntual.',
  },
  {
    id: 213,
    certification: 'AIF-C01',
    domain: 'foundation-model-applications',
    topic: 'Parámetros de inferencia',
    services: ['Bedrock'],
    difficulty: 'medium',
    type: 'single',
    question:
      'Un banco usa un LLM preentrenado como asistente de productos financieros. Necesita respuestas breves en un idioma concreto, sin cambiar de modelo ni entrenar. ¿Qué enfoque alinea mejor la salida?',
    answers: [
      { id: 'A', text: 'Cambiar a un LLM de distinto tamaño en Amazon Bedrock' },
      { id: 'B', text: 'Aumentar temperature (temperatura) para más creatividad' },
      { id: 'C', text: 'Refinar el prompt con restricciones de longitud e idioma (prompt engineering)' },
      { id: 'D', text: 'Aumentar Top K para ampliar candidatos de muestreo' },
    ],
    correctAnswers: ['C'],
    explanation:
      'Refinar el prompt permite indicar longitud e idioma de forma directa y barata. Cambiar de modelo o subir temperature/Top K no asegura brevedad ni el idioma objetivo.',
  },
  {
    id: 214,
    certification: 'AIF-C01',
    domain: 'foundation-model-applications',
    topic: 'RAG (Retrieval Augmented Generation)',
    services: ['Bedrock'],
    difficulty: 'hard',
    type: 'single',
    question:
      'Una empresa logística necesita un asistente que, en una sola sesión, consulte fuentes internas, invoque APIs externas de transporte, compare rutas y priorice una respuesta. No basta con recuperar documentos ni con versionar prompts. ¿Qué capacidad de Amazon Bedrock encaja?',
    answers: [
      { id: 'A', text: 'Amazon Bedrock Prompt Management' },
      { id: 'B', text: 'Amazon Bedrock Knowledge Bases' },
      { id: 'C', text: 'Amazon Bedrock Agents' },
      { id: 'D', text: 'Amazon Bedrock Model Evaluation' },
    ],
    correctAnswers: ['C'],
    explanation:
      'Agents orquestan razonamiento multi-paso, invocan herramientas/APIs y priorizan acciones. Knowledge Bases aporta RAG; Prompt Management versiona prompts; Model Evaluation mide calidad del modelo, no ejecuta flujos con APIs.',
  },
  {
    id: 215,
    certification: 'AIF-C01',
    domain: 'foundation-model-applications',
    topic: 'Ajuste fino y personalización de modelos',
    services: [],
    difficulty: 'medium',
    type: 'single',
    question:
      'Un equipo de RR. HH. aplicó ajuste fino (fine-tuning) a un LLM para el portal de empleados y quiere una métrica que equilibre precisión y exhaustividad al validar si mejoró la calidad de las respuestas etiquetadas. ¿Cuál es la más adecuada?',
    answers: [
      { id: 'A', text: 'Precision (precisión) aislada' },
      { id: 'B', text: 'Puntuación F1 (F1 score)' },
      { id: 'C', text: 'Time to first token (tiempo hasta el primer token)' },
      { id: 'D', text: 'Perplexity (perplejidad)' },
    ],
    correctAnswers: ['B'],
    explanation:
      'F1 combina precision y recall en un solo valor y refleja calidad de clasificación/etiquetado tras fine-tuning. Time to first token mide latencia; perplexity estima fluidez del lenguaje, no necesariamente la mejora de la tarea de negocio.',
  },
  {
    id: 216,
    certification: 'AIF-C01',
    domain: 'foundation-model-applications',
    topic: 'RAG (Retrieval Augmented Generation)',
    services: ['Bedrock'],
    difficulty: 'hard',
    type: 'single',
    question:
      'Un fabricante de autos quiere un chat sobre manuales PDF en Amazon Bedrock. Los manuales se actualizan a menudo y el presupuesto prioriza el menor costo operativo frente a reentrenar. ¿Qué enfoque encaja mejor?',
    answers: [
      { id: 'A', text: 'Incluir todos los manuales completos en cada prompt como contexto' },
      { id: 'B', text: 'Cargar los PDF en Amazon Bedrock Knowledge Bases y recuperar solo pasajes relevantes (RAG)' },
      { id: 'C', text: 'Hacer fine-tuning del foundation model con el texto de los manuales' },
      { id: 'D', text: 'Aplicar continuous pre-training (preentrenamiento continuo) del modelo base' },
    ],
    correctAnswers: ['B'],
    explanation:
      'Knowledge Bases con RAG indexa documentos y recupera solo fragmentos relevantes por consulta, barato y fácil de actualizar. Meter todo el PDF en el prompt dispara tokens; fine-tuning y continuous pre-training son costosos y se desactualizan al cambiar los manuales.',
  },
  {
    id: 217,
    certification: 'AIF-C01',
    domain: 'foundation-model-applications',
    topic: 'Amazon Bedrock',
    services: ['Bedrock'],
    difficulty: 'medium',
    type: 'single',
    question:
      'Un marketplace genera imágenes de producto con un modelo tipo Stable Diffusion vía Amazon Bedrock. Las salidas son aleatorias y omiten detalles del prompt. El equipo quiere mayor fidelidad al texto, no solo más pasos de refinamiento. ¿Qué parámetro debe subir?',
    answers: [
      { id: 'A', text: 'Aumentar el número de generation steps (pasos de generación)' },
      { id: 'B', text: 'Aumentar la escala de classifier-free guidance (CFG)' },
      { id: 'C', text: 'Fijar una random seed (semilla aleatoria)' },
      { id: 'D', text: 'Activar Amazon Bedrock Guardrails sobre las imágenes' },
    ],
    correctAnswers: ['B'],
    explanation:
      'La escala CFG controla cuánto pesa el prompt de texto frente a la distribución incondicional; subirla aumenta la adherencia al prompt. Más steps mejora detalle/refinamiento; una seed fija reproduce una muestra; Guardrails no fuerza fidelidad al prompt creativo.',
  },
  {
    id: 218,
    certification: 'AIF-C01',
    domain: 'foundation-model-applications',
    topic: 'Amazon Bedrock',
    services: ['Bedrock'],
    difficulty: 'medium',
    type: 'single',
    question:
      'Una agencia de publicidad usa un foundation model (FM) de imagen en Amazon Bedrock y necesita controlar si cada render sale más detallado o más abstracto. ¿Qué parámetro del modelo debe ajustar?',
    answers: [
      { id: 'A', text: 'Model checkpoint (punto de control del modelo)' },
      { id: 'B', text: 'Generation step (pasos de generación / denoising)' },
      { id: 'C', text: 'Batch size (tamaño de lote de entrenamiento)' },
      { id: 'D', text: 'Token length (longitud máxima de tokens de texto)' },
    ],
    correctAnswers: ['B'],
    explanation:
      'Generation steps define cuántos pasos de refinamiento ejecuta el modelo de difusión: más pasos suelen dar más detalle; menos, resultados más abstractos. Checkpoint, batch size y token length no controlan ese eje de detalle en inferencia de imagen.',
  },
  {
    id: 219,
    certification: 'AIF-C01',
    domain: 'foundation-model-applications',
    topic: 'RAG (Retrieval Augmented Generation)',
    services: [],
    difficulty: 'hard',
    type: 'single',
    question:
      'El chatbot de un bufete responde sobre jurisprudencia densa. Tras varios ciclos de prompt engineering y RAG, el modelo sigue fallando en terminología jurídica especializada y estilo de redacción forense. ¿Qué intervención es la más efectiva para interiorizar ese dominio?',
    answers: [
      { id: 'A', text: 'Añadir más few-shot examples (ejemplos few-shot) en el prompt' },
      { id: 'B', text: 'Aplicar domain adaptation fine-tuning (ajuste fino de adaptación al dominio) sobre el corpus jurídico' },
      { id: 'C', text: 'Ampliar la knowledge base (base de conocimiento) con más sentencias' },
      { id: 'D', text: 'Bajar temperature (temperatura) para respuestas más conservadoras' },
    ],
    correctAnswers: ['B'],
    explanation:
      'Cuando el fallo es léxico/estilo de dominio tras agotar prompts y RAG, el fine-tuning de adaptación al dominio actualiza pesos con el corpus especializado. More RAG ayuda a hechos puntuales; few-shot y temperature no enseñan terminología profunda de forma durable.',
  },
  {
    id: 220,
    certification: 'AIF-C01',
    domain: 'foundation-model-applications',
    topic: 'Ingeniería de prompts',
    services: ['Bedrock'],
    difficulty: 'medium',
    type: 'single',
    question:
      'El chatbot de una cadena retail en Amazon Bedrock clasifica la intención del usuario. El equipo quiere mejorar con aprendizaje few-shot (few-shot learning) en el prompt. ¿Qué pares de ejemplo debe incluir?',
    answers: [
      { id: 'A', text: 'Pares de mensajes del usuario e intenciones correctas' },
      { id: 'B', text: 'Pares de mensajes del usuario y respuestas largas del chatbot' },
      { id: 'C', text: 'Pares de respuestas del chatbot e intenciones del usuario' },
      { id: 'D', text: 'Pares de intenciones y respuestas de un Agent de Bedrock' },
    ],
    correctAnswers: ['A'],
    explanation:
      'Few-shot para detección de intenciones muestra el mapeo entrada→etiqueta: mensaje del usuario e intención correcta. Ejemplos de respuestas conversacionales o de Agents enseñan otra tarea distinta.',
  },
  {
    id: 221,
    certification: 'AIF-C01',
    domain: 'foundation-model-applications',
    topic: 'Evaluación de modelos generativos',
    services: ['Bedrock'],
    difficulty: 'medium',
    type: 'single',
    question:
      'Una app de periodismo reescribe notas con un LLM y dispone de versiones de referencia «mejoradas». Quiere medir solapamiento de n-gramas entre la salida y esas referencias. ¿Qué métrica debe usar?',
    answers: [
      { id: 'A', text: 'Perplexity (perplejidad) del texto generado' },
      { id: 'B', text: 'ROUGE (Recall-Oriented Understudy for Gisting Evaluation)' },
      { id: 'C', text: 'Amazon Bedrock Model Evaluation con LLM-as-a-judge únicamente' },
      { id: 'D', text: 'Latencia promedio de respuesta' },
    ],
    correctAnswers: ['B'],
    explanation:
      'ROUGE mide solapamiento de n-gramas/secuencias frente a referencias, ideal para reescritura/resumen. Perplexity y latencia no capturan similitud con ejemplos; LLM-as-a-judge es cualitativo y no es la métrica de solapamiento pedida.',
  },
  {
    id: 222,
    certification: 'AIF-C01',
    domain: 'foundation-model-applications',
    topic: 'Bases de datos vectoriales y embeddings',
    services: ['Bedrock', 'Aurora'],
    difficulty: 'medium',
    type: 'single',
    question:
      'Un equipo de datos quiere almacenar embeddings junto a datos transaccionales y hacer búsqueda por similitud vectorial con SQL, sin montar un motor de búsqueda separado. ¿Cuál es el principal beneficio de Amazon Aurora con la extensión pgvector?',
    answers: [
      { id: 'A', text: 'Genera foundation models automáticamente' },
      { id: 'B', text: 'Sustituye a Amazon Bedrock Knowledge Bases para orquestar Agents' },
      { id: 'C', text: 'Habilita búsqueda por similitud vectorial dentro de una base relacional' },
      { id: 'D', text: 'Proporciona Provisioned Throughput para LLMs' },
    ],
    correctAnswers: ['C'],
    explanation:
      'Aurora + pgvector permite guardar y consultar embeddings con búsqueda por similitud en un motor relacional. No entrena FMs, no orquesta Agents ni reserva throughput de Bedrock.',
  },
  {
    id: 223,
    certification: 'AIF-C01',
    domain: 'foundation-model-applications',
    topic: 'Aplicaciones de modelos fundacionales',
    services: [],
    difficulty: 'hard',
    type: 'multiple',
    question:
      '¿Cuáles dos métricas son ejemplos de métricas de alineación con el negocio para evaluar aplicaciones de IA?',
    answers: [
      { id: 'A', text: 'Satisfacción del usuario' },
      { id: 'B', text: 'BERTScore' },
      { id: 'C', text: 'Costo por interacción' },
      { id: 'D', text: 'Puntaje ROUGE' },
    ],
    correctAnswers: ['A', 'C'],
    explanation:
      'La satisfacción del usuario mide qué tan bien la aplicación de IA cumple las expectativas del usuario final, y el costo por interacción mide el gasto operativo de cada interacción, ambos alineados directamente con objetivos de negocio y definidos como métricas de alineación empresarial.',
  },
  {
    id: 224,
    certification: 'AIF-C01',
    domain: 'foundation-model-applications',
    topic: 'Ajuste fino y personalización de modelos',
    services: [],
    difficulty: 'medium',
    type: 'single',
    question:
      'Una consultora energética quiere adaptar un foundation model (FM) a la terminología de su industria usando un dataset etiquetado de preguntas y respuestas expertas. ¿Qué técnica describe ese proceso?',
    answers: [
      { id: 'A', text: 'Continuous pre-training (preentrenamiento continuo) no supervisado' },
      { id: 'B', text: 'In-context learning (aprendizaje en contexto) solo con el prompt' },
      { id: 'C', text: 'Ajuste fino (fine-tuning)' },
      { id: 'D', text: 'Destilación de modelos (model distillation)' },
    ],
    correctAnswers: ['C'],
    explanation:
      'Fine-tuning entrena un modelo preentrenado con datos etiquetados de dominio para interiorizar terminología y formato. Continuous pre-training suele usar texto no etiquetado; in-context learning no actualiza pesos; distillation comprime un modelo, no adapta dominio por sí sola.',
  },
  {
    id: 225,
    certification: 'AIF-C01',
    domain: 'foundation-model-applications',
    topic: 'RAG (Retrieval Augmented Generation)',
    services: [],
    difficulty: 'medium',
    type: 'single',
    question:
      'Una universidad construye un chatbot de políticas estudiantiles sobre un gran repositorio de PDFs que se actualiza cada semestre. Quiere respuestas fundamentadas en documentos actuales sin reentrenar el LLM cada ciclo. ¿Qué técnica encaja mejor?',
    answers: [
      { id: 'A', text: 'Fijar temperature (temperatura) en 1' },
      { id: 'B', text: 'Usar Retrieval Augmented Generation (RAG)' },
      { id: 'C', text: 'Hacer fine-tuning del modelo con todos los PDFs cada semestre' },
      { id: 'D', text: 'Disminuir el tamaño máximo de tokens de salida' },
    ],
    correctAnswers: ['B'],
    explanation:
      'RAG recupera pasajes actuales en el momento de la consulta y fundamenta la respuesta sin reentrenar. Fine-tuning periódico es caro y lento ante cambios frecuentes; temperature y max tokens no aportan conocimiento documental.',
  },
  {
    id: 226,
    certification: 'AIF-C01',
    domain: 'foundation-model-applications',
    topic: 'RAG (Retrieval Augmented Generation)',
    services: [],
    difficulty: 'medium',
    type: 'multiple',
    question:
      'La aplicación RAG de un portal de noticias debe sentirse casi en tiempo real, mientras se publican artículos nuevos a diario. ¿Cuáles dos pasos del pipeline pueden ejecutarse como trabajos batch offline?',
    answers: [
      { id: 'A', text: 'Generar embeddings para cada consulta entrante del usuario' },
      { id: 'B', text: 'Generar embeddings para el contenido publicado' },
      { id: 'C', text: 'Clasificar y devolver resultados para la consulta de un usuario' },
      { id: 'D', text: 'Construir o actualizar el índice de búsqueda vectorial' },
    ],
    correctAnswers: ['B', 'D'],
    explanation:
      'Generar embeddings del contenido y construir o actualizar el índice de búsqueda dependen solo de los documentos, por lo que pueden ejecutarse en lotes periódicos a medida que llegan artículos nuevos, fuera del camino en tiempo real.',
  },
  {
    id: 227,
    certification: 'AIF-C01',
    domain: 'foundation-model-applications',
    topic: 'Amazon Bedrock',
    services: ['Bedrock'],
    difficulty: 'easy',
    type: 'single',
    question:
      'Una red social ejecuta análisis de sentimiento con un LLM en Amazon Bedrock. Con el mismo prompt, las etiquetas varían entre invocaciones. ¿Qué cambio de parámetro de inferencia estabiliza más las salidas?',
    answers: [
      { id: 'A', text: 'Aumentar temperature (temperatura)' },
      { id: 'B', text: 'Aumentar la longitud máxima de generación' },
      { id: 'C', text: 'Disminuir temperature (temperatura)' },
      { id: 'D', text: 'Activar Amazon Bedrock Agents' },
    ],
    correctAnswers: ['C'],
    explanation:
      'Bajar temperature reduce la aleatoriedad del muestreo y hace las salidas más consistentes. Subirla aumenta variación; longitud máxima y Agents no controlan la estabilidad del muestreo.',
  },
  {
    id: 228,
    certification: 'AIF-C01',
    domain: 'foundation-model-applications',
    topic: 'Ajuste fino y personalización de modelos',
    services: [],
    difficulty: 'medium',
    type: 'single',
    question:
      'Una empresa quiere personalizar un foundation model (FM) absorbiendo grandes volúmenes de documentos internos no etiquetados para mejorar el dominio lingüístico general, no una tarea supervisada concreta de prompt→respuesta. ¿Qué enfoque cumple el requisito?',
    answers: [
      { id: 'A', text: 'Clasificación supervisada (classification)' },
      { id: 'B', text: 'Destilación (distillation) a un modelo más pequeño' },
      { id: 'C', text: 'Continued pre-training / continuous pre-training (preentrenamiento continuo)' },
      { id: 'D', text: 'Regresión (regression) sobre métricas de negocio' },
    ],
    correctAnswers: ['C'],
    explanation:
      'Continued/continuous pre-training sigue entrenando el FM con corpus de dominio (a menudo no etiquetado) para adaptar el lenguaje. Classification y regression son tareas ML distintas; distillation comprime conocimiento, no es el mecanismo principal de adaptación documental.',
  },
  {
    id: 229,
    certification: 'AIF-C01',
    domain: 'foundation-model-applications',
    topic: 'Parámetros de inferencia',
    services: [],
    difficulty: 'hard',
    type: 'multiple',
    question:
      '¿Cuáles dos parámetros se usan comúnmente para controlar la diversidad de la salida de un modelo de IA generativa?',
    answers: [
      { id: 'A', text: 'Model size' },
      { id: 'B', text: 'Top-k sampling' },
      { id: 'C', text: 'Training dataset size' },
      { id: 'D', text: 'Top-p (nucleus) sampling' },
    ],
    correctAnswers: ['B', 'D'],
    explanation:
      'Top-k sampling limita la selección a los k tokens más probables, y Top-p (nucleus) sampling selecciona del conjunto más pequeño de tokens cuyas probabilidades suman p; ambos ajustan el pool de candidatos para equilibrar diversidad y calidad del texto generado.',
  },
  {
    id: 230,
    certification: 'AIF-C01',
    domain: 'foundation-model-applications',
    topic: 'RAG (Retrieval Augmented Generation)',
    services: ['SageMaker', 'Bedrock', 'Lambda'],
    difficulty: 'medium',
    type: 'single',
    question:
      'Una cadena hotelera quiere un chatbot de texto para reservas, tarifas y pagos, basado en LLMs más una knowledge base, con el MENOR esfuerzo de desarrollo. ¿Qué solución encaja?',
    answers: [
      { id: 'A', text: 'Entrenar modelos con Amazon SageMaker Autopilot' },
      { id: 'B', text: 'Hacer fine-tuning de modelos en Amazon SageMaker JumpStart' },
      { id: 'C', text: 'Construir un agente RAG con Amazon Bedrock' },
      { id: 'D', text: 'Construir un servicio de orquestación personalizado con AWS Lambda y un modelo autoalojado' },
    ],
    correctAnswers: ['C'],
    explanation:
      'Amazon Bedrock permite combinar un LLM con una knowledge base usando RAG para entregar respuestas precisas y actuales con mínimo esfuerzo de desarrollo.',
  },
  {
    id: 231,
    certification: 'AIF-C01',
    domain: 'foundation-model-applications',
    topic: 'Parámetros de inferencia',
    services: [],
    difficulty: 'medium',
    type: 'single',
    question:
      'Un ingeniero de prompts ajusta la inferencia de un LLM: necesita limitar cuántos tokens candidatos se consideran en cada paso de generación (los K más probables). ¿Qué parámetro controla eso?',
    answers: [
      { id: 'A', text: 'Maximum tokens (máximo de tokens de salida)' },
      { id: 'B', text: 'Temperature (temperatura)' },
      { id: 'C', text: 'Top K' },
      { id: 'D', text: 'Batch size (tamaño de lote)' },
    ],
    correctAnswers: ['C'],
    explanation:
      'Top K restringe el muestreo a los K tokens más probables en cada paso. Maximum tokens limita la longitud; temperature escala la distribución; batch size aplica a entrenamiento/lotes, no a candidatos por paso.',
  },
  {
    id: 232,
    certification: 'AIF-C01',
    domain: 'foundation-model-applications',
    topic: 'Evaluación de modelos generativos',
    services: ['Bedrock'],
    difficulty: 'medium',
    type: 'single',
    question:
      'Un equipo de NLP evalúa un foundation model (FM) en una tarea de resumen de documentos corporativos frente a resúmenes de referencia escritos por expertos. ¿Qué métrica se usa comúnmente para esa evaluación?',
    answers: [
      { id: 'A', text: 'F1 score (puntuación F1) de clasificación binaria' },
      { id: 'B', text: 'Mean squared error (MSE)' },
      { id: 'C', text: 'ROUGE (Recall-Oriented Understudy for Gisting Evaluation)' },
      { id: 'D', text: 'Exactitud de Amazon Bedrock Guardrails' },
    ],
    correctAnswers: ['C'],
    explanation:
      'ROUGE compara el resumen generado con referencias midiendo solapamiento orientado a recall, estándar en summarization. F1/MSE responden a otras tareas; Guardrails no es métrica de calidad de resumen.',
  },
  {
    id: 233,
    certification: 'AIF-C01',
    domain: 'foundation-model-applications',
    topic: 'RAG (Retrieval Augmented Generation)',
    services: ['SageMaker', 'Bedrock', 'Personalize'],
    difficulty: 'hard',
    type: 'single',
    question:
      'Una telco dispone de ~100 conversaciones de alta calidad agente–cliente y quiere que el chatbot adopte de forma persistente el tono y estilo corporativo. RAG ya cubre FAQs factuales. ¿Qué solución encaja para interiorizar el tono?',
    answers: [
      { id: 'A', text: 'Usar Amazon Personalize para generar las respuestas' },
      { id: 'B', text: 'Crear un trabajo de fine-tuning (ajuste fino) en Amazon Bedrock con esas conversaciones' },
      { id: 'C', text: 'Crear un trabajo de pre-training desde cero en Amazon SageMaker HyperPod' },
      { id: 'D', text: 'Añadir solo Amazon Bedrock Guardrails con filtros de tono' },
    ],
    correctAnswers: ['B'],
    explanation:
      'Fine-tuning en Bedrock con ejemplos prompt/completion enseña tono y estilo de forma persistente. Personalize es recomendación; pre-training desde cero es excesivo; Guardrails restringe contenido inseguro, no entrena el estilo conversacional.',
  },
  {
    id: 234,
    certification: 'AIF-C01',
    domain: 'foundation-model-applications',
    topic: 'Parámetros de inferencia',
    services: [],
    difficulty: 'hard',
    type: 'single',
    question:
      'Un practicante compara top-p (nucleus sampling) con el muestreo guiado solo por temperature. ¿Qué distingue correctamente al muestreo top-p?',
    answers: [
      { id: 'A', text: 'Solo funciona con arquitecturas encoder-only' },
      { id: 'B', text: 'Garantiza siempre la misma salida para un prompt dado' },
      { id: 'C', text: 'Limita el muestreo a exactamente un token (greedy fijo)' },
      { id: 'D', text: 'Muestrea del conjunto más pequeño de tokens principales cuyas probabilidades acumuladas alcanzan p' },
    ],
    correctAnswers: ['D'],
    explanation:
      'Top-p selecciona el núcleo mínimo de tokens de mayor probabilidad cuya masa acumulada llega a p y muestrea ahí, adaptando el tamaño del conjunto. No es exclusivo de una arquitectura ni garantiza determinismo; un solo token sería greedy/top-1.',
  },
  {
    id: 235,
    certification: 'AIF-C01',
    domain: 'foundation-model-applications',
    topic: 'RAG (Retrieval Augmented Generation)',
    services: ['SageMaker', 'Bedrock', 'Rekognition'],
    difficulty: 'medium',
    type: 'single',
    question:
      'Una planta de alimentos necesita un dataset de imágenes etiquetadas de alta precisión para detección de defectos y quiere minimizar ejemplos mal etiquetados con revisión experta. ¿Qué enfoque cumple mejor?',
    answers: [
      { id: 'A', text: 'Anotación 100 % automatizada con Amazon Rekognition Custom Labels' },
      { id: 'B', text: 'Validación human-in-the-loop (humano en el bucle) con Amazon SageMaker Ground Truth Plus' },
      { id: 'C', text: 'Generar solo imágenes sintéticas con un FM de Amazon Bedrock sin revisión' },
      { id: 'D', text: 'Indexar fotos en Amazon Bedrock Knowledge Bases' },
    ],
    correctAnswers: ['B'],
    explanation:
      'Ground Truth Plus con human-in-the-loop permite que revisores expertos verifiquen y corrijan etiquetas, maximizando precisión. Automatización pura o sintéticos sin revisión elevan el riesgo de errores; Knowledge Bases no etiqueta datasets de visión.',
  },
  {
    id: 236,
    certification: 'AIF-C01',
    domain: 'foundation-model-applications',
    topic: 'Evaluación de modelos generativos',
    services: [],
    difficulty: 'medium',
    type: 'single',
    question:
      'Un call center de seguros despliega un chatbot con LLM para acortar la resolución de consultas de pólizas. El negocio quiere una métrica de alineación con el objetivo operativo (menos tiempo de agente). ¿Cuál es la más adecuada?',
    answers: [
      { id: 'A', text: 'Responsabilidad social corporativa' },
      { id: 'B', text: 'Puntaje ROUGE del chatbot' },
      { id: 'C', text: 'Duración promedio de la llamada (average handle time)' },
      { id: 'D', text: 'Tasa de engagement del sitio web de marketing' },
    ],
    correctAnswers: ['C'],
    explanation:
      'La duración promedio de la llamada refleja si el chatbot reduce el trabajo del agente. ROUGE mide solapamiento textual; RSC y engagement web no miden el impacto operativo del call center.',
  },
  {
    id: 237,
    certification: 'AIF-C01',
    domain: 'foundation-model-applications',
    topic: 'Aplicaciones de modelos fundacionales',
    services: ['SageMaker'],
    difficulty: 'hard',
    type: 'single',
    question:
      'Una plataforma de gaming quiere comparar la toxicidad de la salida de varios LLM candidatos de Amazon SageMaker JumpStart con el MENOR esfuerzo operativo. ¿Qué enfoque de evaluación encaja?',
    answers: [
      { id: 'A', text: 'Evaluación del modelo con una fuerza laboral de revisión humana' },
      { id: 'B', text: 'Evaluación automática del modelo usando métricas de toxicidad integradas' },
      { id: 'C', text: 'Calificación humana crowdsourced' },
      { id: 'D', text: 'Pruebas A/B de los modelos con usuarios en vivo' },
    ],
    correctAnswers: ['B'],
    explanation:
      'La evaluación automática del modelo puntúa salidas con métricas de toxicidad integradas y no requiere reclutar ni coordinar personas, ofreciendo el menor esfuerzo operativo.',
  },
  {
    id: 238,
    certification: 'AIF-C01',
    domain: 'foundation-model-applications',
    topic: 'Parámetros de inferencia',
    services: [],
    difficulty: 'medium',
    type: 'single',
    question:
      'Un equipo de ML afina un foundation model (FM) y, tras pocas pasadas, la precisión en validación aún no alcanza el umbral. Asumiendo que no hay sobreajuste (overfitting) evidente, ¿qué ajuste de entrenamiento suele ayudar?',
    answers: [
      { id: 'A', text: 'Disminuir el número de epochs (épocas)' },
      { id: 'B', text: 'Disminuir el batch size sin más contexto' },
      { id: 'C', text: 'Aumentar el número de epochs (épocas)' },
      { id: 'D', text: 'Aumentar temperature (temperatura) en inferencia' },
    ],
    correctAnswers: ['C'],
    explanation:
      'Más epochs dan más pasadas sobre los datos de entrenamiento y suelen mejorar el ajuste hasta el umbral, si no hay overfitting. Bajar epochs reduce aprendizaje; temperature es de inferencia, no de entrenamiento.',
  },
  {
    id: 239,
    certification: 'AIF-C01',
    domain: 'foundation-model-applications',
    topic: 'Parámetros de inferencia',
    services: ['Bedrock'],
    difficulty: 'medium',
    type: 'single',
    question:
      'El LLM de una firma de asesoría financiera produce alucinaciones (hallucinations) en respuestas factuales. El equipo busca un cambio de inferencia inmediato, sin reentrenar ni montar Agents. ¿Qué cambio puede reducirlas?',
    answers: [
      { id: 'A', text: 'Disminuir temperature (temperatura) de inferencia del modelo' },
      { id: 'B', text: 'Usar Amazon Bedrock Agents para «supervisar» el entrenamiento' },
      { id: 'C', text: 'Eliminar del dataset de fine-tuning cualquier dato «que cause alucinaciones» sin métricas' },
      { id: 'D', text: 'Cambiar a un FM comercializado como «que nunca alucina»' },
    ],
    correctAnswers: ['A'],
    explanation:
      'Bajar temperature reduce muestreo aleatorio y favorece tokens de alta probabilidad, lo que suele disminuir inventivas. Agents no entrenan; no existe un FM sin alucinaciones; limpiar datos sin evidencia no es el cambio de inferencia pedido.',
  },
  {
    id: 240,
    certification: 'AIF-C01',
    domain: 'foundation-model-applications',
    topic: 'Ingeniería de prompts',
    services: [],
    difficulty: 'hard',
    type: 'single',
    question:
      'Una startup edtech opera un asistente de preguntas y respuestas y quiere que el estilo de respuesta coincida con el rango de edad de cada estudiante, que la app ya envía al modelo. ¿Qué enfoque requiere el MENOR esfuerzo?',
    answers: [
      { id: 'A', text: 'Entrenar un modelo fine-tuned separado para cada rango de edad' },
      { id: 'B', text: 'Construir un pipeline RAG con contenido específico por edad' },
      { id: 'C', text: 'Postprocesar cada respuesta con un segundo modelo para ajustar el tono' },
      { id: 'D', text: 'Agregar al prompt una instrucción de rol y audiencia que indique el rango de edad del usuario' },
    ],
    correctAnswers: ['D'],
    explanation:
      'Agregar una instrucción de rol y audiencia al prompt es un cambio simple de prompt engineering que orienta el estilo al rango de edad indicado con casi ningún trabajo extra.',
  },
  {
    id: 241,
    certification: 'AIF-C01',
    domain: 'foundation-model-applications',
    topic: 'RAG (Retrieval Augmented Generation)',
    services: ['Aurora'],
    difficulty: 'easy',
    type: 'multiple',
    question:
      'Para aplicaciones de IA, ¿cuáles dos capacidades de Amazon Aurora con la extensión pgvector son las más importantes?',
    answers: [
      { id: 'A', text: 'Operaciones SQL estándar' },
      { id: 'B', text: 'Búsqueda por similitud vectorial' },
      { id: 'C', text: 'Web hosting' },
      { id: 'D', text: 'Combinar vectores con datos estructurados' },
    ],
    correctAnswers: ['B', 'D'],
    explanation:
      'La búsqueda por similitud vectorial permite encontrar el contenido semánticamente más relacionado, paso central en tareas como RAG, y combinar vectores con datos estructurados significa que esas búsquedas corren junto a registros relacionales existentes en la misma base de datos, lo que hace valiosa a Aurora con pgvector para cargas de IA.',
  },
  {
    id: 242,
    certification: 'AIF-C01',
    domain: 'foundation-model-applications',
    topic: 'RAG (Retrieval Augmented Generation)',
    services: [],
    difficulty: 'medium',
    type: 'single',
    question:
      'Una cadena de farmacias opera un asistente para agentes: las FAQs cambian a diario y necesitan respuestas actualizadas al menor costo, sin reentrenar cada noche. ¿Qué enfoque encaja?',
    answers: [
      { id: 'A', text: 'Usar RAG con ingeniería de prompts (prompt engineering)' },
      { id: 'B', text: 'Fine-tuning recurrente del modelo cada vez que cambia una FAQ' },
      { id: 'C', text: 'Preentrenar un FM desde cero con el historial de FAQs' },
      { id: 'D', text: 'Pegar todo el conjunto de FAQ en el system prompt de cada llamada' },
    ],
    correctAnswers: ['A'],
    explanation:
      'RAG recupera FAQs actuales en consulta y el prompt moldea la respuesta, barato ante cambios frecuentes. Fine-tuning/pretraining recurrentes son caros; meter todas las FAQs en el system prompt dispara tokens y no escala.',
  },
  {
    id: 243,
    certification: 'AIF-C01',
    domain: 'foundation-model-applications',
    topic: 'Ingeniería de prompts',
    services: [],
    difficulty: 'medium',
    type: 'single',
    question:
      'Una tienda de moda quiere que un LLM escriba descripciones cortas por categoría (zapatos, abrigos, etc.) centradas en atributos clave y con longitud fija. ¿Qué enfoque de prompt engineering funciona mejor?',
    answers: [
      { id: 'A', text: 'Un único prompt genérico para todos los productos y edición manual masiva' },
      { id: 'B', text: 'Prompts específicos por categoría que destaquen atributos clave y fijen formato y longitud' },
      { id: 'C', text: 'Listar todos los atributos posibles en un mega-prompt sin instrucciones de formato' },
      { id: 'D', text: 'Pedir máxima creatividad y recortar después con un Agent' },
    ],
    correctAnswers: ['B'],
    explanation:
      'Prompts por categoría con atributos, formato y longitud orientan salidas consistentes y cortas. Prompts genéricos o mega-listas sin formato producen ruido; maximizar creatividad va en contra de descripciones controladas.',
  },
  {
    id: 244,
    certification: 'AIF-C01',
    domain: 'foundation-model-applications',
    topic: 'Bases de datos vectoriales y embeddings',
    services: ['OpenSearch'],
    difficulty: 'hard',
    type: 'multiple',
    question:
      '¿Cuáles son dos casos de uso principales para almacenar embeddings en una base de datos vectorial como Amazon OpenSearch Service?',
    answers: [
      { id: 'A', text: 'Coincidencia exacta de cadenas por palabras clave' },
      { id: 'B', text: 'Búsqueda semántica sobre documentos' },
      { id: 'C', text: 'Trabajos ETL batch programados' },
      { id: 'D', text: 'Recomendaciones basadas en similitud' },
    ],
    correctAnswers: ['B', 'D'],
    explanation:
      'La búsqueda semántica y las recomendaciones basadas en similitud dependen de comparación de vecinos más cercanos sobre embeddings, que es exactamente lo que proporciona una base de datos vectorial.',
  },
  {
    id: 245,
    certification: 'AIF-C01',
    domain: 'foundation-model-applications',
    topic: 'Ingeniería de prompts',
    services: [],
    difficulty: 'hard',
    type: 'single',
    question:
      'Un equipo de seguridad revisa riesgos de usar solo ingeniería de prompts (prompt engineering) frente a un LLM en producción. ¿Qué afirmación describe una limitación o riesgo genuino?',
    answers: [
      { id: 'A', text: 'El prompt engineering garantiza salidas deterministas, así que la validación es innecesaria' },
      { id: 'B', text: 'El prompt engineering puede exponer al modelo a ataques de inyección de prompts (prompt injection)' },
      { id: 'C', text: 'Cada prompt actualiza permanentemente los pesos del foundation model' },
      { id: 'D', text: 'El prompt engineering elimina por completo el riesgo de envenenamiento de datos' },
    ],
    correctAnswers: ['B'],
    explanation:
      'Los prompts son una superficie de ataque: un adversario puede inyectar instrucciones que alteren el comportamiento. No garantiza determinismo, no actualiza pesos ni elimina envenenamiento de datos de entrenamiento.',
  },
  {
    id: 246,
    certification: 'AIF-C01',
    domain: 'foundation-model-applications',
    topic: 'RAG (Retrieval Augmented Generation)',
    services: ['Bedrock', 'DynamoDB', 'OpenSearch', 'ElastiCache', 'Redshift'],
    difficulty: 'easy',
    type: 'single',
    question:
      'Una empresa construye GenAI sobre Amazon Bedrock y necesita un servicio AWS con almacenamiento vectorial y búsqueda por similitud (k-NN) para embeddings de RAG. ¿Qué servicio encaja de forma directa?',
    answers: [
      { id: 'A', text: 'Amazon DynamoDB' },
      { id: 'B', text: 'Amazon ElastiCache' },
      { id: 'C', text: 'Amazon OpenSearch Service' },
      { id: 'D', text: 'Amazon Redshift' },
    ],
    correctAnswers: ['C'],
    explanation:
      'OpenSearch Service ofrece índices vectoriales y búsqueda k-NN sobre embeddings, habitual en backends RAG. DynamoDB, ElastiCache y Redshift no son el almacén vectorial managed típico para este patrón.',
  },
  {
    id: 247,
    certification: 'AIF-C01',
    domain: 'foundation-model-applications',
    topic: 'Evaluación de modelos generativos',
    services: [],
    difficulty: 'medium',
    type: 'single',
    question:
      'Una agencia de marketing genera miles de piezas con un FM y quiere evaluar calidad a escala sin depender de revisores humanos en cada salida. ¿Qué enfoque usa otro LLM como evaluador según rúbricas?',
    answers: [
      { id: 'A', text: 'Solo puntuación BLEU contra referencias fijas' },
      { id: 'B', text: 'LLM-as-a-judge (LLM como juez)' },
      { id: 'C', text: 'Comparación únicamente con datasets de benchmark públicos' },
      { id: 'D', text: 'Pruebas A/B con usuarios en vivo como única métrica' },
    ],
    correctAnswers: ['B'],
    explanation:
      'LLM-as-a-judge emplea un modelo juez para puntuar salidas según criterios, escalable sin humanos por ítem. BLEU/benchmarks y A/B son útiles pero no describen el patrón «otro LLM puntúa».',
  },
  {
    id: 248,
    certification: 'AIF-C01',
    domain: 'foundation-model-applications',
    topic: 'Aplicaciones de modelos fundacionales',
    services: [],
    difficulty: 'easy',
    type: 'single',
    question:
      'Durante un ejercicio de red teaming sobre un foundation model (FM), un ingeniero intenta eludir filtros de seguridad para forzar texto dañino. ¿Cómo se denomina esa técnica?',
    answers: [
      { id: 'A', text: 'Fuzzing de los datos de entrenamiento' },
      { id: 'B', text: 'Jailbreaking (evasión de restricciones del modelo)' },
      { id: 'C', text: 'Prueba de penetración de red corporativa' },
      { id: 'D', text: 'Ataque de denegación de servicio (DoS)' },
    ],
    correctAnswers: ['B'],
    explanation:
      'Jailbreaking busca eludir salvaguardas del modelo para obtener contenido restringido. Fuzzing de datos, pentest de red y DoS son categorías distintas de prueba/ataque.',
  },
  {
    id: 249,
    certification: 'AIF-C01',
    domain: 'foundation-model-applications',
    topic: 'Ingeniería de prompts',
    services: [],
    difficulty: 'medium',
    type: 'single',
    question:
      'Un equipo de seguridad quiere endurecer un asistente GenAI frente a inyecciones de prompt. ¿Qué enfoque de prompting se usa para diseñar y probar entradas hostiles de forma deliberada?',
    answers: [
      { id: 'A', text: 'Cadena de pensamiento (chain-of-thought prompting)' },
      { id: 'B', text: 'Few-shot prompting' },
      { id: 'C', text: 'Prompts adversarios (adversarial prompting)' },
      { id: 'D', text: 'Zero-shot prompting' },
    ],
    correctAnswers: ['C'],
    explanation:
      'Adversarial prompting elabora entradas maliciosas para descubrir y mitigar fallos (p. ej. prompt injection). CoT, few-shot y zero-shot mejoran tareas normales, no el endurecimiento adversario.',
  },
  {
    id: 250,
    certification: 'AIF-C01',
    domain: 'foundation-model-applications',
    topic: 'Evaluación de modelos generativos',
    services: [],
    difficulty: 'easy',
    type: 'multiple',
    question:
      '¿Cuáles dos métricas se usan comúnmente para evaluar la calidad de la salida de modelos de IA generativa?',
    answers: [
      { id: 'A', text: 'Uso de memoria GPU' },
      { id: 'B', text: 'Bilingual Evaluation Understudy (BLEU) score para calidad de traducción' },
      { id: 'C', text: 'Throughput de solicitudes por segundo' },
      { id: 'D', text: 'Recall-Oriented Understudy for Gisting Evaluation (ROUGE) score para calidad de resúmenes' },
    ],
    correctAnswers: ['B', 'D'],
    explanation:
      'BLEU evalúa calidad de traducción y ROUGE evalúa calidad de resúmenes comparando texto generado con referencias, por lo que ambas miden la calidad de la salida generativa.',
  },
  {
    id: 251,
    certification: 'AIF-C01',
    domain: 'foundation-model-applications',
    topic: 'Evaluación de modelos generativos',
    services: [],
    difficulty: 'medium',
    type: 'single',
    question:
      'Una plataforma educativa entrena un LLM para adolescentes y quiere medir si la salida replica ortografía creativa y abreviaturas de textos de referencia (solapamiento superficial de n-gramas). ¿Qué métrica encaja?',
    answers: [
      { id: 'A', text: 'BERTScore (similitud semántica contextual)' },
      { id: 'B', text: 'BLEU (Bilingual Evaluation Understudy)' },
      { id: 'C', text: 'Perplexity (perplejidad)' },
      { id: 'D', text: 'F1 score de clasificación de intenciones' },
    ],
    correctAnswers: ['B'],
    explanation:
      'BLEU mide solapamiento de n-gramas con referencias, sensible a coincidencias léxicas superficiales (abreviaturas, grafías). BERTScore prioriza semántica; perplexity y F1 miden otras cosas.',
  },
  {
    id: 252,
    certification: 'AIF-C01',
    domain: 'foundation-model-applications',
    topic: 'Ajuste fino y personalización de modelos',
    services: [],
    difficulty: 'medium',
    type: 'single',
    question:
      'Una empresa quiere mantener su foundation model (FM) al día reentrenándolo periódicamente con corpus reciente del dominio, sin partir de cero cada vez. ¿Qué estrategia describe ese enfoque?',
    answers: [
      { id: 'A', text: 'Batch learning estático único' },
      { id: 'B', text: 'Static training sin actualización' },
      { id: 'C', text: 'Latent training (término no estándar de actualización de FM)' },
      { id: 'D', text: 'Continuous pre-training (preentrenamiento continuo)' },
    ],
    correctAnswers: ['D'],
    explanation:
      'Continuous pre-training incorpora datos nuevos y actualiza pesos del FM de forma recurrente. Entrenamiento estático/batch único no mantiene el modelo al día; «latent training» no es la estrategia estándar en este contexto.',
  },
  {
    id: 253,
    certification: 'AIF-C01',
    domain: 'foundation-model-applications',
    topic: 'Bases de datos vectoriales y embeddings',
    services: ['OpenSearch'],
    difficulty: 'medium',
    type: 'single',
    question:
      'Un equipo quiere usar Amazon OpenSearch Service como backend de una aplicación de búsqueda vectorial / semántica. ¿Qué capacidad lo hace posible?',
    answers: [
      { id: 'A', text: 'Solo ranking BM25 de palabras clave full-text' },
      { id: 'B', text: 'Indexación geoespacial' },
      { id: 'C', text: 'Búsqueda k-NN de vecinos más cercanos sobre vectores de alta dimensionalidad' },
      { id: 'D', text: 'Replicación cross-cluster para DR únicamente' },
    ],
    correctAnswers: ['C'],
    explanation:
      'La búsqueda k-NN sobre embeddings es la base de apps de similitud vectorial en OpenSearch. BM25, geo y replicación son útiles, pero no definen la capacidad vectorial pedida.',
  },
  {
    id: 254,
    certification: 'AIF-C01',
    domain: 'foundation-model-applications',
    topic: 'Ingeniería de prompts',
    services: [],
    difficulty: 'medium',
    type: 'single',
    question:
      'Una cadena de ferreterías necesita un chatbot que consulte inventario en vivo vía API y diga el pasillo exacto. No basta con ejemplos en el prompt ni con razonar sin actuar. ¿Qué técnica de prompting/orquestación encaja?',
    answers: [
      { id: 'A', text: 'Few-shot prompting' },
      { id: 'B', text: 'Cadena de pensamiento (chain-of-thought) sin herramientas' },
      { id: 'C', text: 'Reasoning and acting / ReAct prompting (razonar y actuar)' },
      { id: 'D', text: 'Zero-shot prompting' },
    ],
    correctAnswers: ['C'],
    explanation:
      'ReAct entrelaza razonamiento con acciones (p. ej. llamar la API de inventario) y usa el resultado para responder. Few-shot/zero-shot/CoT no invocan por sí solos sistemas externos en tiempo real.',
  },
  {
    id: 255,
    certification: 'AIF-C01',
    domain: 'foundation-model-applications',
    topic: 'Ingeniería de prompts',
    services: ['Bedrock'],
    difficulty: 'medium',
    type: 'single',
    question:
      'Una empresa usa un LLM en Amazon Bedrock para etiquetar pasajes como positivo o negativo. Quiere few-shot prompting para mostrar el patrón de clasificación. ¿Qué debe incluir en el prompt?',
    answers: [
      { id: 'A', text: 'Una explicación larga de cómo funcionan internamente los transformers' },
      { id: 'B', text: 'Solo el pasaje nuevo, sin ejemplos ni etiquetas' },
      { id: 'C', text: 'Algunos pasajes de ejemplo, cada uno etiquetado como positivo o negativo' },
      { id: 'D', text: 'Ejemplos de resumen y traducción no relacionados con sentimiento' },
    ],
    correctAnswers: ['C'],
    explanation:
      'Few-shot muestra pares entrada→etiqueta del mismo tipo de tarea. Zero-shot omite ejemplos; teoría del modelo o tareas ajenas no enseñan el patrón de clasificación de sentimiento.',
  },
  {
    id: 256,
    certification: 'AIF-C01',
    domain: 'foundation-model-applications',
    topic: 'Amazon Bedrock',
    services: ['Bedrock'],
    difficulty: 'hard',
    type: 'single',
    question:
      'Una empresa ejecuta un foundation model grande en Amazon Bedrock, pero el costo de inferencia es demasiado alto. Quiere un modelo más pequeño y económico que retenga la mayor parte de la calidad del modelo grande. ¿Qué enfoque de personalización cumple este requisito?',
    answers: [
      { id: 'A', text: 'Retrieval Augmented Generation (RAG)' },
      { id: 'B', text: 'Model distillation' },
      { id: 'C', text: 'Continuous pre-training' },
      { id: 'D', text: 'In-context learning' },
    ],
    correctAnswers: ['B'],
    explanation:
      'Model distillation entrena un modelo estudiante más pequeño para replicar el comportamiento de un modelo maestro más grande, produciendo un modelo compacto que retiene la mayor parte de la calidad original con menor costo de inferencia.',
  },
  {
    id: 257,
    certification: 'AIF-C01',
    domain: 'foundation-model-applications',
    topic: 'Aplicaciones de modelos fundacionales',
    services: [],
    difficulty: 'medium',
    type: 'single',
    question:
      'Un equipo debe decidir si un foundation model (FM) cumple objetivos de negocio de su producto, no solo rankings académicos. ¿Cómo lo determina de forma más directa?',
    answers: [
      { id: 'A', text: 'Evaluar solo benchmarks públicos genéricos' },
      { id: 'B', text: 'Evaluar la alineación del modelo con los casos de uso y KPIs específicos del negocio' },
      { id: 'C', text: 'Analizar únicamente la arquitectura e hiperparámetros' },
      { id: 'D', text: 'Medir solo el cómputo necesario para el despliegue' },
    ],
    correctAnswers: ['B'],
    explanation:
      'La efectividad de negocio se mide por alineación con casos de uso y métricas operativas/KPI. Benchmarks, arquitectura y cómputo informan, pero no demuestran por sí solos el valor en producción.',
  },
  {
    id: 258,
    certification: 'AIF-C01',
    domain: 'foundation-model-applications',
    topic: 'RAG (Retrieval Augmented Generation)',
    services: ['Bedrock'],
    difficulty: 'medium',
    type: 'single',
    question:
      'Una app GenAI usa un FM preentrenado en Amazon Bedrock y debe incorporar información propietaria de la empresa en las respuestas, priorizando el menor costo frente a reentrenar o orquestar APIs. ¿Qué solución encaja?',
    answers: [
      { id: 'A', text: 'Usar Amazon Bedrock Knowledge Bases (RAG)' },
      { id: 'B', text: 'Desplegar un modelo personalizado importado sin indexar documentos' },
      { id: 'C', text: 'Hacer fine-tuning del FM con todo el corpus interno' },
      { id: 'D', text: 'Usar Amazon Bedrock Agents para llamar APIs aunque no haya acciones externas' },
    ],
    correctAnswers: ['A'],
    explanation:
      'Knowledge Bases indexa documentos y recupera contexto en inferencia (RAG), económico y actualizable. Fine-tuning y custom models cuestan más; Agents añaden orquestación innecesaria si solo hace falta conocimiento documental.',
  },
  {
    id: 259,
    certification: 'AIF-C01',
    domain: 'foundation-model-applications',
    topic: 'Ingeniería de prompts',
    services: ['Bedrock'],
    difficulty: 'easy',
    type: 'single',
    question:
      'Un contador añade en un prompt de Amazon Bedrock la instrucción de mostrar el procedimiento y explicar cada paso al resolver problemas matemáticos. ¿Qué técnica de prompt engineering está usando?',
    answers: [
      { id: 'A', text: 'Few-shot prompting' },
      { id: 'B', text: 'Tree of thoughts prompting' },
      { id: 'C', text: 'Cadena de pensamiento (chain-of-thought prompting)' },
      { id: 'D', text: 'Zero-shot prompting sin pedir razonamiento' },
    ],
    correctAnswers: ['C'],
    explanation:
      'Pedir que muestre el procedimiento paso a paso es chain-of-thought. Few-shot aporta ejemplos etiquetados; tree of thoughts explora múltiples ramas; zero-shot sin razonamiento no pide esos pasos intermedios.',
  },
  {
    id: 260,
    certification: 'AIF-C01',
    domain: 'foundation-model-applications',
    topic: 'Ajuste fino y personalización de modelos',
    services: [],
    difficulty: 'medium',
    type: 'single',
    question:
      'Una empresa de marketing quiere generar descripciones personalizadas de productos para el sitio web de un cliente de comercio electrónico. Las descripciones de los productos deben alinearse con el estilo y el tono únicos del sitio web existente. ¿Qué técnica de ingeniería de peticiones cumplirá estos requisitos con el MENOR esfuerzo operativo?',
    answers: [
      { id: 'A', text: 'La técnica de zero-shot prompting sin ningún ejemplo' },
      { id: 'B', text: 'La técnica de few-shot prompting con ejemplos de descripciones de productos bien escritas' },
      { id: 'C', text: 'El entrenamiento previo continuo en un dominio diferente' },
      { id: 'D', text: 'El ajuste fino para optimizar las descripciones en función de las métricas de interacción de los clientes' },
    ],
    correctAnswers: ['B'],
    explanation:
      'Few-shot prompting con ejemplos ayuda al modelo a imitar estilo y formato deseados con poco esfuerzo operativo. Zero-shot no aporta ejemplos de tono. El preentrenamiento continuo y el fine-tuning requieren más datos, cómputo y operación.',
  },
  {
    id: 261,
    certification: 'AIF-C01',
    domain: 'foundation-model-applications',
    topic: 'Ajuste fino y personalización de modelos',
    services: [],
    difficulty: 'medium',
    type: 'single',
    question:
      'Una empresa quiere evaluar el rendimiento de un modelo fundacional (FM) para la generación de texto. ¿Qué técnica o métrica cumplirá estos requisitos?',
    answers: [
      { id: 'A', text: 'Recall-Oriented Understudy for Gisting Evaluation (ROUGE)' },
      { id: 'B', text: 'Ajuste fino' },
      { id: 'C', text: 'Puntuación F1' },
      { id: 'D', text: 'Aprendizaje por refuerzo' },
    ],
    correctAnswers: ['A'],
    explanation:
      'ROUGE es una métrica usada para evaluar calidad de resúmenes y generación de texto, adecuada para medir el rendimiento de un FM en generación. Fine-tuning y RLHF son técnicas de mejora/entrenamiento; F1 es más típica de clasificación/recuperación que de generación libre de texto.',
  },
  {
    id: 262,
    certification: 'AIF-C01',
    domain: 'foundation-model-applications',
    topic: 'Aplicaciones de modelos fundacionales',
    services: ['SageMaker', 'Textract', 'Kendra', 'Q'],
    difficulty: 'easy',
    type: 'single',
    question:
      'Una empresa quiere utilizar un modelo fundacional (FM) de código abierto para determinar si los contratos respetan las normas de cumplimiento. ¿Qué servicio de AWS puede cumplir estos requisitos?',
    answers: [
      { id: 'A', text: 'Amazon Textract' },
      { id: 'B', text: 'Amazon SageMaker JumpStart' },
      { id: 'C', text: 'Amazon Q Business' },
      { id: 'D', text: 'Amazon Kendra' },
    ],
    correctAnswers: ['B'],
    explanation:
      'SageMaker JumpStart ofrece modelos de código abierto ya entrenados, incluidos FMs, que se pueden usar en casos como resumen o análisis de documentos. Textract extrae texto, Kendra es búsqueda empresarial y Q Business es un asistente; no son el camino principal para desplegar/usar un FM open source propio en este enunciado.',
  },
  {
    id: 263,
    certification: 'AIF-C01',
    domain: 'foundation-model-applications',
    topic: 'Ajuste fino y personalización de modelos',
    services: [],
    difficulty: 'easy',
    type: 'single',
    question:
      '¿Cuál de las siguientes opciones es un formato de datos válido para el ajuste fino basado en instrucciones?',
    answers: [
      { id: 'A', text: 'Archivos de audio con transcripciones' },
      { id: 'B', text: 'Imágenes etiquetadas con categorías' },
      { id: 'C', text: 'Listas de reproducción seleccionadas con música recomendada' },
      { id: 'D', text: 'Pares de texto de petición-respuesta' },
    ],
    correctAnswers: ['D'],
    explanation:
      'El ajuste fino basado en instrucciones usa ejemplos etiquetados en formato de pares petición-respuesta redactados como instrucciones para adaptar un FM a tareas específicas. Audio, imágenes etiquetadas o playlists no son el formato típico de instruction fine-tuning de LLM.',
  },
  {
    id: 264,
    certification: 'AIF-C01',
    domain: 'foundation-model-applications',
    topic: 'Aplicaciones de modelos fundacionales',
    services: ['SageMaker'],
    difficulty: 'medium',
    type: 'single',
    question:
      'Ordene las opciones de inferencia de Amazon SageMaker desde la latencia MÁS BAJA hasta la latencia MÁS ALTA. En las alternativas, A > B > C significa: primero A (menor latencia), luego B, luego C (mayor latencia). ¿Cuál es el orden correcto?',
    answers: [
      { id: 'A', text: 'Inferencia en tiempo real > Inferencia asíncrona > Transformación por lotes' },
      { id: 'B', text: 'Transformación por lotes > Inferencia asíncrona > Inferencia en tiempo real' },
      { id: 'C', text: 'Inferencia asíncrona > Inferencia en tiempo real > Transformación por lotes' },
      { id: 'D', text: 'Inferencia en tiempo real > Transformación por lotes > Inferencia asíncrona' },
    ],
    correctAnswers: ['A'],
    explanation:
      'La inferencia en tiempo real tiene la latencia más baja (respuestas interactivas). La inferencia asíncrona tolera latencias mayores (minutos) para cargas más grandes. La transformación por lotes es para trabajos offline y suele ser la de mayor latencia / tiempo de respuesta. Orden de menor a mayor latencia: Inferencia en tiempo real > Inferencia asíncrona > Transformación por lotes.',
  },
  {
    id: 265,
    certification: 'AIF-C01',
    domain: 'foundation-model-applications',
    topic: 'RAG (Retrieval Augmented Generation)',
    services: [],
    difficulty: 'medium',
    type: 'single',
    question:
      'Una empresa desea aumentar la coherencia y la calidad de las respuestas del modelo de lenguaje de gran tamaño (LLM) al proporcionar al modelo acceso a fuentes de conocimiento externas. ¿Qué técnica cumplirá los requisitos con el MENOR esfuerzo de desarrollo?',
    answers: [
      { id: 'A', text: 'Entrenamiento previo continuo' },
      { id: 'B', text: 'Ajuste fino' },
      { id: 'C', text: 'Generación aumentada por recuperación (RAG)' },
      { id: 'D', text: 'Aprendizaje en contexto' },
    ],
    correctAnswers: ['C'],
    explanation:
      'RAG mejora coherencia y calidad al recuperar conocimiento externo antes de generar la respuesta, sin reentrenar el modelo, con menor esfuerzo de desarrollo que preentrenamiento continuo o fine-tuning. El aprendizaje en contexto (prompting) no equivale por sí solo a conectar una base de conocimiento externa gestionada.',
  },
  {
    id: 266,
    certification: 'AIF-C01',
    domain: 'foundation-model-applications',
    topic: 'Aplicaciones de modelos fundacionales',
    services: ['Comprehend', 'Polly', 'Transcribe', 'Lex'],
    difficulty: 'easy',
    type: 'single',
    question:
      'Una empresa de medios desea distribuir sus artículos de noticias como contenido de audio. Necesita convertir los artículos de texto en voz natural. ¿Cuál es el servicio de AWS más adecuado?',
    answers: [
      { id: 'A', text: 'Amazon Transcribe' },
      { id: 'B', text: 'Amazon Comprehend' },
      { id: 'C', text: 'Amazon Lex' },
      { id: 'D', text: 'Amazon Polly' },
    ],
    correctAnswers: ['D'],
    explanation:
      'Amazon Polly es Text-to-Speech. Transcribe es Speech-to-Text; Comprehend es NLP; Lex es chatbots.',
  },
  {
    id: 267,
    certification: 'AIF-C01',
    domain: 'foundation-model-applications',
    topic: 'Evaluación de modelos generativos',
    services: [],
    difficulty: 'medium',
    type: 'single',
    question:
      'Una empresa quiere evaluar si las respuestas de su asistente de IA generativa se ajustan a la forma de hablar y al tono de su marca. ¿Cuál es el método de evaluación más adecuado?',
    answers: [
      { id: 'A', text: 'Métricas de evaluación automática como ROUGE' },
      { id: 'B', text: 'Medición de la latencia de inferencia' },
      { id: 'C', text: 'Revisión por evaluadores humanos con criterios de evaluación definidos' },
      { id: 'D', text: 'Benchmarks públicos como MMLU' },
    ],
    correctAnswers: ['C'],
    explanation:
      'Atributos subjetivos como tono de marca se evalúan mejor con humanos y rúbricas. ROUGE/MMLU miden otras dimensiones; la latencia no mide calidad de tono.',
  },
  {
    id: 268,
    certification: 'AIF-C01',
    domain: 'foundation-model-applications',
    topic: 'Aplicaciones de modelos fundacionales',
    services: ['Comprehend', 'Transcribe', 'Rekognition'],
    difficulty: 'easy',
    type: 'multiple',
    question:
      'Seleccione las dos tareas que se pueden realizar con Amazon Rekognition. (Seleccione DOS opciones)',
    answers: [
      { id: 'A', text: 'Análisis de sentimiento de texto' },
      { id: 'B', text: 'Detección de objetos y escenas en imágenes' },
      { id: 'C', text: 'Conversión de voz a texto' },
      { id: 'D', text: 'Reconocimiento facial de personas en vídeos' },
    ],
    correctAnswers: ['B', 'D'],
    explanation:
      'Rekognition analiza imágenes y vídeo (objetos, escenas, rostros, etc.). Sentimiento es Comprehend; voz a texto es Transcribe.',
  },
  {
    id: 269,
    certification: 'AIF-C01',
    domain: 'foundation-model-applications',
    topic: 'Amazon Bedrock',
    services: ['Bedrock', 'VPC'],
    difficulty: 'medium',
    type: 'single',
    question:
      'Una empresa desea adaptar un modelo base con datos que no pueden salir de la organización y utilizar después el resultado en exclusiva. ¿Cuál es la descripción correcta sobre la personalización en Amazon Bedrock?',
    answers: [
      { id: 'A', text: 'Un modelo personalizado solo puede invocarse por internet y no puede usarse desde una red privada ni a través de un punto de enlace de VPC' },
      { id: 'B', text: 'La personalización exige obtener cada vez un permiso individual por escrito del proveedor del modelo' },
      { id: 'C', text: 'Los resultados de la personalización se reflejan automáticamente para los demás usuarios del mismo modelo base, que heredan el ajuste' },
      { id: 'D', text: 'El modelo creado mediante la personalización es de uso exclusivo de la empresa y el modelo base original no se modifica' },
    ],
    correctAnswers: ['D'],
    explanation:
      'La personalización en Bedrock crea un modelo exclusivo en la cuenta del cliente; el FM del proveedor no se reescribe y no afecta a otros clientes.',
  },
  {
    id: 270,
    certification: 'AIF-C01',
    domain: 'foundation-model-applications',
    topic: 'Aplicaciones de modelos fundacionales',
    services: ['Kendra', 'DynamoDB', 'OpenSearch', 'Athena'],
    difficulty: 'easy',
    type: 'single',
    question:
      '¿Cuál es el servicio de AWS que busca en los documentos y las fuentes de datos internas de una empresa y puede responder preguntas en lenguaje natural?',
    answers: [
      { id: 'A', text: 'Amazon Athena' },
      { id: 'B', text: 'Amazon DynamoDB' },
      { id: 'C', text: 'Amazon Kendra' },
      { id: 'D', text: 'Amazon OpenSearch Service' },
    ],
    correctAnswers: ['C'],
    explanation:
      'Amazon Kendra es búsqueda inteligente empresarial en lenguaje natural sobre documentos internos.',
  },
  {
    id: 271,
    certification: 'AIF-C01',
    domain: 'foundation-model-applications',
    topic: 'Evaluación de modelos generativos',
    services: [],
    difficulty: 'easy',
    type: 'single',
    question:
      'Está desarrollando un sistema de resumen automático de artículos de noticias. ¿Cuál es la métrica más habitual cuando se quiere evaluar automáticamente la calidad de los resúmenes generados comparándolos con resúmenes de referencia elaborados a mano?',
    answers: [
      { id: 'A', text: 'BLEU' },
      { id: 'B', text: 'AUC' },
      { id: 'C', text: 'Matriz de confusión' },
      { id: 'D', text: 'ROUGE' },
    ],
    correctAnswers: ['D'],
    explanation:
      'ROUGE es el estándar habitual para evaluar resúmenes frente a referencias. BLEU se asocia más a traducción; AUC y matriz de confusión a clasificación.',
  },
  {
    id: 272,
    certification: 'AIF-C01',
    domain: 'foundation-model-applications',
    topic: 'Ingeniería de prompts',
    services: [],
    difficulty: 'easy',
    type: 'single',
    question:
      'En las instrucciones a un modelo de generación de imágenes, ¿cómo se denomina la técnica que controla la calidad especificando explícitamente los elementos que no se quieren en la salida, como "baja resolución, contornos borrosos, texto incrustado"?',
    answers: [
      { id: 'A', text: 'Prompt negativo' },
      { id: 'B', text: 'Plantilla de prompts' },
      { id: 'C', text: 'Prompting de cadena de pensamiento (CoT)' },
      { id: 'D', text: 'Prompting de pocos ejemplos (few-shot)' },
    ],
    correctAnswers: ['A'],
    explanation:
      'El prompt negativo indica qué no debe aparecer en la imagen generada y complementa al prompt positivo.',
  },
  {
    id: 273,
    certification: 'AIF-C01',
    domain: 'foundation-model-applications',
    topic: 'Aplicaciones de modelos fundacionales',
    services: ['Textract', 'Comprehend', 'Translate', 'Kendra'],
    difficulty: 'easy',
    type: 'single',
    question:
      'Una aseguradora está avanzando en un proyecto para digitalizar un gran volumen de facturas y formularios de solicitud. Desea extraer automáticamente datos en formato de tabla y valores de campos de formularios a partir de PDF escaneados. ¿Cuál es el servicio de AWS más adecuado?',
    answers: [
      { id: 'A', text: 'Amazon Translate' },
      { id: 'B', text: 'Amazon Textract' },
      { id: 'C', text: 'Amazon Kendra' },
      { id: 'D', text: 'Amazon Comprehend' },
    ],
    correctAnswers: ['B'],
    explanation:
      'Amazon Textract extrae texto, tablas y campos de formularios de documentos escaneados/PDF.',
  },
  {
    id: 274,
    certification: 'AIF-C01',
    domain: 'foundation-model-applications',
    topic: 'Aplicaciones de modelos fundacionales',
    services: ['SageMaker', 'Comprehend', 'Personalize', 'Forecast'],
    difficulty: 'easy',
    type: 'single',
    question:
      'Un sitio de comercio electrónico desea mostrar "productos recomendados para ti" basándose en el historial de navegación y de compras del usuario. ¿Cuál es el servicio de AWS más adecuado que puede utilizar un equipo sin conocimientos especializados en ML?',
    answers: [
      { id: 'A', text: 'Amazon SageMaker' },
      { id: 'B', text: 'Amazon Forecast' },
      { id: 'C', text: 'Amazon Personalize' },
      { id: 'D', text: 'Amazon Comprehend' },
    ],
    correctAnswers: ['C'],
    explanation:
      'Amazon Personalize genera recomendaciones personalizadas a partir de interacciones del usuario, sin exigir expertise profundo en ML.',
  },
  {
    id: 275,
    certification: 'AIF-C01',
    domain: 'foundation-model-applications',
    topic: 'Ajuste fino y personalización de modelos',
    services: ['Bedrock'],
    difficulty: 'easy',
    type: 'single',
    question:
      '¿Cuál es la función de Amazon Bedrock que entrena adicionalmente un modelo con datos específicos de la empresa para personalizar sus respuestas?',
    answers: [
      { id: 'A', text: 'Destilación del modelo' },
      { id: 'B', text: 'Cuantización del modelo' },
      { id: 'C', text: 'Ajuste fino del modelo' },
      { id: 'D', text: 'Almacenamiento en caché de prompts (prompt caching)' },
    ],
    correctAnswers: ['C'],
    explanation:
      'El fine-tuning en Bedrock entrena adicionalmente el modelo con datos etiquetados de la empresa para personalizar respuestas de dominio/tarea.',
  },
  {
    id: 276,
    certification: 'AIF-C01',
    domain: 'foundation-model-applications',
    topic: 'Amazon Bedrock',
    services: ['SageMaker', 'Bedrock', 'Comprehend', 'Rekognition'],
    difficulty: 'easy',
    type: 'single',
    question:
      'Una empresa desea construir rápidamente una aplicación de IA generativa. Quiere probar mediante una API unificada modelos de varios proveedores (Anthropic, Meta, Amazon, etc.) y elegir el más adecuado. ¿Cuál es el servicio de AWS más adecuado?',
    answers: [
      { id: 'A', text: 'Amazon Bedrock' },
      { id: 'B', text: 'Amazon Rekognition' },
      { id: 'C', text: 'Amazon Comprehend' },
      { id: 'D', text: 'Amazon SageMaker' },
    ],
    correctAnswers: ['A'],
    explanation:
      'Amazon Bedrock ofrece acceso gestionado por API unificada a FMs de varios proveedores.',
  },
  {
    id: 277,
    certification: 'AIF-C01',
    domain: 'foundation-model-applications',
    topic: 'Aplicaciones de modelos fundacionales',
    services: ['SageMaker'],
    difficulty: 'easy',
    type: 'single',
    question:
      'Un equipo de ciencia de datos quiere agilizar el flujo de probar de inmediato modelos preentrenados de dominio público, ajustarlos con los datos de la empresa y llevarlos después a producción. ¿Cuál es la función más adecuada?',
    answers: [
      { id: 'A', text: 'Amazon SageMaker Data Wrangler' },
      { id: 'B', text: 'Amazon SageMaker Debugger' },
      { id: 'C', text: 'Amazon SageMaker JumpStart' },
      { id: 'D', text: 'Amazon SageMaker Pipelines' },
    ],
    correctAnswers: ['C'],
    explanation:
      'SageMaker JumpStart permite elegir FMs/preentrenados del catálogo, probarlos, fine-tunear y desplegar con rapidez.',
  },
  {
    id: 278,
    certification: 'AIF-C01',
    domain: 'foundation-model-applications',
    topic: 'RAG (Retrieval Augmented Generation)',
    services: ['Bedrock'],
    difficulty: 'medium',
    type: 'single',
    question:
      'Una agencia de viajes desea construir un sistema de IA que, ante una solicitud del cliente como "resérvame un vuelo a Tokio para la próxima semana", llame a la API del sistema de reservas y procese de forma autónoma todo el flujo, desde la comprobación de plazas disponibles hasta la finalización de la reserva. ¿Qué función de Amazon Bedrock es la más adecuada?',
    answers: [
      { id: 'A', text: 'Ajuste fino de Bedrock' },
      { id: 'B', text: 'Evaluación de modelos de Bedrock' },
      { id: 'C', text: 'Bases de conocimiento de Bedrock' },
      { id: 'D', text: 'Agentes de Bedrock (Agents for Amazon Bedrock)' },
    ],
    correctAnswers: ['D'],
    explanation:
      'Los Agents de Bedrock orquestan tareas de varios pasos llamando a APIs (action groups) y/o knowledge bases de forma autónoma.',
  },
  {
    id: 279,
    certification: 'AIF-C01',
    domain: 'foundation-model-applications',
    topic: 'RAG (Retrieval Augmented Generation)',
    services: [],
    difficulty: 'medium',
    type: 'multiple',
    question:
      'Seleccione dos elementos de diseño que influyen en la calidad de las respuestas en un mecanismo que proporciona a la IA generativa los documentos recuperados. (Seleccione DOS opciones)',
    answers: [
      { id: 'A', text: 'Cuántos de los primeros resultados de la búsqueda se pasan a la generación de la respuesta' },
      { id: 'B', text: 'El valor máximo del número de tokens de salida del modelo y el límite de longitud que impone a la respuesta' },
      { id: 'C', text: 'La elección de la región en la que se ejecuta la inferencia' },
      { id: 'D', text: 'El tamaño de la unidad en que se dividen los documentos y la forma de dar solapamiento entre fragmentos' },
    ],
    correctAnswers: ['A', 'D'],
    explanation:
      'Chunking/overlap y cuántos resultados (top-k) se pasan al generador influyen directamente en la calidad RAG. Max tokens de salida y la región no definen la calidad de la recuperación.',
  },
  {
    id: 280,
    certification: 'AIF-C01',
    domain: 'foundation-model-applications',
    topic: 'Evaluación de modelos generativos',
    services: ['Bedrock'],
    difficulty: 'easy',
    type: 'single',
    question:
      'Una empresa desea comparar varios modelos candidatos en Amazon Bedrock y elegir el que ofrezca los mejores resultados en su propia tarea. ¿Cuál es la función prevista para este objetivo?',
    answers: [
      { id: 'A', text: 'Barandillas (Guardrails) que inspeccionan la entrada y la salida' },
      { id: 'B', text: 'Rendimiento aprovisionado (Provisioned Throughput), que reserva capacidad de inferencia dedicada' },
      { id: 'C', text: 'Personalización del modelo (ajuste fino con los datos propios de la empresa)' },
      { id: 'D', text: 'Evaluación de modelos (admite tanto la evaluación automática como la evaluación humana)' },
    ],
    correctAnswers: ['D'],
    explanation:
      'Model Evaluation en Bedrock compara salidas de modelos candidatos con métricas automáticas y/o evaluación humana.',
  },
  {
    id: 281,
    certification: 'AIF-C01',
    domain: 'foundation-model-applications',
    topic: 'Amazon Bedrock',
    services: ['Bedrock', 'Comprehend', 'Translate', 'Polly'],
    difficulty: 'easy',
    type: 'single',
    question:
      'Una empresa global desea traducir automáticamente al japonés, francés y alemán los manuales de producto escritos en inglés. Necesita traducir un gran volumen de documentos mediante procesamiento por lotes. ¿Cuál es el servicio de AWS más adecuado?',
    answers: [
      { id: 'A', text: 'Amazon Polly' },
      { id: 'B', text: 'Amazon Translate' },
      { id: 'C', text: 'Amazon Comprehend' },
      { id: 'D', text: 'Amazon Bedrock' },
    ],
    correctAnswers: ['B'],
    explanation:
      'Amazon Translate hace traducción automática neuronal en tiempo real o por lotes. Polly es TTS; Comprehend es NLP; Bedrock es GenAI general, no el servicio específico de traducción por lotes.',
  },
  {
    id: 282,
    certification: 'AIF-C01',
    domain: 'foundation-model-applications',
    topic: 'RAG (Retrieval Augmented Generation)',
    services: [],
    difficulty: 'medium',
    type: 'single',
    question:
      '¿Cuál de las siguientes opciones ordena las técnicas representativas para adaptar un modelo fundacional a una tarea, de menor a mayor costo y esfuerzo generalmente necesarios?',
    answers: [
      { id: 'A', text: 'Preentrenamiento continuado → ajuste fino → RAG → ingeniería de prompts' },
      { id: 'B', text: 'Ingeniería de prompts → RAG → ajuste fino → preentrenamiento continuado' },
      { id: 'C', text: 'RAG → ingeniería de prompts → preentrenamiento continuado → ajuste fino' },
      { id: 'D', text: 'Ajuste fino → preentrenamiento continuado → ingeniería de prompts → RAG' },
    ],
    correctAnswers: ['B'],
    explanation:
      'De menor a mayor esfuerzo/costo típico: prompting → RAG → fine-tuning → continued pre-training.',
  },
  {
    id: 283,
    certification: 'AIF-C01',
    domain: 'foundation-model-applications',
    topic: 'Ajuste fino y personalización de modelos',
    services: [],
    difficulty: 'medium',
    type: 'single',
    question:
      'Una empresa farmacéutica dispone de una gran cantidad de documentos especializados del ámbito farmacéutico sin etiquetar. Si quiere que el modelo fundacional absorba el vocabulario y el conocimiento propios de este campo, ¿cuál es la técnica de personalización más adecuada?',
    answers: [
      { id: 'A', text: 'Preentrenamiento continuado (continued pre-training)' },
      { id: 'B', text: 'Ajuste por instrucciones (instruction tuning)' },
      { id: 'C', text: 'Ingeniería de prompts' },
      { id: 'D', text: 'Generación de incrustaciones de texto' },
    ],
    correctAnswers: ['A'],
    explanation:
      'Continued pre-training usa documentos de dominio sin etiquetar para absorber vocabulario/conocimiento. Instruction tuning necesita pares instrucción-respuesta.',
  },
  {
    id: 284,
    certification: 'AIF-C01',
    domain: 'foundation-model-applications',
    topic: 'Evaluación de modelos generativos',
    services: [],
    difficulty: 'medium',
    type: 'single',
    question:
      'Un equipo evalúa un FM que resume pólizas. Comparan cada resumen generado con un resumen de referencia escrito por un experto humano. ¿Qué métrica es la más adecuada?',
    answers: [
      { id: 'A', text: 'Error cuadrático medio (MSE) de una regresión' },
      { id: 'B', text: 'ROUGE' },
      { id: 'C', text: 'Exactitud (accuracy) de un clasificador binario sin adaptación' },
      { id: 'D', text: 'Throughput de tokens por segundo únicamente' },
    ],
    correctAnswers: ['B'],
    explanation:
      'ROUGE compara solapamiento con resúmenes de referencia humanos; es la métrica típica para summarization.',
  },
  {
    id: 285,
    certification: 'AIF-C01',
    domain: 'foundation-model-applications',
    topic: 'Ajuste fino y personalización de modelos',
    services: [],
    difficulty: 'hard',
    type: 'single',
    question:
      'Quieren que un FM siga mejor instrucciones del estilo “responde en JSON con campos X/Y”. Planean ajustar el modelo con pares instrucción → respuesta esperada. ¿Cómo se llama ese enfoque de fine-tuning?',
    answers: [
      { id: 'A', text: 'Ajuste por instrucciones (instruction tuning)' },
      { id: 'B', text: 'Solo subir la temperature' },
      { id: 'C', text: 'Destilación eliminando capas al azar sin datos' },
      { id: 'D', text: 'Inferencia por lotes (batch transform)' },
    ],
    correctAnswers: ['A'],
    explanation:
      'Instruction tuning ajusta el modelo con ejemplos de instrucciones y respuestas deseadas para mejorar el seguimiento de indicaciones.',
  },
  {
    id: 286,
    certification: 'AIF-C01',
    domain: 'foundation-model-applications',
    topic: 'RAG (Retrieval Augmented Generation)',
    services: ['Bedrock'],
    difficulty: 'easy',
    type: 'multiple',
    question:
      '¿Cuáles de los siguientes son enfoques válidos para evaluar el desempeño de aplicaciones construidas con foundation models, como sistemas RAG o agentes? (Seleccione 2)',
    answers: [
      { id: 'A', text: 'Medir la temperatura del servidor' },
      { id: 'B', text: 'Contar la cantidad de líneas de código del prompt' },
      { id: 'C', text: 'Benchmarks y conjuntos de datos de referencia' },
      { id: 'D', text: 'Evaluación con humano en el bucle (human-in-the-loop)' },
    ],
    correctAnswers: ['C', 'D'],
    explanation:
      'Enfoques válidos: evaluación human-in-the-loop, benchmarks/datasets y Amazon Bedrock Model Evaluation.',
  },
  {
    id: 287,
    certification: 'AIF-C01',
    domain: 'foundation-model-applications',
    topic: 'Agentes de Bedrock',
    services: [],
    difficulty: 'medium',
    type: 'single',
    question:
      'Un agente de atención al cliente debe completar flujos (consultar pedido, emitir nota). Product mide qué fracción de esos flujos el usuario terminó con éxito. ¿Qué métrica es?',
    answers: [
      { id: 'A', text: 'Tasa de finalización de tareas (task completion rate)' },
      { id: 'B', text: 'Cantidad de parámetros del FM' },
      { id: 'C', text: 'Temperatura media del muestreo' },
      { id: 'D', text: 'Tamaño de la ventana de contexto en tokens' },
    ],
    correctAnswers: ['A'],
    explanation:
      'Task completion rate mide qué proporción de las tareas que el usuario intentó se completaron exitosamente.',
  },
  {
    id: 288,
    certification: 'AIF-C01',
    domain: 'foundation-model-applications',
    topic: 'Aplicaciones de modelos fundacionales',
    services: [],
    difficulty: 'medium',
    type: 'single',
    question:
      'Una empresa LATAM necesita que el mismo chatbot responda con calidad similar en español, portugués e inglés sin desplegar tres sistemas. ¿Qué criterio de selección de FM priorizarías?',
    answers: [
      { id: 'A', text: 'Soporte multi-idioma (multi-lingual)' },
      { id: 'B', text: 'Usar solo un modelo que admita un único idioma y traducir todo offline a mano' },
      { id: 'C', text: 'Desactivar por completo el logging de auditoría' },
      { id: 'D', text: 'Elegir el modelo únicamente por el número de parámetros, sin mirar idiomas' },
    ],
    correctAnswers: ['A'],
    explanation:
      'El soporte multi-idioma es un criterio explícito de selección de foundation models.',
  },
  {
    id: 289,
    certification: 'AIF-C01',
    domain: 'foundation-model-applications',
    topic: 'Ingeniería de prompts',
    services: [],
    difficulty: 'medium',
    type: 'multiple',
    question:
      'Un prompt engineer mejora un asistente legal interno. ¿Cuáles prácticas de ingeniería de prompts aplican? (Seleccione 2)',
    answers: [
      { id: 'A', text: 'Experimentación iterativa con versiones del prompt' },
      { id: 'B', text: 'Especificidad y concisión en las instrucciones' },
      { id: 'C', text: 'Usar siempre el prompt más largo posible sin probar' },
      { id: 'D', text: 'Eliminar cualquier barandilla (guardrail) de contenido' },
    ],
    correctAnswers: ['A', 'B'],
    explanation:
      'Buenas prácticas: iterar, ser específico y conciso; no implica prompts infinitos ni quitar guardrails.',
  },
  {
    id: 290,
    certification: 'AIF-C01',
    domain: 'foundation-model-applications',
    topic: 'RAG (Retrieval Augmented Generation)',
    services: [],
    difficulty: 'medium',
    type: 'single',
    question:
      'El FM base no conoce políticas internas actualizadas cada semana. Quieren respuestas ancladas a esos documentos sin reentrenar el modelo cada vez. ¿Qué enfoque resuelve principalmente el problema?',
    answers: [
      { id: 'A', text: 'Retrieval Augmented Generation (RAG)' },
      { id: 'B', text: 'Subir solo la temperature a 2.0' },
      { id: 'C', text: 'Borrar la Knowledge Base' },
      { id: 'D', text: 'Preentrenamiento desde cero cada noche' },
    ],
    correctAnswers: ['A'],
    explanation:
      'RAG recupera contexto relevante (p. ej. Knowledge Bases) y lo inyecta en el prompt sin reentrenar el FM.',
  },
  {
    id: 291,
    certification: 'AIF-C01',
    domain: 'foundation-model-applications',
    topic: 'Aplicaciones de modelos fundacionales',
    services: [],
    difficulty: 'medium',
    type: 'single',
    question:
      'Al generar imágenes de producto, marketing quiere evitar fondos caóticos y texto ilegible en la imagen. Incluyen en el prompt una lista de lo que el modelo NO debe producir. ¿Qué técnica es?',
    answers: [
      { id: 'A', text: 'Prompt negativo (negative prompt)' },
      { id: 'B', text: 'Zero-shot sin ninguna instrucción' },
      { id: 'C', text: 'Solo aumentar max tokens' },
      { id: 'D', text: 'Desactivar embeddings' },
    ],
    correctAnswers: ['A'],
    explanation:
      'Un negative prompt indica explícitamente qué no debe aparecer en la salida.',
  },
  {
    id: 292,
    certification: 'AIF-C01',
    domain: 'foundation-model-applications',
    topic: 'Ingeniería de prompts',
    services: [],
    difficulty: 'medium',
    type: 'single',
    question:
      'Antes de la pregunta real, el prompt muestra 3 pares ejemplo de “consulta → respuesta en el tono de la marca”. ¿Qué técnica de prompting es?',
    answers: [
      { id: 'A', text: 'Few-shot prompting' },
      { id: 'B', text: 'Zero-shot prompting' },
      { id: 'C', text: 'Solo negative prompting' },
      { id: 'D', text: 'Entrenar un modelo desde cero' },
    ],
    correctAnswers: ['A'],
    explanation:
      'Few-shot incluye unos pocos ejemplos en el prompt. Zero-shot no lleva ejemplos.',
  },
  {
    id: 293,
    certification: 'AIF-C01',
    domain: 'foundation-model-applications',
    topic: 'Ajuste fino y personalización de modelos',
    services: [],
    difficulty: 'hard',
    type: 'single',
    question:
      'Necesitan personalizar el comportamiento de un FM para un piloto de 2 semanas con presupuesto mínimo. ¿Qué enfoque suele ser el más económico y rápido de implementar?',
    answers: [
      { id: 'A', text: 'Preentrenamiento completo desde cero' },
      { id: 'B', text: 'Ajuste fino completo de todos los pesos' },
      { id: 'C', text: 'Aprendizaje en contexto / ingeniería de prompts (in-context learning)' },
      { id: 'D', text: 'Continued pre-training de semanas sobre todo el corpus corporativo' },
    ],
    correctAnswers: ['C'],
    explanation:
      'In-context learning / prompt engineering no reentrena el modelo: suele ser lo más barato y rápido frente a fine-tuning o pre-training.',
  },
  {
    id: 294,
    certification: 'AIF-C01',
    domain: 'foundation-model-applications',
    topic: 'RAG (Retrieval Augmented Generation)',
    services: [],
    difficulty: 'hard',
    type: 'single',
    question:
      'Comparan cuatro caminos de personalización: (1) ejemplos en el prompt, (2) recuperar docs internos, (3) ajustar pesos con datos etiquetados, (4) entrenar un modelo chico que imite a uno grande. ¿Qué emparejamiento es correcto?',
    answers: [
      { id: 'A', text: '1=in-context · 2=RAG · 3=fine-tuning · 4=model distillation' },
      { id: 'B', text: '1=fine-tuning · 2=solo cifrado · 3=RAG · 4=on-demand' },
      { id: 'C', text: 'Los cuatro exigen siempre preentrenamiento desde cero' },
      { id: 'D', text: '1 y 2 son idénticos al fine-tuning completo de pesos' },
    ],
    correctAnswers: ['A'],
    explanation:
      'In-context learning, RAG, fine-tuning y model distillation son enfoques distintos con tradeoffs de costo y esfuerzo.',
  },
  {
    id: 295,
    certification: 'AIF-C01',
    domain: 'foundation-model-applications',
    topic: 'Aplicaciones de modelos fundacionales',
    services: ['IAM', 'S3', 'SQS'],
    difficulty: 'hard',
    type: 'single',
    question:
      'Un sistema reutiliza un bloque largo de políticas fijas en casi todas las llamadas al FM. Quieren bajar latencia y costo sin cambiar el modelo. ¿Qué capacidad encaja?',
    answers: [
      { id: 'A', text: 'Caché de prompts (prompt caching)' },
      { id: 'B', text: 'Eliminar IAM por completo' },
      { id: 'C', text: 'Cambiar el nombre del bucket S3' },
      { id: 'D', text: 'Usar solo Amazon SQS como modelo de lenguaje' },
    ],
    correctAnswers: ['A'],
    explanation:
      'Prompt caching reutiliza partes del prompt ya procesadas (contexto fijo) para reducir costo y latencia en llamadas repetidas.',
  },
  {
    id: 296,
    certification: 'AIF-C01',
    domain: 'foundation-model-applications',
    topic: 'RAG (Retrieval Augmented Generation)',
    services: ['Aurora', 'OpenSearch', 'Neptune', 'SQS', 'RDS'],
    difficulty: 'medium',
    type: 'multiple',
    question:
      'Van a guardar embeddings para RAG en AWS. ¿Cuáles servicios aparecen como opciones válidas de almacenamiento/búsqueda vectorial en este contexto? (Seleccione 2)',
    answers: [
      { id: 'A', text: 'Amazon OpenSearch Service' },
      { id: 'B', text: 'Amazon Aurora (p. ej. con pgvector)' },
      { id: 'C', text: 'Amazon SQS' },
      { id: 'D', text: 'AWS Lambda como base de datos vectorial' },
    ],
    correctAnswers: ['A', 'B'],
    explanation:
      'OpenSearch y Aurora (y también Neptune/RDS PostgreSQL en el alcance) soportan embeddings. SQS y Lambda no son bases vectoriales.',
  },
  {
    id: 297,
    certification: 'AIF-C01',
    domain: 'responsible-ai',
    topic: 'Explicabilidad y transparencia',
    services: [],
    difficulty: 'easy',
    type: 'single',
    question:
      'Una cadena de supermercados usa modelos de ML para proyectar la demanda semanal de perecederos. Un analista debe preparar un informe para que gerentes vean cómo las variables de entrada influyen en las predicciones. ¿Qué debe incluir para apoyar transparencia y explicabilidad (explainability)?',
    answers: [
      { id: 'A', text: 'Muestras crudas del conjunto de entrenamiento sin análisis' },
      { id: 'B', text: 'Tablas de convergencia del entrenamiento (loss curves) únicamente' },
      { id: 'C', text: 'Gráficos de dependencia parcial (PDP, partial dependence plots)' },
      { id: 'D', text: 'El código fuente completo del entrenamiento sin interpretación' },
    ],
    correctAnswers: ['C'],
    explanation:
      'Los gráficos de dependencia parcial (PDP) muestran cómo una o más variables de entrada se relacionan con la salida predicha, lo que facilita explicar la influencia de cada característica a stakeholders de negocio.',
  },
  {
    id: 298,
    certification: 'AIF-C01',
    domain: 'responsible-ai',
    topic: 'Explicabilidad y transparencia',
    services: [],
    difficulty: 'easy',
    type: 'single',
    question:
      'Un laboratorio agrícola clasifica muestras de suelo en 15 tipos y debe documentar con claridad la lógica interna del algoritmo ante auditores. ¿Qué algoritmo satisface mejor este requisito de interpretabilidad?',
    answers: [
      { id: 'A', text: 'Regresión logística multiclase opaca para no técnicos' },
      { id: 'B', text: 'Árboles de decisión (decision trees)' },
      { id: 'C', text: 'Redes neuronales profundas (deep neural networks)' },
      { id: 'D', text: 'Regresión lineal pensada para objetivos continuos' },
    ],
    correctAnswers: ['B'],
    explanation:
      'Los árboles de decisión expresan reglas de división legibles, lo que permite documentar paso a paso cómo se llega a cada categoría. Las redes profundas suelen ser menos interpretables de forma nativa.',
  },
  {
    id: 299,
    certification: 'AIF-C01',
    domain: 'responsible-ai',
    topic: 'Sesgo y equidad (Fairness)',
    services: [],
    difficulty: 'easy',
    type: 'single',
    question:
      'Una plataforma de streaming planea usar un modelo de lenguaje grande (LLM) para moderar comentarios en vivo y quiere evaluar si trata de forma desigual a ciertos grupos de usuarios. ¿Qué fuente de datos permite hacer esta evaluación con el menor esfuerzo administrativo?',
    answers: [
      { id: 'A', text: 'Registros de moderación históricos' },
      { id: 'B', text: 'Contenido generado por los usuarios' },
      { id: 'C', text: 'Conjuntos de datos de referencia (benchmark)' },
      { id: 'D', text: 'Políticas internas de moderación de contenido' },
    ],
    correctAnswers: ['C'],
    explanation:
      'Los conjuntos de datos de referencia (benchmark) están curados y estandarizados específicamente para evaluar sesgos y equidad en modelos, lo que permite comparar resultados de forma consistente con muy poco esfuerzo administrativo.',
  },
  {
    id: 300,
    certification: 'AIF-C01',
    domain: 'responsible-ai',
    topic: 'Sostenibilidad de la IA',
    services: ['EC2'],
    difficulty: 'hard',
    type: 'single',
    question:
      'Una empresa de telecomunicaciones entrenará su propio LLM con datos corporativos privados y quiere minimizar la huella de carbono del entrenamiento. ¿Qué tipo de instancia de Amazon EC2 tiene el MENOR impacto ambiental para entrenar LLM?',
    answers: [
      { id: 'A', text: 'Serie P de Amazon EC2' },
      { id: 'B', text: 'Serie Trn de Amazon EC2' },
      { id: 'C', text: 'Serie G de Amazon EC2' },
      { id: 'D', text: 'Serie C de Amazon EC2' },
    ],
    correctAnswers: ['B'],
    explanation:
      'Las instancias de la serie Trn de Amazon EC2 usan AWS Trainium, diseñado específicamente para entrenar modelos grandes de forma eficiente en energía, por lo que tienen el menor impacto ambiental entre las opciones listadas.',
  },
  {
    id: 301,
    certification: 'AIF-C01',
    domain: 'responsible-ai',
    topic: 'Sesgo y equidad (Fairness)',
    services: [],
    difficulty: 'easy',
    type: 'single',
    question:
      'Un centro comercial usa un modelo de ML sobre video del estacionamiento para marcar comportamientos sospechosos. El sistema alerta con mucha más frecuencia a personas de un grupo étnico específico. Si los datos de entrenamiento no representaron bien a toda la población, ¿qué tipo de sesgo (bias) es el MÁS probable?',
    answers: [
      { id: 'A', text: 'Sesgo de medición (measurement bias) por sensores defectuosos únicamente' },
      { id: 'B', text: 'Sesgo de muestreo (sampling bias)' },
      { id: 'C', text: 'Sesgo de confirmación (confirmation bias) del analista en producción' },
      { id: 'D', text: 'Sesgo del observador (observer bias) durante la inferencia en vivo' },
    ],
    correctAnswers: ['B'],
    explanation:
      'El sesgo de muestreo (sampling bias) ocurre cuando el dataset no representa a la población objetivo, lo que puede producir alertas desproporcionadas hacia ciertos grupos. Es la explicación más directa del patrón descrito.',
  },
  {
    id: 302,
    certification: 'AIF-C01',
    domain: 'responsible-ai',
    topic: 'Sesgo y equidad (Fairness)',
    services: [],
    difficulty: 'easy',
    type: 'multiple',
    question:
      'Una aseguradora planea desplegar un LLM para automatizar el procesamiento de reclamaciones y quiere hacerlo de forma responsable para evitar daños. ¿Cuáles dos acciones debe tomar la empresa?',
    answers: [
      { id: 'A', text: 'Incluir métricas de equidad al evaluar el modelo' },
      { id: 'B', text: 'Ajustar el parámetro de temperatura del modelo' },
      { id: 'C', text: 'Modificar los datos de entrenamiento para reducir sesgos' },
      { id: 'D', text: 'Evitar el sobreajuste en los datos de entrenamiento' },
    ],
    correctAnswers: ['A', 'C'],
    explanation:
      'Incluir métricas de equidad verifica que el modelo trate los casos de forma justa, y modificar los datos de entrenamiento ataca el sesgo en su origen. Ambas acciones reducen directamente el riesgo de daño.',
  },
  {
    id: 303,
    certification: 'AIF-C01',
    domain: 'responsible-ai',
    topic: 'Documentación de modelos (Model Cards)',
    services: ['SageMaker', 'S3'],
    difficulty: 'hard',
    type: 'single',
    question:
      'Un equipo publica artefactos de modelos personalizados a otras áreas, pero conserva código y datos de entrenamiento. Necesita documentación estandarizada y auditable del uso previsto, entrenamiento e inferencia. ¿Qué solución debe usar?',
    answers: [
      { id: 'A', text: 'Escribir PDFs ad hoc almacenados en Amazon S3 sin plantilla común' },
      { id: 'B', text: 'Subir solo scripts de entrenamiento a un repositorio Git' },
      { id: 'C', text: 'Crear Amazon SageMaker Model Cards con usos previstos y detalles de entrenamiento e inferencia' },
      { id: 'D', text: 'Usar AWS AI Service Cards, diseñadas para servicios de IA gestionados de AWS' },
    ],
    correctAnswers: ['C'],
    explanation:
      'Amazon SageMaker Model Cards ofrecen un formato estandarizado para documentar modelos personalizados. Las AWS AI Service Cards describen servicios de IA de AWS, no modelos propios del cliente.',
  },
  {
    id: 304,
    certification: 'AIF-C01',
    domain: 'responsible-ai',
    topic: 'Sesgo y equidad (Fairness)',
    services: [],
    difficulty: 'hard',
    type: 'single',
    question:
      'Un banco construye un sistema de ML para ayudar a asignar líneas de crédito entre distintos grupos demográficos. Quiere reducir sesgo por desbalance en los datos. ¿Qué práctica es la MÁS adecuada para desarrollar un modelo más imparcial?',
    answers: [
      { id: 'A', text: 'Reducir el tamaño del conjunto de entrenamiento sin más análisis' },
      { id: 'B', text: 'Asegurar que las predicciones reproduzcan resultados históricos, aunque estén sesgados' },
      { id: 'C', text: 'Construir un modelo separado por cada grupo demográfico sin métricas de equidad' },
      { id: 'D', text: 'Medir el desbalance de clases en los datos de entrenamiento y ajustar el proceso (remuestreo o pesos de clase)' },
    ],
    correctAnswers: ['D'],
    explanation:
      'Medir el desbalance y adaptar el entrenamiento —por ejemplo con remuestreo o pesos de clase— ayuda a tratar equitativamente a grupos subrepresentados y reduce predicciones sesgadas.',
  },
  {
    id: 305,
    certification: 'AIF-C01',
    domain: 'responsible-ai',
    topic: 'Sesgo y equidad (Fairness)',
    services: ['SageMaker'],
    difficulty: 'easy',
    type: 'single',
    question:
      'Una cooperativa de crédito desarrolla un modelo de ML para aprobar microcréditos. Necesita detectar sesgos en datos y predicciones, y también explicar esas predicciones. ¿Qué solución cumple ambos requisitos?',
    answers: [
      { id: 'A', text: 'Amazon SageMaker Data Wrangler' },
      { id: 'B', text: 'Amazon SageMaker Clarify' },
      { id: 'C', text: 'Amazon SageMaker Model Cards' },
      { id: 'D', text: 'AWS AI Service Cards' },
    ],
    correctAnswers: ['B'],
    explanation:
      'Amazon SageMaker Clarify detecta sesgo en datos y predicciones y ofrece explicabilidad (por ejemplo atribuciones SHAP). Model Cards documentan; Data Wrangler prepara datos.',
  },
  {
    id: 306,
    certification: 'AIF-C01',
    domain: 'responsible-ai',
    topic: 'Explicabilidad y transparencia',
    services: [],
    difficulty: 'easy',
    type: 'single',
    question:
      'Una empresa de software B2B quiere una puntuación de prospectos donde los vendedores puedan ver y ajustar el peso de cada variable de entrada según su experiencia. ¿Qué tipo de modelo satisface mejor este requisito?',
    answers: [
      { id: 'A', text: 'Modelo k-nearest neighbors (k-NN)' },
      { id: 'B', text: 'Modelo de regresión logística (logistic regression)' },
      { id: 'C', text: 'Modelo de deep learning basado en PCA' },
      { id: 'D', text: 'Red neuronal profunda sin coeficientes interpretables' },
    ],
    correctAnswers: ['B'],
    explanation:
      'La regresión logística asigna un coeficiente explícito a cada variable, lo que permite ver y ajustar pesos con conocimiento de dominio. k-NN y redes profundas no exponen pesos lineales interpretables de forma nativa.',
  },
  {
    id: 307,
    certification: 'AIF-C01',
    domain: 'responsible-ai',
    topic: 'Sesgo y equidad (Fairness)',
    services: [],
    difficulty: 'hard',
    type: 'single',
    question:
      'Una empresa quiere reducir sesgo y toxicidad en una aplicación de IA generativa durante la etapa de postprocesamiento del ciclo de vida de ML. ¿Qué técnica encaja en esa etapa?',
    answers: [
      { id: 'A', text: 'Aumento de datos (data augmentation) en el dataset de entrenamiento' },
      { id: 'B', text: 'Human-in-the-loop (intervención humana en el bucle)' },
      { id: 'C', text: 'Ingeniería de características (feature engineering) previa al entrenamiento' },
      { id: 'D', text: 'Entrenamiento adversarial (adversarial training) durante el ajuste del modelo' },
    ],
    correctAnswers: ['B'],
    explanation:
      'Human-in-the-loop incorpora revisión humana en postprocesamiento para detectar y corregir salidas sesgadas o tóxicas antes de llegar al usuario. Las otras opciones ocurren en preparación o entrenamiento.',
  },
  {
    id: 308,
    certification: 'AIF-C01',
    domain: 'responsible-ai',
    topic: 'Pautas para una IA responsable',
    services: ['Bedrock'],
    difficulty: 'easy',
    type: 'single',
    question:
      'Una auditoría reveló que el modelo ajustado de aprobación de crédito de un banco favorece a un grupo demográfico sobre otros. ¿Cuál es la corrección MÁS rentable?',
    answers: [
      { id: 'A', text: 'Usar Retrieval Augmented Generation (RAG) con el modelo ajustado' },
      { id: 'B', text: 'Agregar datos de entrenamiento más diversos y representativos y volver a ajustar el modelo' },
      { id: 'C', text: 'Preentrenar un modelo completamente nuevo con datos más diversos' },
      { id: 'D', text: 'Aplicar Amazon Bedrock Guardrails para bloquear salidas sesgadas' },
    ],
    correctAnswers: ['B'],
    explanation:
      'Agregar datos más diversos y representativos y volver a ajustar el modelo existente enseña al modelo a tratar los grupos de forma equitativa, siendo la corrección más rentable.',
  },
  {
    id: 309,
    certification: 'AIF-C01',
    domain: 'responsible-ai',
    topic: 'Sesgo y equidad (Fairness)',
    services: [],
    difficulty: 'easy',
    type: 'single',
    question:
      'Una empresa de RR. HH. filtra currículums con un sistema de IA entrenado con un dataset que no representaba todos los grupos demográficos. ¿Qué dimensión central de IA responsable (responsible AI) está más involucrada?',
    answers: [
      { id: 'A', text: 'Transparencia (transparency)' },
      { id: 'B', text: 'Equidad (fairness)' },
      { id: 'C', text: 'Privacidad y seguridad (privacy and security)' },
      { id: 'D', text: 'Explicabilidad (explainability)' },
    ],
    correctAnswers: ['B'],
    explanation:
      'Un dataset no representativo puede producir resultados injustos entre grupos; eso es un problema de equidad (fairness). Transparencia y explicabilidad abordan comprensión del sistema; privacidad protege datos sensibles.',
  },
  {
    id: 310,
    certification: 'AIF-C01',
    domain: 'responsible-ai',
    topic: 'Guardrails y filtrado de contenido',
    services: ['Bedrock'],
    difficulty: 'easy',
    type: 'multiple',
    question:
      'Una plataforma de videojuegos en línea usa Amazon Bedrock Guardrails para filtrar entradas y salidas dañinas de usuarios y del modelo. ¿Cuáles dos categorías de contenido pueden filtrar los guardrails?',
    answers: [
      { id: 'A', text: 'Política' },
      { id: 'B', text: 'Odio (Hate)' },
      { id: 'C', text: 'Apuestas (Gambling)' },
      { id: 'D', text: 'Violencia (Violence)' },
    ],
    correctAnswers: ['B', 'D'],
    explanation:
      'Amazon Bedrock Guardrails incluyen filtros de contenido configurables para categorías dañinas como Odio (Hate) y Violencia (Violence), aplicables tanto a entradas de usuarios como a respuestas del modelo.',
  },
  {
    id: 311,
    certification: 'AIF-C01',
    domain: 'responsible-ai',
    topic: 'Guardrails y filtrado de contenido',
    services: ['Bedrock', 'Rekognition', 'Inspector', 'Trusted Advisor'],
    difficulty: 'easy',
    type: 'single',
    question:
      'Una clínica privada quiere usar IA generativa en su portal para responder preguntas médicas de pacientes y necesita controles de contenido, seguridad y temas denegados. ¿Qué servicio de AWS apoya mejor prácticas de IA responsable aquí?',
    answers: [
      { id: 'A', text: 'Amazon Inspector' },
      { id: 'B', text: 'Amazon Bedrock Guardrails' },
      { id: 'C', text: 'Amazon Rekognition' },
      { id: 'D', text: 'AWS Trusted Advisor' },
    ],
    correctAnswers: ['B'],
    explanation:
      'Amazon Bedrock Guardrails permite definir filtros de contenido, temas denegados y controles de seguridad sobre prompts y respuestas de IA generativa, alineado con IA responsable en salud.',
  },
  {
    id: 312,
    certification: 'AIF-C01',
    domain: 'responsible-ai',
    topic: 'Sesgo y equidad (Fairness)',
    services: ['SageMaker'],
    difficulty: 'hard',
    type: 'single',
    question:
      'Una empresa lleva meses con un modelo de IA generativa en producción para segmentar clientes. Observa respuestas inconsistentes y quiere detectar deriva (drift) y cambios de sesgo en el tiempo. ¿Qué capacidad de AWS cumple MEJOR este requisito en producción?',
    answers: [
      { id: 'A', text: 'Amazon SageMaker Feature Store' },
      { id: 'B', text: 'Amazon SageMaker Clarify solo en entrenamiento, sin monitoreo continuo' },
      { id: 'C', text: 'Amazon SageMaker Model Monitor' },
      { id: 'D', text: 'Amazon SageMaker Model Cards' },
    ],
    correctAnswers: ['C'],
    explanation:
      'Amazon SageMaker Model Monitor observa endpoints en producción y alerta sobre deriva de datos, de concepto y cambios de sesgo. Clarify analiza sesgo/explicabilidad; Model Cards documentan; Feature Store gestiona features.',
  },
  {
    id: 313,
    certification: 'AIF-C01',
    domain: 'responsible-ai',
    topic: 'Sesgo y equidad (Fairness)',
    services: [],
    difficulty: 'easy',
    type: 'multiple',
    question:
      'Una empresa está incorporando IA a su proceso de selección de personal y quiere reducir riesgos de sesgo y mantener decisiones de contratación equitativas. ¿Cuáles dos dimensiones centrales de IA responsable debe priorizar?',
    answers: [
      { id: 'A', text: 'Equidad (fairness)' },
      { id: 'B', text: 'Flexibilidad' },
      { id: 'C', text: 'Tolerancia' },
      { id: 'D', text: 'Transparencia' },
    ],
    correctAnswers: ['A', 'D'],
    explanation:
      'La equidad (fairness) mantiene resultados justos entre grupos demográficos, mitigando directamente el sesgo. La transparencia hace visibles las decisiones de la IA para poder explicarlas y auditarlas. Ambas son dimensiones centrales de IA responsable.',
  },
  {
    id: 314,
    certification: 'AIF-C01',
    domain: 'responsible-ai',
    topic: 'Explicabilidad y transparencia',
    services: [],
    difficulty: 'easy',
    type: 'single',
    question:
      'Un científico de datos predice riesgo de abandono de clientes y necesita dar a gerentes transparencia sobre por qué cada predicción individual fue alta o baja. ¿Qué solución cumple este requisito?',
    answers: [
      { id: 'A', text: 'Presentar los valores de Shapley (SHAP) del modelo para cada predicción' },
      { id: 'B', text: 'Proporcionar solo la accuracy global del modelo' },
      { id: 'C', text: 'Proporcionar solo la matriz de confusión agregada' },
      { id: 'D', text: 'Proporcionar un endpoint de inferencia seguro sin explicaciones' },
    ],
    correctAnswers: ['A'],
    explanation:
      'Los valores de Shapley (SHAP) cuantifican la contribución de cada característica a una predicción individual, ofreciendo explicabilidad local. Accuracy y la matriz de confusión miden rendimiento agregado, no el porqué de cada caso.',
  },
  {
    id: 315,
    certification: 'AIF-C01',
    domain: 'responsible-ai',
    topic: 'Explicabilidad y transparencia',
    services: [],
    difficulty: 'hard',
    type: 'single',
    question:
      'Una aseguradora debe demostrar ante reguladores que comprende cómo su modelo de ML llega a cada decisión de prima. ¿Qué término describe mejor esa capacidad de entender las predicciones del modelo?',
    answers: [
      { id: 'A', text: 'Interpretabilidad del modelo (model interpretability)' },
      { id: 'B', text: 'Entrenamiento del modelo (model training)' },
      { id: 'C', text: 'Rendimiento del modelo (model performance)' },
      { id: 'D', text: 'Interoperabilidad del modelo (model interoperability)' },
    ],
    correctAnswers: ['A'],
    explanation:
      'La interpretabilidad del modelo (model interpretability) se refiere a comprender cómo el modelo produce sus predicciones. No debe confundirse con interoperabilidad entre sistemas ni con métricas de rendimiento.',
  },
  {
    id: 316,
    certification: 'AIF-C01',
    domain: 'responsible-ai',
    topic: 'Explicabilidad y transparencia',
    services: [],
    difficulty: 'easy',
    type: 'single',
    question:
      'Una fintech usa un modelo de IA generativa para asignar límites de gasto a tarjetas nuevas y quiere hacer más transparente el proceso de decisión para los clientes. ¿Qué solución cumple este requisito?',
    answers: [
      { id: 'A', text: 'Reemplazar el modelo de ML por un sistema basado solo en reglas fijas' },
      { id: 'B', text: 'Aplicar técnicas de IA explicable (XAI, explainable AI) para mostrar qué factores influyeron' },
      { id: 'C', text: 'Mostrar solo logs técnicos internos sin explicación al cliente' },
      { id: 'D', text: 'Aumentar la precisión del modelo para evitar cualquier necesidad de transparencia' },
    ],
    correctAnswers: ['B'],
    explanation:
      'Las técnicas de IA explicable (XAI) revelan factores que influyeron en cada decisión, haciendo transparente el razonamiento del modelo sin exigir abandonar ML.',
  },
  {
    id: 317,
    certification: 'AIF-C01',
    domain: 'responsible-ai',
    topic: 'Explicabilidad y transparencia',
    services: ['SageMaker'],
    difficulty: 'easy',
    type: 'single',
    question:
      'Una agencia de marketing despliega en Amazon SageMaker un modelo que detecta temas en publicaciones de redes sociales y necesita mostrar cómo las variables de entrada influyen en el comportamiento del modelo. ¿Qué característica de SageMaker cumple este requisito?',
    answers: [
      { id: 'A', text: 'Amazon SageMaker Ground Truth' },
      { id: 'B', text: 'Amazon SageMaker Clarify' },
      { id: 'C', text: 'Amazon SageMaker Feature Store' },
      { id: 'D', text: 'Amazon SageMaker Canvas' },
    ],
    correctAnswers: ['B'],
    explanation:
      'Amazon SageMaker Clarify ofrece explicabilidad, incluida la atribución de características, para mostrar cómo las entradas influyen en las predicciones.',
  },
  {
    id: 318,
    certification: 'AIF-C01',
    domain: 'responsible-ai',
    topic: 'Documentación de modelos (Model Cards)',
    services: ['SageMaker', 'Textract', 'Comprehend'],
    difficulty: 'easy',
    type: 'single',
    question:
      'Una entidad financiera tiene un modelo que aprueba o rechaza hipotecas. Por regulación debe documentar uso previsto, rendimiento y detalles de decisión de forma auditable. ¿Qué solución cumple estos requisitos?',
    answers: [
      { id: 'A', text: 'Amazon Textract' },
      { id: 'B', text: 'Amazon SageMaker Model Cards' },
      { id: 'C', text: 'AWS CloudFormation' },
      { id: 'D', text: 'Amazon Comprehend' },
    ],
    correctAnswers: ['B'],
    explanation:
      'Amazon SageMaker Model Cards documentan uso previsto, rendimiento y contexto del modelo en un formato estandarizado para gobernanza y auditorías.',
  },
  {
    id: 319,
    certification: 'AIF-C01',
    domain: 'responsible-ai',
    topic: 'Explicabilidad y transparencia',
    services: ['Bedrock'],
    difficulty: 'easy',
    type: 'multiple',
    question:
      '¿Cuáles dos características de Amazon Bedrock ayudan con el filtrado de contenido y la seguridad?',
    answers: [
      { id: 'A', text: 'Guardrails para filtrar contenido' },
      { id: 'B', text: 'Opciones de personalización del modelo' },
      { id: 'C', text: 'Capacidades de gestión de prompts' },
      { id: 'D', text: 'Detección de marcas de agua (watermark detection) para contenido generado por IA' },
    ],
    correctAnswers: ['A', 'D'],
    explanation:
      'Amazon Bedrock Guardrails filtran contenido dañino o no deseado en prompts y respuestas, y la detección de marcas de agua identifica contenido generado por IA, apoyando transparencia y prevención de uso indebido. Juntas abordan filtrado y seguridad.',
  },
  {
    id: 320,
    certification: 'AIF-C01',
    domain: 'responsible-ai',
    topic: 'Sesgo y equidad (Fairness)',
    services: ['SageMaker', 'Bedrock', 'A2I'],
    difficulty: 'easy',
    type: 'single',
    question:
      'Un hospital usa un modelo de ML para marcar resultados de laboratorio anormales y quiere que profesionales médicos revisen predicciones con baja confianza antes de notificar al paciente. ¿Qué servicio de AWS cumple este requisito?',
    answers: [
      { id: 'A', text: 'Amazon SageMaker Clarify' },
      { id: 'B', text: 'Amazon Augmented AI (Amazon A2I)' },
      { id: 'C', text: 'Amazon SageMaker Model Monitor' },
      { id: 'D', text: 'Amazon Bedrock Guardrails' },
    ],
    correctAnswers: ['B'],
    explanation:
      'Amazon Augmented AI (Amazon A2I) enruta predicciones de baja confianza a revisores humanos. Clarify y Model Monitor cubren sesgo/explicabilidad y deriva; Guardrails filtra contenido de IA generativa.',
  },
  {
    id: 321,
    certification: 'AIF-C01',
    domain: 'responsible-ai',
    topic: 'Riesgos legales y reputacionales',
    services: [],
    difficulty: 'easy',
    type: 'single',
    question:
      'Una empresa planea desplegar un chatbot de IA generativa para clientes de banca. ¿Cuál de las siguientes es un riesgo legal que debe considerar al poner la aplicación en producción?',
    answers: [
      { id: 'A', text: 'Reducción del tiempo de entrenamiento del modelo' },
      { id: 'B', text: 'Mayor utilización de hardware de entrenamiento' },
      { id: 'C', text: 'Posible daño a usuarios finales por salidas imprecisas o sesgadas' },
      { id: 'D', text: 'Menores costos de computación en la nube' },
    ],
    correctAnswers: ['C'],
    explanation:
      'Salidas imprecisas o sesgadas pueden dañar a usuarios y generar responsabilidad legal, sanciones o litigios. Reducir tiempo de entrenamiento o costos no son riesgos legales de despliegue a clientes.',
  },
  {
    id: 322,
    certification: 'AIF-C01',
    domain: 'responsible-ai',
    topic: 'Sesgo y equidad (Fairness)',
    services: [],
    difficulty: 'easy',
    type: 'single',
    question:
      'Un equipo de ML evalúa sesgo y equidad (fairness) de un modelo de aprobación de seguros antes y después de producción. Ordene las actividades del primero al último. ¿Cuál orden es correcto?',
    answers: [
      { id: 'A', text: '1) Inspeccionar el dataset de entrenamiento → 2) Ejecutar métricas de sesgo sobre predicciones → 3) Registrar en una model card → 4) Monitorear el endpoint → 5) Definir criterios de equidad y atributos sensibles' },
      { id: 'B', text: '1) Monitorear el endpoint → 2) Registrar en una model card → 3) Ejecutar métricas de sesgo → 4) Inspeccionar el dataset → 5) Definir criterios de equidad' },
      { id: 'C', text: '1) Definir criterios de equidad y atributos sensibles → 2) Inspeccionar el dataset de entrenamiento → 3) Ejecutar métricas de sesgo sobre predicciones → 4) Registrar en una model card → 5) Monitorear el endpoint desplegado' },
      { id: 'D', text: '1) Inspeccionar el dataset → 2) Definir criterios de equidad → 3) Ejecutar métricas de sesgo → 4) Registrar en una model card → 5) Monitorear el endpoint' },
    ],
    correctAnswers: ['C'],
    explanation:
      'Primero se definen criterios de equidad y atributos sensibles; luego se inspeccionan datos (pre-entrenamiento), se miden predicciones (post-entrenamiento), se documenta en una model card y se monitorea el endpoint en producción.',
  },
  {
    id: 323,
    certification: 'AIF-C01',
    domain: 'responsible-ai',
    topic: 'Sesgo y equidad (Fairness)',
    services: ['SageMaker', 'A2I'],
    difficulty: 'easy',
    type: 'single',
    question:
      'Relacione cada capacidad de IA responsable de AWS con su propósito. Empareje cada capacidad de la izquierda con la descripción correcta de la derecha. Elementos: • Amazon SageMaker Clarify • Amazon SageMaker Model Monitor • Amazon Augmented AI (Amazon A2I) • Amazon SageMaker Model Cards ¿Cuál mapeo es correcto?',
    answers: [
      { id: 'A', text: 'Amazon SageMaker Clarify → Supervisa un endpoint desplegado y alerta sobre calidad de datos y deriva de atribución de características; Amazon SageMaker Model Monitor → Enruta predicciones con baja confianza a revisores humanos; Amazon A2I → Documenta uso previsto, resultados de evaluación y calificación de riesgo; Amazon SageMaker Model Cards → Detecta sesgo y explica predicciones con atribuciones SHAP' },
      { id: 'B', text: 'Amazon SageMaker Clarify → Supervisa un endpoint desplegado y alerta sobre calidad de datos y deriva de atribución; Amazon SageMaker Model Monitor → Detecta sesgo y explica predicciones con atribuciones SHAP; Amazon A2I → Enruta predicciones con baja confianza a revisores humanos; Amazon SageMaker Model Cards → Documenta uso previsto, resultados y calificación de riesgo' },
      { id: 'C', text: 'Amazon SageMaker Clarify → Detecta sesgo en datos y modelos y explica predicciones con atribuciones de características como valores SHAP; Amazon SageMaker Model Monitor → Supervisa un endpoint desplegado y alerta sobre calidad de datos y deriva de atribución de características; Amazon A2I → Enruta predicciones con baja confianza a revisores humanos para decisión final; Amazon SageMaker Model Cards → Documenta uso previsto, resultados de evaluación y calificación de riesgo en un solo lugar para gobernanza' },
      { id: 'D', text: 'Amazon SageMaker Clarify → Documenta uso previsto, resultados y calificación de riesgo; Amazon SageMaker Model Monitor → Enruta predicciones con baja confianza a revisores humanos; Amazon A2I → Supervisa un endpoint y alerta sobre deriva; Amazon SageMaker Model Cards → Detecta sesgo y explica predicciones con atribuciones SHAP' },
    ],
    correctAnswers: ['C'],
    explanation:
      'Amazon SageMaker Clarify calcula métricas de sesgo y produce atribuciones SHAP para explicar predicciones. Amazon SageMaker Model Monitor verifica continuamente un endpoint en vivo y alerta sobre deriva, incluida deriva de atribución. Amazon A2I envía predicciones de baja confianza a revisores humanos. Amazon SageMaker Model Cards registran uso previsto, resultados y calificación de riesgo para gobernanza.',
  },
  {
    id: 324,
    certification: 'AIF-C01',
    domain: 'responsible-ai',
    topic: 'Explicabilidad y transparencia',
    services: ['SageMaker'],
    difficulty: 'easy',
    type: 'single',
    question:
      'Una empresa utiliza la IA de Amazon SageMaker para sus modelos de ML. La empresa quiere implementar una solución para que los propietarios de modelos creen un registro de la información del modelo. La información del modelo debe incluir los usos previstos, las clasificaciones de riesgo, los detalles del entrenamiento y los resultados de la evaluación. ¿Qué característica de la IA de SageMaker cumplirá con estos requisitos?',
    answers: [
      { id: 'A', text: 'SageMaker Model Cards' },
      { id: 'B', text: 'SageMaker Model Dashboard' },
      { id: 'C', text: 'SageMaker Model Monitor' },
      { id: 'D', text: 'SageMaker Role Manager' },
    ],
    correctAnswers: ['A'],
    explanation:
      'SageMaker Model Cards permite documentar en un solo lugar usos previstos, riesgos, detalles de entrenamiento y resultados de evaluación, apoyando transparencia y explicabilidad. Model Monitor vigila drift en producción, Role Manager gestiona permisos y Model Dashboard es más de vista operativa que de registro documental completo del modelo.',
  },
  {
    id: 325,
    certification: 'AIF-C01',
    domain: 'responsible-ai',
    topic: 'Sesgo y equidad (Fairness)',
    services: ['Artifact'],
    difficulty: 'easy',
    type: 'single',
    question:
      'El departamento que va a implantar un servicio de IA desea comprobar en la documentación oficial del proveedor los usos previstos de ese servicio y las consideraciones de diseño. ¿Cuál es el recurso que proporciona AWS?',
    answers: [
      { id: 'A', text: 'La lista de especificaciones de la página de precios' },
      { id: 'B', text: 'AWS AI Service Cards' },
      { id: 'C', text: 'El acuerdo de nivel de servicio (SLA)' },
      { id: 'D', text: 'Los informes de cumplimiento de AWS Artifact' },
    ],
    correctAnswers: ['B'],
    explanation:
      'Las AWS AI Service Cards documentan usos previstos, decisiones de diseño y consideraciones de equidad/precisión de los servicios de IA de AWS.',
  },
  {
    id: 326,
    certification: 'AIF-C01',
    domain: 'responsible-ai',
    topic: 'Documentación de modelos (Model Cards)',
    services: ['SageMaker', 'Artifact'],
    difficulty: 'easy',
    type: 'single',
    question:
      'Un equipo de ciencia de datos quiere documentar, para un modelo de ML desarrollado internamente, los usos previstos, los resultados de la evaluación de desempeño, las limitaciones y la evaluación de riesgos, y usarlo en las revisiones internas de gobernanza y en los traspasos entre responsables. ¿Cuál es la funcionalidad de AWS más adecuada?',
    answers: [
      { id: 'A', text: 'AWS AI Service Cards' },
      { id: 'B', text: 'Amazon SageMaker Model Cards' },
      { id: 'C', text: 'AWS Artifact' },
      { id: 'D', text: 'Amazon SageMaker Model Monitor' },
    ],
    correctAnswers: ['B'],
    explanation:
      'SageMaker Model Cards documenta modelos propios (usos, entrenamiento, evaluación, limitaciones). AI Service Cards las publica AWS sobre sus servicios; Artifact son reportes de cumplimiento; Model Monitor vigila drift en producción.',
  },
  {
    id: 327,
    certification: 'AIF-C01',
    domain: 'responsible-ai',
    topic: 'Sesgo y equidad (Fairness)',
    services: ['Rekognition'],
    difficulty: 'easy',
    type: 'single',
    question:
      'Antes de adoptar Amazon Rekognition, una empresa desea consultar el uso previsto del servicio, sus limitaciones conocidas y las consideraciones relativas a la equidad. ¿Cuál es el tipo de documento de transparencia que AWS proporciona con este fin?',
    answers: [
      { id: 'A', text: 'Modelo de responsabilidad compartida de AWS' },
      { id: 'B', text: 'AWS AI Service Cards' },
      { id: 'C', text: 'Acuerdo de nivel de servicio de AWS (SLA)' },
      { id: 'D', text: 'AWS Well-Architected Framework' },
    ],
    correctAnswers: ['B'],
    explanation:
      'Las AWS AI Service Cards aportan transparencia sobre uso previsto, limitaciones, diseño y equidad de cada servicio de IA de AWS.',
  },
  {
    id: 328,
    certification: 'AIF-C01',
    domain: 'responsible-ai',
    topic: 'Pautas para una IA responsable',
    services: [],
    difficulty: 'easy',
    type: 'single',
    question:
      'Una empresa está estudiando utilizar tal cual, en materiales de publicación, los textos creados con IA generativa. Desde el punto de vista del uso responsable, ¿cuál es el procedimiento que conviene incorporar primero?',
    answers: [
      { id: 'A', text: 'Establecer un número mínimo de caracteres para los textos generados y comprobar que cada material publicado lo cumple' },
      { id: 'B', text: 'Fijar en 0 el parámetro temperature de la generación para que el texto publicado sea siempre el mismo ante la misma indicación' },
      { id: 'C', text: 'Hacer obligatorio un paso en el que una persona verifique la exactitud y la adecuación del contenido antes de la publicación' },
      { id: 'D', text: 'Fijar como modelo de generación el de mayor tamaño disponible, confiando en que su conocimiento más amplio baste por sí solo' },
    ],
    correctAnswers: ['C'],
    explanation:
      'Los textos generados pueden contener errores o contenido inapropiado; un paso de verificación humana antes de publicar es el punto de partida del uso responsable.',
  },
  {
    id: 329,
    certification: 'AIF-C01',
    domain: 'responsible-ai',
    topic: 'Explicabilidad y transparencia',
    services: [],
    difficulty: 'medium',
    type: 'single',
    question:
      'Para un sistema de evaluación crediticia con obligación de explicar sus decisiones al regulador, se están comparando un modelo de aprendizaje profundo de alta precisión y un modelo lineal algo menos preciso pero cuyos fundamentos de decisión pueden leerse directamente. ¿Cuál es el compromiso (trade-off) más pertinente a considerar en esta selección?',
    answers: [
      { id: 'A', text: 'Cuanto más complejo y de mayor desempeño es un modelo, más tiende a bajar su interpretabilidad, por lo que hay que estudiar cómo compatibilizarlo con la obligación de explicación' },
      { id: 'B', text: 'Como el modelo lineal tiene una estructura simple, queda excluido de la obligación regulatoria de explicación' },
      { id: 'C', text: 'La interpretabilidad y el desempeño siempre son proporcionales, así que elegir un modelo de alto desempeño también aumenta la explicabilidad' },
      { id: 'D', text: 'Las decisiones de los modelos de aprendizaje profundo son por principio totalmente inexplicables, así que en los sectores regulados no se puede usar el machine learning' },
    ],
    correctAnswers: ['A'],
    explanation:
      'Más complejidad/desempeño suele reducir interpretabilidad. En escenarios con obligación de explicación hay que equilibrar modelo interpretable vs. modelo complejo + explicaciones a posteriori (p. ej. SHAP).',
  },
  {
    id: 330,
    certification: 'AIF-C01',
    domain: 'responsible-ai',
    topic: 'Sesgo y equidad (Fairness)',
    services: [],
    difficulty: 'easy',
    type: 'single',
    question:
      'Una entidad financiera ha implantado un modelo de IA para la evaluación de préstamos. Necesita comprobar que el modelo no muestre una tasa de rechazo injustamente alta para determinadas razas o sexos. ¿Cuál es el principio de la IA responsable más relacionado con este requisito?',
    answers: [
      { id: 'A', text: 'Robustez (Robustness)' },
      { id: 'B', text: 'Equidad (Fairness)' },
      { id: 'C', text: 'Privacidad (Privacy)' },
      { id: 'D', text: 'Explicabilidad (Explainability)' },
    ],
    correctAnswers: ['B'],
    explanation:
      'La equidad implica que el sistema no discrimine injustamente por atributos protegidos (raza, sexo, edad, etc.) y ofrezca resultados justos.',
  },
  {
    id: 331,
    certification: 'AIF-C01',
    domain: 'responsible-ai',
    topic: 'Explicabilidad y transparencia',
    services: [],
    difficulty: 'easy',
    type: 'multiple',
    question:
      'Seleccione dos principios importantes para practicar la IA responsable. (Seleccione DOS opciones)',
    answers: [
      { id: 'A', text: 'Maximización de la precisión: priorizar la precisión de las predicciones por encima de cualquier otro atributo de calidad' },
      { id: 'B', text: 'Transparencia: poder explicar a las partes interesadas el funcionamiento y el proceso de decisión del sistema de IA' },
      { id: 'C', text: 'Rendición de cuentas: que la responsabilidad sobre los resultados del sistema de IA esté claramente asignada' },
      { id: 'D', text: 'Automatización total: eliminar gradualmente la participación humana para mantener la coherencia de las decisiones' },
    ],
    correctAnswers: ['B', 'C'],
    explanation:
      'Transparencia y rendición de cuentas son pilares de IA responsable. Maximizar solo la precisión o eliminar la supervisión humana no lo son.',
  },
  {
    id: 332,
    certification: 'AIF-C01',
    domain: 'responsible-ai',
    topic: 'Sesgo y equidad (Fairness)',
    services: ['SageMaker'],
    difficulty: 'medium',
    type: 'single',
    question:
      'Sobre un modelo de apoyo a la contratación en producción, se descubrió que los datos de entrenamiento de cierto grupo demográfico eran considerablemente más escasos que los de otros grupos y que la calidad de las predicciones para ese grupo es inferior. ¿Cuál es la actuación más adecuada?',
    answers: [
      { id: 'A', text: 'Eliminar la columna del atributo en cuestión de los datos de entrenamiento y reentrenar' },
      { id: 'B', text: 'Como la precisión global del modelo es alta, continuar la operación tal cual' },
      { id: 'C', text: 'Ampliar y reequilibrar los datos del grupo insuficiente, reentrenar y confirmar la mejora con métricas de equidad' },
      { id: 'D', text: 'Ajustar el parámetro de generación (temperature) para mitigar el sesgo de la salida' },
    ],
    correctAnswers: ['C'],
    explanation:
      'Ante sesgo por infrarrepresentación hay que reequilibrar datos, reentrenar y medir con métricas de equidad (p. ej. con SageMaker Clarify). Borrar la columna o mirar solo la precisión global no soluciona el problema.',
  },
  {
    id: 333,
    certification: 'AIF-C01',
    domain: 'responsible-ai',
    topic: 'Sesgo y equidad (Fairness)',
    services: [],
    difficulty: 'medium',
    type: 'single',
    question:
      'Se ha comprobado que, aunque los datos de entrenamiento no incluyen atributos personales, los resultados de las predicciones del modelo perjudican a un determinado grupo de atributo. ¿Cuál es la explicación más adecuada de este fenómeno?',
    answers: [
      { id: 'A', text: 'El sesgo se reproduce de forma indirecta a través de otras características correlacionadas con el atributo' },
      { id: 'B', text: 'Como el atributo en sí no se incluyó en el entrenamiento, en principio no debería surgir sesgo en los resultados del modelo' },
      { id: 'C', text: 'El modelo tiene muy pocos parámetros y por tanto le falta capacidad de representación' },
      { id: 'D', text: 'El parámetro temperature en la inferencia es demasiado alto y la salida no es estable entre una ejecución y otra' },
    ],
    correctAnswers: ['A'],
    explanation:
      'Aunque se excluya el atributo sensible, el sesgo puede reproducirse vía proxies correlacionados (zona, historial, etc.). Hay que medir y mitigar el sesgo en los resultados.',
  },
  {
    id: 334,
    certification: 'AIF-C01',
    domain: 'responsible-ai',
    topic: 'Sesgo y equidad (Fairness)',
    services: [],
    difficulty: 'medium',
    type: 'single',
    question:
      'Un sistema de reconocimiento facial falla mucho más en un grupo demográfico que en el resto, con el mismo umbral de decisión. ¿Qué problema de IA responsable describe mejor la situación?',
    answers: [
      { id: 'A', text: 'Sesgo (bias) del modelo' },
      { id: 'B', text: 'Caché de prompts mal configurado' },
      { id: 'C', text: 'Provisioned Throughput insuficiente' },
      { id: 'D', text: 'Falta de un registro Route 53' },
    ],
    correctAnswers: ['A'],
    explanation:
      'Desempeño desigual sistemático entre grupos demográficos es un síntoma clásico de sesgo (bias).',
  },
  {
    id: 335,
    certification: 'AIF-C01',
    domain: 'responsible-ai',
    topic: 'Explicabilidad y transparencia',
    services: [],
    difficulty: 'hard',
    type: 'single',
    question:
      'Diseñan una UI de IA explicable: el usuario debe entender por qué se negó un crédito y poder reportar errores. ¿Qué principio de diseño centrado en el humano aplica mejor?',
    answers: [
      { id: 'A', text: 'Ocultar siempre el razonamiento del modelo' },
      { id: 'B', text: 'Incorporar mecanismos de retroalimentación (feedback) y transparencia en las decisiones' },
      { id: 'C', text: 'Eliminar cualquier mensaje al usuario' },
      { id: 'D', text: 'Mostrar solo el hash del modelo' },
    ],
    correctAnswers: ['B'],
    explanation:
      'Para IA explicable se recomienda transparencia en las decisiones y canales de feedback del usuario.',
  },
  {
    id: 336,
    certification: 'AIF-C01',
    domain: 'responsible-ai',
    topic: 'Guardrails y filtrado de contenido',
    services: ['SageMaker', 'Bedrock', 'Macie', 'Config'],
    difficulty: 'medium',
    type: 'single',
    question:
      'Quieren filtrar odio, bloquear temas médicos no autorizados y redactar PII en entradas/salidas de un FM en Bedrock, sin reescribir toda la app. ¿Qué capacidad encaja?',
    answers: [
      { id: 'A', text: 'Amazon Bedrock Guardrails' },
      { id: 'B', text: 'Amazon Macie como reemplazo del FM' },
      { id: 'C', text: 'AWS Config midiendo ROUGE' },
      { id: 'D', text: 'SageMaker Model Cards generando tokens' },
    ],
    correctAnswers: ['A'],
    explanation:
      'Bedrock Guardrails configura filtros de contenido, temas denegados y redacción de información sensible sobre el FM.',
  },
  {
    id: 337,
    certification: 'AIF-C01',
    domain: 'responsible-ai',
    topic: 'Supervisión humana (Human-in-the-loop)',
    services: ['Textract', 'A2I', 'Artifact', 'PartyRock', 'Trusted Advisor'],
    difficulty: 'medium',
    type: 'single',
    question:
      'Un flujo de OCR con Textract debe enviar a revisión humana solo las predicciones con confianza baja antes de cerrar el caso. ¿Qué servicio está diseñado para ese human-in-the-loop?',
    answers: [
      { id: 'A', text: 'Amazon Augmented AI (A2I)' },
      { id: 'B', text: 'AWS Artifact' },
      { id: 'C', text: 'Amazon PartyRock únicamente' },
      { id: 'D', text: 'AWS Trusted Advisor como revisor de imágenes' },
    ],
    correctAnswers: ['A'],
    explanation:
      'Amazon A2I inserta revisión humana en flujos de ML cuando la confianza es baja u otros criterios lo requieren.',
  },
  {
    id: 338,
    certification: 'AIF-C01',
    domain: 'responsible-ai',
    topic: 'Explicabilidad y transparencia',
    services: [],
    difficulty: 'hard',
    type: 'single',
    question:
      'El comité de riesgo pide más interpretabilidad de un modelo de deep learning, pero el equipo de ML advierte que forzar explicabilidad extrema puede degradar el desempeño. ¿Qué compromiso (tradeoff) describe mejor la situación?',
    answers: [
      { id: 'A', text: 'No existe relación entre transparencia y desempeño' },
      { id: 'B', text: 'Aumentar interpretabilidad puede afectar el desempeño (y viceversa) en el eje safety/transparencia' },
      { id: 'C', text: 'Más transparencia siempre mejora automáticamente la exactitud (accuracy)' },
      { id: 'D', text: 'La transparencia solo importa en modelos de regresión lineal y nunca en deep learning' },
    ],
    correctAnswers: ['B'],
    explanation:
      'Hay un tradeoff entre seguridad/transparencia e interpretabilidad frente al desempeño del modelo.',
  },
  {
    id: 339,
    certification: 'AIF-C01',
    domain: 'responsible-ai',
    topic: 'Sostenibilidad de la IA',
    services: [],
    difficulty: 'medium',
    type: 'single',
    question:
      'Al elegir entre dos FMs con calidad similar, sostenibilidad corporativa pide considerar el impacto ambiental del entrenamiento/uso del modelo. ¿Qué consideración responsable aplica?',
    answers: [
      { id: 'A', text: 'Sustentabilidad y consideraciones ambientales del modelo' },
      { id: 'B', text: 'Elegir siempre el modelo con más parámetros sin mirar impacto' },
      { id: 'C', text: 'Ignorar el consumo energético porque GenAI no usa cómputo' },
      { id: 'D', text: 'Preferir el modelo que no permita logging de auditoría' },
    ],
    correctAnswers: ['A'],
    explanation:
      'La selección responsable de modelos incluye consideraciones ambientales y de sustentabilidad.',
  },
  {
    id: 340,
    certification: 'AIF-C01',
    domain: 'responsible-ai',
    topic: 'Sesgo y equidad (Fairness)',
    services: ['IAM'],
    difficulty: 'easy',
    type: 'single',
    question:
      '¿Cuál emparejamiento correcto define sesgo (bias), sobreajuste (overfitting), subajuste (underfitting) y alucinación (hallucination)?',
    answers: [
      { id: 'A', text: 'Sesgo (bias): trato desigual entre grupos · Sobreajuste (overfitting): memoriza el entrenamiento · Subajuste (underfitting): demasiado simple · Alucinación (hallucination): salida convincente pero falsa' },
      { id: 'B', text: 'Sesgo: solo latencia · Sobreajuste: cifrado · Subajuste: IAM · Alucinación: facturación' },
      { id: 'C', text: 'Los cuatro son sinónimos de exactitud (accuracy)' },
      { id: 'D', text: 'Sesgo y alucinación solo aplican a datos tabulares' },
    ],
    correctAnswers: ['A'],
    explanation:
      'Términos centrales de IA responsable: sesgo (bias), sobreajuste (overfitting), subajuste (underfitting) y alucinación (hallucination).',
  },
  {
    id: 341,
    certification: 'AIF-C01',
    domain: 'responsible-ai',
    topic: 'Sesgo y equidad (Fairness)',
    services: ['VPC'],
    difficulty: 'medium',
    type: 'multiple',
    question:
      'El marco de IA responsable de la empresa debe nombrar propiedades asociadas a sistemas responsables. ¿Cuáles aplican? (Seleccione 2)',
    answers: [
      { id: 'A', text: 'Equidad (fairness)' },
      { id: 'B', text: 'Robustez (robustness)' },
      { id: 'C', text: 'Número de AZs de la VPC como única métrica ética' },
      { id: 'D', text: 'El precio listado del servicio como sinónimo de equidad' },
    ],
    correctAnswers: ['A', 'B'],
    explanation:
      'Características típicas: fairness, robustness, safety, veracity, inclusivity y gestión de bias.',
  },
  {
    id: 342,
    certification: 'AIF-C01',
    domain: 'responsible-ai',
    topic: 'Pautas para una IA responsable',
    services: [],
    difficulty: 'hard',
    type: 'multiple',
    question:
      'Legal revisa un chatbot GenAI que podría reproducir texto con copyright y dañar la reputación si alucina precios. ¿Cuáles son riesgos legales/reputacionales típicos? (Seleccione 2)',
    answers: [
      { id: 'A', text: 'Reclamos por infracción de propiedad intelectual' },
      { id: 'B', text: 'Pérdida de confianza del cliente' },
      { id: 'C', text: 'Que GenAI garantice por sí sola cumplimiento legal total' },
      { id: 'D', text: 'Que el uso de GenAI elimine la necesidad de políticas de datos' },
    ],
    correctAnswers: ['A', 'B'],
    explanation:
      'Riesgos típicos: IP, salidas sesgadas, pérdida de confianza, daño al usuario final y alucinaciones.',
  },
  {
    id: 343,
    certification: 'AIF-C01',
    domain: 'responsible-ai',
    topic: 'Explicabilidad y transparencia',
    services: [],
    difficulty: 'easy',
    type: 'single',
    question:
      '¿Qué diferencia principal hay entre un modelo transparente/explicable y uno que no lo es?',
    answers: [
      { id: 'A', text: 'El modelo explicable siempre es más preciso' },
      { id: 'B', text: 'El modelo explicable no necesita datos de entrenamiento' },
      { id: 'C', text: 'No hay ninguna diferencia real' },
      { id: 'D', text: 'El modelo explicable permite entender por qué llegó a una decisión o predicción determinada' },
    ],
    correctAnswers: ['D'],
    explanation:
      'Un modelo explicable permite entender el razonamiento detrás de sus decisiones.',
  },
  {
    id: 344,
    certification: 'AIF-C01',
    domain: 'security-compliance-governance',
    topic: 'IAM y control de acceso',
    services: ['Bedrock', 'CloudTrail', 'IAM', 'KMS', 'S3'],
    difficulty: 'medium',
    type: 'single',
    question:
      'Una fintech despliega un asistente sobre un modelo base (foundation model, FM) de Amazon Bedrock. El asistente debe leer contratos en un bucket de Amazon S3 cifrado con una clave administrada por el cliente en AWS Key Management Service (AWS KMS) (SSE-KMS). Las invocaciones a Bedrock fallan al recuperar objetos y CloudTrail muestra AccessDenied en kms:Decrypt para el rol de servicio. En el modelo de responsabilidad compartida (shared responsibility), ¿qué acción del cliente resuelve el fallo sin debilitar el cifrado?',
    answers: [
      { id: 'A', text: 'Usar ingeniería de prompts (prompt engineering) para indicar al modelo la ruta del objeto en Amazon S3' },
      { id: 'B', text: 'Eliminar datos sensibles del bucket y volver a intentar la invocación' },
      { id: 'C', text: 'Actualizar la política de IAM del rol que asume Amazon Bedrock y la key policy de KMS para permitir kms:Decrypt (y s3:GetObject) sobre esa clave y ese prefijo' },
      { id: 'D', text: 'Cambiar el bucket a acceso público y desactivar SSE-KMS para simplificar la lectura' },
    ],
    correctAnswers: ['C'],
    explanation:
      'Con SSE-KMS, leer el objeto exige permisos de S3 y autorización para descifrar con la clave de KMS. AWS opera Bedrock, pero el cliente configura IAM y key policies: el rol de servicio de Bedrock debe poder hacer s3:GetObject y kms:Decrypt. Prompt engineering, borrar datos o exponer el bucket no corrigen el AccessDenied de KMS.',
  },
  {
    id: 345,
    certification: 'AIF-C01',
    domain: 'security-compliance-governance',
    topic: 'IAM y control de acceso',
    services: ['Bedrock', 'CloudWatch', 'IAM', 'Audit Manager'],
    difficulty: 'medium',
    type: 'single',
    question:
      'Un equipo de seguridad debe permitir que solo unas pocas aplicaciones invoquen modelos de lenguaje grande (large language models, LLM) en Amazon Bedrock en la cuenta de producción. ¿Qué control aplica privilegio mínimo (least privilege) de forma directa?',
    answers: [
      { id: 'A', text: 'Configurar roles y políticas de IAM con privilegio mínimo (least privilege) que limiten bedrock:InvokeModel y acciones relacionadas a identidades autorizadas' },
      { id: 'B', text: 'Habilitar AWS Audit Manager para lanzar evaluaciones automáticas de calidad del modelo' },
      { id: 'C', text: 'Activar solo los trabajos automáticos de evaluación de modelos de Amazon Bedrock' },
      { id: 'D', text: 'Enviar todos los prompts a Amazon CloudWatch Logs para explicar el modelo y detectar sesgo (bias)' },
    ],
    correctAnswers: ['A'],
    explanation:
      'El acceso seguro a Bedrock empieza en IAM: roles y políticas de privilegio mínimo restringen quién puede invocar qué modelos y acciones. Audit Manager y las evaluaciones de modelos ayudan a cumplimiento o calidad, pero no sustituyen el control de acceso. CloudWatch Logs sirve para observabilidad, no para autorizar invocaciones.',
  },
  {
    id: 346,
    certification: 'AIF-C01',
    domain: 'security-compliance-governance',
    topic: 'Seguridad, cumplimiento y gobernanza',
    services: ['SageMaker'],
    difficulty: 'hard',
    type: 'multiple',
    question:
      'Un chatbot construido sobre un modelo de Amazon SageMaker JumpStart ajustado debe cumplir varios marcos regulatorios. ¿Cuáles dos capacidades ayudan a la empresa a demostrar cumplimiento?',
    answers: [
      { id: 'A', text: 'Optimización de costos' },
      { id: 'B', text: 'Protección de datos' },
      { id: 'C', text: 'Auto escalado elástico' },
      { id: 'D', text: 'Detección de amenazas' },
    ],
    correctAnswers: ['B', 'D'],
    explanation:
      'La protección de datos (salvaguardar información sensible) y la detección de amenazas (identificar riesgos de seguridad) son controles que los reguladores esperan, por lo que apoyan directamente la demostración de cumplimiento.',
  },
  {
    id: 347,
    certification: 'AIF-C01',
    domain: 'security-compliance-governance',
    topic: 'IAM y control de acceso',
    services: ['Bedrock', 'IAM', 'S3'],
    difficulty: 'medium',
    type: 'single',
    question:
      'Una aseguradora construye una aplicación LLM sobre Amazon Bedrock que lee pólizas en Amazon S3. La política interna exige que el equipo de autos solo vea datos de clientes de autos y el de hogar solo los de hogar. ¿Qué diseño de IAM cumple el aislamiento?',
    answers: [
      { id: 'A', text: 'Un único rol de servicio de Bedrock con acceso completo a S3, más roles de usuario limitados a carpetas (los equipos aún comparten el rol amplio de Bedrock)' },
      { id: 'B', text: 'Un rol de servicio personalizado de Amazon Bedrock por equipo, con políticas que conceden acceso solo al prefijo S3 de sus clientes' },
      { id: 'C', text: 'Un rol compartido con acceso total a S3 y depender de que cada prompt mencione el segmento de cliente correcto' },
      { id: 'D', text: 'Redactar PII en S3 y abrir el bucket a todos los equipos por igual' },
    ],
    correctAnswers: ['B'],
    explanation:
      'Bedrock asume el rol de servicio al acceder a S3; si ese rol es compartido y amplio, cualquier equipo puede alcanzar datos ajenos. Roles de servicio por equipo con privilegio mínimo sobre prefijos distintos aplican el aislamiento en IAM. Confiar en el texto del prompt o en redacción + acceso abierto no aplica segregación de datos.',
  },
  {
    id: 348,
    certification: 'AIF-C01',
    domain: 'security-compliance-governance',
    topic: 'Aislamiento y seguridad de red',
    services: ['SageMaker', 'Macie', 'Inspector', 'S3', 'VPC'],
    difficulty: 'easy',
    type: 'single',
    question:
      'Científicos de datos entrenan en notebooks de Amazon SageMaker Studio con datasets en Amazon S3. Compliance exige que el tráfico entre notebooks y S3 no salga a internet público. ¿Qué solución controla esa ruta de datos?',
    answers: [
      { id: 'A', text: 'Usar Amazon Macie para clasificar PII en el bucket (no controla la ruta de red)' },
      { id: 'B', text: 'Ejecutar SageMaker en una VPC con un endpoint de VPC (gateway/interface) hacia Amazon S3' },
      { id: 'C', text: 'Usar Amazon Inspector para escanear vulnerabilidades del notebook (no aísla el tráfico a S3)' },
      { id: 'D', text: 'Mover los datasets a S3 Glacier Deep Archive para "aislarlos" del entrenamiento' },
    ],
    correctAnswers: ['B'],
    explanation:
      'Una VPC con endpoint hacia S3 mantiene el flujo notebook↔S3 en la red privada de AWS. Macie descubre datos sensibles; Inspector evalúa vulnerabilidades de software; Glacier cambia la clase de almacenamiento. Ninguno de esos tres sustituye el control de conectividad.',
  },
  {
    id: 349,
    certification: 'AIF-C01',
    domain: 'security-compliance-governance',
    topic: 'IAM y control de acceso',
    services: ['SageMaker', 'IAM'],
    difficulty: 'medium',
    type: 'single',
    question:
      'Un laboratorio farmacéutico debe entrenar e inferir con Amazon SageMaker en un entorno sin salida a internet, según su auditoría. ¿Qué configuración cumple el aislamiento de red (network isolation)?',
    answers: [
      { id: 'A', text: 'Asociar roles de IAM correctos a los jobs (autoriza AWS APIs, no elimina internet por sí solo)' },
      { id: 'B', text: 'Cifrar datos en reposo con opciones geoespaciales de SageMaker' },
      { id: 'C', text: 'Ejecutar los jobs de entrenamiento e inferencia de SageMaker con aislamiento de red (network isolation) habilitado' },
      { id: 'D', text: 'Registrar experimentos solo con SageMaker Experiments' },
    ],
    correctAnswers: ['C'],
    explanation:
      'El aislamiento de red en jobs de SageMaker bloquea el acceso a internet desde esos contenedores, alineado con entornos regulados. IAM controla permisos; el cifrado protege confidencialidad en reposo; Experiments gestiona seguimiento de experimentos. Ninguno reemplaza network isolation.',
  },
  {
    id: 350,
    certification: 'AIF-C01',
    domain: 'security-compliance-governance',
    topic: 'Cifrado de datos',
    services: ['Bedrock', 'Macie', 'Inspector', 'KMS', 'Secrets Manager'],
    difficulty: 'easy',
    type: 'single',
    question:
      'Tras personalizar un modelo en Amazon Bedrock, una empresa regulada exige que los artefactos del trabajo de personalización queden cifrados con una clave que ella cree, rote y audite (no solo claves administradas por AWS). ¿Qué servicio cumple ese control de cifrado del cliente en el modelo de responsabilidad compartida?',
    answers: [
      { id: 'A', text: 'Amazon Macie (descubrimiento de datos sensibles, no custodia de claves de cifrado de artefactos)' },
      { id: 'B', text: 'AWS Secrets Manager (secretos de aplicación, no el servicio principal para CMK de artefactos de modelo)' },
      { id: 'C', text: 'AWS Key Management Service (AWS KMS) con una clave administrada por el cliente (customer managed key, CMK)' },
      { id: 'D', text: 'Amazon Inspector (evaluación de vulnerabilidades de software)' },
    ],
    correctAnswers: ['C'],
    explanation:
      'AWS KMS permite crear y controlar CMK para cifrar artefactos de personalización en Bedrock; el cliente gestiona políticas, rotación y auditoría de uso de la clave. Macie clasifica datos, Secrets Manager guarda secretos, Inspector escanea vulnerabilidades: no sustituyen el control de claves de cifrado de artefactos.',
  },
  {
    id: 351,
    certification: 'AIF-C01',
    domain: 'security-compliance-governance',
    topic: 'Auditoría con AWS CloudTrail',
    services: ['Bedrock', 'CloudTrail', 'CloudWatch', 'S3', 'Audit Manager'],
    difficulty: 'hard',
    type: 'multiple',
    question:
      'Una empresa debe registrar cada llamada a su API de Amazon Bedrock y conservar esos registros de forma segura durante cinco años con el menor costo posible. ¿Qué dos opciones (un servicio de AWS y una clase de almacenamiento de S3) debe combinar?',
    answers: [
      { id: 'A', text: 'Amazon CloudWatch' },
      { id: 'B', text: 'AWS CloudTrail' },
      { id: 'C', text: 'Amazon S3 Intelligent-Tiering' },
      { id: 'D', text: 'AWS Audit Manager' },
    ],
    correctAnswers: ['B', 'C'],
    explanation:
      'AWS CloudTrail registra solicitudes de API a servicios de AWS, incluido Amazon Bedrock, y Amazon S3 Intelligent-Tiering mueve automáticamente los logs entre niveles de acceso para mantener bajo el costo de retención a largo plazo.',
  },
  {
    id: 352,
    certification: 'AIF-C01',
    domain: 'security-compliance-governance',
    topic: 'Gobernanza de datos',
    services: [],
    difficulty: 'easy',
    type: 'single',
    question:
      'Un hospital en la UE entrena un asistente de diagnóstico con historias clínicas e imágenes. La ley exige que los datos personales de pacientes se almacenen y procesen solo dentro del país (o jurisdicción) designada. ¿Qué estrategia de gobernanza de datos aborda ese requisito?',
    answers: [
      { id: 'A', text: 'Calidad de datos (data quality)' },
      { id: 'B', text: 'Enriquecimiento de datos (data enrichment)' },
      { id: 'C', text: 'Residencia de datos (data residency)' },
      { id: 'D', text: 'Descubribilidad de datos (data discoverability)' },
    ],
    correctAnswers: ['C'],
    explanation:
      'La residencia de datos (data residency) obliga a guardar y procesar la información en ubicaciones geográficas concretas (por ejemplo, una Región de AWS específica). Calidad, enriquecimiento y descubribilidad mejoran utilidad o catálogo, pero no garantizan el límite jurisdiccional.',
  },
  {
    id: 353,
    certification: 'AIF-C01',
    domain: 'security-compliance-governance',
    topic: 'Seguridad, cumplimiento y gobernanza',
    services: [],
    difficulty: 'medium',
    type: 'single',
    question:
      'Varios hospitales quieren mejorar un modelo compartido en AWS sin centralizar historias clínicas crudas en un único data lake. ¿Qué técnica de ML ayuda a preservar privacidad y cumplimiento al entrenar?',
    answers: [
      { id: 'A', text: 'Transfer learning (transfer learning)' },
      { id: 'B', text: 'Aprendizaje no supervisado (unsupervised learning)' },
      { id: 'C', text: 'Aprendizaje federado (federated learning)' },
      { id: 'D', text: 'Aprendizaje por refuerzo (reinforcement learning)' },
    ],
    correctAnswers: ['C'],
    explanation:
      'El aprendizaje federado (federated learning) agrega actualizaciones de modelo desde nodos locales sin mover los datasets crudos a un único repositorio, lo que reduce exposición de PHI. Transfer learning, unsupervised y reinforcement learning no resuelven por sí solos la no centralización de datos sensibles.',
  },
  {
    id: 354,
    certification: 'AIF-C01',
    domain: 'security-compliance-governance',
    topic: 'Aislamiento y seguridad de red',
    services: ['Bedrock', 'PrivateLink', 'VPC', 'Outposts'],
    difficulty: 'medium',
    type: 'multiple',
    question:
      'Un hospital quiere ajustar un modelo base (FM) con servicios de AWS manteniendo sus datos privados y dentro de la Región de AWS donde se almacenan. ¿Cuáles dos pasos logran esto de forma MÁS rentable?',
    answers: [
      { id: 'A', text: 'Alojar el modelo on-premises con AWS Outposts' },
      { id: 'B', text: 'Usar AWS PrivateLink con una VPC' },
      { id: 'C', text: 'Alojar la API de Amazon Bedrock on-premises' },
      { id: 'D', text: 'Usar la API de Amazon Bedrock' },
    ],
    correctAnswers: ['B', 'D'],
    explanation:
      'Invocar la API de Amazon Bedrock mantiene el ajuste fino dentro del servicio administrado en la misma Región de AWS, y enrutar ese tráfico por una VPC con AWS PrivateLink lo mantiene en la red privada de AWS, cumpliendo privacidad sin infraestructura adicional.',
  },
  {
    id: 355,
    certification: 'AIF-C01',
    domain: 'security-compliance-governance',
    topic: 'Seguridad de aplicaciones GenAI',
    services: ['Bedrock'],
    difficulty: 'medium',
    type: 'single',
    question:
      'Antes de lanzar un chatbot de pedidos 24/7 sobre Amazon Bedrock, el equipo de AppSec revisa riesgos de entrada del usuario. ¿Qué vulnerabilidad de entrada debe mitigarse para que un cliente no anule las instrucciones del sistema?',
    answers: [
      { id: 'A', text: 'Filtración de datos (data leakage)' },
      { id: 'B', text: 'Inyección de prompts (prompt injection)' },
      { id: 'C', text: 'Alucinaciones del modelo de lenguaje grande (LLM hallucinations)' },
      { id: 'D', text: 'Deriva de concepto (concept drift)' },
    ],
    correctAnswers: ['B'],
    explanation:
      'La inyección de prompts (prompt injection) manipula o sobrescribe instrucciones del sistema mediante entradas maliciosas; es un riesgo de entrada típico en chatbots. Data leakage y alucinaciones son riesgos distintos; concept drift describe cambios de distribución en el tiempo, no un ataque de entrada en el lanzamiento.',
  },
  {
    id: 356,
    certification: 'AIF-C01',
    domain: 'security-compliance-governance',
    topic: 'Cifrado de datos',
    services: ['Bedrock', 'S3'],
    difficulty: 'medium',
    type: 'single',
    question:
      'Un banco va a ajustar (fine-tune) un LLM en Amazon Bedrock con historiales de consultas de préstamos. Compliance exige que el modelo no pueda memorizar ni regenerar datos privados de clientes. ¿Qué control es el más eficaz antes del ajuste?',
    answers: [
      { id: 'A', text: 'Subir el parámetro Top K de muestreo' },
      { id: 'B', text: 'Depender solo de Amazon Bedrock Guardrails tras el despliegue' },
      { id: 'C', text: 'Eliminar o anonimizar información de identificación personal (personally identifiable information, PII) del corpus antes del fine-tuning' },
      { id: 'D', text: 'Cifrar el corpus en Amazon S3 (protege en reposo, pero el modelo aún puede aprender PII si se incluye en el entrenamiento)' },
    ],
    correctAnswers: ['C'],
    explanation:
      'Si el PII nunca entra al dataset de fine-tuning, el modelo no puede memorizarlo. Guardrails mitigan salidas en inferencia pero no borran lo ya aprendido; el cifrado en S3 y Top K no eliminan PII del entrenamiento. Lo habitual es combinar minimización de datos con controles en runtime, pero la pregunta apunta a impedir la ingestión.',
  },
  {
    id: 357,
    certification: 'AIF-C01',
    domain: 'security-compliance-governance',
    topic: 'IAM y control de acceso',
    services: ['Bedrock', 'IAM'],
    difficulty: 'easy',
    type: 'single',
    question:
      'Una firma legal analiza contratos confidenciales con un modelo de terceros alojado en Amazon Bedrock. El CISO pregunta, en términos de responsabilidad compartida y privacidad del servicio, qué ocurre con prompts y salidas respecto al proveedor del modelo. ¿Qué afirmación es correcta?',
    answers: [
      { id: 'A', text: 'Las entradas son privadas, pero las salidas se comparten con el proveedor del modelo de terceros' },
      { id: 'B', text: 'Entradas y salidas se anonimizan y luego se envían al proveedor del modelo de terceros' },
      { id: 'C', text: 'Las entradas del usuario y las salidas del modelo no se comparten con los proveedores de modelos de terceros' },
      { id: 'D', text: 'Entradas y salidas se redactan automáticamente y se reenvían al proveedor del modelo de terceros' },
    ],
    correctAnswers: ['C'],
    explanation:
      'En Amazon Bedrock, las invocaciones a modelos de terceros se procesan en el entorno de AWS: prompts y completions no se entregan a esos proveedores para entrenar o mejorar sus modelos. El cliente sigue siendo responsable de clasificar datos, cifrado, IAM y retención de logs; AWS opera el aislamiento del servicio.',
  },
  {
    id: 358,
    certification: 'AIF-C01',
    domain: 'security-compliance-governance',
    topic: 'Seguridad en Amazon Bedrock',
    services: ['Bedrock', 'Inspector', 'Config', 'Audit Manager'],
    difficulty: 'medium',
    type: 'single',
    question:
      'Un banco necesita que su chatbot sobre Amazon Bedrock reduzca respuestas inventadas (alucinaciones) frente a políticas internas. ¿Qué control evalúa entradas y salidas del modelo para anclar respuestas factuales?',
    answers: [
      { id: 'A', text: 'AWS Config (inventario y conformidad de configuración de recursos, no grounding de LLM)' },
      { id: 'B', text: 'AWS Audit Manager (evidencia de auditorías de cumplimiento de TI)' },
      { id: 'C', text: 'Amazon Bedrock Guardrails con políticas que evalúan prompts y respuestas (p. ej. contextual grounding)' },
      { id: 'D', text: 'Amazon Inspector (escaneo de vulnerabilidades de software en cargas de trabajo)' },
    ],
    correctAnswers: ['C'],
    explanation:
      'Bedrock Guardrails aplica filtros y comprobaciones sobre entradas/salidas del modelo, incluida anclaje contextual, para limitar alucinaciones. Config, Audit Manager e Inspector cubren postura de cuenta, evidencia de auditoría y vulnerabilidades de software, no el filtrado semántico del chatbot.',
  },
  {
    id: 359,
    certification: 'AIF-C01',
    domain: 'security-compliance-governance',
    topic: 'Cifrado de datos',
    services: [],
    difficulty: 'medium',
    type: 'single',
    question:
      'Una empresa quiere que su programa de IA sea más justo (fair) y explicable, y decide invertir en formación del equipo de desarrollo. ¿Qué capacitación alinea mejor con gobernanza de IA responsable?',
    answers: [
      { id: 'A', text: 'Solo habilidades avanzadas de programación' },
      { id: 'B', text: 'Solo privacidad de datos y protocolos de cifrado' },
      { id: 'C', text: 'Conciencia de sesgo (bias awareness) e IA responsable (responsible AI)' },
      { id: 'D', text: 'Solo algoritmos avanzados de machine learning' },
    ],
    correctAnswers: ['C'],
    explanation:
      'La formación en sesgo e IA responsable enseña a diseñar, evaluar y documentar sistemas justos y explicables. Programación, cifrado o algoritmos avanzados son útiles, pero no cubren por sí solos fairness y explicabilidad como objetivo de gobernanza.',
  },
  {
    id: 360,
    certification: 'AIF-C01',
    domain: 'security-compliance-governance',
    topic: 'Aislamiento y seguridad de red',
    services: ['Bedrock', 'PrivateLink', 'VPC', 'Glue', 'Lake Formation'],
    difficulty: 'easy',
    type: 'single',
    question:
      'Una empresa debe invocar las APIs de Amazon Bedrock desde su VPC sin atravesar internet público. ¿Qué patrón de red cumple el requisito?',
    answers: [
      { id: 'A', text: 'AWS Glue Data Catalog con cifrado (catalogación, no conectividad privada a Bedrock)' },
      { id: 'B', text: 'AWS PrivateLink (interface VPC endpoint) hacia Amazon Bedrock' },
      { id: 'C', text: 'Amazon CloudFront restringiendo contenido privado (CDN, no endpoint privado de Bedrock)' },
      { id: 'D', text: 'AWS Lake Formation para gobernanza entre cuentas (permisos de data lake, no PrivateLink a Bedrock)' },
    ],
    correctAnswers: ['B'],
    explanation:
      'AWS PrivateLink expone Bedrock mediante un endpoint de interfaz en la VPC, de modo que el tráfico permanece en la red de AWS. Glue, CloudFront y Lake Formation resuelven catálogo, distribución o gobernanza de lagos de datos, no la ruta privada a la API de Bedrock.',
  },
  {
    id: 361,
    certification: 'AIF-C01',
    domain: 'security-compliance-governance',
    topic: 'Seguridad de aplicaciones GenAI',
    services: ['Bedrock'],
    difficulty: 'medium',
    type: 'single',
    question:
      'Un chatbot de IA generativa sobre un modelo base (FM) de Amazon Bedrock es vulnerable a inyección de prompts. ¿Cómo puede la empresa asegurarlo con el MENOR esfuerzo?',
    answers: [
      { id: 'A', text: 'Ajustar el FM para evitar respuestas dañinas' },
      { id: 'B', text: 'Aplicar filtros de contenido y temas denegados de Amazon Bedrock Guardrails' },
      { id: 'C', text: 'Cambiar a un modelo base diferente' },
      { id: 'D', text: 'Agregar más ejemplos few-shot al prompt' },
    ],
    correctAnswers: ['B'],
    explanation:
      'Los filtros de contenido y temas denegados de Amazon Bedrock Guardrails se configuran sin reentrenar para bloquear prompts y respuestas inseguros, mitigando inyección de prompts con el menor esfuerzo.',
  },
  {
    id: 362,
    certification: 'AIF-C01',
    domain: 'security-compliance-governance',
    topic: 'Seguridad, cumplimiento y gobernanza',
    services: [],
    difficulty: 'hard',
    type: 'single',
    question:
      'Tras una auditoría externa, una empresa obtiene acreditación ISO sobre su forma de gestionar riesgos de IA y usar IA de manera responsable. Los auditores internos preguntan qué demuestra exactamente esa acreditación. ¿Qué interpretación es correcta?',
    answers: [
      { id: 'A', text: 'Que cada empleado de la empresa está certificado personalmente por ISO' },
      { id: 'B', text: 'Que cada sistema de IA en producción tiene un certificado ISO individual' },
      { id: 'C', text: 'Que solo el equipo de aplicaciones de IA tiene credenciales ISO personales' },
      { id: 'D', text: 'Que el marco (framework) de desarrollo, procesos y controles de la empresa está certificado respecto al estándar ISO aplicable' },
    ],
    correctAnswers: ['D'],
    explanation:
      'La acreditación ISO valida el sistema de gestión / marco organizacional (procesos, controles, mejora continua), no certifica automáticamente a cada persona ni a cada modelo desplegado. Para evidencias de informes AWS (p. ej. Artifact) y controles de cuenta se usan otros mecanismos; aquí el foco es el alcance de la certificación del programa de IA.',
  },
  {
    id: 363,
    certification: 'AIF-C01',
    domain: 'security-compliance-governance',
    topic: 'Gobernanza de datos',
    services: [],
    difficulty: 'medium',
    type: 'single',
    question:
      'El comité de datos define reglas sobre cuánto tiempo se conservan logs de prompts, datasets de entrenamiento y cuándo deben borrarse. ¿Qué estrategia de gobernanza describe esas reglas?',
    answers: [
      { id: 'A', text: 'Estándares de calidad de datos (data quality standards)' },
      { id: 'B', text: 'Retención de datos (data retention)' },
      { id: 'C', text: 'Almacenamiento de logs (log storage) como concepto aislado sin política de borrado' },
      { id: 'D', text: 'Desidentificación de datos (data de-identification)' },
    ],
    correctAnswers: ['B'],
    explanation:
      'La retención de datos (data retention) fija plazos de conservación y eliminación. Calidad y desidentificación son controles distintos; "almacenar logs" describe un medio técnico, no la política de cuándo borrar.',
  },
  {
    id: 364,
    certification: 'AIF-C01',
    domain: 'security-compliance-governance',
    topic: 'IAM y control de acceso',
    services: ['Bedrock', 'Macie', 'CloudTrail', 'AgentCore', 'Secrets Manager'],
    difficulty: 'medium',
    type: 'single',
    question:
      'Agentes de Amazon Bedrock deben llamar a CRMs y APIs internas en nombre de usuarios distintos. Seguridad exige identidad por agente (sin un único secreto compartido). ¿Qué capacidad encaja con ese requisito de autenticación de agentes?',
    answers: [
      { id: 'A', text: 'AWS Secrets Manager con una sola credencial compartida por todos los agentes' },
      { id: 'B', text: 'Amazon Bedrock AgentCore Identity para identidades distintas por agente' },
      { id: 'C', text: 'Amazon Macie para clasificar PII en el CRM' },
      { id: 'D', text: 'AWS CloudTrail para registrar llamadas (auditoría, no identidad del agente)' },
    ],
    correctAnswers: ['B'],
    explanation:
      'AgentCore Identity permite que cada agente se autentique con su propia identidad al acceder a backends, alineado con privilegio mínimo. Secrets Manager puede guardar secretos pero un secreto compartido viola el requisito; Macie y CloudTrail no emiten identidades de agente.',
  },
  {
    id: 365,
    certification: 'AIF-C01',
    domain: 'security-compliance-governance',
    topic: 'Gobernanza de datos',
    services: [],
    difficulty: 'easy',
    type: 'single',
    question:
      'Una institución financiera entrena modelos de ML con datos de múltiples sistemas internos. Los reguladores exigen rastrear cada dato de entrenamiento hasta su fuente original y demostrar que fue recopilado y procesado conforme a la política. ¿Qué práctica cumple este requisito?',
    answers: [
      { id: 'A', text: 'Aumento de datos (data augmentation)' },
      { id: 'B', text: 'Seguimiento de linaje de datos (data lineage tracking)' },
      { id: 'C', text: 'Normalización de datos (data normalization)' },
      { id: 'D', text: 'Balanceo de datos (data balancing)' },
    ],
    correctAnswers: ['B'],
    explanation:
      'El seguimiento de linaje de datos (data lineage tracking) documenta el origen, movimiento y transformación de los datos a lo largo de su ciclo de vida, permitiendo rastrear cada dato de entrenamiento hasta su fuente y demostrar manejo conforme a la política.',
  },
  {
    id: 366,
    certification: 'AIF-C01',
    domain: 'security-compliance-governance',
    topic: 'Seguridad, cumplimiento y gobernanza',
    services: [],
    difficulty: 'medium',
    type: 'single',
    question:
      'Una empresa que entrena modelos con datos de clientes debe definir cuándo los datasets pasan de activo a archivo y cuándo se eliminan por política. ¿Qué estrategia de gobernanza cubre creación, archivo y eliminación a lo largo del tiempo?',
    answers: [
      { id: 'A', text: 'Residencia de datos (data residency)' },
      { id: 'B', text: 'Gestión del ciclo de vida de datos (data lifecycle management)' },
      { id: 'C', text: 'Registro de datos (data logging)' },
      { id: 'D', text: 'Monitoreo de datos (data monitoring)' },
    ],
    correctAnswers: ['B'],
    explanation:
      'La gestión del ciclo de vida (data lifecycle management) define transiciones de estado: uso activo, archivo y borrado. Residencia fija ubicación geográfica; logging y monitoreo observan acceso o eventos, no el calendario completo de ciclo de vida.',
  },
  {
    id: 367,
    certification: 'AIF-C01',
    domain: 'security-compliance-governance',
    topic: 'Gobernanza de datos',
    services: [],
    difficulty: 'medium',
    type: 'single',
    question:
      'Gobernanza de datos quiere vigilar de forma continua quién accede a datasets de entrenamiento de IA y detectar patrones anómalos o no autorizados en toda la organización. ¿Qué estrategia describe esa necesidad?',
    answers: [
      { id: 'A', text: 'Retención de datos (data retention)' },
      { id: 'B', text: 'Residencia de datos (data residency)' },
      { id: 'C', text: 'Observación y monitoreo de datos (data observation and monitoring)' },
      { id: 'D', text: 'Registro de datos (data logging) como único control sin análisis continuo' },
    ],
    correctAnswers: ['C'],
    explanation:
      'La observación y el monitoreo de datos implican vigilancia continua del uso y acceso para hallar anomalías. Retención y residencia son políticas distintas; el logging aporta eventos, pero la estrategia nombrada es el monitoreo continuo del uso.',
  },
  {
    id: 368,
    certification: 'AIF-C01',
    domain: 'security-compliance-governance',
    topic: 'Auditoría con AWS CloudTrail',
    services: ['Bedrock', 'Macie', 'Inspector', 'Config', 'Artifact'],
    difficulty: 'easy',
    type: 'single',
    question:
      'Tras un incidente, auditoría exige reconstruir quién leyó un dataset de entrenamiento en Amazon S3 usado por un pipeline de Amazon Bedrock: identidad, API, hora y recurso. ¿Qué servicio aporta esa pista de auditoría de llamadas API / data events?',
    answers: [
      { id: 'A', text: 'AWS Config (historial de configuración de recursos, no el registro primario de quién invocó GetObject)' },
      { id: 'B', text: 'AWS CloudTrail (management y data events hacia S3/Bedrock para reconstruir el acceso)' },
      { id: 'C', text: 'AWS Artifact (descarga de reportes de cumplimiento de AWS, no logs de acceso de tu cuenta)' },
      { id: 'D', text: 'Amazon Inspector (vulnerabilidades de software, no timeline de acceso a objetos)' },
    ],
    correctAnswers: ['B'],
    explanation:
      'CloudTrail registra eventos de API (y data events de S3 si están habilitados), permitiendo reconstruir actor, acción, tiempo y recurso. Config muestra drift de configuración; Artifact entrega informes de AWS; Inspector evalúa CVE. Macie ayudaría a clasificar PII, pero no sustituye el log de acceso para forense de API.',
  },
  {
    id: 369,
    certification: 'AIF-C01',
    domain: 'security-compliance-governance',
    topic: 'Gobernanza de datos',
    services: [],
    difficulty: 'easy',
    type: 'single',
    question:
      'Un regulador bancario pide demostrar, para cada fila usada en entrenamiento, de qué sistema de origen salió, qué transformaciones sufrió y en qué job de ML se consumió. ¿Qué práctica de gobernanza permite esa reconstrucción de auditoría?',
    answers: [
      { id: 'A', text: 'Aumento de datos (data augmentation)' },
      { id: 'B', text: 'Seguimiento de linaje de datos (data lineage tracking)' },
      { id: 'C', text: 'Normalización de datos (data normalization)' },
      { id: 'D', text: 'Balanceo de datos (data balancing)' },
    ],
    correctAnswers: ['B'],
    explanation:
      'El linaje de datos (data lineage) documenta origen, movimientos y transformaciones hasta el consumo en entrenamiento, base para auditorías regulatorias. Augmentation, normalización y balancing son técnicas de preparación de datos, no de trazabilidad forense.',
  },
  {
    id: 370,
    certification: 'AIF-C01',
    domain: 'security-compliance-governance',
    topic: 'IAM y control de acceso',
    services: ['Bedrock', 'Macie', 'CloudTrail', 'IAM', 'KMS'],
    difficulty: 'medium',
    type: 'single',
    question:
      'Seguridad establece un ciclo de gobernanza para un dataset de entrenamiento en AWS antes de exponerlo a Amazon Bedrock. Deben poder producir evidencia ante auditores. ¿Qué orden de etapas es el correcto de principio a fin?',
    answers: [
      { id: 'A', text: '1) Descubrir y clasificar (p. ej. con ayuda de Amazon Macie) → 2) Cifrar en reposo/tránsito (p. ej. KMS) → 3) Restringir acceso con IAM de privilegio mínimo → 4) Monitorear y registrar acceso (p. ej. CloudTrail) → 5) Auditar evidencia frente a controles de cumplimiento' },
      { id: 'B', text: '1) Cifrar → 2) Restringir con IAM → 3) Monitorear → 4) Auditar → 5) Descubrir y clasificar al final' },
      { id: 'C', text: '1) Auditar → 2) Monitorear → 3) Restringir IAM → 4) Cifrar → 5) Descubrir y clasificar' },
      { id: 'D', text: '1) Cifrar → 2) Descubrir y clasificar → 3) Restringir IAM → 4) Monitorear → 5) Auditar' },
    ],
    correctAnswers: ['A'],
    explanation:
      'Primero se clasifica para saber qué proteger; luego cifrado, IAM, monitoreo/registro y, al cierre, auditoría de evidencia. Cifrar o auditar antes de clasificar deja controles mal priorizados; el orden A refleja dependencia real entre etapas del ciclo de gobernanza.',
  },
  {
    id: 371,
    certification: 'AIF-C01',
    domain: 'security-compliance-governance',
    topic: 'IAM y control de acceso',
    services: ['Bedrock', 'Rekognition', 'Macie', 'Config', 'IAM'],
    difficulty: 'easy',
    type: 'single',
    question:
      'Una empresa está desarrollando una solución en AWS que utiliza Amazon Bedrock. ¿Qué servicio de AWS puede utilizar la empresa para proteger el acceso a Amazon Bedrock?',
    answers: [
      { id: 'A', text: 'Amazon Rekognition' },
      { id: 'B', text: 'AWS Identity and Access Management (AWS IAM)' },
      { id: 'C', text: 'AWS Config' },
      { id: 'D', text: 'Amazon Macie' },
    ],
    correctAnswers: ['B'],
    explanation:
      'IAM controla el acceso a recursos de AWS con usuarios, roles y políticas: quién puede llamar a Amazon Bedrock y qué acciones puede realizar. Rekognition es visión, Config es conformidad de configuración y Macie detecta datos sensibles enS3.',
  },
  {
    id: 372,
    certification: 'AIF-C01',
    domain: 'security-compliance-governance',
    topic: 'Auditoría con AWS CloudTrail',
    services: ['Bedrock', 'Inspector', 'CloudTrail', 'CloudWatch', 'Trusted Advisor'],
    difficulty: 'easy',
    type: 'single',
    question:
      'Una empresa quiere registrar las llamadas a la API que se realizan a Amazon Bedrock en archivos de registro. Por motivos de cumplimiento, la empresa quiere que estos registros incluyan la llamada a la API, el usuario que realizó la llamada y la hora en que se realizó la llamada. ¿Qué servicio de AWS puede cumplir estos requisitos?',
    answers: [
      { id: 'A', text: 'AWS Trusted Advisor' },
      { id: 'B', text: 'AWS CloudTrail' },
      { id: 'C', text: 'Amazon CloudWatch' },
      { id: 'D', text: 'Amazon Inspector' },
    ],
    correctAnswers: ['B'],
    explanation:
      'CloudTrail registra llamadas a la API en la cuenta, incluyendo el evento, el identidad del llamador y la marca de tiempo. CloudWatch es métricas/logs operativos, Trusted Advisor da recomendaciones y Inspector analiza vulnerabilidades.',
  },
  {
    id: 373,
    certification: 'AIF-C01',
    domain: 'security-compliance-governance',
    topic: 'Auditoría con AWS CloudTrail',
    services: ['Inspector', 'Config', 'Artifact', 'CloudTrail', 'EC2'],
    difficulty: 'medium',
    type: 'single',
    question:
      'Una empresa tiene una aplicación frontend en contenedores para su aplicación de IA. La empresa debe implementar una solución para evaluar la posición de seguridad de su entorno de AWS. La solución debe identificar las posibles vulnerabilidades de seguridad en las instancias de Amazon EC2 y los repositorios de Amazon Elastic Container Registry (Amazon ECR) para la aplicación. La solución debe proporcionar recomendaciones para la corrección. ¿Qué servicio de AWS puede cumplir estos requisitos?',
    answers: [
      { id: 'A', text: 'AWS Artifact' },
      { id: 'B', text: 'AWS CloudTrail' },
      { id: 'C', text: 'AWS Config' },
      { id: 'D', text: 'Amazon Inspector' },
    ],
    correctAnswers: ['D'],
    explanation:
      'Amazon Inspector analiza continuamente cargas de trabajo en busca de vulnerabilidades de software y exposición de red, incluyendo instancias EC2 e imágenes en ECR, con hallazgos y recomendaciones de remediación. Artifact ofrece reportes de cumplimiento, CloudTrail audita API y Config evalúa configuración, no el escaneo de vulnerabilidades de ECR/EC2 descrito.',
  },
  {
    id: 374,
    certification: 'AIF-C01',
    domain: 'security-compliance-governance',
    topic: 'Auditoría con AWS CloudTrail',
    services: ['Bedrock', 'CloudTrail', 'CloudWatch', 'S3', 'DynamoDB'],
    difficulty: 'medium',
    type: 'single',
    question:
      'Para cumplir los requisitos de cumplimiento normativo de una aplicación de IA generativa, una entidad financiera necesita registrar los prompts de entrada y las respuestas de salida de todas las invocaciones del modelo para poder auditarlos posteriormente. ¿Cuál es el método más adecuado?',
    answers: [
      { id: 'A', text: 'Construir un mecanismo de registro propio en la aplicación y guardar todas las solicitudes en DynamoDB.' },
      { id: 'B', text: 'Solicitar directamente a los proveedores de modelos (Anthropic, Meta, etc.) que proporcionen los registros de auditoría.' },
      { id: 'C', text: 'AWS CloudTrail por sí solo es suficiente y no se necesita ninguna configuración de registro adicional.' },
      { id: 'D', text: 'Registrar los registros de invocación del modelo de Amazon Bedrock en Amazon CloudWatch Logs o S3 y auditar el contenido de la entrada y la salida.' },
    ],
    correctAnswers: ['D'],
    explanation:
      'Amazon Bedrock proporciona registro de invocaciones del modelo que permite guardar el contenido de prompts y respuestas en CloudWatch Logs o S3, lo que posibilita la auditoría de cumplimiento. CloudTrail registra llamadas a la API, pero no sustituye por sí solo el registro del contenido de prompts/respuestas.',
  },
  {
    id: 375,
    certification: 'AIF-C01',
    domain: 'security-compliance-governance',
    topic: 'Seguridad en Amazon Bedrock',
    services: ['Bedrock', 'S3'],
    difficulty: 'easy',
    type: 'single',
    question:
      '¿Cuál es el enfoque de AWS más adecuado para proteger la información personal (PII) en una aplicación de IA generativa?',
    answers: [
      { id: 'A', text: 'Configurar en Bedrock Guardrails la detección y el enmascaramiento de PII para eliminar la información personal de las entradas y salidas del modelo' },
      { id: 'B', text: 'Programar por cuenta propia, en el lado de la aplicación, un proceso que elimine los nombres mediante expresiones regulares' },
      { id: 'C', text: 'Tener habilitado el cifrado del lado del servidor de S3 basta como medida de protección de la información personal en las entradas y salidas del modelo' },
      { id: 'D', text: 'Eliminar todos los datos que contengan PII antes de usar el modelo' },
    ],
    correctAnswers: ['A'],
    explanation:
      'Con el filtrado de PII de Bedrock Guardrails se puede detectar automáticamente la información personal en entradas y salidas del modelo y enmascararla o bloquearla.',
  },
  {
    id: 376,
    certification: 'AIF-C01',
    domain: 'security-compliance-governance',
    topic: 'Aislamiento y seguridad de red',
    services: ['IAM', 'PrivateLink', 'VPC'],
    difficulty: 'medium',
    type: 'single',
    question:
      'Al invocar una aplicación de IA generativa desde dentro de una VPC, desea que la comunicación no salga a internet y quede contenida dentro de la red de AWS. ¿Cuál es la configuración más adecuada?',
    answers: [
      { id: 'A', text: 'Invocarla a través de una puerta de enlace NAT' },
      { id: 'B', text: 'Crear un punto de enlace de VPC para el servicio de destino' },
      { id: 'C', text: 'Incrustar la clave de API en la aplicación' },
      { id: 'D', text: 'Restringir mediante una política de IAM la IP de origen de la invocación' },
    ],
    correctAnswers: ['B'],
    explanation:
      'Al crear un punto de enlace de VPC (PrivateLink), la comunicación desde la VPC hacia el servicio queda dentro de la red de AWS y no atraviesa internet.',
  },
  {
    id: 377,
    certification: 'AIF-C01',
    domain: 'security-compliance-governance',
    topic: 'Cifrado de datos',
    services: ['KMS', 'S3'],
    difficulty: 'medium',
    type: 'single',
    question:
      'Los datos que se utilizan para entrenar un modelo de ML se guardan en S3. Desea mantener bajo el control de la propia empresa la gestión de la clave con la que se cifran los datos almacenados, de modo que al deshabilitar la clave se pueda detener el acceso a los datos. ¿Cuál es la configuración más adecuada?',
    answers: [
      { id: 'A', text: 'Cifrar con una clave administrada por el cliente de AWS KMS' },
      { id: 'B', text: 'Habilitar el cifrado mediante claves administradas por S3' },
      { id: 'C', text: 'Limitar el acceso a determinadas direcciones IP mediante una política de bucket' },
      { id: 'D', text: 'Habilitar el control de versiones de los objetos' },
    ],
    correctAnswers: ['A'],
    explanation:
      'Con una clave administrada por el cliente (CMK) en KMS, la empresa controla política, rotación y deshabilitación. Al deshabilitar la clave, los datos cifrados dejan de poder descifrarse.',
  },
  {
    id: 378,
    certification: 'AIF-C01',
    domain: 'security-compliance-governance',
    topic: 'Seguridad en Amazon Bedrock',
    services: ['Bedrock', 'CloudWatch', 'IAM', 'WAF'],
    difficulty: 'easy',
    type: 'single',
    question:
      'Una empresa está construyendo una herramienta interna de IA generativa. Necesita evitar que los empleados puedan generar difamaciones contra la competencia, expresiones discriminatorias o contenido violento. ¿Cuál es la función más adecuada para cumplir este requisito?',
    answers: [
      { id: 'A', text: 'La monitorización de métricas mediante Amazon CloudWatch.' },
      { id: 'B', text: 'La limitación de la frecuencia de solicitudes mediante AWS WAF.' },
      { id: 'C', text: 'La gestión de permisos de acceso de los usuarios mediante AWS IAM.' },
      { id: 'D', text: 'El filtrado de contenido y la restricción de temas de Amazon Bedrock Guardrails.' },
    ],
    correctAnswers: ['D'],
    explanation:
      'Bedrock Guardrails filtra contenido dañino (violencia, discriminación, etc.) y permite restringir temas concretos como la difamación contra la competencia.',
  },
  {
    id: 379,
    certification: 'AIF-C01',
    domain: 'security-compliance-governance',
    topic: 'Seguridad en Amazon Bedrock',
    services: ['Bedrock'],
    difficulty: 'easy',
    type: 'single',
    question:
      '¿Cuál es la descripción correcta sobre la privacidad de los datos enviados a los modelos en Amazon Bedrock?',
    answers: [
      { id: 'A', text: 'AWS usa los datos enviados a Bedrock para mejorar los modelos' },
      { id: 'B', text: 'Los prompts y las respuestas enviados a Bedrock no se usan para el entrenamiento de modelos por parte de AWS, y los datos de cada cliente están aislados' },
      { id: 'C', text: 'Solo cuando se usa dentro de la capa gratuita, los prompts enviados se emplean en el aprendizaje para mejorar los modelos' },
      { id: 'D', text: 'Los datos del cliente usados en el ajuste fino se comparten con el proveedor del modelo para mejorar la calidad del modelo base' },
    ],
    correctAnswers: ['B'],
    explanation:
      'En Amazon Bedrock, los prompts y respuestas de los clientes no se usan para entrenar modelos de AWS ni de proveedores terceros; los datos permanecen aislados en la cuenta del cliente.',
  },
  {
    id: 380,
    certification: 'AIF-C01',
    domain: 'security-compliance-governance',
    topic: 'IAM y control de acceso',
    services: ['Bedrock', 'IAM', 'KMS'],
    difficulty: 'medium',
    type: 'multiple',
    question:
      'Seleccione dos opciones adecuadas como diseño de seguridad de una aplicación de producción que invoca Amazon Bedrock. (Seleccione DOS opciones)',
    answers: [
      { id: 'A', text: 'Ofuscar el código de la aplicación para que no se filtre el ID del modelo' },
      { id: 'B', text: 'Para acelerar el desarrollo, reutilizar también en producción un rol con permisos de administrador' },
      { id: 'C', text: 'Cifrar con claves de AWS KMS los datos confidenciales que se guardan en las bases de conocimiento y similares' },
      { id: 'D', text: 'Permitir en el rol de IAM de la aplicación únicamente las operaciones de la API de Bedrock necesarias' },
    ],
    correctAnswers: ['C', 'D'],
    explanation:
      'Se aplica privilegio mínimo en IAM y cifrado con KMS de datos sensibles (p. ej. bases de conocimiento). Un rol de administrador en producción y ofuscar el ID del modelo no son controles de seguridad adecuados.',
  },
  {
    id: 381,
    certification: 'AIF-C01',
    domain: 'security-compliance-governance',
    topic: 'Gobernanza de datos',
    services: [],
    difficulty: 'medium',
    type: 'multiple',
    question:
      'Seleccione dos prácticas adecuadas de gobernanza de datos al manejar los datos de entrenamiento de un modelo de ML. (Seleccione DOS opciones)',
    answers: [
      { id: 'A', text: 'Conceder los permisos de acceso de forma uniforme a todos los miembros del equipo' },
      { id: 'B', text: 'Recopilar únicamente lo necesario para la finalidad de uso y establecer un período de conservación' },
      { id: 'C', text: 'Conservar de forma indefinida todos los datos que puedan llegar a utilizarse en el futuro, sin fijar ningún plazo' },
      { id: 'D', text: 'Registrar el origen de los datos y el historial de sus transformaciones para poder rastrearlos después' },
    ],
    correctAnswers: ['B', 'D'],
    explanation:
      'Minimización de datos con retención definida y linaje/rastreabilidad son prácticas básicas de gobernanza. Acceso uniforme a todos y retención indefinida sin plazo no lo son.',
  },
  {
    id: 382,
    certification: 'AIF-C01',
    domain: 'security-compliance-governance',
    topic: 'Aislamiento y seguridad de red',
    services: ['VPC'],
    difficulty: 'medium',
    type: 'single',
    question:
      'Una empresa está realizando el diseño de seguridad de una aplicación de IA generativa. Para prevenir los ataques de inyección de prompts, la generación de contenido dañino y la fuga de información confidencial, ¿cuál es la estrategia de seguridad más eficaz?',
    answers: [
      { id: 'A', text: 'Una defensa en profundidad que combine la validación de la entrada, el filtrado de la salida y la configuración de barandillas (guardrails).' },
      { id: 'B', text: 'Ubicar la aplicación dentro de una VPC y protegerla únicamente con seguridad a nivel de red.' },
      { id: 'C', text: 'Fijar el parámetro temperature del modelo en 0 para evitar salidas impredecibles.' },
      { id: 'D', text: 'No registrar la salida del modelo en los registros para no dar información al atacante.' },
    ],
    correctAnswers: ['A'],
    explanation:
      'La seguridad de GenAI requiere defensa en profundidad: validar entradas (anti prompt injection), filtrar salidas y configurar Guardrails. Solo VPC, temperature=0 o no registrar logs no cubren esos riesgos.',
  },
  {
    id: 383,
    certification: 'AIF-C01',
    domain: 'security-compliance-governance',
    topic: 'Seguridad, cumplimiento y gobernanza',
    services: [],
    difficulty: 'medium',
    type: 'single',
    question:
      'Una aseguradora europea exige que los datos de clientes usados por su app de IA permanezcan almacenados y procesados dentro de la UE. ¿Qué concepto de gobernanza describe ese requisito?',
    answers: [
      { id: 'A', text: 'Residencia de datos (data residency)' },
      { id: 'B', text: 'Retención de datos (data retention) únicamente' },
      { id: 'C', text: 'Linaje de datos (data lineage) únicamente' },
      { id: 'D', text: 'La temperature del LLM' },
    ],
    correctAnswers: ['A'],
    explanation:
      'Data residency exige almacenar/procesar datos en una geografía o jurisdicción específica. Retention y lineage son conceptos distintos.',
  },
  {
    id: 384,
    certification: 'AIF-C01',
    domain: 'security-compliance-governance',
    topic: 'Cumplimiento con herramientas de AWS',
    services: ['SageMaker', 'Bedrock', 'Macie', 'Inspector', 'Artifact'],
    difficulty: 'medium',
    type: 'single',
    question:
      'Auditoría pide evidencias de que AWS cumple SOC/ISO/PCI para el entorno donde corre Bedrock. ¿Dónde descarga la empresa esos reportes de cumplimiento de AWS?',
    answers: [
      { id: 'A', text: 'AWS Artifact' },
      { id: 'B', text: 'Amazon Inspector' },
      { id: 'C', text: 'Amazon Macie' },
      { id: 'D', text: 'SageMaker Model Cards' },
    ],
    correctAnswers: ['A'],
    explanation:
      'AWS Artifact es el portal de autoservicio para reportes y acuerdos de cumplimiento de AWS. Inspector busca vulnerabilidades; Macie detecta PII; Model Cards documentan modelos.',
  },
  {
    id: 385,
    certification: 'AIF-C01',
    domain: 'security-compliance-governance',
    topic: 'Seguridad, cumplimiento y gobernanza',
    services: ['IAM'],
    difficulty: 'hard',
    type: 'single',
    question:
      'Antes de entrenar con datos sensibles, el equipo debe reducir riesgo de exposición y limitar quién accede a los datasets. ¿Qué práctica de ingeniería de datos segura encaja mejor?',
    answers: [
      { id: 'A', text: 'Implementar tecnologías que mejoran la privacidad (PETs) y controlar el acceso a los datos' },
      { id: 'B', text: 'Desactivar IAM para acelerar experimentos' },
      { id: 'C', text: 'Hacer públicos los buckets de entrenamiento' },
      { id: 'D', text: 'Evitar cualquier revisión de calidad de datos' },
    ],
    correctAnswers: ['A'],
    explanation:
      'Buenas prácticas: calidad de datos, privacy-enhancing technologies, control de acceso e integridad.',
  },
  {
    id: 386,
    certification: 'AIF-C01',
    domain: 'security-compliance-governance',
    topic: 'Auditoría con AWS CloudTrail',
    services: ['Inspector', 'CloudTrail', 'IAM', 'S3', 'VPC'],
    difficulty: 'easy',
    type: 'single',
    question:
      '¿Cuál emparejamiento correcto relaciona servicios de AWS con su función de gobernanza o cumplimiento (compliance)?',
    answers: [
      { id: 'A', text: 'Config: configuración de recursos · Artifact: reportes de compliance · Inspector: vulnerabilidades · CloudTrail: auditoría de API' },
      { id: 'B', text: 'Config: TTS · Artifact: clustering · Inspector: traducción · CloudTrail: embeddings' },
      { id: 'C', text: 'Config: solo facturación · Artifact: solo IAM · Inspector: solo S3 · CloudTrail: solo VPC' },
      { id: 'D', text: 'Los cuatro son bases de datos vectoriales' },
    ],
    correctAnswers: ['A'],
    explanation:
      'Config, Artifact, Inspector, CloudTrail (y Trusted Advisor) son clave para gobernanza y cumplimiento de sistemas de IA.',
  },
  {
    id: 387,
    certification: 'AIF-C01',
    domain: 'security-compliance-governance',
    topic: 'Cifrado de datos',
    services: [],
    difficulty: 'easy',
    type: 'single',
    question:
      '¿Cuál emparejamiento correcto define conceptos de seguridad de IA?',
    answers: [
      { id: 'A', text: 'Inyección de prompts (prompt injection): manipular el modelo vía prompts · En tránsito: cifrar datos en movimiento · En reposo: cifrar datos almacenados · Filtrado/validación de salida (output filtering): validar/filtrar salidas' },
      { id: 'B', text: 'Inyección de prompts: solo DNS · En tránsito: solo UI · En reposo: solo marketing · Filtrado de salida: solo pricing' },
      { id: 'C', text: 'Todos son sinónimos de ajuste fino (fine-tuning)' },
      { id: 'D', text: 'Ninguno aplica a sistemas de GenAI' },
    ],
    correctAnswers: ['A'],
    explanation:
      'Conceptos clave de seguridad y privacidad en sistemas de IA: inyección de prompts, cifrado en tránsito/reposo y filtrado de salidas.',
  },
  {
    id: 388,
    certification: 'AIF-C01',
    domain: 'security-compliance-governance',
    topic: 'Seguridad en Amazon Bedrock',
    services: ['Bedrock', 'CloudTrail', 'PartyRock'],
    difficulty: 'hard',
    type: 'single',
    question:
      'Cumplimiento exige reconstruir, meses después, qué usuario envió qué prompt a Bedrock y qué respondió el modelo. ¿Qué práctica es indispensable?',
    answers: [
      { id: 'A', text: 'Mantener rastro de auditoría (audit trail) y logging de las interacciones' },
      { id: 'B', text: 'Solo cifrar en reposo y no registrar nada' },
      { id: 'C', text: 'Desactivar CloudTrail en la cuenta' },
      { id: 'D', text: 'Usar PartyRock en lugar de cualquier registro' },
    ],
    correctAnswers: ['A'],
    explanation:
      'Audit trail y logging de interacciones de IA permiten auditar prompts y respuestas.',
  },
  {
    id: 389,
    certification: 'AIF-C01',
    domain: 'security-compliance-governance',
    topic: 'IAM y control de acceso',
    services: ['Bedrock', 'IAM'],
    difficulty: 'medium',
    type: 'single',
    question:
      'Según el modelo de responsabilidad compartida, al invocar FMs en Amazon Bedrock, ¿quién debe configurar IAM para decidir quién puede invocar el modelo?',
    answers: [
      { id: 'A', text: 'Exclusivamente AWS' },
      { id: 'B', text: 'El cliente' },
      { id: 'C', text: 'Solo el proveedor del modelo (p. ej. Anthropic), nunca el cliente' },
      { id: 'D', text: 'Nadie: Bedrock no usa permisos' },
    ],
    correctAnswers: ['B'],
    explanation:
      'La configuración de IAM (seguridad en la nube) es responsabilidad del cliente.',
  },
  {
    id: 390,
    certification: 'AIF-C01',
    domain: 'security-compliance-governance',
    topic: 'Seguridad, cumplimiento y gobernanza',
    services: ['Polly', 'Personalize'],
    difficulty: 'hard',
    type: 'single',
    question:
      'Seguridad quiere clasificar el alcance de riesgo y responsabilidad al construir una solución GenAI en AWS (qué controla el cliente vs el proveedor). ¿Qué framework de AWS encaja?',
    answers: [
      { id: 'A', text: 'Generative AI Security Scoping Matrix' },
      { id: 'B', text: 'Amazon Personalize recipe ranking' },
      { id: 'C', text: 'Solo el Cost Explorer sin controles de seguridad' },
      { id: 'D', text: 'Amazon Polly lexicon matrix' },
    ],
    correctAnswers: ['A'],
    explanation:
      'La Generative AI Security Scoping Matrix es el framework de AWS para evaluar alcance de riesgo/responsabilidad en GenAI.',
  },
  {
    id: 391,
    certification: 'AIF-C01',
    domain: 'security-compliance-governance',
    topic: 'Modelo de responsabilidad compartida',
    services: ['Bedrock'],
    difficulty: 'easy',
    type: 'single',
    question:
      'Según el modelo de responsabilidad compartida (shared responsibility model) de AWS, ¿de quién es la responsabilidad de la seguridad física de los data centers donde corren los modelos fundacionales de Amazon Bedrock?',
    answers: [
      { id: 'A', text: 'De un tercero no relacionado' },
      { id: 'B', text: 'De AWS' },
      { id: 'C', text: 'No está definida' },
      { id: 'D', text: 'Del cliente' },
    ],
    correctAnswers: ['B'],
    explanation:
      'La seguridad física de los data centers es de AWS (seguridad de la nube / security of the cloud).',
  },
]
