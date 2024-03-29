import React from "react";
import { Table } from 'react-bootstrap';
import { formatDate } from '../utils/global';

export default class ResultListing extends React.Component {

  render() {
    const { results } = this.props

    return (
      <>
        <Table hover responsive>
          <thead>
            <tr>
              <th>#</th>
              <th className="text-left">Họ và tên</th>
              <th>Điểm</th>
              <th>Thời gian hoàn thành</th>
            </tr>
          </thead>
          <tbody>
            {results.length === 0 ? (
              <tr>
                <td colSpan="4">Không có kết quả nào!</td>
              </tr>
            ) :
              results.map((result, index) => {
                return (
                  <tr key={index + 1}>
                    <td>{index + 1}</td>
                    <td className="text-left">{result.nric}</td>
                    <td>{result.result}</td>
                    <td>{`${formatDate(new Date(result.time))} ${new Date(result.time).toLocaleTimeString()}`}</td>
                  </tr>
                )
              })
            }
          </tbody>
        </Table>
      </>
    );
  }
}