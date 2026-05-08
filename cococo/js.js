// создаем таблицу
const table = document.createElement("table");
table.border = "1";

// данные
const data = [
  { name: "Анна", age: 25, city: "Москва" },
  { name: "Иван", age: 30, city: "Киев" },
  { name: "Мария", age: 28, city: "Минск" }
];

// создаем заголовок таблицы через innerHTML
const thead = document.createElement("thead");
thead.innerHTML = `
  <tr>
    <th>Имя</th>
    <th>Возраст</th>
    <th>Город</th>
  </tr>
`;

// создаем тело таблицы
const tbody = document.createElement("tbody");

// заполняем строки через createElement + innerHTML
data.forEach(person => {
  const tr = document.createElement("tr");

  tr.innerHTML = `
    <td>${person.name}</td>
    <td>${person.age}</td>
    <td>${person.city}</td>
  `;

  tbody.appendChild(tr);
});

// собираем таблицу
table.appendChild(thead);
table.appendChild(tbody);

// добавляем на страницу
document.body.appendChild(table);