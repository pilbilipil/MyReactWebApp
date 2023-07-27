const express = require('express');
const app = express();

// Добавляем заголовки CORS
app.use(function(req, res, next) {
  res.setHeader('Access-Control-Allow-Origin', 'http://localhost:3000');
  res.setHeader('Access-Control-Allow-Methods', 'GET, POST, OPTIONS, PUT, PATCH, DELETE');
  res.setHeader('Access-Control-Allow-Headers', 'X-Requested-With,content-type');
  res.setHeader('Access-Control-Allow-Credentials', true);
  next();
});

// Обработчики маршрутов
app.getProfile('http://localhost:8081/api/v1/getUser', function(req, res) {
  // Обработка запроса
});

app.post('http://localhost:8081/api/v1/authenticate', function(req, res) {
  // Обработка запроса
});

// Запуск сервера
app.listen(8081, function() {
  console.log('API запущен на порту 8081');
});