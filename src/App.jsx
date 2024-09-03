import { Provider } from "react-redux";
import { PersistGate } from "redux-persist/integration/react";
import { store, persistor } from "./redux/store";
import ContactsForm from "./components/ContactsForm";
import ContactList from "./components/ContactList";
import SearchBox from "./components/SearchBox";
import styles from "./App.module.css";

const App = () => {
  return (
    <Provider store={store}>
      <PersistGate loading={null} persistor={persistor}>
        <div className={styles.component}>
          <h1 className={styles.title}>Phonebook</h1>
          <ContactsForm />
          <SearchBox />
          <ContactList />
        </div>
      </PersistGate>
    </Provider>
  );
};

export default App;
