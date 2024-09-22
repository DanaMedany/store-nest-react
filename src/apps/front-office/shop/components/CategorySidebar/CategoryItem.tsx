// Import the correct types

type CategoryItemProps = {
  img: string;
  name: string;
};

export default function CategoryItem({ img, name }: CategoryItemProps) {
  return (
    <li className="flex items-center border border-solid border-[##F2F3F4] rounded mb-3 px-2 py-4 justify-between font-bold text-mainColor leading-8 cursor-pointer hover:border-[#BCE3C9] hover:shadow-[5px_5px_15px_rgba(0,0,0,0.2)] transition-all delay-200">
      <a
        href="/"
        className="flex items-center p-0 leading-[1.5] text-mainColor text-[14px] max-w-[30px] mr-3 gap-4">
        <img src={img} alt={name} />
        {name}
      </a>
    </li>
  );
}