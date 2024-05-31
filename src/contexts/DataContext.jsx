import { useState, useEffect, useContext, createContext } from 'react';
import supabase from '../services/supabase';
import Error from '../components/Error';
import MainLayout from '../components/layout/MainLayout';

const DataContext = createContext();

export function DataProvider({ children }) {
  const [allTask, setAllTask] = useState([]);
  const [isError, setIsError] = useState();
  useEffect(() => {
    async function getTasks() {
      try {
        let { data } = await supabase.from('tasks').select('*');
        setAllTask(data);
        setIsError(false);
        console.log('Successfully fetched data from supabase ');
      } catch (e) {
        setIsError(true);
        console.log(
          'There was an error getting data from Supabase. Message: ' + e,
        );
      }
    }
    getTasks();
  }, []);

  if (isError)
    return (
      <MainLayout>
        <Error />
      </MainLayout>
    );

  return (
    <DataContext.Provider value={{ allTask, setAllTask }}>
      {children}
    </DataContext.Provider>
  );
}

export const useData = () => useContext(DataContext);
