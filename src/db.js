import bitcoin from "./bitcoin.png";
import ether from "./ether1.png";
import metamask from "./metamask.png";
import solana from "./solana.png";
const data = [
  {
    title: "Bitcoin {BTC}",
    price: "$233,000",
    src: bitcoin,
    change: "+10%",
    TVL: "$10,000",
    popularpairs: [
      { id: 1, src: metamask },
      { id: 2, src: solana },
    ],
  },
  {
    title: "Ethereum {ETH}",
    price: "$1466.45",
    src: ether,
    change: "-11.38%",
    TVL: "$60,000",
    popularpairs: [
      { id: 1, src: solana },
      { id: 2, src: metamask },
    ],
  },
  {
    title: "Shiba Inu  {SHIB}",
    price: "$8,000,000",
    src: metamask,
    change: "-8.1%",
    TVL: "$61,000",
    popularpairs: [
      { id: 1, src: bitcoin },
      { id: 2, src: solana },
      { id: 3, src: metamask },
    ],
  },
];

export default data;
