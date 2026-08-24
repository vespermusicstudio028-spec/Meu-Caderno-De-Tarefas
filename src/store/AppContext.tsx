import React, { createContext, useContext, useEffect, useState } from 'react';
import { Profile, TaskResult, PortugueseProgress } from '../types';

interface AppContextType {
  profile: Profile | null;
  tasks: TaskResult[];
  tabuadaProgress: Record<string, number>;
  adicaoProgress: Record<string, number>;
  subtracaoProgress: Record<string, number>;
  divisaoProgress: Record<string, number>;
  armarEfetuarProgress: Record<string, number>;
  problemasProgress: Record<string, number>;
  portugueseProgress: PortugueseProgress;
  parentsUnlocked: boolean;
  studyDaysCount: number;
  saveProfile: (profile: Profile) => void;
  saveTask: (task: TaskResult) => void;
  clearHistory: () => void;
  advanceTabuadaDay: (n: number) => void;
  advanceAdicaoDay: (n: number) => void;
  advanceSubtracaoDay: (n: number) => void;
  advanceDivisaoDay: (n: number) => void;
  advanceArmarEfetuarDay: (op: string) => void;
  advanceProblemasDay: (op: string) => void;
  resetApp: () => void;
  unlockParents: () => void;
  lockParents: () => void;
  setStudyDaysCount: (days: number) => void;
  updatePortugueseProgress: (grade: string, unitId: string, progress: any) => void;
}

const AppContext = createContext<AppContextType | undefined>(undefined);

