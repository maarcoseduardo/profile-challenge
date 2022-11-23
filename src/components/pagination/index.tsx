interface PaginationProps {
  setCurrentPage: React.Dispatch<React.SetStateAction<number>>;
  pages: number;
  currentPage: number;
}

export function Pagination({ setCurrentPage, pages, currentPage }: PaginationProps) {
  return (
    <div className="max-w-[600px] w-full flex flex-wrap mx-auto gap-3 px-8 md:my-4 lg:my-3">
      {Array.from(Array(pages), (items, index) => (
        <button
          className={`w-10 my-2
              ${index === currentPage ?
              ("bg-black text-white rounded-md")
              :
              ("bg-slate-400 text-white rounded-md")}`}
          value={index}
          onClick={(event: any) => setCurrentPage(Number(event.target.value))}
        >
          {index + 1}
        </button>
      ))}
    </div>
  )
}