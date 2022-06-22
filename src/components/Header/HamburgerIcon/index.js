import { useState } from "react/cjs/react.development";
import { Container } from "./style";

export default function BurgerIcon() {
  const [open, setOpen] = useState(false);
  console.debug(open);
  function handleClick() {
    setOpen(!open);
  }
  return (
    <Container onClick={handleClick}>
      <div className={open ? "menu-btn-open" : "menu-btn"}>
        <div className="menu-btn_burger"></div>
      </div>
    </Container>
  );
}
