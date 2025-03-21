import { useEffect, useState } from 'react';
import { Divider } from 'primereact/divider';
import { DataTable } from 'primereact/datatable';
import { Column } from 'primereact/column';
import { Card } from 'primereact/card';
import { TeamRoasterService } from './service/TeamRoasterService';

function App() {
  const [players, setPlayers] = useState([]);

  const [players2, setPlayers2] = useState([]);

  useEffect(() => {
    TeamRoasterService.getTeamRoasterThree().then((data) => {
      setPlayers(data);
    });
    TeamRoasterService.getTeamRoasterThree2().then((data) => {
      setPlayers2(data);
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
      <h3>기본</h3>
      <DataTable value={players} pt={pt}>
        <Column field="team" header="팀"></Column>
        <Column field="s" header="S"></Column>
        <Column field="mb1" header="MB1"></Column>
        <Column field="mb2" header="MB2"></Column>
        <Column field="oh1" header="OH1"></Column>
        <Column field="oh2" header="OH2"></Column>
        <Column field="op" header="OP"></Column>
        <Column field="oh3" header="OH3"></Column>
      </DataTable>
      <Divider></Divider>
      <h3>전대팀</h3>
      <DataTable value={players2} pt={pt}>
        <Column field="team" header="팀"></Column>
        <Column field="s" header="S"></Column>
        <Column field="mb1" header="MB1"></Column>
        <Column field="mb2" header="MB2"></Column>
        <Column field="oh1" header="OH1"></Column>
        <Column field="oh2" header="OH2"></Column>
        <Column field="op" header="OP"></Column>
        <Column field="oh3" header="OH3"></Column>
      </DataTable>
      <Divider></Divider>
      <h2>공지사항</h2>
      <Card>
        <h3>날짜: 2025-03-23</h3>
        <h3>시간: 12:30 ~ 17:00</h3>
        <h3>위치: 양강초등학교 체육관</h3>
        <Divider></Divider>
        <h3>4월 5일에 부산 전대가 예정되어있습니다.<br/>전대 전 2주간 마지막 두 게임은 전대팀을 구성하여 진행할 계획입니다.</h3>
        <h3>C 팀은 아스팍 팀으로 구성되어 팀원 변경 없고, A와 B 팀은 팀원이 변경됩니다.</h3>
      </Card>
    </div>
  );
}

export default App;
