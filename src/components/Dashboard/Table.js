import React from 'react';

const Table = ({ data, handleEdit, handleDelete }) => {
  return (
    <table>
      <thead>
        <tr>
          <th>NumM</th>
          <th>First Name</th>
          <th>Last Name</th>
          <th>Address</th>
          <th>City</th>
          <th>Date of Birth</th>
          <th>Actions</th>
        </tr>
      </thead>
      <tbody>
        {data.map((membre) => (
          <tr key={membre.NumM}>
            <td>{membre.NumM}</td>
            <td>{membre.PrenomM}</td>
            <td>{membre.NomM}</td>
            <td>{membre.AdresseM}</td>
            <td>{membre.VilleM}</td>
            <td>{new Date(membre.DateDeNaissanceM).toLocaleDateString()}</td>
            <td>
              <button onClick={() => handleEdit(membre.NumM)}>Edit</button>
              <button onClick={() => handleDelete(membre.NumM)}>Delete</button>
            </td>
          </tr>
        ))}
      </tbody>
    </table>
  );
};

export default Table;
