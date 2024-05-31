import MainLayout from './components/layout/MainLayout';
import Form from './components/Form';
import List from './components/layout/List';

export default function App() {
  return (
    <MainLayout>
      <main>
        <Form />
        <List />
      </main>
    </MainLayout>
  );
}
