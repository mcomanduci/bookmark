function DownloadCards({ img, title, version, margin }) {
  return (
    <div className={`flex flex-col w-full py-6 space-y-4 text-center rounded-lg shadow-lg ${margin}`}>
      <div className="flex justify-center">
        <img src={img} alt="" />
      </div>
      <h5 className="pt-6 text-xl font-bold">{title}</h5>
      <p className="text-gray-400">Minimum Version {version}</p>
      <div className="bg-dots bg-repeat-x px-6 pt-6 capitalize">
        <a
          href="#"
          className="block w-full py-3 text-white duration-200 border-2 rounded-lg bg-softBlue hover:text-softBlue hover:bg-white border-softBlue"
        >
          Add & Install Extension
        </a>
      </div>
    </div>
  );
}

export default DownloadCards;
