import { Icon } from "semantic-ui-react";

function Link({ uri, icon }) {
  return (
    <a href={uri} target="_blank" rel="noreferrer" style={{ color: "black" }}>
      <Icon name={icon} size="big" />
    </a>
  );
}

function Footer() {
  return (
    <footer>
      <Link
        uri={"https://github.com/ddoktorski/lottery-dapp"}
        icon={"github"}
      />
      <Link
        uri={
          "https://sepolia.etherscan.io/address/0xf17470774b81039B55cd02f0A9851e7A250FF973"
        }
        icon={"ethereum"}
      />
    </footer>
  );
}

export default Footer;
