Exercício 1

a) a coluna 'salary' será excluída.

b) a coluna 'gender' será renomeada para 'sex'.

c) a coluna 'gender' aceitará agora até 255 caracteres.

d) ALTER TABLE Actor CHANGE gender gender VARCHAR(100);


Exercício 2

a) UPDATE Actor
SET name = "Cláudia Raia",
birth_date = "1966-12-23"
WHERE id = "003";

b) UPDATE Actor
SET name = "JULIANA PAES"
WHERE name = "Juliana Paes";

UPDATE Actor
SET name = "Juliana Paes"
WHERE id = "JULIANA PAES";

c) UPDATE Actor
SET 
name = "Cauã Reymond",
birth_date = "1980-05-20",
salary = 900000,
gender = "male"
WHERE id = "005";

d) foi aceita a atualização de um ID inexistente. Isso acontece porque a query foi passada corretamente, somente com a informação de onde alterar ser incorreta não ocorre a não realização do comando e no campo 'Message' aparece: 0 row(s) affected.


Exercício 3

a) DELETE FROM Actor WHERE name = 'Fernanda Montenegro';

b) DELETE FROM Actor WHERE gender = 'male' AND salary > 1000000;


Exercício 4

a) SELECT MAX(salary) FROM Actor;

b) SELECT MIN(salary) FROM Actor WHERE gender = 'female';

c) SELECT COUNT(*) FROM Actor WHERE gender = 'female';

d) SELECT SUM(salary) FROM Actor;


Exercício 5

a) a query GROUP BY agrupa todos os elementos com a mesma característica. A query do exemplo separou os atores das atrizes de acordo com o que foi cadastrado em 'gender'.

b) SELECT id, name FROM Actor ORDER BY name DESC;

c) SELECT * FROM Actor ORDER BY salary;

d) SELECT * FROM Actor ORDER BY salary DESC LIMIT 3;

e) SELECT AVG(salary), gender FROM Actor GROUP BY gender;


Exercício 6

a) ALTER TABLE Movies ADD playing_limit_date DATE;

b) ALTER TABLE Movies CHANGE rating rating FLOAT;

c) UPDATE Movies SET playing_limit_date = '2022-05-31'
WHERE id = '001';

UPDATE Movies SET playing_limit_date = '2022-03-31'
WHERE id = '002';

d) DELETE FROM Movies WHERE id = '004';

UPDATE Movies SET sinopse = 'Filme apagado' WHERE id = '004';

Foi aceita a atualização da sinopse em um ID que não existe mais porque a query foi passada corretamente, somente com a informação de onde alterar ser incorreta não ocorre a não realização do comando e no campo 'Message' aparece: 0 row(s) affected.