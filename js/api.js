// js/api.js

// 나중에 Render로 옮기면 이 값만 바꿔주면 됨
const API_BASE = 'http://localhost:4000';

function getToken() {
  return localStorage.getItem('authToken');
}

function setToken(token) {
  localStorage.setItem('authToken', token);
}

function clearToken() {
  localStorage.removeItem('authToken');
}

// 공통 GET
async function apiGet(path) {
  const res = await fetch(API_BASE + path, {
    headers: {
      'Authorization': 'Bearer ' + getToken()
    }
  });
  const data = await res.json();
  if (!res.ok) throw data;
  return data;
}

// 공통 POST
async function apiPost(path, body) {
  const res = await fetch(API_BASE + path, {
    method: 'POST',
    headers: {
      'Content-Type': 'application/json',
      'Authorization': 'Bearer ' + getToken()
    },
    body: JSON.stringify(body)
  });
  const data = await res.json();
  if (!res.ok) throw data;
  return data;
}

// 회원가입
async function register(username, password) {
  const res = await fetch(API_BASE + '/api/auth/register', {
    method: 'POST',
    headers: { 'Content-Type': 'application/json' },
    body: JSON.stringify({ username, password })
  });
  const data = await res.json();
  if (!res.ok) throw data;
  setToken(data.token);
  return data.user;
}

// 로그인
async function login(username, password) {
  const res = await fetch(API_BASE + '/api/auth/login', {
    method: 'POST',
    headers: { 'Content-Type': 'application/json' },
    body: JSON.stringify({ username, password })
  });
  const data = await res.json();
  if (!res.ok) throw data;
  setToken(data.token);
  return data.user;
}

// 로그인 유저 정보 확인용
async function fetchMe() {
  return apiGet('/api/me');
}
