import http from 'k6/http';
import { check, sleep } from 'k6';
import { SharedArray } from 'k6/data';

export const options = {
  stages: [
    { duration: '20s', target: 20 }, 
    { duration: '2m',  target: 20 }, 
    { duration: '10s', target: 0 }, 
  ],
  thresholds: {
    http_req_duration: ['p(95)<800'], 
  },
};

const data = new SharedArray('users', function () {
  return [
    { user: 'user1_ebac', pass: 'psw!ebac@test' },
    { user: 'user2_ebac', pass: 'psw!ebac@test' },
    { user: 'user3_ebac', pass: 'psw!ebac@test' },
    { user: 'user4_ebac', pass: 'psw!ebac@test' },
    { user: 'user5_ebac', pass: 'psw!ebac@test' },
  ];
});

export default function () {
  const BASE_URL = 'http://localhost';

  const resHome = http.get(BASE_URL);
  
  check(resHome, {
    'Home: status é 200': (r) => r.status === 200,
    'Home: corpo não está vazio': (r) => r.body.length > 0, 
  });

  sleep(1);

  const resAccount = http.get(`${BASE_URL}/minha-conta/`);
  
  check(resAccount, {
    'Minha Conta: status é 200': (r) => r.status === 200,
  });

  sleep(1);
}