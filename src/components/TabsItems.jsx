function TabItems({ title, target, active, click, id }) {
  return (
    <div
      className="flex justify-center cursor-pointer text-center text-gray-600 border-b md:border-b-0 hover:text-softRed md:w-1/3 tab"
      target={target}
      onClick={click}
      id={id}
    >
      <div
        className={`py-5 border-b-4 ${active === id ? "border-softRed" : ""}`}
        target={target}
      >
        {title}
      </div>
    </div>
  );
}

export default TabItems;
