use books;
insert authors (name)
values ('Jane Austen'), ('Emily Dickinson'), ('Fyodor Dostoevsky'), ('William Shakespeare'), ('Lau Tzu');

insert books (title)
values ('C Sharp'), ('Java'),(' Python'), ('PHP'), ('Ruby');

UPDATE books SET title = 'C#' WHERE title='C Sharp';

UPDATE authors SET name = 'Bill' WHERE id='4';

insert favourits (author_id,book_id)
values (1,1), (1,2);

insert favourits (author_id,book_id)
values (2,1), (2,2),(2,3);

insert favourits (author_id,book_id)
values (3,1), (3,2),(3,3),(3,4);

insert favourits (author_id,book_id)
values (4,1), (4,2),(4,3),(4,4),(4,5);

SELECT * FROM authors 
JOIN favourits ON authors.id = favourits.author_id where book_id=3;

DELETE FROM authors WHERE id=(SELECT author_id FROM favourits  where book_id=3 limit 1);

insert favourits (author_id,book_id)
values (5,2);

SELECT * FROM authors 
JOIN favourits ON authors.id = favourits.author_id  join  books on favourits.book_id =books.id  where favourits.author_id=3;

SELECT * FROM authors 
JOIN favourits ON authors.id = favourits.author_id  join  books on favourits.book_id =books.id  where favourits.book_id=5;





