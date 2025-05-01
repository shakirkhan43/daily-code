import React from "react";
import usersData from "./ProductList.json"; // JSON import
import "./ProductList.css"; // CSS import

function ProductList() {
  return (
    <div className="container">
      <h1>User List</h1>
      {usersData.map((user) => {
        return (
          <div key={user.id} className="card">
            <h2>{user.name}</h2>
            <p>
              <strong>Username:</strong> {user.username}
            </p>
            <p>
              <strong>Email:</strong> {user.email}
            </p>
            <p>
              <strong>Address:</strong>
            </p>
            <ul>
              <li>
                <strong>Street:</strong> {user.address.street}
              </li>
              <li>
                <strong>Suite:</strong> {user.address.suite}
              </li>
              <li>
                <strong>City:</strong> {user.address.city}
              </li>
              <li>
                <strong>Zipcode:</strong> {user.address.zipcode}
              </li>
              <li>
                <strong>Geo Coordinates:</strong> Lat: {user.address.geo.lat},
                Lng: {user.address.geo.lng}
              </li>
            </ul>
          </div>
        );
      })}
    </div>
  );
}

export default ProductList;
