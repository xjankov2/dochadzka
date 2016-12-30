-- RECORD_TYPE
insert into record_type (CODE, DESCRIPTION, HOURS_TYPE, ATTEND_TYPE) values ('PRESENT', 'Prítomný', true, true);
insert into record_type (CODE, DESCRIPTION, HOURS_TYPE, ATTEND_TYPE) values ('ABSENT', 'Neprítomný', true, false);
insert into record_type (CODE, DESCRIPTION, HOURS_TYPE, ATTEND_TYPE) values ('VACATION', 'Dovolenka', false, true);
insert into record_type (CODE, DESCRIPTION, HOURS_TYPE, ATTEND_TYPE) values ('COMPENSATORY', 'Náhradné voľno', false, true);
insert into record_type (CODE, DESCRIPTION, HOURS_TYPE, ATTEND_TYPE) values ('ILLNESS', 'Choroba', false, false);
insert into record_type (CODE, DESCRIPTION, HOURS_TYPE, ATTEND_TYPE) values ('DOCTOR', 'Návšteva lekára', true, false);
insert into record_type (CODE, DESCRIPTION, HOURS_TYPE, ATTEND_TYPE) values ('OTHER', 'Iné', true, true);

-- PERSON
insert into person (ID, FIRST_NAME, LAST_NAME, PREFIX_DEGREE, SUFFIX_DEGREE, VACATION_COUNT)  values (1, 'Roman', 'Devera', '', '', 20);
insert into person (ID, FIRST_NAME, LAST_NAME, PREFIX_DEGREE, SUFFIX_DEGREE, VACATION_COUNT)  values (2, 'Ivana', 'Jankovičová', '', '', 20);
insert into person (ID, FIRST_NAME, LAST_NAME, PREFIX_DEGREE, SUFFIX_DEGREE, VACATION_COUNT)  values (3, 'Vierka', 'Bendulová', '', '', 20);
insert into person (ID, FIRST_NAME, LAST_NAME, PREFIX_DEGREE, SUFFIX_DEGREE, VACATION_COUNT)  values (4, 'Ján', 'Kratochvíla', '', '', 20);
insert into person (ID, FIRST_NAME, LAST_NAME, PREFIX_DEGREE, SUFFIX_DEGREE, VACATION_COUNT)  values (5, 'Katka', 'Bachanová', '', '', 20);
insert into person (ID, FIRST_NAME, LAST_NAME, PREFIX_DEGREE, SUFFIX_DEGREE, VACATION_COUNT)  values (6, 'Peter', 'Hamar', '', '', 20);