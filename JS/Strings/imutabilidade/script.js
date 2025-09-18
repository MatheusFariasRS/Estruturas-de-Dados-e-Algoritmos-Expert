/*Imutabilidade
Em JavaScript, strings são imutáveis. Isso significa que, uma vez que uma string é criada,
não é possível alterar seus caracteres individuais diretamente.
Qualquer operação que pareça modificar uma string na verdade cria e retorna uma nova string.
Para lidar com problemas que precisam alterar caracteres em uma string,
 pode-se converter a string para um array de caracteres, daí fazer as operações necessárias,
  e ao final converter novamente o array para uma nova string.
*/

let str = "Hello, world!";
let arr = str.split(""); // Converte a string em um array de caracteres*
arr[7] = 'W'; // Modifica um caracter* específico
str = arr.join(""); // Converte o array de volta para string


/*
* Nota: em Javascript na verdade não existe o tipo caractere (como existe em Java e C# por exemplo). 
O array criado pela chamada do método .split("") 
na verdade será um array de strings, onde cada string será um string contendo um único caractere.
*/