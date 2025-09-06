export interface Installment {
  id: number;
  date: string;
  price: string;
  installmentAmount: string;
  status: 'پرداخت شده' | 'در انتظار پرداخت';
}

export interface User {
  id: number;
  name: string;
  nationalId: string;
  installments: Installment[];
}

export interface BlogPost {
    id: number;
    title: string;
    summary: string;
    content: string;
}

export interface AppContextType {
  users: User[];
  blogPosts: BlogPost[];
  addUser: (user: Omit<User, 'id' | 'installments'>) => void;
  deleteUser: (userId: number) => void;
  updateInstallmentStatus: (userId: number, installmentId: number, status: 'پرداخت شده' | 'در انتظار پرداخت') => void;
  addBlogPost: (post: Omit<BlogPost, 'id'>) => void;
  updateBlogPost: (postId: number, post: BlogPost) => void;
  deleteBlogPost: (postId: number) => void;
}
