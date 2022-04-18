import React from "react";
import { PlayListItems } from "../../fake-data/Mock-PlayListItems";
import { TablePlayList, Cover, TableHeaderWrapper } from "./_PlayListStyles";
import Like from "../../assets/svg/other/like.svg";
import UnLike from "../../assets/svg/other/unlike.svg";

const PlayList = () => {
  return (
    <>
      <TablePlayList>
        <TableHeaderWrapper>
          <h1>Пісні</h1>
        </TableHeaderWrapper>

        <tbody>
          <tr>
            <td>#</td>
            <td></td>
            <td>Виконавець</td>
            <td>Назва пісні</td>
            <td>Тривалість</td>
            <td>Вподобання</td>
          </tr>
          {PlayListItems.map((item) => (
            <tr key={item.id}>
              <td>{item.id}</td>
              <td>
                <Cover src={item.cover} alt="cover" />
              </td>
              <td>{item.band}</td>
              <td>{item.title}</td>
              <td>{item.time}</td>
              <td>
                <img src={UnLike} alt="" />
              </td>
            </tr>
          ))}
        </tbody>
      </TablePlayList>
    </>
  );
};

export { PlayList };
