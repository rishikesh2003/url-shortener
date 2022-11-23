import { TextField, Button } from "@mui/material";
import { useState } from "react";
import axios from "axios";

function Form() {
  const [bigURL, setBigURL] = useState("");
  const [data, setData] = useState([]);
  async function shorten(e) {
    e.preventDefault();
    const res = await axios.post("http://localhost:5000/short", {
      url: bigURL,
    });
    await setData(res.data);
    await console.log(data);
  }
  return (
    <form
      onSubmit={(e) => {
        shorten(e);
      }}
      className="form"
    >
      <TextField
        required
        value={bigURL}
        onChange={(e) => {
          setBigURL(e.target.value);
        }}
        id="outlined-basic"
        label="Enter URL"
        variant="outlined"
      />
      <Button type="submit" className="btn" fullWidth variant="contained">
        Shorten URL
      </Button>
      {data && (
        <div>
          {/* <li>
            Chilp.it : <a href={data["chilp.it"]}>{data["chilp.it"]}</a>
          </li> */}
          <li>
            Click.ru : <a href={data["click.ru"]}>{data["click.ru"]}</a>
          </li>
          {/* <li>
            Osdb.link : <a href={data["osdb.link"]}>{data["osdb.link"]}</a>
          </li> */}
        </div>
      )}
    </form>
  );
}

export default Form;
