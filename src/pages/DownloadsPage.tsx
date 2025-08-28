const downloads = [
  { id: 1, name: 'فرم درخواست بیمه شخص ثالث', url: '#' },
  { id: 2, name: 'فرم درخواست بیمه بدنه', url: '#' },
  { id: 3, name: 'فرم اعلام خسارت', url: '#' },
];

const DownloadsPage = () => {
  return (
    <div className="p-4 sm:p-8">
      <h1 className="text-3xl font-bold mb-8">دانلود فرم‌ها</h1>
      <ul className="space-y-4">
        {downloads.map((download) => (
          <li key={download.id} className="flex items-center justify-between p-4 bg-gray-100 rounded-lg">
            <p className="font-bold">{download.name}</p>
            <a href={download.url} download className="px-4 py-2 text-sm font-medium text-white bg-blue-600 rounded-md hover:bg-blue-700">
              دانلود
            </a>
          </li>
        ))}
      </ul>
    </div>
  );
};

export default DownloadsPage;
