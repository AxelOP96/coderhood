# coderhood
Clases de Coderhood
*Clase 1: 09/05/2021 INTRODUCCIÓN*
Dentro de las tecnologias que se van a ver se encuentran:
Introduccion:
un protocolo es un acuerdo en la forma de comunicarse entre dos partes. Las computadoras se comunican a traves del protocolo tcp/ip que es como vamos a mandar informacion desde nuestro dispositivo y como nos va a llegar tambien. TCP es como enviamos y recibimos nuestra informacion y la IP es es como identificamos nuestro dispositivo en ese mar de informacion viajando. Pra conectar dos computadoras se necesita un servidor. La mayoria de internet usa el protocolo HTTP(hyper text transfer protocol). Cada proveedor va atener su DNS(domain name system) y eso nos va a permitir que podamos escribir el nombre de nuestro dominio y eso sea suficiente para navegar a nuestra web. Una vez que nos conectamos con el servidor de una pagina web, este nos responde con 3 tipos de archivos que el navegador sabe como mostrar. Estos son archivos HTML, CSS y JavaScript. HTML nos va a dar la estructura de la pagina que elementos se ven en pantalla. CSS nos va a dar estilos a ese elemento. JavaScript nos va a dar la interactividad de la pagina. El frontend developer se encarga de incluir todo lo que vemos en pantalla ya sea en web o apps para celular. El nuevo contenido se agrega todo el tiempo a las webs en general. Ese nuevo contenido se almacena en Bases de datos y van a ser los servidores los que van a poder conectarse con las BD para traer informacion modificarla o borrarla. Los backend developers son los encargados de programar los servidores y las BD. 
**Fundamentos de programacion(vamos a aprender a programar en JavaScript, estos conocimientos los vamos a usar tanto para el front como para el back).
**Diseño web(Vamos a aprender HTML, CSS y como manipular los elementos visuales creados usando JavaScript).
**Git(Nos va a permitir empezar a trabajar en equipo, sincronizando nuestro codigo en repositorios).
**Ecosistema React(vamos a prender a crear interfaces avanzadas usando React, la misma tecnologia que usan Facebook, instagram y Netflix).
**Backend(Vamos a crear nuestro servidor Node.js con su base de datos y vamos a permitir conexiones de nuestra web).

---------------------------------------------------------------------------------------------------------------------------------------------------------
*Clase 2: 13/05/2021 Algoritmos y datos*
¿Que es programar? Es manejar datos, es hablarle a la maquina a traves de un lenguaje que pueda entender. Se crean lenguajes que nos permitan comunicarnos con ella utilizando lenguaje humano. Programar se trata de escribir algoritmos que la mayoria pueda ejecutar. 
**Los algoritmos: son una secuencia de pasos para llegar a un objetivo. Dentro de los algoritmos podemos encontrar condiciones, procesar informacion y ejecutar acciones. 
**Datos: en los algoritmos mayormente nos encontramos con la necesidad de guardar informacion.
**Logica y control de decisiones: en cualquier lenguaje de programacion, el codigo necesita realizar decisiones y llevar a cabo diferentes acciones acordes dependiendo de distintas entradas.
** usamos "=" para asignar valores y "==" para comparar. 
**Operadores Logicos: operador AND requiere que ambas condiciones si o si sean verdaderas para que la composicion sea verdadera. operador OR requiere que una de las condiciones sea verdadera para que la composicion de ambas sea verdadera.
**Condicionales: if y else
**Variables: una variables esta compuesta por un espacio en memoria, un dato y un identificador el cual se usa para acceder a ese espacio en memoria y recuperar el codigo en JavaScript.
**tipado: un tipo es un atributo que define ciertas restricciones a los datos, es decir la clase de dato que va a contener la variable. JavaScript es un lenguaje de tipado dinamico ya que puede cambiar de tipo de dato durante la ejecucion.
---------------------------------------------------------------------------------------------------------------------------------------------------------
*Clase 3: 16/05/2021 Estructuras de control*
**Estructuras repetitivas: For es una estructura que repite una serie x veces. Los parametros que recibe son: antes de empezar a repetir, definimos la variable auxiliar esta variable indica el numero de la repeticion; antes de cada repeticion realizamos esta comparacion, si esta comparacion resulta verdadera repetimos, en caso contrario se detiene la estructura repetitiva; luego de cada repeticion se realiza esta operacion, el operador ++ aumenta en 1 el valor de la variable i, es lo mismo que hacer i = i + 1; ejemplo:
var x = 10;
for(var i = 0; i < x; i++) {
    console.log(i);
}
 while: Se va a repetir mientras se cumpla una condicion siempre que sea verdadera y no se necesita una variable auxiliar. Ejemplo:

