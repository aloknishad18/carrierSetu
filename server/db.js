import fs from 'fs';
import path from 'path';
import crypto from 'crypto';

const DATA_DIR = path.resolve(process.cwd(), 'server', 'data');
const DB_FILE = path.join(DATA_DIR, 'db.json');
const AUTH_SECRET = process.env.AUTH_SECRET || 'careersetu_sih26044_secret_key_prod';

// Helper to hash passwords server-side
export function hashPassword(password) {
  return crypto.createHash('sha256').update(`${password}:${AUTH_SECRET}`).digest('hex');
}

// Ensure data directory exists
if (!fs.existsSync(DATA_DIR)) {
  fs.mkdirSync(DATA_DIR, { recursive: true });
}

// Pre-configured SIH Demo Users with Hashed Passwords
const defaultDemoUsers = [
  {
    id: 'DEMO-STU-001',
    email: 'student@careersetuu.demo',
    passwordHash: hashPassword('Student@123'),
    emailVerified: true,
    name: 'Aarav Sharma',
    role: 'student',
    avatar: 'https://images.unsplash.com/photo-1534528741775-53994a69daeb?w=150&auto=format&fit=crop&q=80',
    organization: 'Indian Institute of Technology, Delhi',
    createdAt: new Date().toISOString(),
    updatedAt: new Date().toISOString()
  },
  {
    id: 'DEMO-IND-002',
    email: 'industry@careersetuu.demo',
    passwordHash: hashPassword('Industry@123'),
    emailVerified: true,
    name: 'Priya Sen',
    role: 'industry',
    avatar: 'https://images.unsplash.com/photo-1573496359142-b8d87734a5a2?w=150&auto=format&fit=crop&q=80',
    organization: 'Tech Innovations Lab',
    createdAt: new Date().toISOString(),
    updatedAt: new Date().toISOString()
  },
  {
    id: 'DEMO-ACA-003',
    email: 'academia@careersetuu.demo',
    passwordHash: hashPassword('Academia@123'),
    emailVerified: true,
    name: 'Dr. Ramesh Kulkarni',
    role: 'academia',
    avatar: 'https://images.unsplash.com/photo-1500648767791-00dcc994a43e?w=150&auto=format&fit=crop&q=80',
    organization: 'Veermata Jijabai Technological Institute',
    createdAt: new Date().toISOString(),
    updatedAt: new Date().toISOString()
  },
  {
    id: 'DEMO-INS-004',
    email: 'institution@careersetuu.demo',
    passwordHash: hashPassword('Institution@123'),
    emailVerified: true,
    name: 'Dr. Sunita Rao',
    role: 'institution',
    avatar: 'https://images.unsplash.com/photo-1580489944761-15a19d654956?w=150&auto=format&fit=crop&q=80',
    organization: 'National Institute of Technology',
    createdAt: new Date().toISOString(),
    updatedAt: new Date().toISOString()
  },
  {
    id: 'DEMO-GOV-005',
    email: 'governance@careersetuu.demo',
    passwordHash: hashPassword('Governance@123'),
    emailVerified: true,
    name: 'Rajesh Verma, IAS',
    role: 'governance',
    avatar: 'https://images.unsplash.com/photo-1472099645785-5658abf4ff4e?w=150&auto=format&fit=crop&q=80',
    organization: 'Ministry of Education',
    createdAt: new Date().toISOString(),
    updatedAt: new Date().toISOString()
  }
];

const defaultData = {
  users: defaultDemoUsers,
  sessions: {},
  studentProfiles: {}
};

function readDb() {
  try {
    if (!fs.existsSync(DB_FILE)) {
      fs.writeFileSync(DB_FILE, JSON.stringify(defaultData, null, 2), 'utf-8');
      return defaultData;
    }
    const raw = fs.readFileSync(DB_FILE, 'utf-8');
    const parsed = JSON.parse(raw);
    
    // Ensure demo accounts exist
    defaultDemoUsers.forEach(demoUser => {
      const exists = parsed.users.some(u => u.email.toLowerCase() === demoUser.email.toLowerCase());
      if (!exists) {
        parsed.users.push(demoUser);
      } else {
        // Ensure passwordHash is up-to-date
        const idx = parsed.users.findIndex(u => u.email.toLowerCase() === demoUser.email.toLowerCase());
        parsed.users[idx].passwordHash = demoUser.passwordHash;
      }
    });
    
    return parsed;
  } catch (e) {
    console.error('Error reading DB:', e);
    return defaultData;
  }
}

function writeDb(data) {
  try {
    fs.writeFileSync(DB_FILE, JSON.stringify(data, null, 2), 'utf-8');
  } catch (e) {
    console.error('Error writing DB:', e);
  }
}

export const db = {
  findUserByEmail(email) {
    const data = readDb();
    return data.users.find(u => u.email.toLowerCase() === email.toLowerCase()) || null;
  },

  findUserById(id) {
    const data = readDb();
    return data.users.find(u => u.id === id) || null;
  },

  createUser({ email, password, name = '', role = 'student', organization = '' }) {
    const data = readDb();
    const newUser = {
      id: `USER-${Date.now().toString().slice(-6)}-${crypto.randomBytes(2).toString('hex')}`,
      email: email.toLowerCase(),
      passwordHash: hashPassword(password),
      emailVerified: true,
      name: name || email.split('@')[0],
      role,
      avatar: 'https://images.unsplash.com/photo-1535713875002-d1d0cf377fde?w=150&auto=format&fit=crop&q=80',
      organization: organization || 'CareerSetu Member',
      createdAt: new Date().toISOString(),
      updatedAt: new Date().toISOString()
    };
    data.users.push(newUser);
    writeDb(data);
    return newUser;
  },

  verifyPassword(user, password) {
    if (!user || !user.passwordHash) return false;
    const inputHash = hashPassword(password);
    return crypto.timingSafeEqual(
      Buffer.from(inputHash, 'hex'),
      Buffer.from(user.passwordHash, 'hex')
    );
  },

  createSession(userId) {
    const data = readDb();
    const sessionId = crypto.randomBytes(32).toString('hex');
    const now = Date.now();
    const expiresAt = now + 7 * 24 * 60 * 60 * 1000; // 7 days

    data.sessions[sessionId] = {
      id: sessionId,
      userId,
      createdAt: now,
      expiresAt
    };
    writeDb(data);
    return { sessionId, expiresAt };
  },

  findSession(sessionId) {
    const data = readDb();
    const session = data.sessions[sessionId];
    if (!session) return null;
    if (Date.now() > session.expiresAt) {
      delete data.sessions[sessionId];
      writeDb(data);
      return null;
    }
    const user = data.users.find(u => u.id === session.userId);
    return user ? { session, user } : null;
  },

  deleteSession(sessionId) {
    const data = readDb();
    delete data.sessions[sessionId];
    writeDb(data);
  },

  saveStudentProfile(userId, profileData) {
    const data = readDb();
    data.studentProfiles[userId] = {
      userId,
      ...profileData,
      updatedAt: new Date().toISOString()
    };
    writeDb(data);
    return data.studentProfiles[userId];
  },

  getStudentProfile(userId) {
    const data = readDb();
    return data.studentProfiles[userId] || null;
  }
};
