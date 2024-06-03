const token = "ksdfsksdfjfsdjk";
const url = "https://wedev-api.sky.pro";
export function getTasks() {
  const response = fetch(url + "/kanban", {
    headers: {
      Authorization: `Bearer ${token}`,
    },
  });
  return response.then((data) => data.json());
}

export function loginApi({ login, password }) {
  return fetch(url + "/login", {
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
  return fetch(url, {
    method: "POST",
    body: JSON.stringify({
      login,
      name,
      password,
    }),
  }).then((response) => {
    if (response.status === 400) {
      throw new Error("Такой пользователь уже существует");
    }
    return response.json();
  });
}