---------------------------------------------------------------------------------------------------------------------------------------------------------
*Clase 4: 20/05/2021 Modularizacion y funciones*
**Diferencias entre const, let y var:
Antes de empezar a hablar de las diferencias de cada una tenemos que entender que es el
ámbito o scope de una variable.
El scope de una variable se define como el alcance que tiene esta dentro del código, es decir,
en que puntos del programa una variable puede ser usada y en qué puntos no. 
Variable con Var:
Las declaraciones var tienen alcance global y en la función alcance local.
El alcance es global cuando una variable var se declara fuera de una función. Esto significa
que cualquier variable que se declare con var fuera de un bloque de funciones está disponible
para su uso en todo el programa.
var tiene un alcance de función cuando se declara dentro de una función. Esto significa que
está disponible y se puede acceder solo dentro de esa función. Las variables declaradas con var se pueden volver a declarar y actualizar, esto significa que
podemos hacer esto dentro del mismo alcance y no obtendremos un error.
Variable con let
El problema que comentábamos que tiene var lo soluciona let. El alcance de let es por
bloque, un bloque es todo fragmento de código que este entre {}.
Variable con const
Las variables declaradas con const tienen el mismo comportamiento que let con la
diferencia que el valor se tiene que asignar al momento de la declaración y no puede
cambiar. const no se puede actualizar o volver a declarar.
Visto todo esto, mencionemos las diferencias entre  var, let y const:
Las declaraciones var tienen un alcance global o alcance a una función mientras que let
y const tienen un alcance de bloque.
Las variables var se pueden actualizar y volver a declarar dentro de su alcance, mientras
que las variables let permite que las variables se puedan actualizar, pero no volver a
declarar y las variables const no se pueden actualizar ni volver a declarar.
Mientras que var y let pueden declararse sin inicializarse, const debe inicializarse
durante la declaración.
**Modularizacion: dividir un problema en partes mas simples. Modularizacion refiere a dividir el programa en partes mas pequeñas dedicadas a hacer un trabajo en especifico, la cual tendrian que trabajar junto al resto del codigo. Los beneficios que nos da modularizar es no repetir codigo, facil mantenimiento del programa y mayor legibilidad. La forma de modularizar en JavaScript es haciendo funciones.
**Funciones: una funcion es un bloque de codigo encargado de una tarea en especifico. Estas funciones van a recibir valores llamados parametros.
una funcion en JavaScript es similar a un procedimiento, un conjunto de instrucciones que realiza una tarea o calcula un valor, pero un procedimiento califique como funcion debe tomar alguna entrada y devolver una salida donde hay alguna relacion obvia entre la entrada y la salida. para usar una funcion debes definirla en algun lugar del ambito desde el que deseas llamarla. Las funciones también pueden recibir datos como parámetros o no, los veremos un poco
mas adelante.
una funcion consta de la palabra clave function seguida de: el nombre de la funcion; una lista de parametros de la funcion y separados por comas.no necesariamente hay que pasarles parametros; el bloque de codigo que vas a ejecutar para las funciones en JavaScript que definen entre llaves; dentro de la funcion hay que agregar un return, es una palabra clave encargada de devolver algo, el resultado de la ejecucion del codigo.
**Hablemos un poco de parametros en JavaScript
Primero vamos a decir que tenemos dos formas de pasar parámetros en programación en
general, por valor y por referencia.
Por valor significa que la función recibe sólo una copia del valor que tiene la variable, o
sea que no la puede modificar.
Por referencia significa que se pasa la posición de memoria donde esta guardada la
variable, por lo que la función puede saber cuánto vale, pero además puede modificarla
de cualquier manera.Los parámetros primitivos (Number, Boolean, String, Undefined) en JavaScript se pasan por
valor por eso mismo no podemos modificar esos parámetros dentro de la función para que
se vean reflejados fuera. Pero si pasamos un objeto como parámetro, este sí se va a modificar porque lo hace por
referencia, es decir se van a ver reflejados fuera de la función. Cuando pasamos los parámetros hay que tomar en cuenta tres casos que se pueden
presentar.
Enviar menos parámetros de lo que tiene declarado la función, a esas variables que no le
asignamos un valor javascript no dispara un error, sino que le asigna el valor "undefined". Enviar más parámetros de lo que definimos en la función, simplemente los ignora es
decir no devuelve un error. El orden en que mandamos los parámetros y el que declaramos en la función tiene que
ser el mismo y no necesariamente se tienen que llamar iguales.
**Llamar a las funciones
Definir una función no la ejecuta. Definirla simplemente nombra la función y especifica qué
hacer cuando se llama a la función.
Básicamente llamar a la función consiste en escribir su nombre en donde queramos que se
ejecute ese bloque de código. El código anterior llama a la función con un argumento de 5 y 2. La función ejecuta sus
declaraciones internas y devuelve el valor 7.
Las funciones deben llamarse dentro del ámbito donde fueron declaradas para que se puedan
ejecutar.
El ámbito de una función es la función en la que se declara (o el programa completo, si se
declara en el nivel superior).El scope es el espacio donde esta definida una variable.

---------------------------------------------------------------------------------------------------------------------------------------------------------
*Clase 5: 23/05/2021 Estructuras de datos*

---------------------------------------------------------------------------------------------------------------------------------------------------------
*Clase 6: 27/05/2021 Estructuras de datos 2*

---------------------------------------------------------------------------------------------------------------------------------------------------------
*Clase 7: 30/05/2021 Manejo de errores*

---------------------------------------------------------------------------------------------------------------------------------------------------------
*Clase 8: 03/06/2021 Asincronismo y promesas*

---------------------------------------------------------------------------------------------------------------------------------------------------------
*Clase 9: 06/06/2021*

---------------------------------------------------------------------------------------------------------------------------------------------------------
*Clase 10:10/06/2021*

---------------------------------------------------------------------------------------------------------------------------------------------------------
