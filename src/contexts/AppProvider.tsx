import { useState } from 'react';
import type { ReactNode } from 'react';
import { AppContext } from './appContext';
import type { User, BlogPost, AppContextType } from '../types';
import { blogPosts as initialBlogPosts } from '../data/blogData';

const initialUsers: User[] = [
  {
    id: 1,
    name: 'علی رضایی',
    nationalId: '1234567890',
    role: 'user',
    installments: [
      { id: 1, date: '1403/01/15', price: '500,000 تومان', installmentAmount: '250,000 تومان', status: 'پرداخت شده' },
      { id: 2, date: '1403/02/15', price: '500,000 تومان', installmentAmount: '250,000 تومان', status: 'در انتظار پرداخت' },
    ],
  },
  {
    id: 2,
    name: 'مریم حسینی',
    nationalId: '0987654321',
    role: 'user',
    installments: [
      { id: 1, date: '1403/01/20', price: '1,000,000 تومان', installmentAmount: '500,000 تومان', status: 'پرداخت شده' },
      { id: 2, date: '1403/02/20', price: '1,000,000 تومان', installmentAmount: '500,000 تومان', status: 'پرداخت شده' },
      { id: 3, date: '1403/03/20', price: '1,000,000 تومان', installmentAmount: '500,000 تومان', status: 'در انتظار پرداخت' },
    ],
  },
  {
    id: 3,
    name: 'ادمین سیستم',
    nationalId: 'admin', // Using 'admin' as the username for the admin
    role: 'admin',
    installments: [],
  }
];

export const AppProvider = ({ children }: { children: ReactNode }) => {
  const [users, setUsers] = useState<User[]>(initialUsers);
  const [blogPosts, setBlogPosts] = useState<BlogPost[]>(initialBlogPosts);
  const [currentUser, setCurrentUser] = useState<User | null>(null);

  const login = (nationalId: string): User | null => {
    const user = users.find(u => u.nationalId === nationalId);
    if (user) {
        setCurrentUser(user);
        return user;
    }
    return null;
  };

  // User CRUD
  const addUser = (user: Omit<User, 'id' | 'installments' | 'role'>) => {
    const newUser: User = { ...user, id: Date.now(), installments: [], role: 'user' };
    setUsers([...users, newUser]);
  };

  const deleteUser = (userId: number) => {
    setUsers(users.filter(user => user.id !== userId));
  };

  const updateInstallmentStatus = (userId: number, installmentId: number, status: 'پرداخت شده' | 'در انتظار پرداخت') => {
    setUsers(
      users.map((user) =>
        user.id === userId
          ? { ...user, installments: user.installments.map((inst) => (inst.id === installmentId ? { ...inst, status } : inst)) }
          : user
      )
    );
  };

  // Blog CRUD
  const addBlogPost = (post: Omit<BlogPost, 'id'>) => {
    const newPost: BlogPost = { ...post, id: Date.now() };
    setBlogPosts([...blogPosts, newPost]);
  };

  const updateBlogPost = (postId: number, updatedPost: BlogPost) => {
    setBlogPosts(blogPosts.map(post => (post.id === postId ? updatedPost : post)));
  };

  const deleteBlogPost = (postId: number) => {
    setBlogPosts(blogPosts.filter(post => post.id !== postId));
  };

  const contextValue: AppContextType = {
    users,
    blogPosts,
    currentUser,
    login,
    addUser,
    deleteUser,
    updateInstallmentStatus,
    addBlogPost,
    updateBlogPost,
    deleteBlogPost
  };

  return (
    <AppContext.Provider value={contextValue}>
      {children}
    </AppContext.Provider>
  );
};
