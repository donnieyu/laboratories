import { useEffect, useState } from 'react';
import { Divider } from 'primereact/divider';
import { DataTable } from 'primereact/datatable';
import { Column } from 'primereact/column';
import { Card } from 'primereact/card';
import { ProductService } from './service/ProductService';

function App() {
  const [players, setPlayers] = useState([]);

  useEffect(() => {
    ProductService.getProductsMini().then((data) => {
      setPlayers(data);
    });
  }, []);

  const pt = {
    table: {
      style: {
        minWidth: '50rem',
      }
    },
    column: {
      headerContent: {
        style: {
          justifyContent: 'center',
        },
      },
      root: {
        style: {
          textAlign: 'center',
        },
      },
    },
  };

  return (
    <div>
      <h1>뉴배동 팀편성 및 공지사항</h1>
      <Divider></Divider>
      <h2>팀편성</h2>
      <DataTable value={players} pt={pt}>
        <Column field="team" header="팀"></Column>
        <Column field="s" header="S"></Column>
        <Column field="mb1" header="MB1"></Column>
        <Column field="mb2" header="MB2"></Column>
        <Column field="oh1" header="OH1"></Column>
        <Column field="oh2" header="OH2"></Column>
        <Column field="op" header="OP"></Column>
      </DataTable>
      <Divider></Divider>
      <h2>공지사항</h2>
      <Card>
        <h3>날짜: 2025-03-09</h3>
        <h3>시간: 12:30 ~ 17:00</h3>
        <h3>위치: 양강초등학교 체육관</h3>
        <Divider></Divider>
        <h3>네 팀이므로 1시 10분에 경기 시작하려 합니다.</h3>
      </Card>
    </div>
  );
}

export default App;
