import "./App.css";
import contactsFromJSON from "./contacts";
import { useState } from "react";

function App() {
  const startingArray = contactsFromJSON.slice(0, 5);
  const restArray = contactsFromJSON.slice(5, -1);

  console.log("contacs from JSON:", startingArray);
  const [contacts, setContacts] = useState(startingArray);

  const randomContact = () => {
    const randomIndex = Math.floor(Math.random() * restArray.length - 1);
    const randomContact = restArray[randomIndex];
    console.log(randomContact);
    console.log("Random contact was triggered");
    setContacts([...contacts, randomContact]);
  };

  const sortByName = () => {
    const newArray = [...contacts].sort((a, b) => {
      if (b.name < a.name) {
        return 1;
      } else {
        return -1;
      }
    });
    setContacts(newArray);
    console.log("new Array", newArray);
  };

  const sortByPopularity = () => {
    const newArray = [...contacts].sort((a, b) => {
      if (b.popularity > a.popularity) {
        return 1;
      } else {
        return -1;
      }
    });
    setContacts(newArray);
    console.log("new Array", newArray);
  };

  const removeContact = () => {
    const newArray = [...contacts].sort((a, b) => {
      if (b.popularity > a.popularity) {
        return 1;
      } else {
        return -1;
      }
    });
    setContacts(newArray);
    console.log("new Array", newArray);
  };

  return (
    <div className="App">
      <h1>IronContacts</h1>
      <button onClick={randomContact}>Add Random Contact</button>
      <button onClick={sortByName}>Sort by name</button>
      <button onClick={sortByPopularity}>Sort by popularity</button>

      <table>
        <thead>
          <tr>
            <th>Picture</th>
            <th>Name</th>
            <th>Popularity</th>
            <th>Won an Oscar</th>
            <th>Won an Emmy</th>
            <th>Actions</th>
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
                  <span>{contact.wonEmmy && <p>🌟</p>}</span>
                </td>
                <td>
                  <button onClick={removeContact}>Delete</button>
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
