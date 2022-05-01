import "./table.scss";
import Table from '@mui/material/Table';
import TableBody from '@mui/material/TableBody';
import TableCell from '@mui/material/TableCell';
import TableContainer from '@mui/material/TableContainer';
import TableHead from '@mui/material/TableHead';
import TableRow from '@mui/material/TableRow';
import Paper from '@mui/material/Paper';

const List = () => {
  const rows = [
    {
      id: 1361606,
      product: "CTC 32 AP32 Digital HD LED TV - Black",
      img: "https://ke.jumia.is/unsafe/fit-in/680x680/filters:fill(white)/product/62/463982/1.jpg?3168",
      customer: "John Doe",
      date: "1 March",
      amount: 12000,
      method: "Cash on Delivery",
      status: "Pending"
    },
    {
      id: 1798454,
      product: "Acer NitrGarnier Pure Active 3 In1 Charcoal Anti Blackhead Mask Wash Scrub -150mlo 5",
      img: "https://ke.jumia.is/unsafe/fit-in/680x680/filters:fill(white)/product/44/255851/1.jpg?0386",
      customer: "Allan Turing",
      date: "1 March",
      amount: 777,
      method: "MPESA",
      status: "Approved"
    },
    {
      id: 9592719,
      product: "A4 Fashion Plain Tshirt Yellow",
      img: "https://ke.jumia.is/unsafe/fit-in/680x680/filters:fill(white)/product/13/541592/1.jpg?0985",
      customer: "Seth Godin",
      date: "1 March",
      amount: 600,
      method: "Credit Card",
      status: "Pending"
    },
    {
      id: 5404025,
      product: "Achaari GURD KERI - SWEET MANGO PICKLE",
      img: "https://ke.jumia.is/unsafe/fit-in/680x680/filters:fill(white)/product/41/648784/1.jpg?5419",
      customer: "Albert Einstein",
      date: "1 March",
      amount: 500,
      method: "MPESA",
      status: "Approved"
    },
    {
      id: 6782095,
      product: "Sony PlayStation 4 Slim 500GB Console, 2 Dual Shock PADS, - Jet Black",
      img: "https://ke.jumia.is/unsafe/fit-in/680x680/filters:fill(white)/product/61/384784/1.jpg?5611",
      customer: "Jared Leto",
      date: "1 March",
      amount: 48999,
      method: "Credit Card",
      status: "Approved"
    },
    {
      id: 7931813,
      product: "Hand Grip Strengthener ~ Medium Resistance.",
      img: "https://ke.jumia.is/unsafe/fit-in/680x680/filters:fill(white)/product/02/686616/1.jpg?0877",
      customer: "Mathias Fringes",
      date: "1 March",
      amount: 655,
      method: "Cash on Delivery",
      status: "Pending"
    },
    {
      id: 8753504,
      product: "Ingco Circular Saw 1400W Industrial",
      img: "https://ke.jumia.is/unsafe/fit-in/680x680/filters:fill(white)/product/56/633123/1.jpg?2517",
      customer: "Lee Byung-Hun",
      date: "1 March",
      amount: 6588,
      method: "Credit card",
      status: "Pending"
    },
  ]

  return (
    <TableContainer component={Paper} className="table">
    <Table sx={{ minWidth: 650 }} aria-label="simple table">
      <TableHead>
        <TableRow>
          <TableCell className="tableCell">Tracking ID</TableCell>
          <TableCell className="tableCell">Product</TableCell>
          <TableCell className="tableCell">Customer</TableCell>
          <TableCell className="tableCell">Date</TableCell>
          <TableCell className="tableCell">Amount</TableCell>
          <TableCell className="tableCell">Payment Method</TableCell>
          <TableCell className="tableCell">Status</TableCell>
        </TableRow>
      </TableHead>
      <TableBody>
        {rows.map((row) => (
          <TableRow
            key={row.id}>
            <TableCell>
              {row.id}
            </TableCell>
            <TableCell className="tableCell">{row.id}</TableCell>
            <TableCell className="tableCell">
              <div className="cellWrapper">
                <img src={row.img} alt="" className="image" />
                {row.product}
              </div>
            </TableCell>
            <TableCell className="tableCell">{row.customer}</TableCell>
            <TableCell className="tableCell">{row.date}</TableCell>
            <TableCell className="tableCell">{row.amount}</TableCell>
            <TableCell className="tableCell">{row.method}</TableCell>
            <TableCell className="tableCell">
              <span className={`status ${row.status}`}>{row.status}</span>
              </TableCell>
          </TableRow>
        ))}
      </TableBody>
    </Table>
  </TableContainer>
  )
}

export default List;