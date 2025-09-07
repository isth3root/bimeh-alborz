import { motion } from 'framer-motion';

const downloads = [
  { id: 1, name: 'فرم درخواست بیمه شخص ثالث', description: 'فرم کامل جهت درخواست صدور بیمه‌نامه شخص ثالث برای انواع وسایل نقلیه.' },
  { id: 2, name: 'فرم درخواست بیمه بدنه', description: 'فرم مخصوص درخواست صدور بیمه‌نامه بدنه شامل پوشش‌های اصلی و اضافی.' },
  { id: 3, name: 'فرم اعلام خسارت', description: 'فرم استاندارد جهت اعلام خسارت‌های مالی و جانی تحت پوشش بیمه‌نامه.' },
  { id: 4, name: 'فرم پیشنهاد بیمه عمر', description: 'فرم اولیه برای ثبت درخواست و دریافت مشاوره برای انواع بیمه‌های عمر.' }
];

const DownloadsPage = () => {
    return (
        <div className="p-4 sm:p-8 bg-gray-50">
            <div className="max-w-4xl mx-auto">
                <motion.h1
                    initial={{ opacity: 0, y: -20 }}
                    animate={{ opacity: 1, y: 0 }}
                    transition={{ duration: 0.5 }}
                    className="text-4xl font-bold mb-8 text-gray-800 text-center"
                >
                    دانلود فرم‌ها و مدارک
                </motion.h1>
                <div className="grid md:grid-cols-2 gap-6">
                    {downloads.map((download, index) => (
                        <motion.div
                            key={download.id}
                            initial={{ opacity: 0, y: 50 }}
                            animate={{ opacity: 1, y: 0 }}
                            transition={{ duration: 0.5, delay: index * 0.1 }}
                            className="bg-white p-6 rounded-lg shadow-md flex flex-col"
                        >
                            <h2 className="text-xl font-bold mb-2 text-indigo-700">{download.name}</h2>
                            <p className="text-gray-600 mb-4 flex-grow">{download.description}</p>
                            <a href="#" download className="mt-auto text-center w-full bg-indigo-600 text-white px-6 py-2 rounded-md hover:bg-indigo-700 transition-colors duration-300 font-semibold">
                                دانلود PDF
                            </a>
                        </motion.div>
                    ))}
                </div>
            </div>
        </div>
    );
};

export default DownloadsPage;
