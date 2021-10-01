import { Route } from 'react-router';

const Greetings = () => {
  return (
    <section>
      <h1>GREETINGS, THE ASPIRING!</h1>
      {/* you can specify routes anywhere you want */}
      <Route path='/Greetings/new-mage'>
        <p>i see you came a loong way. Please sit, and listen.</p>
      </Route>
    </section>
  );
};

export default Greetings;
