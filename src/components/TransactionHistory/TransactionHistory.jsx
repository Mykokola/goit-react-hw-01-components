import PropTypes from 'prop-types';
import { Table,Thead,Tr,Th } from './TransactionHistory.styled';
const TransactionHistory = ({items}) => {
    return (
<Table className="transaction-history">
  <Thead>
    <Tr>
      <Th>Type</Th>
      <Th>Amount</Th>
      <Th>Currency</Th>
    </Tr>
  </Thead>
  <tbody>
    {items.map(e => (
  <Tr key={e.id}>
  <Th>{e.type}</Th>
  <Th>{e.amount}</Th>
  <Th>{e.currency}</Th>
</Tr>
    ))}
  
  </tbody>
</Table>
    )
}
export default TransactionHistory