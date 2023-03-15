import PersonIcon from "@mui/icons-material/Person";
import AddShoppingCartIcon from "@mui/icons-material/AddShoppingCart";
import AccountBalanceWalletIcon from '@mui/icons-material/AccountBalanceWallet';
import AttachMoneyIcon from '@mui/icons-material/AttachMoney';
import "../component/card/card.scss"
export const CardDetails = [
  {
    users: "USERS",
    totUsers: "720",
    icon: <PersonIcon className="cardIcons users" />,
    link:"See all users"
  },
  {
    users: "ORDERS",
    totUsers: "260",
    icon: <AddShoppingCartIcon className="cardIcons users" />,
    link:"View all orders"

  },
  {
    users: "EARNINGS",
    totUsers: "$ 4.7k",
    icon: <AttachMoneyIcon className="cardIcons users" />,
    link:"View all earnings"

  },
  {
    users: "MY BALANCE",
    totUsers: "$ 7.9k",
    icon: <AccountBalanceWalletIcon className="cardIcons users" />,
    link:"See details"

  },
];
