import {
  ListItemButton,
  List,
  ListItem,
  ListItemIcon,
  ListItemText,
  Typography,
} from "@mui/material";
import Image from "next/image";
import "@fontsource/roboto";
import style from "../../styles/TableHeader.module.css";

const GridNav = (props) => {
  return (
    <List className={style.commaonBorder}>
      {props.data.map((item) => (
        <ListItem className="sidebar" key={item.key} onClick={()=>{props.name(item.name)}}>
          <ListItemButton className="sidebar_item_container">
            <ListItemIcon className="svg_container">
              <Image
                className="svg_icon"
                src={item.iconSrc}
                alt={item.name}
                height="20"
                width="25"
              />
            </ListItemIcon>
            <ListItemText >
              <Typography
                style={{ margin: "0", opacity: "0.9" }}
                variant="body2"
                gutterBottom
                component="div"
              >
                {item.name}
              </Typography>
            </ListItemText>
          </ListItemButton>
        </ListItem>
      ))}
    </List>
  );
};

export default GridNav;
