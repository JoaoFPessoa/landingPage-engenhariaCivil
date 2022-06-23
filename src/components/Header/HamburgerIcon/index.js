import { useState } from "react";
import { Container, MobileNavBar } from "./style";

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
      {open && (
        <>
          <div />
          <MobileNavBar>
            <a href="#quem-somos" class="navbar-item">
              Quem somos
            </a>
            <a href="#servicos" class="navbar-item">
              Serviços
            </a>
            <a href="#contato" class="navbar-item">
              Contato
            </a>
          </MobileNavBar>
        </>
      )}
    </Container>
  );
}
