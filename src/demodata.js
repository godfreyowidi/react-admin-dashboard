export const userColumns = [
  {field: "id", headerName: "ID", width: 70 },
  {
    field: "user",
    headerName: "User",
    width: 230,
    renderCell: (params) => {
      return (
        <div className="cellWithImg">
          <img className="cellImg" src={params.row.img} alt="avatar"/>
          {params.row.username}
        </div>
      );
    },
  },
  {
    field: "email",
    headerName: "Email",
    width: 230,
  },
  {
    field: "age",
    headerName: "Age",
    width: 100,
  },
  {
    field: "status",
    headerName: "Status",
    width: 160,
    renderCell: (params) => {
      return (
        <div className={`cellWithStatus ${params.row.status}`}>
        {params.row.status}
        </div>
      );
    },
  },
];
export const userRows = [
  {
    id: 1,
    username: "Jon Snow",
    img: "https://www.hbo.com/content/dam/hbodata/series/game-of-thrones/character/s5/john-snow-1920.jpg/_jcr_content/renditions/cq5dam.web.1200.675.jpeg",
    status: "active",
    email: "jon@email.com",
    age: 35,
  },
  {
    id: 2,
    username: "Jamie Lannister",
    img: "https://www.hbo.com/content/dam/hbodata/series/game-of-thrones/character/s5/jamie-lannister-1920.jpg/_jcr_content/renditions/cq5dam.web.1200.675.jpeg",
    status: "passive",
    email: "jamie@email.com",
    age: 42,
  },
  {
    id: 3,
    username: "Cersei Lannister",
    img: "https://www.hbo.com/content/dam/hbodata/series/game-of-thrones/character/s5/cersei-lannister-1920.jpg/_jcr_content/renditions/cq5dam.web.1200.675.jpeg",
    status: "pending",
    email: "cersei@email.com",
    age: 40,
  },
  {
    id: 4,
    username: "Arya Stark",
    img: "https://www.hbo.com/content/dam/hbodata/series/game-of-thrones/character/s5/arya-stark-1920.jpg/_jcr_content/renditions/cq5dam.web.1200.675.jpeg",
    status: "active",
    email: "arya@email.com",
    age: 18,
  },
  {
    id: 5,
    username: "Daenerys Targaryen",
    img: "https://www.hbo.com/content/dam/hbodata/series/game-of-thrones/character/s5/daenarys-1920.jpg/_jcr_content/renditions/cq5dam.web.1200.675.jpeg",
    status: "passive",
    email: "daenerys@email.com",
    age: 29,
  },
  {
    id: 6,
    username: "Melisandre",
    img: "https://www.hbo.com/content/dam/hbodata/series/game-of-thrones/character/s5/melisandre-1920.jpg/_jcr_content/renditions/cq5dam.web.1200.675.jpeg",
    status: "pending",
    email: "melisandre@email.com",
    age: 400,
  },
  {
    id: 7,
    username: "Sansa Stark",
    img: "https://www.hbo.com/content/dam/hbodata/series/game-of-thrones/character/s5/sansa-stark-1920.jpg/_jcr_content/renditions/cq5dam.web.1200.675.jpeg",
    status: "active",
    email: "sansa@email.com",
    age: 20,
  },
  {
    id: 8,
    username: "Theon Greyjoy",
    img: "https://www.hbo.com/content/dam/hbodata/series/game-of-thrones/character/s5/theon-greyjoy-1920.jpg/_jcr_content/renditions/cq5dam.web.1200.675.jpeg",
    status: "pending",
    email: "theon@email.com",
    age: 24,
  },
  {
    id: 9,
    username: "Brienne of Tarth",
    img: "https://www.hbo.com/content/dam/hbodata/series/game-of-thrones/character/s5/brienne-of-tarth-1920.jpg/_jcr_content/renditions/cq5dam.web.1200.675.jpeg",
    status: "active",
    email: "brienne@email.com",
    age: 37,
  },
  {
    id: 10,
    username: "Tyrion Lannister",
    img: "https://www.hbo.com/content/dam/hbodata/series/game-of-thrones/character/s5/tyrion-lannister-1920.jpg/_jcr_content/renditions/cq5dam.web.1200.675.jpeg",
    status: "active",
    email: "tyrion@email.com",
    age: 39,
  },
  {
    id: 11,
    username: "Bran Stark",
    img: "https://www.hbo.com/content/dam/hbodata/series/game-of-thrones/character/bran-stark-1920.jpg/_jcr_content/renditions/cq5dam.web.1200.675.jpeg",
    status: "active",
    email: "bran@email.com",
    age: 16,
  },
  {
    id: 12,
    username: "Grey Worm",
    img: "https://www.hbo.com/content/dam/hbodata/series/game-of-thrones/character/s3/grey-worm-1920.jpg/_jcr_content/renditions/cq5dam.web.1200.675.jpeg",
    status: "active",
    email: "grey@email.com",
    age: 35,
  },
  {
    id: 13,
    username: "Margaery Tyrell",
    img: "https://www.hbo.com/content/dam/hbodata/series/game-of-thrones/character/s5/margarey-tyrell-1920.jpg/_jcr_content/renditions/cq5dam.web.1200.675.jpeg",
    status: "active",
    email: "margaery@email.com",
    age: 30,
  },
  {
    id: 14,
    username: "Davos Seaworth",
    img: "https://www.hbo.com/content/dam/hbodata/series/game-of-thrones/character/s5/davos-seaworth-1920.jpg/_jcr_content/renditions/cq5dam.web.1200.675.jpeg",
    status: "active",
    email: "davos@email.com",
    age: 70,
  },
  {
    id: 15,
    username: "Petyr Baelish ('Littlefinger')",
    img: "https://www.hbo.com/content/dam/hbodata/series/game-of-thrones/character/s5/petyr-baelish-1920.jpg/_jcr_content/renditions/cq5dam.web.1200.675.jpeg",
    status: "pending",
    email: "littlefinger@email.com",
    age: 68,
  },
  {
    id: 16,
    username: "Samwell Tarly",
    img: "https://www.hbo.com/content/dam/hbodata/series/game-of-thrones/character/s5/samwell-1920.jpg/_jcr_content/renditions/cq5dam.web.1200.675.jpeg",
    status: "active",
    email: "tarly@email.com",
    age: 37,
  },
  {
    id: 17,
    username: "Sandor Clegane",
    img: "https://www.hbo.com/content/dam/hbodata/series/game-of-thrones/character/s5/sandor-clegane-1920.jpg/_jcr_content/renditions/cq5dam.web.1200.675.jpeg",
    status: "passive",
    email: "sandor@email.com",
    age: 45,
  },
  {
    id: 18,
    username: "Jorah Mormont",
    img: "https://www.hbo.com/content/dam/hbodata/series/game-of-thrones/character/s5/jorah-mormont-1920.jpg/_jcr_content/renditions/cq5dam.web.1200.675.jpeg",
    status: "passive",
    email: "jorah@email.com",
    age: 74,
  },
  {
    id: 19,
    username: "Joffrey Baratheon",
    img: "https://www.hbo.com/content/dam/hbodata/series/game-of-thrones/character/joffrey-baratheon-1920.jpg/_jcr_content/renditions/cq5dam.web.1200.675.jpeg",
    status: "pending",
    email: "joffrey@email.com",
    age: 25,
  },
  {
    id: 20,
    username: "Eddard 'Ned' Stark",
    img: "https://www.hbo.com/content/dam/hbodata/series/game-of-thrones/character/s5/eddard-ned-stark-1920.jpg/_jcr_content/renditions/cq5dam.web.1200.675.jpeg",
    status: "passive",
    email: "ned@email.com",
    age: 80,
  },
];