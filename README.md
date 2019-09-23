# **Proyecto Data Lovers Rick & Morty**

Rick y Morty es una serie de televisión estadounidense de animación para adultos creada por Justin Roiland y Dan Harmon para Adult Swim. La serie sigue las desventuras de Rick un viejo científico y su fácilmente influenciable nieto Morty, quienes pasan el tiempo entre la vida doméstica y los viajes espaciales intergalácticos.

# Objetivos del proyecto

Desarrollar una página web en donde se pueda visualizar un conjunto de datos, en este caso de la serie Rick & Morty, que se adecue a las necesidades del usuario (gracias a las Historias de Usuario) y que cuente con una interfaz en donde la visualización de la data sea lo más adecuada e intuitiva posible nuevamente bajo las necesidades del usuario.

## Definición de usuario

En primer lugar para definir un usuario, realizamos una encuesta (Google Forms) con el objetivo de averiguar cuales son los tipos de personas que han visto, ven o vieron la serie, cuál es el grado de interés que tienen por esta misma, cuales son sus comportamientos en relación a esta y que es lo que les interesaría saber acerca de ella, para definir a su vez el tipo de información que deberíamos priorizar para mostrar dentro de la web.

Dentro de la encuesta hicimos preguntas cerradas y abiertas en donde le dimos a los usuarios el chance de explayarse contándonos que es lo que prefieren ver dentro de una página web de Rick & Morty.


Como pregunta abierta, nos preguntamos por qué Rick And Morty llamaba la **atención de los usuarios**.  
Las respuestas nos lleva al análisis de que los usuarios se sienten atraídos por tres motivos.

1. Recomendaciones.
2. Estilo de animación y estética.
3. Ideas de multiverso y temáticas que aborda la serie (viajes en el tiempo, ciencia, situaciones familares).

A continuación algunas respuestas textuales de quienes respondieron la encuesta.

*"Me la recomendaron y enganché con la temática oscura de la serie."*

*"Por casualidad, sus viajes a través del tiempo y portales que los llevan a otros mundos."*
 
*"Su ridiculización del absurdo de la existencia con justificaciones racionales y graciosas."*

Otra pregunta abierta que se hizo fundamental para el desarrollo de nuestra pagina web y de esta manera poder priorizar la información que se encontraría en ella, fue  **que les gustaría encontrar en esta página** al momento de visitarla, algunas de las respuestas fueron:

*"Información con respecto a los personajes, novedades sobre lo que se viene y temas relacionados del "universo" Rick & Morty (los universos que existen, mundos, razas, etc)"*

*"Información sobre personajes, historia de la serie, entre otros"*

*"Capítulos, información de nuevas temporadas, un directorio y con categorías con cada tipo de personaje de la serie"*

        
De un total de 45 respuestas, la mayoría de los encuestados quisieran **saber más sobre los personajes y sus características**, los tipos de mundos que existen en la serie, información sobre los capítulos e información extra sobre los realizadores, análisis, detalles de la producción y curiosidades.

Finalmente preguntamos sobre algunos hábitos de cómo ven la serie y si la dejaron de ver cuál fue el motivo, entre las respuestas el **tiempo** es el común denominador de la mayoría de los usuarios, de 20 usuarios que respondieron esta pregunta:

- El **25%** (5 usuarios) respondió debido a la falta de tiempo.

- El **30%** (6 usuarios) vio todos los capítulos y "la dejo de ver" porque aun no hay temporadas nuevas.
_____

Finalmente pudimos identificar a tres tipos de usuarios: 

- **"Fan":** Es quien vió todos los capítulos de todas las temporadas, le gusta la serie y quiere seguir sabiendo de ella.

- **"Sin tiempo":** Es quien gusta de la serie, le gustaría seguir sabiendo de ella pero no tiene tiempo para dedicarse a verla.

- **"Desencantad@":** Es quien vio algunos capítulos, pero no le gustó por diversos motivos y dejó de verla.

### Usuario objetivo

Luego de analizar la información brindada por los encuestados, decidimos enfocarnos en el **usuario fan** ya que este se interesa en buscar información acerca de la serie, **tiene tiempo de investigar**, quiere tener información especifica y abarcar el mayor conocimiento que pueda. Este usuario tiene **entre 13 y 25 años**, es más bien **nerd**, esta conectado todo el tiempo, es una persona curiosa, al día con las tendencias en tecnología y tiende a tener una **personalidad adictiva.**

### Historias de usuario

Creamos 4 historias de usuario, siguiendo las especificaciones del proyecto y  según los intereses y necesidades determinados del análisis de la encuesta.

- **Historia de usuario 1:** Yo como fan de Rick & Morty quiero tener acceso a información detallada de cada personaje para poder reconocerlos e identificarlos fuera de la serie.
 > Mostrar data.

-  **Historia de usuario 2:** Yo como fan de Rick & Morty quiero saber a que especie pertenece cada personaje para tener conocimiento especifico sobre la serie.
> Filtrar data.

-  **Historia de usuario 3:** Yo como fan de Rick & Morty quiero ordenar a los personajes por nombre, para poder encontrarlos con mayor facilidad.
> Ordenar data.

-  **Historia de usuario 4:** Yo como fan de Rick & Morty quiero acceder a información exclusiva de la serie para sentirme parte del universo Rick & Morty.
> Calcular con la información de la data.

