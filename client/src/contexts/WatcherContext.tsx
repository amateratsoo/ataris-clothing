import { useState, createContext, SetStateAction, ReactNode } from 'react';

interface WatcherContextProps {
  children: ReactNode;
}

interface WatcherProps {
  watcher: boolean;
  setWatcher: (value: SetStateAction<boolean>) => void;
}

const Watcher = createContext({} as WatcherProps);

function WatcherContext({ children }: WatcherContextProps) {
  const [watcher, setWatcher] = useState(false);

  return (
    <Watcher.Provider value={{
      watcher,
      setWatcher
    }}>
      {children}
    </Watcher.Provider>
  );
}

export { Watcher, WatcherContext }
