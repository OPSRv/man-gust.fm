import { PlayListItems } from "./Mock-PlayListItems";
import { TablePlayList } from "./_PlayListStyles";

const PlayList = () => {
  return (
    <>
      <TablePlayList>
        <tbody>
          <tr>
            <td>#</td>
            <td></td>
            <td>Виконавець</td>
            <td>Назва пісні</td>
            <td>Тривалість</td>
            <td>Прослухано</td>
          </tr>
          {PlayListItems.map((item) => (
            <tr key={item.id}>
              <td>{item.id}</td>
              <td>
                <img src={item.cover} alt="cover" />
              </td>
              <td>{item.band}</td>
              <td>{item.title}</td>
              <td>{item.time}</td>
              <td>{item.playing}</td>
            </tr>
          ))}
        </tbody>
      </TablePlayList>
    </>
  );
};

export { PlayList };
