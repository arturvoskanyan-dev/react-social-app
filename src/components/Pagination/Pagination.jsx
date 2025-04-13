import React, { useState } from 'react'
import { changePageAC } from '../../store/action/usersAction';
import { useSelector } from 'react-redux';
import PaginationButton from '../PaginationButton/PaginationButton';

export default function Pagination({ dispatch }) {
    const [portionNumber, setPortionNumber] = useState(1);
    const { page, totalUsersCount, totalUsersPageCount } = useSelector((state) => state.usersPage)

    let leftPortionSize = (portionNumber - 1) * 10 + 1;
    let rightPortionSize = portionNumber * 10;
    const buttonsCount = Math.ceil(totalUsersCount / totalUsersPageCount);
    const buttons = [];

    const endButton = Math.ceil(buttonsCount / 10);

    for (let i = 1; i <= buttonsCount; i++) {
        buttons.push(i)
    }

    const changePage = (page) => {
        dispatch(changePageAC(page))
    }

    return (
        <div className="p-4 flex justify-center">
            {portionNumber > 1 &&
                <PaginationButton Icon={"GrPrevious"} click={() => setPortionNumber(portionNumber - 1)} />
            }
            {buttons.filter((p) => p >= leftPortionSize && p <= rightPortionSize).map((p) =>
                <PaginationButton
                    key={p} click={() => changePage(p)} Icon={p}
                    style={p === page && "bg-primary-bg text-white"}
                />
            )}
            {endButton > portionNumber &&
                <PaginationButton Icon={"GrNext"} click={() => setPortionNumber(portionNumber + 1)} />
            }
        </div>
    )
}
