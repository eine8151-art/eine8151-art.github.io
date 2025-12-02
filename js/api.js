// api.js
const API_BASE = window.location.origin;

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

  const ct = res.headers.get('content-type') || '';

  let data;
  if (ct.includes('application/json')) {
    // 정상 JSON 응답
    data = await res.json();
  } else {
    // 에러 페이지(HTML 등)인 경우
    const text = await res.text();
    data = { error: text };
  }

  if (!res.ok) {
    throw data;
  }
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

// 내 정보 확인용(자동 로그인 체크 등에 사용)
async function fetchMe() {
  return apiGet('/api/me');
}
