import { useState } from "react";
import { useUsers } from "../../context";
import { Pagination } from "../pagination";
import { UsersResponsiveList } from "./usersResponsiveList";
import { UsersTableList } from "./usersTableList";

export function UsersList() {

  const { usersList } = useUsers();
  const [itemsPerPage, setItemsPerPage] = useState(10);
  const [currentPage, setCurrentPage] = useState(0);

  const pages = Math.ceil(usersList.length / itemsPerPage)
  const startIndex = currentPage * itemsPerPage;
  const endIndex = startIndex + itemsPerPage;
  const currentItems = usersList.slice(startIndex, endIndex);

  return (
    <>
      <UsersTableList currentItems={currentItems} />
      <UsersResponsiveList currentItems={currentItems} />
      <Pagination
        setCurrentPage={setCurrentPage}
        pages={pages}
        currentPage={currentPage}
      />
    </>
  );
}
