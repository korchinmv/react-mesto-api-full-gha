const TOKEN = "5fed34a4-12fb-4e00-a0af-c237a59bdc22";
const URL = "https://mesto.nomoreparties.co/v1/cohort-61/";

class Api {
  constructor(URL, TOKEN) {
    this._URL = URL;
    this._TOKEN = TOKEN;
  }

  _getHeaders() {
    return {
      "Content-Type": "application/json",
      authorization: this._TOKEN,
    };
  }

  _getJson(res) {
    {
      if (res.ok) {
        return res.json();
      }
      return Promise.reject(`Ошибка: ${res.status} что то идет не по плану`);
    }
  }

  _request(url, options) {
    return fetch(url, options).then(this._getJson);
  }

  getUser() {
    const promise = fetch(`${this._URL}users/me`, {
      headers: this._getHeaders(),
    });
    return promise.then(this._getJson);
  }

  getCards() {
    const promise = fetch(`${this._URL}cards`, {
      headers: this._getHeaders(),
    });
    return promise.then(this._getJson);
  }

  sendProfile(data) {
    const promise = fetch(`${this._URL}users/me`, {
      method: "PATCH",
      headers: this._getHeaders(),
      body: JSON.stringify({
        name: data.name,
        about: data.about,
      }),
    });

    return promise.then(this._getJson);
  }

  sendCard(data) {
    const promise = fetch(`${this._URL}cards`, {
      method: "POST",
      headers: this._getHeaders(),
      body: JSON.stringify({
        name: data.name,
        link: data.link,
      }),
    });
    return promise.then(this._getJson);
  }

  deleteCard(id) {
    const promise = fetch(`${this._URL}cards/${id}`, {
      method: "DELETE",
      headers: this._getHeaders(),
    });
    return promise.then(this._getJson);
  }

  changeLikeCardStatus(id, isLiked) {
    if (isLiked === true) {
      return this.addLike(id);
    } else {
      return this.deleteLike(id);
    }
  }

  addLike(id) {
    const promise = fetch(`${this._URL}cards/${id}/likes`, {
      method: "PUT",
      headers: this._getHeaders(),
    });
    return promise.then(this._getJson);
  }

  deleteLike(id) {
    const promise = fetch(`${this._URL}cards/${id}/likes`, {
      method: "DELETE",
      headers: this._getHeaders(),
    });
    return promise.then(this._getJson);
  }

  setAvatar(avatar) {
    const promise = fetch(`${this._URL}users/me/avatar`, {
      method: "PATCH",
      headers: this._getHeaders(),
      body: JSON.stringify(avatar),
    });
    return promise.then(this._getJson);
  }
}

const api = new Api(URL, TOKEN);
export default api;
