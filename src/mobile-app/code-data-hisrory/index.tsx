import React from 'react';
import styled from 'styled-components';
import * as appStore from '../store';
import ViewWithTabMenu  from '../components/menu/ViewWithTabMenu';

const Container = styled.div`
  display: flex;
  flex-direction: column;
  width: 100%;
  max-width: 800px;
  margin: 0 auto;
  padding: 20px;
  color: white;
`;

const Header = styled.div`
  display: flex;
  justify-content: space-between;
  align-items: center;
  margin-bottom: 30px;
  width: 100%;
`;

const Title = styled.h2`
  font-size: 24px;
  font-weight: bold;
  margin: 0;
`;

const MenuContainer = styled.div`
  display: flex;
  gap: 10px;
`;

const MenuButton = styled.button`
  background-color: #2c2c2c;
  color: white;
  border: none;
  padding: 8px 16px;
  border-radius: 4px;
  cursor: pointer;
  transition: background-color 0.2s;

  &:hover {
    background-color: #3c3c3c;
  }
`;

const HistoryCard = styled.div`
  background-color: #2c2c2c;
  border-radius: 8px;
  margin-bottom: 16px;
  overflow: hidden;
  transition: transform 0.2s;

  &:hover {
    transform: translateY(-2px);
  }
`;

const CardContent = styled.div`
  padding: 16px;
  display: flex;
  justify-content: space-between;
  align-items: flex-start;
`;

const RecordInfo = styled.div`
  flex-grow: 1;
  cursor: pointer;
`;

const Timestamp = styled.p`
  color: #a0a0a0;
  font-size: 14px;
  margin: 0 0 8px 0;
`;

const SessionId = styled.p`
  font-size: 14px;
  margin: 0;
`;

const DeleteButton = styled.button`
  background: none;
  border: none;
  color: #ff4444;
  cursor: pointer;
  padding: 8px;
  margin-left: 16px;
  font-size: 14px;
  transition: color 0.2s;

  &:hover {
    color: #ff6666;
  }
`;

const EmptyMessage = styled.div`
  text-align: center;
  color: #a0a0a0;
  padding: 40px 0;
  font-size: 16px;
`;

const ManageCodeDataHistory = ({ menuItems, onCodeSelected }) => {
  const codeDataHistory = appStore.getCodeDataHistory();

  const handleDelete = async (recordId) => {
    const historyData = await appStore.getCodeDataHistory();
    const updatedHistory = historyData.filter(record => record.id !== recordId);
    await appStore.saveHistoryData(updatedHistory);
  };

  const formatTime = (timestamp) => {
    const date = new Date(timestamp);
    return date.toUTCString();
  };

  return (
    <ViewWithTabMenu
      menuItems={menuItems}          
    >
      <Header>
        <Title>Code Data History</Title>
        <MenuContainer>
          {menuItems?.map((item, index) => (
            <MenuButton
              key={index}
              onClick={item.onPress}
            >
              {item.menu.title}
            </MenuButton>
          ))}
        </MenuContainer>
      </Header>

      {codeDataHistory.length > 0 ? (
        codeDataHistory.map((record) => (
          <HistoryCard key={record.id}>
            <CardContent>
              <RecordInfo onClick={() => onCodeSelected(record.codeData)}>
                <Timestamp>{formatTime(record.time)}</Timestamp>
                <SessionId>Session ID: {record.id}</SessionId>
              </RecordInfo>
              <DeleteButton onClick={() => handleDelete(record.id)}>
                Delete
              </DeleteButton>
            </CardContent>
          </HistoryCard>
        ))
      ) : (
        <EmptyMessage>
          No history records found
        </EmptyMessage>
      )}
    </ViewWithTabMenu>
  );
};

export  {ManageCodeDataHistory};