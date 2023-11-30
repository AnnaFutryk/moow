import { ReactComponent as MessageSquare } from "../../images/message-square.svg";
import { ReactComponent as BuildingsSvg } from "../../images/buildings.svg";
import { ReactComponent as UserSvg } from "../../images/user.svg";
import { ReactComponent as BellSvg } from "../../images/bell.svg";
import { ReactComponent as MessageSvg } from "../../images/message.svg";
import { List } from "./HeaderIconList.styled";

const HeaderIconsList = () => {
  return (
    <List>
      <li>
        <MessageSquare />
      </li>
      <li>
        <BuildingsSvg />
      </li>
      <li>
        <UserSvg />
      </li>
      <li>
        <BellSvg />
      </li>
      <li>
        <MessageSvg />
      </li>
    </List>
  );
};

export default HeaderIconsList;
