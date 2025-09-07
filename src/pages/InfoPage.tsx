import { motion } from 'framer-motion';

const rules = [
    {
        title: 'قانون جدید بیمه شخص ثالث',
        content: 'طبق قانون جدید، سقف تعهدات بیمه شخص ثالث افزایش یافته است. این به معنای پوشش بیشتر در صورت بروز حوادث است. برای اطلاعات بیشتر و مشاهده جزئیات کامل، به وب‌سایت بیمه مرکزی مراجعه کنید.'
    },
    {
        title: 'شرایط فسخ قرارداد بیمه',
        content: 'برای فسخ قرارداد بیمه، باید درخواست کتبی خود را به شرکت بیمه ارائه دهید. شرایط و ضوابط مربوط به فسخ، از جمله بازپرداخت حق بیمه، در قرارداد شما به طور کامل ذکر شده است.'
    },
    {
        title: 'بیمه بدنه و پوشش‌های اضافی',
        content: 'بیمه بدنه اختیاری است اما پوشش‌های بسیار مفیدی مانند سرقت، آتش‌سوزی و حوادث طبیعی را ارائه می‌دهد. شما می‌توانید پوشش‌های اضافی را متناسب با نیاز خود انتخاب کنید.'
    }
];

const InfoPage = () => {
    return (
        <div className="p-4 sm:p-8 bg-gray-50">
            <div className="max-w-4xl mx-auto">
                <motion.h1
                    initial={{ opacity: 0, y: -20 }}
                    animate={{ opacity: 1, y: 0 }}
                    transition={{ duration: 0.5 }}
                    className="text-4xl font-bold mb-8 text-gray-800 text-center"
                >
                    اطلاعات و قوانین بیمه
                </motion.h1>
                <div className="space-y-6">
                    {rules.map((rule, index) => (
                        <motion.div
                            key={index}
                            initial={{ opacity: 0, x: -50 }}
                            animate={{ opacity: 1, x: 0 }}
                            transition={{ duration: 0.5, delay: index * 0.2 }}
                            className="bg-white p-6 rounded-lg shadow-md"
                        >
                            <h2 className="text-2xl font-bold mb-3 text-indigo-700">{rule.title}</h2>
                            <p className="text-gray-600 leading-relaxed">{rule.content}</p>
                        </motion.div>
                    ))}
                </div>
            </div>
        </div>
    );
};

export default InfoPage;
