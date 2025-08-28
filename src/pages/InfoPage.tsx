const InfoPage = () => {
  return (
    <div className="p-4 sm:p-8">
      <h1 className="text-3xl font-bold mb-8">اطلاعات و قوانین بیمه</h1>
      <div className="space-y-4">
        <div className="p-4 bg-gray-100 rounded-lg">
          <h2 className="text-xl font-bold mb-2">قانون جدید بیمه شخص ثالث</h2>
          <p>طبق قانون جدید، سقف تعهدات بیمه شخص ثالث افزایش یافته است. برای اطلاعات بیشتر به وب‌سایت بیمه مرکزی مراجعه کنید.</p>
        </div>
        <div className="p-4 bg-gray-100 rounded-lg">
          <h2 className="text-xl font-bold mb-2">شرایط فسخ قرارداد بیمه</h2>
          <p>برای فسخ قرارداد بیمه، باید درخواست کتبی خود را به شرکت بیمه ارائه دهید. شرایط و ضوابط مربوط به فسخ در قرارداد شما ذکر شده است.</p>
        </div>
      </div>
    </div>
  );
};

export default InfoPage;
