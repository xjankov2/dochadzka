-- RECORD_TYPE
insert into record_type (CODE, DESCRIPTION, HOURS_TYPE, ATTEND_TYPE) values ('PRESENT', 'Prítomný', false, true);
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

insert into holiday (ID, DAY, MONTH, YEAR_VALUE, DESCRIPTION)  values (1, 1, 1, 2017, 'Deň vzniku Slovenskej republiky');
insert into holiday (ID, DAY, MONTH, YEAR_VALUE, DESCRIPTION)  values (2, 6, 1, 2017, 'Zjavenie Pána (Traja králi)');
insert into holiday (ID, DAY, MONTH, YEAR_VALUE, DESCRIPTION)  values (3, 14, 4, 2017, 'Veľký piatok');
insert into holiday (ID, DAY, MONTH, YEAR_VALUE, DESCRIPTION)  values (4, 17, 4, 2017, 'Veľkonočný pondelok');
insert into holiday (ID, DAY, MONTH, YEAR_VALUE, DESCRIPTION)  values (5, 1, 5, 2017, 'Sviatok práce');
insert into holiday (ID, DAY, MONTH, YEAR_VALUE, DESCRIPTION)  values (6, 8, 5, 2017, 'Deň víťazstva nad fašizmom');
insert into holiday (ID, DAY, MONTH, YEAR_VALUE, DESCRIPTION)  values (7, 5, 7, 2017, 'Sviatok svätého Cyrila a Metoda');
insert into holiday (ID, DAY, MONTH, YEAR_VALUE, DESCRIPTION)  values (8, 29, 8, 2017, 'Výročie SNP');
insert into holiday (ID, DAY, MONTH, YEAR_VALUE, DESCRIPTION)  values (9, 1, 9, 2017, 'Deň Ústavy Slovenskej republiky');
insert into holiday (ID, DAY, MONTH, YEAR_VALUE, DESCRIPTION)  values (10, 15, 9, 2017, 'Sedembolestná Panna Mária');
insert into holiday (ID, DAY, MONTH, YEAR_VALUE, DESCRIPTION)  values (11, 1, 11, 2017, 'Sviatok všetkých svätých');
insert into holiday (ID, DAY, MONTH, YEAR_VALUE, DESCRIPTION)  values (12, 17, 11, 2017, 'Deň boja za slobodu a demokraciu');
insert into holiday (ID, DAY, MONTH, YEAR_VALUE, DESCRIPTION)  values (13, 24, 12, 2017, 'Štedrý deň');
insert into holiday (ID, DAY, MONTH, YEAR_VALUE, DESCRIPTION)  values (14, 25, 12, 2017, 'Prvý sviatok vianočný');
insert into holiday (ID, DAY, MONTH, YEAR_VALUE, DESCRIPTION)  values (15, 26, 12, 2017, 'Druhý sviatok vianočný');