export function AppProvider({ children }: { children: React.ReactNode }) {
  const [profile, setProfile] = useState<Profile | null>(() => {
    const saved = localStorage.getItem('@caderno:profile');
    return saved ? JSON.parse(saved) : null;
  });

  const [tasks, setTasks] = useState<TaskResult[]>(() => {
    const saved = localStorage.getItem('@caderno:tasks');
    return saved ? JSON.parse(saved) : [];
  });

  const [tabuadaProgress, setTabuadaProgress] = useState<Record<string, number>>(() => {
    const saved = localStorage.getItem('@caderno:tabuadaProgress');
    return saved ? JSON.parse(saved) : {};
  });
  const [adicaoProgress, setAdicaoProgress] = useState<Record<string, number>>(() => {
    const saved = localStorage.getItem('@caderno:adicaoProgress');
    return saved ? JSON.parse(saved) : {};
  });
  const [subtracaoProgress, setSubtracaoProgress] = useState<Record<string, number>>(() => {
    const saved = localStorage.getItem('@caderno:subtracaoProgress');
    return saved ? JSON.parse(saved) : {};
  });
  const [divisaoProgress, setDivisaoProgress] = useState<Record<string, number>>(() => {
    const saved = localStorage.getItem('@caderno:divisaoProgress');
    return saved ? JSON.parse(saved) : {};
  });
  const [armarEfetuarProgress, setArmarEfetuarProgress] = useState<Record<string, number>>(() => {
    const saved = localStorage.getItem('@caderno:armarEfetuarProgress');
    return saved ? JSON.parse(saved) : {};
  });
  const [problemasProgress, setProblemasProgress] = useState<Record<string, number>>(() => {
    const saved = localStorage.getItem('@caderno:problemasProgress');
    return saved ? JSON.parse(saved) : {};
  });

  const [portugueseProgress, setPortugueseProgress] = useState<PortugueseProgress>(() => {
    const saved = localStorage.getItem('@caderno:portugueseProgress');
    return saved ? JSON.parse(saved) : {};
  });

  const [parentsUnlocked, setParentsUnlocked] = useState<boolean>(() => {
    return sessionStorage.getItem('@caderno:parentsUnlocked') === 'true';
  });

  const [studyDaysCount, _setStudyDaysCount] = useState<number>(() => {
    const saved = localStorage.getItem('@caderno:studyDaysCount');
    return saved ? parseInt(saved, 10) : 4;
  });

  const setStudyDaysCount = (days: number) => {
    _setStudyDaysCount(days);
    localStorage.setItem('@caderno:studyDaysCount', days.toString());
  };

  useEffect(() => {
    if (profile) {
      localStorage.setItem('@caderno:profile', JSON.stringify(profile));
    }
  }, [profile]);

  useEffect(() => {
    localStorage.setItem('@caderno:tasks', JSON.stringify(tasks));
  }, [tasks]);

  useEffect(() => {
    localStorage.setItem('@caderno:tabuadaProgress', JSON.stringify(tabuadaProgress));
  }, [tabuadaProgress]);
  
  useEffect(() => {
    localStorage.setItem('@caderno:adicaoProgress', JSON.stringify(adicaoProgress));
  }, [adicaoProgress]);
  
  useEffect(() => {
    localStorage.setItem('@caderno:subtracaoProgress', JSON.stringify(subtracaoProgress));
  }, [subtracaoProgress]);
  
  useEffect(() => {
    localStorage.setItem('@caderno:divisaoProgress', JSON.stringify(divisaoProgress));
  }, [divisaoProgress]);
  
  useEffect(() => {
    localStorage.setItem('@caderno:armarEfetuarProgress', JSON.stringify(armarEfetuarProgress));
  }, [armarEfetuarProgress]);
  
  useEffect(() => {
    localStorage.setItem('@caderno:problemasProgress', JSON.stringify(problemasProgress));
  }, [problemasProgress]);

  useEffect(() => {
    localStorage.setItem('@caderno:portugueseProgress', JSON.stringify(portugueseProgress));
  }, [portugueseProgress]);

  const updatePortugueseProgress = (grade: string, unitId: string, unitProgress: any) => {
    setPortugueseProgress(prev => ({
      ...prev,
      [grade]: {
        ...(prev[grade] || {}),
        [unitId]: unitProgress
      }
    }));
  };

  const saveProfile = (newProfile: Profile) => {
    setProfile(newProfile);
  };

  const saveTask = (task: TaskResult) => {
    setTasks(prev => {
      // Check if task exists (for retries or overwriting, though we usually append)
      const exists = prev.findIndex(t => t.id === task.id);
      if (exists >= 0) {
        const newTasks = [...prev];
        newTasks[exists] = task;
        return newTasks;
      }
      return [task, ...prev];
    });
  };

  const clearHistory = () => {
    setTasks([]);
  };

  const resetApp = () => {
    setProfile(null);
    setTasks([]);
    setTabuadaProgress({});
    setAdicaoProgress({});
    setSubtracaoProgress({});
    setDivisaoProgress({});
    setArmarEfetuarProgress({});
    setProblemasProgress({});
    setPortugueseProgress({});
    localStorage.removeItem('@caderno:profile');
    localStorage.removeItem('@caderno:tasks');
    localStorage.removeItem('@caderno:tabuadaProgress');
    localStorage.removeItem('@caderno:adicaoProgress');
    localStorage.removeItem('@caderno:subtracaoProgress');
    localStorage.removeItem('@caderno:divisaoProgress');
    localStorage.removeItem('@caderno:armarEfetuarProgress');
    localStorage.removeItem('@caderno:problemasProgress');
    localStorage.removeItem('@caderno:portugueseProgress');
    localStorage.removeItem('@caderno:pin');
    lockParents();
  };

  const advanceTabuadaDay = (n: number) => {
    setTabuadaProgress(prev => {
      const current = prev[String(n)] || 1;
      return { ...prev, [String(n)]: current + 1 };
    });
  };

  const advanceAdicaoDay = (n: number) => {
    setAdicaoProgress(prev => {
      const current = prev[String(n)] || 1;
      return { ...prev, [String(n)]: current + 1 };
    });
  };

  const advanceSubtracaoDay = (n: number) => {
    setSubtracaoProgress(prev => {
      const current = prev[String(n)] || 1;
      return { ...prev, [String(n)]: current + 1 };
    });
  };

  const advanceDivisaoDay = (n: number) => {
    setDivisaoProgress(prev => {
      const current = prev[String(n)] || 1;
      return { ...prev, [String(n)]: current + 1 };
    });
  };

  const advanceArmarEfetuarDay = (op: string) => {
    setArmarEfetuarProgress(prev => {
      const current = prev[op] || 1;
      return { ...prev, [op]: current + 1 };
    });
  };

  const advanceProblemasDay = (op: string) => {
    setProblemasProgress(prev => {
      const current = prev[op] || 1;
      return { ...prev, [op]: current + 1 };
    });
  };

  const unlockParents = () => {
    setParentsUnlocked(true);
    sessionStorage.setItem('@caderno:parentsUnlocked', 'true');
  };

  const lockParents = () => {
    setParentsUnlocked(false);
    sessionStorage.removeItem('@caderno:parentsUnlocked');
  };

  return (
    <AppContext.Provider value={{ profile, tasks, tabuadaProgress, adicaoProgress, subtracaoProgress, divisaoProgress, armarEfetuarProgress, problemasProgress, portugueseProgress, parentsUnlocked, studyDaysCount, saveProfile, saveTask, clearHistory, advanceTabuadaDay, advanceAdicaoDay, advanceSubtracaoDay, advanceDivisaoDay, advanceArmarEfetuarDay, advanceProblemasDay, resetApp, unlockParents, lockParents, setStudyDaysCount, updatePortugueseProgress }}>
      {children}
    </AppContext.Provider>
  );
}

export function useAppContext() {
  const context = useContext(AppContext);
  if (context === undefined) {
    throw new Error('useAppContext must be used within an AppProvider');
  }
  return context;
}
