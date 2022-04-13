Exercício 1

a) Nesta tabela, utilizamos o FLOAT para declarar o salário, porque esta é uma forma de representar um número não inteiro em uma tabela. Explique os demais comandos que estão nessa query.

R: Os VARCHAR são strings de no máximo 255, 255 e 6 caracteres, e o DATE indica que é uma data.


b) O comando SHOW é bem útil para nos prover informações sobre bancos, tabelas, e mais. Utilize os comandos: SHOW DATABASES e SHOW TABLES. Explique os resultados.

R: O SHOW DATABASES mostrou o nome do banco de dados que estou utilizando. O SHOW TABLES mostrou o nome da tabela que eu criei e acredito que mostra o nome de todas as tabelas caso existam outras.


c) O comando DESCRIBE pode ser usado para ver estrutura de uma tabela. Utilize o comando  DESCRIBE Actor e explique os resultados.

R: Foi apresentada a tabela criada detalhando as informações que inseri no momento da criação.


Exercício 2

a) Escreva uma query que crie a atriz Glória Pires, com o id 002, salário R$1.200.000 e data de nascimento 23 de Agosto de 1963.

R: INSERT INTO Actor(
id, name, salary, birth_date, gender)
VALUE('002', 'Glória Pires', 1200000, '1963-08-23', 'female')

b) Escreva uma query que tente adicionar um outro elemento a tabela com o mesmo id do item anterior 002. Isso gerará um erro. Anote a mensagem de erro, traduza (pode usar o Google Tradutor diretamente) e explique porque esse erro aconteceu.

R: Porque já existe o id 002 na tabela, e por ser uma chave primária, o id deve ser único.

Tente usar as queries abaixo. Você vai reparar que elas vão gerar um erro. Anote as mensagens de erro, traduza (pode usar o Google Tradutor diretamente) e explique porque esses erros aconteceram. Por fim, corrija individualmente cada query para que funcione, teste o comando e anote-o também como resposta.

c) INSERT INTO Actor (id, name, salary)
VALUES(
  "003", 
  "Fernanda Montenegro",
  300000,
  "1929-10-19", 
  "female"
);

R: O erro apresentado indica que a quantidade de colunas passadas está diferente da quantidade de valores inseridos. O certo seria:
INSERT INTO Actor (id, name, salary, birth_date, gender)
VALUES(
  "003", 
  "Fernanda Montenegro",
  300000,
  "1929-10-19", 
  "female"
);

d) INSERT INTO Actor (id, salary, birth_date, gender)
VALUES(
  "004",
  400000,
  "1949-04-18", 
  "male"
);

R: O erro informa que o campo 'name' não tem um valor padrão, ou seja, ele não pode ficar vazio. O certo seria: 
INSERT INTO Actor (id, name, salary, birth_date, gender)
VALUES(
  "004", 
  "Antônio Fagundes",
  400000,
  "1949-04-18", 
  "male"
);

e) INSERT INTO Actor (id, name, salary, birth_date, gender)
VALUES(
  "005", 
  "Juliana Paes",
  719333.33,
  1979-03-26, 
  "female"
);

R: O erro não foi claro, ele informa que o valor de data '1950' é incorreto para a coluna indicada, mas percebi que apenas estava sem as aspas.


Exercício 3

a) Escreva uma query que retorne todas as informações das atrizes.

R: SELECT * from Actor WHERE gender = "female";

b) Escreva uma query que retorne o salário do ator com o nome Tony Ramos.

R: SELECT salary from Actor WHERE name = "Tony Ramos";

c) Escreva uma query que retorne todas as informações que tenham o gender com o valor "invalid". Explique o resultado.

R: SELECT * from Actor WHERE gender = "invalid";
Só é possível retornar o valor 'invalid' se colocarmos ele como valor.

d) Escreva uma query que retorne o id, nome e salário de todos que tenham o salário com o valor máximo de R$500.000.

R: SELECT id, name, salary from Actor WHERE salary < 500000;

e) Tente usar a query abaixo. Você vai reparar que ela vai gerar um erro. Anote a mensagem de erro, traduza (pode usar o Google Tradutor diretamente) e explique porque esse erro aconteceu. Por fim, corrija individualmente a query para que funcione, teste o comando e anote-o também como resposta.
SELECT id, nome from Actor WHERE id = "002"

R: O erro informa que não reconhece a coluna 'nome', pois o correto é 'name'. O correto seria:
SELECT id, name from Actor WHERE id = "002";


Exercício 4

