import React from 'react'
import { Outlet } from 'react-router-dom'
import Header from '../components/Header/Header'
import { useSelector } from 'react-redux'
import SearchBox from '../components/SearchBox/SearchBox';

export default function Layout() {
  const { searchText } = useSelector((state) => state.searchUsers);

  return (
    <>
      <Header />
      {searchText && <SearchBox />}
      <Outlet />
    </>
  )
}
