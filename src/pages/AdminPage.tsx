import { useState } from 'react';
import { useAppContext } from '../hooks/useAppContext';
import Table from '../components/Table';
import type { User, Installment, BlogPost } from '../types';

const AdminPage = () => {
    const {
        users, addUser, deleteUser, updateInstallmentStatus,
        blogPosts, addBlogPost, updateBlogPost, deleteBlogPost
    } = useAppContext();

    const [selectedUser, setSelectedUser] = useState<User | null>(null);
    const [view, setView] = useState('installments'); // installments, users, blog

    // State for new user form
    const [newUserName, setNewUserName] = useState('');
    const [newUserNationalId, setNewUserNationalId] = useState('');

    // State for new/edit blog post form
    const [editingPost, setEditingPost] = useState<BlogPost | null>(null);
    const [postTitle, setPostTitle] = useState('');
    const [postSummary, setPostSummary] = useState('');
    const [postContent, setPostContent] = useState('');

    const handleAddUser = (e: React.FormEvent) => {
        e.preventDefault();
        if (newUserName && newUserNationalId) {
            addUser({ name: newUserName, nationalId: newUserNationalId });
            setNewUserName('');
            setNewUserNationalId('');
        }
    };

    const handleSavePost = (e: React.FormEvent) => {
        e.preventDefault();
        if (!postTitle || !postSummary || !postContent) return;

        if (editingPost) {
            updateBlogPost(editingPost.id, { ...editingPost, title: postTitle, summary: postSummary, content: postContent });
        } else {
            addBlogPost({ title: postTitle, summary: postSummary, content: postContent });
        }
        setEditingPost(null);
        setPostTitle('');
        setPostSummary('');
        setPostContent('');
    };

    const handleEditPost = (post: BlogPost) => {
        setEditingPost(post);
        setPostTitle(post.title);
        setPostSummary(post.summary);
        setPostContent(post.content);
    };

    const renderUserManagement = () => (
        <>
            <h1 className="text-3xl font-bold mb-8 text-gray-800">مدیریت کاربران</h1>
            <div className="bg-white p-6 rounded-lg shadow-md mb-8">
                <h2 className="text-2xl font-bold mb-4 text-gray-700">افزودن کاربر جدید</h2>
                <form onSubmit={handleAddUser} className="flex flex-col sm:flex-row gap-4">
                    <input type="text" placeholder="نام و نام خانوادگی" value={newUserName} onChange={(e) => setNewUserName(e.target.value)} className="flex-grow px-3 py-2 border border-gray-300 rounded-md focus:ring-primary-500" />
                    <input type="text" placeholder="کد ملی" value={newUserNationalId} onChange={(e) => setNewUserNationalId(e.target.value)} className="flex-grow px-3 py-2 border border-gray-300 rounded-md focus:ring-primary-500" />
                    <button type="submit" className="bg-secondary-500 text-white px-6 py-2 rounded-md hover:bg-secondary-600">افزودن</button>
                </form>
            </div>
            <div className="bg-white p-6 rounded-lg shadow-md">
                <h2 className="text-2xl font-bold mb-4 text-gray-700">لیست کاربران</h2>
                <ul className="space-y-2">{users.map(user => (<li key={user.id} className="flex justify-between items-center p-3 bg-gray-100 rounded-md"><span>{user.name} - {user.nationalId}</span><button onClick={() => deleteUser(user.id)} className="text-red-500 hover:text-red-700">حذف</button></li>))}</ul>
            </div>
        </>
    );

    const renderBlogManagement = () => (
        <>
            <h1 className="text-3xl font-bold mb-8 text-gray-800">مدیریت بلاگ</h1>
            <div className="bg-white p-6 rounded-lg shadow-md mb-8">
                <h2 className="text-2xl font-bold mb-4 text-gray-700">{editingPost ? 'ویرایش پست' : 'افزودن پست جدید'}</h2>
                <form onSubmit={handleSavePost} className="flex flex-col gap-4">
                    <input type="text" placeholder="عنوان" value={postTitle} onChange={(e) => setPostTitle(e.target.value)} className="px-3 py-2 border border-gray-300 rounded-md focus:ring-primary-500" />
                    <input type="text" placeholder="خلاصه" value={postSummary} onChange={(e) => setPostSummary(e.target.value)} className="px-3 py-2 border border-gray-300 rounded-md focus:ring-primary-500" />
                    <textarea placeholder="محتوا" value={postContent} onChange={(e) => setPostContent(e.target.value)} className="px-3 py-2 border border-gray-300 rounded-md h-32 focus:ring-primary-500"></textarea>
                    <div className="flex gap-4">
                        <button type="submit" className="bg-secondary-500 text-white px-6 py-2 rounded-md hover:bg-secondary-600">{editingPost ? 'ذخیره تغییرات' : 'افزودن'}</button>
                        {editingPost && <button type="button" onClick={() => { setEditingPost(null); setPostTitle(''); setPostSummary(''); setPostContent(''); }} className="bg-gray-500 text-white px-6 py-2 rounded-md hover:bg-gray-600">لغو</button>}
                    </div>
                </form>
            </div>
            <div className="bg-white p-6 rounded-lg shadow-md">
                <h2 className="text-2xl font-bold mb-4 text-gray-700">لیست پست‌ها</h2>
                <ul className="space-y-2">{blogPosts.map(post => (<li key={post.id} className="flex justify-between items-center p-3 bg-gray-100 rounded-md"><span>{post.title}</span><div className="flex gap-2"><button onClick={() => handleEditPost(post)} className="text-primary-500 hover:text-primary-700">ویرایش</button><button onClick={() => deleteBlogPost(post.id)} className="text-red-500 hover:text-red-700">حذف</button></div></li>))}</ul>
            </div>
        </>
    );

    const renderInstallmentManagement = () => {
        const adminColumns = [{ header: 'ردیف', accessor: 'id' }, { header: 'تاریخ', accessor: 'date' }, { header: 'مبلغ قسط', accessor: 'installmentAmount' }, { header: 'وضعیت', accessor: 'status' }, { header: 'عملیات', accessor: 'action' }];
        const renderAdminCell = (installment: Installment, column: { accessor: string }) => {
            if (column.accessor === 'action') return installment.status === 'در انتظار پرداخت' && <button onClick={() => updateInstallmentStatus(selectedUser!.id, installment.id, 'پرداخت شده')} className="px-4 py-2 text-sm font-medium text-white bg-secondary-600 rounded-md hover:bg-secondary-700">تغییر به پرداخت شده</button>;
            if (column.accessor === 'status') return <span className={`px-2 inline-flex text-xs leading-5 font-semibold rounded-full ${installment.status === 'پرداخت شده' ? 'bg-secondary-100 text-secondary-800' : 'bg-red-100 text-red-800'}`}>{installment.status}</span>;
            return installment[column.accessor as keyof Installment];
        };

        if (selectedUser) {
            return (
                <>
                    <button onClick={() => setSelectedUser(null)} className="mb-4 text-primary-600 hover:text-primary-800">&larr; بازگشت به لیست کاربران</button>
                    <h1 className="text-3xl font-bold mb-8 text-gray-800">مدیریت اقساط برای {selectedUser.name}</h1>
                    <div className="bg-white p-6 rounded-lg shadow-md"><Table<Installment> columns={adminColumns} data={selectedUser.installments} renderCell={renderAdminCell} /></div>
                </>
            );
        }

        return (
            <>
                <h1 className="text-3xl font-bold text-gray-800">پنل ادمین - انتخاب کاربر</h1>
                <div className="bg-white p-6 rounded-lg shadow-md mt-8"><ul className="space-y-4">{users.map((user) => (<li key={user.id} onClick={() => setSelectedUser(user)} className="p-4 bg-gray-100 rounded-lg hover:bg-gray-200 transition cursor-pointer"><p className="font-bold text-gray-800">{user.name}</p><p className="text-sm text-gray-600">کد ملی: {user.nationalId}</p></li>))}</ul></div>
            </>
        );
    };

    return (
        <div className="p-4 sm:p-8 bg-gray-50 min-h-screen">
            <div className="flex justify-center space-x-4 rounded-lg bg-gray-200 p-1 mb-8">
                <button onClick={() => setView('installments')} className={`w-full py-2 rounded-md transition ${view === 'installments' ? 'bg-white shadow' : 'text-gray-600'}`}>مدیریت اقساط</button>
                <button onClick={() => setView('users')} className={`w-full py-2 rounded-md transition ${view === 'users' ? 'bg-white shadow' : 'text-gray-600'}`}>مدیریت کاربران</button>
                <button onClick={() => setView('blog')} className={`w-full py-2 rounded-md transition ${view === 'blog' ? 'bg-white shadow' : 'text-gray-600'}`}>مدیریت بلاگ</button>
            </div>
            {view === 'installments' && renderInstallmentManagement()}
            {view === 'users' && renderUserManagement()}
            {view === 'blog' && renderBlogManagement()}
        </div>
    );
};

export default AdminPage;
