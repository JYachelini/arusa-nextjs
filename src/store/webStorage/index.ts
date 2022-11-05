import createWebStorage from 'redux-persist/lib/storage/createWebStorage';

interface CreateNoopStorage {
  getItem: (_key: any) => Promise<null>;
  setItem: (_key: any, value: any) => Promise<any>;
  removeItem: (_key: any) => Promise<void>;
}

const createNoopStorage = (): CreateNoopStorage => {
  return {
    async getItem(_key: any) {
      return await Promise.resolve(null);
    },
    async setItem(_key: any, value: any) {
      return await Promise.resolve(value);
    },
    async removeItem(_key: any) {
      return await Promise.resolve();
    }
  };
};

const storage =
  typeof window !== 'undefined'
    ? createWebStorage('local')
    : createNoopStorage();

export default storage;
