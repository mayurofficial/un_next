import PublicationComponent from "@components/publication/PublicationComponent";
import { publicationinfo } from "./publicationinfo";
import style from "../../styles/publication.module.css"
import Grid from "@mui/material/Grid";
function Publications() {
  return (
    <>
      <h1 className={style.publication_main_heading}>Publications</h1>
      <Grid
        sx={{ paddingLeft: "0px", maxWidth: "100%" }}
        container
        rowSpacing={1}
        columnSpacing={{ xs: 1, sm: 2, md: 3 }}
      >
        {publicationinfo.map((data) => (
          <Grid key={data.id} item xs={12} sm={12} md={6} xl={6} lg={6}>
            <PublicationComponent
              title={data.title}
              description={data.description}
              image={data.image}
              pdfLink={data.pdfLink}
            />
          </Grid>
        ))}
      </Grid>
    </>
  );
}
export default Publications;
