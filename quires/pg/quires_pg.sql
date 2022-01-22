
/*TABLE FOR USERS*/

SELECT users.id, users.nickname, users.mail, users.password, users.city, occupation.occupation_kind, subscription.subscription_kind
FROM users
JOIN occupation
ON users.id_occupation = occupation.id
JOIN subscription
ON users.id_subscription = subscription.id;

/*INSERT FO USERS*/
INSERT INTO public.users(
	city,  mail, nickname, password, id_occupation, id_subscription)
	VALUES ('Dallas', 'www3@gmail.com', 'Piter1566', '12334334ddd', 4, 3);

/*TABLE FOR QUIZES*/
