import "./App.css";
import contactsFromJSON from "./contacts";
import { useState } from "react";

function App() {
  const startingArray = contactsFromJSON.slice(0, 5);
  const restArray = contactsFromJSON.slice(5, -1);

  console.log("contacs from JSON:", startingArray);
  const [contacts, setContacts] = useState(startingArray);

  const randomContact = (restArray) => {
    setContacts(restArray(Math.floor(Math.random() * restArray.length)));
  };

  return (
    <div className="App">
      <h1>IronContacts</h1>
      <button onClick={randomContact}>Add Random Contact</button>
      <table>
        <thead>
          <tr>
            <th>Picture</th>
            <th>Name</th>
            <th>Popularity</th>
            <th>Won an Oscar</th>
            <th>Won an Emmy</th>
          </tr>
        </thead>
        <tbody>
          {contacts.map((contact) => {
            return (
              <tr key={contact.id}>
                <td>
                  <img
                    src={contact.pictureUrl}
                    alt={contact.name}
                    style={{ width: "18%" }}
                  />
                </td>
                <td>
                  <span>{contact.name}</span>
                </td>
                <td>
                  <span>{contact.popularity}</span>
                </td>
                <td>
                  <span>{contact.wonOscar && <p>🏆</p>}</span>
                </td>
                <td>
                  <span>{contact.wonEmmy && <p>🏆</p>}</span>
                </td>
              </tr>
            );
          })}
        </tbody>
      </table>
    </div>
  );
}

export default App;
