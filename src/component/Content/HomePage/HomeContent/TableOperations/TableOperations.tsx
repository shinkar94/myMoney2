import React from 'react';
import {useAppSelector} from "../../../../../Hok/useAppSelector";
import styled from "styled-components";
import filterDown from "../../../../../img/filterDown.svg"
import filterUp from "../../../../../img/filterUp.svg"

export const TableOperations = () => {
    const state = useAppSelector(state => state.allState)
    return (
        <TableWrapper>
            <Table>
                <thead>
                <tr>
                    <th>
                        <div>
                            date
                            <button>
                            </button>
                        </div>
                    </th>
                    <th>
                        <div>
                            name
                            <button>
                            </button>
                        </div>
                    </th>
                    <th>
                        <div>
                            sum
                            <button>
                            </button>
                        </div>
                    </th>
                    <th>
                        <div>
                            type
                            <button>
                            </button>
                        </div>
                    </th>
                    <th>
                        <div>
                            category
                            <button>
                            </button>
                        </div>
                    </th>
                </tr>
                </thead>
                <tbody>
                {state.map(item => {
                    return (
                        <tr key={item.id}>
                            <td>{item.date}</td>
                            <td>{item.name}</td>
                            <td>{item.value}</td>
                            <td>{item.type}</td>
                            <td>{item.category}</td>
                        </tr>
                    )
                })}
                </tbody>
            </Table>
        </TableWrapper>

    );
};
const TableWrapper = styled.div`
  height: 350px;
  overflow: auto;
  min-width: 60%;
  border: 2px solid black;
`

const Table = styled.table`
  width: 100%;
  border-collapse: separate;
  border-spacing: 0;

  text-align: center;

  & thead {
    position: sticky;
    top: 0;
    background: black;
    color: aliceblue;

    & tr th {
      border: 1px solid white;

      & div {
        display: flex;
        justify-content: center;

        & button {
          background-image: url(${filterDown});
          background-repeat: no-repeat;
          background-position: center;
          background-size: 15px;
          background-color: transparent;
          border: none;
          padding: 10px 10px;
          cursor: pointer;
        }
      }

    }
  }

  & tbody tr {
    height: 60px;

    & td {
      border-left: 1px solid rgba(0, 0, 0, 0.7);
      border-right: 1px solid rgba(0, 0, 0, 0.7);
    }

  }
`




