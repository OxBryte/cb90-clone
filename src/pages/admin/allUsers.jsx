import { useEffect } from 'react';
import { selectToken } from '../../redux/userSlice';
import { useSelector } from 'react-redux';
import axios from 'axios';

export default function AllUsers() {

  const VITE_BASE_URL = import.meta.env.VITE_BASE_URL;
  const token = useSelector(selectToken);


  // async function fetchUser() {
  //   try {
  //     const response = await axios.get(`${VITE_BASE_URL}/users`, {
  //       headers: {
  //         Authorization: `Bearer ${token}`,
  //       },
  //     });

  //     if (response.status === 200) {
  //       return response.data; // Assuming the server returns user data in the response body
  //     } else {
  //       throw new Error('Failed to fetch user data');
  //     }
  //   } catch (error) {
  //     console.error('Error fetching user data:', error);
  //     throw error;
  //   }
  // }

  return (
    <>
      <h1>All Users</h1>
      <p>This is the All Users page</p>
      <p>Here are all the users:</p>
      <ul>
        <li>User 1</li>
        <li>User 2</li>
        <li>User 3</li>
      </ul>
    </>
  )
}
