Exercício 1

a) Um chave estrangeira serve relacionarmos duas tabelas diferentes.

b) INSERT INTO Rating (id, comment, rate, movie_id) 
VALUES (
		"001",
    "Dormi no meio do filme!",
    1,
		"004"
);

c) Não fez nenhuma alteração porque não reconheceu o id

d) ALTER TABLE Movie DROP COLUMN rating;


Exercício 2

a) Para facilitar a relação de vários elementos das duas tabelas, criamos essa essa outra tabela com essas relações.

b) INSERT INTO MovieCast(movie_id, actor_id)
VALUES(
		"003",
    "001"
);

INSERT INTO MovieCast(movie_id, actor_id)
VALUES(
		"001",
    "001"
);

INSERT INTO MovieCast(movie_id, actor_id)
VALUES(
		"003",
    "007"
);

INSERT INTO MovieCast(movie_id, actor_id)
VALUES(
		"002",
    "004"
);

INSERT INTO MovieCast(movie_id, actor_id)
VALUES(
		"002",
    "005"
);

INSERT INTO MovieCast(movie_id, actor_id)
VALUES(
		"001",
    "003"
);

c) Não fez nenhuma alteração porque não reconheceu o id


Exercício 3

a) É a condição paara buscar a relação.

b) SELECT m.id as movie_id, r.rate as rating FROM Movie m
INNER JOIN Rating r ON m.id = r.movie_id;