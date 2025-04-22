import React, { useEffect, useState } from 'react';
import { getUsers } from '../api/userApi';
import scss from './Users.module.scss';

const Users = () => {
  const [users, setUsers] = useState([]);
  const [search, setSearch] = useState('');
  const [loading, setLoading] = useState(true);
  const [error, setError] = useState(null);

  useEffect(() => {
    getUsers()
      .then(res => setUsers(res.data))
      .catch(err => setError(err.message))
      .finally(() => setLoading(false));
  }, []);

  const filteredUsers = users.filter(user =>
    user.name.toLowerCase().includes(search.toLowerCase())
  );

  if (loading) return <p>Загрузка...</p>;
  if (error) return <p>Ошибка: {error}</p>;

  return (
    <div className={scss.users}>
      <h2>Список пользователей</h2>
      <input
        type="text"
        className={scss.searchInput}
        placeholder="Поиск по имени"
        value={search}
        onChange={(e) => setSearch(e.target.value)}
      />
      <ul>
        {filteredUsers.map(user => (
          <li key={user.id}>
            <strong>{user.name}</strong>{' '}
            <span>({user.email})</span>
          </li>
        ))}
      </ul>
    </div>
  );
};

export default Users;

