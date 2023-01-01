# React homework template

##
Маршрути
У застосунку повинні бути такі маршрути. Якщо користувач зайшов за неіснуючим маршрутом, його необхідно перенаправляти на домашню сторінку.

---  '/' – компонент Home, домашня сторінка зі списком популярних кінофільмів.
---  '/movies' – компонент Movies, сторінка пошуку кінофільмів за ключовим словом.
---  '/movies/:movieId' – компонент MovieDetails, сторінка з детальною інформацією про кінофільм.
---  /movies/:movieId/cast – компонент Cast, інформація про акторський склад. Рендериться на сторінці MovieDetails.
---  /movies/:movieId/reviews – компонент Reviews, інформація про огляди. Рендериться на сторінці MovieDetails.


Додай асинхронне завантаження JS-коду для маршрутів застосунку, використовуючи React.lazy() і Suspense.
