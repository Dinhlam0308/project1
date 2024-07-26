import Dexie from 'dexie';

export const db = new Dexie('react-project');
db.version(1).stores({
    user: '++id, name, age,email',
    room: '++id, name, address'
});
