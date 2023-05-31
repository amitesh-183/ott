export default function Sections({ url, heading }) {
  return (
    <>
      <div className="py-4 cursor-pointer">
        <img className="h-72 rounded-xl hover:shadow-md duration-200 hover:shadow-gray-900" src={url} alt="category" />
      </div>
    </>
  );
}