En el video a continuación se muestra el primer testeo de nuestro prototipo de alta fidelidad con usuario **"Fan":** que corresponde a las historias de usuario 1 y 2.

En su feedback menciona la idea de enfocarnos en los personajes ya que Rick and Morty **trata principalmente de multiversos**  por lo tanto, al enfocarnos en la muestra de personajes en sus multiples universos podemos llegar con mayor facilidad a todos los usuarios de la página web y lo que posiblemente esten buscando al visitar sitios web como este. Por otro lado comenta que el filtrado por género, vivos y muertos es innecesario, ya que nuevamente al tratarse de multiversos no se tiene precisión en la data a que universo corresponde, a su vez menciona la posibilidad de mostrar los diferentes Ricks y Mortys de los diversos multiversos en especie de filtrado solo de Ricks y/o de Mortys respectivamente. 

Respecto al diseño visual piensa que seria interesante "apropiarse de la visualidad de la serie", con tipografías que hagan mayor alución al universo Rick and Morty colores más contrastados, etc. Finalmente comenta "... dejar en limpio lo que te cuenta la serie, porque lo entiendes pero no lo procesas porque es mucho... yo que he visto dos veces la serie", con ese comentario hace referencia a incluir fichas de personajes con detalles precisos de cada uno de ellos, en que universos habitan, crear una especie de red social con links de capitulos online, comentarios de usuarios, puntuación de episodios, etc.  

[Entrevista Usuario](https://drive.google.com/file/d/1YxllZHR89eV5QXIAxX0B_LlmDzsnAuGV/view?usp=sharing)


## Definición del producto

Después de tener listas nuestras historias de usuario, decidimos enfocarnos en los personajes de la serie Rick & Morty, haciendo una guía para los fanáticos, en la cual pueden encontrarlos fácilmente según su nombre o las características que ellos ya conozcan o deseen conocer de ellos. Le dimos funciones a la web de acuerdo a las respuestas que recibimos sobre la información más relevante para los usuarios. 

# Proceso de diseño

Para llegar a un producto final pasamos por varias etapas dentro del proceso de diseño, la primera de ellas es la del prototipado, en donde comenzamos desde entender el flujo de la web, hasta llegar a un prototipo diseñado con una paleta de colores definida, tipografías, estructura y diagramación.

### Diagrama de flujo
<a  href="https://imgbb.com"><img  src="https://i.ibb.co/M7661Dh/diagrama-de-flujo-100.jpg"  alt="Diagrama de flujo"></a>

### Sketch
<a  href="https://imgbb.com"><img  src="https://i.ibb.co/q7GtkYz/sketch-100.jpg"  alt="Sketch"></a>

### Wireframe
<a  href="https://imgbb.com"><img  src="https://i.ibb.co/4SqPvJz/wireframe-100.jpg"  alt="Wireframe"></a>

### Prototipo de alta fidelidad
<a  href="https://imgbb.com"><img  src="https://i.ibb.co/R3yx89z/alta-100.jpg"  alt="Prototipo de alta fidelidad"></a>

#### Paleta de colores
Decidimos utilizar una paleta de colores acotada y más bien sobria, ya que los personajes de la serie tienen mucha personalidad y buscamos resaltar eso, ayudando al usuario a centrarse en lo importante de la información que se le está entregando sin tener distractores.
Utilizamos un morado y un verde que combinan y contrastan de manera llamativa sobre un fondo ocre.

<a  href="https://imgbb.com"><img  src="https://i.ibb.co/Y2fzMfL/paleta-100.jpg"  alt="Paleta de colores"></a>


#### Tipografía
Utilizamos la tipografía Nunito Sans, ya que es una tipografía que tiene muy buena legibilidad en la web. Además cuenta con varios pesos tipográficos lo que nos permite darle jerarquía y personalidad a la web sin tener que variar de familia tipográfica.

<a  href="https://imgbb.com"><img  src="https://i.ibb.co/85QBYps/T01.png"  alt="Familia Tipografia"></a>
<a  href="https://imgbb.com"><img  src="https://i.ibb.co/RGXrwGS/T02.png"  alt="Estio tipografia"></a>

### Link del proyecto
Puedes visitar nuestra web aquí:  [Data Lovers Rick & Morty](https://camilamaira.github.io/SCL011-data-lovers/src/index.html)



## Test de usabilidad




# Pruebas unitarias
<a  href="https://imgbb.com"><img  src="https://i.ibb.co/yhxPG43/test01.png"  alt="Segundo Wireframe"></a>

<a  href="https://imgbb.com"><img  src="https://i.ibb.co/nsBLT4y/test02.png"  alt="Segundo Wireframe"></a>

# Retroalimentación 
Durante el proceso de desarrollo de la web, tuvimos que ir modificando el diseño de la página, ya sea por limitaciones de conocimiento respecto al código o por los testeos que ibamos haciendo a los usuarios.
La versión final dista mucho de los primeros sketch pero entendemos que diseñar una web es un proceso de reiteración constante y si bien nos hubiera gustado tener algunos resultados más acabados, estamos contentas con el resultado hasta ahora, ya que nuestra web cumple con 3 de las 4 historias de usuario.
Creemos también que si nos hubiéramos organizado mejor, podríamos haber avanzado más y completar las 4 historias de usuario y afinar mejor algunos detalles del diseño.


# Desarrolladoras

- Natalia Barriga
- Camila Maira
- Teresa Escárate