const express = require ( 'express' );
const app = express ();
const port = 10000 ;

app . get ( '/' , ( req , res ) => {
    res . send ( ' Привіт, мир!' );
});

app . listen ( port , () => {
    console . log ( ` Сервер запущений на порту $ { port } ` );
});
app . get ( '/ api /users' , ( req , res ) => {
    // Отримання списку користувачів
    res . json ({ users: [ ... users ]});
  });
  
  app . post ( '/ api /users' , ( req , res ) => {
    // Створення нового користувача
    const newUser = req . body ;
    users . push ( newUser );
    res . status ( 201 ). json ( newUser );
  });
const bodyParser = require ( 'body-parser' );
app . use ( bodyParser.json ( )) 
const Joi = require('joi');

// Определяем схему данных для валидации
const userSchema = Joi.object({
  name: Joi.string().min(3).required(),
  email: Joi.string().email().required(),
  age: Joi.number().integer().min(0).optional()
});

let users = []; // Здесь будет храниться список пользователей

app.post('/api/users', (req, res) => {
  // Проверяем данные тела запроса
  const { error, value } = userSchema.validate(req.body);

  if (error) {
    // Если есть ошибка валидации, возвращаем 400 Bad Request
    return res.status(400).json({ error: error.details[0].message });
  }

  // Если валидация прошла успешно, добавляем пользователя
  const newUser = value;
  users.push(newUser);
  res.status(201).json(newUser);
});
// Обработка маршрутов, которые не существуют
app.use((req, res, next) => {
    res.status(404).json({ error: 'Маршрут не найден' });
  });
  
  // Обработка ошибок
  app.use((err, req, res, next) => {
    console.error(err.stack);
    res.status(err.status || 500).json({ error: err.message || 'Внутренняя ошибка сервера' });
  });
  
  app.listen(port, () => {
    console.log(`Сервер запущен на порту ${port}`);
  });