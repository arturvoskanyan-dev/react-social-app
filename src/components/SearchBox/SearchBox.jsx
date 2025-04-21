import React from 'react'
import { useSelector } from 'react-redux'
import SearchItems from '../SearchItems/SearchItems';

export default function SearchBox() {
    const { users } = useSelector((state) => state.searchUsers);

    return (
        <section className='fixed top-20 z-50 bg-white shadow-2xl p-4 w-[300px] max-h-[400px] overflow-y-scroll rounded-2xl'>
            <div className='flex flex-col gap-3'>
                {users?.items?.map((user) => <SearchItems key={user.id} user={user} />)}
                {users?.items?.length > 0 === false && <h2 className='text-xl font-medium'>User Not Found</h2>}
            </div>
        </section>
    )
}
