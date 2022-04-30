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
    img: "https://www.cnet.com/a/img/resize/2dffd95af12cbdb42aa13f73de2ef92795c85f34/hub/2015/06/12/28a28f7e-e993-4781-91c2-b0220168eb08/game-of-thrones1.jpg?auto=webp&width=768",
    status: "active",
    email: "jon@email.com",
    age: 35,
  },
  {
    id: 2,
    username: "Jamie Lannister",
    img: "https://images.squarespace-cdn.com/content/52fc05c9e4b08fc45bd99090/1395777634071-0BIS9DQ60Y8PVN21M6QJ/jaime.jpg?format=1000w&content-type=image%2Fjpeg",
    status: "passive",
    email: "jamie@email.com",
    age: 42,
  },
  {
    id: 3,
    username: "Cersei Lannister",
    img: "https://www.cnet.com/a/img/resize/9459b6f99d2f12b728ff0094294ad3bcedd27411/hub/2015/06/12/d3d93287-c9f4-4b58-a788-f7c27223ce32/cersei-lannister-game-thrones-lena-headey-promo.jpg?auto=webp&width=768",
    status: "pending",
    email: "cersei@email.com",
    age: 40,
  },
  {
    id: 4,
    username: "Arya Stark",
    img: "https://static.wikia.nocookie.net/gameofthrones/images/b/be/AryaShipIronThrone.PNG/revision/latest/scale-to-width-down/374?cb=20190520174300",
    status: "active",
    email: "arya@email.com",
    age: 18,
  },
  {
    id: 5,
    username: "Daenerys Targaryen",
    img: "https://www.cnet.com/a/img/resize/f0780640adaf24b5b3ce7f828b214fc60e6ea54e/hub/2015/06/12/6abdab06-259b-4338-86a6-ea78d592073e/daenarys-1280.jpg?auto=webp&width=768",
    status: "passive",
    email: "daenerys@email.com",
    age: 29,
  },
  {
    id: 6,
    username: "Melisandre",
    img: "https://static.wikia.nocookie.net/gameofthrones/images/1/1c/Melisandre8x01.PNG/revision/latest/scale-to-width-down/312?cb=20190429175309",
    status: "pending",
    email: "melisandre@email.com",
    age: 400,
  },
  {
    id: 7,
    username: "Sansa Stark",
    img: "https://www.mensjournal.com/wp-content/uploads/mf/sophie-turner-1_0.jpg?w=800&quality=78&strip=all",
    status: "active",
    email: "sansa@email.com",
    age: 20,
  },
  {
    id: 8,
    username: "Theon Greyjoy",
    img: "https://static.wikia.nocookie.net/gameofthrones/images/7/78/TheonS8E1.PNG/revision/latest/scale-to-width-down/435?cb=20190415192721",
    status: "pending",
    email: "theon@email.com",
    age: 24,
  },
  {
    id: 9,
    username: "Brienne of Tarth",
    img: "https://static.wikia.nocookie.net/gameofthrones/images/a/a9/S8_Brienne_Profil.jpg/revision/latest/scale-to-width-down/310?cb=20190423165941",
    status: "active",
    email: "brienne@email.com",
    age: 37,
  },
  {
    id: 10,
    username: "Tyrion Lannister",
    img: "https://www.cnet.com/a/img/resize/ef20e914ff6d6bf2f3d6e709e09cb71ab7772562/hub/2015/06/12/a01b748f-8360-427d-a070-f7b88a09795a/tyrion.jpg?auto=webp&width=768",
    status: "active",
    email: "tyrion@email.com",
    age: 39,
  },
];