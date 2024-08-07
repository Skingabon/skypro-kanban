const url = "https://wedev-api.sky.pro/api";

export function getTasks({ token }) {
  const response = fetch(url + "/kanban", {
    headers: {
      Authorization: `Bearer ${token}`,
    },
  });
  return response.then((data) => {
    if (!data.ok) {
      throw new Error("Не удалось загрузить данные, попробуйте позже");
    }
    return data.json();
  });
}

export function loginApi({ login, password }) {
  return fetch(url + "/user/login", {
    method: "POST",
    body: JSON.stringify({
      login,
      password,
    }),
  }).then((response) => {
    if (response.ok) {
      return response.json();
    }
    if (response.status === 400) {
      throw new Error("Неверный логин или пароль");
    }
    if (response.status === 500) {
      throw new Error("Ошибка сервера");
    }
  });
}

export function registerApi({ login, name, password }) {
  return fetch(url + "/user", {
    method: "POST",
    body: JSON.stringify({
      name,
      login,
      password,
    }),
  }).then((response) => {
    if (response.status === 400) {
      throw new Error("Такой пользователь уже существует");
    }
    if (response.status === 500) {
      throw new Error("Сервер не доступен");
    }
    if (response.status !== 201) {
      throw new Error("Что-то пошло не так");
    }
    return response.json();
  });
}

export function addCard({ token, task }) {
  return fetch(url + "/kanban", {
    method: "POST",
    body: JSON.stringify(task),
    headers: {
      Authorization: `Bearer ${token}`,
    },
  }).then((response) => {
    if (response.ok) {
      return response.json();
    }
    if (response.status === 400) {
      throw new Error("Неверный логин или пароль");
    }
    if (response.status === 500) {
      throw new Error("Ошибка сервера");
    }
    return response.json();
  });
}

export function editCard({ token, task }) {
  const { title, topic, status, description, date, _id } = task;
  return fetch(url + `/kanban/${_id}`, {
    method: "PUT",
    body: JSON.stringify({ title, topic, status, description, date }),
    headers: {
      Authorization: `Bearer ${token}`,
    },
  }).then((response) => {
    if (response.ok) {
      return response.json();
    }
    if (response.status === 400) {
      throw new Error("Неверный запрос");
    }
    if (response.status === 500) {
      throw new Error("Ошибка сервера");
    }
    if (response.status === 401) {
      throw new Error("Неверный токен");
    }
    return response.json();
  });
}

export function deleteCard({ token, taskId }) {
  return fetch(url + `/kanban/${taskId}`, {
    method: "DELETE",
    headers: {
      Authorization: `Bearer ${token}`,
    },
  }).then((response) => {
    if (response.ok) {
      return response.json();
    }
    if (response.status === 400) {
      throw new Error("Неверный запрос");
    }
    if (response.status === 401) {
      throw new Error("Неверный токен");
    }
    if (response.status === 500) {
      throw new Error("Ошибка сервера");
    }
    return response.json();
  });
}
