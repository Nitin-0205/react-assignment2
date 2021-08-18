import Header from "./components/Header";
import Section from "./components/Section";
import "./index.css"

function App() {

  const data = [{
    image:"https://mdbootstrap.com/img/Mockups/Lightbox/Thumbnail/img%20(67).jpg",
    title:"Web Devop",
    desc:"Loremasdfasdfas  as as as d asfasrfdgweit  ugtu9ewrt9w ew gweu98guwe9tuwe9j d geij9e jt9"
  },
  {
    image:"https://www.w3schools.com/bootstrap4/img_avatar3.png",
    title:"Java",
    desc:"Loremasdfasdfas  as as as d asfasrfdgweit  ugtu9ewrt9w ew gweu98guwe9tuwe9j d geij9e jt9"
  },{
    image:"https://www.w3schools.com/bootstrap4/img_avatar3.png",
    title:"python",
    desc:"Loremasdfasdfas  as as as d asfasrfdgweit  ugtu9ewrt9w ew gweu98guwe9tuwe9j d geij9e jt9"
  },
  {
    image:"https://mdbootstrap.com/img/Mockups/Lightbox/Thumbnail/img%20(67).jpg",
    title:"C / C++",
    desc:"Loremasdfasdfas  as as as d asfasrfdgweit  ugtu9ewrt9w ew gweu98guwe9tuwe9j d geij9e jt9"
  },
  {
    image:"https://mdbootstrap.com/img/Mockups/Lightbox/Thumbnail/img%20(67).jpg",
    title:"HTML",
    desc:"Loremasdfasdfas  as as as d asfasrfdgweit  ugtu9ewrt9w ew gweu98guwe9tuwe9j d geij9e jt9"
  },
  {
    image:"https://mdbootstrap.com/img/Mockups/Lightbox/Thumbnail/img%20(67).jpg",
    title:"CSS",
    desc:"Loremasdfasdfas  as as as d asfasrfdgweit  ugtu9ewrt9w ew gweu98guwe9tuwe9j d geij9e jt9"
  },
  {
    image:"https://mdbootstrap.com/img/Mockups/Lightbox/Thumbnail/img%20(67).jpg",
    title:"JavaScript",
    desc:"Loremasdfasdfas  as as as d asfasrfdgweit  ugtu9ewrt9w ew gweu98guwe9tuwe9j d geij9e jt9"
  },

  ];
  return (<div>
          <Header/>
          <div className="cards" >
      {
        data.map((value,index)=>{
          return(
            <Section img = {value.image} title = {value.title} desc ={value.desc}/>
            );
        })
      }
    </div>
  </div>
  );
}

export default App;
