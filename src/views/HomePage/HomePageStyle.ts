import styled from "styled-components";

export const Container = styled.div`
  display: flex;
  flex-direction: column;
  align-items: center;
  padding: 20px;
  background-color: #eef5ff;
  min-height: 100vh;
`;

export const Header = styled.h1`
  font-size: 2.5rem;
  color: #003f91;
  margin-bottom: 20px;
`;

export const TablesWrapper = styled.div`
  display: flex;
  justify-content: space-around;
  width: 100%;
  max-width: 1200px;
  gap: 20px;
`;

export const TableWrapper = styled.div`
  flex: 1;
  background: #ffffff;
  border-radius: 8px;
  box-shadow: 0 4px 6px rgba(0, 0, 0, 0.1);
  padding: 20px;
  transition: transform 0.2s, box-shadow 0.2s;

  &:hover {
    transform: translateY(-5px);
    box-shadow: 0 6px 10px rgba(0, 0, 0, 0.15);
  }
`;

export const TableHeader = styled.h2`
  font-size: 1.5rem;
  color: #0074d9;
  margin-bottom: 10px;
  text-align: center;
`;

export const Table = styled.table`
  width: 100%;
  border-collapse: collapse;
`;

export const TableRow = styled.tr`
  &:nth-child(even) {
    background-color: #f1f7ff;
  }

  &:hover {
    background-color: #d6ebff;
  }
`;

export const TableCell = styled.td`
  padding: 10px;
  border: 1px solid #cce7ff;
  text-align: left;
  font-size: 1rem;
  color: #555;

  &:first-child {
    text-align: center;
    width: 50px;
    font-weight: bold;
    color: #003f91;
  }
`;
