import { useState, useEffect, useContext, createContext } from 'react';
import supabase from '../services/supabase';
import Error from '../components/Error';
import MainLayout from '../components/layout/MainLayout';

const DataContext = createContext();
const LoadingContext = createContext();

export function DataProvider({ children }) {
  const [allTasks, setAllTasks] = useState([]);
  const [isLoading, setIsLoading] = useState();
  const [isError, setIsError] = useState();
  useEffect(() => {
    setIsLoading(true);
    async function getTasks() {
      try {
        let { data } = await supabase
          .from('tasks')
          .select('*')
          .order('created_at');
        setAllTasks(data);
        setIsLoading(false);
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
    <DataContext.Provider value={{ allTasks, setAllTasks }}>
      <LoadingContext.Provider value={{ isLoading, setIsLoading }}>
        {children}
      </LoadingContext.Provider>
    </DataContext.Provider>
  );
}

export const useData = () => useContext(DataContext);
export const useLoading = () => useContext(LoadingContext);