a) Explique com as suas palavras a query acima.

R: A query fará a busca de atores cujos nomes comecem com a letra A ou J e que tenham o salário maior que R$300000.

b) Escreva uma query com os atores que não comecem com a letra "A" e tenham o salário maior do que R$350.000,00.

R: SELECT * FROM Actor
WHERE name NOT LIKE "A%" AND salary > 350000;

c) Escreva uma query com os atores que possuam "G" ou "g" em qualquer parte do nome. 

R: SELECT * FROM Actor
WHERE name LIKE "%g%" OR name LIKE "%G%";

d) Escreva uma query com os atores que tenham a letra "a" ou "A" ou "g" ou "G" no nome e o salário entre R$350.000,00 e R$900.000,00.

R: SELECT * FROM Actor
WHERE (name LIKE "%g%" OR name LIKE "%G%" OR name LIKE "%a%" OR name LIKE "%A%") 
AND salary BETWEEN 350000 AND 900000;


Exercício 5

a) Escreva a query que cria essa tabela. Para sinopse, utilize o tipo TEXT, pesquise sobre ele se precisar. Explique a query resumidamente.

R: CREATE TABLE Movies (
id VARCHAR(255) PRIMARY KEY,
name VARCHAR(255) NOT NULL,
sinopse TEXT NOT NULL,
release_date DATE NOT NULL,
rating INT NOT NULL
);

A query TEXT serve para armazenar strings de texto com maior capacidade que os tipos CHAR/VARCHAR. 

b) INSERT INTO Movies (id, name, sinopse, release_date, rating)
VALUES(
  "001", 
  "Se Eu Fosse Você",
  "Cláudio e Helena são casados há muitos anos e enfrentam a rotina do casamento. Um dia eles são atingidos por um fenômeno inexplicável e trocam de corpos.",
  "2006-01-06", 
  7
);

c) INSERT INTO Movies (id, name, sinopse, release_date, rating)
VALUES(
  "002", 
  "Doce de mãe",
  "Dona Picucha, uma animada senhora de 85 anos, sempre causa grandes confusões. A vida dela e dos seus quatro filhos sofre uma reviravolta depois que Zaida, empregada e amiga de Dona Picucha, anuncia que vai se casar e não poderá mais morar com ela.",
  "2012-12-27", 
  10
);

d) INSERT INTO Movies (id, name, sinopse, release_date, rating)
VALUES(
  "003", 
  "Dona Flor e Seus Dois Maridos",
  "Dona Flor é uma sedutora professora de culinária casada com Vadinho, que só quer saber de farras e jogatina nas boates. A vida de abusos acaba por acarretar sua morte precoce.",
  "2017-11-02", 
  8
);

e) INSERT INTO Movies (id, name, sinopse, release_date, rating)
VALUES(
  "004", 
  "Deus é Brasileiro",
  "Cansado da humanidade, Deus resolve tirar férias para descansar e procura alguém no Brasil capaz de substituí-lo. O borracheiro e pescador Taoca e a solitária Madá deverão guiá-lo até Quincas das Mulas, candidato de Deus a santo.",
  "2003-01-31", 
  9
);


Exercício 6

Escreva uma query que:

a) Retorne o id, título e avaliação a partir de um id específico.

R: SELECT id, name, rating FROM Movies WHERE id = "001";

b) Retorne um filme a partir de um nome específico.

R: SELECT * FROM Movies WHERE name = "Se Eu Fosse Você";

c) Retorne o id, título e sinopse dos filmes com avaliação mínima de 7.

R: SELECT id, name, sinopse FROM Movies WHERE rating >= 7;

Exercício 7
    
Escreva uma query que:
    
a) Retorna um filme cujo título contenha a palavra vida.

R: SELECT * FROM Movies WHERE name LIKE "%vida%";

b) Realize a pesquisa de um filme, ou seja: pesquise se o termo de busca está contido no título ou na sinopse. Utilize qualquer TERMO DE BUSCA para exemplificar.

R: SELECT * FROM Movies WHERE name LIKE "%vida%" OR sinopse LIKE "%vida%";

c) Procure por todos os filmes que já tenham lançado.

R: SELECT * FROM Movies WHERE release_date < "2022-04-12";

d) Procure por algum filme que já tenha lançado, com o termo de busca contido no título ou sinopse e com a avaliação maior do que 7.

R: SELECT * FROM Movies WHERE release_date < "2022-04-12" 
AND (name LIKE "%vida%" OR sinopse LIKE "%vida%") 
AND rating > 7;