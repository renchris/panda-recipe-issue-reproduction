import type { TableProps } from './Table'
import * as Table from './Table'

const productData = [
  {
    id: 'P001', name: 'MacBook Pro', stock: 12, price: '$1999.00',
  },
  {
    id: 'P002', name: 'AirPods Pro', stock: 25, price: '$249.00',
  },
  {
    id: 'P003', name: 'Leather Wallet', stock: 50, price: '$79.00',
  },
]

export const ItemTable = (props: TableProps) => (
  <Table.Root {...props}>
    <Table.Caption>Product Inventory</Table.Caption>
    <Table.Head>
      <Table.Row>
        <Table.Header>ID</Table.Header>
        <Table.Header>Name</Table.Header>
        <Table.Header>Stock</Table.Header>
        <Table.Header textAlign="right">Price</Table.Header>
      </Table.Row>
    </Table.Head>
    <Table.Body>
      {productData.map((product) => (
        <Table.Row key={product.id}>
          <Table.Cell fontWeight="medium">{product.id}</Table.Cell>
          <Table.Cell>{product.name}</Table.Cell>
          <Table.Cell>{product.stock}</Table.Cell>
          <Table.Cell textAlign="right">{product.price}</Table.Cell>
        </Table.Row>
      ))}
    </Table.Body>
    <Table.Footer>
      <Table.Row>
        <Table.Cell colSpan={2}>Totals</Table.Cell>
        <Table.Cell>87</Table.Cell>
        <Table.Cell textAlign="right">$34,163.00</Table.Cell>
      </Table.Row>
    </Table.Footer>
  </Table.Root>
)

export default ItemTable
