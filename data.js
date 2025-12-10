const JSON_BIN_BASE_URL="https://api.jsonbin.io/v3 ";
const JSON_BIN_ID="69391b3343b1c97be9e3d2ad";
const MASTER_KEY="$2a$10$FfkuWvgueaD7i4YlS0UUeeo.u49.PZ5v40knLY33yO7UWgDrDNsqG";

async function loadData() {
  const config = {
    "headers": {
      "Content-Type":"application/json",
      "X-Master-Key": MASTER_KEY

    }
  }
  const response = await axios.get('${JASON_BIN_BASE_URL}/b/{(JSON BIN ID}/latest');
  console.log(response.data)
}